import { useInView } from '../../hooks/useInView';
import LogoLoop, { type LogoItem } from '../reactbits/LogoLoop';

interface SkillGroup {
  category: string;
  number: string;
  description: string;
  items: string[];
}

const skillGroups: SkillGroup[] = [
  {
    number: '01',
    category: 'WEB',
    description: 'Modern component architectures, responsive web interfaces, and server-side runtimes.',
    items: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Node.js'],
  },
  {
    number: '02',
    category: 'LANGUAGES',
    description: 'Core languages used for object-oriented design, systems logic, algorithms, and scripting.',
    items: ['Java', 'Python', 'JavaScript'],
  },
  {
    number: '03',
    category: 'DATABASE',
    description: 'Relational database schemas, local embedded engines, and managed database backends.',
    items: ['MySQL', 'SQLite', 'Supabase'],
  },
  {
    number: '04',
    category: 'CLOUD',
    description: 'Serverless compute, foundation model inference APIs, managed storage, and scheduled event buses.',
    items: ['AWS', 'S3', 'Lambda', 'Bedrock', 'Amplify', 'EventBridge'],
  },
  {
    number: '05',
    category: 'TOOLS',
    description: 'Version control, container virtualization, operating systems, and servlet build tooling.',
    items: ['Git', 'GitHub', 'Docker', 'Linux', 'Maven', 'Tomcat'],
  },
  {
    number: '06',
    category: 'AI / ENGINEERING',
    description: 'Applied machine learning, Digital Signal Processing, and RF spectrogram modulation analysis.',
    items: ['AI / ML', 'DSP', 'Signal Processing'],
  },
];

const confirmedTechnologies = [
  'React',
  'JavaScript',
  'Java',
  'Python',
  'Node.js',
  'HTML5',
  'CSS3',
  'MySQL',
  'SQLite',
  'Supabase',
  'AWS',
  'S3',
  'Lambda',
  'Docker',
  'Linux',
  'Git',
  'GitHub',
  'DSP',
  'Signal Processing',
  'AI / ML',
];

export default function Skills() {
  const { ref, isInView } = useInView(0.08);

  const logoItems: LogoItem[] = confirmedTechnologies.map((tech) => ({
    node: (
      <div className="flex items-center gap-2 px-3.5 py-1.5 bg-white dark:bg-[#171614] border border-stone-300 dark:border-stone-800 rounded-sm font-mono text-xs text-stone-800 dark:text-stone-200 hover:border-accent hover:text-accent transition-colors shadow-sm select-none">
        <span className="text-accent font-bold">/</span>
        <span className="font-semibold tracking-wider">{tech}</span>
      </div>
    ),
    title: tech,
  }));

  return (
    <section
      id="skills"
      ref={ref}
      aria-label="Technical Skills Index"
      className="scroll-mt-16 py-28 md:py-36 border-b border-stone-300 dark:border-stone-800 relative bg-[#faf9f5] dark:bg-[#0c0a09]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div
          className={`border-b border-stone-300 dark:border-stone-800 pb-10 mb-18 transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="font-mono text-xs text-stone-500 dark:text-stone-400 uppercase tracking-widest mb-2.5">
            04 — TECHNICAL INDEX
          </div>
          <h2 className="font-display font-black text-4xl sm:text-6xl md:text-7xl tracking-tight text-stone-900 dark:text-stone-100 leading-none mb-3">
            WHAT I WORK WITH.
          </h2>
          <p className="font-mono text-xs text-stone-500 dark:text-stone-400 max-w-lg leading-relaxed uppercase tracking-wider">
            [ VERIFIED PRODUCTION & LAB STACK · NO FAKE PERCENTAGES · NO REPEATED PLACEHOLDERS ]
          </p>
        </div>

        {/* React Bits: Logo Loop Marquee Banner */}
        <div className="mb-20 p-6 sm:p-8 bg-stone-100/70 dark:bg-[#131110] border border-stone-300 dark:border-stone-800 shadow-sm">
          <div className="flex items-center justify-between font-mono text-xs text-stone-400 dark:text-stone-500 uppercase tracking-widest mb-3 font-semibold">
            <span>// CONTINUOUS STACK LOOP</span>
            <span>HOVER TO PAUSE</span>
          </div>
          <div className="overflow-hidden">
            <LogoLoop
              logos={logoItems}
              speed={40}
              gap={16}
              pauseOnHover={true}
              direction="left"
            />
          </div>
        </div>

        {/* Typography-Based Groups */}
        <div className="divide-y divide-stone-300 dark:divide-stone-800 border-y border-stone-300 dark:border-stone-800">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="py-12 md:py-14 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-baseline hover:bg-stone-50/80 dark:hover:bg-stone-900/50 transition-colors px-3"
            >
              {/* Category Marker & Title */}
              <div className="lg:col-span-5 flex items-baseline gap-5">
                <span className="font-mono text-xs font-bold text-accent">
                  {group.number}
                </span>
                <div>
                  <h3 className="font-display font-black text-2xl sm:text-3xl text-stone-900 dark:text-stone-100 tracking-tight">
                    {group.category}
                  </h3>
                  <p className="font-mono text-xs text-stone-500 dark:text-stone-400 mt-1 max-w-sm leading-relaxed">
                    {group.description}
                  </p>
                </div>
              </div>

              {/* Technologies List with Varied Typographic Treatment */}
              <div className="lg:col-span-7 flex flex-wrap gap-x-8 gap-y-4 items-center">
                {group.items.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-sm sm:text-base text-stone-800 dark:text-stone-200 hover:text-accent dark:hover:text-accent cursor-default transition-colors font-medium"
                  >
                    <span className="text-stone-300 dark:text-stone-700 select-none mr-2">/</span>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
