import React from 'react';
import { 
  ArrowRight, 
  Download, 
  MapPin, 
  GraduationCap, 
  Droplet, 
  BookOpen, 
  CheckCircle2, 
  ExternalLink 
} from 'lucide-react';
import { personalData } from '../data/portfolioData';
import SocialLinks from './SocialLinks';
import profilePhoto from '../assets/my_image.jpeg';

export default function Hero() {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-topo-pattern">
      {/* Decorative Natural Ambient Gradients */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-tr from-nature-accentLight/40 via-nature-waterLight/30 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute -top-24 right-10 w-96 h-96 bg-nature-accent/15 rounded-full blur-2xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-nature-water/10 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Headline, Actions & Social Links */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Top Pill / Badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-nature-border shadow-soft backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
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
              
              <p className="text-xs sm:text-sm font-semibold tracking-wider text-nature-waterDark uppercase">
                {personalData.tagline}
              </p>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-nature-text/85 leading-relaxed font-normal max-w-2xl">
              {personalData.heroDescription}
            </p>

            {/* Meta Tag Badges */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-md bg-nature-sand/70 text-nature-text text-xs font-medium border border-nature-border/60">
                <MapPin className="w-3.5 h-3.5 text-nature-primary" />
                <span>{personalData.location}</span>
              </span>
              <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-md bg-nature-sand/70 text-nature-text text-xs font-medium border border-nature-border/60">
                <GraduationCap className="w-3.5 h-3.5 text-nature-primary" />
                <span>B.Sc. Agri. Eng. (BAU)</span>
              </span>
              <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-md bg-nature-waterLight text-nature-waterDark text-xs font-medium border border-nature-water/30">
                <Droplet className="w-3.5 h-3.5 text-nature-water" />
                <span>M.Sc. IWM (Thesis Ongoing)</span>
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#publications"
                className="inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl bg-nature-primary text-white text-sm font-bold shadow-elevated hover:bg-nature-secondary hover:shadow-lg transition-all transform hover:-translate-y-0.5 group"
              >
                <span>Explore My Research</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={personalData.cvFile}
                download="CurriculumVitae_Akash.pdf"
                className="inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl bg-white text-nature-primary border-2 border-nature-primary/30 text-sm font-bold shadow-soft hover:bg-nature-accentLight/50 hover:border-nature-primary transition-all group"
              >
                <Download className="w-4 h-4 text-nature-primary group-hover:-translate-y-0.5 transition-transform" />
                <span>Download My CV</span>
              </a>
            </div>

            {/* Social Media Links Row with Icons */}
            <div className="pt-2">
              <div className="text-[11px] font-mono uppercase tracking-wider text-nature-muted mb-2.5 font-semibold">
                Connect Directly via Channels
              </div>
              <SocialLinks variant="pills" />
            </div>

            {/* Quick Stat Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-nature-border/80">
              {personalData.stats.map((stat, idx) => (
                <div key={idx} className="space-y-0.5">
                  <div className="text-xl sm:text-2xl font-extrabold text-nature-primary tracking-tight font-mono">
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

          {/* Right Column: Profile Presentation Card with Actual Photo */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative Card Outer Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-nature-primary/15 via-nature-water/20 to-nature-accent/25 rounded-3xl transform rotate-1 scale-105 filter blur-lg -z-10" />

              {/* Main Visual Frame */}
              <div className="relative bg-white rounded-3xl p-6 sm:p-7 border border-nature-border shadow-elevated overflow-hidden">
                
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
                <div className="mt-5 relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#163D2B] via-[#102B21] to-[#0A1B14] p-6 text-white text-center shadow-inner">
                  {/* Subtle Agro-Grid background lines inside avatar */}
                  <div className="absolute inset-0 opacity-15 bg-water-grid pointer-events-none" />

                  {/* Profile Photo Display */}
                  <div className="relative mx-auto w-36 h-36 rounded-full p-1.5 bg-gradient-to-tr from-nature-accent via-nature-water to-white shadow-elevated flex items-center justify-center group">
                    <div className="w-full h-full rounded-full overflow-hidden border-2 border-white/40 shadow-inner relative bg-[#143525]">
                      <img
                        src={profilePhoto}
                        alt={personalData.name}
                        className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    {/* Floating verified badge */}
                    <div className="absolute bottom-1 right-2 bg-nature-water text-white rounded-full p-1.5 shadow-md border-2 border-[#102B21]">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  {/* Identification in Card */}
                  <div className="mt-4 space-y-1">
                    <h3 className="text-2xl font-extrabold tracking-wide text-white">
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
                  <div className="p-3 rounded-xl bg-nature-surface border border-nature-border flex items-center justify-between">
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

                  <div className="p-3 rounded-xl bg-nature-surface border border-nature-border flex items-center justify-between">
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
                      className="text-nature-waterDark hover:text-nature-primary p-1"
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
