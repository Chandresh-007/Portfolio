export interface SideQuest {
  id: string;
  number: string;
  title: string;
  tagline: string;
  category: string;
  takeaway: string;
  story: string;
  stack: string[];
  image?: string;
}

export const sideQuests: SideQuest[] = [
  {
    id: 'minecraft-infra',
    number: '01',
    title: 'MINECRAFT SERVER INFRASTRUCTURE',
    tagline: 'High-TPS Linux Game Server Stack',
    category: 'INFRASTRUCTURE',
    takeaway: 'Learned Linux administration, JVM garbage collector tuning, and packet latency optimization.',
    story: 'Ran dedicated headless Linux servers for friends. Implemented Aikar JVM flags to eliminate GC lag spikes, automated off-site world backups, and configured reverse proxies to protect server IP.',
    stack: ['Linux', 'Ubuntu Server', 'Pterodactyl', 'Docker', 'Aikar Flags', 'Nginx'],
    image: '/minecraft-infra.png',
  },
  {
    id: 'pterodactyl',
    number: '02',
    title: 'PTERODACTYL PANEL DEPLOYMENT',
    tagline: 'Multi-Node Containerized Game Hosting',
    category: 'DEVOPS',
    takeaway: 'Understood container daemon management, Wings agent communication, and SSL reverse proxying.',
    story: 'Configured and maintained Pterodactyl panel (PHP/Laravel) and Wings daemon (Go/Docker) to isolate game server instances with strict CPU core and RAM allocations.',
    stack: ['Docker', 'Go', 'Laravel', 'MariaDB', 'Certbot', 'UFW'],
    image: '/pterodactyl.png',
  },
  {
    id: 'gta-modding',
    number: '03',
    title: 'GTA SAN ANDREAS MODDING',
    tagline: 'Game Memory Hacking & Cleo Scripts',
    category: 'REVERSE ENGINEERING',
    takeaway: 'First exposure to memory offsets, hex editing, game loops, and script execution engines.',
    story: 'Spent days modding GTA SA: writing Cleo script missions, editing weapon and vehicle handling parameters in hex, and replacing game assets. Taught me how games manage memory and coordinate real-time loops.',
    stack: ['Cleo Script', 'Sanny Builder', 'Hex Editing', 'DirectX Hooking'],
  },
  {
    id: 'roblox-studio',
    number: '04',
    title: 'ROBLOX STUDIO & LUA',
    tagline: 'Multiplayer Physics & Client-Server Replication',
    category: 'GAME SYSTEMS',
    takeaway: 'Learned client-server replication models, remote events, and event-driven architecture.',
    story: 'Built mechanics in Roblox Studio using Luau: tweening camera systems, weapon raycasting, inventory persistence, and understanding why server authority is critical to prevent client exploits.',
    stack: ['Luau', 'Roblox Engine', 'Client-Server RPCs', 'Physics Modeling'],
  },
  {
    id: 'vicevibe',
    number: '05',
    title: 'VICEVIBE (GTA MODPACK)',
    tagline: 'Custom Vice City Experience & Atmosphere',
    category: 'GAME MODDING',
    takeaway: 'Learned asset pipeline coordination, memory offset stability, and game config tuning.',
    story: "A GTA Vice City modpack I'm building — focused on bringing together the mods, atmosphere, and changes I want in one cohesive experience.",
    stack: ['GTA Vice City', 'Cleo Scripts', 'Texture Modding', 'Config Tuning'],
    image: '/vicevibe.png',
  },
  {
    id: 'linux-homelab',
    number: '06',
    title: 'LINUX HOMELAB EXPERIMENTS',
    tagline: 'Headless Systems, SSH & Bash Automation',
    category: 'SYSTEMS',
    takeaway: 'True comfort inside the terminal: cron jobs, systemd units, permissions, and networking.',
    story: 'Turned spare machines into headless development sandboxes. Set up SSH key authentication, tailored bash aliases, wrote automated backup scripts, and debugged networking route conflicts.',
    stack: ['Debian', 'Bash', 'Systemd', 'SSH Hardening', 'Cron', 'rsync'],
  },
  {
    id: 'docker-containers',
    number: '07',
    title: 'DOCKER CONTAINER LAB',
    tagline: 'Isolated Development & Multi-Stage Builds',
    category: 'DEV TOOLING',
    takeaway: 'Appreciating immutable infrastructure, layered caching, and bridge networks.',
    story: 'Containerized local web stacks, databases, and microservices. Wrote lean Dockerfiles with multi-stage builds to minimize image size and prevent host environment pollution.',
    stack: ['Docker', 'Docker Compose', 'Alpine Linux', 'Container Security'],
  },
  {
    id: 'dsp-sdr',
    number: '08',
    title: 'DSP & SDR RADIO EXPERIMENTS',
    tagline: 'Capturing Raw RF & In-Phase/Quadrature Signals',
    category: 'SIGNAL PROCESSING',
    takeaway: 'Connected physics with code: sampling theory, Fourier transforms, and spectral density.',
    story: 'Probed radio frequency space using software-defined radio (SDR). Captured live transmissions, visualized waterfall spectrograms, and learned how physical antennas translate into raw digital I/Q streams.',
    stack: ['SDR', 'I/Q Signals', 'Fast Fourier Transform', 'RF Theory', 'Signal Filtering'],
  },
];
