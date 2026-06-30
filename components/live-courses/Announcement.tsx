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
            whileHover={{ scale: 1.02, y: -1 }}
            className="relative inline-block cursor-pointer"
        >
            {/* Announcement Content */}
            <div className="relative bg-surface/80 backdrop-blur-sm border border-yellow-500/30 rounded-full px-6 py-3.5">
                <div className="flex items-center gap-3">
                    <motion.span
                        animate={{
                            scale: [1, 1.25, 1],
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
                    <span className="text-sm font-semibold text-yellow-400 tracking-wide">{text}</span>
                </div>
            </div>
        </motion.div>
    );
}
