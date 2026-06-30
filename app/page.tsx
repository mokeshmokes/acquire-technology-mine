import Header from '@/components/navigation/Header';
import HeroSection from '@/components/hero/HeroSection';
import LiveCourses from '@/components/live-courses/LiveCourses';
import FreeCoursesBackground from '@/components/free-courses/FreeCoursesBackground';
import InternshipSection from '@/components/internship/InternshipSection';
import AboutUs from '@/components/about/AboutUs';
import ContactSection from '@/components/contact/ContactSection';
import Newsletter from '@/components/footer/Newsletter';
import Footer from '@/components/footer/Footer';
import ScrollToTop from '@/components/footer/ScrollToTop';
import SmoothScroll from '@/components/animations/SmoothScroll';
import ScrollAnimationProvider from '@/components/animations/ScrollAnimationProvider';
import ErrorBoundary from '@/components/ErrorBoundary';
import HashNavigationHandler from '@/components/HashNavigationHandler';

export default function Home() {
    return (
        <ErrorBoundary>
            <SmoothScroll>
                <ScrollAnimationProvider>
                    <HashNavigationHandler />
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
                        <section id="internship" className="min-h-screen">
                            <InternshipSection />
                        </section>
                        <section id="about-us" className="min-h-screen">
                            <AboutUs />
                        </section>
                        <section id="contact" className="min-h-screen">
                            <ContactSection />
                        </section>
                        <Newsletter />
                        <Footer />
                        <ScrollToTop />
                    </main>
                </ScrollAnimationProvider>
            </SmoothScroll>
        </ErrorBoundary>
    );
}
