'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useScrollHeader } from '@/hooks/useScrollHeader';
import Logo from './Logo';
import DesktopNavigation from './DesktopNavigation';
import MobileNavigation from './MobileNavigation';
import ActionButtons from './ActionButtons';

export default function Header() {
    const { isScrolled, isVisible } = useScrollHeader();

    return (
        <motion.header
            initial={{ y: 0 }}
            animate={{ y: isVisible ? 0 : -100 }}
            transition={{ duration: 0.3 }}
            className={cn(
                'fixed top-0 left-0 right-0 z-[90] transition-all duration-300',
                isScrolled
                    ? 'glass-effect backdrop-blur-xl border-b border-glass shadow-premium'
                    : 'bg-transparent backdrop-blur-sm'
            )}
        >
            <div className="container mx-auto px-6">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Logo />

                    {/* Desktop Navigation */}
                    <DesktopNavigation />

                    {/* Action Buttons - Desktop */}
                    <div className="hidden lg:flex">
                        <ActionButtons />
                    </div>

                    {/* Mobile Navigation */}
                    <MobileNavigation />
                </div>
            </div>
        </motion.header>
    );
}
