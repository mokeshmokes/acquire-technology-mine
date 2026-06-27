'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Testimonial } from '@/data/testimonials';
import TestimonialCard from './TestimonialCard';

interface TestimonialCarouselProps {
    testimonials: Testimonial[];
}

export default function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [cardsPerView, setCardsPerView] = useState(3);
    const [isMobile, setIsMobile] = useState(false);
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    // Responsive cards per view
    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width >= 1024) {
                setCardsPerView(3); // Desktop: 3 cards
                setIsMobile(false);
            } else if (width >= 768) {
                setCardsPerView(2); // Tablet: 2 cards
                setIsMobile(false);
            } else {
                setCardsPerView(1); // Mobile: 1 card
                setIsMobile(true);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Auto-slide every 4 seconds (mobile) or 5 seconds (desktop)
    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            handleNext();
        }, isMobile ? 4000 : 5000);

        return () => clearInterval(interval);
    }, [isPaused, currentIndex, isMobile]);

    const handlePrev = () => {
        setCurrentIndex((prev) => {
            const newIndex = prev - 1;
            return newIndex < 0 ? testimonials.length - 1 : newIndex;
        });
    };

    const handleNext = () => {
        setCurrentIndex((prev) => {
            const newIndex = prev + 1;
            return newIndex >= testimonials.length ? 0 : newIndex;
        });
    };

    const handleDotClick = (index: number) => {
        setCurrentIndex(index);
    };

    // Touch handlers for mobile swipe
    const handleTouchStart = (e: React.TouchEvent) => {
        setTouchStart(e.targetTouches[0].clientX);
        setIsPaused(true);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (!touchStart || !touchEnd) return;

        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > 50;
        const isRightSwipe = distance < -50;

        if (isLeftSwipe) {
            handleNext();
        }
        if (isRightSwipe) {
            handlePrev();
        }

        setTouchStart(0);
        setTouchEnd(0);
        setIsPaused(false);
    };

    // Calculate visible testimonials based on current index and cards per view
    const getVisibleTestimonials = () => {
        const visible = [];
        for (let i = 0; i < cardsPerView; i++) {
            const index = (currentIndex + i) % testimonials.length;
            visible.push(testimonials[index]);
        }
        return visible;
    };

    const visibleTestimonials = getVisibleTestimonials();

    return (
        <div
            ref={containerRef}
            className="relative px-4 md:px-0"
            onMouseEnter={() => !isMobile && setIsPaused(true)}
            onMouseLeave={() => !isMobile && setIsPaused(false)}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            {/* Carousel Container - Fixed height to prevent layout shift */}
            <div className="overflow-hidden" style={{ minHeight: isMobile ? '500px' : '450px' }}>
                <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{
                            duration: 0.5,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
                    >
                        {visibleTestimonials.map((testimonial, idx) => (
                            <div
                                key={`${testimonial.id}-${currentIndex}-${idx}`}
                                className={isMobile ? 'w-[90vw] mx-auto' : ''}
                            >
                                <TestimonialCard testimonial={testimonial} />
                            </div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-center gap-4 mt-8 md:mt-12">
                {/* Left Arrow - Hidden on mobile */}
                <motion.button
                    onClick={handlePrev}
                    whileHover={{ scale: 1.1, x: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="hidden md:flex w-12 h-12 rounded-full items-center justify-center transition-all duration-300"
                    style={{
                        background: 'rgba(255, 255, 255, 0.05)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255, 0, 60, 0.2)',
                    }}
                    aria-label="Previous testimonial"
                >
                    <ChevronLeft className="w-6 h-6 text-white" />
                </motion.button>

                {/* Navigation Dots */}
                <div className="flex items-center gap-2">
                    {testimonials.map((_, index) => (
                        <motion.button
                            key={index}
                            onClick={() => handleDotClick(index)}
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                            className="transition-all duration-300"
                            style={{
                                width: currentIndex === index ? '32px' : '8px',
                                height: '8px',
                                borderRadius: '999px',
                                background:
                                    currentIndex === index
                                        ? '#B3002D' // Active: Dark Red
                                        : 'rgba(156, 163, 175, 0.5)', // Inactive: Gray
                                boxShadow:
                                    currentIndex === index
                                        ? '0 0 20px rgba(179, 0, 45, 0.6)'
                                        : 'none',
                            }}
                            aria-label={`Go to testimonial ${index + 1}`}
                        />
                    ))}
                </div>

                {/* Right Arrow - Hidden on mobile */}
                <motion.button
                    onClick={handleNext}
                    whileHover={{ scale: 1.1, x: 2 }}
                    whileTap={{ scale: 0.95 }}
                    className="hidden md:flex w-12 h-12 rounded-full items-center justify-center transition-all duration-300"
                    style={{
                        background: 'rgba(255, 255, 255, 0.05)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255, 0, 60, 0.2)',
                    }}
                    aria-label="Next testimonial"
                >
                    <ChevronRight className="w-6 h-6 text-white" />
                </motion.button>
            </div>

            {/* Mobile Swipe Indicator */}
            {isMobile && (
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.6 }}
                    className="text-center text-xs text-muted mt-4"
                >
                    ← Swipe to navigate →
                </motion.p>
            )}
        </div>
    );
}
