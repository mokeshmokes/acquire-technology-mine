'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface FinalCTAProps {
    courseTitle: string;
}

export default function FinalCTA({ courseTitle }: FinalCTAProps) {
    return (
        <section className="relative py-20 md:py-32 px-5 md:px-6 overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0">
                <div
                    className="absolute inset-0"
                    style={{
                        background: 'linear-gradient(135deg, rgba(199,24,56,0.1) 0%, rgba(161,14,38,0.05) 50%, rgba(122,0,25,0.1) 100%)',
                    }}
                />
                <div className="absolute inset-0 opacity-30">
                    {/* Floating particles */}
                    <div
                        className="absolute top-10 left-10 w-2 h-2 bg-primary rounded-full animate-pulse"
                        style={{ animationDelay: '0s' }}
                    />
                    <div
                        className="absolute top-20 right-20 w-2 h-2 bg-primary rounded-full animate-pulse"
                        style={{ animationDelay: '0.5s' }}
                    />
                    <div
                        className="absolute bottom-20 left-20 w-2 h-2 bg-primary rounded-full animate-pulse"
                        style={{ animationDelay: '1s' }}
                    />
                    <div
                        className="absolute bottom-10 right-10 w-2 h-2 bg-primary rounded-full animate-pulse"
                        style={{ animationDelay: '1.5s' }}
                    />
                </div>
            </div>

            <div className="max-w-4xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center space-y-8"
                >
                    {/* Heading */}
                    <div className="space-y-4">
                        <h2
                            className="font-bold text-white leading-tight"
                            style={{ fontSize: 'clamp(2rem, 6vw, 3.5rem)' }}
                        >
                            Ready to Start Your{' '}
                            <span className="bg-gradient-to-r from-primary via-primary-hover to-primary bg-clip-text text-transparent">
                                Technology Career?
                            </span>
                        </h2>
                        <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
                            Join thousands of students who have transformed their careers with {courseTitle}
                        </p>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-10 py-5 rounded-xl font-semibold text-white text-lg relative overflow-hidden group"
                            style={{
                                background: 'linear-gradient(135deg, rgba(199,24,56,0.9) 0%, rgba(161,14,38,1) 100%)',
                                boxShadow: '0 0 40px rgba(199,24,56,0.5)',
                            }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                            <div className="relative flex items-center gap-2">
                                <span>Enroll Now</span>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                            </div>
                        </motion.button>

                    </div>

                    {/* Trust Indicators */}
                    <div className="grid grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto">
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">5000+</div>
                            <div className="text-sm text-white/60">Students Enrolled</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">4.8/5</div>
                            <div className="text-sm text-white/60">Average Rating</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">100%</div>
                            <div className="text-sm text-white/60">Placement Support</div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
