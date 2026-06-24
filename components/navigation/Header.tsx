'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useScrollHeader } from '@/hooks/useScrollHeader';
import Logo from './Logo';
import DesktopNavigation from './DesktopNavigation';
import MobileNavigation from './MobileNavigation';
import ActionButtons from './ActionButtons';

export default function Header() {
    const { isScrolled } = useScrollHeader();

    return (
        <motion.header
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className={cn(
                'fixed top-0 left-0 right-0 w-full transition-all duration-300',
                'z-[99999]',
                isScrolled
                    ? 'bg-[rgba(8,8,12,0.70)] backdrop-blur-[22px] border-b border-white/[0.08] shadow-[0_10px_35px_rgba(0,0,0,0.35)]'
                    : 'bg-transparent backdrop-blur-sm'
            )}
            style={{
                WebkitBackdropFilter: isScrolled ? 'blur(22px)' : 'blur(4px)',
            }}
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
