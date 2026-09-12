import CountUp from '../reactbits/CountUp';
import { projects } from '../../data/projects';

export default function Stats() {
  const totalProjects = projects.length; // 10
  const awsServicesCount = 8; // Amplify, Lambda, S3, Bedrock, EventBridge, SNS, SageMaker, Polly

  return (
    <section
      aria-label="Engineering Metrics"
      className="border-b border-stone-300 dark:border-stone-800 bg-[#f7f5ef] dark:bg-[#110f0e] py-12 px-6 md:px-12 transition-colors"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between font-mono text-[11px] text-stone-500 dark:text-stone-400 uppercase tracking-widest pb-4 mb-8 border-b border-stone-200 dark:border-stone-800">
          <span>// VERIFIED WORKSPACE TELEMETRY</span>
          <span>REAL DATA · ZERO FABRICATED METRICS</span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {/* Projects Metric */}
          <div className="p-6 bg-white dark:bg-[#171614] border border-stone-300 dark:border-stone-800 shadow-sm flex flex-col justify-between">
            <span className="font-mono text-xs text-stone-400 dark:text-stone-500 uppercase tracking-wider">
              01 / BUILDS & TOOLS
            </span>
            <div className="my-4">
              <span className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-stone-900 dark:text-stone-100 tracking-tight">
                <CountUp to={totalProjects} duration={1.2} />
              </span>
              <span className="font-display font-black text-3xl text-accent">+</span>
            </div>
            <p className="font-mono text-xs text-stone-600 dark:text-stone-400 leading-snug">
              Documented projects, tools, and research explorations.
            </p>
          </div>

          {/* AWS Services Metric */}
          <div className="p-6 bg-white dark:bg-[#171614] border border-stone-300 dark:border-stone-800 shadow-sm flex flex-col justify-between">
            <span className="font-mono text-xs text-stone-400 dark:text-stone-500 uppercase tracking-wider">
              02 / AWS SERVICES
            </span>
            <div className="my-4">
              <span className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-stone-900 dark:text-stone-100 tracking-tight">
                <CountUp to={awsServicesCount} duration={1.2} />
              </span>
              <span className="font-display font-black text-3xl text-accent">+</span>
            </div>
            <p className="font-mono text-xs text-stone-600 dark:text-stone-400 leading-snug">
              Core cloud services used in active serverless architectures.
            </p>
          </div>

          {/* Active Period / Year Metric */}
          <div className="p-6 bg-white dark:bg-[#171614] border border-stone-300 dark:border-stone-800 shadow-sm flex flex-col justify-between">
            <span className="font-mono text-xs text-stone-400 dark:text-stone-500 uppercase tracking-wider">
              03 / CURRENT YEAR
            </span>
            <div className="my-4">
              <span className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-stone-900 dark:text-stone-100 tracking-tight">
                <CountUp to={2026} from={2024} duration={1.6} />
              </span>
            </div>
            <p className="font-mono text-xs text-stone-600 dark:text-stone-400 leading-snug">
              Undergraduate 3rd Year BE CSE · Karpagam College of Eng.
            </p>
          </div>

          {/* Production Deployments */}
          <div className="p-6 bg-white dark:bg-[#171614] border border-stone-300 dark:border-stone-800 shadow-sm flex flex-col justify-between">
            <span className="font-mono text-xs text-stone-400 dark:text-stone-500 uppercase tracking-wider">
              04 / PRODUCTION RELEASES
            </span>
            <div className="my-4">
              <span className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-accent tracking-tight">
                <CountUp to={3} duration={1.0} />
              </span>
              <span className="font-mono text-xs text-emerald-500 font-bold ml-2">● LIVE</span>
            </div>
            <p className="font-mono text-xs text-stone-600 dark:text-stone-400 leading-snug">
              Autonomous AI agent, SIH signal model, and enterprise NLC system.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
