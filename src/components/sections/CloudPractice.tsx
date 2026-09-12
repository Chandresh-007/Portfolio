import { useState } from 'react';
import { useInView } from '../../hooks/useInView';

interface ServiceDetail {
  name: string;
  role: string;
  implementation: string;
  status: 'Production Used' | 'Workshop & Lab';
}

const servicesMap: ServiceDetail[] = [
  {
    name: 'AMPLIFY',
    role: 'Frontend Hosting & CI/CD',
    implementation: 'Deployed client frontends with automatic branch deployments and global edge CDN distribution.',
    status: 'Production Used',
  },
  {
    name: 'LAMBDA',
    role: 'Serverless Orchestration Engine',
    implementation: 'Built event-driven backend functions for MoodScape and webhook integrations with zero persistent compute cost.',
    status: 'Production Used',
  },
  {
    name: 'S3',
    role: 'Immutable Object & State Storage',
    implementation: 'Stored generated model artifacts, web assets, and conducted campus workshops on S3 bucket policies and CORS.',
    status: 'Production Used',
  },
  {
    name: 'BEDROCK',
    role: 'Foundation Model Inference API',
    implementation: 'Integrated Amazon Bedrock with Nova Lite for autonomous creative agent generative pipelines.',
    status: 'Production Used',
  },
  {
    name: 'EVENTBRIDGE',
    role: 'Autonomous Scheduled Event Bus',
    implementation: 'Configured cron-driven rules that trigger Lambda execution loops for autonomous generative runs.',
    status: 'Production Used',
  },
  {
    name: 'SNS',
    role: 'Pub/Sub Messaging & Notifications',
    implementation: 'Configured alert topics and fan-out message pipelines for distributed event broadcasting.',
    status: 'Workshop & Lab',
  },
  {
    name: 'SAGEMAKER',
    role: 'Machine Learning Model Exploration',
    implementation: 'Explored model tuning and inference endpoints during the Generative AI Practitioner path.',
    status: 'Workshop & Lab',
  },
  {
    name: 'POLLY',
    role: 'Neural Speech Synthesis Engine',
    implementation: 'Experimented with real-time text-to-speech conversion for audio agent prototypes.',
    status: 'Workshop & Lab',
  },
];

