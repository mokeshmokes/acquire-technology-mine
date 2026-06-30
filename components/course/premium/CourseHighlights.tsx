'use client';

import { motion } from 'framer-motion';
import { Video, FolderOpen, Briefcase, TrendingUp, Award, Users } from 'lucide-react';

const highlights = [
    {
        icon: Video,
        title: 'Live Interactive Classes',
        description: 'Real-time learning with industry experts and instant doubt resolution',
    },
    {
        icon: FolderOpen,
        title: 'Industry Projects',
        description: 'Work on real-world projects to build your professional portfolio',
    },
    {
        icon: Briefcase,
        title: 'Internship Support',
        description: 'Get hands-on experience with our internship placement assistance',
    },
    {
        icon: TrendingUp,
        title: 'Placement Assistance',
        description: '100% job placement support with top companies in the industry',
    },
    {
        icon: Award,
        title: 'Course Certificate',
        description: 'Industry-recognized certificate to showcase your expertise',
    },
    {
        icon: Users,
        title: 'Lifetime Community',
        description: 'Join our exclusive community for continuous learning and networking',
    },
];

export default function CourseHighlights() {
    return (
        <section className="relative py-20 md:py-32 px-5 md:px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2
                        className="font-bold text-white mb-4"
                        style={{ fontSize: 'clamp(1.8rem, 5vw, 3rem)' }}
                    >
                        Why Choose{' '}
                        <span className="bg-gradient-to-r from-primary via-primary-hover to-primary bg-clip-text text-transparent">
                            This Course
                        </span>
                    </h2>
                    <p className="text-lg text-white/70 max-w-2xl mx-auto">
                        Everything you need to accelerate your career in technology
                    </p>
                </motion.div>

                {/* Highlights Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {highlights.map((highlight, index) => {
                        const Icon = highlight.icon;
                        return (
                            <motion.div
                                key={highlight.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                whileHover={{ y: -8, scale: 1.02 }}
                                className="group relative rounded-3xl p-8"
                                style={{
                                    background: 'rgba(255, 255, 255, 0.03)',
                                    backdropFilter: 'blur(20px)',
                                    border: '1px solid rgba(255, 255, 255, 0.08)',
                                    boxShadow: '0 20px 50px rgba(0, 0, 0, 0.3)',
                                }}
                            >
                                {/* Hover Glow */}
                                <div
                                    className="absolute -inset-[1px] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                                    style={{
                                        background: 'radial-gradient(circle at 50% 50%, rgba(199,24,56,0.2) 0%, transparent 70%)',
                                        filter: 'blur(20px)',
                                    }}
                                />

                                {/* Icon */}
                                <div
                                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                                    style={{
                                        background: 'rgba(199, 24, 56, 0.15)',
                                        border: '1px solid rgba(199, 24, 56, 0.3)',
                                    }}
                                >
                                    <Icon className="w-7 h-7 text-primary" />
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-bold text-white mb-3">{highlight.title}</h3>
                                <p className="text-sm text-white/70 leading-relaxed">{highlight.description}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
