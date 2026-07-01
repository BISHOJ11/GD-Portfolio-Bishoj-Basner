export interface Project {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
  year: string;
  client: string;
  tags: string[];
  challenge: string;
  solution: string;
  deliverables: string[];
}

export interface Skill {
  name: string;
  category: 'software' | 'design';
  percentage: number;
  color: string;
}

export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp: string;
}
