'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavigationButtonProps {
    label: string;
    href?: string;
    icon?: LucideIcon;
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    onClick?: () => void;
}

const variants = {
    primary: 'bg-primary hover:bg-primary-hover text-white shadow-glow',
    secondary: 'bg-primary-secondary hover:bg-primary-hover text-white',
    outline: 'border border-primary text-primary hover:bg-primary hover:text-white',
    ghost: 'text-white hover:bg-surface-elevated',
};

export default function NavigationButton({
    label,
    href,
    icon: Icon,
    variant = 'primary',
    onClick,
}: NavigationButtonProps) {
    const baseClasses = 'px-6 py-2.5 rounded-lg font-medium text-sm transition-all duration-300 flex items-center gap-2 whitespace-nowrap';

    const content = (
        <>
            {Icon && <Icon className="w-4 h-4" />}
            <span>{label}</span>
        </>
    );

    const motionProps = {
        whileHover: { scale: 1.05 },
        whileTap: { scale: 0.95 },
        transition: { type: 'spring', stiffness: 400, damping: 17 },
    };

    if (href) {
        return (
            <motion.div {...motionProps}>
                <Link
                    href={href}
                    className={cn(baseClasses, variants[variant])}
                >
                    {content}
                </Link>
            </motion.div>
        );
    }

    return (
        <motion.button
            {...motionProps}
            onClick={onClick}
            className={cn(baseClasses, variants[variant])}
        >
            {content}
        </motion.button>
    );
}
