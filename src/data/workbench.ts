export interface WorkbenchItem {
  id: string;
  topic: string;
  category: string;
  currentStatus: 'Active Probe' | 'Deep Dive' | 'Under Investigation';
  curiosity: string;
  probingQuestion: string;
  keyConcepts: string[];
}

export const workbenchItems: WorkbenchItem[] = [
  {
    id: 'ai-ml',
    topic: 'AI / ML & Autonomous Agents',
    category: 'INTELLIGENCE',
    currentStatus: 'Active Probe',
    curiosity: 'Moving beyond simple prompt wrappers into long-running, self-healing agentic workflows.',
    probingQuestion: 'How can autonomous agents reliably recover from hallucinations in multi-step execution loops?',
    keyConcepts: ['Agentic Loops', 'Bedrock Nova', 'Tool Use & Function Calling', 'State Persistence'],
  },
  {
    id: 'dsp',
    topic: 'Digital Signal Processing (DSP)',
    category: 'SIGNAL MATHEMATICS',
    currentStatus: 'Deep Dive',
    curiosity: 'Demodulating unfamiliar radio signals and extracting intelligence from noisy raw I/Q samples.',
    probingQuestion: 'How can machine learning models classify complex modulations (QPSK, 16-QAM) under low SNR conditions?',
    keyConcepts: ['I/Q Sampling', 'Fast Fourier Transform (FFT)', 'Constellation Plots', 'SIH 2026 RF Extraction'],
  },
  {
    id: 'cloud-infra',
    topic: 'Cloud Infrastructure & Serverless',
    category: 'DISTRIBUTED SYSTEMS',
    currentStatus: 'Deep Dive',
    curiosity: 'Designing resilient event-driven architectures with zero idle cost and fine-grained IAM.',
    probingQuestion: 'Where does serverless hit architectural bottlenecks compared to persistent containerized workers?',
    keyConcepts: ['EventBridge Chaining', 'AWS Lambda Cold Starts', 'S3 Lifecycle Policies', 'Least-Privilege IAM'],
  },
  {
    id: 'game-dev',
    topic: 'Game Systems & Networking',
    category: 'SYSTEMS PROGRAMMING',
    currentStatus: 'Under Investigation',
    curiosity: 'Understanding client-side prediction, entity interpolation, and tick rate stabilization in real-time games.',
    probingQuestion: 'How do deterministic multiplayer simulations handle packet loss without visual stuttering?',
    keyConcepts: ['Client Prediction', 'Server Reconciliation', 'Tick Rates', 'Spatial Partitioning'],
  },
  {
    id: 'open-source',
    topic: 'Open Source Architecture',
    category: 'COMMUNITY & CODEBASES',
    currentStatus: 'Active Probe',
    curiosity: 'Studying how world-class open-source projects maintain architectural purity across thousands of contributors.',
    probingQuestion: 'What patterns make a large codebase easy for first-time builders to navigate and extend?',
    keyConcepts: ['Repository Organization', 'CI/CD Automation', 'Defensive Testing', 'Documentation Craft'],
  },
  {
    id: 'gate-2027',
    topic: 'GATE 2027 Theoretical Foundations',
    category: 'CORE COMPUTER SCIENCE',
    currentStatus: 'Deep Dive',
    curiosity: 'Mastering the rigorous theoretical roots of computer science for academic and practical mastery.',
    probingQuestion: 'Connecting formal language theory, automata, and compiler optimization with modern runtime performance.',
    keyConcepts: ['Theory of Computation', 'Compiler Design', 'Computer Organization & Arch', 'Operating Systems'],
  },
  {
    id: 'dsa',
    topic: 'Data Structures & Algorithms',
    category: 'ALGORITHMIC REASONING',
    currentStatus: 'Active Probe',
    curiosity: 'Building intuitive mathematical reasoning behind asymptotic bounds and optimal data representations.',
    probingQuestion: 'When does a cache-friendly flat array outperform theoretically superior pointer-based tree structures?',
    keyConcepts: ['Graph Algorithms', 'Dynamic Programming', 'B-Trees', 'Amortized Analysis in Java'],
  },
  {
    id: 'java-internals',
    topic: 'Java & Web Runtimes',
    category: 'ENTERPRISE RUNTIMES',
    currentStatus: 'Deep Dive',
    curiosity: 'Dissecting how the JVM executes bytecode, manages heap generations, and handles concurrent servlet threads.',
    probingQuestion: 'How does Tomcat manage worker threads under high connection loads without exhausting OS sockets?',
    keyConcepts: ['JVM Bytecode', 'Servlets & JSP Lifecycle', 'Tomcat Thread Pools', 'Garbage Collection Mechanics'],
  },
  {
    id: 'dbms',
    topic: 'Database Systems & Storage Engines',
    category: 'PERSISTENCE',
    currentStatus: 'Under Investigation',
    curiosity: 'Understanding how database engines guarantee durability and atomic transactions on physical disks.',
    probingQuestion: 'What are the real-world trade-offs between B+ Trees and LSM Trees for write-heavy workloads?',
    keyConcepts: ['Write-Ahead Logging (WAL)', 'ACID Transactions', 'B+ Tree Page Splitting', 'Indexing Strategies'],
  },
];
