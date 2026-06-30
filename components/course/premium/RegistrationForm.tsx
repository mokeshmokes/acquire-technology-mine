'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Send } from 'lucide-react';

interface RegistrationFormProps {
    courseTitle: string;
}

export default function RegistrationForm({ courseTitle }: RegistrationFormProps) {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        qualification: '',
        city: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        console.log('Form submitted:', formData);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div
            className="rounded-3xl p-8 relative overflow-hidden"
            style={{
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(30px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5), 0 0 40px rgba(199, 24, 56, 0.15)',
            }}
        >
            {/* Top Badge */}
            <div className="flex items-center justify-center mb-6">
                <div
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
                    style={{
                        background: 'rgba(199, 24, 56, 0.2)',
                        border: '1px solid rgba(199, 24, 56, 0.4)',
                    }}
                >
                    <Calendar className="w-4 h-4 text-primary" />
                    <span className="text-sm font-semibold text-white">Next Batch Starts Soon</span>
                </div>
            </div>

            {/* Form Header */}
            <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Register Now</h3>
                <p className="text-sm text-white/70">Get a free career counselling session</p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Full Name *"
                        required
                        className="w-full px-4 py-3 rounded-xl text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-primary transition-all"
                        style={{
                            background: 'rgba(255, 255, 255, 0.08)',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                        }}
                    />
                </div>

                {/* Phone */}
                <div>
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Phone Number *"
                        required
                        className="w-full px-4 py-3 rounded-xl text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-primary transition-all"
                        style={{
                            background: 'rgba(255, 255, 255, 0.08)',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                        }}
                    />
                </div>

                {/* Email */}
                <div>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email Address *"
                        required
                        className="w-full px-4 py-3 rounded-xl text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-primary transition-all"
                        style={{
                            background: 'rgba(255, 255, 255, 0.08)',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                        }}
                    />
                </div>

                {/* Qualification */}
                <div>
                    <select
                        name="qualification"
                        value={formData.qualification}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl text-white outline-none focus:ring-2 focus:ring-primary transition-all"
                        style={{
                            background: 'rgba(255, 255, 255, 0.08)',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                        }}
                    >
                        <option value="" disabled>
                            Select Qualification *
                        </option>
                        <option value="10th">10th Pass</option>
                        <option value="12th">12th Pass</option>
                        <option value="graduate">Graduate</option>
                        <option value="postgraduate">Post Graduate</option>
                        <option value="working">Working Professional</option>
                    </select>
                </div>

                {/* City */}
                <div>
                    <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        placeholder="City *"
                        required
                        className="w-full px-4 py-3 rounded-xl text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-primary transition-all"
                        style={{
                            background: 'rgba(255, 255, 255, 0.08)',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                        }}
                    />
                </div>

                {/* Submit Button */}
                <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full px-6 py-4 rounded-xl font-semibold text-white relative overflow-hidden group"
                    style={{
                        background: 'linear-gradient(135deg, rgba(199,24,56,0.9) 0%, rgba(161,14,38,1) 100%)',
                        boxShadow: '0 0 30px rgba(199,24,56,0.4)',
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                    <div className="relative flex items-center justify-center gap-2">
                        <span>Submit Registration</span>
                        <Send className="w-4 h-4" />
                    </div>
                </motion.button>
            </form>

            {/* Privacy Note */}
            <p className="text-xs text-white/50 text-center mt-4">
                By submitting, you agree to our Terms & Conditions
            </p>
        </div>
    );
}
