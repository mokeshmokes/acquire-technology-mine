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

            {/* Main Heading - Smaller */}
            <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.1] mb-4"
            >
                <span className="block text-white">Transform Your Future</span>
                <span className="block text-white">With{' '}</span>
                <span className="block bg-gradient-to-r from-primary via-primary-hover to-primary bg-clip-text text-transparent relative">
                    Industry-Ready
                    <motion.span
                        className="absolute inset-0 bg-gradient-to-r from-primary via-primary-hover to-primary bg-clip-text text-transparent blur-lg opacity-50"
                        animate={{
                            opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                    >
                        Industry-Ready
                    </motion.span>
                </span>
                <span className="block text-white">Technology Education</span>
            </motion.h1>

            {/* Description - Smaller */}
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-base md:text-lg text-white/80 leading-relaxed mb-6 max-w-[480px]"
            >
                Learn AI, Data Science, Cloud Computing, Cyber Security and Software Development through live industry-led training designed for real careers.
            </motion.p>

            {/* CTA Buttons - Smaller */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-3"
            >
                {/* Primary Button */}
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative px-6 py-3 bg-primary hover:bg-primary-hover text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30"
                >
                    <span className="relative z-10 flex items-center justify-center gap-2 text-sm">
                        Explore Courses
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-hover to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.button>

                {/* Secondary Button - Glassmorphism */}
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group px-6 py-3 bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 hover:border-white/20 text-white font-semibold rounded-xl transition-all duration-300"
                >
                    <span className="flex items-center justify-center gap-2 text-sm">
                        <Phone className="w-4 h-4" />
                        Book Free Counselling
                    </span>
                </motion.button>
            </motion.div>
        </div>
    );
}
