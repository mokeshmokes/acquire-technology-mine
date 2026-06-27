/**
 * Navigation utility functions for handling navigation across different pages
 */

export const navigateToSection = (sectionId: string) => {
    const currentPath = window.location.pathname;
    const isHomePage = currentPath === '/';

    if (isHomePage) {
        // Already on homepage, just scroll
        scrollToSection(sectionId);
    } else {
        // Navigate to homepage with hash, then scroll
        window.location.href = `/#${sectionId}`;
    }
};

export const scrollToSection = (sectionId: string) => {
    const targetElement = document.getElementById(sectionId);

    if (targetElement) {
        // Get Lenis instance from window if available
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
};

export const handleHashNavigation = () => {
    // Check if there's a hash in the URL after page load
    if (window.location.hash) {
        const sectionId = window.location.hash.substring(1);
        // Wait for page to fully load before scrolling
        setTimeout(() => {
            scrollToSection(sectionId);
        }, 500);
    }
};
