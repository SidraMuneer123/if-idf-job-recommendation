

export interface Job {
    title: string;
    industry: string;
    type: 'full-time' | 'part-time';
    role: 'senior' | 'junior';
  }
  
  export const jobs: Job[] = [
    { title: 'Senior Software Engineer', industry: 'Tech', type: 'full-time', role: 'senior' },
    { title: 'Junior Software Developer', industry: 'Tech', type: 'part-time', role: 'junior' },
    { title: 'Senior Marketing Manager', industry: 'Marketing', type: 'full-time', role: 'senior' },
    { title: 'Junior Marketing Specialist', industry: 'Marketing', type: 'part-time', role: 'junior' },
    { title: 'Chef', industry: 'Culinary', type: 'full-time', role: 'junior' },
    { title: 'Pastry Chef', industry: 'Culinary', type: 'part-time', role: 'senior' },
    { title: 'Graphic Designer', industry: 'Design', type: 'full-time', role: 'junior' },
    { title: 'Senior UX Designer', industry: 'Design', type: 'full-time', role: 'senior' },
    { title: 'Data Scientist', industry: 'Tech', type: 'part-time', role: 'senior' },
    { title: 'Data Analyst', industry: 'Tech', type: 'full-time', role: 'junior' },
  ];
  