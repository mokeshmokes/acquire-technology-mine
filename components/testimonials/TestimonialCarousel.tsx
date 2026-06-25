'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
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
    const [isTransitioning, setIsTransitioning] = useState(false);

    // Duplicate testimonials for infinite loop
    const extendedTestimonials = [...testimonials, ...testimonials, ...testimonials];

    // Responsive cards per view
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setCardsPerView(3); // Desktop
            } else if (window.innerWidth >= 768) {
                setCardsPerView(2); // Tablet
            } else {
                setCardsPerView(1); // Mobile
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Start from the middle set of testimonials
    useEffect(() => {
        setCurrentIndex(testimonials.length);
    }, [testimonials.length]);

    // Auto-slide every 5 seconds
    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            handleNext();
        }, 5000);

        return () => clearInterval(interval);
    }, [isPaused, currentIndex]);

    // Reset position when reaching clones
    useEffect(() => {
        if (!isTransitioning) return;

        const timer = setTimeout(() => {
            setIsTransitioning(false);

            // If we've reached the end clone, reset to the real start
            if (currentIndex >= testimonials.length * 2) {
                setCurrentIndex(testimonials.length);
            }
            // If we've reached before the start clone, reset to the real end
            else if (currentIndex < testimonials.length) {
                setCurrentIndex(testimonials.length * 2 - cardsPerView);
            }
        }, 500); // Match transition duration

        return () => clearTimeout(timer);
    }, [isTransitioning, currentIndex, testimonials.length, cardsPerView]);

    const handlePrev = () => {
        setIsTransitioning(true);
        setCurrentIndex((prev) => prev - 1);
    };

    const handleNext = () => {
        setIsTransitioning(true);
        setCurrentIndex((prev) => prev + 1);
    };

    const handleDotClick = (index: number) => {
        setIsTransitioning(true);
        setCurrentIndex(testimonials.length + index);
    };

    const activeDotIndex = ((currentIndex - testimonials.length) % testimonials.length + testimonials.length) % testimonials.length;

    return (
        <div
            className="relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            {/* Carousel Container */}
            <div className="overflow-hidden">
                <motion.div
                    className="flex gap-8"
                    animate={{
                        x: `calc(-${currentIndex * (100 / cardsPerView)}% - ${currentIndex * (cardsPerView > 1 ? 2 : 0)}rem)`,
                    }}
                    transition={{
                        type: isTransitioning ? 'spring' : 'tween',
                        stiffness: 300,
                        damping: 30,
                        duration: isTransitioning ? undefined : 0,
                    }}
                >
                    {extendedTestimonials.map((testimonial, index) => (
                        <div
                            key={`${testimonial.id}-${index}`}
                            className="flex-shrink-0"
                            style={{
                                width: `calc(${100 / cardsPerView}% - ${((cardsPerView - 1) * 2) / cardsPerView}rem)`,
                            }}
                        >
                            <TestimonialCard testimonial={testimonial} />
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Navigation Arrows */}
            <div className="flex items-center justify-center gap-4 mt-12">
                {/* Left Arrow */}
                <motion.button
                    onClick={handlePrev}
                    whileHover={{ scale: 1.1, x: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300"
                    style={{
                        background: 'rgba(255, 255, 255, 0.05)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255, 0, 60, 0.2)',
                    }}
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
                                width: activeDotIndex === index ? '32px' : '8px',
                                height: '8px',
                                borderRadius: '999px',
                                background:
                                    activeDotIndex === index
                                        ? 'linear-gradient(90deg, #7A0019, #C21838)'
                                        : 'rgba(255, 255, 255, 0.2)',
                                boxShadow:
                                    activeDotIndex === index
                                        ? '0 0 20px rgba(122, 0, 25, 0.6)'
                                        : 'none',
                            }}
                        />
                    ))}
                </div>

                {/* Right Arrow */}
                <motion.button
                    onClick={handleNext}
                    whileHover={{ scale: 1.1, x: 2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300"
                    style={{
                        background: 'rgba(255, 255, 255, 0.05)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255, 0, 60, 0.2)',
                    }}
                >
                    <ChevronRight className="w-6 h-6 text-white" />
                </motion.button>
            </div>
        </div>
    );
}
