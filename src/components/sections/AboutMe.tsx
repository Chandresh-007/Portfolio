import { useInView } from '../../hooks/useInView';
import ProfileCard from '../reactbits/ProfileCard';
import BorderGlow from '../reactbits/BorderGlow';
import { GithubIcon, LinkedinIcon, MailIcon } from '../ui/SocialIcons';
import { socialLinks } from '../../data/personal';

export default function AboutMe() {
  const { ref, isInView } = useInView(0.08);

  return (
    <section
      id="about"
      ref={ref}
      aria-label="About Me"
      className="scroll-mt-16 px-6 md:px-12 py-28 md:py-36 border-b border-stone-300 dark:border-stone-800 relative bg-[#faf9f5] dark:bg-[#0c0a09]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center justify-between font-mono text-xs text-stone-500 dark:text-stone-400 uppercase tracking-widest pb-6 border-b border-stone-300 dark:border-stone-800 mb-16">
          <div className="flex items-center gap-3">
            <span className="text-accent font-bold">01</span>
            <span>/</span>
            <span>ABOUT ME</span>
          </div>
          <span>IDENTITY // CHANDRESH P</span>
        </div>

        {/* Big Editorial Statement */}
        <blockquote className="mb-14 md:mb-18">
          <h2
            className={`font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-stone-900 dark:text-stone-100 leading-[0.95] transition-all duration-700 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            "I learn by <span className="text-accent italic font-serif font-normal">building</span>."
          </h2>
        </blockquote>

        {/* Two-Column Layout: Story & Integrated Profile Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: Natural Student/Developer Narrative */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-5 text-lg sm:text-xl text-stone-700 dark:text-stone-300 font-light leading-relaxed">
              <p>
                I'm a Computer Science Engineering student who learns best by building things and figuring out why they work.
              </p>
              <p>
                I jump between web development, cloud, AI, systems and random side projects depending on what catches my attention.
              </p>
              <p>
                Some of the things I build are serious projects. Others start because I was curious about something and wanted to see if I could make it work.
              </p>
              <p className="text-stone-900 dark:text-stone-100 font-medium text-base sm:text-lg border-l-2 border-accent pl-4 py-1">
                The common thread is simple: I like taking an idea, turning it into something real, breaking it a few times, and learning from the process.
              </p>
            </div>

            {/* Quick Metadata Matrix */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-stone-300 dark:border-stone-800 font-mono text-xs">
              <div>
                <span className="text-stone-400 dark:text-stone-500 uppercase tracking-wider block mb-1">BASED IN</span>
                <span className="text-stone-900 dark:text-stone-100 font-semibold text-sm">COIMBATORE</span>
              </div>
              <div>
                <span className="text-stone-400 dark:text-stone-500 uppercase tracking-wider block mb-1">CURRENTLY</span>
                <span className="text-stone-900 dark:text-stone-100 font-semibold text-sm">3RD YEAR · CSE</span>
              </div>
              <div>
                <span className="text-stone-400 dark:text-stone-500 uppercase tracking-wider block mb-1">INTERESTS</span>
                <span className="text-stone-900 dark:text-stone-100 font-semibold text-sm">WEB · CLOUD · AI · SYSTEMS · EXPERIMENTS</span>
              </div>
            </div>

            {/* Engineering Inquiry Cadence */}
            <div className="pt-6 space-y-3">
              <span className="font-mono text-xs text-stone-400 dark:text-stone-500 uppercase tracking-widest block mb-2">
                // HOW I APPROACH CODE
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono text-stone-700 dark:text-stone-300">
                <div className="p-3.5 bg-white dark:bg-[#171614] border border-stone-200 dark:border-stone-800">
                  <span className="text-accent font-bold block mb-1">01 / DISSECT</span>
                  <span>Understand how it works under the hood before reaching for abstractions.</span>
                </div>
                <div className="p-3.5 bg-white dark:bg-[#171614] border border-stone-200 dark:border-stone-800">
                  <span className="text-accent font-bold block mb-1">02 / PROTOTYPE</span>
                  <span>Build a working version from scratch to validate real constraints.</span>
                </div>
                <div className="p-3.5 bg-white dark:bg-[#171614] border border-stone-200 dark:border-stone-800">
                  <span className="text-accent font-bold block mb-1">03 / BREAK & LEARN</span>
                  <span>Deploy to real environments, diagnose bottlenecks, and internalize why it failed.</span>
                </div>
                <div className="p-3.5 bg-white dark:bg-[#171614] border border-stone-200 dark:border-stone-800">
                  <span className="text-accent font-bold block mb-1">04 / REFINE</span>
                  <span>Simplify the architecture, remove dead weight, and make it rock-solid.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Integrated ProfileCard with BorderGlow & Social Actions */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="font-mono text-xs text-stone-400 dark:text-stone-500 uppercase tracking-widest mb-4 flex items-center justify-between w-full max-w-sm">
              <span>// IDENTITY BADGE</span>
              <span className="text-accent font-bold">● ACTIVE</span>
            </div>

            <BorderGlow
              glowColor="30 85% 55%"
              borderRadius={20}
              glowRadius={24}
              glowIntensity={0.7}
              className="w-full max-w-sm"
            >
              <ProfileCard
                avatarUrl="/profile.png"
                miniAvatarUrl="/profile.png"
                name="CHANDRESH P"
                title="Computer Science Engineering"
                handle="Chandresh-007"
                status="AVAILABLE FOR OPPORTUNITIES"
                contactText="CONNECT ON GITHUB ↗"
                behindGlowEnabled={true}
                behindGlowColor="rgba(234, 88, 12, 0.35)"
                onContactClick={() => window.open(socialLinks.github, '_blank')}
                className="w-full"
              />
            </BorderGlow>

            {/* Accessible Direct Connect Action Row */}
            <div className="w-full max-w-sm mt-4 p-3 bg-white dark:bg-[#171614] border border-stone-300 dark:border-stone-800 flex items-center justify-between">
              <span className="font-mono text-xs text-stone-500 dark:text-stone-400 uppercase tracking-wider">
                DIRECT CHANNELS:
              </span>
              <div className="flex items-center gap-2">
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-2 border border-stone-300 dark:border-stone-700 bg-stone-50 dark:bg-stone-900 text-stone-700 dark:text-stone-300 hover:text-accent hover:border-accent transition-colors"
                >
                  <GithubIcon size={16} />
                </a>
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-2 border border-stone-300 dark:border-stone-700 bg-stone-50 dark:bg-stone-900 text-stone-700 dark:text-stone-300 hover:text-accent hover:border-accent transition-colors"
                >
                  <LinkedinIcon size={16} />
                </a>
                <a
                  href={`mailto:${socialLinks.email}`}
                  aria-label="Send Email"
                  className="p-2 border border-stone-300 dark:border-stone-700 bg-stone-50 dark:bg-stone-900 text-stone-700 dark:text-stone-300 hover:text-accent hover:border-accent transition-colors"
                >
                  <MailIcon size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
