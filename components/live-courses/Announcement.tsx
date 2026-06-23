'use client';

import { motion } from 'framer-motion';

interface AnnouncementProps {
    icon: string;
    text: string;
}

export default function Announcement({ icon, text }: AnnouncementProps) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="relative inline-block"
        >
            {/* Animated Glow */}
            <motion.div
                className="absolute -inset-2 bg-gradient-to-r from-primary/30 via-primary/20 to-primary/30 rounded-full blur-xl"
                animate={{
                    opacity: [0.5, 1, 0.5],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />

            {/* Announcement Content */}
            <div className="relative bg-surface/90 backdrop-blur-xl border border-primary/30 rounded-full px-6 py-3 shadow-lg">
                <div className="flex items-center gap-3">
                    <motion.span
                        animate={{
                            scale: [1, 1.2, 1],
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                        className="text-lg"
                    >
                        {icon}
                    </motion.span>
                    <span className="text-sm font-medium text-white">{text}</span>
                </div>
            </div>
        </motion.div>
    );
}
