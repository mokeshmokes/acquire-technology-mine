'use client';

import { motion } from 'framer-motion';
import { Clock, BarChart3, Users } from 'lucide-react';
import ScrollReveal from '@/components/animations/ScrollReveal';

interface CourseOverviewProps {
    description: string;
    duration: string;
    level: string;
}

export default function CourseOverview({ description, duration, level }: CourseOverviewProps) {
    return (
        <section className="relative py-16 md:py-24 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-[#0C080A]" />

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
                            Course Overview
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-100px' }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-base md:text-lg text-white/70 max-w-3xl mx-auto px-4"
                        >
                            {description}
                        </motion.p>
                    </div>
                </ScrollReveal>

                {/* Stats */}
                <ScrollReveal>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
                        {[
                            { icon: Clock, label: 'Duration', value: duration },
                            { icon: BarChart3, label: 'Level', value: level },
                            { icon: Users, label: 'Mode', value: 'Live + Recorded' },
                        ].map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-100px' }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                whileHover={{ scale: 1.05, y: -5 }}
                                className="relative p-6 md:p-8 rounded-xl md:rounded-2xl text-center group"
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
                                    <div className="flex justify-center mb-4">
                                        <div
                                            className="w-16 h-16 rounded-xl flex items-center justify-center"
                                            style={{
                                                background: 'rgba(199, 24, 56, 0.15)',
                                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                            }}
                                        >
                                            <stat.icon className="w-8 h-8 text-primary" />
                                        </div>
                                    </div>
                                    <h3 className="text-sm text-white/60 uppercase tracking-wider mb-2">
                                        {stat.label}
                                    </h3>
                                    <p className="text-2xl font-bold text-white">{stat.value}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
