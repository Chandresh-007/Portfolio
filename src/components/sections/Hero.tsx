import { useTheme } from '../../context/ThemeContext';
import LaserFlow from '../reactbits/LaserFlow';
import SplitFlapText from '../reactbits/SplitFlapText';
import GradientText from '../reactbits/GradientText';
import { useInView } from '../../hooks/useInView';

export default function Hero() {
  const { theme } = useTheme();
  const { ref, isInView } = useInView(0.05);

  return (
    <section
      id="home"
      ref={ref}
      aria-label="Introduction"
      className="min-h-screen pt-24 sm:pt-32 md:pt-40 pb-12 sm:pb-16 px-4 sm:px-6 md:px-12 flex flex-col justify-between border-b border-stone-300 dark:border-stone-800 relative overflow-hidden bg-[#faf9f5] dark:bg-[#0c0a09]"
    >
      {/* React Bits: Laser Flow Background (Subtle Technical Atmosphere) */}
      <div className="absolute inset-0 -z-10 pointer-events-none opacity-20 dark:opacity-25 transition-opacity duration-1000 overflow-hidden">
        <LaserFlow
          color="#ea580c"
          backgroundColor={theme === 'dark' ? '#0c0a09' : '#faf9f5'}
          flowSpeed={0.3}
          mouseTiltStrength={0.05}
          fogIntensity={0.35}
          wispIntensity={0.6}
          wispSpeed={0.4}
        />
        {/* Soft Radial Vignette to keep text 100% readable */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#faf9f5]/50 to-[#faf9f5] dark:via-[#0c0a09]/60 dark:to-[#0c0a09]" />
      </div>

      {/* Top Editorial Index Row */}
      <div
        className={`flex flex-wrap items-center justify-between gap-3 sm:gap-4 font-mono text-xs text-stone-500 dark:text-stone-400 uppercase tracking-widest transition-opacity duration-700 ${
          isInView ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
          <span className="text-accent font-bold">VOL. 2026</span>
          <span className="text-stone-300 dark:text-stone-700">/</span>
          <span className="font-semibold text-stone-800 dark:text-stone-200">CHANDRESH P</span>
          <span className="text-stone-300 dark:text-stone-700 hidden sm:inline">/</span>
          <span className="hidden sm:inline">PERSONAL ENGINEERING WORKSPACE</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="hidden sm:inline">COIMBATORE</span>
          <span className="text-stone-300 dark:text-stone-700 hidden sm:inline">/</span>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-stone-700 dark:text-stone-300">SYS: ACTIVE</span>
          </div>
        </div>
      </div>

      {/* Main Massive Editorial Typography */}
      <div className="my-auto py-8 sm:py-12 md:py-16 relative z-10">
        <h1
          className={`font-display font-black text-stone-900 dark:text-stone-100 headline-display select-none transition-all duration-1000 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="block text-left">
            <GradientText
              colors={['#ea580c', '#f97316', '#fb923c', '#ea580c']}
              animationSpeed={6}
              className="inline-block text-left"
            >
              BUILDING
            </GradientText>
          </span>
          <span className="block text-stone-400 dark:text-stone-600 hover:text-stone-900 dark:hover:text-stone-200 transition-colors">
            THINGS.
          </span>
          <span className="block hover:text-stone-700 dark:hover:text-stone-300 transition-colors">
            TO FIND OUT
          </span>
          <span className="block hover:text-accent transition-colors">
            HOW THEY WORK.
          </span>
        </h1>

        {/* Supporting line */}
        <div
          className={`mt-6 sm:mt-8 md:mt-10 max-w-3xl transition-all duration-1000 delay-200 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <p className="text-lg sm:text-2xl md:text-3xl text-stone-700 dark:text-stone-300 font-normal leading-relaxed tracking-tight mb-6 sm:mb-8">
            Computer Science · Builder · Explorer
          </p>

          {/* React Bits: Split Flap Text (Compact Technical Status Machine) */}
          <div className="inline-flex flex-wrap items-center gap-2 sm:gap-3 p-2.5 sm:px-4 sm:py-2.5 bg-stone-900 text-stone-100 dark:bg-[#171614] border border-stone-700 dark:border-stone-800 shadow-md max-w-full">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
              <span className="font-mono text-[11px] uppercase tracking-widest text-stone-400">
                CURRENTLY:
              </span>
            </div>
            <div className="h-7 flex items-center">
              <SplitFlapText
                words={['BUILDING', 'DEPLOYING', 'LEARNING', 'EXPERIMENTING']}
                fontSize="12px"
                tileColor="#292524"
                textColor="#f97316"
                cycleDelay={2200}
                flipDuration={0.45}
                tileRadius={2}
                gap={2}
              />
            </div>
            <span className="font-mono text-[10px] text-stone-400 hidden sm:inline tracking-wider">
              [ LIVE REPL ]
            </span>
          </div>
        </div>
      </div>

      {/* Technical Metadata Strip */}
      <div
        className={`pt-6 sm:pt-8 border-t border-stone-300 dark:border-stone-800 flex flex-col md:flex-row md:items-center justify-between gap-6 transition-all duration-700 delay-300 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 md:gap-8 font-mono text-xs">
          <div>
            <span className="text-stone-400 dark:text-stone-500 block text-[10px] tracking-wider uppercase">01 / DISCIPLINE</span>
            <span className="text-stone-900 dark:text-stone-100 font-medium text-[11px] sm:text-xs">3RD YEAR BE CSE</span>
          </div>
          <div>
            <span className="text-stone-400 dark:text-stone-500 block text-[10px] tracking-wider uppercase">02 / LEADERSHIP</span>
            <span className="text-stone-900 dark:text-stone-100 font-medium text-[11px] sm:text-xs">AWS SBG TECH LEAD</span>
          </div>
          <div>
            <span className="text-stone-400 dark:text-stone-500 block text-[10px] tracking-wider uppercase">03 / ACTIVE PERIOD</span>
            <span className="text-stone-900 dark:text-stone-100 font-medium text-[11px] sm:text-xs">ALWAYS</span>
          </div>
          <div>
            <span className="text-stone-400 dark:text-stone-500 block text-[10px] tracking-wider uppercase">04 / FOCUS</span>
            <span className="text-stone-900 dark:text-stone-100 font-medium text-[11px] sm:text-xs">CLOUD · SYSTEMS · AI</span>
          </div>
        </div>

        <div className="flex items-center gap-2 font-mono text-xs text-stone-500 dark:text-stone-400 uppercase tracking-widest group">
          <span className="group-hover:text-stone-900 dark:group-hover:text-stone-100 transition-colors">SCROLL TO EXPLORE</span>
          <span className="text-accent font-bold animate-bounce">↓</span>
        </div>
      </div>
    </section>
  );
}
