'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, RefreshCcw, Home } from 'lucide-react';
import Link from 'next/link';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error('Error:', error);
    }, [error]);

    return (
        <div className="min-h-screen bg-background flex items-center justify-center px-6">
            <div className="max-w-2xl w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    {/* Error Icon */}
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                        className="flex justify-center mb-8"
                    >
                        <div className="relative">
                            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
                            <div className="relative p-6 rounded-2xl bg-surface border border-primary/20">
                                <AlertTriangle className="w-16 h-16 text-primary" />
                            </div>
                        </div>
                    </motion.div>

                    {/* Error Message */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="space-y-4 mb-8"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold text-white">
                            Something went wrong
                        </h1>
                        <p className="text-lg text-muted max-w-lg mx-auto">
                            We encountered an unexpected error. Don&apos;t worry, our team has been
                            notified and we&apos;re working on it.
                        </p>
                        {error.digest && (
                            <p className="text-sm text-muted/60">
                                Error ID: <code className="text-primary">{error.digest}</code>
                            </p>
                        )}
                    </motion.div>

                    {/* Action Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <button
                            onClick={reset}
                            className="group relative px-8 py-4 bg-primary hover:bg-primary-hover text-white font-semibold rounded-xl shadow-2xl transition-all duration-300 overflow-hidden hover:scale-105"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="relative flex items-center justify-center gap-3">
                                <RefreshCcw className="w-5 h-5" />
                                <span>Try Again</span>
                            </div>
                        </button>

                        <Link
                            href="/"
                            className="group relative px-8 py-4 bg-surface border border-primary/30 hover:border-primary text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105"
                        >
                            <div className="flex items-center justify-center gap-3">
                                <Home className="w-5 h-5" />
                                <span>Go Home</span>
                            </div>
                        </Link>
                    </motion.div>

                    {/* Additional Help */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="mt-12 text-sm text-muted"
                    >
                        Need help?{' '}
                        <Link href="/contact" className="text-primary hover:underline">
                            Contact Support
                        </Link>
                    </motion.p>
                </motion.div>
            </div>
        </div>
    );
}
