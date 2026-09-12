export interface AWSExperience {
  title: string;
  items: string[];
}

export const awsRole = {
  title: 'AWS Student Builder Group — KCE',
  position: 'Technical Lead',
} as const;

export const awsExperience: AWSExperience[] = [
  {
    title: 'Teaching & Workshops',
    items: [
      'Conducted AWS Cloud Quest sessions',
      'Taught Amazon S3',
      'Helped students through hands-on cloud learning',
      'Organized quizzes and practical learning activities',
    ],
  },
  {
    title: 'Building & Learning',
    items: [
      'Generative AI Practitioner learning path',
      'AWS Builder Center challenges',
      'AWS-powered project development',
    ],
  },
];

export const awsServices = [
  'Amazon S3',
  'AWS Lambda',
  'Amazon Bedrock',
  'Amazon Nova Lite',
  'AWS Amplify',
  'Amazon EventBridge',
  'Amazon SNS',
  'Amazon SageMaker AI',
  'Amazon Polly',
];

export const awsAchievement = {
  title: 'AWS Builder Jacket',
  description: 'Won an AWS Builder Jacket (2026) through an AWS Builder Center challenge.',
};
