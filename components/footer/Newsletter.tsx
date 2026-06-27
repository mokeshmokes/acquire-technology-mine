'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';
import { newsletterData } from '@/data/footer';

export default function Newsletter() {
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isSubscribed, setIsSubscribed] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulate subscription
        await new Promise((resolve) => setTimeout(resolve, 1500));

        setIsSubscribed(true);
        setIsLoading(false);
        setEmail('');

        // Reset after 3 seconds
        setTimeout(() => setIsSubscribed(false), 3000);
    };

    return (
        <section className="relative py-16 md:py-20 px-5 md:px-6">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.8 }}
                    className="rounded-[20px] md:rounded-[28px] p-8 md:p-12 text-center"
                    style={{
                        background: 'rgba(255, 255, 255, 0.05)',
                        backdropFilter: 'blur(18px)',
                        border: '1px solid rgba(255, 0, 60, 0.18)',
                        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.45)',
                    }}
                >
                    {/* Icon */}
                    <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                        <Mail className="w-8 h-8 text-primary" />
                    </div>

                    {/* Heading */}
                    <h3 className="font-bold text-white mb-4" style={{ fontSize: 'clamp(1.5rem, 4vw, 2.25rem)' }}>
                        {newsletterData.heading}
                    </h3>

                    {/* Description */}
                    <p className="text-lg text-muted mb-8 max-w-2xl mx-auto">{newsletterData.description}</p>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            disabled={isLoading || isSubscribed}
                            placeholder={newsletterData.placeholder}
                            className="flex-1 px-6 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-[18px] text-white placeholder-muted focus:outline-none focus:border-primary/50 disabled:opacity-50 transition-all duration-300"
                            style={{
                                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
                            }}
                        />

                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            type="submit"
                            disabled={isLoading || isSubscribed}
                            className="group relative px-8 py-4 bg-gradient-to-r from-primary via-primary-hover to-primary text-white font-semibold rounded-[18px] shadow-2xl overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                        >
                            {/* Glow Effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            {/* Button Content */}
                            <span className="relative flex items-center justify-center gap-2">
                                {isSubscribed ? (
                                    <>
                                        <svg
                                            className="w-5 h-5"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                            />
                                        </svg>
                                        <span>Subscribed!</span>
                                    </>
                                ) : (
                                    <>
                                        <span>{newsletterData.buttonText}</span>
                                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                                    </>
                                )}
                            </span>
                        </motion.button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
}
