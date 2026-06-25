import Header from '@/components/navigation/Header';
import HeroSection from '@/components/hero/HeroSection';
import LiveCourses from '@/components/live-courses/LiveCourses';
import FreeCoursesBackground from '@/components/free-courses/FreeCoursesBackground';
import AboutUs from '@/components/about/AboutUs';
import SmoothScroll from '@/components/animations/SmoothScroll';
import ScrollAnimationProvider from '@/components/animations/ScrollAnimationProvider';
import ErrorBoundary from '@/components/ErrorBoundary';

export default function Home() {
    return (
        <ErrorBoundary>
            <SmoothScroll>
                <ScrollAnimationProvider>
                    <main className="min-h-screen bg-background">
                        <Header />
                        <section id="home" className="min-h-screen">
                            <HeroSection />
                        </section>
                        <section id="live-courses" className="min-h-screen">
                            <LiveCourses />
                        </section>
                        <section id="courses" className="min-h-screen">
                            <FreeCoursesBackground />
                        </section>
                        <section id="about-us" className="min-h-screen">
                            <AboutUs />
                        </section>
                        <section id="contact" className="min-h-screen flex items-center justify-center">
                            <div className="text-center">
                                <h2 className="text-4xl font-bold text-white mb-4">Contact</h2>
                                <p className="text-white/70">Coming Soon</p>
                            </div>
                        </section>
                    </main>
                </ScrollAnimationProvider>
            </SmoothScroll>
        </ErrorBoundary>
    );
}
