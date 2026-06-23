'use client';

import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { liveCoursesData } from '@/data/liveCourses';
import LiveCourseCard from './LiveCourseCard';
import StudentCounter from './StudentCounter';
import FeatureBar from './FeatureBar';
import Announcement from './Announcement';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

export default function LiveCourses() {
    const { badge, heading, subtitle, stats, features, courses, bottomFeatures, announcement } =
        liveCoursesData;

    const sectionRef = useRef<HTMLElement>(null);
    const badgeRef = useRef<HTMLDivElement>(null);
    const heading1Ref = useRef<HTMLHeadingElement>(null);
    const heading2Ref = useRef<HTMLDivElement>(null);
    const subtitleRef = useRef<HTMLParagraphElement>(null);
    const featuresRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Section parallax effect
            if (sectionRef.current) {
                gsap.to(sectionRef.current, {
                    y: -50,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top bottom',
                        end: 'bottom top',
                        scrub: 1,
                    },
                });
            }

            // Badge animation
            if (badgeRef.current) {
                gsap.from(badgeRef.current, {
                    y: -30,
                    opacity: 0,
                    duration: 0.8,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: badgeRef.current,
                        start: 'top 85%',
                        toggleActions: 'play none none none',
                    },
                });
            }

            // Heading word-by-word reveal
            if (heading1Ref.current) {
                gsap.from(heading1Ref.current, {
                    y: 40,
                    opacity: 0,
                    duration: 0.8,
                    ease: 'power4.out',
                    scrollTrigger: {
                        trigger: heading1Ref.current,
                        start: 'top 85%',
                        toggleActions: 'play none none none',
                    },
                });
            }

            if (heading2Ref.current) {
                gsap.from(heading2Ref.current, {
                    y: 40,
                    opacity: 0,
                    duration: 0.8,
                    delay: 0.2,
                    ease: 'power4.out',
                    scrollTrigger: {
                        trigger: heading2Ref.current,
                        start: 'top 85%',
                        toggleActions: 'play none none none',
                    },
                });
            }

            // Subtitle fade up
            if (subtitleRef.current) {
                gsap.from(subtitleRef.current, {
                    y: 30,
                    opacity: 0,
                    duration: 0.8,
                    delay: 0.4,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: subtitleRef.current,
                        start: 'top 85%',
                        toggleActions: 'play none none none',
                    },
                });
            }

            // Feature icons stagger
            if (featuresRef.current) {
                const featureItems = featuresRef.current.querySelectorAll('.feature-item');
                gsap.from(featureItems, {
                    y: 30,
                    opacity: 0,
                    scale: 0.8,
                    duration: 0.6,
                    stagger: 0.1,
                    ease: 'back.out(1.7)',
                    scrollTrigger: {
                        trigger: featuresRef.current,
                        start: 'top 85%',
                        toggleActions: 'play none none none',
                    },
                });
            }
        });

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="relative py-32 px-6 overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(122,0,25,0.15)_0%,transparent_50%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(122,0,25,0.1)_0%,transparent_50%)]" />
            </div>

            {/* Floating Particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-primary/20 rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animation: `float ${10 + Math.random() * 20}s linear infinite`,
                            animationDelay: `${Math.random() * 10}s`,
                        }}
                    />
                ))}
            </div>

            <style jsx>{`
                @keyframes float {
                    0%, 100% {
                        transform: translate(0, 0);
                    }
                    25% {
                        transform: translate(20px, -20px);
                    }
                    50% {
                        transform: translate(-10px, 10px);
                    }
                    75% {
                        transform: translate(10px, 20px);
                    }
                }
            `}</style>

            {/* Container */}
            <div className="relative max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="grid lg:grid-cols-2 gap-12 mb-20">
                    {/* Left: Heading */}
                    <div className="space-y-6">
                        {/* Badge */}
                        <div ref={badgeRef}>
                            <div className="inline-block">
                                <div className="flex items-center gap-2 px-4 py-2 bg-surface/80 backdrop-blur-sm border border-primary/30 rounded-full">
                                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                                    <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                                        {badge}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Main Heading */}
                        <div>
                            <h2
                                ref={heading1Ref}
                                className="text-5xl md:text-6xl font-bold text-white mb-2"
                            >
                                {heading.main}
                            </h2>
                            <div ref={heading2Ref}>
                                <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary via-primary-hover to-primary bg-clip-text text-transparent">
                                    {heading.highlight}
                                </h2>
                            </div>
                        </div>

                        {/* Subtitle */}
                        <p
                            ref={subtitleRef}
                            className="text-lg text-muted leading-relaxed max-w-xl"
                        >
                            {subtitle}
                        </p>

                        {/* Feature Highlights */}
                        <div ref={featuresRef} className="flex flex-wrap gap-4 pt-4">
                            {features.map((feature) => {
                                const Icon = feature.icon;
                                return (
                                    <div
                                        key={feature.title}
                                        className="feature-item group flex items-center gap-3 px-4 py-3 bg-surface/50 border border-white/[0.05] rounded-xl hover:border-primary/30 transition-all cursor-pointer hover:-translate-y-1"
                                    >
                                        <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                            <Icon className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <div className="text-sm font-semibold text-white">
                                                {feature.title}
                                            </div>
                                            <div className="text-xs text-muted">{feature.description}</div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Right: Student Counter & CTA */}
                    <div className="flex flex-col justify-between space-y-8">
                        <div className="lg:ml-auto">
                            <StudentCounter count={stats.studentsLearning} label={stats.label} />
                        </div>

                        {/* CTA Button */}
                        <div className="lg:ml-auto">
                            <button className="group relative px-8 py-4 bg-primary hover:bg-primary-hover text-white font-semibold rounded-xl shadow-2xl transition-all duration-300 overflow-hidden hover:scale-105">
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="relative flex items-center gap-3">
                                    <span>Explore All Courses</span>
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Perfect Grid - 4 Columns × 2 Rows */}
                <div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
                    style={{
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    }}
                >
                    {courses.map((course, index) => (
                        <LiveCourseCard key={course.id} course={course} index={index} />
                    ))}
                </div>

                {/* Bottom Feature Bar */}
                <div className="mb-12">
                    <FeatureBar features={bottomFeatures} />
                </div>

                {/* Announcement */}
                <div className="flex justify-center">
                    <Announcement icon={announcement.icon} text={announcement.text} />
                </div>
            </div>
        </section>
    );
}
