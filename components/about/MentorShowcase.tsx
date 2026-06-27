'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { mentorsData } from '@/data/aboutUs';

export default function MentorShowcase() {
    const ref = useRef<HTMLElement>(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section ref={ref} className="relative py-20 md:py-32 px-5 md:px-6">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12 md:mb-16 space-y-4"
                >
                    <h2 className="font-bold text-white" style={{ fontSize: 'clamp(1.8rem, 5vw, 3rem)' }}>
                        Meet Our <span className="text-primary">Mentors</span>
                    </h2>
                    <p className="text-lg text-muted max-w-2xl mx-auto">
                        Learn from industry experts with years of real-world experience
                    </p>
                </motion.div>

                {/* Mentor Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {mentorsData.map((mentor, index) => (
                        <motion.div
                            key={mentor.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ delay: index * 0.1 + 0.2, duration: 0.6 }}
                            whileHover={{
                                y: -10,
                            }}
                            className="group relative rounded-[20px] md:rounded-[28px] p-5 md:p-6 transition-all duration-500"
                            style={{
                                background: 'rgba(255, 255, 255, 0.05)',
                                backdropFilter: 'blur(18px)',
                                border: '1px solid rgba(255, 0, 60, 0.18)',
                                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.45)',
                            }}
                        >
                            {/* Hover Glow Effect */}
                            <div className="absolute -inset-[1px] rounded-[28px] bg-gradient-to-r from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/40 group-hover:via-primary/20 group-hover:to-primary/40 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl -z-10" />

                            {/* Floating Animation */}
                            <div
                                className="space-y-4 animate-float-vertical"
                                style={{ animationDelay: `${index * 0.2}s` }}
                            >
                                {/* Image Circle */}
                                <div className="relative mx-auto w-32 h-32 rounded-full overflow-hidden border-4 border-primary/30 group-hover:border-primary transition-colors duration-500">
                                    <motion.div
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ duration: 0.4 }}
                                        className="w-full h-full bg-gradient-to-br from-primary/30 via-surface to-primary-hover/30 flex items-center justify-center"
                                    >
                                        {/* Placeholder Icon */}
                                        <svg
                                            className="w-16 h-16 text-primary/50"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                            />
                                        </svg>
                                    </motion.div>

                                    {/* Glass Shine Effect */}
                                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/0 group-hover:via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                </div>

                                {/* Content */}
                                <div className="text-center space-y-2">
                                    <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors duration-300">
                                        {mentor.name}
                                    </h3>
                                    <p className="text-sm font-semibold text-primary">{mentor.technology}</p>
                                    <p className="text-xs text-muted">{mentor.experience}</p>
                                    <p className="text-sm text-muted leading-relaxed pt-2">
                                        {mentor.description}
                                    </p>
                                </div>
                            </div>

                            {/* Border Enhancement */}
                            <div
                                className="absolute inset-0 rounded-[28px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                style={{
                                    border: '1px solid rgba(255, 0, 60, 0.5)',
                                }}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
