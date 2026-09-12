import { useState } from 'react';
import { projects, type Project } from '../../data/projects';
import ProjectModal from '../ui/ProjectModal';
import { useInView } from '../../hooks/useInView';
import BorderGlow from '../reactbits/BorderGlow';
import AccordionGallery, { type AccordionGalleryItem } from '../reactbits/AccordionGallery';

// Curated architectural project imagery matching technical domain
const projectImages: Record<string, string> = {
  learnxp: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=900&auto=format&fit=crop&q=80',
  'sih-signal-analysis': 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&auto=format&fit=crop&q=80',
  'nlc-file-upload': 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=900&auto=format&fit=crop&q=80',
  minimaltab: '/minimaltab.png',
  'open-court-tracker': 'https://images.unsplash.com/photo-1450133064473-71024230f91b?w=900&auto=format&fit=crop&q=80',
  'court-case-tracker': 'https://images.unsplash.com/photo-1450133064473-71024230f91b?w=900&auto=format&fit=crop&q=80',
  'college-chatbot': 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900&auto=format&fit=crop&q=80',
  webcraft: '/webcraft.jpg',
  vicevibe: '/vicevibe.png',
  'minecraft-infra': '/minecraft-infra.png',
  'minecraft-server': '/minecraft-infra.png',
};

