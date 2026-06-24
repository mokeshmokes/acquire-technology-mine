'use client';

import { motion } from 'framer-motion';
import { letterVariants } from '@/lib/animation-utils';

interface TextRevealProps {
    text: string;
    className?: string;
    delay?: number;
    staggerDelay?: number;
}

export default function TextReveal({
    text,
    className = '',
    delay = 0,
    staggerDelay = 0.03,
}: TextRevealProps) {
    const words = text.split(' ');

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: staggerDelay,
                delayChildren: delay,
            },
        },
    };

    const wordVariants = {
        hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
        visible: {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            transition: {
                duration: 0.5,
                ease: [0.25, 0.46, 0.45, 0.94],
            },
        },
    };

    return (
        <motion.div
            className={className}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {words.map((word, wordIndex) => (
                <motion.span
                    key={`word-${wordIndex}`}
                    className="inline-block mr-2"
                    variants={wordVariants}
                >
                    {word.split('').map((char, charIndex) => (
                        <motion.span
                            key={`char-${wordIndex}-${charIndex}`}
                            className="inline-block"
                            variants={letterVariants}
                        >
                            {char}
                        </motion.span>
                    ))}
                </motion.span>
            ))}
        </motion.div>
    );
}
