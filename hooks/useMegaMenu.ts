'use client';

import { useState, useEffect, useRef, useCallback } from 'react';

export function useMegaMenu() {
    const [activeMenu, setActiveMenu] = useState<string | null>(null);
    const [isOpen, setIsOpen] = useState(false);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const menuRef = useRef<HTMLDivElement | null>(null);

    const openMenu = useCallback((menuId: string) => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        setActiveMenu(menuId);
        setIsOpen(true);
    }, []);

    const closeMenu = useCallback(() => {
        timeoutRef.current = setTimeout(() => {
            setActiveMenu(null);
            setIsOpen(false);
        }, 150);
    }, []);

    const closeMenuImmediately = useCallback(() => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        setActiveMenu(null);
        setIsOpen(false);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                closeMenuImmediately();
            }
        };

        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                closeMenuImmediately();
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
            document.addEventListener('keydown', handleEscape);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleEscape);
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, [isOpen, closeMenuImmediately]);

    return {
        activeMenu,
        isOpen,
        menuRef,
        openMenu,
        closeMenu,
        closeMenuImmediately,
    };
}