export default function SelectedBuilds() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { ref, isInView } = useInView(0.05);

  const moodscape = projects.find((p) => p.id === 'moodscape')!;
  const archiveProjects = projects.filter((p) => p.id !== 'moodscape');

  // Prepare items for Accordion Gallery
  const accordionItems: AccordionGalleryItem[] = archiveProjects.map((proj) => ({
    label: proj.title,
    image: proj.image || projectImages[proj.id] || 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&auto=format&fit=crop&q=80',
    description: proj.description,
    category: proj.categories[0]?.toUpperCase(),
    tech: proj.whatIUsed,
    status: proj.status,
    githubUrl: proj.githubUrl,
    liveUrl: proj.liveUrl,
    onInspect: () => setSelectedProject(proj),
  }));

  return (
    <section
      id="builds"
      ref={ref}
      aria-label="Selected Builds"
      className="scroll-mt-16 py-28 md:py-36 border-b border-stone-300 dark:border-stone-800 relative bg-[#faf9f5] dark:bg-[#0c0a09]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div
          className={`flex flex-col md:flex-row md:items-end justify-between border-b border-stone-300 dark:border-stone-800 pb-8 mb-20 md:mb-28 transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div>
            <div className="font-mono text-xs text-stone-500 dark:text-stone-400 uppercase tracking-widest mb-3">
              02 — THINGS I'VE MADE
            </div>
            <h2 className="font-display font-black text-4xl sm:text-6xl md:text-7xl tracking-tight text-stone-900 dark:text-stone-100 leading-none">
              SELECTED BUILDS.
            </h2>
          </div>
          <p className="font-mono text-xs text-stone-500 dark:text-stone-400 max-w-sm mt-4 md:mt-0 leading-relaxed uppercase tracking-wider">
            [ ARCHIVE: 10 BUILDS · FLAGSHIP AWS SHOWCASE · ACCORDION PHYSICAL GALLERY ]
          </p>
        </div>

        {/* ==================================================== */}
        {/* FLAGSHIP SHOWCASE: MOODSCAPE WITH BORDER GLOW       */}
        {/* ==================================================== */}
        <div className="mb-32 md:mb-44">
          <div className="border-t-2 border-stone-900 dark:border-stone-100 pt-6 mb-8 flex flex-wrap items-center justify-between font-mono text-xs">
            <div className="flex items-center gap-3">
              <span className="bg-stone-900 text-stone-100 dark:bg-stone-100 dark:text-stone-900 px-2.5 py-1 font-bold">
                FLAGSHIP BUILD
              </span>
              <span className="text-accent font-semibold tracking-wider uppercase">
                AUTONOMOUS CREATIVE AI AGENT / 2026
              </span>
            </div>
            <span className="text-stone-500 dark:text-stone-400 uppercase tracking-wider">
              STATUS: {moodscape.status} · AWS SERVERLESS
            </span>
          </div>

          <BorderGlow
            glowColor="30 85% 55%"
            borderRadius={12}
            glowRadius={28}
            glowIntensity={0.8}
            className="overflow-hidden"
          >
            <div className="p-8 sm:p-12 md:p-14 bg-white dark:bg-[#151311] border border-stone-300 dark:border-stone-800">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
                {/* Left: Overview & Story */}
                <div className="lg:col-span-6 space-y-6">
                  <div>
                    <span className="font-mono text-xs uppercase tracking-widest text-accent font-semibold block mb-2">
                      FLAGSHIP AWS ARCHITECTURE
                    </span>
                    <h3 className="font-display font-black text-4xl sm:text-6xl md:text-7xl tracking-tighter text-stone-900 dark:text-stone-100 leading-none mb-3">
                      MOODSCAPE
                    </h3>
                    <p className="font-mono text-sm uppercase tracking-widest text-stone-500 dark:text-stone-400">
                      Autonomous Creative AI Agent
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <span className="font-mono text-[11px] text-stone-400 dark:text-stone-500 uppercase tracking-widest block mb-1">
                        WHAT IT DOES
                      </span>
                      <p className="text-stone-700 dark:text-stone-300 text-base md:text-lg leading-relaxed font-light">
                        {moodscape.whatItIs}
                      </p>
                    </div>

                    <div>
                      <span className="font-mono text-[11px] text-stone-400 dark:text-stone-500 uppercase tracking-widest block mb-1">
                        HOW IT WORKS
                      </span>
                      <p className="text-stone-700 dark:text-stone-300 text-sm md:text-base leading-relaxed font-light">
                        {moodscape.whyIBuiltIt}
                      </p>
                    </div>
                  </div>

                  {/* Tech Stack Badges */}
                  <div>
                    <span className="font-mono text-[11px] text-stone-400 dark:text-stone-500 uppercase tracking-widest block mb-2">
                      TECH STACK
                    </span>
                    <div className="flex flex-wrap gap-1.5 font-mono text-xs">
                      {moodscape.whatIUsed.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 bg-stone-100 dark:bg-stone-800 text-stone-800 dark:text-stone-200 border border-stone-200 dark:border-stone-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Result & Actions */}
                  <div className="pt-4 border-t border-stone-200 dark:border-stone-800 flex flex-wrap items-center gap-4">
                    <button
                      onClick={() => setSelectedProject(moodscape)}
                      className="px-6 py-3 bg-accent text-white font-mono text-xs uppercase tracking-widest hover:bg-orange-600 transition-colors font-semibold shadow-sm cursor-pointer"
                    >
                      INSPECT FULL BLUEPRINT ↗
                    </button>
                    {moodscape.githubUrl && (
                      <a
                        href={moodscape.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-3 border border-stone-900 dark:border-stone-100 text-stone-900 dark:text-stone-100 font-mono text-xs uppercase tracking-widest hover:bg-stone-900 hover:text-white dark:hover:bg-stone-100 dark:hover:text-stone-900 transition-colors font-semibold"
                      >
                        GITHUB REPO ↗
                      </a>
                    )}
                    {moodscape.liveUrl && (
                      <a
                        href={moodscape.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-3 border border-stone-300 dark:border-stone-700 text-stone-700 dark:text-stone-300 font-mono text-xs uppercase tracking-widest hover:border-accent hover:text-accent transition-colors"
                      >
                        LIVE APP ↗
                      </a>
                    )}
                  </div>
                </div>

                {/* Right: Architecture Flow Visual Presentation */}
                <div className="lg:col-span-6 space-y-4">
                  <div className="p-6 sm:p-8 bg-stone-950 text-stone-100 border border-stone-800 shadow-xl relative">
                    <div className="flex items-center justify-between border-b border-stone-800 pb-4 mb-6">
                      <span className="font-mono text-xs uppercase tracking-widest text-accent font-semibold">
                        // AWS ARCHITECTURE PIPELINE
                      </span>
                      <span className="font-mono text-[11px] text-stone-400">
                        EVENT-DRIVEN FLOW
                      </span>
                    </div>

                    <div className="space-y-3 font-mono text-xs sm:text-sm">
                      <div className="p-3 bg-stone-900 border border-stone-800 flex justify-between items-center">
                        <span className="text-white font-medium">1. Amazon EventBridge</span>
                        <span className="text-stone-400 text-xs">Autonomous Trigger</span>
                      </div>
                      <div className="text-center text-accent text-xs">↓</div>
                      <div className="p-3 bg-stone-900 border border-stone-800 flex justify-between items-center">
                        <span className="text-white font-medium">2. AWS Lambda</span>
                        <span className="text-stone-400 text-xs">Serverless Orchestration</span>
                      </div>
                      <div className="text-center text-accent text-xs">↓</div>
                      <div className="p-3 bg-stone-900 border border-stone-800 flex justify-between items-center">
                        <span className="text-white font-medium">3. Amazon Bedrock / Nova Lite</span>
                        <span className="text-stone-400 text-xs">Foundation Model Gen</span>
                      </div>
                      <div className="text-center text-accent text-xs">↓</div>
                      <div className="p-3 bg-stone-900 border border-stone-800 flex justify-between items-center">
                        <span className="text-white font-medium">4. Amazon S3</span>
                        <span className="text-stone-400 text-xs">State Persistence</span>
                      </div>
                      <div className="text-center text-accent text-xs">↓</div>
                      <div className="p-3 bg-stone-900 border border-stone-800 flex justify-between items-center">
                        <span className="text-white font-medium">5. AWS Amplify</span>
                        <span className="text-stone-400 text-xs">React Client Delivery</span>
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-stone-800/80 flex items-center justify-between text-stone-400 font-mono text-xs">
                      <span>RESULT: ZERO IDLE COMPUTE COST</span>
                      <span className="text-accent font-semibold">100% SERVERLESS</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </BorderGlow>
        </div>

        {/* ==================================================== */}
        {/* REACT BITS: ACCORDION GALLERY (PROJECT ARCHIVE)     */}
        {/* ==================================================== */}
        <div className="mb-24 md:mb-32">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-8 pb-4 border-b border-stone-300 dark:border-stone-800">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-accent font-bold block mb-1">
                PHYSICAL ARCHIVE GALLERY
              </span>
              <h3 className="font-display font-black text-3xl sm:text-4xl text-stone-900 dark:text-stone-100">
                THE BROADER LAB COLLECTION
              </h3>
            </div>
            <span className="font-mono text-xs text-stone-400 dark:text-stone-500 mt-2 sm:mt-0">
              EXPAND ANY PANEL TO EXPLORE SYSTEM DETAILS
            </span>
          </div>

          {/* Accordion Gallery Component */}
          <div className="relative">
            <AccordionGallery
              items={accordionItems}
              defaultIndex={0}
              height={500}
              gap={12}
              radius={10}
              expandRatio={0.52}
              accentColor="#ea580c"
              overlayColor="#0c0a09"
              textColor="#ffffff"
              showLabels={true}
              trigger="click"
              className="border border-stone-300 dark:border-stone-800 shadow-md"
            />
          </div>
        </div>

        {/* ==================================================== */}
        {/* ARCHIVAL LEDGER TABLE                                */}
        {/* ==================================================== */}
        <div className="border-t-2 border-stone-900 dark:border-stone-100 pt-12">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-8">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-accent font-bold block mb-1">
                ENGINEERING LEDGER
              </span>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-stone-900 dark:text-stone-100">
                ALL 10 PROJECTS AT A GLANCE
              </h3>
            </div>
            <span className="font-mono text-xs text-stone-400 dark:text-stone-500 mt-2 sm:mt-0">
              CLICK ANY ROW TO OPEN TECHNICAL BLUEPRINT
            </span>
          </div>

          <div className="divide-y divide-stone-300 dark:divide-stone-800 border-y border-stone-300 dark:border-stone-800 font-mono text-xs">
            {projects.map((proj) => (
              <div
                key={proj.id}
                onClick={() => setSelectedProject(proj)}
                className="py-5 px-3 flex flex-col md:flex-row md:items-center justify-between gap-3 hover:bg-stone-100 dark:hover:bg-stone-900/60 transition-colors cursor-pointer group"
              >
                <div className="flex items-baseline gap-4">
                  <span className="text-stone-400 dark:text-stone-500 font-bold">{proj.number}</span>
                  <div>
                    <h4 className="font-display font-bold text-lg md:text-xl text-stone-900 dark:text-stone-100 group-hover:text-accent transition-colors">
                      {proj.title}
                    </h4>
                    <p className="text-stone-500 dark:text-stone-400 text-xs mt-0.5">{proj.description}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-right">
                  <div className="hidden lg:flex gap-2">
                    {proj.whatIUsed.slice(0, 3).map((tech) => (
                      <span key={tech} className="px-2 py-0.5 bg-stone-200 dark:bg-stone-800 text-stone-700 dark:text-stone-300 text-[11px]">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <span className="px-2 py-1 bg-stone-200 dark:bg-stone-800 text-stone-700 dark:text-stone-300 uppercase tracking-wider text-[10px]">
                    {proj.status}
                  </span>
                  <span className="text-stone-400 dark:text-stone-500 group-hover:text-stone-900 dark:group-hover:text-stone-100 group-hover:translate-x-1 transition-all">
                    ↗
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Slide-over / Modal for Deep Project Inspection */}
      <ProjectModal
        project={selectedProject}
        image={selectedProject ? (selectedProject.image || projectImages[selectedProject.id]) : undefined}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
