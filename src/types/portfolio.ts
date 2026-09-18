export interface Experience {
  id: string;
  company: string;
  role: string;
  location: string;
  period: string;
  current?: boolean;
  type: 'Full-time' | 'Internship';
  summary: string;
  responsibilities: string[];
  technologies: string[];
  metrics?: { label: string; value: string }[];
}

export type ProjectCategory = 
  | 'All' 
  | 'Enterprise & Banking' 
  | 'AI & GenAI' 
  | 'Cloud & Automation' 
  | 'IoT & Healthcare';

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  subtitle: string;
  shortDescription: string;
  fullDescription: string;
  architecturePoints: string[];
  technologies: string[];
  featured?: boolean;
  award?: string;
  impactMetrics?: { label: string; value: string }[];
  githubUrl?: string;
  liveUrl?: string;
  demoType?: 'oneview-ai' | 'chatbot-demo' | 'solar-iot' | 'incident-system';
}

export interface SkillItem {
  name: string;
  proficiency?: 'Advanced' | 'Proficient' | 'Exploring';
  recent?: boolean;
  featured?: boolean;
}

export interface SkillCategoryGroup {
  id: string;
  title: string;
  description: string;
  iconName: string;
  skills: SkillItem[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialId?: string;
  credentialUrl?: string;
  skills: string[];
  status?: 'Completed' | 'In Progress' | 'Specialized';
}

export interface LeadershipItem {
  id: string;
  title: string;
  organization?: string;
  role: string;
  period: string;
  summary: string;
  highlights: string[];
  icon?: string;
  category?: 'Corporate & Community' | 'Competitions & Hackathons' | 'Academic Excellence' | string;
  credentialUrl?: string;
}

export interface Education {
  degree: string;
  field?: string;
  institution: string;
  location: string;
  period: string;
  score: string;
  highlights: string[];
}
