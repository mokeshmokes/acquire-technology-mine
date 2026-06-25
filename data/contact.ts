import {
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

export const contactHeroData = {
    badge: 'CONTACT US',
    heading: {
        main: "Let's Build Your",
        highlight: 'Technology Career',
        suffix: 'Together',
    },
    description:
        'Start your journey with Acquiring Technology through industry-led learning, practical projects, certifications and placement assistance.',
    video: '/videos/hero-video.mp4', // Reuse existing video
};

export const contactCardsData = [
    {
        id: 'phone',
        icon: Phone,
        title: 'Phone',
        value: '+91 98765 43210',
        subtitle: 'Mon-Sat 9AM to 7PM',
    },
    {
        id: 'email',
        icon: Mail,
        title: 'Email',
        value: 'info@acquiringtech.com',
        subtitle: 'We reply within 24 hours',
    },
    {
        id: 'address',
        icon: MapPin,
        title: 'Office Address',
        value: 'Tech Park, Bangalore',
        subtitle: 'Karnataka, India 560001',
    },
    {
        id: 'hours',
        icon: Clock,
        title: 'Working Hours',
        value: 'Mon - Sat: 9AM - 7PM',
        subtitle: 'Sunday: Closed',
    },
];

export const socialLinksData = [
    {
        id: 'linkedin',
        icon: Linkedin,
        href: 'https://linkedin.com',
        label: 'LinkedIn',
    },
    {
        id: 'instagram',
        icon: Instagram,
        href: 'https://instagram.com',
        label: 'Instagram',
    },
    {
        id: 'facebook',
        icon: Facebook,
        href: 'https://facebook.com',
        label: 'Facebook',
    },
    {
        id: 'youtube',
        icon: Youtube,
        href: 'https://youtube.com',
        label: 'YouTube',
    },
    {
        id: 'github',
        icon: Github,
        href: 'https://github.com',
        label: 'GitHub',
    },
];

export const courseOptions = [
    'Artificial Intelligence',
    'Data Science',
    'Full Stack Development',
    'Cloud Computing',
    'Cyber Security',
    'DevOps',
    'Blockchain',
    'UI/UX Design',
    'Digital Marketing',
    'Other',
];
