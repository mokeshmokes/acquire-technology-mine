import {
    Home,
    GraduationCap,
    Code2,
    Brain,
    Database,
    Shield,
    Cloud,
    Boxes,
    Palette,
    TrendingUp,
    BarChart3,
    BookOpen,
    FileText,
    Award,
    Download,
    HelpCircle,
    Search,
    Building2,
    Users,
    Heart,
    Newspaper,
    Radio,
    HeadphonesIcon,
    FileCheck,
    Calendar,
    Image,
    Trophy,
    Handshake,
    Lock,
    FileWarning,
} from 'lucide-react';
import type {
    NavigationItem,
    MegaMenuCategory,
    ResourceCategory,
    MoreMenuCategory,
    ActionButton,
} from '@/types/navigation';

export const mainNavigation: NavigationItem[] = [
    { label: 'Home', href: '/' },
    { label: 'Live course', href: '/live-course' },
    { label: 'Course', href: '/course', hasMegaMenu: true },
    { label: 'About us', href: '/about-us' },
    { label: 'Contact', href: '/contact' },
];

// Compact Courses Dropdown Data
export const compactCourses = [
    {
        id: 'ai-engineer-program',
        title: 'AI Engineer Program (Gen AI + AI Agents)',
        description: 'Master Generative AI, Large Language Models, AI Agents, Prompt Engineering, RAG, AI Automation and real-world AI projects.',
        href: '#',
        icon: Brain,
    },
    {
        id: 'data-science',
        title: 'Data Science',
        description: 'Learn Python, Machine Learning, Deep Learning, Statistics, Data Analytics, Visualization and AI-powered decision making.',
        href: '#',
        icon: Database,
    },
];

export const coursesMegaMenu: MegaMenuCategory[] = [
    {
        category: 'Development',
        items: [
            {
                icon: Code2,
                title: 'Software Development',
                description: 'Full-stack development with modern frameworks',
                href: '/courses/software-development',
            },
            {
                icon: Brain,
                title: 'Artificial Intelligence',
                description: 'Machine learning and AI fundamentals',
                href: '/courses/artificial-intelligence',
            },
            {
                icon: Database,
                title: 'Data Science',
                description: 'Analytics, visualization, and insights',
                href: '/courses/data-science',
            },
            {
                icon: Shield,
                title: 'Cyber Security',
                description: 'Network security and ethical hacking',
                href: '/courses/cyber-security',
            },
        ],
    },
    {
        category: 'Infrastructure & Design',
        items: [
            {
                icon: Cloud,
                title: 'Cloud Computing',
                description: 'AWS, Azure, and cloud architecture',
                href: '/courses/cloud-computing',
            },
            {
                icon: Boxes,
                title: 'DevOps',
                description: 'CI/CD, automation, and deployment',
                href: '/courses/devops',
            },
            {
                icon: Palette,
                title: 'UI/UX Design',
                description: 'User experience and interface design',
                href: '/courses/ui-ux-design',
            },
            {
                icon: TrendingUp,
                title: 'Digital Marketing',
                description: 'SEO, social media, and growth hacking',
                href: '/courses/digital-marketing',
            },
        ],
    },
    {
        category: 'Business & Analytics',
        items: [
            {
                icon: BarChart3,
                title: 'Business Analytics',
                description: 'Data-driven decision making',
                href: '/courses/business-analytics',
            },
        ],
    },
];

export const resourcesMegaMenu: ResourceCategory[] = [
    {
        category: 'Learning Resources',
        items: [
            {
                icon: BookOpen,
                title: 'Blog',
                subtitle: 'Latest insights and articles',
                href: '/resources/blog',
            },
            {
                icon: FileText,
                title: 'Case Studies',
                subtitle: 'Real-world success stories',
                href: '/resources/case-studies',
            },
            {
                icon: Award,
                title: 'Student Success Stories',
                subtitle: 'Career transformations',
                href: '/resources/success-stories',
            },
        ],
    },
    {
        category: 'Downloads',
        items: [
            {
                icon: Download,
                title: 'Brochures',
                subtitle: 'Course catalogs and info',
                href: '/resources/brochures',
            },
            {
                icon: FileText,
                title: 'Career Guides',
                subtitle: 'Professional development resources',
                href: '/resources/career-guides',
            },
            {
                icon: BarChart3,
                title: 'Placement Reports',
                subtitle: 'Annual placement statistics',
                href: '/resources/placement-reports',
            },
        ],
    },
    {
        category: 'Support',
        items: [
            {
                icon: HelpCircle,
                title: 'FAQs',
                subtitle: 'Common questions answered',
                href: '/resources/faqs',
            },
            {
                icon: Search,
                title: 'Research Articles',
                subtitle: 'Academic publications',
                href: '/resources/research',
            },
        ],
    },
];

export const moreMenu: MoreMenuCategory[] = [
    {
        category: 'About',
        items: [
            { icon: Image, title: 'Gallery', href: '/gallery' },
            { icon: Trophy, title: 'Achievements', href: '/achievements' },
            { icon: Handshake, title: 'Partners', href: '/partners' },
            { icon: Heart, title: 'CSR', href: '/csr' },
        ],
    },
    {
        category: 'Media',
        items: [
            { icon: Newspaper, title: 'News', href: '/news' },
            { icon: Radio, title: 'Media', href: '/media' },
            { icon: HeadphonesIcon, title: 'Support', href: '/support' },
        ],
    },
    {
        category: 'Legal',
        items: [
            { icon: Lock, title: 'Privacy Policy', href: '/privacy' },
            { icon: FileWarning, title: 'Terms & Conditions', href: '/terms' },
        ],
    },
];

export const actionButtons: ActionButton[] = [
    {
        label: 'Apply Now',
        href: '/apply',
        variant: 'primary',
    },
];
