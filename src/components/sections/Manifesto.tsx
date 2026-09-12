import { useInView } from '../../hooks/useInView';
import ProfileCard from '../reactbits/ProfileCard';
import BorderGlow from '../reactbits/BorderGlow';

const domains = [
  'Computer Science Engineering',
  'Cloud Architecture (AWS)',
  'Web Development & Systems',
  'AI / Machine Learning',
  'Operating Systems & Linux',
  'Independent Experiments',
];

export default function Manifesto() {
  const { ref, isInView } = useInView(0.08);

  return (
    <section
      id="manifesto"
      ref={ref}
      aria-label="Manifesto & About"
      className="scroll-mt-20 px-6 md:px-12 py-28 md:py-40 border-b border-stone-300 dark:border-stone-800 relative bg-[#faf9f5] dark:bg-[#0c0a09]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Marker */}
        <div className="flex items-center justify-between font-mono text-xs text-stone-500 dark:text-stone-400 uppercase tracking-widest pb-6 border-b border-stone-300 dark:border-stone-800 mb-16">
          <div className="flex items-center gap-3">
            <span className="text-accent font-bold">00</span>
            <span>/</span>
            <span>THE BUILDER MANIFESTO</span>
          </div>
          <span>IDENTITY // CHANDRESH P</span>
        </div>

        {/* Large Statement */}
        <blockquote className="mb-16 md:mb-20">
          <p
            className={`font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-stone-900 dark:text-stone-100 leading-[0.95] transition-all duration-700 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            "I learn by <span className="text-accent italic font-serif font-normal">building</span>."
          </p>
        </blockquote>

        {/* Two-Column Grid: Copy & Profile Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start pb-20 border-b border-stone-300 dark:border-stone-800">
          {/* Left: Main Copy & Core Principles */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4 text-xl sm:text-2xl text-stone-800 dark:text-stone-200 font-light leading-relaxed">
              <p>
                I don't learn technology by collecting tutorials.
              </p>
              <p className="text-stone-900 dark:text-stone-100 font-medium">
                I learn by trying to build something with it.
              </p>
              <p className="text-lg sm:text-xl text-stone-600 dark:text-stone-400">
                Some projects work. Some break. Some become something completely different.
              </p>
              <p className="text-accent font-mono text-base font-semibold tracking-wide">
                → That process is the point.
              </p>
            </div>

            {/* Disciplines Chips */}
            <div className="pt-4">
              <span className="font-mono text-xs text-stone-400 dark:text-stone-500 uppercase tracking-widest block mb-3">
                // ACTIVE DOMAINS & DISCIPLINES
              </span>
              <div className="flex flex-wrap gap-2 font-mono text-xs">
                {domains.map((d) => (
                  <span
                    key={d}
                    className="px-3 py-1.5 bg-white dark:bg-[#171614] border border-stone-300 dark:border-stone-800 text-stone-800 dark:text-stone-200"
                  >
                    {d}
                  </span>
                ))}
              </div>
            </div>

            {/* Question Cadence */}
            <div className="pt-6 space-y-3">
              <span className="font-mono text-xs text-stone-400 dark:text-stone-500 uppercase tracking-widest block mb-2">
                // THE INQUIRY PATTERN
              </span>
              <div className="space-y-2.5 font-mono text-xs sm:text-sm text-stone-700 dark:text-stone-300">
                <div className="flex items-center gap-3 p-3 bg-white dark:bg-[#171614] border border-stone-200 dark:border-stone-800">
                  <span className="text-accent font-bold">01</span>
                  <span>How does this work under the hood?</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white dark:bg-[#171614] border border-stone-200 dark:border-stone-800">
                  <span className="text-accent font-bold">02</span>
                  <span>Can I build a working version from scratch?</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white dark:bg-[#171614] border border-stone-200 dark:border-stone-800">
                  <span className="text-accent font-bold">03</span>
                  <span>Can I optimize the architecture to make it better?</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white dark:bg-[#171614] border border-stone-200 dark:border-stone-800">
                  <span className="text-accent font-bold">04</span>
                  <span>What happens if I push it further?</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: React Bits Profile Card (Identity Badge) with BorderGlow */}
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
                onContactClick={() => window.open('https://github.com/Chandresh-007', '_blank')}
                className="w-full"
              />
            </BorderGlow>
          </div>
        </div>
      </div>
    </section>
  );
}
