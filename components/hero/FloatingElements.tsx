'use client';

import { motion } from 'framer-motion';
import { Code2, Brain, Cloud, Shield, Zap, Award } from 'lucide-react';

const icons = [
    { Icon: Code2, delay: 0, x: '10%', y: '20%' },
    { Icon: Brain, delay: 0.5, x: '80%', y: '15%' },
    { Icon: Cloud, delay: 1, x: '15%', y: '70%' },
    { Icon: Shield, delay: 1.5, x: '85%', y: '75%' },
    { Icon: Zap, delay: 2, x: '50%', y: '10%' },
    { Icon: Award, delay: 2.5, x: '90%', y: '45%' },
];

export default function FloatingElements() {
    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {icons.map(({ Icon, delay, x, y }, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                        opacity: [0.1, 0.3, 0.1],
                        scale: [1, 1.2, 1],
                        y: [0, -20, 0],
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        delay: delay,
                        ease: 'easeInOut',
                    }}
                    className="absolute"
                    style={{
                        left: x,
                        top: y,
                    }}
                >
                    <div className="relative">
                        <div className="absolute inset-0 bg-primary rounded-full blur-xl opacity-50" />
                        <Icon className="w-8 h-8 text-primary relative z-10" />
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
