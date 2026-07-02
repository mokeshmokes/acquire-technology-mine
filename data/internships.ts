import { Clock, Award, FolderOpen } from 'lucide-react';

export interface Internship {
    id: string;
    title: string;
    description: string;
    duration: string;
    certificate: string;
    liveProject: string;
    gradient: string;
    image?: string;
}

export const internships: Internship[] = [
    {
        id: 'ai-internship',
        title: 'Artificial Intelligence Internship',
        description: 'Learn AI tools, Prompt Engineering, AI Agents, Automation, and Generative AI applications.',
        duration: '4 Weeks',
        certificate: 'Industry Internship Certificate',
        liveProject: 'AI Automation Project',
        gradient: 'from-primary/20 to-primary/5',
        image: '/images/courses/ai-internship.png',
    },
    {
        id: 'fullstack-internship',
        title: 'Full Stack Development Internship',
        description: 'Build modern web applications using HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB.',
        duration: '4 Weeks',
        certificate: 'Industry Internship Certificate',
        liveProject: 'Full Stack Web Application',
        gradient: 'from-primary/20 to-primary/5',
        image: '/images/courses/fullstack-internship.png',
    },
    {
        id: 'datascience-internship',
        title: 'Data Science Internship',
        description: 'Learn Python, Machine Learning, SQL, Power BI, Data Analytics, and Data Visualization.',
        duration: '4 Weeks',
        certificate: 'Industry Internship Certificate',
        liveProject: 'Business Analytics Dashboard',
        gradient: 'from-primary/20 to-primary/5',
        image: '/images/courses/datascience-internship.png',
    },
    {
        id: 'digitalmarketing-internship',
        title: 'Digital Marketing Internship',
        description: 'Master SEO, Google Ads, Social Media Marketing, Content Marketing, and Analytics.',
        duration: '4 Weeks',
        certificate: 'Industry Internship Certificate',
        liveProject: 'Live Marketing Campaign',
        gradient: 'from-primary/20 to-primary/5',
        image: '/images/courses/digitalmarketing-internship.png',
    },
];

export const internshipIcons = {
    duration: Clock,
    certificate: Award,
    project: FolderOpen,
};
