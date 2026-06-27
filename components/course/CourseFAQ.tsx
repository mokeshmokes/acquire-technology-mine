'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import ScrollReveal from '@/components/animations/ScrollReveal';
import { CourseFAQ as FAQType } from '@/data/courseData';

interface CourseFAQProps {
    faqs: FAQType[];
}

export default function CourseFAQ({ faqs }: CourseFAQProps) {
    const [expandedFAQ, setExpandedFAQ] = useState<number | null>(0);

    const toggleFAQ = (index: number) => {
        setExpandedFAQ(expandedFAQ === index ? null : index);
    };

    return (
        <section className="relative py-16 md:py-24 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-[#0C080A]" />

            {/* Content */}
            <div className="relative z-10 max-w-4xl mx-auto px-5 md:px-6 lg:px-12">
                <ScrollReveal>
                    <div className="text-center mb-12 md:mb-16">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-100px' }}
                            transition={{ duration: 0.6 }}
                            className="font-bold text-white mb-4 md:mb-6 px-4"
                            style={{ fontSize: 'clamp(1.8rem, 5vw, 3rem)' }}
                        >
                            Frequently Asked Questions
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-100px' }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-base md:text-lg text-white/70 px-4"
                        >
                            Got questions? We have got answers
                        </motion.p>
                    </div>
                </ScrollReveal>

                {/* FAQ List */}
                <ScrollReveal>
                    <div className="space-y-3 md:space-y-4">
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-50px' }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                className="rounded-xl md:rounded-2xl overflow-hidden"
                                style={{
                                    background: 'rgba(255, 255, 255, 0.05)',
                                    backdropFilter: 'blur(18px)',
                                    border: '1px solid rgba(255, 0, 60, 0.18)',
                                }}
                            >
                                {/* Question */}
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full p-4 md:p-6 flex items-start justify-between hover:bg-white/5 transition-colors duration-200 text-left gap-3"
                                >
                                    <h3 className="text-base md:text-lg font-semibold text-white flex-1">
                                        {faq.question}
                                    </h3>
                                    <motion.div
                                        animate={{ rotate: expandedFAQ === index ? 180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="flex-shrink-0"
                                    >
                                        {expandedFAQ === index ? (
                                            <Minus className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                                        ) : (
                                            <Plus className="w-5 h-5 md:w-6 md:h-6 text-white/60" />
                                        )}
                                    </motion.div>
                                </button>

                                {/* Answer */}
                                <AnimatePresence>
                                    {expandedFAQ === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-4 md:px-6 pb-4 md:pb-6">
                                                <div
                                                    className="p-3 md:p-4 rounded-lg md:rounded-xl"
                                                    style={{
                                                        background: 'rgba(0, 0, 0, 0.3)',
                                                    }}
                                                >
                                                    <p className="text-sm md:text-base text-white/80 leading-relaxed">
                                                        {faq.answer}
                                                    </p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
