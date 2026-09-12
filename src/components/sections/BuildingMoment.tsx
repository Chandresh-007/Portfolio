import { useInView } from '../../hooks/useInView';

const domains = [
  'Web Architecture',
  'AWS Cloud Infrastructure',
  'Autonomous AI Agents',
  'Digital Signal Processing (DSP)',
  'Game Systems & Modding',
  'Linux & Containerization',
  'Relational Data & SQLite',
  'Embedded & RF Waves',
];

export default function BuildingMoment() {
  const { ref, isInView } = useInView(0.1);

  return (
    <section
      ref={ref}
      aria-label="Building Philosophy"
      className="py-28 md:py-40 bg-[#f5f3ec] dark:bg-stone-950 text-stone-900 dark:text-stone-100 px-6 md:px-12 border-b border-stone-300 dark:border-stone-800 relative overflow-hidden transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto">
        {/* Monospace Ledger Tag */}
        <div className="flex items-center justify-between font-mono text-xs text-stone-500 dark:text-stone-400 uppercase tracking-widest pb-8 border-b border-stone-300 dark:border-stone-800 mb-16">
          <div className="flex items-center gap-3">
            <span className="text-accent font-bold">CYCLE</span>
            <span>/</span>
            <span>THE ITERATIVE LOOP</span>
          </div>
          <span>REAL-WORLD TRIAL & ERROR</span>
        </div>

        {/* The 4 Monumental Words */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-6 xl:gap-8 mb-20">
          <div
            className={`min-w-0 space-y-3 transition-all duration-700 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <span className="font-mono text-xs text-stone-500 dark:text-stone-400 block">STEP 01</span>
            <h3 className="font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-3xl xl:text-4xl 2xl:text-5xl tracking-tight leading-none text-stone-900 dark:text-white hover:text-accent transition-colors whitespace-nowrap">
              BUILT.
            </h3>
            <p className="font-mono text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
              Writing the initial prototype from scratch to test an idea without preconceived limitations.
            </p>
          </div>

          <div
            className={`min-w-0 space-y-3 transition-all duration-700 delay-100 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <span className="font-mono text-xs text-stone-500 dark:text-stone-400 block">STEP 02</span>
            <h3 className="font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-3xl xl:text-4xl 2xl:text-5xl tracking-tight leading-none text-stone-700 dark:text-stone-300 hover:text-stone-950 dark:hover:text-white transition-colors whitespace-nowrap">
              DEPLOYED.
            </h3>
            <p className="font-mono text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
              Moving past localhost into real AWS serverless environments, live networks, and hosting pipelines.
            </p>
          </div>

          <div
            className={`min-w-0 space-y-3 transition-all duration-700 delay-200 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <span className="font-mono text-xs text-accent block font-bold">STEP 03</span>
            <h3 className="font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-3xl xl:text-4xl 2xl:text-5xl tracking-tight leading-none text-stone-500 dark:text-stone-400 hover:text-accent transition-colors whitespace-nowrap">
              BROKEN.
            </h3>
            <p className="font-mono text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
              Encountering race conditions, cold start delays, memory leaks, and protocol mismatches under load.
            </p>
          </div>

          <div
            className={`min-w-0 space-y-3 transition-all duration-700 delay-300 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <span className="font-mono text-xs text-stone-500 dark:text-stone-400 block">STEP 04</span>
            <h3 className="font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-3xl xl:text-4xl 2xl:text-5xl tracking-tight leading-none text-stone-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors whitespace-nowrap">
              LEARNED.
            </h3>
            <p className="font-mono text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
              Gaining irreplaceable hands-on intuition that documentation and tutorials can never teach.
            </p>
          </div>
        </div>

        {/* Explored Domains Typography Belt */}
        <div className="pt-12 border-t border-stone-300 dark:border-stone-800">
          <div className="font-mono text-xs text-stone-500 dark:text-stone-400 uppercase tracking-widest mb-6">
            // DOMAINS PROBED & EXPLORED
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-3 font-display font-bold text-xl sm:text-2xl md:text-3xl text-stone-800 dark:text-stone-300">
            {domains.map((dom, i) => (
              <span key={dom} className="flex items-center gap-6 group hover:text-accent transition-colors">
                <span>{dom}</span>
                {i < domains.length - 1 && <span className="text-stone-400 dark:text-stone-700 text-lg">·</span>}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
