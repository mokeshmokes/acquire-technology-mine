'use client';

import { useEffect } from 'react';
import { handleHashNavigation } from '@/lib/navigation';

export default function HashNavigationHandler() {
    useEffect(() => {
        // Handle hash navigation when component mounts
        handleHashNavigation();
    }, []);

    return null;
}
