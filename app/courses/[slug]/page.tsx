import { notFound } from 'next/navigation';
import { getCourseBySlug, coursesData } from '@/data/courseData';
import { courseIconsMap } from '@/data/floatingIcons';
import Header from '@/components/navigation/Header';
import CourseHero from '@/components/course/CourseHero';
import CourseOverview from '@/components/course/CourseOverview';
import SkillsSection from '@/components/course/SkillsSection';
import SyllabusSection from '@/components/course/SyllabusSection';
import ProjectsSection from '@/components/course/ProjectsSection';
import MentorSection from '@/components/course/MentorSection';
import LearningProcess from '@/components/course/LearningProcess';
import CareerOpportunities from '@/components/course/CareerOpportunities';
import CourseFAQ from '@/components/course/CourseFAQ';
import StickyCTA from '@/components/course/StickyCTA';
import SectionFloatingIcons from '@/components/course/SectionFloatingIcons';
import Newsletter from '@/components/footer/Newsletter';
import Footer from '@/components/footer/Footer';
import ScrollToTop from '@/components/footer/ScrollToTop';
import SmoothScroll from '@/components/animations/SmoothScroll';
import ScrollAnimationProvider from '@/components/animations/ScrollAnimationProvider';
import ErrorBoundary from '@/components/ErrorBoundary';

// Generate static params for all courses
export async function generateStaticParams() {
    return coursesData.map((course) => ({
        slug: course.slug,
    }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const course = getCourseBySlug(slug);

    if (!course) {
        return {
            title: 'Course Not Found - Acquiring Technology',
        };
    }

    return {
        title: `${course.title} - Acquiring Technology`,
        description: course.description,
        keywords: [course.title, ...course.skills],
    };
}

export default async function CoursePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const course = getCourseBySlug(slug);

    // If course not found, show 404
    if (!course) {
        notFound();
    }

    // Get course-specific icons
    const courseIcons = courseIconsMap[course.slug as keyof typeof courseIconsMap] || [];

    return (
        <ErrorBoundary>
            <SmoothScroll>
                <ScrollAnimationProvider>
                    <main className="min-h-screen bg-background relative">
                        <Header />

                        {/* All content needs relative positioning to stay above floating icons */}
                        <div className="relative z-10">
                            {/* 1. Hero Section with floating icons */}
                            <section className="relative">
                                <CourseHero
                                    title={course.title}
                                    subtitle={course.subtitle}
                                    iconName={course.iconName}
                                />
                                <SectionFloatingIcons icons={courseIcons.slice(0, 2)} />
                            </section>

                            {/* 2. Course Overview with floating icons */}
                            <section className="relative">
                                <CourseOverview
                                    description={course.description}
                                    duration={course.duration}
                                    level={course.level}
                                />
                                <SectionFloatingIcons icons={courseIcons.slice(2, 4)} />
                            </section>

                            {/* 3. Skills Section with floating icons */}
                            <section className="relative">
                                <SkillsSection skills={course.skills} />
                                <SectionFloatingIcons icons={courseIcons.slice(4, 6)} />
                            </section>

                            {/* 4. Complete Syllabus with floating icons */}
                            <section className="relative">
                                <SyllabusSection syllabus={course.syllabus} />
                                <SectionFloatingIcons icons={courseIcons.slice(6, 8)} />
                            </section>

                            {/* 5. Projects with floating icons */}
                            <section className="relative">
                                <ProjectsSection projects={course.projects} />
                                <SectionFloatingIcons icons={courseIcons.slice(8, 10)} />
                            </section>

                            {/* 6. Mentor Section with floating icons */}
                            <section className="relative">
                                <MentorSection mentor={course.mentor} />
                                <SectionFloatingIcons icons={courseIcons.slice(10, 12)} />
                            </section>

                            {/* 7. Learning Process with floating icons */}
                            <section className="relative">
                                <LearningProcess />
                                <SectionFloatingIcons icons={courseIcons.slice(12, 14)} />
                            </section>

                            {/* 8. Career Opportunities with floating icons */}
                            <section className="relative">
                                <CareerOpportunities careers={course.careers} />
                                <SectionFloatingIcons icons={courseIcons.slice(14, 16)} />
                            </section>

                            {/* 9. FAQ with floating icons */}
                            <section className="relative">
                                <CourseFAQ faqs={course.faqs} />
                                <SectionFloatingIcons icons={courseIcons.slice(16, 18)} />
                            </section>
                        </div>

                        {/* 10. Sticky CTA - NO FLOATING ICONS */}
                        <StickyCTA courseTitle={course.title} />

                        {/* Newsletter & Footer - NO FLOATING ICONS */}
                        <Newsletter />
                        <Footer />
                        <ScrollToTop />
                    </main>
                </ScrollAnimationProvider>
            </SmoothScroll>
        </ErrorBoundary>
    );
}
