'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Loader2 } from 'lucide-react';
import { courseOptions } from '@/data/contact';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        course: '',
        message: '',
    });
    const [isLoading, setIsLoading] = useState(false);
    const [focusedField, setFocusedField] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulate form submission
        await new Promise((resolve) => setTimeout(resolve, 2000));

        console.log('Form submitted:', formData);
        setIsLoading(false);

        // Reset form
        setFormData({
            fullName: '',
            email: '',
            phone: '',
            course: '',
            message: '',
        });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="relative"
            >
                <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('fullName')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className="w-full px-6 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-[18px] text-white placeholder-transparent focus:outline-none focus:border-primary/50 transition-all duration-300"
                    placeholder="Full Name"
                    style={{
                        boxShadow:
                            focusedField === 'fullName'
                                ? '0 0 30px rgba(196, 0, 47, 0.3)'
                                : '0 10px 30px rgba(0, 0, 0, 0.3)',
                    }}
                />
                <label
                    className={`absolute left-6 transition-all duration-300 pointer-events-none ${formData.fullName || focusedField === 'fullName'
                            ? '-top-2.5 text-xs text-primary bg-background px-2'
                            : 'top-4 text-sm text-muted'
                        }`}
                >
                    Full Name
                </label>
            </motion.div>

            {/* Email */}
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="relative"
            >
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className="w-full px-6 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-[18px] text-white placeholder-transparent focus:outline-none focus:border-primary/50 transition-all duration-300"
                    placeholder="Email"
                    style={{
                        boxShadow:
                            focusedField === 'email'
                                ? '0 0 30px rgba(196, 0, 47, 0.3)'
                                : '0 10px 30px rgba(0, 0, 0, 0.3)',
                    }}
                />
                <label
                    className={`absolute left-6 transition-all duration-300 pointer-events-none ${formData.email || focusedField === 'email'
                            ? '-top-2.5 text-xs text-primary bg-background px-2'
                            : 'top-4 text-sm text-muted'
                        }`}
                >
                    Email Address
                </label>
            </motion.div>

            {/* Phone */}
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="relative"
            >
                <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('phone')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className="w-full px-6 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-[18px] text-white placeholder-transparent focus:outline-none focus:border-primary/50 transition-all duration-300"
                    placeholder="Phone Number"
                    style={{
                        boxShadow:
                            focusedField === 'phone'
                                ? '0 0 30px rgba(196, 0, 47, 0.3)'
                                : '0 10px 30px rgba(0, 0, 0, 0.3)',
                    }}
                />
                <label
                    className={`absolute left-6 transition-all duration-300 pointer-events-none ${formData.phone || focusedField === 'phone'
                            ? '-top-2.5 text-xs text-primary bg-background px-2'
                            : 'top-4 text-sm text-muted'
                        }`}
                >
                    Phone Number
                </label>
            </motion.div>

            {/* Course Interested */}
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="relative"
            >
                <select
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('course')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className="w-full px-6 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-[18px] text-white focus:outline-none focus:border-primary/50 transition-all duration-300 appearance-none cursor-pointer"
                    style={{
                        boxShadow:
                            focusedField === 'course'
                                ? '0 0 30px rgba(196, 0, 47, 0.3)'
                                : '0 10px 30px rgba(0, 0, 0, 0.3)',
                    }}
                >
                    <option value="" disabled>
                        Select a course
                    </option>
                    {courseOptions.map((course) => (
                        <option key={course} value={course} className="bg-surface text-white">
                            {course}
                        </option>
                    ))}
                </select>
                <label
                    className={`absolute left-6 transition-all duration-300 pointer-events-none ${formData.course || focusedField === 'course'
                            ? '-top-2.5 text-xs text-primary bg-background px-2'
                            : 'top-4 text-sm text-muted'
                        }`}
                >
                    Course Interested
                </label>
            </motion.div>

            {/* Message */}
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="relative"
            >
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    required
                    rows={5}
                    className="w-full px-6 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-[18px] text-white placeholder-transparent focus:outline-none focus:border-primary/50 transition-all duration-300 resize-none"
                    placeholder="Message"
                    style={{
                        boxShadow:
                            focusedField === 'message'
                                ? '0 0 30px rgba(196, 0, 47, 0.3)'
                                : '0 10px 30px rgba(0, 0, 0, 0.3)',
                    }}
                />
                <label
                    className={`absolute left-6 transition-all duration-300 pointer-events-none ${formData.message || focusedField === 'message'
                            ? '-top-2.5 text-xs text-primary bg-background px-2'
                            : 'top-4 text-sm text-muted'
                        }`}
                >
                    Message
                </label>
            </motion.div>

            {/* Submit Button */}
            <motion.button
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isLoading}
                className="group relative w-full px-8 py-4 bg-gradient-to-r from-primary via-primary-hover to-primary text-white font-semibold rounded-[18px] shadow-2xl overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {/* Ripple Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Button Content */}
                <span className="relative flex items-center justify-center gap-3">
                    {isLoading ? (
                        <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            <span>Sending...</span>
                        </>
                    ) : (
                        <>
                            <span>Send Message</span>
                            <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                        </>
                    )}
                </span>
            </motion.button>
        </form>
    );
}
