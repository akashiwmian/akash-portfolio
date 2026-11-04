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
        <About />

        {/* 3. Research Interests (10 Cards) */}
        <ResearchInterests />

        {/* 4. Research Experience (Timeline & Workflow) */}
        <ResearchExperience />

        {/* 5. Featured Project & Interactive Simulator (Boro Rice AWD & CMIP6) */}
        <FeaturedProject />

        {/* 6. Featured Journal Publications */}
        <Publications />

        {/* 7. Technical & Modeling Skills */}
        <SkillsSection />

        {/* 8. Academic References */}
        <ReferencesSection />

        {/* 9. Contact & Scientific Inquiry */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

