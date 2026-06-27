'use client';

import { motion } from 'framer-motion';
import { BookOpen, Code, Briefcase, Trophy, TrendingUp } from 'lucide-react';
import ScrollReveal from '@/components/animations/ScrollReveal';

const learningSteps = [
    {
        icon: BookOpen,
        title: 'Learn',
        description: 'Master concepts through live interactive sessions and recorded lectures',
    },
    {
        icon: Code,
        title: 'Practice',
        description: 'Apply your knowledge with hands-on exercises and coding challenges',
    },
    {
        icon: Briefcase,
        title: 'Projects',
        description: 'Build real-world projects for your professional portfolio',
    },
    {
        icon: Trophy,
        title: 'Internship',
        description: 'Gain practical experience with our industry internship program',
    },
    {
        icon: TrendingUp,
        title: 'Placement',
        description: 'Get placed in top companies with our dedicated placement support',
    },
];

export default function LearningProcess() {
    return (
        <section className="relative py-16 md:py-24 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[#0C080A]" />
                {/* Grid Pattern */}
                <div
                    className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: `
                            linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
                        `,
                        backgroundSize: '50px 50px',
                    }}
                />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-6 lg:px-12">
                <ScrollReveal>
                    <div className="text-center mb-12 md:mb-16">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-100px' }}
                            transition={{ duration: 0.6 }}
                            className="font-bold text-white mb-4 md:mb-6 px-4"
                            style={{ fontSize: 'clamp(1.8rem, 5vw, 3rem)' }}
                        >
                            Learning Process
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-100px' }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-base md:text-lg text-white/70 px-4"
                        >
                            Your journey from beginner to industry-ready professional
                        </motion.p>
                    </div>
                </ScrollReveal>

                {/* Timeline */}
                <ScrollReveal>
                    <div className="relative">
                        {/* Vertical Line */}
                        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary to-transparent hidden lg:block" />

                        {/* Steps */}
                        <div className="space-y-8 md:space-y-12">
                            {learningSteps.map((step, index) => (
                                <motion.div
                                    key={step.title}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: '-50px' }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className={`flex flex-col lg:flex-row items-center gap-6 md:gap-8 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                                        }`}
                                >
                                    {/* Content Card */}
                                    <div className="flex-1 w-full">
                                        <motion.div
                                            whileHover={{ scale: 1.02, y: -5 }}
                                            className="group relative p-6 md:p-8 rounded-xl md:rounded-2xl"
                                            style={{
                                                background: 'rgba(255, 255, 255, 0.05)',
                                                backdropFilter: 'blur(18px)',
                                                border: '1px solid rgba(255, 0, 60, 0.18)',
                                            }}
                                        >
                                            <div
                                                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                                style={{
                                                    background: 'linear-gradient(135deg, rgba(199, 24, 56, 0.1), rgba(161, 14, 38, 0.1))',
                                                }}
                                            />
                                            <div className="relative">
                                                <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                                                    <div
                                                        className="w-12 h-12 md:w-14 md:h-14 rounded-lg md:rounded-xl flex items-center justify-center"
                                                        style={{
                                                            background: 'rgba(199, 24, 56, 0.2)',
                                                            border: '1px solid rgba(255, 255, 255, 0.1)',
                                                        }}
                                                    >
                                                        <step.icon className="w-6 h-6 md:w-7 md:h-7 text-primary" />
                                                    </div>
                                                    <div>
                                                        <span className="text-xs md:text-sm text-white/60">
                                                            Step {index + 1}
                                                        </span>
                                                        <h3 className="text-xl md:text-2xl font-bold text-white">
                                                            {step.title}
                                                        </h3>
                                                    </div>
                                                </div>
                                                <p className="text-sm md:text-base text-white/70">{step.description}</p>
                                            </div>
                                        </motion.div>
                                    </div>

                                    {/* Center Node (Desktop only) */}
                                    <div className="hidden lg:block flex-shrink-0">
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            whileInView={{ scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.4, delay: index * 0.1 }}
                                            className="relative w-6 h-6 rounded-full bg-primary"
                                            style={{
                                                boxShadow: '0 0 20px rgba(199, 24, 56, 0.6)',
                                            }}
                                        >
                                            <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                                        </motion.div>
                                    </div>

                                    {/* Spacer */}
                                    <div className="flex-1 hidden lg:block" />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
