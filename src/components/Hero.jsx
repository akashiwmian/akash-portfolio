import React from 'react';
import { 
  ArrowRight, 
  Download, 
  MapPin, 
  GraduationCap, 
  Droplet, 
  BookOpen, 
  CheckCircle2, 
  ExternalLink,
  Sparkles
} from 'lucide-react';
import { personalData } from '../data/portfolioData';
import SocialLinks from './SocialLinks';
import profilePhoto from '../assets/my_image.jpeg';

export default function Hero() {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-topo-pattern">
      {/* Decorative Natural Ambient Gradients with Organic Blob Animation */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[480px] bg-gradient-to-tr from-nature-accentLight/50 via-nature-waterLight/40 to-transparent rounded-full blur-3xl pointer-events-none -z-10 animate-blob" />
      <div className="absolute -top-24 right-10 w-96 h-96 bg-nature-accent/20 rounded-full blur-3xl pointer-events-none -z-10 animate-float-slow" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-nature-water/15 rounded-full blur-3xl pointer-events-none -z-10 animate-float-reverse" />

      {/* Floating Water Elements */}
      <div className="absolute top-28 right-[15%] w-3 h-3 rounded-full bg-nature-water/40 blur-[1px] animate-float-slow pointer-events-none" />
      <div className="absolute bottom-32 left-[10%] w-4 h-4 rounded-full bg-nature-accent/50 blur-[1px] animate-float-reverse pointer-events-none" />
      <div className="absolute top-1/2 left-6 w-2.5 h-2.5 rounded-full bg-nature-waterDark/30 blur-[1px] animate-float-slow pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Headline, Actions & Social Links */}
          <div className="lg:col-span-7 space-y-6 animate-fade-in-up">
            
            {/* Top Pill / Badge with subtle shimmer */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-nature-border shadow-soft backdrop-blur-sm transform hover:scale-105 transition-transform">
              <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 animate-ping relative">
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="text-xs font-semibold text-nature-primary tracking-wide">
                NATURE × SCIENCE × AGRICULTURAL TECHNOLOGY
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-nature-primary tracking-tight leading-[1.15]">
                Engineering Sustainable Agriculture{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-nature-primary via-[#2E6F52] to-nature-water">
                  Through Water Science.
                </span>
              </h1>
              
              <p className="text-xs sm:text-sm font-semibold tracking-wider text-nature-waterDark uppercase flex items-center space-x-2">
                <span>{personalData.tagline}</span>
              </p>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-nature-text/85 leading-relaxed font-normal max-w-2xl">
              {personalData.heroDescription}
            </p>

            {/* Meta Tag Badges with Hover Glow */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-md bg-nature-sand/80 text-nature-text text-xs font-medium border border-nature-border/60 hover:border-nature-accent hover:bg-white transition-all transform hover:-translate-y-0.5 shadow-xs">
                <MapPin className="w-3.5 h-3.5 text-nature-primary" />
                <span>{personalData.location}</span>
              </span>
              <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-md bg-nature-sand/80 text-nature-text text-xs font-medium border border-nature-border/60 hover:border-nature-accent hover:bg-white transition-all transform hover:-translate-y-0.5 shadow-xs">
                <GraduationCap className="w-3.5 h-3.5 text-nature-primary" />
                <span>B.Sc. Agri. Eng. (BAU)</span>
              </span>
              <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-md bg-nature-waterLight text-nature-waterDark text-xs font-medium border border-nature-water/30 hover:bg-white transition-all transform hover:-translate-y-0.5 shadow-xs">
                <Droplet className="w-3.5 h-3.5 text-nature-water animate-pulse-subtle" />
                <span>M.Sc. IWM (Thesis Ongoing)</span>
              </span>
            </div>

            {/* Action Buttons with Micro-interactions */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#publications"
                className="inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl bg-nature-primary text-white text-sm font-bold shadow-elevated hover:bg-nature-secondary hover:shadow-lg transition-all transform hover:-translate-y-1 active:scale-95 group"
              >
                <span>Explore My Research</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </a>

              <a
                href={personalData.cvFile}
                download="CurriculumVitae_Akash.pdf"
                className="inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl bg-white text-nature-primary border-2 border-nature-primary/30 text-sm font-bold shadow-soft hover:bg-nature-accentLight/50 hover:border-nature-primary transition-all transform hover:-translate-y-1 active:scale-95 group"
              >
                <Download className="w-4 h-4 text-nature-primary group-hover:-translate-y-1 transition-transform" />
                <span>Download My CV</span>
              </a>
            </div>

            {/* Social Media Links Row with Icons */}
            <div className="pt-2">
              <div className="text-[11px] font-mono uppercase tracking-wider text-nature-muted mb-2.5 font-semibold flex items-center space-x-1.5">
                <Sparkles className="w-3 h-3 text-nature-water" />
                <span>Connect Directly via Channels</span>
              </div>
              <SocialLinks variant="pills" />
            </div>

            {/* Quick Stat Highlights with Hover Effects */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-nature-border/80">
              {personalData.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="space-y-0.5 p-2 rounded-xl hover:bg-white/60 transition-all transform hover:-translate-y-0.5 group"
                >
                  <div className="text-xl sm:text-2xl font-extrabold text-nature-primary tracking-tight font-mono group-hover:text-nature-waterDark transition-colors">
                    {stat.value}
                  </div>
                  <div className="text-xs font-semibold text-nature-text leading-snug">
                    {stat.label}
                  </div>
                  <div className="text-[11px] text-nature-muted">
                    {stat.detail}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Profile Presentation Card with Actual Photo & Ambient Glow */}
          <div className="lg:col-span-5 relative animate-fade-in-up delay-200">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative Card Outer Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-nature-primary/20 via-nature-water/25 to-nature-accent/30 rounded-3xl transform rotate-1 scale-105 filter blur-xl -z-10 animate-pulse-subtle" />

              {/* Main Visual Frame */}
              <div className="relative bg-white rounded-3xl p-6 sm:p-7 border border-nature-border shadow-elevated overflow-hidden hover:shadow-2xl transition-all duration-500">
                
                {/* Header bar of the card */}
                <div className="flex items-center justify-between pb-4 border-b border-nature-border">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-rose-400" />
                    <div className="w-3 h-3 rounded-full bg-amber-400" />
                    <div className="w-3 h-3 rounded-full bg-emerald-400" />
                    <span className="text-[11px] font-mono text-nature-muted ml-2">RESEARCH_DOSSIER // 2026</span>
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-nature-accentLight text-nature-primary">
                    Verified CV Data
                  </span>
                </div>

                {/* Profile Portrait Card with actual photo my_image.jpeg */}
                <div className="mt-5 relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#163D2B] via-[#102B21] to-[#0A1B14] p-6 text-white text-center shadow-inner group">
                  {/* Subtle Agro-Grid background lines inside avatar */}
                  <div className="absolute inset-0 opacity-15 bg-water-grid pointer-events-none" />

                  {/* Profile Photo Display with gentle pulse ring */}
                  <div className="relative mx-auto w-36 h-36 rounded-full p-1.5 bg-gradient-to-tr from-nature-accent via-nature-water to-white shadow-elevated flex items-center justify-center transform group-hover:scale-105 transition-transform duration-500">
                    <div className="w-full h-full rounded-full overflow-hidden border-2 border-white/50 shadow-inner relative bg-[#143525]">
                      <img
                        src={profilePhoto}
                        alt={personalData.name}
                        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    {/* Floating verified badge with bounce */}
                    <div className="absolute bottom-1 right-2 bg-nature-water text-white rounded-full p-1.5 shadow-md border-2 border-[#102B21] animate-bounce-gentle">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  {/* Identification in Card */}
                  <div className="mt-4 space-y-1">
                    <h3 className="text-2xl font-extrabold tracking-wide text-white group-hover:text-nature-accentLight transition-colors">
                      {personalData.name}
                    </h3>
                    <p className="text-xs text-nature-accent font-medium tracking-wide">
                      {personalData.title}
                    </p>
                    <p className="text-[11px] text-gray-300 font-mono pt-1">
                      Bangladesh Agricultural University
                    </p>
                  </div>

                  {/* Live Status Tag */}
                  <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-center space-x-2 text-xs text-nature-accentLight">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    <span>Research Assistant (2022 – Present)</span>
                  </div>
                </div>

                {/* Micro Research Highlights below the portrait */}
                <div className="mt-5 space-y-3">
                  <div className="p-3 rounded-xl bg-nature-surface border border-nature-border flex items-center justify-between hover:bg-white hover:border-nature-accent transition-all transform hover:-translate-y-0.5 shadow-xs">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 rounded-lg bg-nature-water/15 text-nature-waterDark">
                        <Droplet className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-nature-primary">Primary Domain</div>
                        <div className="text-[11px] text-nature-muted">Agricultural Water &amp; Irrigation Modeling</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono font-bold px-2 py-1 rounded bg-white text-nature-primary border border-nature-border">
                      AquaCrop • CMIP6
                    </span>
                  </div>

                  <div className="p-3 rounded-xl bg-nature-surface border border-nature-border flex items-center justify-between hover:bg-white hover:border-nature-accent transition-all transform hover:-translate-y-0.5 shadow-xs">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 rounded-lg bg-nature-accent/25 text-nature-primary">
                        <BookOpen className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-nature-primary">Latest Publication</div>
                        <div className="text-[11px] text-nature-muted">Agricultural Water Management (2026)</div>
                      </div>
                    </div>
                    <a
                      href="https://doi.org/10.1016/j.agwat.2026.110740"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-nature-waterDark hover:text-nature-primary p-1 hover:scale-110 transition-transform"
                      aria-label="View publication DOI"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Bottom Verification Note */}
                <div className="mt-4 pt-3 text-center border-t border-nature-border/60">
                  <span className="text-[11px] text-nature-muted flex items-center justify-center space-x-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Curriculum Vitae verified from academic record</span>
                  </span>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
