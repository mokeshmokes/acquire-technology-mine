'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X } from 'lucide-react';
import Link from 'next/link';

interface StickyCTAProps {
    courseTitle: string;
}

export default function StickyCTA({ courseTitle }: StickyCTAProps) {
    const [isVisible, setIsVisible] = useState(false);
    const [isDismissed, setIsDismissed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show CTA after scrolling 500px
            if (window.scrollY > 500 && !isDismissed) {
                setIsVisible(true);
            } else if (window.scrollY <= 500) {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isDismissed]);

    const handleDismiss = () => {
        setIsDismissed(true);
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="fixed bottom-0 left-0 right-0 z-50 p-3 md:p-4"
                >
                    <div className="max-w-7xl mx-auto">
                        <div
                            className="relative rounded-xl md:rounded-2xl p-4 md:p-6 pr-12 md:pr-20 flex flex-col sm:flex-row items-center justify-between gap-3 md:gap-4"
                            style={{
                                background: 'rgba(12, 8, 10, 0.98)',
                                backdropFilter: 'blur(20px)',
                                border: '1px solid rgba(255, 0, 60, 0.3)',
                                boxShadow: '0 -4px 30px rgba(0, 0, 0, 0.8), 0 0 40px rgba(199, 24, 56, 0.2)',
                            }}
                        >
                            {/* Red Glow Line */}
                            <div
                                className="absolute top-0 left-0 right-0 h-0.5"
                                style={{
                                    background: 'linear-gradient(90deg, transparent, rgba(199, 24, 56, 0.8), transparent)',
                                }}
                            />

                            {/* Content */}
                            <div className="flex-1 text-center sm:text-left">
                                <h3 className="text-lg md:text-xl font-bold text-white mb-1">
                                    Ready to start learning?
                                </h3>
                                <p className="text-xs md:text-sm text-white/70">
                                    Enroll in {courseTitle} and launch your career today
                                </p>
                            </div>

                            {/* CTA Button */}
                            <Link href="/#contact">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="group relative px-6 md:px-8 py-2.5 md:py-3 rounded-xl font-semibold text-white overflow-hidden whitespace-nowrap text-sm md:text-base w-full sm:w-auto"
                                    style={{
                                        background: 'linear-gradient(135deg, rgba(199, 24, 56, 0.9) 0%, rgba(161, 14, 38, 1) 100%)',
                                        boxShadow: '0 0 30px rgba(199, 24, 56, 0.4)',
                                    }}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                                    <span className="relative flex items-center justify-center gap-2">
                                        Enroll Now
                                        <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </motion.button>
                            </Link>

                            {/* Dismiss Button */}
                            <button
                                onClick={handleDismiss}
                                className="absolute top-3 right-3 md:top-1/2 md:-translate-y-1/2 md:right-6 w-7 h-7 md:w-8 md:h-8 rounded-lg flex items-center justify-center hover:bg-white/10 transition-colors duration-200"
                            >
                                <X className="w-4 h-4 md:w-5 md:h-5 text-white/60 hover:text-white" />
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
