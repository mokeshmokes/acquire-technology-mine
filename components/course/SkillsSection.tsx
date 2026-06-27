'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import ScrollReveal from '@/components/animations/ScrollReveal';

interface SkillsSectionProps {
    skills: string[];
}

export default function SkillsSection({ skills }: SkillsSectionProps) {
    return (
        <section className="relative py-16 md:py-24 overflow-hidden">
            {/* Background with animated orbs */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[#0C080A]" />
                <div
                    className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl animate-pulse-glow"
                    style={{
                        background: 'radial-gradient(circle, rgba(199, 24, 56, 0.4) 0%, transparent 70%)',
                    }}
                />
                <div
                    className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl animate-pulse-glow-delayed"
                    style={{
                        background: 'radial-gradient(circle, rgba(161, 14, 38, 0.4) 0%, transparent 70%)',
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
                            Skills You Will Learn
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-100px' }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-base md:text-lg text-white/70 px-4"
                        >
                            Master these in-demand technologies and skills
                        </motion.p>
                    </div>
                </ScrollReveal>

                {/* Skills Grid */}
                <ScrollReveal>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4">
                        {skills.map((skill, index) => (
                            <motion.div
                                key={skill}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, margin: '-50px' }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                whileHover={{ scale: 1.05, y: -5 }}
                                className="group relative p-4 md:p-6 rounded-lg md:rounded-xl"
                                style={{
                                    background: 'rgba(255, 255, 255, 0.05)',
                                    backdropFilter: 'blur(18px)',
                                    border: '1px solid rgba(255, 0, 60, 0.18)',
                                }}
                            >
                                <div
                                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    style={{
                                        background: 'linear-gradient(135deg, rgba(199, 24, 56, 0.15), rgba(161, 14, 38, 0.15))',
                                    }}
                                />
                                <div className="relative flex items-center gap-3">
                                    <div
                                        className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center"
                                        style={{
                                            background: 'rgba(199, 24, 56, 0.2)',
                                            border: '1px solid rgba(255, 255, 255, 0.1)',
                                        }}
                                    >
                                        <Check className="w-5 h-5 text-primary" />
                                    </div>
                                    <span className="text-white/90 font-medium">{skill}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
