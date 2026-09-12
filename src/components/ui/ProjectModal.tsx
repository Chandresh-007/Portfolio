import { useEffect } from 'react';
import type { Project } from '../../data/projects';

interface ProjectModalProps {
  project: Project | null;
  image?: string;
  onClose: () => void;
}

export default function ProjectModal({ project, image, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/60 dark:bg-black/80 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-100 border border-stone-300 dark:border-stone-800 shadow-2xl p-6 sm:p-8 md:p-12 transition-colors duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Strip */}
        <div className="flex items-center justify-between border-b border-stone-200 dark:border-stone-800 pb-6 mb-8">
          <div className="flex items-center gap-4">
            <span className="font-mono text-sm tracking-widest text-accent font-semibold">
              PROJECT {project.number}
            </span>
            <span className="font-mono text-xs text-stone-500 dark:text-stone-400 uppercase tracking-wider">
              STATUS: {project.status}
            </span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close project details"
            className="font-mono text-xs uppercase tracking-widest text-stone-500 dark:text-stone-400 hover:text-stone-950 dark:hover:text-white px-3 py-1.5 border border-stone-300 dark:border-stone-700 hover:border-stone-500 dark:hover:border-stone-500 transition-colors"
          >
            ESC / CLOSE ✕
          </button>
        </div>

        {/* Title & Tagline */}
        <div className="mb-8">
          <h2
            id="modal-project-title"
            className="font-display font-black text-3xl sm:text-4xl md:text-5xl tracking-tight text-stone-900 dark:text-white mb-2"
          >
            {project.title}
          </h2>
          <p className="font-mono text-sm sm:text-base text-stone-500 dark:text-stone-400 tracking-wide">
            {project.tagline}
          </p>
        </div>

        {/* Project Visual Banner */}
        {image && (
          <div className="mb-10 overflow-hidden border border-stone-200 dark:border-stone-800 bg-stone-100 dark:bg-stone-950 flex items-center justify-center p-2 rounded-sm shadow-inner">
            <img
              src={image}
              alt={project.title}
              className="w-full max-h-[380px] object-contain rounded-sm"
            />
          </div>
        )}

        {/* Architecture Pipeline if present */}
        {project.architecture && project.architecture.length > 0 && (
          <div className="mb-10 p-6 bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800">
            <div className="font-mono text-xs uppercase tracking-widest text-accent font-bold mb-4">
              // SYSTEM ARCHITECTURE FLOW
            </div>
            <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-2 sm:gap-3 text-xs sm:text-sm font-mono">
              {project.architecture.map((step, idx) => (
                <div key={idx} className="flex items-center gap-2 sm:gap-3">
                  <span className="px-3 py-1.5 bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-700 text-stone-800 dark:text-stone-200 shadow-sm font-medium">
                    {step}
                  </span>
                  {idx < project.architecture!.length - 1 && (
                    <span className="text-accent font-bold hidden sm:inline">→</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Deep Breakdown Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <div className="space-y-6">
            <div>
              <h3 className="font-mono text-xs uppercase tracking-widest text-stone-500 dark:text-stone-400 mb-2">
                01 — WHAT IT IS
              </h3>
              <p className="text-stone-700 dark:text-stone-300 text-sm sm:text-base leading-relaxed font-light">
                {project.whatItIs}
              </p>
            </div>

            <div>
              <h3 className="font-mono text-xs uppercase tracking-widest text-stone-500 dark:text-stone-400 mb-2">
                02 — WHY I BUILT IT
              </h3>
              <p className="text-stone-700 dark:text-stone-300 text-sm sm:text-base leading-relaxed font-light">
                {project.whyIBuiltIt}
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="font-mono text-xs uppercase tracking-widest text-stone-500 dark:text-stone-400 mb-2">
                03 — WHAT I LEARNED
              </h3>
              <p className="text-stone-700 dark:text-stone-300 text-sm sm:text-base leading-relaxed font-light">
                {project.whatILearned}
              </p>
            </div>

            <div>
              <h3 className="font-mono text-xs uppercase tracking-widest text-stone-500 dark:text-stone-400 mb-2">
                04 — TECHNOLOGIES USED
              </h3>
              <div className="flex flex-wrap gap-2 pt-1">
                {project.whatIUsed.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-xs px-2.5 py-1 bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-stone-700 dark:text-stone-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-stone-200 dark:border-stone-800">
          <div className="flex items-center gap-4">
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-white font-mono text-xs uppercase tracking-widest hover:bg-accent-dark transition-colors font-semibold"
              >
                LIVE DEMO ↗
              </a>
            ) : (
              <span className="font-mono text-xs text-stone-500 dark:text-stone-400 border border-stone-300 dark:border-stone-800 px-3 py-2 bg-stone-50 dark:bg-stone-900/40">
                [ PROTOTYPE RUNNING LOCALLY / AWS ]
              </span>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-stone-100 dark:bg-stone-800 border border-stone-300 dark:border-stone-700 text-stone-800 dark:text-stone-200 font-mono text-xs uppercase tracking-widest hover:bg-stone-200 dark:hover:bg-stone-700 transition-colors font-semibold"
              >
                GITHUB REPO ↗
              </a>
            )}
          </div>

          <span className="font-mono text-xs text-stone-500 dark:text-stone-400">
            CHANDRESH P · ENGINEERING ARCHIVE
          </span>
        </div>
      </div>
    </div>
  );
}
