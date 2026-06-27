'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';

export default function HeroContent() {
    return (
        <div className="w-full max-w-2xl">
            {/* Badge */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm mb-4"
            >
                <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary"></span>
                </span>
                <span className="text-xs font-medium text-primary uppercase tracking-wider">
                    Live Technology Education
                </span>
            </motion.div>

            {/* Main Heading - Responsive with clamp() */}
            <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="font-bold leading-[1.1] mb-4"
                style={{ fontSize: 'clamp(2rem, 6vw, 3.75rem)' }}
            >
                <span className="block text-white">Transform Your Future</span>
                <span className="block text-white">With{' '}</span>
                <span className="block bg-gradient-to-r from-primary via-primary-hover to-primary bg-clip-text text-transparent">
                    Industry-Ready
                </span>
                <span className="block text-white">Technology Education</span>
            </motion.h1>

            {/* Description - Responsive */}
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-white/80 leading-relaxed mb-6 max-w-[480px]"
                style={{ fontSize: 'clamp(0.9rem, 2.5vw, 1.125rem)' }}
            >
                Learn AI, Data Science, Cloud Computing, Cyber Security and Software Development through live industry-led training designed for real careers.
            </motion.p>

            {/* CTA Buttons - Responsive: Stack on mobile, horizontal on desktop */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-3.5 sm:gap-3"
            >
                {/* Primary Button - Full width on mobile */}
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative w-full sm:w-auto px-6 py-3.5 sm:py-3 bg-primary hover:bg-primary-hover text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30"
                >
                    <span className="relative z-10 flex items-center justify-center gap-2 text-base sm:text-sm">
                        Explore Courses
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-hover to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.button>

                {/* Secondary Button - Full width on mobile, Glassmorphism */}
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group w-full sm:w-auto px-6 py-3.5 sm:py-3 bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 hover:border-white/20 text-white font-semibold rounded-xl transition-all duration-300"
                >
                    <span className="flex items-center justify-center gap-2 text-base sm:text-sm">
                        <Phone className="w-4 h-4" />
                        Book Free Counselling
                    </span>
                </motion.button>
            </motion.div>
        </div>
    );
}
