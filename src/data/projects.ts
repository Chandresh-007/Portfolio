export type ProjectCategory = 'web' | 'cloud' | 'ai' | 'hackathon' | 'experiments';

export interface Project {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  whatItIs: string;
  whyIBuiltIt: string;
  whatIUsed: string[];
  whatILearned: string;
  architecture?: string[];
  status: string;
  categories: ProjectCategory[];
  featured: boolean;
  liveUrl?: string;
  githubUrl?: string;
  caseStudyUrl?: string;
  image?: string;
}

export const projects: Project[] = [
  {
    id: 'moodscape',
    number: '01',
    title: 'MoodScape',
    tagline: 'Autonomous Creative AI Agent',
    description:
      'An autonomous AI creative agent that generates new imaginative worlds automatically using event-driven AWS serverless architecture.',
    whatItIs:
      'MoodScape is an autonomous generative system that continuously originates, renders, and publishes imaginative thematic environments without human intervention at runtime.',
    whyIBuiltIt:
      'Built to experiment with autonomous creative loops and understand how to chain AWS serverless primitives into a self-triggering generative system powered by modern foundation models.',
    whatIUsed: [
      'AWS Lambda',
      'Amazon Bedrock',
      'Amazon Nova Lite',
      'Amazon S3',
      'Amazon EventBridge',
      'AWS Amplify',
      'React',
      'TypeScript',
      'Tailwind CSS',
    ],
    whatILearned:
      'Orchestrating stateful multi-step generative workflows across serverless boundaries, handling LLM rate limits and token budgets, and persisting generated artifacts reliably to object storage.',
    architecture: [
      'Amazon EventBridge (Scheduled Trigger)',
      'AWS Lambda (Orchestration Engine)',
      'Amazon Bedrock / Nova Lite (Generative Intelligence)',
      'Amazon S3 (Artifact & State Storage)',
      'AWS Amplify (Frontend Hosting & Delivery)',
    ],
    status: 'Shipped',
    categories: ['web', 'cloud', 'ai'],
    featured: true,
  },
  {
    id: 'learnxp',
    number: '02',
    title: 'LearnXP',
    tagline: 'Gamified Technology Learning Platform',
    description:
      'A learning environment that converts dry technical curriculums into RPG-style progression with skill trees, technical challenges, and boss battles.',
    whatItIs:
      'An interactive web application applying game design mechanics (XP curves, unlockable milestones, timed problem challenges) to CS topics like cloud, algorithms, and web architecture.',
    whyIBuiltIt:
      'Most online learning feels like passive video watching. I wanted a platform that treated learning like leveling up an engineering skill tree with verifiable code checkpoints.',
    whatIUsed: ['React', 'TypeScript', 'Tailwind CSS', 'Supabase', 'AI Evaluator', 'Vite'],
    whatILearned:
      'Game state synchronization, client-side caching strategies, responsive UI design for dense technical dashboards, and crafting automated evaluation prompts.',
    architecture: [
      'React / Vite Frontend',
      'Supabase Auth & Database',
      'AI Evaluation Engine (Challenge Verification)',
      'XP Calculation & Skill Tree State',
    ],
    status: 'Building',
    categories: ['web', 'ai'],
    featured: true,
  },
  {
    id: 'sih-signal-analysis',
    number: '03',
    title: 'SIH Signal Analysis',
    tagline: 'Automated Radio Signal & Spectrogram Analysis',
    description:
      'Smart India Hackathon 2026 project focused on automated parsing and analysis of raw .IQ and .wav radio signals, DSP parameter extraction, and modulation classification.',
    whatItIs:
      'A signal processing pipeline that ingests raw I/Q radio frequency captures, extracts center frequency and bandwidth, produces FFT spectrograms and constellation plots, and classifies modulation schemes.',
    whyIBuiltIt:
      'To solve the complex challenge of identifying unidentified RF transmissions and understand Digital Signal Processing (DSP) mathematics from ground zero.',
    whatIUsed: [
      'Digital Signal Processing (DSP)',
      'I/Q Demodulation',
      'Spectrogram FFT',
      'Constellation Mapping',
      'FEC & De-interleaving',
      'AI / ML Modulation Classifier',
    ],
    whatILearned:
      'Deep mathematical foundation of Fourier transforms, Nyquist sampling rates, in-phase and quadrature components, forward error correction (FEC), and applying ML to RF domains.',
    architecture: [
      'Raw .IQ / .wav Ingestion',
      'DSP Pre-filtering & Parameter Extraction',
      'FFT Spectrogram & Constellation Generation',
      'Modulation Classification (ML Engine)',
      'FEC & De-interleaving Analysis',
    ],
    status: 'In Progress · SIH 2026',
    categories: ['ai', 'hackathon'],
    featured: true,
  },
  {
    id: 'nlc-file-upload',
    number: '04',
    title: 'NLC File Management',
    tagline: 'Enterprise Entry & File Management System',
    description:
      'A structured record and document upload system developed for an enterprise internship environment at Neyveli Lignite Corporation.',
    whatItIs:
      'An enterprise web system built to streamline departmental paperwork, entry tracking, and image/PDF file archives with verifiable metadata and audit logging.',
    whyIBuiltIt:
      'Manual paper trails and unindexed drives led to lost documentation. Built during an internship context to digitize records into a lightweight, reliable database.',
    whatIUsed: ['Node.js', 'Express', 'SQLite', 'HTML5', 'CSS3', 'JavaScript'],
    whatILearned:
      'Designing defensive file upload validation (MIME sniffing, file size bounds), relational schema design in SQLite, and creating user interfaces resilient to non-technical users.',
    architecture: [
      'Node.js Express Server',
      'Disk Storage & Sanitized File Uploads',
      'SQLite Relational Record Index',
      'Vanilla Web Client with Audit Log View',
    ],
    status: 'Built',
    categories: ['web'],
    featured: true,
  },
  {
    id: 'minimaltab',
    number: '05',
    title: 'MinimalTab',
    tagline: 'Distraction-Free Browser New Tab Extension',
    description:
      'A stripped-down, lightning-fast browser extension replacing bloated default new tab pages with clean typography, local storage persistence, and zero telemetry.',
    whatItIs:
      'A lightweight browser extension (Chrome/Edge/Firefox) focused on extreme speed, minimalist aesthetic, and instant keyboard shortcuts.',
    whyIBuiltIt:
      'Browser extensions were overloaded with widgets, trackers, and news feeds. I wanted an instant, zero-latency blank canvas for deep work.',
    whatIUsed: ['HTML5', 'CSS3', 'JavaScript', 'WebExtensions API', 'LocalStorage'],
    whatILearned:
      'Browser extension lifecycle, CSP (Content Security Policy) restrictions, permission sandboxing, and building sub-50ms web interfaces.',
    status: 'Built',
    categories: ['web', 'experiments'],
    featured: false,
    image: '/minimaltab.png',
  },
  {
    id: 'court-case-tracker',
    number: '06',
    title: 'Open Court Case Status Tracker',
    tagline: 'Legal Case Information & Status Monitor',
    description:
      'A web application designed to track and query court case hearings, filing numbers, and status updates through a clean, unified search interface.',
    whatItIs:
      'An information lookup tool allowing citizens and legal practitioners to track ongoing judicial matters by case number, bench, and petitioner name.',
    whyIBuiltIt:
      'Government court portals often have difficult navigation and captcha barriers. Built to experiment with clean public data interfaces and status tracking.',
    whatIUsed: ['JavaScript', 'HTML5', 'CSS3', 'REST APIs', 'Node.js'],
    whatILearned:
      'Data parsing from heterogeneous public sources, caching query results to respect upstream limits, and designing accessible search interfaces.',
    status: 'Built',
    categories: ['web'],
    featured: false,
  },
  {
    id: 'vicevibe',
    number: '07',
    title: 'ViceVibe',
    tagline: 'GTA Vice City Custom Modpack',
    description:
      "A GTA Vice City modpack I'm building — focused on bringing together the mods, atmosphere, and changes I want in one cohesive experience.",
    whatItIs:
      "A customized GTA Vice City modpack combining visual enhancements, atmospheric weather tuning, timecycle adjustments, and curated assets into a unified experience.",
    whyIBuiltIt:
      "Default Vice City has aged, but individual mods are scattered, conflicting, or unstable. Built to assemble and balance my ideal Vice City experience with stable memory hooks and asset compatibility.",
    whatIUsed: ['GTA Vice City Engine', 'Cleo Scripts', 'Timecycle Tuning', 'Asset Modding', 'Game Configs'],
    whatILearned:
      'Asset replacing, texture compression limits, script hooking stability, memory limits in older game engines, and community distribution packaging.',
    status: 'In Progress',
    categories: ['experiments'],
    featured: false,
    image: '/vicevibe.png',
  },
  {
    id: 'webcraft',
    number: '08',
    title: 'WebCraft',
    tagline: 'Frontend Web Challenge & Component Architecture',
    description:
      'National-level technical web development challenge and component showcase organized for Dhruva 2026 at Karpagam College of Engineering.',
    whatItIs:
      'A timed frontend web development challenge and component architecture showcase where developers build responsive websites on-the-spot with live GitHub deployments.',
    whyIBuiltIt:
      'Curated and coordinated as student coordinator to test real-world developer agility under time constraints: semantic markup, responsive grid layouts, and rapid deployment pipelines.',
    whatIUsed: ['HTML5', 'CSS3', 'Modern JavaScript', 'CSS Grid', 'Flexbox', 'GitHub Pages'],
    whatILearned:
      'Event coordination, technical problem statement design, automated git push evaluations, and testing responsive edge cases across viewports.',
    status: 'Built',
    categories: ['web'],
    featured: false,
    image: '/webcraft.jpg',
  },
  {
    id: 'college-chatbot',
    number: '09',
    title: 'College Enquiry Chatbot',
    tagline: 'Automated Campus Information Assistant',
    description:
      'An conversational AI assistant answering common student inquiries regarding admissions, course schedules, examination guidelines, and department faculty.',
    whatItIs:
      'A specialized conversational bot trained on campus FAQs and academic regulations to resolve repetitive inquiries without administrative overhead.',
    whyIBuiltIt:
      'Campus helplines are frequently overwhelmed during admission and exam cycles. Built to provide 24/7 instant answers to high-frequency student questions.',
    whatIUsed: ['AI / NLP', 'JavaScript', 'Node.js', 'Express', 'HTML / CSS'],
    whatILearned:
      'Intent matching, conversational state handling, fallback strategies for unknown queries, and deploying chatbot web widgets.',
    status: 'Built',
    categories: ['ai', 'web'],
    featured: false,
  },
  {
    id: 'minecraft-server',
    number: '10',
    title: 'Minecraft Server Infrastructure',
    tagline: 'High-Performance Linux Game Server Stack',
    description:
      'Custom headless Linux server infrastructure configured for high-concurrency multiplayer Minecraft gameplay with containerized Pterodactyl daemon management.',
    whatItIs:
      'A production game server stack running on dedicated Linux VPS with Pterodactyl panel, automated offsite backups, reverse proxies, and JVM heap tuning.',
    whyIBuiltIt:
      'Off-the-shelf hosting was slow and restrictive. I wanted to understand Linux server administration, networking, Docker containers, and JVM garbage collection in a live environment.',
    whatIUsed: [
      'Linux (Ubuntu/Debian)',
      'Docker',
      'Pterodactyl Panel',
      'JVM Tuning (Aikar Flags)',
      'Nginx Reverse Proxy',
      'SSH & Systemd',
    ],
    whatILearned:
      'Linux system administration, port forwarding, firewall security (UFW/iptables), managing Docker daemon resources, debugging memory leaks, and TCP socket stability.',
    status: 'Explored',
    categories: ['experiments'],
    featured: false,
    image: '/minecraft-infra.png',
  },
];
