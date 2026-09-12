# AWS S3 + CloudFront Production Deployment Guide

## Live Production Endpoints

* **Live CloudFront Website URL**: [https://d1ysaacn5i0a8b.cloudfront.net](https://d1ysaacn5i0a8b.cloudfront.net)
* **Private S3 Origin Bucket**: `s3://chandresh-portfolio-135100771834` (`us-east-1`)
* **CloudFront Distribution ID**: `E2UDQ9W2U16YA3`
* **Origin Access Control (OAC) ID**: `E1V25P9T0RCWE8`

---

## 1. Architecture Overview

```text
GitHub Repository
       ↓
React + Vite + TypeScript (Build Pipeline)
       ↓
  npm run build
       ↓
  Static Output (`dist/`)
       ↓
Amazon S3 (Private Object Storage)
       ↓ (Origin Access Control / OAC)
Amazon CloudFront (Edge Distribution + HTTPS + Gzip/Brotli)
       ↓
Visitors / Custom Domain
```

### Key Architectural Principles
* **100% Static Frontend**: Pure client-side static build requiring zero Node.js/Express server runtime, zero backend daemons, and zero database dependencies.
* **Private S3 Bucket**: The S3 origin bucket remains completely private (Public Access Blocked). No direct public URLs to S3 are permitted.
* **Origin Access Control (OAC)**: CloudFront securely fetches objects from the private S3 bucket using AWS's modern SigV4-authenticated Origin Access Control.
* **Edge Caching & Compression**: Assets in `assets/` with content hashes are cached long-term at CloudFront edge locations with automatic Gzip and Brotli compression.

---

## 2. Local Build Verification

Before deploying, create the production bundle locally:

```bash
# 1. Install dependencies
npm install

# 2. Compile TypeScript and generate static bundle
npm run build

# 3. (Optional) Preview production build locally
npm run preview
```

### Expected Output (`dist/`)
The build creates the `dist/` directory ready for S3 upload:
```text
dist/
├── index.html
├── favicon.svg
├── profile.png
├── minimaltab.png
├── vicevibe.png
├── webcraft.jpg
├── minecraft-infra.png
├── pterodactyl.png
├── assets/
│   ├── index-*.css               (Tailwind + Custom Styles)
│   ├── index-*.js                (Main Application & Section Components)
│   ├── vendor-react-*.js         (React & ReactDOM runtime)
│   ├── vendor-animation-*.js     (Motion & GSAP animations)
│   ├── vendor-three-*.js         (Three.js runtime)
│   └── vendor-icons-*.js         (Feather & Brand icons)
└── images/
    └── ...
```

---

## 3. Step-by-Step AWS Setup

### Step A: Create the Private S3 Bucket

1. Open the **Amazon S3 Console** (`https://s3.console.aws.amazon.com/`).
2. Click **Create bucket**.
3. **Bucket name**: Choose a unique name (e.g. `chandresh-portfolio-prod`).
4. **AWS Region**: Select your preferred region (e.g. `us-east-1` or `ap-south-1`).
5. **Block Public Access settings**: Keep **Block *all* public access** checked (ENABLED).
6. **Bucket Versioning**: Optional (Enabled recommended for rollback capability).
7. **Default encryption**: Server-side encryption with Amazon S3 managed keys (SSE-S3).
8. Click **Create bucket**.

---

### Step B: Create the CloudFront Distribution with OAC

1. Open the **Amazon CloudFront Console** (`https://console.aws.amazon.com/cloudfront/`).
2. Click **Create distribution**.
3. **Origin domain**: Select your S3 bucket from the dropdown (`chandresh-portfolio-prod.s3.amazonaws.com`).
4. **Origin access**:
   * Select **Origin access control settings (recommended)**.
   * Click **Create control setting** (Name: `chandresh-portfolio-oac`, Signing behavior: `Sign requests (recommended)`, Origin type: `S3`).
5. **Default cache behavior**:
   * **Viewer protocol policy**: Select **Redirect HTTP to HTTPS**.
   * **Allowed HTTP methods**: `GET, HEAD`.
   * **Cache policy**: `CachingOptimized` (recommended).
   * **Compress objects automatically**: **Yes** (Gzip & Brotli enabled).
6. **Settings**:
   * **Price class**: `Use all edge locations` (or `North America & Europe` depending on budget).
   * **Default root object**: Set to **`index.html`** *(critical)*.
7. Click **Create distribution**.
8. **Copy Policy Prompt**: CloudFront will show a yellow banner with the required **S3 bucket policy**. Click **Copy policy**.

---

### Step C: Attach the Bucket Policy to S3

1. Return to the **Amazon S3 Console** and select your bucket.
2. Go to the **Permissions** tab → **Bucket policy** → Click **Edit**.
3. Paste the copied policy (or use the template below, replacing `<BUCKET-NAME>`, `<ACCOUNT-ID>`, and `<DISTRIBUTION-ID>`):

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "AllowCloudFrontServicePrincipalReadOnly",
      "Effect": "Allow",
      "Principal": {
        "Service": "cloudfront.amazonaws.com"
      },
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::<BUCKET-NAME>/*",
      "Condition": {
        "StringEquals": {
          "AWS:SourceArn": "arn:aws:cloudfront::<ACCOUNT-ID>:distribution/<DISTRIBUTION-ID>"
        }
      }
    }
  ]
}
```
4. Click **Save changes**.

---

### Step D: Client-Side Routing & Custom Error Responses

The portfolio uses single-page anchor navigation:
* `#home` (Introduction & Hero)
* `#about` (About Me & ProfileCard)
* `#builds` (Selected Builds & Modal Blueprint)
* `#sidequests` (Off-Resume Lab & Modding)
* `#skills` (Technical Stack Index)
* `#cloud` (Cloud Architecture & Leadership)
* `#contact` (Direct Inquiries & Channels)

Because all sections exist within `index.html`, pure anchor navigation never triggers a 404. However, to ensure resilience against direct deep links, browser path traversals, or S3 private permission 403 responses:

1. In your **CloudFront Distribution**, click the **Error pages** tab.
2. Click **Create custom error response**:
   * **HTTP error code**: `403: Forbidden`
   * **Customize error response**: `Yes`
   * **Response page path**: `/index.html`
   * **HTTP response code**: `200: OK`
3. Repeat for:
   * **HTTP error code**: `404: Not Found`
   * **Response page path**: `/index.html`
   * **HTTP response code**: `200: OK`

---

## 4. Uploading Static Files (Deployment)

### Option 1: AWS CLI (Recommended Workflow)

Ensure AWS CLI is installed and configured (`aws configure`):

```bash
# 1. Build the production bundle
npm run build

# 2. Sync hashed assets with immutable long-term caching
aws s3 sync dist/assets s3://<BUCKET-NAME>/assets \
  --delete \
  --cache-control "public, max-age=31536000, immutable"

# 3. Sync remaining files (index.html, images, favicon) with short-lived cache
aws s3 sync dist s3://<BUCKET-NAME> \
  --delete \
  --exclude "assets/*" \
  --cache-control "public, max-age=0, must-revalidate"

# 4. Invalidate CloudFront edge cache so changes appear immediately
aws cloudfront create-invalidation \
  --distribution-id <DISTRIBUTION-ID> \
  --paths "/*"
```

### Option 2: AWS S3 Console (Manual Upload)

1. Run `npm run build` locally.
2. Open your S3 bucket in the AWS Console.
3. Click **Upload**.
4. Drag and drop **all files and folders from inside `dist/`** into the upload area (make sure `index.html`, `assets/`, `images/`, and root images are uploaded).
5. Click **Upload**.
6. In CloudFront, go to **Invalidations** → **Create invalidation** → enter `/*` → click **Create invalidation**.

---

## 5. Deployment Verification Checklist

```text
[ ] npm install completed without errors
[ ] npm run build succeeded and generated dist/
[ ] Verify dist/ contains index.html, assets/, and images
[ ] Create private S3 bucket (Block all public access enabled)
[ ] Upload dist/ contents to S3 bucket root
[ ] Create CloudFront distribution with S3 bucket as origin
[ ] Configure Origin Access Control (OAC)
[ ] Attach S3 bucket policy allowing CloudFront OAC read access
[ ] Set index.html as Default root object in CloudFront
[ ] Configure custom error responses (403/404 → /index.html)
[ ] Verify Viewer Protocol Policy redirects HTTP to HTTPS
[ ] Open CloudFront distribution URL (https://<dist-id>.cloudfront.net)
[ ] Test desktop layout and navigation
[ ] Test mobile layout and hamburger/bubble menu
[ ] Test section scrolling (#about, #builds, #sidequests, #skills, #cloud, #contact)
[ ] Test project inspection modal (MoodScape, MinimalTab, etc.)
[ ] Test static images (profile.png, minimaltab.png, vicevibe.png, etc.)
[ ] Test GitHub link (opens https://github.com/Chandresh-007)
[ ] Test LinkedIn link (opens https://www.linkedin.com/in/chandresh-p/)
[ ] Test Email link (triggers mailto:chandreshking538.p@gmail.com)
[ ] Test verified milestone badge & border glow animations
```

---

## 6. Environment & Security Hygiene

* **Zero Credentials in Bundle**: No AWS access keys, secret keys, IAM credentials, or private tokens exist in the source or bundle.
* **No Amplify Dependencies**: The portfolio hosting has no dependency on AWS Amplify Hosting CLI or `amplify.yml`. (MoodScape's architectural mention of Amplify remains an accurate description of that project's independent cloud stack).
* **Relative Base Path**: Vite is configured with `base: '/'`, ensuring all asset URLs cleanly resolve against the CloudFront distribution domain root.
