'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Logo() {
    return (
        <Link href="/" className="flex items-center gap-3 group">
            <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                className="relative"
            >
                {/* Acquiring Technology Logo */}
                <div className="w-12 h-12 relative">
                    <Image
                        src="/images/logo.png"
                        alt="Acquiring Technology Logo"
                        fill
                        className="object-contain"
                        priority
                    />
                </div>
            </motion.div>

            <div className="flex flex-col">
                <motion.span
                    className="text-xl font-bold tracking-tight text-primary transition-colors duration-300"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                >
                    Acquiring Technology
                </motion.span>
                <motion.span
                    className="text-xs text-muted tracking-wide"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                >

                </motion.span>
            </div>
        </Link>
    );
}
