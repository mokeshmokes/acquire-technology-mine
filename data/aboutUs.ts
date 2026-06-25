import {
    Users,
    BookOpen,
    Brain,
    Award,
    MessageSquare,
    FileCheck,
    UserPlus,
    GraduationCap,
    Briefcase,
    Rocket,
    Target,
} from 'lucide-react';

export const aboutHeroData = {
    badge: 'ABOUT ACQUIRING TECHNOLOGY',
    heading: {
        main: 'Building Future',
        highlight: 'Technology Leaders',
        suffix: 'With Practical Learning',
    },
    description:
        'We are a premier technology education institute committed to transforming aspiring professionals into industry-ready experts. Through hands-on learning, expert mentorship, and real-world projects, we bridge the gap between academic knowledge and industry demands.',
    buttons: [
        { label: 'Learn More', variant: 'primary' as const },
        { label: 'Meet Our Mentors', variant: 'secondary' as const },
    ],
    video: '/videos/about-hero.mp4', // Fallback to hero video if not available
    image: '/images/about/hero-image.jpg', // Temporary placeholder
};

export const statisticsData = [
    {
        id: 'students',
        value: 5000,
        suffix: '+',
        label: 'Students Trained',
    },
    {
        id: 'courses',
        value: 150,
        suffix: '+',
        label: 'Technology Courses',
    },
    {
        id: 'mentors',
        value: 50,
        suffix: '+',
        label: 'Industry Mentors',
    },
    {
        id: 'placement',
        value: 95,
        suffix: '%',
        label: 'Placement Support',
    },
];

export const whyChooseUsData = [
    {
        id: 'mentorship',
        icon: Users,
        title: 'Live Industry Mentorship',
        description:
            'Learn directly from working professionals with 10+ years of experience in top tech companies.',
    },
    {
        id: 'projects',
        icon: Briefcase,
        title: 'Real World Projects',
        description:
            'Build production-ready applications that solve actual business problems and showcase your skills.',
    },
    {
        id: 'ai-learning',
        icon: Brain,
        title: 'AI Powered Learning',
        description:
            'Personalized learning paths powered by AI that adapt to your pace and learning style.',
    },
    {
        id: 'placement',
        icon: Award,
        title: 'Placement Assistance',
        description:
            'Comprehensive placement support including resume building, mock interviews, and job referrals.',
    },
    {
        id: 'interview',
        icon: MessageSquare,
        title: 'Interview Preparation',
        description:
            'Intensive interview preparation with real coding challenges and behavioral interview coaching.',
    },
    {
        id: 'certification',
        icon: FileCheck,
        title: 'Industry Certifications',
        description:
            'Earn globally recognized certifications that validate your skills and boost your career prospects.',
    },
];

export const learningJourneyData = [
    {
        id: 'join',
        icon: UserPlus,
        title: 'Join',
        subtitle: 'Enroll in your chosen program',
    },
    {
        id: 'learn',
        icon: BookOpen,
        title: 'Learn',
        subtitle: 'Master concepts with expert guidance',
    },
    {
        id: 'build',
        icon: Briefcase,
        title: 'Build Projects',
        subtitle: 'Create real-world applications',
    },
    {
        id: 'internship',
        icon: GraduationCap,
        title: 'Internship',
        subtitle: 'Gain industry experience',
    },
    {
        id: 'placement',
        icon: Rocket,
        title: 'Placement',
        subtitle: 'Land your dream tech job',
    },
];

export const mentorsData = [
    {
        id: 'mentor-1',
        name: 'Rajesh Kumar',
        technology: 'Full Stack Development',
        experience: '12+ Years',
        description: 'Ex-Google, Amazon. Specialized in scalable web applications and cloud architecture.',
        image: '/images/mentors/mentor-1.jpg', // Placeholder
    },
    {
        id: 'mentor-2',
        name: 'Priya Sharma',
        technology: 'Data Science & AI',
        experience: '10+ Years',
        description: 'Ex-Microsoft, Meta. Expert in machine learning, deep learning, and AI systems.',
        image: '/images/mentors/mentor-2.jpg', // Placeholder
    },
    {
        id: 'mentor-3',
        name: 'Amit Patel',
        technology: 'Cloud & DevOps',
        experience: '15+ Years',
        description: 'Ex-AWS, IBM. Specialized in cloud infrastructure and CI/CD automation.',
        image: '/images/mentors/mentor-3.jpg', // Placeholder
    },
    {
        id: 'mentor-4',
        name: 'Sneha Reddy',
        technology: 'Cyber Security',
        experience: '8+ Years',
        description: 'Ex-Cisco, Palo Alto. Expert in network security and ethical hacking.',
        image: '/images/mentors/mentor-4.jpg', // Placeholder
    },
];

export const visionMissionData = {
    vision: {
        title: 'Vision',
        description:
            'Empowering students with practical technology education that prepares them for global careers.',
        icon: Target,
    },
    mission: {
        title: 'Mission',
        description:
            'Delivering industry-focused learning through expert mentorship, real-world projects, innovation, and continuous career guidance.',
        icon: Rocket,
    },
};

export const ctaData = {
    heading: 'Ready to Build Your Technology Career?',
    description: 'Start learning with industry experts and become job-ready.',
    buttons: [
        { label: 'Apply Now', variant: 'primary' as const, href: '/apply' },
        { label: 'Contact Us', variant: 'secondary' as const, href: '/contact' },
    ],
};
