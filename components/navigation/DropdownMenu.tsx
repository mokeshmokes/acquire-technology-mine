'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { moreMenu } from '@/data/navigation';

interface DropdownMenuProps {
    isOpen: boolean;
}

export default function DropdownMenu({ isOpen }: DropdownMenuProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full right-0 mt-2 w-80 z-[100]"
                >
                    <div className="bg-surface-elevated/95 backdrop-blur-xl border-glass rounded-xl shadow-premium p-4">
                        {moreMenu.map((category, idx) => (
                            <motion.div
                                key={category.category}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.05 }}
                                className={idx > 0 ? 'mt-4 pt-4 border-t border-border' : ''}
                            >
                                <h3 className="text-xs font-semibold text-primary-hover mb-2 uppercase tracking-wider">
                                    {category.category}
                                </h3>
                                <div className="space-y-1">
                                    {category.items.map((item) => {
                                        const Icon = item.icon;
                                        return (
                                            <Link
                                                key={item.title}
                                                href={item.href}
                                                className="group flex items-center gap-3 p-2 rounded-lg hover:bg-surface-elevated transition-all duration-200"
                                            >
                                                <div className="p-1.5 rounded-md bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                                    <Icon className="w-4 h-4" />
                                                </div>
                                                <span className="text-sm text-white group-hover:text-primary-hover transition-colors">
                                                    {item.title}
                                                </span>
                                            </Link>
                                        );
                                    })}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
