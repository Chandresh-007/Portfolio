export interface Milestone {
  id: string;
  title: string;
  description: string;
  status: 'completed' | 'active' | 'upcoming';
}

export const milestones: Milestone[] = [
  {
    id: 'aws-sbg',
    title: 'AWS Student Builder Group — Technical Lead',
    description: 'Took on the Technical Lead role, conducting workshops and guiding peers through cloud learning.',
    status: 'completed',
  },
  {
    id: 'cloud-quest',
    title: 'AWS Cloud Quest / Generative AI Practitioner',
    description: 'Completed AWS Cloud Quest sessions and Generative AI Practitioner learning path.',
    status: 'completed',
  },
  {
    id: 'builder-challenges',
    title: 'AWS Builder Challenges',
    description: 'Participated in AWS Builder Center challenges.',
    status: 'completed',
  },
  {
    id: 'moodscape',
    title: 'MoodScape',
    description: 'Built and shipped an autonomous AI creative agent using AWS services.',
    status: 'completed',
  },
  {
    id: 'builder-jacket',
    title: 'AWS Builder Jacket',
    description: 'Won an AWS Builder Jacket (2026) through an AWS Builder Center challenge.',
    status: 'completed',
  },
  {
    id: 'sih-2026',
    title: 'SIH 2026 Signal Analysis',
    description: 'Working on automated radio signal analysis for SIH 2026.',
    status: 'active',
  },
  {
    id: 'current-focus',
    title: 'Current Focus',
    description: 'Software development, cloud technologies, AI/ML, and building useful projects.',
    status: 'active',
  },
];
