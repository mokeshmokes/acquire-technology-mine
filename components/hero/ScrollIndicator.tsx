'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function ScrollIndicator() {
    const handleScroll = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth',
        });
    };

    return (
        <motion.button
            onClick={handleScroll}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.6 }}
            className="absolute bottom-8 md:bottom-12 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center gap-2 group cursor-pointer"
            whileHover={{ scale: 1.1 }}
        >
            <span className="text-sm text-muted group-hover:text-white transition-colors">
                Scroll to explore
            </span>
            <motion.div
                animate={{
                    y: [0, 8, 0],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
                className="w-8 h-12 border-2 border-border rounded-full flex items-start justify-center p-2 group-hover:border-primary transition-colors"
            >
                <motion.div
                    animate={{
                        y: [0, 12, 0],
                        opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                    className="w-1.5 h-1.5 bg-primary rounded-full"
                />
            </motion.div>
            <ChevronDown className="w-4 h-4 text-primary group-hover:animate-bounce" />
        </motion.button>
    );
}
