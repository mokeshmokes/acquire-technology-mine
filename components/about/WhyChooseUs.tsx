'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { whyChooseUsData } from '@/data/aboutUs';

export default function WhyChooseUs() {
    const ref = useRef<HTMLElement>(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section ref={ref} className="relative py-20 md:py-32 px-5 md:px-6">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12 md:mb-16 space-y-4"
                >
                    <h2 className="font-bold text-white" style={{ fontSize: 'clamp(1.8rem, 5vw, 3rem)' }}>
                        Why Choose <span className="text-primary">Us</span>
                    </h2>
                    <p className="text-lg text-muted max-w-2xl mx-auto">
                        We provide everything you need to succeed in your technology career
                    </p>
                </motion.div>

                {/* Cards Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {whyChooseUsData.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                                transition={{ delay: index * 0.1 + 0.2, duration: 0.6 }}
                                whileHover={{
                                    y: -8,
                                    scale: 1.02,
                                }}
                                className="group relative rounded-[20px] md:rounded-[28px] p-6 md:p-8 transition-all duration-500"
                                style={{
                                    background: 'rgba(18, 10, 14, 0.94)',
                                    border: '1px solid rgba(255, 0, 60, 0.18)',
                                    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.45)',
                                }}
                            >


                                {/* Icon */}
                                <div className="w-14 h-14 rounded-2xl bg-primary/10 group-hover:bg-primary group-hover:scale-110 flex items-center justify-center mb-6 transition-all duration-500">
                                    <Icon className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-500" />
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors duration-300">
                                    {item.title}
                                </h3>
                                <p className="text-muted group-hover:text-white/80 transition-colors duration-300">
                                    {item.description}
                                </p>

                                {/* Border Enhancement on Hover */}
                                <div
                                    className="absolute inset-0 rounded-[28px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                    style={{
                                        border: '1px solid rgba(255, 0, 60, 0.4)',
                                    }}
                                />
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
