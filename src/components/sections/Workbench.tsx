import { workbenchItems } from '../../data/workbench';
import { useInView } from '../../hooks/useInView';

export default function Workbench() {
  const { ref, isInView } = useInView(0.08);

  return (
    <section
      id="workbench"
      ref={ref}
      aria-label="Active Experiments Workbench"
      className="scroll-mt-16 py-16 sm:py-24 md:py-36 border-b border-stone-300 dark:border-stone-800 relative bg-[#faf9f5] dark:bg-[#0c0a09]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        {/* Header */}
        <div
          className={`border-b border-stone-300 dark:border-stone-800 pb-6 sm:pb-8 mb-10 sm:mb-16 transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="font-mono text-xs text-stone-500 dark:text-stone-400 uppercase tracking-widest mb-2.5">
            04 — ACTIVE RESEARCH & EXPERIMENTS
          </div>
          <h2 className="font-display font-black text-3xl sm:text-6xl md:text-7xl tracking-tight text-stone-900 dark:text-stone-100 leading-none mb-3 sm:mb-4">
            STILL FIGURING IT OUT.
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-stone-600 dark:text-stone-300 font-light max-w-2xl leading-relaxed">
            The digital workbench of open questions, ongoing investigations, and theoretical explorations currently on the table.
          </p>
        </div>

        {/* Workbench Grid — Styled as Laboratory Field Notes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {workbenchItems.map((item, index) => (
            <div
              key={item.id}
              className={`bg-white dark:bg-[#171614] border border-stone-300 dark:border-stone-800 p-6 md:p-8 flex flex-col justify-between hover:border-stone-900 dark:hover:border-stone-500 transition-all group shadow-sm ${
                index % 3 === 1 ? 'md:translate-y-2' : ''
              }`}
            >
              <div>
                {/* Note Header */}
                <div className="flex items-center justify-between font-mono text-xs text-stone-400 dark:text-stone-500 pb-4 border-b border-stone-200 dark:border-stone-800 mb-5">
                  <span className="uppercase tracking-wider">{item.category}</span>
                  <span
                    className={`px-2 py-0.5 text-[10px] uppercase tracking-wider font-semibold ${
                      item.currentStatus === 'Deep Dive'
                        ? 'bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-900'
                        : item.currentStatus === 'Active Probe'
                        ? 'bg-accent text-white'
                        : 'bg-stone-100 text-stone-700 dark:bg-stone-800 dark:text-stone-300'
                    }`}
                  >
                    {item.currentStatus}
                  </span>
                </div>

                {/* Topic Title */}
                <h3 className="font-display font-bold text-2xl text-stone-900 dark:text-stone-100 mb-3 group-hover:text-accent transition-colors">
                  {item.topic}
                </h3>

                {/* The Curiosity */}
                <p className="text-stone-600 dark:text-stone-400 text-sm leading-relaxed mb-6 font-light">
                  {item.curiosity}
                </p>

                {/* Probing Question */}
                <div className="p-3.5 bg-stone-50 dark:bg-stone-900/60 border-l-2 border-stone-800 dark:border-accent mb-6">
                  <span className="font-mono text-[10px] text-stone-400 dark:text-stone-500 uppercase tracking-widest block mb-1">
                    CURRENT INQUIRY:
                  </span>
                  <p className="font-mono text-xs text-stone-900 dark:text-stone-100 leading-relaxed">
                    "{item.probingQuestion}"
                  </p>
                </div>
              </div>

              {/* Key Concept Tags */}
              <div className="pt-4 border-t border-stone-200 dark:border-stone-800 flex flex-wrap gap-1.5 font-mono text-[11px] text-stone-500 dark:text-stone-400">
                {item.keyConcepts.map((concept) => (
                  <span key={concept} className="bg-stone-100 dark:bg-stone-800 px-2 py-0.5 border border-stone-200 dark:border-stone-700 text-stone-700 dark:text-stone-300">
                    {concept}
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
