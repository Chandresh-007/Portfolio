import { useState } from 'react';
import { milestones, type Milestone } from '../../data/timeline';
import { useInView } from '../../hooks/useInView';

export default function Timeline() {
  const [activeMilestone, setActiveMilestone] = useState<Milestone>(milestones[3]); // Default to MoodScape
  const { ref, isInView } = useInView(0.08);

  return (
    <section
      id="journey"
      ref={ref}
      aria-label="Engineering Journey Timeline"
      className="scroll-mt-16 py-28 md:py-36 border-b border-stone-300 dark:border-stone-800 relative bg-[#faf9f5] dark:bg-[#0c0a09]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div
          className={`border-b border-stone-300 dark:border-stone-800 pb-8 mb-16 transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="font-mono text-xs text-stone-500 dark:text-stone-400 uppercase tracking-widest mb-3">
            05 — CHRONOLOGICAL PATH
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2 className="font-display font-black text-4xl sm:text-6xl md:text-7xl tracking-tight text-stone-900 dark:text-stone-100 leading-none">
              THE HORIZONTAL JOURNEY.
            </h2>
            <p className="font-mono text-xs text-stone-500 dark:text-stone-400 uppercase tracking-wider">
              [ CONFIRMED MILESTONES · SCROLL OR CLICK NODES ]
            </p>
          </div>
        </div>

        {/* Horizontal Track Flow */}
        <div className="mb-16 overflow-x-auto no-scrollbar py-6 -mx-6 px-6 md:-mx-12 md:px-12">
          <div className="flex items-center min-w-[850px] md:min-w-[1050px] gap-2">
            {milestones.map((m, idx) => {
              const isSelected = activeMilestone.id === m.id;
              return (
                <div key={m.id} className="flex items-center">
                  {/* Milestone Node Button */}
                  <button
                    onClick={() => setActiveMilestone(m)}
                    className={`text-left p-4 sm:p-5 border transition-all shrink-0 w-44 sm:w-52 relative group ${
                      isSelected
                        ? 'bg-stone-900 text-stone-100 border-stone-900 dark:bg-stone-100 dark:text-stone-900 dark:border-stone-100 shadow-md scale-105 z-10'
                        : 'bg-white dark:bg-[#171614] border-stone-300 dark:border-stone-800 hover:border-stone-800 dark:hover:border-stone-500 text-stone-900 dark:text-stone-100'
                    }`}
                  >
                    <div className="flex items-center justify-between font-mono text-[10px] pb-2 mb-2 border-b border-stone-200 dark:border-stone-800">
                      <span className={isSelected ? 'text-accent font-bold' : 'text-stone-400 dark:text-stone-500'}>
                        0{idx + 1}
                      </span>
                      <span
                        className={`uppercase tracking-wider ${
                          m.status === 'active'
                            ? 'text-accent font-semibold'
                            : isSelected
                            ? 'text-stone-300 dark:text-stone-600'
                            : 'text-stone-500 dark:text-stone-400'
                        }`}
                      >
                        {m.status === 'active' ? '● ACTIVE' : 'DONE'}
                      </span>
                    </div>

                    <div className="font-display font-bold text-sm sm:text-base leading-snug line-clamp-2">
                      {m.title}
                    </div>
                  </button>

                  {/* Connecting Arrow */}
                  {idx < milestones.length - 1 && (
                    <div className="px-2 text-stone-400 dark:text-stone-600 font-mono text-lg select-none">
                      →
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Active Milestone Deep Inspection Banner */}
        <div className="bg-white dark:bg-[#171614] border-2 border-stone-900 dark:border-stone-700 p-8 sm:p-12 shadow-md animate-fade-in flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="max-w-2xl space-y-3">
            <div className="flex items-center gap-3 font-mono text-xs">
              <span className="bg-accent text-white px-2 py-0.5 font-bold uppercase tracking-wider">
                SELECTED MILESTONE
              </span>
              <span className="text-stone-400 dark:text-stone-500 uppercase tracking-widest">
                STATUS: {activeMilestone.status}
              </span>
            </div>

            <h3 className="font-display font-black text-3xl sm:text-4xl text-stone-900 dark:text-stone-100 tracking-tight">
              {activeMilestone.title}
            </h3>

            <p className="text-stone-700 dark:text-stone-300 text-base sm:text-lg leading-relaxed font-light">
              {activeMilestone.description}
            </p>
          </div>

          <div className="font-mono text-xs text-stone-500 dark:text-stone-400 border border-stone-200 dark:border-stone-800 p-4 bg-stone-50 dark:bg-stone-900/60 shrink-0 w-full md:w-auto">
            <div className="text-stone-400 dark:text-stone-500 uppercase text-[10px] tracking-wider mb-1">
              RECORD VERIFICATION
            </div>
            <div className="text-stone-900 dark:text-stone-100 font-semibold">VERIFIED BUILD LOG</div>
            <div className="text-accent text-[11px] mt-1">NO FABRICATED DATES</div>
          </div>
        </div>
      </div>
    </section>
  );
}
