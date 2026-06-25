import {
    Home,
    GraduationCap,
    BookOpen,
    Users,
    Phone,
    Mail,
    MapPin,
    Clock,
    Linkedin,
    Instagram,
    Facebook,
    Youtube,
    Github,
} from 'lucide-react';

export const footerData = {
    company: {
        name: 'Acquiring Technology',
        logo: 'AT',
        description:
            'Empowering the next generation of technology leaders through practical learning and industry expertise.',
        social: [
            { id: 'linkedin', icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
            { id: 'instagram', icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
            { id: 'facebook', icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
            { id: 'youtube', icon: Youtube, href: 'https://youtube.com', label: 'YouTube' },
            { id: 'github', icon: Github, href: 'https://github.com', label: 'GitHub' },
        ],
    },
    quickLinks: [
        { label: 'Home', href: '#home', icon: Home },
        { label: 'Live Courses', href: '#live-courses', icon: GraduationCap },
        { label: 'Courses', href: '#courses', icon: BookOpen },
        { label: 'About', href: '#about-us', icon: Users },
        { label: 'Contact', href: '#contact', icon: Phone },
    ],
    programs: [
        { label: 'Artificial Intelligence', href: '/courses/ai' },
        { label: 'Data Science', href: '/courses/data-science' },
        { label: 'React Development', href: '/courses/react' },
        { label: 'Next.js', href: '/courses/nextjs' },
        { label: 'Cloud Computing', href: '/courses/cloud' },
        { label: 'Cyber Security', href: '/courses/security' },
        { label: 'Blockchain', href: '/courses/blockchain' },
    ],
    contact: [
        { icon: Phone, label: 'Phone', value: '+91 98765 43210' },
        { icon: Mail, label: 'Email', value: 'info@acquiringtech.com' },
        { icon: MapPin, label: 'Address', value: 'Tech Park, Bangalore, India 560001' },
        { icon: Clock, label: 'Hours', value: 'Mon-Sat: 9AM - 7PM' },
    ],
    legal: [
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Terms & Conditions', href: '/terms' },
        { label: 'Sitemap', href: '/sitemap' },
    ],
    copyright: {
        year: 2026,
        text: 'Acquiring Technology. All Rights Reserved.',
        tagline: 'Designed with ❤️ for Future Technology Leaders',
    },
};

export const newsletterData = {
    heading: 'Stay Updated',
    description: 'Subscribe to receive technology news and course updates.',
    placeholder: 'Enter your email',
    buttonText: 'Subscribe',
};
