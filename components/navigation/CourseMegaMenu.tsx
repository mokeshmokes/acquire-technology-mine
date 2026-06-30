'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { courseMegaMenuData } from '@/data/courseMegaMenu';

export default function CourseMegaMenu() {
    const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

    const handleMouseEnter = (id: string) => {
        setActiveSubmenu(id);
    };

    return (
        <div
            className="relative"
            onMouseLeave={() => setActiveSubmenu(null)}
        >
            {/* First Level Menu */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full left-0 mt-2 rounded-[22px] overflow-hidden"
                style={{
                    width: '480px',
                    background: 'rgba(12, 8, 10, 0.95)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 0, 60, 0.15)',
                    boxShadow: '0 20px 60px rgba(122, 0, 25, 0.4), 0 0 40px rgba(199, 24, 56, 0.15)',
                }}
            >
                <div className="p-3">
                    {courseMegaMenuData.map((item, index) => (
                        <Link
                            key={item.id}
                            href={`/courses/${item.id}`}
                            onMouseEnter={() => handleMouseEnter(item.id)}
                            className="relative block"
                        >
                            <motion.div
                                whileHover={{ x: 4 }}
                                transition={{ duration: 0.2 }}
                                className="group relative flex items-start gap-4 px-4 py-4 rounded-xl cursor-pointer transition-all duration-250"
                                style={{
                                    background: activeSubmenu === item.id ? 'rgba(199, 24, 56, 0.15)' : 'transparent',
                                }}
                            >
                                {/* Left Border Glow */}
                                <motion.div
                                    className="absolute left-0 top-2 bottom-2 w-1 rounded-r-full bg-primary"
                                    initial={{ opacity: 0, scaleY: 0 }}
                                    animate={{
                                        opacity: activeSubmenu === item.id ? 1 : 0,
                                        scaleY: activeSubmenu === item.id ? 1 : 0,
                                    }}
                                    transition={{ duration: 0.25 }}
                                />

                                {/* Icon */}
                                <motion.div
                                    className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                                    style={{
                                        background: activeSubmenu === item.id
                                            ? 'rgba(199, 24, 56, 0.25)'
                                            : 'rgba(255, 255, 255, 0.05)',
                                        border: '1px solid rgba(255, 255, 255, 0.08)',
                                    }}
                                    animate={{
                                        scale: activeSubmenu === item.id ? 1.1 : 1,
                                    }}
                                    transition={{ duration: 0.25 }}
                                >
                                    <item.icon
                                        className="w-6 h-6"
                                        style={{
                                            color: activeSubmenu === item.id ? '#C21838' : '#ffffff80',
                                        }}
                                    />
                                </motion.div>

                                {/* Content */}
                                <div className="flex-1 min-w-0">
                                    <h3
                                        className="text-sm font-semibold mb-1 transition-colors duration-250"
                                        style={{
                                            color: activeSubmenu === item.id ? '#ffffff' : '#ffffffb3',
                                        }}
                                    >
                                        {item.title}
                                    </h3>
                                    <p className="text-xs text-white/50 line-clamp-1">
                                        {item.description}
                                    </p>
                                </div>

                                {/* Arrow */}
                                <motion.div
                                    animate={{
                                        x: activeSubmenu === item.id ? 4 : 0,
                                        opacity: activeSubmenu === item.id ? 1 : 0.5,
                                    }}
                                    transition={{ duration: 0.25 }}
                                    className="flex-shrink-0"
                                >
                                    <ChevronRight
                                        className="w-5 h-5"
                                        style={{
                                            color: activeSubmenu === item.id ? '#C21838' : '#ffffff80',
                                        }}
                                    />
                                </motion.div>
                            </motion.div>

                            {/* Divider */}
                            {index < courseMegaMenuData.length - 1 && (
                                <div className="mx-4 h-px bg-white/5" />
                            )}
                        </Link>
                    ))}

                    {/* View All Courses Button */}
                    <Link href="#courses">
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="mt-3 mx-2 relative px-4 py-3 rounded-xl overflow-hidden group cursor-pointer"
                            style={{
                                background: 'linear-gradient(135deg, rgba(199, 24, 56, 0.9) 0%, rgba(161, 14, 38, 1) 100%)',
                                border: '1px solid rgba(255, 255, 255, 0.08)',
                                boxShadow: '0 0 20px rgba(199, 24, 56, 0.35)',
                            }}
                        >
                            {/* Shimmer Effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

                            <div className="relative flex items-center justify-center gap-2 text-sm font-semibold text-white">
                                <span>View All Courses</span>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                            </div>
                        </motion.div>
                    </Link>
                </div>
            </motion.div>

            {/* Second Level Submenu */}
            <AnimatePresence>
                {activeSubmenu && (
                    <motion.div
                        initial={{ opacity: 0, x: 15, scale: 0.98 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: 15, scale: 0.98 }}
                        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute top-full left-[496px] mt-2 rounded-[22px] overflow-hidden"
                        style={{
                            width: '280px',
                            background: 'rgba(12, 8, 10, 0.95)',
                            backdropFilter: 'blur(20px)',
                            border: '1px solid rgba(255, 0, 60, 0.15)',
                            boxShadow: '0 20px 60px rgba(122, 0, 25, 0.4), 0 0 40px rgba(199, 24, 56, 0.15)',
                        }}
                    >
                        <div className="p-3">
                            {courseMegaMenuData
                                .find(item => item.id === activeSubmenu)
                                ?.submenu.map((subItem, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.03, duration: 0.2 }}
                                    >
                                        <Link href={`/courses/${activeSubmenu}`}>
                                            <div
                                                className="flex items-center gap-3 px-4 py-3"
                                            >
                                                <subItem.icon className="w-4 h-4 text-white/60" />
                                                <span className="text-sm text-white/80">
                                                    {subItem.title}
                                                </span>
                                            </div>
                                        </Link>
                                    </motion.div>
                                ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