export default function CloudPractice() {
  const [activeService, setActiveService] = useState<ServiceDetail>(servicesMap[0]);
  const { ref, isInView } = useInView(0.08);

  return (
    <section
      id="cloud"
      ref={ref}
      aria-label="AWS Cloud Practice"
      className="scroll-mt-16 py-28 md:py-36 border-b border-stone-300 dark:border-stone-800 relative bg-[#faf9f5] dark:bg-[#0c0a09]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div
          className={`border-b border-stone-300 dark:border-stone-800 pb-8 mb-16 transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="font-mono text-xs text-stone-500 dark:text-stone-400 uppercase tracking-widest mb-2.5">
            05 — CLOUD ARCHITECTURE & LEADERSHIP
          </div>
          <h2 className="font-display font-black text-4xl sm:text-6xl md:text-7xl tracking-tight text-stone-900 dark:text-stone-100 leading-none mb-3">
            CLOUD, IN PRACTICE.
          </h2>
          <p className="text-xl md:text-2xl text-stone-700 dark:text-stone-300 font-light max-w-2xl leading-relaxed">
            "Cloud became much more interesting once I started building with it."
          </p>
        </div>

        {/* Technical Blueprint Map Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-24">
          {/* Left Column: Service Network Index */}
          <div className="lg:col-span-7">
            <div className="font-mono text-xs text-stone-400 dark:text-stone-500 uppercase tracking-widest mb-5 flex justify-between font-semibold">
              <span>// AWS SERVICE TOPOLOGY</span>
              <span>SELECT NODE TO INSPECT</span>
            </div>

            <div className="divide-y divide-stone-200 dark:divide-stone-800 border-y border-stone-300 dark:border-stone-800 font-mono">
              {servicesMap.map((svc, idx) => {
                const isSelected = activeService.name === svc.name;
                return (
                  <div
                    key={svc.name}
                    onClick={() => setActiveService(svc)}
                    className={`py-4 px-3 flex items-center justify-between cursor-pointer transition-all ${
                      isSelected
                        ? 'bg-stone-900 text-stone-100 dark:bg-stone-100 dark:text-stone-900 pl-5'
                        : 'hover:bg-stone-100 dark:hover:bg-stone-900/60 text-stone-900 dark:text-stone-100'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span className={`text-xs font-bold ${isSelected ? 'text-accent' : 'text-stone-400 dark:text-stone-500'}`}>
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <span className="font-display font-bold text-lg tracking-wider">
                        {svc.name}
                      </span>
                    </div>

                    <div className="flex items-center gap-4">
                      <span
                        className={`text-xs hidden sm:inline ${
                          isSelected ? 'text-stone-300 dark:text-stone-700' : 'text-stone-500 dark:text-stone-400'
                        }`}
                      >
                        {svc.role}
                      </span>
                      <span
                        className={`text-[10px] px-2 py-0.5 uppercase tracking-wider font-semibold ${
                          svc.status === 'Production Used'
                            ? isSelected
                              ? 'bg-accent text-white'
                              : 'bg-stone-200 dark:bg-stone-800 text-stone-800 dark:text-stone-200'
                            : isSelected
                            ? 'bg-stone-800 dark:bg-stone-200 text-stone-300 dark:text-stone-800'
                            : 'bg-stone-100 dark:bg-stone-800 text-stone-500 dark:text-stone-400'
                        }`}
                      >
                        {svc.status}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Node Inspection Inspector */}
          <div className="lg:col-span-5">
            <div className="bg-white dark:bg-[#171614] border border-stone-300 dark:border-stone-800 p-8 sm:p-10 shadow-sm relative h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between font-mono text-xs text-stone-400 dark:text-stone-500 pb-3 border-b border-stone-200 dark:border-stone-800 mb-5">
                  <span>TELEMETRY_VIEW</span>
                  <span className="text-accent font-bold">{activeService.name}</span>
                </div>

                <span className="font-mono text-xs uppercase tracking-widest text-accent font-bold block mb-1">
                  SYSTEM ARCHITECTURE ROLE
                </span>
                <h3 className="font-display font-black text-2xl sm:text-3xl text-stone-900 dark:text-stone-100 mb-3">
                  {activeService.role}
                </h3>

                <p className="text-stone-800 dark:text-stone-200 leading-relaxed text-base mb-6 font-light">
                  {activeService.implementation}
                </p>
              </div>

              <div className="pt-6 border-t border-stone-200 dark:border-stone-800 font-mono text-xs text-stone-500 dark:text-stone-400 space-y-2">
                <div className="flex justify-between">
                  <span>ENVIRONMENT:</span>
                  <span className="text-stone-900 dark:text-stone-100 font-bold">AWS US-EAST-1 / ASIA-SOUTH-1</span>
                </div>
                <div className="flex justify-between">
                  <span>INFRASTRUCTURE:</span>
                  <span className="text-stone-900 dark:text-stone-100 font-bold">Serverless / Event-Driven</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Leadership & Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pt-16 border-t border-stone-300 dark:border-stone-800">
          {/* Role Highlight */}
          <div className="md:col-span-5 space-y-6">
            <div className="font-mono text-xs text-accent font-bold uppercase tracking-widest">
              AWS SBG TECH LEAD @ KCE
            </div>
            <div>
              <h3 className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-stone-900 dark:text-stone-100 tracking-tight">
                AWS STUDENT BUILDER GROUP
              </h3>
              <p className="font-mono text-xs text-stone-700 dark:text-stone-300 font-bold mt-1">
                KARPAGAM COLLEGE OF ENGINEERING · TECHNICAL LEAD
              </p>
            </div>
            <p className="text-stone-800 dark:text-stone-200 leading-relaxed font-light text-sm sm:text-base">
              Technical Lead for the AWS Student Builder Group (AWS SBG) at Karpagam College of Engineering (KCE) — organizing hands-on cloud enablement, moving peers from theory into real cloud deployments and architecture design.
            </p>
            <div className="space-y-2 font-mono text-xs sm:text-sm text-stone-800 dark:text-stone-200 border-l-2 border-stone-900 dark:border-stone-100 pl-3 py-0.5">
              <div>→ Conducted AWS Cloud Quest sessions</div>
              <div>→ Facilitated hands-on Amazon S3 security & hosting workshops</div>
              <div>→ Completed Generative AI Practitioner learning path</div>
              <div>→ Participated in AWS Builder Center challenges</div>
            </div>
          </div>

          {/* Monumental Achievement Treatment: AWS BUILDER JACKET */}
          <div className="md:col-span-7 bg-stone-900 text-stone-100 p-8 sm:p-12 border border-stone-800 flex flex-col justify-between shadow-xl">
            <div className="flex items-center justify-between font-mono text-xs text-stone-400 pb-5 border-b border-stone-800">
              <span className="text-accent font-bold">// VERIFIED MILESTONE</span>
              <span>AWS BUILDER CENTER CHALLENGE</span>
            </div>

            <div className="my-8">
              <span className="font-mono text-xs uppercase tracking-widest text-stone-400 block mb-2">
                NATIONAL CHALLENGE AWARD
              </span>
              <h4 className="font-display font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tighter text-white leading-none">
                AWS BUILDER JACKET
              </h4>
            </div>

            <div className="pt-6 border-t border-stone-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs text-stone-400">
              <p className="max-w-md leading-relaxed">
                Awarded by AWS through competitive builder challenges — testing real cloud problem solving under competition criteria.
              </p>
              <span className="text-accent font-bold uppercase tracking-wider shrink-0 text-xs">
                [ CONFIRMED 2026 ]
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
