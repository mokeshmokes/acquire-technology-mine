'use client';

import AboutHero from './AboutHero';
import AboutStatistics from './AboutStatistics';
import WhyChooseUs from './WhyChooseUs';
import LearningJourney from './LearningJourney';
import MentorShowcase from './MentorShowcase';
import VisionMission from './VisionMission';
import TestimonialsSection from '../testimonials/TestimonialsSection';

export default function AboutUs() {
    return (
        <div className="bg-background">
            {/* Hero Section */}
            <AboutHero />

            {/* Statistics Section */}
            <AboutStatistics />

            {/* Why Choose Us Section */}
            <WhyChooseUs />

            {/* Learning Journey Section */}
            <LearningJourney />

            {/* Mentor Showcase Section */}
            <MentorShowcase />

            {/* Vision & Mission Section */}
            <VisionMission />

            {/* Student Success Stories Section */}
            <TestimonialsSection />
        </div>
    );
}
