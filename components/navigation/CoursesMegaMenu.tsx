'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { courseCategories, coursesData } from '@/data/navigation';

interface CoursesMegaMenuProps {
    isOpen: boolean;
}

export default function CoursesMegaMenu({ isOpen }: CoursesMegaMenuProps) {
    const [activeCategory, setActiveCategory] = useState(courseCategories[0]?.id || '');

    const activeCourses = coursesData.filter(
        (course) => course.categoryId === activeCategory
    );

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
                        <div className="bg-surface-elevated/95 backdrop-blur-xl border border-primary/20 rounded-2xl shadow-2xl p-8">
                            <div className="grid grid-cols-12 gap-8">
                                {/* LEFT COLUMN - Course Categories */}
                                <div className="col-span-4 border-r border-border pr-8">
                                    <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-6">
                                        Course Categories
                                    </h3>
                                    <div className="space-y-2">
                                        {courseCategories.map((category, index) => {
                                            const Icon = category.icon;
                                            const isActive = activeCategory === category.id;

                                            return (
                                                <motion.button
                                                    key={category.id}
                                                    initial={{ opacity: 0, x: -20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: index * 0.05 }}
                                                    onMouseEnter={() => setActiveCategory(category.id)}
                                                    className={`
                                                        relative w-full flex items-center gap-4 p-4 rounded-xl
                                                        transition-all duration-300 group text-left
                                                        ${isActive
                                                            ? 'bg-primary/10 text-primary'
                                                            : 'hover:bg-surface text-white hover:text-primary'
                                                        }
                                                    `}
                                                >
                                                    {/* Active indicator */}
                                                    {isActive && (
                                                        <motion.div
                                                            layoutId="activeCategory"
                                                            className="absolute inset-0 bg-primary/10 rounded-xl"
                                                            transition={{
                                                                type: 'spring',
                                                                stiffness: 380,
                                                                damping: 30,
                                                            }}
                                                        />
                                                    )}

                                                    <div
                                                        className={`
                                                        relative p-3 rounded-lg transition-all duration-300
                                                        ${isActive
                                                                ? 'bg-primary text-white'
                                                                : 'bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white'
                                                            }
                                                    `}
                                                    >
                                                        <Icon className="w-6 h-6" />
                                                    </div>

                                                    <div className="relative flex-1">
                                                        <span className="font-semibold block">
                                                            {category.name}
                                                        </span>
                                                        <span className="text-xs text-muted">
                                                            {
                                                                coursesData.filter(
                                                                    (c) => c.categoryId === category.id
                                                                ).length
                                                            }{' '}
                                                            courses
                                                        </span>
                                                    </div>

                                                    <ArrowRight
                                                        className={`
                                                        relative w-5 h-5 transition-transform duration-300
                                                        ${isActive ? 'translate-x-1' : 'group-hover:translate-x-1'}
                                                    `}
                                                    />
                                                </motion.button>
                                            );
                                        })}
                                    </div>
                                </div>

                                {/* RIGHT COLUMN - Available Courses */}
                                <div className="col-span-8">
                                    <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-6">
                                        Available Courses
                                    </h3>

                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={activeCategory}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                            transition={{ duration: 0.3 }}
                                            className="grid grid-cols-2 gap-4"
                                        >
                                            {activeCourses.map((course, index) => {
                                                const Icon = course.icon;

                                                return (
                                                    <motion.div
                                                        key={course.id}
                                                        initial={{ opacity: 0, y: 20 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        transition={{ delay: index * 0.1 }}
                                                    >
                                                        <Link
                                                            href={course.href}
                                                            className="group relative block p-6 rounded-xl glass-effect border border-border hover:border-primary/40 transition-all duration-300 h-full"
                                                        >
                                                            {/* Hover Glow */}
                                                            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:via-primary/10 group-hover:to-primary/5 transition-all duration-300" />

                                                            <div className="relative space-y-4">
                                                                {/* Icon */}
                                                                <div className="flex items-start justify-between">
                                                                    <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                                                        <Icon className="w-6 h-6" />
                                                                    </div>
                                                                    <ArrowRight className="w-5 h-5 text-muted group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
                                                                </div>

                                                                {/* Course Info */}
                                                                <div>
                                                                    <h4 className="text-lg font-bold text-white group-hover:text-primary transition-colors duration-300 mb-2">
                                                                        {course.title}
                                                                    </h4>
                                                                    <p className="text-sm text-muted line-clamp-2">
                                                                        {course.description}
                                                                    </p>
                                                                </div>

                                                                {/* Premium Badge */}
                                                                <div className="flex items-center gap-2 pt-2">
                                                                    <motion.div
                                                                        className="w-2 h-2 rounded-full bg-primary"
                                                                        animate={{
                                                                            scale: [1, 1.2, 1],
                                                                            opacity: [1, 0.7, 1],
                                                                        }}
                                                                        transition={{
                                                                            duration: 2,
                                                                            repeat: Infinity,
                                                                            ease: 'easeInOut',
                                                                        }}
                                                                    />
                                                                    <span className="text-xs text-muted uppercase tracking-wide">
                                                                        Premium Course
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    </motion.div>
                                                );
                                            })}
                                        </motion.div>
                                    </AnimatePresence>

                                    {/* View All Courses Link */}
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.3 }}
                                        className="mt-8 pt-6 border-t border-border"
                                    >
                                        <Link
                                            href="/courses"
                                            className="group inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-hover transition-colors"
                                        >
                                            <span>View All Courses</span>
                                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </Link>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
