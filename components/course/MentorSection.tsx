'use client';

import { motion } from 'framer-motion';
import { Award, BookOpen, Users } from 'lucide-react';
import ScrollReveal from '@/components/animations/ScrollReveal';

interface MentorSectionProps {
    mentor: {
        name: string;
        title: string;
        experience: string;
        image: string;
        bio: string;
    };
}

export default function MentorSection({ mentor }: MentorSectionProps) {
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
                            Meet Your Mentor
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-100px' }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-base md:text-lg text-white/70 px-4"
                        >
                            Learn from industry experts with real-world experience
                        </motion.p>
                    </div>
                </ScrollReveal>

                <ScrollReveal>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
                        {/* Mentor Image */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: '-100px' }}
                            transition={{ duration: 0.6 }}
                            className="relative"
                        >
                            <div
                                className="relative aspect-square rounded-3xl overflow-hidden"
                                style={{
                                    background: 'rgba(255, 255, 255, 0.05)',
                                    backdropFilter: 'blur(18px)',
                                    border: '1px solid rgba(255, 0, 60, 0.18)',
                                }}
                            >
                                <div className="absolute inset-0 flex items-center justify-center text-white/30">
                                    <Users className="w-32 h-32" />
                                </div>
                            </div>
                            {/* Decorative glow */}
                            <div
                                className="absolute -bottom-6 -right-6 w-48 h-48 rounded-full opacity-30 blur-3xl"
                                style={{
                                    background: 'radial-gradient(circle, rgba(199, 24, 56, 0.6) 0%, transparent 70%)',
                                }}
                            />
                        </motion.div>

                        {/* Mentor Details */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: '-100px' }}
                            transition={{ duration: 0.6 }}
                        >
                            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 md:mb-3">
                                {mentor.name}
                            </h3>
                            <p className="text-lg md:text-xl text-primary mb-2">{mentor.title}</p>
                            <p className="text-sm md:text-base text-white/70 mb-4 md:mb-6">{mentor.experience}</p>

                            <div
                                className="p-4 md:p-6 rounded-xl md:rounded-2xl mb-4 md:mb-6"
                                style={{
                                    background: 'rgba(255, 255, 255, 0.05)',
                                    backdropFilter: 'blur(18px)',
                                    border: '1px solid rgba(255, 0, 60, 0.18)',
                                }}
                            >
                                <p className="text-sm md:text-base text-white/80 leading-relaxed">{mentor.bio}</p>
                            </div>

                            {/* Stats */}
                            <div className="grid grid-cols-3 gap-3 md:gap-4">
                                {[
                                    { icon: Award, label: 'Certified Expert' },
                                    { icon: BookOpen, label: '1000+ Students' },
                                    { icon: Users, label: 'Industry Leader' },
                                ].map((stat, index) => (
                                    <motion.div
                                        key={stat.label}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true, margin: '-50px' }}
                                        transition={{ duration: 0.4, delay: index * 0.1 }}
                                        whileHover={{ scale: 1.05 }}
                                        className="p-3 md:p-4 rounded-lg md:rounded-xl text-center"
                                        style={{
                                            background: 'rgba(255, 255, 255, 0.05)',
                                            border: '1px solid rgba(255, 255, 255, 0.1)',
                                        }}
                                    >
                                        <stat.icon className="w-5 h-5 md:w-6 md:h-6 text-primary mx-auto mb-1 md:mb-2" />
                                        <p className="text-[10px] md:text-xs text-white/70 leading-tight">{stat.label}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
