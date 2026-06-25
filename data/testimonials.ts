import { LucideIcon } from 'lucide-react';

export interface Testimonial {
    id: string;
    name: string;
    course: string;
    role: string;
    company: string;
    image: string;
    rating: number;
    feedback: string;
    stats: {
        courseCompleted: string;
        placement: string;
        year: string;
    };
}

export const testimonialsData: Testimonial[] = [
    {
        id: 'testimonial-1',
        name: 'Rahul Sharma',
        course: 'Full Stack Development',
        role: 'Software Engineer',
        company: 'TCS',
        image: '/images/students/student-1.jpg',
        rating: 4.9,
        feedback:
            'The mentors explained every topic clearly. The real-world projects and placement training helped me confidently crack my first interview. The hands-on approach made all the difference in my learning journey.',
        stats: {
            courseCompleted: '6 Months',
            placement: '₹8 LPA',
            year: '2024',
        },
    },
    {
        id: 'testimonial-2',
        name: 'Priya Malhotra',
        course: 'Data Science & AI',
        role: 'Data Analyst',
        company: 'Wipro',
        image: '/images/students/student-2.jpg',
        rating: 5.0,
        feedback:
            'Acquiring Technology transformed my career completely. The AI and Machine Learning curriculum was industry-focused and practical. The mentor support during my placement preparation was exceptional and invaluable.',
        stats: {
            courseCompleted: '8 Months',
            placement: '₹10 LPA',
            year: '2024',
        },
    },
    {
        id: 'testimonial-3',
        name: 'Arjun Patel',
        course: 'React Development',
        role: 'Frontend Developer',
        company: 'Infosys',
        image: '/images/students/student-3.jpg',
        rating: 4.8,
        feedback:
            'The React course was comprehensive and up-to-date with industry standards. Building real projects gave me the confidence to perform in interviews. I secured my dream job within 2 months of completing the course.',
        stats: {
            courseCompleted: '5 Months',
            placement: '₹7.5 LPA',
            year: '2024',
        },
    },
    {
        id: 'testimonial-4',
        name: 'Sneha Reddy',
        course: 'Cloud Computing',
        role: 'Cloud Engineer',
        company: 'Tech Mahindra',
        image: '/images/students/student-4.jpg',
        rating: 4.9,
        feedback:
            'The AWS and Azure training was top-notch. The practical labs and real-world scenarios helped me gain hands-on experience. The placement team guided me through every step of the interview process successfully.',
        stats: {
            courseCompleted: '7 Months',
            placement: '₹9 LPA',
            year: '2023',
        },
    },
    {
        id: 'testimonial-5',
        name: 'Vikram Singh',
        course: 'Cyber Security',
        role: 'Security Analyst',
        company: 'HCL Technologies',
        image: '/images/students/student-5.jpg',
        rating: 5.0,
        feedback:
            'The ethical hacking and security training exceeded my expectations. The instructors are industry experts who shared real-world insights. I now work on securing enterprise applications and networks confidently.',
        stats: {
            courseCompleted: '6 Months',
            placement: '₹8.5 LPA',
            year: '2023',
        },
    },
    {
        id: 'testimonial-6',
        name: 'Anjali Gupta',
        course: 'Digital Marketing',
        role: 'Marketing Specialist',
        company: 'Cognizant',
        image: '/images/students/student-6.jpg',
        rating: 4.8,
        feedback:
            'The digital marketing program covered everything from SEO to social media strategies. The practical campaigns we ran gave me real experience. I landed my dream job within a month of graduation.',
        stats: {
            courseCompleted: '4 Months',
            placement: '₹6.5 LPA',
            year: '2024',
        },
    },
];

export const testimonialStatsData = [
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
        label: 'Courses',
    },
    {
        id: 'placement',
        value: 95,
        suffix: '%',
        label: 'Placement Assistance',
    },
    {
        id: 'rating',
        value: 4.9,
        suffix: '★',
        label: 'Average Rating',
        decimals: 1,
    },
];

export const testimonialSectionData = {
    badge: '⭐ STUDENT SUCCESS STORIES',
    heading: {
        main: 'What Our ',
        highlight: 'Students',
        suffix: ' Say',
    },
    subtitle:
        'Hear from learners who transformed their careers through Acquiring Technology.',
};
