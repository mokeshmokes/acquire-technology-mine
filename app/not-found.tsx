'use client';

import { motion } from 'framer-motion';
import { Home, ArrowLeft, Search } from 'lucide-react';
import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="min-h-screen bg-background flex items-center justify-center px-6">
            <div className="max-w-2xl w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    {/* 404 Number */}
                    <motion.div
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.2, type: 'spring', stiffness: 100 }}
                        className="relative mb-8"
                    >
                        <div className="absolute inset-0 bg-primary/10 blur-3xl" />
                        <h1 className="relative text-[150px] md:text-[200px] font-bold bg-gradient-to-br from-primary via-primary-hover to-primary bg-clip-text text-transparent leading-none">
                            404
                        </h1>
                    </motion.div>

                    {/* Message */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="space-y-4 mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white">
                            Page Not Found
                        </h2>
                        <p className="text-lg text-muted max-w-lg mx-auto">
                            The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get
                            you back on track.
                        </p>
                    </motion.div>

                    {/* Action Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <Link
                            href="/"
                            className="group relative px-8 py-4 bg-primary hover:bg-primary-hover text-white font-semibold rounded-xl shadow-2xl transition-all duration-300 overflow-hidden hover:scale-105"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="relative flex items-center justify-center gap-3">
                                <Home className="w-5 h-5" />
                                <span>Go Home</span>
                            </div>
                        </Link>

                        <button
                            onClick={() => window.history.back()}
                            className="group relative px-8 py-4 bg-surface border border-primary/30 hover:border-primary text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105"
                        >
                            <div className="flex items-center justify-center gap-3">
                                <ArrowLeft className="w-5 h-5" />
                                <span>Go Back</span>
                            </div>
                        </button>
                    </motion.div>

                    {/* Popular Links */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="mt-16 pt-8 border-t border-border"
                    >
                        <h3 className="text-sm font-semibold text-muted uppercase tracking-wider mb-4">
                            Popular Pages
                        </h3>
                        <div className="flex flex-wrap gap-3 justify-center">
                            <Link
                                href="/#live-courses"
                                className="px-4 py-2 text-sm bg-surface hover:bg-primary/10 text-white hover:text-primary border border-white/[0.05] hover:border-primary/30 rounded-lg transition-all"
                            >
                                Live Courses
                            </Link>
                            <Link
                                href="/about-us"
                                className="px-4 py-2 text-sm bg-surface hover:bg-primary/10 text-white hover:text-primary border border-white/[0.05] hover:border-primary/30 rounded-lg transition-all"
                            >
                                About Us
                            </Link>
                            <Link
                                href="/contact"
                                className="px-4 py-2 text-sm bg-surface hover:bg-primary/10 text-white hover:text-primary border border-white/[0.05] hover:border-primary/30 rounded-lg transition-all"
                            >
                                Contact
                            </Link>
                        </div>
                    </motion.div>

                    {/* Search Suggestion */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                        className="mt-8 text-sm text-muted flex items-center justify-center gap-2"
                    >
                        <Search className="w-4 h-4" />
                        <span>Try using the search bar in the navigation</span>
                    </motion.p>
                </motion.div>
            </div>
        </div>
    );
}
