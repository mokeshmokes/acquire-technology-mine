'use client';

import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

export default function HeroContent() {
    const controls = useAnimation();

    useEffect(() => {
        controls.start('visible');
    }, [controls]);

    return (
        <motion.div
            initial="hidden"
            animate={controls}
            className="w-full h-full flex items-center"
        >
            {/* Large Heading with Blur-to-Sharp Animation - Centered Vertically */}
            <div className="w-full">
                <div className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                    <motion.div
                        initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
                        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                        <span className="block text-white">Transform</span>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
                        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                        transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                        <span className="block text-white">Your Future</span>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
                        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                        transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                        <span className="block text-white">With</span>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
                        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                        transition={{ duration: 0.8, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="relative"
                    >
                        <span className="block bg-gradient-to-r from-primary via-primary-hover to-primary bg-clip-text text-transparent relative">
                            Industry-Ready
                            {/* Animated glow */}
                            <motion.span
                                className="absolute inset-0 bg-gradient-to-r from-primary via-primary-hover to-primary bg-clip-text text-transparent"
                                animate={{
                                    opacity: [0.5, 1, 0.5],
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
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
                        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                        transition={{ duration: 0.8, delay: 1.0, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                        <span className="block text-white">Technology</span>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
                        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                        transition={{ duration: 0.8, delay: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                        <span className="block text-white">Education</span>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
}
