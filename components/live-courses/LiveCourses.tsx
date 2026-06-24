'use client';

import { useEffect, useRef, useState } from 'react';
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
    const featuresContainerRef = useRef<HTMLDivElement>(null);
    const row1Ref = useRef<HTMLDivElement>(null);
    const row2Ref = useRef<HTMLDivElement>(null);
    const [mounted, setMounted] = useState(false);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (typeof window === 'undefined' || !mounted) return;
        if (hasAnimated) return;

        const ctx = gsap.context(() => {
            // ONE-TIME Section Animation
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 75%',
                    once: true, // Animation happens only once
                    onEnter: () => {
                        setHasAnimated(true);
                    },
                },
            });

            // Badge animation
            if (badgeRef.current) {
                tl.from(
                    badgeRef.current,
                    {
                        y: -30,
                        opacity: 0,
                        scale: 0.8,
                        duration: 0.8,
                        ease: 'back.out(1.7)',
                    },
                    0
                );
            }

            // Heading animations
            if (heading1Ref.current) {
                tl.from(
                    heading1Ref.current,
                    {
                        y: 40,
                        opacity: 0,
                        filter: 'blur(8px)',
                        duration: 0.9,
                        ease: 'power3.out',
                    },
                    0.2
                );
            }

            if (heading2Ref.current) {
                tl.from(
                    heading2Ref.current,
                    {
                        y: 40,
                        opacity: 0,
                        filter: 'blur(8px)',
                        duration: 0.9,
                        ease: 'power3.out',
                    },
                    0.3
                );
            }

            // Subtitle
            if (subtitleRef.current) {
                tl.from(
                    subtitleRef.current,
                    {
                        y: 30,
                        opacity: 0,
                        filter: 'blur(6px)',
                        duration: 0.8,
                        ease: 'power3.out',
                    },
                    0.4
                );
            }

            // Features
            if (featuresContainerRef.current) {
                const featureItems = featuresContainerRef.current.querySelectorAll('.feature-item');
                tl.from(
                    featureItems,
                    {
                        y: 20,
                        opacity: 0,
                        scale: 0.9,
                        duration: 0.6,
                        stagger: 0.08,
                        ease: 'power2.out',
                    },
                    0.5
                );
            }

            // ROW EXPANSION ANIMATION - Both rows animate together
            if (row1Ref.current && row2Ref.current) {
                const cards1 = row1Ref.current.querySelectorAll('.course-card');
                const cards2 = row2Ref.current.querySelectorAll('.course-card');

                // Initial state: rows overlap with small gap
                gsap.set(row1Ref.current, { y: 40, willChange: 'transform' });
                gsap.set(row2Ref.current, { y: -40, willChange: 'transform' });
                gsap.set([cards1, cards2], { opacity: 0, y: 30, scale: 0.95, willChange: 'transform, opacity' });

                // Animate rows expanding apart simultaneously
                tl.to(
                    row1Ref.current,
                    {
                        y: 0,
                        duration: 1.1,
                        ease: 'expo.out',
                    },
                    0.7
                );

                tl.to(
                    row2Ref.current,
                    {
                        y: 0,
                        duration: 1.1,
                        ease: 'expo.out',
                    },
                    0.7 // Same time as row1
                );

                // Cards in Row 1 - subtle stagger
                tl.to(
                    cards1,
                    {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        duration: 0.9,
                        stagger: 0.04,
                        ease: 'power3.out',
                        clearProps: 'willChange',
                    },
                    0.8
                );

                // Cards in Row 2 - subtle stagger
                tl.to(
                    cards2,
                    {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        duration: 0.9,
                        stagger: 0.04,
                        ease: 'power3.out',
                        clearProps: 'willChange',
                    },
                    0.82 // Slight delay after row1 cards
                );

                // Clean up willChange on rows
                tl.set([row1Ref.current, row2Ref.current], { clearProps: 'willChange' });
            }
        });

        return () => ctx.revert();
    }, [mounted, hasAnimated]);

    return (
        <section
            id="live-courses"
            ref={sectionRef}
            className="relative py-32 px-6 overflow-hidden"
            style={{ willChange: hasAnimated ? 'auto' : 'transform' }}
        >
            {/* Animated Background */}
            <div className="absolute inset-0 opacity-30 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(122,0,25,0.15)_0%,transparent_50%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(122,0,25,0.1)_0%,transparent_50%)]" />
            </div>

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
                        <div ref={featuresContainerRef} className="flex flex-wrap gap-4 pt-4">
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

                {/* ROW 1 - First 4 courses */}
                <div ref={row1Ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    {courses.slice(0, 4).map((course, index) => (
                        <div key={course.id} className="course-card">
                            <LiveCourseCard course={course} index={index} />
                        </div>
                    ))}
                </div>

                {/* ROW 2 - Last 4 courses */}
                <div ref={row2Ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                    {courses.slice(4, 8).map((course, index) => (
                        <div key={course.id} className="course-card">
                            <LiveCourseCard course={course} index={index + 4} />
                        </div>
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
