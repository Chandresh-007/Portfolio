export interface SkillCategory {
  title: string;
  items: string[];
}

export const skills: SkillCategory[] = [
  {
    title: 'Languages',
    items: ['Java', 'JavaScript', 'HTML', 'CSS', 'SQL'],
  },
  {
    title: 'Development',
    items: ['React', 'Node.js', 'JSP', 'Servlets', 'Maven'],
  },
  {
    title: 'Cloud',
    items: ['AWS', 'Amplify', 'Lambda', 'S3', 'Bedrock', 'EventBridge'],
  },
  {
    title: 'Tools',
    items: ['Git', 'GitHub', 'Docker', 'Linux', 'MySQL', 'SQLite', 'Tomcat'],
  },
  {
    title: 'Exploring',
    items: ['AI/ML', 'DSP', 'Game Infrastructure', 'Open Source'],
  },
];
