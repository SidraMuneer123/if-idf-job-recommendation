export interface Job {
    title: string;
    description: string;
    category: string;
    type: string;
}

export const jobs: Job[] = [
    { title: 'Senior Chef', description: 'Experience in Italian cuisine.', category: 'Cooking', type: 'Full-time' },
    { title: 'Part-time Sous Chef', description: 'Experience with pastries.', category: 'Cooking', type: 'Part-time' },
    { title: 'Head Chef', description: 'Experience in French cuisine.', category: 'Cooking', type: 'Full-time' },
    { title: 'Junior Chef', description: 'No experience required.', category: 'Cooking', type: 'Part-time' },
    { title: 'IT Specialist', description: 'Experience in network security.', category: 'IT', type: 'Full-time' },
    { title: 'Data Analyst', description: 'Experience with data visualization.', category: 'IT', type: 'Full-time' },
    { title: 'Software Developer', description: 'Develops and maintains software applications.', category: 'Technology', type: 'Full-time' },

    { title: 'Marketing Manager', description: 'Oversees marketing strategies and campaigns.', category: 'Marketing', type: 'Full-time' },

    { title: 'Data Analyst', description: 'Analyzes data to provide business insights.', category: 'Data Science', type: 'Full-time' },

    { title: 'Graphic Designer', description: 'Creates visual content for various media.', category: 'Design', type: 'Contract' },

    { title: 'Sales Representative', description: 'Promotes and sells products or services.', category: 'Sales', type: 'Part-time' },
    ,
    { title: 'Customer Service Representative', description: 'Assists customers with inquiries and issues.', category: 'Customer Service', type: 'Full-time' },

    { title: 'Project Manager', description: 'Plans and oversees projects to ensure timely completion.', category: 'Management', type: 'Full-time' },

    { title: 'HR Specialist', description: 'Handles recruitment and employee relations.', category: 'Human Resources', type: 'Full-time' },

    { title: 'Content Writer', description: 'Creates written content for websites and other platforms.', category: 'Content Creation', type: 'Freelance' },

    { title: 'Accountant', description: 'Manages financial records and transactions.', category: 'Finance', type: 'Full-time' }

];
