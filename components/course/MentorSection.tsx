'use client';

import { motion } from 'framer-motion';
import { Award, BookOpen, Users, GraduationCap, Sparkles, CheckCircle2 } from 'lucide-react';

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
        <section className="relative py-20 md:py-32 px-5 md:px-6 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 opacity-20">
                <div
                    className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full"
                    style={{
                        background: 'radial-gradient(circle, rgba(199,24,56,0.2) 0%, transparent 70%)',
                        filter: 'blur(80px)',
                    }}
                />
                <div
                    className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full"
                    style={{
                        background: 'radial-gradient(circle, rgba(161,14,38,0.2) 0%, transparent 70%)',
                        filter: 'blur(80px)',
                    }}
                />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
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
                        Meet Your{' '}
                        <span className="bg-gradient-to-r from-primary via-primary-hover to-primary bg-clip-text text-transparent">
                            Mentor
                        </span>
                    </h2>
                    <p className="text-lg text-white/70 max-w-2xl mx-auto">
                        Learn from industry experts with real-world experience
                    </p>
                </motion.div>

                {/* Mentor Card */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="rounded-3xl overflow-hidden"
                    style={{
                        background: 'rgba(255, 255, 255, 0.03)',
                        backdropFilter: 'blur(20px)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4)',
                    }}
                >
                    <div className="grid lg:grid-cols-2 gap-0">
                        {/* LEFT - Mentor Image & Quick Stats */}
                        <div className="relative p-8 md:p-12">
                            {/* Mentor Image/Avatar */}
                            <div className="relative mb-8">
                                <div
                                    className="aspect-square max-w-md mx-auto rounded-2xl overflow-hidden relative"
                                    style={{
                                        background: 'linear-gradient(135deg, rgba(199,24,56,0.15) 0%, rgba(161,14,38,0.08) 100%)',
                                        border: '1px solid rgba(255, 255, 255, 0.1)',
                                    }}
                                >
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <Users className="w-32 h-32 text-white/20" />
                                    </div>

                                    {/* Decorative corner accent */}
                                    <div
                                        className="absolute top-0 right-0 w-32 h-32 opacity-30"
                                        style={{
                                            background: 'radial-gradient(circle at top right, rgba(199,24,56,0.4) 0%, transparent 70%)',
                                        }}
                                    />
                                </div>

                                {/* Floating badge */}
                                <div
                                    className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-full whitespace-nowrap"
                                    style={{
                                        background: 'linear-gradient(135deg, rgba(199,24,56,0.9) 0%, rgba(161,14,38,1) 100%)',
                                        boxShadow: '0 10px 30px rgba(199,24,56,0.4)',
                                    }}
                                >
                                    <div className="flex items-center gap-2">
                                        <Sparkles className="w-4 h-4 text-white" />
                                        <span className="text-sm font-semibold text-white">Industry Expert</span>
                                    </div>
                                </div>
                            </div>

                            {/* Quick Stats */}
                            <div className="grid grid-cols-3 gap-4 mt-12">
                                {[
                                    { icon: Award, label: 'Certified', sublabel: 'Expert' },
                                    { icon: BookOpen, label: '1000+', sublabel: 'Students' },
                                    { icon: GraduationCap, label: 'Industry', sublabel: 'Leader' },
                                ].map((stat, index) => (
                                    <motion.div
                                        key={stat.label}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="text-center p-4 rounded-xl"
                                        style={{
                                            background: 'rgba(255, 255, 255, 0.04)',
                                            border: '1px solid rgba(255, 255, 255, 0.08)',
                                        }}
                                    >
                                        <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                                        <p className="text-sm font-bold text-white">{stat.label}</p>
                                        <p className="text-xs text-white/60">{stat.sublabel}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* RIGHT - Mentor Details */}
                        <div className="p-8 md:p-12 flex flex-col justify-center">
                            {/* Name & Title */}
                            <div className="mb-6">
                                <h3
                                    className="font-bold text-white mb-2"
                                    style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)' }}
                                >
                                    {mentor.name}
                                </h3>
                                <p className="text-xl text-primary font-semibold mb-2">{mentor.title}</p>
                                <p className="text-sm text-white/60">{mentor.experience}</p>
                            </div>

                            {/* Bio */}
                            <div
                                className="p-6 rounded-2xl mb-6"
                                style={{
                                    background: 'rgba(255, 255, 255, 0.04)',
                                    border: '1px solid rgba(255, 255, 255, 0.08)',
                                }}
                            >
                                <p className="text-base text-white/80 leading-relaxed">{mentor.bio}</p>
                            </div>

                            {/* Expertise Highlights */}
                            <div className="space-y-3">
                                <p className="text-sm font-semibold text-white/70 uppercase tracking-wider mb-4">
                                    What You&apos;ll Learn
                                </p>
                                {[
                                    'Industry best practices and real-world techniques',
                                    'Hands-on guidance on complex projects',
                                    'Career advice and mentorship from experts',
                                    'Access to exclusive learning resources',
                                ].map((item, index) => (
                                    <motion.div
                                        key={item}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex items-start gap-3"
                                    >
                                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                        <p className="text-sm text-white/70">{item}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
