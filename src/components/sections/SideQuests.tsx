import { useState } from 'react';
import { sideQuests, type SideQuest } from '../../data/sidequests';
import { useInView } from '../../hooks/useInView';

export default function SideQuests() {
  const [activeQuest, setActiveQuest] = useState<SideQuest | null>(sideQuests[0]);
  const { ref, isInView } = useInView(0.08);

  return (
    <section
      id="sidequests"
      ref={ref}
      aria-label="Side Quests"
      className="scroll-mt-16 py-28 md:py-36 border-b border-stone-300 dark:border-stone-800 relative bg-[#faf9f5] dark:bg-[#0c0a09] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div
          className={`border-b border-stone-300 dark:border-stone-800 pb-10 mb-16 transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="font-mono text-xs text-stone-500 dark:text-stone-400 uppercase tracking-widest mb-4">
            03 — OFF-RESUME LAB
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <h2 className="font-display font-black text-5xl sm:text-7xl md:text-8xl tracking-tight text-stone-900 dark:text-stone-100 leading-[0.88]">
              <span className="block">THE</span>
              <span className="block text-stone-400 dark:text-stone-600">SIDE</span>
              <span className="block text-accent">QUESTS.</span>
            </h2>

            <div className="max-w-md">
              <p className="text-xl sm:text-2xl text-stone-800 dark:text-stone-200 font-light italic font-serif leading-relaxed mb-3">
                "Not everything I build is going on a resume."
              </p>
              <p className="font-mono text-xs text-stone-500 dark:text-stone-400 leading-normal uppercase tracking-wider">
                [ EXPERIMENTS, MODDING, HEADLESS SERVERS & CODE DRIVEN BY PURE CURIOSITY ]
              </p>
            </div>
          </div>
        </div>

        {/* Interactive Staggered Typography List with Detailed Inspector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left: Interactive Big Type Staggered List */}
          <div className="lg:col-span-7 space-y-3">
            {sideQuests.map((quest) => {
              const isSelected = activeQuest?.id === quest.id;
              return (
                <div
                  key={quest.id}
                  onMouseEnter={() => setActiveQuest(quest)}
                  onClick={() => setActiveQuest(quest)}
                  className={`p-4 sm:p-5 border transition-all cursor-pointer group flex items-baseline justify-between gap-4 ${
                    isSelected
                      ? 'bg-stone-900 text-stone-100 border-stone-900 dark:bg-stone-100 dark:text-stone-900 dark:border-stone-100 shadow-md translate-x-2'
                      : 'bg-white/80 dark:bg-[#171614] border-stone-200 dark:border-stone-800 hover:border-stone-800 dark:hover:border-stone-500 text-stone-900 dark:text-stone-100'
                  }`}
                >
                  <div className="flex items-baseline gap-4">
                    <span className={`font-mono text-xs ${isSelected ? 'text-accent font-bold' : 'text-stone-400 dark:text-stone-500'}`}>
                      {quest.number}
                    </span>
                    <span className="font-display font-bold text-lg sm:text-xl md:text-2xl tracking-tight group-hover:text-accent transition-colors">
                      {quest.title}
                    </span>
                  </div>

                  <span
                    className={`font-mono text-[10px] tracking-wider uppercase px-2 py-0.5 shrink-0 ${
                      isSelected
                        ? 'bg-stone-800 text-stone-300 dark:bg-stone-200 dark:text-stone-800'
                        : 'bg-stone-100 text-stone-500 dark:bg-stone-800 dark:text-stone-400'
                    }`}
                  >
                    {quest.category}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Right: Sticky Inspector Card */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            {activeQuest ? (
              <div className="bg-white dark:bg-[#171614] border-2 border-stone-900 dark:border-stone-700 p-8 shadow-xl animate-fade-in relative">
                <div className="flex items-center justify-between font-mono text-xs text-stone-400 dark:text-stone-500 pb-4 border-b border-stone-200 dark:border-stone-800 mb-6">
                  <span>LOG // {activeQuest.number}</span>
                  <span className="text-accent font-bold uppercase">{activeQuest.category}</span>
                </div>

                {activeQuest.image && (
                  <div className="mb-6 overflow-hidden border border-stone-200 dark:border-stone-800 bg-stone-950 flex items-center justify-center p-1 shadow-sm">
                    <img
                      src={activeQuest.image}
                      alt={activeQuest.title}
                      className="w-full h-44 sm:h-52 object-contain bg-stone-900/60"
                    />
                  </div>
                )}

                <h3 className="font-display font-black text-2xl sm:text-3xl text-stone-900 dark:text-stone-100 mb-2">
                  {activeQuest.title}
                </h3>
                <p className="font-mono text-xs text-stone-500 dark:text-stone-400 uppercase tracking-wider mb-6">
                  {activeQuest.tagline}
                </p>

                <div className="space-y-6">
                  <div>
                    <span className="font-mono text-[11px] text-stone-400 dark:text-stone-500 uppercase tracking-wider block mb-1">
                      THE REAL STORY
                    </span>
                    <p className="text-stone-700 dark:text-stone-300 text-sm sm:text-base leading-relaxed font-light">
                      {activeQuest.story}
                    </p>
                  </div>

                  <div>
                    <span className="font-mono text-[11px] text-stone-400 dark:text-stone-500 uppercase tracking-wider block mb-1">
                      KEY ENGINEERING TAKEAWAY
                    </span>
                    <p className="text-stone-900 dark:text-stone-100 text-sm font-medium border-l-2 border-accent pl-3 py-0.5">
                      {activeQuest.takeaway}
                    </p>
                  </div>

                  <div>
                    <span className="font-mono text-[11px] text-stone-400 dark:text-stone-500 uppercase tracking-wider block mb-2">
                      TOOLS & TECHNOLOGIES
                    </span>
                    <div className="flex flex-wrap gap-1.5 font-mono text-xs">
                      {activeQuest.stack.map((item) => (
                        <span key={item} className="px-2 py-1 bg-stone-100 dark:bg-stone-800 text-stone-800 dark:text-stone-200 border border-stone-200 dark:border-stone-700">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="p-8 border border-dashed border-stone-400 dark:border-stone-700 text-center font-mono text-xs text-stone-500 dark:text-stone-400">
                HOVER OVER A QUEST TO INSPECT DETAILS
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
