'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { coursesMegaMenu, resourcesMegaMenu } from '@/data/navigation';

interface MegaMenuProps {
    type: 'courses' | 'resources';
    isOpen: boolean;
}

export default function MegaMenu({ type, isOpen }: MegaMenuProps) {
    const menuData = type === 'courses' ? coursesMegaMenu : resourcesMegaMenu;

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="fixed top-20 left-0 w-full mt-4 z-[100]"
                >
                    <div className="container mx-auto px-6">
                        <div className="bg-surface-elevated/95 backdrop-blur-xl border-glass rounded-2xl shadow-premium p-8">
                            <div className={`grid ${type === 'courses' ? 'grid-cols-3' : 'grid-cols-3'} gap-8`}>
                                {menuData.map((category, idx) => (
                                    <motion.div
                                        key={category.category}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: idx * 0.1 }}
                                    >
                                        <h3 className="text-sm font-semibold text-primary-hover mb-4 uppercase tracking-wider">
                                            {category.category}
                                        </h3>
                                        <div className="space-y-3">
                                            {category.items.map((item) => {
                                                const Icon = item.icon;
                                                return (
                                                    <Link
                                                        key={item.title}
                                                        href={item.href}
                                                        className="group flex items-start gap-3 p-3 rounded-lg hover:bg-surface-elevated transition-all duration-300"
                                                    >
                                                        <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                                            <Icon className="w-5 h-5" />
                                                        </div>
                                                        <div className="flex-1">
                                                            <div className="flex items-center justify-between">
                                                                <h4 className="text-sm font-semibold text-white group-hover:text-primary-hover transition-colors">
                                                                    {item.title}
                                                                </h4>
                                                                <ArrowRight className="w-4 h-4 text-muted opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                                                            </div>
                                                            {'description' in item && (
                                                                <p className="text-xs text-muted mt-1">
                                                                    {item.description}
                                                                </p>
                                                            )}
                                                            {'subtitle' in item && (
                                                                <p className="text-xs text-muted mt-1">
                                                                    {item.subtitle}
                                                                </p>
                                                            )}
                                                        </div>
                                                    </Link>
                                                );
                                            })}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
