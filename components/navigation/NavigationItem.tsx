'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavigationItemProps {
    label: string;
    href: string;
    hasMegaMenu?: boolean;
    hasDropdown?: boolean;
    isActive?: boolean;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
}

export default function NavigationItem({
    label,
    href,
    hasMegaMenu,
    hasDropdown,
    isActive,
    onMouseEnter,
    onMouseLeave,
}: NavigationItemProps) {
    const hasMenu = hasMegaMenu || hasDropdown;

    return (
        <div
            className="relative"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <Link
                href={href}
                className={cn(
                    'relative flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-lg',
                    isActive
                        ? 'text-primary'
                        : 'text-white hover:text-primary hover:bg-primary/5'
                )}
            >
                <span className="relative z-10">{label}</span>
                {hasMenu && (
                    <motion.div
                        animate={{ rotate: isActive ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="relative z-10"
                    >
                        <ChevronDown className="w-4 h-4" />
                    </motion.div>
                )}

                {/* Active state background */}
                {isActive && (
                    <motion.div
                        className="absolute inset-0 rounded-lg bg-primary/10"
                        layoutId="activeNav"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                )}

                {/* Hover underline effect */}
                <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-primary-hover rounded-full"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: isActive ? 0 : 1 }}
                    transition={{ duration: 0.3 }}
                />
            </Link>
        </div>
    );
}
