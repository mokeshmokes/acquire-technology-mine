'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, Target, Users2, TrendingUp, Sparkles, Award, Briefcase } from 'lucide-react';

interface AboutCourseProps {
    description: string;
    careers: Array<{ title: string; description: string; salary: string }>;
}

export default function AboutCourse({ description, careers }: AboutCourseProps) {
    return (
        <section className="relative py-20 md:py-32 px-5 md:px-6 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 opacity-30">
                <div
                    className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full"
                    style={{
                        background: 'radial-gradient(circle, rgba(199,24,56,0.15) 0%, transparent 70%)',
                        filter: 'blur(80px)',
                    }}
                />
                <div
                    className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full"
                    style={{
                        background: 'radial-gradient(circle, rgba(161,14,38,0.15) 0%, transparent 70%)',
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
                        About This{' '}
                        <span className="bg-gradient-to-r from-primary via-primary-hover to-primary bg-clip-text text-transparent">
                            Course
                        </span>
                    </h2>
                    <p className="text-lg text-white/70 max-w-3xl mx-auto leading-relaxed">
                        {description}
                    </p>
                </motion.div>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
                    {/* LEFT SIDE - Career Opportunities Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10"
                        style={{
                            background: 'rgba(255, 255, 255, 0.03)',
                            backdropFilter: 'blur(20px)',
                            border: '1px solid rgba(255, 255, 255, 0.08)',
                            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4)',
                        }}
                    >
                        <div className="flex items-center gap-2.5 md:gap-3 mb-5 md:mb-6">
                            <div
                                className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0"
                                style={{
                                    background: 'rgba(199, 24, 56, 0.15)',
                                    border: '1px solid rgba(199, 24, 56, 0.3)',
                                }}
                            >
                                <TrendingUp className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                            </div>
                            <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-white">Career Opportunities</h3>
                        </div>

                        <div className="space-y-3 md:space-y-4">
                            {careers.slice(0, 4).map((career, index) => (
                                <motion.div
                                    key={career.title}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="rounded-xl md:rounded-2xl p-4 md:p-5"
                                    style={{
                                        background: 'rgba(255, 255, 255, 0.04)',
                                        border: '1px solid rgba(255, 255, 255, 0.06)',
                                    }}
                                >
                                    <div className="flex items-start gap-2.5 md:gap-3">
                                        <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0 mt-0.5 md:mt-1" />
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm md:text-base text-white font-semibold mb-1">{career.title}</p>
                                            <p className="text-xs md:text-sm text-primary font-medium">{career.salary}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* RIGHT SIDE - Who Should Join & Benefits */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        {/* Who Should Join */}
                        <div
                            className="rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10"
                            style={{
                                background: 'rgba(255, 255, 255, 0.03)',
                                backdropFilter: 'blur(20px)',
                                border: '1px solid rgba(255, 255, 255, 0.08)',
                                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4)',
                            }}
                        >
                            <div className="flex items-center gap-2.5 md:gap-3 mb-5 md:mb-6">
                                <div
                                    className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0"
                                    style={{
                                        background: 'rgba(199, 24, 56, 0.15)',
                                        border: '1px solid rgba(199, 24, 56, 0.3)',
                                    }}
                                >
                                    <Users2 className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                                </div>
                                <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-white">Who Should Join</h3>
                            </div>

                            <div className="space-y-2.5 md:space-y-3">
                                {[
                                    'College students looking to build a tech career',
                                    'Working professionals seeking to upskill',
                                    'Career switchers wanting to enter tech industry',
                                    'Entrepreneurs building tech solutions',
                                ].map((item, index) => (
                                    <motion.div
                                        key={item}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex items-start gap-2.5 md:gap-3"
                                    >
                                        <div
                                            className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full flex-shrink-0 mt-1.5 md:mt-2"
                                            style={{ background: 'rgba(199, 24, 56, 0.8)' }}
                                        />
                                        <p className="text-sm md:text-base text-white/80 leading-relaxed">{item}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* What You'll Gain */}
                        <div
                            className="rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10"
                            style={{
                                background: 'linear-gradient(135deg, rgba(199, 24, 56, 0.08) 0%, rgba(161, 14, 38, 0.04) 100%)',
                                backdropFilter: 'blur(20px)',
                                border: '1px solid rgba(199, 24, 56, 0.2)',
                                boxShadow: '0 20px 60px rgba(199, 24, 56, 0.15)',
                            }}
                        >
                            <div className="flex items-center gap-2.5 md:gap-3 mb-5 md:mb-6">
                                <div
                                    className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0"
                                    style={{
                                        background: 'rgba(199, 24, 56, 0.2)',
                                        border: '1px solid rgba(199, 24, 56, 0.4)',
                                    }}
                                >
                                    <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                                </div>
                                <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-white">What You&apos;ll Gain</h3>
                            </div>

                            <div className="grid grid-cols-2 gap-3 md:gap-4">
                                {[
                                    { icon: Target, text: 'Industry Skills' },
                                    { icon: Briefcase, text: 'Real Projects' },
                                    { icon: Award, text: 'Certification' },
                                    { icon: TrendingUp, text: 'Career Support' },
                                ].map((item, index) => (
                                    <motion.div
                                        key={item.text}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="text-center p-3 md:p-4 rounded-xl md:rounded-2xl"
                                        style={{
                                            background: 'rgba(255, 255, 255, 0.05)',
                                            border: '1px solid rgba(255, 255, 255, 0.1)',
                                        }}
                                    >
                                        <div className="flex justify-center mb-2 md:mb-3">
                                            <item.icon className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                                        </div>
                                        <p className="text-xs md:text-sm font-semibold text-white leading-tight">{item.text}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
