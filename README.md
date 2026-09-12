<div align="center">

# 🔥 CHANDRESH P — PORTFOLIO

**`BUILDING THINGS. TO FIND OUT HOW THEY WORK.`**

Personal engineering workspace of a 3rd-year Computer Science student, AWS SBG Tech Lead, and relentless builder — built from scratch with React 19, TypeScript, Three.js, GSAP, and Motion.

[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=white)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vite.dev)
[![Three.js](https://img.shields.io/badge/Three.js-r186-000000?style=flat-square&logo=threedotjs&logoColor=white)](https://threejs.org)
[![GSAP](https://img.shields.io/badge/GSAP-3.15-88CE02?style=flat-square&logo=greensock&logoColor=white)](https://gsap.com)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Motion](https://img.shields.io/badge/Motion-13-FF4154?style=flat-square&logo=framer&logoColor=white)](https://motion.dev)

</div>

---

## ✦ WHAT IS THIS

Not a template. Not a theme. This is a handcrafted, editorial-style developer portfolio designed to feel like a **personal engineering workspace** — with real projects, real architecture diagrams, and zero fabricated metrics.

Every section, animation, and interaction was built from the ground up. No UI kits, no component libraries, no shortcuts.

---

## ✦ LIVE SECTIONS

| # | Section | What's Inside |
|---|---------|---------------|
| 01 | **Hero** | Laser-flow WebGL background · gradient animated text · split-flap status ticker |
| 02 | **Stats** | Real-time animated counters — 10+ builds, 8+ AWS services, 3 production releases |
| 03 | **About Me** | Interactive 3D profile card with tilt + glow effects |
| 04 | **Selected Builds** | Flagship MoodScape showcase with border-glow · accordion gallery · full project ledger |
| 05 | **Side Quests** | Off-resume lab: Minecraft infra, browser extensions, game modding |
| 06 | **Skills** | Infinite logo-loop marquee of the full technical stack |
| 07 | **Workbench** | Active research areas: AI agents, DSP, cloud infra, game networking, GATE prep |
| 08 | **Cloud Practice** | AWS service map — Lambda, Bedrock, S3, EventBridge, Amplify, SNS, SageMaker, Polly |
| 09 | **Contact** | Border-glow direct email with social links |

---

## ✦ CUSTOM COMPONENTS

Every interactive element is a custom React component — no external UI library:

```
src/components/reactbits/
├── LaserFlow.tsx          # WebGL laser-beam background (Three.js + shaders)
├── SplitFlapText.tsx      # Mechanical split-flap display animation
├── GradientText.tsx       # Animated multi-color gradient text
├── AccordionGallery.tsx   # Expandable image panels with overlay details
├── BorderGlow.tsx         # Mouse-tracking glow border effect
├── ProfileCard.tsx        # Interactive 3D tilt card with parallax
├── ClickSpark.tsx         # Click-triggered spark particle bursts
├── CountUp.tsx            # Animated number counter on scroll
├── LogoLoop.tsx           # Infinite marquee logo carousel
├── LineSidebar.tsx        # Scroll-progress edge indicator
├── BubbleMenu.tsx         # Floating bubble navigation
└── ScrollExpand.tsx       # Scroll-driven expansion animation
```

---

## ✦ TECH STACK

```
FRONTEND        React 19 · TypeScript 6 · Vite 8
STYLING         Tailwind CSS 3.4 · Custom CSS variables · Dark-mode first
ANIMATION       GSAP 3.15 · Motion 13 · CSS keyframes
3D / WebGL      Three.js r186 · Custom GLSL shaders
ICONS           Lucide React · React Icons
FONTS           Inter · JetBrains Mono · Space Grotesk (Google Fonts)
TOOLING         Oxlint · PostCSS · Autoprefixer
```

---

## ✦ ARCHITECTURE HIGHLIGHTS

- **Dark-mode first** — forced dark by default with theme persistence
- **Lazy-loaded sections** — `React.lazy()` + `Suspense` for everything below the fold
- **Zero UI dependencies** — every component is hand-rolled
- **Editorial typography** — monospaced metadata strips, display headlines, technical indexes
- **Responsive** — fully mobile-optimized from 320px to ultrawide
- **SEO-ready** — Open Graph, Twitter Cards, structured meta, semantic HTML5

---

## ✦ QUICK START

```bash
# Clone
git clone https://github.com/Chandresh-007/Portfolio.git
cd Portfolio

# Install
npm install

# Dev server
npm run dev

# Production build
npm run build
```

---

## ✦ PROJECT STRUCTURE

```
Portfolio/
├── index.html                 # SEO meta, fonts, theme init
├── src/
│   ├── App.tsx                # Root layout & section composition
│   ├── main.tsx               # React 19 entry point
│   ├── index.css              # Global styles & design tokens
│   ├── components/
│   │   ├── sections/          # 12 page sections (Hero → Contact)
│   │   ├── reactbits/         # 12 custom interactive components
│   │   ├── layout/            # Navbar, Footer
│   │   ├── navigation/        # ScrollNavigator
│   │   ├── portfolio/         # Project modals & cards
│   │   ├── effects/           # Visual effect wrappers
│   │   └── ui/                # Shared UI primitives
│   ├── data/                  # Projects, skills, side quests, workbench
│   ├── context/               # Theme context provider
│   └── hooks/                 # useInView, custom hooks
├── public/                    # Static assets & images
├── tailwind.config.ts         # Custom theme extensions
└── vite.config.ts             # Build config with optimizations
```

---

## ✦ FLAGSHIP BUILD: MOODSCAPE

> **Autonomous Creative AI Agent** — a fully serverless pipeline on AWS that generates content on a schedule with zero human intervention and zero idle compute cost.

```
EventBridge (Cron Trigger)
    ↓
Lambda (Serverless Orchestrator)
    ↓
Bedrock / Nova Lite (Foundation Model)
    ↓
S3 (State Persistence)
    ↓
Amplify (React Client Delivery)
```

**Result:** 100% serverless · zero idle cost · fully autonomous

---

## ✦ ACTIVE RESEARCH WORKBENCH

Currently investigating across **9 domains**:

| Domain | Status |
|--------|--------|
| AI / ML & Autonomous Agents | 🟠 Active Probe |
| Digital Signal Processing | 🔵 Deep Dive |
| Cloud Infrastructure & Serverless | 🔵 Deep Dive |
| Game Systems & Networking | ⚪ Under Investigation |
| Open Source Architecture | 🟠 Active Probe |
| GATE 2027 Theoretical Foundations | 🔵 Deep Dive |
| Data Structures & Algorithms | 🟠 Active Probe |
| Java & Web Runtimes | 🔵 Deep Dive |
| Database Systems & Storage Engines | ⚪ Under Investigation |

---

<div align="center">

**Designed & built by [Chandresh P](https://github.com/Chandresh-007)**

3rd Year BE CSE · Karpagam College of Engineering, Coimbatore

`CLOUD · SYSTEMS · AI`

---

*"Computer Science Engineering student who learns best by building things and figuring out why they work."*

</div>
