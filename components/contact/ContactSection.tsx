'use client';

import { motion } from 'framer-motion';
import { contactHeroData, contactCardsData, socialLinksData } from '@/data/contact';
import ContactForm from './ContactForm';

export default function ContactSection() {
    const { badge, heading, description } = contactHeroData;

    return (
        <section className="relative min-h-[900px] flex items-center overflow-hidden py-20 md:py-32 bg-background">
            {/* Static Background with Gradients */}
            <div className="absolute inset-0">
                {/* Base Dark Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-background via-[#0A0A0A] to-background" />

                {/* Animated Red Gradient Orbs */}
                <div
                    className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/20 blur-[120px]"
                    style={{
                        animation: 'pulse-glow 8s ease-in-out infinite',
                    }}
                />
                <div
                    className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-primary-hover/15 blur-[140px]"
                    style={{
                        animation: 'pulse-glow-delayed 10s ease-in-out infinite',
                    }}
                />

                {/* Subtle Grid Pattern */}
                <div
                    className="absolute inset-0 opacity-[0.02]"
                    style={{
                        backgroundImage: `linear-gradient(rgba(255, 0, 60, 0.1) 1px, transparent 1px),
                                         linear-gradient(90deg, rgba(255, 0, 60, 0.1) 1px, transparent 1px)`,
                        backgroundSize: '50px 50px',
                    }}
                />
            </div>

            {/* Content */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-5 md:px-6 lg:px-6">
                <div className="grid lg:grid-cols-2 gap-12 md:gap-16">
                    {/* LEFT SIDE - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="space-y-8"
                    >
                        {/* Badge */}
                        <div className="inline-block">
                            <div className="flex items-center gap-2 px-4 py-2 bg-surface/80 backdrop-blur-sm border border-yellow-500/30 rounded-full">
                                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
                                <span className="text-xs font-semibold text-yellow-400 uppercase tracking-wider">
                                    {badge}
                                </span>
                            </div>
                        </div>

                        {/* Heading */}
                        <div className="space-y-3">
                            <h2 className="font-bold text-white leading-[1.1]" style={{ fontSize: 'clamp(1.8rem, 5vw, 3.75rem)' }}>
                                {heading.main}
                            </h2>
                            <h2 className="font-bold bg-gradient-to-r from-primary via-primary-hover to-primary bg-clip-text text-transparent leading-[1.1]" style={{ fontSize: 'clamp(1.8rem, 5vw, 3.75rem)' }}>
                                {heading.highlight}
                            </h2>
                            <h2 className="font-bold text-white leading-[1.1]" style={{ fontSize: 'clamp(1.8rem, 5vw, 3.75rem)' }}>
                                {heading.suffix}
                            </h2>
                        </div>

                        {/* Description */}
                        <p className="text-lg text-muted leading-relaxed max-w-xl">{description}</p>

                        {/* Contact Cards */}
                        <div className="grid sm:grid-cols-2 gap-4 pt-4">
                            {contactCardsData.map((card, index) => {
                                const Icon = card.icon;
                                return (
                                    <motion.div
                                        key={card.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
                                        whileHover={{ y: -4, scale: 1.02 }}
                                        className="group relative rounded-[18px] p-6 transition-all duration-300"
                                        style={{
                                            background: 'rgba(255, 255, 255, 0.05)',
                                            backdropFilter: 'blur(18px)',
                                            border: '1px solid rgba(255, 0, 60, 0.18)',
                                            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.45)',
                                        }}
                                    >
                                        {/* Hover Glow */}
                                        <div className="absolute -inset-[1px] rounded-[18px] bg-gradient-to-r from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/40 group-hover:via-primary/20 group-hover:to-primary/40 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl -z-10" />

                                        <div className="flex items-start gap-4">
                                            {/* Icon */}
                                            <div className="w-12 h-12 rounded-xl bg-primary/10 group-hover:bg-primary flex items-center justify-center transition-all duration-300">
                                                <Icon className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
                                            </div>

                                            {/* Content */}
                                            <div className="flex-1 space-y-1">
                                                <p className="text-xs text-muted uppercase tracking-wider">
                                                    {card.title}
                                                </p>
                                                <p className="text-sm font-semibold text-white">{card.value}</p>
                                                <p className="text-xs text-muted">{card.subtitle}</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>

                        {/* Social Links */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.7, duration: 0.6 }}
                            className="flex items-center gap-4 pt-4"
                        >
                            <span className="text-sm text-muted">Follow us:</span>
                            <div className="flex items-center gap-3">
                                {socialLinksData.map((social) => {
                                    const Icon = social.icon;
                                    return (
                                        <motion.a
                                            key={social.id}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.1, rotate: 5 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="w-10 h-10 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center text-muted hover:text-primary hover:border-primary/50 transition-all duration-300"
                                            style={{
                                                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
                                            }}
                                        >
                                            <Icon className="w-5 h-5" />
                                        </motion.a>
                                    );
                                })}
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* RIGHT SIDE - Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="rounded-[28px] p-8 lg:p-10"
                        style={{
                            background: 'rgba(255, 255, 255, 0.05)',
                            backdropFilter: 'blur(18px)',
                            border: '1px solid rgba(255, 0, 60, 0.18)',
                            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.45)',
                        }}
                    >
                        <ContactForm />

                        {/* Map Placeholder */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.8, duration: 0.6 }}
                            className="mt-8 rounded-[24px] overflow-hidden"
                            style={{
                                background: 'rgba(255, 255, 255, 0.03)',
                                border: '1px solid rgba(255, 0, 60, 0.15)',
                                boxShadow: '0 15px 40px rgba(0, 0, 0, 0.4)',
                            }}
                        >
                            <div className="aspect-video bg-gradient-to-br from-surface via-background to-surface flex items-center justify-center">
                                <div className="text-center space-y-3 p-8">
                                    <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                                        <svg
                                            className="w-8 h-8 text-primary"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                            />
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                            />
                                        </svg>
                                    </div>
                                    <p className="text-white/50 text-sm">Google Maps</p>
                                    <p className="text-white/30 text-xs">Map integration coming soon</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
