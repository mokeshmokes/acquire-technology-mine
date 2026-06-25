'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { footerData } from '@/data/footer';

export default function Footer() {
    const { company, quickLinks, programs, contact, legal, copyright } = footerData;

    return (
        <footer className="relative bg-[#050505] border-t border-primary/20 overflow-hidden">
            {/* Animated Top Border */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
            <motion.div
                className="absolute top-0 left-0 h-[2px] w-32 bg-gradient-to-r from-primary to-transparent"
                animate={{
                    x: ['-100%', '200%'],
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'linear',
                }}
            />

            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Column 1: Company */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        {/* Logo */}
                        <motion.div
                            animate={{
                                y: [0, -8, 0],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: 'easeInOut',
                            }}
                            className="inline-flex items-center gap-3"
                        >
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary-hover flex items-center justify-center font-bold text-white text-xl shadow-lg">
                                {company.logo}
                            </div>
                            <span className="text-xl font-bold text-white">{company.name}</span>
                        </motion.div>

                        {/* Description */}
                        <p className="text-sm text-muted leading-relaxed">{company.description}</p>

                        {/* Social Icons */}
                        <div className="flex items-center gap-3">
                            {company.social.map((social) => {
                                const Icon = social.icon;
                                return (
                                    <motion.a
                                        key={social.id}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.15, rotate: 5 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="w-10 h-10 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center text-muted hover:text-primary hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                                        aria-label={social.label}
                                    >
                                        <Icon className="w-5 h-5" />
                                    </motion.a>
                                );
                            })}
                        </div>
                    </motion.div>

                    {/* Column 2: Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1, duration: 0.6 }}
                        className="space-y-6"
                    >
                        <h3 className="text-lg font-bold text-white">Quick Links</h3>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => {
                                const Icon = link.icon;
                                return (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            className="group flex items-center gap-2 text-sm text-muted hover:text-primary transition-colors duration-300"
                                        >
                                            <Icon className="w-4 h-4" />
                                            <span className="relative">
                                                {link.label}
                                                <span className="absolute bottom-0 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300" />
                                            </span>
                                            <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </motion.div>

                    {/* Column 3: Programs */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="space-y-6"
                    >
                        <h3 className="text-lg font-bold text-white">Programs</h3>
                        <ul className="space-y-3">
                            {programs.map((program) => (
                                <li key={program.label}>
                                    <Link
                                        href={program.href}
                                        className="group flex items-center gap-2 text-sm text-muted hover:text-primary transition-colors duration-300"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary group-hover:scale-150 transition-all duration-300" />
                                        <span className="relative">
                                            {program.label}
                                            <span className="absolute bottom-0 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300" />
                                        </span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Column 4: Contact */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="space-y-6"
                    >
                        <h3 className="text-lg font-bold text-white">Contact</h3>
                        <ul className="space-y-4">
                            {contact.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <li key={item.label} className="flex items-start gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                                            <Icon className="w-4 h-4 text-primary" />
                                        </div>
                                        <div className="space-y-1">
                                            <p className="text-xs text-muted uppercase tracking-wider">
                                                {item.label}
                                            </p>
                                            <p className="text-sm text-white">{item.value}</p>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    </motion.div>
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

                {/* Bottom Footer */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm"
                >
                    {/* Copyright */}
                    <div className="text-center md:text-left">
                        <p className="text-muted">
                            © {copyright.year} {copyright.text}
                        </p>
                        <p className="text-muted/70 text-xs mt-1">{copyright.tagline}</p>
                    </div>

                    {/* Legal Links */}
                    <div className="flex items-center gap-6">
                        {legal.map((link, index) => (
                            <span key={link.label} className="flex items-center gap-6">
                                <Link
                                    href={link.href}
                                    className="text-muted hover:text-primary transition-colors duration-300"
                                >
                                    {link.label}
                                </Link>
                                {index < legal.length - 1 && (
                                    <span className="w-1 h-1 rounded-full bg-muted/30" />
                                )}
                            </span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </footer>
    );
}
