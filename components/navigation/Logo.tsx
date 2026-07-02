'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function Logo() {
    const pathname = usePathname();
    const isHomePage = pathname === '/';

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (isHomePage) {
            e.preventDefault();
            // Scroll to top smoothly
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const lenis = (window as any).lenis;

            if (lenis) {
                lenis.scrollTo(0, {
                    duration: 1.5,
                    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                });
            } else {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth',
                });
            }
        }
        // If not on homepage, let Next.js Link handle the navigation to "/"
    };

    return (
        <Link href="/" onClick={handleClick} className="flex items-center gap-3 group cursor-pointer">
            <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                className="relative"
            >
                {/* Acquiring Technology Logo */}
                <div className="w-12 h-12 relative">
                    <Image
                        src="/images/logo.png"
                        alt="Acquiring Technology Logo"
                        fill
                        className="object-contain"
                        priority
                    />
                </div>
            </motion.div>

            <div className="flex flex-col">
                <motion.span
                    className="text-lg sm:text-xl font-bold tracking-tight transition-colors duration-300"
                    style={{
                        color: '#E8192C',
                        textShadow: '0 0 20px rgba(220,25,50,0.5), 0 0 40px rgba(220,25,50,0.25)',
                    }}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                >
                    Acquiring Technology
                </motion.span>
                <motion.span
                    className="text-xs text-muted tracking-wide"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                >

                </motion.span>
            </div>
        </Link>
    );
}
