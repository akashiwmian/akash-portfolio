import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ResearchInterests from './components/ResearchInterests';
import ResearchExperience from './components/ResearchExperience';
import FeaturedProject from './components/FeaturedProject';
import Publications from './components/Publications';
import SkillsSection from './components/SkillsSection';
import ReferencesSection from './components/ReferencesSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import AnimatedSection from './components/AnimatedSection';
import ScrollProgressButton from './components/ScrollProgressButton';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-nature-surface text-nature-text font-sans selection:bg-nature-water selection:text-white">
      {/* Top Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. About Me & Academic Profile */}
        <AnimatedSection animation="fade-up" threshold={0.06}>
          <About />
        </AnimatedSection>

        {/* 3. Research Interests (10 Cards) */}
        <AnimatedSection animation="fade-up" threshold={0.06}>
          <ResearchInterests />
        </AnimatedSection>

        {/* 4. Research Experience (Timeline & Workflow) */}
        <AnimatedSection animation="fade-up" threshold={0.06}>
          <ResearchExperience />
        </AnimatedSection>

        {/* 5. Featured Project & Interactive Simulator (Boro Rice AWD & CMIP6) */}
        <AnimatedSection animation="fade-up" threshold={0.06}>
          <FeaturedProject />
        </AnimatedSection>

        {/* 6. Featured Journal Publications */}
        <AnimatedSection animation="fade-up" threshold={0.06}>
          <Publications />
        </AnimatedSection>

        {/* 7. Technical & Modeling Skills */}
        <AnimatedSection animation="fade-up" threshold={0.06}>
          <SkillsSection />
        </AnimatedSection>

        {/* 8. Academic References */}
        <AnimatedSection animation="fade-up" threshold={0.06}>
          <ReferencesSection />
        </AnimatedSection>

        {/* 9. Contact & Scientific Inquiry */}
        <AnimatedSection animation="fade-up" threshold={0.06}>
          <ContactSection />
        </AnimatedSection>
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Scroll-to-Top Button with Live Percentage & Progress Ring */}
      <ScrollProgressButton />
    </div>
  );
}
