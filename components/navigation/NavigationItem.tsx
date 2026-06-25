'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';

interface NavigationItemProps {
    label: string;
    href: string;
    isActive?: boolean;
}

export default function NavigationItem({ label, href, isActive }: NavigationItemProps) {
    const [isHovered, setIsHovered] = useState(false);
    const isAnchorLink = href.startsWith('#');

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (isAnchorLink) {
            e.preventDefault();
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                // Get Lenis instance from window
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                const lenis = (window as any).lenis;

                if (lenis) {
                    // Use Lenis smooth scroll
                    lenis.scrollTo(targetElement, {
                        offset: -100,
                        duration: 1.5,
                        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                    });
                } else {
                    // Fallback to native smooth scroll
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                    });
                }
            }
        }
    };

    return (
        <motion.div
            className="relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            animate={{
                y: isHovered && !isActive ? -2 : 0,
            }}
            transition={{
                duration: 0.3,
                ease: [0.22, 1, 0.36, 1],
            }}
        >
            <Link
                href={href}
                onClick={handleClick}
                className="relative block px-5 py-2.5 text-sm font-medium transition-all duration-350"
                style={{
                    transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
                }}
            >
                {/* Active State - Glassmorphism Pill */}
                {isActive && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="absolute inset-0 rounded-full"
                        style={{
                            background: 'rgba(139, 0, 31, 0.35)',
                            backdropFilter: 'blur(12px)',
                            WebkitBackdropFilter: 'blur(12px)',
                            border: '1px solid rgba(255, 40, 70, 0.25)',
                            boxShadow: '0 0 25px rgba(255, 43, 85, 0.25), inset 0 1px 1px rgba(255, 255, 255, 0.1)',
                        }}
                        transition={{
                            duration: 0.35,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                    />
                )}

                {/* Optional: Dotted Border Pulse */}
                {isActive && (
                    <motion.div
                        className="absolute inset-0 rounded-[30px]"
                        style={{
                            border: '1px dashed rgba(255, 40, 70, 0.45)',
                        }}
                        animate={{
                            opacity: [0.4, 0.7, 0.4],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                    />
                )}

                {/* Hover State - Only when NOT active */}
                {!isActive && isHovered && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="absolute inset-0 rounded-full"
                        style={{
                            background: 'rgba(255, 255, 255, 0.05)',
                            boxShadow: '0 0 15px rgba(255, 43, 85, 0.15)',
                        }}
                        transition={{ duration: 0.2 }}
                    />
                )}

                {/* Text */}
                <motion.span
                    className="relative z-10 block"
                    style={{
                        color: isActive ? '#FFFFFF' : 'rgba(255, 255, 255, 0.7)',
                        fontWeight: isActive ? 600 : 500,
                    }}
                    animate={{
                        color: isActive ? '#FFFFFF' : isHovered ? '#FFFFFF' : 'rgba(255, 255, 255, 0.7)',
                    }}
                    transition={{
                        duration: 0.3,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                >
                    {label}
                </motion.span>

                {/* Glowing Dot Indicator Below Active Item */}
                {isActive && (
                    <motion.div
                        className="absolute left-1/2 -translate-x-1/2 rounded-full"
                        style={{
                            bottom: '-10px',
                            width: '8px',
                            height: '8px',
                            background: '#ff2b55',
                            boxShadow: '0 0 10px rgba(255, 40, 70, 0.9), 0 0 20px rgba(255, 40, 70, 0.5)',
                        }}
                        animate={{
                            scale: [0.8, 1, 0.8],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                    />
                )}
            </Link>
        </motion.div>
    );
}
