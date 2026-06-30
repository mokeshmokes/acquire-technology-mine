'use client';

import { useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Loader2, CheckCircle2, User, Mail, Phone, BookOpen, MessageSquare, ChevronDown, Sparkles, Clock, Users, Zap } from 'lucide-react';
import { courseOptions } from '@/data/contact';

const FIELDS = ['fullName', 'email', 'phone', 'course', 'message'] as const;
type Field = (typeof FIELDS)[number];

// Social proof ticker
const SOCIAL_PROOF = [
    '🔥 Rahul from Bangalore enrolled 2 hours ago',
    '⚡ Priya just booked a free counselling call',
    '🎯 Amit secured placement after completing AI course',
    '🚀 23 students enrolled this week',
];

export default function ContactForm() {
    const [formData, setFormData] = useState<Record<Field, string>>({
        fullName: '', email: '', phone: '', course: '', message: '',
    });
    const [focusedField, setFocusedField] = useState<Field | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [proofIndex, setProofIndex] = useState(0);
    const proofTimer = useRef<ReturnType<typeof setInterval> | null>(null);

    // Compute how many fields are filled (0–100%)
    const filledCount = FIELDS.filter((f) => formData[f].trim() !== '').length;
    const progress = Math.round((filledCount / FIELDS.length) * 100);

    const startProofCycle = useCallback(() => {
        if (proofTimer.current) return;
        proofTimer.current = setInterval(() => {
            setProofIndex((i) => (i + 1) % SOCIAL_PROOF.length);
        }, 3000);
    }, []);

    const handleFocus = useCallback((field: Field) => {
        setFocusedField(field);
        startProofCycle();
    }, [startProofCycle]);

    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            const result = await response.json();
            if (result.success) {
                setIsSubmitted(true);
                if (proofTimer.current) clearInterval(proofTimer.current);
            } else {
                alert(result.error || 'Failed to submit. Please try again.');
            }
        } catch (error) {
            console.error('Submission error:', error);
            alert('Failed to submit. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    // ── Shared field wrapper
    const fieldVariants = {
        hidden: { opacity: 0, y: 24, scale: 0.97 },
        visible: (i: number) => ({
            opacity: 1, y: 0, scale: 1,
            transition: { duration: 0.5, delay: i * 0.07, ease: [0.22, 0.61, 0.36, 1] },
        }),
    };

    const isActive = (f: Field) => focusedField === f;
    const isFilled = (f: Field) => formData[f].trim() !== '';

    const inputClass = (f: Field) =>
        `w-full pl-12 pr-5 py-4 rounded-2xl text-white text-sm bg-transparent border transition-all duration-300 focus:outline-none resize-none
        ${isActive(f)
            ? 'border-primary/70 shadow-[0_0_28px_rgba(199,24,56,0.35)]'
            : isFilled(f)
                ? 'border-primary/30 shadow-[0_0_12px_rgba(199,24,56,0.15)]'
                : 'border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.25)]'}`;

    if (isSubmitted) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: [0.22, 0.61, 0.36, 1] }}
                className="flex flex-col items-center justify-center py-16 text-center space-y-6"
            >
                {/* Animated check */}
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.1 }}
                    className="w-24 h-24 rounded-full bg-primary/20 border-2 border-primary/50 flex items-center justify-center"
                    style={{ boxShadow: '0 0 60px rgba(199,24,56,0.5)' }}
                >
                    <CheckCircle2 className="w-12 h-12 text-primary" />
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} className="space-y-2">
                    <h3 className="text-2xl font-bold text-white">Message Sent! 🎉</h3>
                    <p className="text-white/60 text-sm max-w-xs">Our counsellor will reach out within <span className="text-primary font-semibold">24 hours</span>. Check your email.</p>
                </motion.div>

                {/* Confetti-like dots */}
                {[...Array(8)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 rounded-full bg-primary"
                        initial={{ opacity: 1, scale: 0, x: 0, y: 0 }}
                        animate={{ opacity: 0, scale: 1, x: (Math.cos((i * 45 * Math.PI) / 180)) * 80, y: (Math.sin((i * 45 * Math.PI) / 180)) * 80 }}
                        transition={{ duration: 0.8, delay: 0.2 + i * 0.05 }}
                    />
                ))}

                <motion.button
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
                    onClick={() => { setIsSubmitted(false); setFormData({ fullName: '', email: '', phone: '', course: '', message: '' }); }}
                    className="text-xs text-white/40 hover:text-primary transition-colors mt-4 underline"
                >
                    Send another message
                </motion.button>
            </motion.div>
        );
    }

    return (
        <div className="space-y-5">

            {/* ── Header with urgency + social proof ─────────────────── */}
            <div className="space-y-3">
                {/* Title row */}
                <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                        <h3 className="text-lg font-bold text-white flex items-center gap-2">
                            <Sparkles className="w-4 h-4 text-primary" />
                            Start Your Journey
                        </h3>
                        <p className="text-xs text-white/50">Free counselling • No commitment</p>
                    </div>
                    {/* Live enrolments badge */}
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-dot-pulse" />
                        <span className="text-[11px] font-semibold text-primary">23 enrolled today</span>
                    </div>
                </div>

                {/* Progress bar */}
                <div className="space-y-1">
                    <div className="flex justify-between items-center">
                        <span className="text-[11px] text-white/40">Form completion</span>
                        <span className={`text-[11px] font-bold transition-colors duration-300 ${progress === 100 ? 'text-green-400' : 'text-primary'}`}>
                            {progress}%
                        </span>
                    </div>
                    <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                        <motion.div
                            className="h-full rounded-full"
                            style={{ background: progress === 100 ? 'linear-gradient(90deg,#22c55e,#16a34a)' : 'linear-gradient(90deg,#7A0019,#C21838)' }}
                            animate={{ width: `${progress}%` }}
                            transition={{ duration: 0.4, ease: 'easeOut' }}
                        />
                    </div>
                </div>

                {/* Social proof ticker */}
                <div className="h-7 overflow-hidden rounded-xl bg-white/[0.03] border border-white/[0.06] px-3 flex items-center gap-2">
                    <AnimatePresence mode="wait">
                        <motion.p
                            key={proofIndex}
                            initial={{ y: 14, opacity: 0 }}
                            animate={{ y: 0,  opacity: 1 }}
                            exit={{   y: -14, opacity: 0 }}
                            transition={{ duration: 0.35 }}
                            className="text-[11px] text-white/50 truncate"
                        >
                            {SOCIAL_PROOF[proofIndex]}
                        </motion.p>
                    </AnimatePresence>
                </div>
            </div>

            {/* ── Quick stats row ──────────────────────────────────────── */}
            <div className="grid grid-cols-3 gap-2">
                {[
                    { icon: Users, label: '1200+', sub: 'Students' },
                    { icon: Clock, label: '24h',   sub: 'Response' },
                    { icon: Zap,   label: '100%',  sub: 'Placement' },
                ].map(({ icon: Icon, label, sub }) => (
                    <div key={sub} className="flex flex-col items-center py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06] gap-0.5">
                        <Icon className="w-3.5 h-3.5 text-primary mb-0.5" />
                        <span className="text-sm font-bold text-white">{label}</span>
                        <span className="text-[10px] text-white/40">{sub}</span>
                    </div>
                ))}
            </div>

            {/* ── Form fields ─────────────────────────────────────────── */}
            <form onSubmit={handleSubmit} className="space-y-3">

                {/* Full Name */}
                <motion.div custom={0} initial="hidden" animate="visible" variants={fieldVariants} className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10">
                        <User className={`w-4 h-4 transition-colors duration-200 ${isActive('fullName') || isFilled('fullName') ? 'text-primary' : 'text-white/30'}`} />
                    </div>
                    <input
                        type="text" name="fullName" value={formData.fullName} onChange={handleChange}
                        onFocus={() => handleFocus('fullName')} onBlur={() => setFocusedField(null)}
                        placeholder="Full Name" required
                        className={inputClass('fullName') + ' bg-[#110408]/80'}
                        style={{ background: 'rgba(17,4,8,0.8)' }}
                    />
                </motion.div>

                {/* Email + Phone side by side */}
                <div className="grid grid-cols-2 gap-3">
                    <motion.div custom={1} initial="hidden" animate="visible" variants={fieldVariants} className="relative">
                        <div className="absolute left-3.5 top-1/2 -translate-y-1/2 z-10">
                            <Mail className={`w-4 h-4 transition-colors duration-200 ${isActive('email') || isFilled('email') ? 'text-primary' : 'text-white/30'}`} />
                        </div>
                        <input
                            type="email" name="email" value={formData.email} onChange={handleChange}
                            onFocus={() => handleFocus('email')} onBlur={() => setFocusedField(null)}
                            placeholder="Email" required
                            className={inputClass('email') + ' pl-10'}
                            style={{ background: 'rgba(17,4,8,0.8)' }}
                        />
                    </motion.div>

                    <motion.div custom={2} initial="hidden" animate="visible" variants={fieldVariants} className="relative">
                        <div className="absolute left-3.5 top-1/2 -translate-y-1/2 z-10">
                            <Phone className={`w-4 h-4 transition-colors duration-200 ${isActive('phone') || isFilled('phone') ? 'text-primary' : 'text-white/30'}`} />
                        </div>
                        <input
                            type="tel" name="phone" value={formData.phone} onChange={handleChange}
                            onFocus={() => handleFocus('phone')} onBlur={() => setFocusedField(null)}
                            placeholder="Phone" required
                            className={inputClass('phone') + ' pl-10'}
                            style={{ background: 'rgba(17,4,8,0.8)' }}
                        />
                    </motion.div>
                </div>

                {/* Course Select */}
                <motion.div custom={3} initial="hidden" animate="visible" variants={fieldVariants} className="relative mt-1.5">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10 pointer-events-none">
                        <BookOpen className={`w-4 h-4 transition-colors duration-200 ${isActive('course') || isFilled('course') ? 'text-primary' : 'text-white/30'}`} />
                    </div>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 z-10 pointer-events-none">
                        <ChevronDown className={`w-4 h-4 transition-colors duration-200 ${isActive('course') || isFilled('course') ? 'text-primary' : 'text-white/30'}`} />
                    </div>
                    <select
                        name="course" value={formData.course} onChange={handleChange}
                        onFocus={() => handleFocus('course')} onBlur={() => setFocusedField(null)}
                        required
                        className={inputClass('course') + ' pr-10 appearance-none cursor-pointer'}
                        style={{ background: 'rgba(17,4,8,0.95)' }}
                    >
                        <option value="" disabled className="text-white/40">Select a Course</option>
                        {courseOptions.map((c) => (
                            <option key={c} value={c} className="bg-[#1a080e] text-white">{c}</option>
                        ))}
                    </select>
                </motion.div>

                {/* Message */}
                <motion.div custom={4} initial="hidden" animate="visible" variants={fieldVariants} className="relative mt-1.5">
                    <div className="absolute left-4 top-4 z-10">
                        <MessageSquare className={`w-4 h-4 transition-colors duration-200 ${isActive('message') || isFilled('message') ? 'text-primary' : 'text-white/30'}`} />
                    </div>
                    <textarea
                        name="message" value={formData.message} onChange={handleChange}
                        onFocus={() => handleFocus('message')} onBlur={() => setFocusedField(null)}
                        placeholder="Tell us your goal or question..." required rows={3}
                        className={inputClass('message') + ' pt-4'}
                        style={{ background: 'rgba(17,4,8,0.8)' }}
                    />
                </motion.div>

                {/* ── Submit button ──────────────────────────────────── */}
                <motion.div
                    custom={5} initial="hidden" animate="visible" variants={fieldVariants}
                    className="pt-2"
                >
                    <motion.button
                        type="submit"
                        disabled={isLoading}
                        whileHover={!isLoading ? { scale: 1.02 } : {}}
                        whileTap={!isLoading  ? { scale: 0.97 } : {}}
                        className="relative w-full py-4 rounded-2xl text-white font-bold text-base overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed"
                        style={{
                            background: 'linear-gradient(135deg, #7A0019 0%, #C21838 50%, #7A0019 100%)',
                            backgroundSize: '200% 100%',
                            boxShadow: '0 0 40px rgba(199,24,56,0.5), 0 8px 32px rgba(0,0,0,0.4)',
                            willChange: 'transform',
                        }}
                    >
                        {/* Shimmer sweep */}
                        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                        {/* Pulse ring when form is 100% */}
                        {progress === 100 && !isLoading && (
                            <motion.div
                                className="absolute inset-0 rounded-2xl border-2 border-white/30"
                                animate={{ scale: [1, 1.04, 1], opacity: [0.6, 0, 0.6] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            />
                        )}

                        <span className="relative z-10 flex items-center justify-center gap-3">
                            {isLoading ? (
                                <>
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                    Sending your details...
                                </>
                            ) : (
                                <>
                                    <Send className="w-5 h-5" />
                                    Get Free Counselling
                                    {progress === 100 && (
                                        <motion.span
                                            initial={{ scale: 0 }} animate={{ scale: 1 }}
                                            className="text-xs bg-white/20 px-2 py-0.5 rounded-full"
                                        >
                                            Ready!
                                        </motion.span>
                                    )}
                                </>
                            )}
                        </span>
                    </motion.button>

                    {/* Trust signals below button */}
                    <div className="flex items-center justify-center gap-4 mt-3">
                        {['🔒 100% Private', '✅ No Spam', '📞 Quick Response'].map((t) => (
                            <span key={t} className="text-[10px] text-white/30">{t}</span>
                        ))}
                    </div>
                </motion.div>
            </form>
        </div>
    );
}
