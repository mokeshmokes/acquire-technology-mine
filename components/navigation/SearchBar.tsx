'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X } from 'lucide-react';

export default function SearchBar() {
    const [isOpen, setIsOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isOpen]);

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setIsOpen(false);
                setSearchQuery('');
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
        };
    }, [isOpen]);

    return (
        <>
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(true)}
                className="p-2 rounded-lg hover:bg-surface-elevated transition-colors"
                aria-label="Open search"
            >
                <Search className="w-5 h-5" />
            </motion.button>

            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
                            onClick={() => setIsOpen(false)}
                        />

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: -20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: -20 }}
                            transition={{ duration: 0.2 }}
                            className="fixed top-24 left-1/2 -translate-x-1/2 w-full max-w-2xl z-50 px-4"
                        >
                            <div className="glass-effect border-glass rounded-2xl p-6 shadow-premium">
                                <div className="flex items-center gap-4 mb-4">
                                    <Search className="w-6 h-6 text-primary" />
                                    <input
                                        ref={inputRef}
                                        type="text"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        placeholder="Search courses, resources, or content..."
                                        className="flex-1 bg-transparent text-white placeholder:text-muted outline-none text-lg"
                                    />
                                    <button
                                        onClick={() => setIsOpen(false)}
                                        className="p-2 hover:bg-surface-elevated rounded-lg transition-colors"
                                        aria-label="Close search"
                                    >
                                        <X className="w-5 h-5" />
                                    </button>
                                </div>

                                {searchQuery && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="pt-4 border-t border-border"
                                    >
                                        <p className="text-sm text-muted">
                                            Search results for &ldquo;{searchQuery}&rdquo; will appear here...
                                        </p>
                                    </motion.div>
                                )}
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
