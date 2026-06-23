'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { compactCourses } from '@/data/navigation';

interface CompactCoursesDropdownProps {
    isOpen: boolean;
}

export default function CompactCoursesDropdown({ isOpen }: CompactCoursesDropdownProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="absolute top-full right-0 mt-2 w-[460px] z-[100]"
                >
                    {/* Premium Glow Effect */}
                    <div className="absolute -inset-2 bg-gradient-to-br from-primary/20 via-primary/10 to-primary/5 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Dropdown Container */}
                    <div className="relative bg-[#12080C]/95 backdrop-blur-xl border border-white/[0.08] rounded-3xl shadow-2xl overflow-hidden">
                        {/* Subtle Top Border Glow */}
                        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

                        {/* Course Cards */}
                        <div className="p-3 space-y-2">
                            {compactCourses.map((course, index) => {
                                const Icon = course.icon;

                                return (
                                    <motion.div
                                        key={course.id}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.05, duration: 0.3 }}
                                    >
                                        <Link
                                            href={course.href}
                                            className="group/card relative block p-4 rounded-2xl bg-transparent hover:bg-surface transition-all duration-300"
                                        >
                                            {/* Hover Glow Background */}
                                            <motion.div
                                                className="absolute inset-0 rounded-2xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-300"
                                                style={{
                                                    background:
                                                        'radial-gradient(circle at center, rgba(122, 0, 25, 0.15), transparent 70%)',
                                                }}
                                            />

                                            {/* Content */}
                                            <div className="relative flex items-start gap-4">
                                                {/* Icon */}
                                                <motion.div
                                                    whileHover={{ scale: 1.1 }}
                                                    transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                                                    className="flex-shrink-0 p-3 rounded-xl bg-primary/10 text-primary group-hover/card:bg-primary group-hover/card:text-white transition-all duration-300"
                                                >
                                                    <Icon className="w-6 h-6" />
                                                </motion.div>

                                                {/* Text Content */}
                                                <div className="flex-1 min-w-0">
                                                    <div className="flex items-start justify-between gap-3 mb-2">
                                                        <h4 className="font-semibold text-white group-hover/card:text-primary transition-colors duration-300 leading-snug">
                                                            {course.title}
                                                        </h4>
                                                        <motion.div
                                                            initial={{ x: 0 }}
                                                            whileHover={{ x: 3 }}
                                                            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                                                            className="flex-shrink-0"
                                                        >
                                                            <ArrowRight className="w-5 h-5 text-muted group-hover/card:text-primary transition-colors duration-300" />
                                                        </motion.div>
                                                    </div>
                                                    <p className="text-sm text-muted leading-relaxed line-clamp-2">
                                                        {course.description}
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Bottom Border (visible on hover) */}
                                            <div className="absolute bottom-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-primary/0 group-hover/card:via-primary/20 to-transparent transition-all duration-300" />
                                        </Link>
                                    </motion.div>
                                );
                            })}
                        </div>

                        {/* View All Courses Link */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="px-6 py-4 border-t border-white/[0.08]"
                        >
                            <Link
                                href="/courses"
                                className="group/link flex items-center justify-between text-sm hover:text-primary transition-colors duration-300"
                            >
                                <span className="font-medium text-white group-hover/link:text-primary">
                                    View All Courses
                                </span>
                                <motion.div
                                    initial={{ x: 0 }}
                                    whileHover={{ x: 3 }}
                                    transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                                >
                                    <ArrowRight className="w-4 h-4 text-muted group-hover/link:text-primary transition-colors" />
                                </motion.div>
                            </Link>
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
