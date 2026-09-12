import { useInView } from '../../hooks/useInView';
import { socialLinks } from '../../data/personal';
import BorderGlow from '../reactbits/BorderGlow';
import { GithubIcon, LinkedinIcon, MailIcon } from '../ui/SocialIcons';

export default function Contact() {
  const { ref, isInView } = useInView(0.08);

  return (
    <section
      id="contact"
      ref={ref}
      aria-label="Contact & Colophon"
      className="scroll-mt-16 py-16 sm:py-24 md:py-36 px-4 sm:px-6 md:px-12 bg-[#f3f0e8] dark:bg-stone-950 text-stone-900 dark:text-stone-100 border-t border-stone-300 dark:border-stone-800 relative transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Marker */}
        <div className="flex items-center justify-between font-mono text-xs text-stone-500 dark:text-stone-400 uppercase tracking-widest pb-6 sm:pb-8 border-b border-stone-300 dark:border-stone-800 mb-10 sm:mb-16">
          <div className="flex items-center gap-3">
            <span className="text-accent font-bold">06</span>
            <span>/</span>
            <span>GET IN TOUCH</span>
          </div>
          <span className="truncate">COIMBATORE, TAMIL NADU, INDIA</span>
        </div>

        {/* Big Editorial Callout */}
        <div className="mb-12 sm:mb-20">
          <h2
            className={`font-display font-black text-3xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-stone-900 dark:text-white leading-[0.92] transition-all duration-700 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            GOT SOMETHING <br />
            <span className="text-accent">WORTH BUILDING?</span>
          </h2>

          <p className="mt-6 sm:mt-8 text-lg sm:text-2xl text-stone-700 dark:text-stone-300 font-light max-w-2xl leading-relaxed">
            I'm always interested in talking about cloud architecture, serverless pipelines, DSP challenges, hackathons, or building new tools from scratch.
          </p>
        </div>

        {/* Links Grid with Recognizable Icons & Micro-Interactions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 sm:pt-12 border-t border-stone-300 dark:border-stone-800 mb-16 sm:mb-24">
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chandresh P on GitHub"
            className="p-8 sm:p-10 bg-white dark:bg-stone-900/60 border border-stone-300 dark:border-stone-800 hover:border-accent dark:hover:border-accent hover:shadow-lg dark:hover:bg-stone-900 transition-all group flex flex-col justify-between h-52 focus-visible:outline-none"
          >
            <div className="flex justify-between items-center font-mono text-xs text-stone-500 dark:text-stone-400">
              <span className="flex items-center gap-2 font-semibold">
                <GithubIcon size={16} className="text-stone-700 dark:text-stone-300 group-hover:text-accent transition-colors" />
                CODE REPOSITORIES
              </span>
              <span className="text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform font-bold text-base">
                ↗
              </span>
            </div>
            <div>
              <div className="font-display font-black text-2xl sm:text-3xl text-stone-900 dark:text-white">GITHUB</div>
              <div className="font-mono text-xs text-stone-500 dark:text-stone-400 mt-1">github.com/Chandresh-007</div>
            </div>
          </a>

          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chandresh P on LinkedIn"
            className="p-8 sm:p-10 bg-white dark:bg-stone-900/60 border border-stone-300 dark:border-stone-800 hover:border-accent dark:hover:border-accent hover:shadow-lg dark:hover:bg-stone-900 transition-all group flex flex-col justify-between h-52 focus-visible:outline-none"
          >
            <div className="flex justify-between items-center font-mono text-xs text-stone-500 dark:text-stone-400">
              <span className="flex items-center gap-2 font-semibold">
                <LinkedinIcon size={16} className="text-stone-700 dark:text-stone-300 group-hover:text-accent transition-colors" />
                PROFESSIONAL PROFILE
              </span>
              <span className="text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform font-bold text-base">
                ↗
              </span>
            </div>
            <div>
              <div className="font-display font-black text-2xl sm:text-3xl text-stone-900 dark:text-white">LINKEDIN</div>
              <div className="font-mono text-xs text-stone-500 dark:text-stone-400 mt-1">linkedin.com/in/chandresh-p</div>
            </div>
          </a>

          <BorderGlow
            glowColor="30 85% 55%"
            borderRadius={8}
            glowRadius={22}
            glowIntensity={0.7}
            className="h-52"
          >
            <a
              href={`mailto:${socialLinks.email}`}
              aria-label="Send direct email to Chandresh P"
              className="p-8 sm:p-10 bg-white dark:bg-stone-900/90 border border-stone-300 dark:border-stone-800 hover:border-accent dark:hover:border-accent hover:shadow-lg dark:hover:bg-stone-900 transition-all group flex flex-col justify-between h-full focus-visible:outline-none"
            >
              <div className="flex justify-between items-center font-mono text-xs text-stone-500 dark:text-stone-400">
                <span className="flex items-center gap-2 text-accent font-bold">
                  <MailIcon size={16} className="text-accent" />
                  // DIRECT INQUIRY
                </span>
                <span className="text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform font-bold text-base">
                  ↗
                </span>
              </div>
              <div>
                <div className="font-display font-black text-2xl sm:text-3xl text-stone-900 dark:text-white">EMAIL</div>
                <div className="font-mono text-xs text-stone-500 dark:text-stone-400 mt-1">{socialLinks.email}</div>
              </div>
            </a>
          </BorderGlow>
        </div>

        {/* Colophon & Verification Footer */}
        <div className="pt-12 border-t border-stone-300 dark:border-stone-900 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 font-mono text-xs text-stone-500 dark:text-stone-400">
          <div className="space-y-1">
            <div className="text-stone-900 dark:text-stone-300 font-bold">COLOPHON</div>
            <p className="max-w-md text-stone-600 dark:text-stone-400">
              Designed & engineered by Chandresh P. Set in Space Grotesk, Inter, and JetBrains Mono. Built with React, Vite, TypeScript, and Tailwind CSS.
            </p>
          </div>

          <div className="text-right space-y-1">
            <div className="font-semibold">3RD YEAR CSE · KARPAGAM COLLEGE OF ENGINEERING</div>
            <div className="text-accent font-bold">ALL RIGHTS RESERVED © {new Date().getFullYear()}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
