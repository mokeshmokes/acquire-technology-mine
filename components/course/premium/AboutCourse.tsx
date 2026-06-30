'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, Target, Users2, TrendingUp } from 'lucide-react';

interface AboutCourseProps {
    description: string;
    careers: Array<{ title: string; description: string; salary: string }>;
}

export default function AboutCourse({ description, careers }: AboutCourseProps) {
    return (
        <section className="relative py-20 md:py-32 px-5 md:px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* LEFT SIDE - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        {/* Heading */}
                        <div>
                            <h2
                                className="font-bold text-white mb-4"
                                style={{ fontSize: 'clamp(1.8rem, 5vw, 3rem)' }}
                            >
                                About This{' '}
                                <span className="bg-gradient-to-r from-primary via-primary-hover to-primary bg-clip-text text-transparent">
                                    Course
                                </span>
                            </h2>
                            <p className="text-lg text-white/80 leading-relaxed">{description}</p>
                        </div>

                        {/* Career Opportunities */}
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                                <TrendingUp className="w-6 h-6 text-primary" />
                                Career Opportunities
                            </h3>
                            <div className="space-y-3">
                                {careers.slice(0, 3).map((career, index) => (
                                    <motion.div
                                        key={career.title}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex items-start gap-3"
                                    >
                                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                                        <div>
                                            <p className="text-white font-semibold">{career.title}</p>
                                            <p className="text-sm text-primary">{career.salary}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Who Should Join */}
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                                <Users2 className="w-6 h-6 text-primary" />
                                Who Should Join
                            </h3>
                            <div className="space-y-3">
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
                                        className="flex items-start gap-3"
                                    >
                                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                                        <p className="text-white/80">{item}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Benefits */}
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                                <Target className="w-6 h-6 text-primary" />
                                What You&apos;ll Gain
                            </h3>
                            <div className="space-y-3">
                                {[
                                    'Industry-relevant skills and hands-on experience',
                                    'Portfolio of real-world projects',
                                    'Industry-recognized certification',
                                    'Career guidance and placement support',
                                ].map((item, index) => (
                                    <motion.div
                                        key={item}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex items-start gap-3"
                                    >
                                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                                        <p className="text-white/80">{item}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* RIGHT SIDE - Illustration/Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div
                            className="relative rounded-3xl overflow-hidden"
                            style={{
                                background: 'linear-gradient(135deg, rgba(199, 24, 56, 0.1) 0%, rgba(161, 14, 38, 0.05) 100%)',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4)',
                                minHeight: '500px',
                            }}
                        >
                            {/* Placeholder - Replace with actual image */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-center space-y-4">
                                    <div className="text-8xl">💼</div>
                                    <p className="text-white/50 text-sm">Course Illustration</p>
                                </div>
                            </div>

                            {/* Decorative elements */}
                            <div
                                className="absolute top-10 right-10 w-32 h-32 rounded-full opacity-20"
                                style={{
                                    background: 'radial-gradient(circle, rgba(199,24,56,0.5) 0%, transparent 70%)',
                                    filter: 'blur(40px)',
                                }}
                            />
                            <div
                                className="absolute bottom-10 left-10 w-32 h-32 rounded-full opacity-20"
                                style={{
                                    background: 'radial-gradient(circle, rgba(161,14,38,0.5) 0%, transparent 70%)',
                                    filter: 'blur(40px)',
                                }}
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
