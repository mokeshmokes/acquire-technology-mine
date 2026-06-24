import Header from '@/components/navigation/Header';
import HeroSection from '@/components/hero/HeroSection';
import LiveCourses from '@/components/live-courses/LiveCourses';
import SmoothScroll from '@/components/animations/SmoothScroll';
import ScrollAnimationProvider from '@/components/animations/ScrollAnimationProvider';

export default function Home() {
    return (
        <SmoothScroll>
            <ScrollAnimationProvider>
                <main className="min-h-screen bg-background">
                    <Header />
                    <HeroSection />
                    <LiveCourses />
                </main>
            </ScrollAnimationProvider>
        </SmoothScroll>
    );
}
