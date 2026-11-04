import React, { useState } from 'react';
import { 
  GraduationCap, 
  FlaskConical, 
  Briefcase, 
  Award, 
  Languages, 
  CheckCircle2, 
  Calendar, 
  MapPin, 
  UserCheck, 
  ChevronRight, 
  Binary, 
  FileCheck2,
  FileText
} from 'lucide-react';
import { 
  personalData, 
  educationData, 
  experienceData, 
  internshipsData, 
  languagesData, 
  certificationsData 
} from '../data/portfolioData';

export default function About() {
  const [activeTab, setActiveTab] = useState('education');

  return (
    <section id="about" className="py-20 bg-white border-y border-nature-border/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-nature-accentLight/60 text-nature-primary text-xs font-bold uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background &amp; Profile</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-nature-primary tracking-tight">
            Bridging Theoretical Engineering with Rigorous Field Science
          </h2>
          <p className="mt-3 text-base text-nature-text/80 leading-relaxed">
            A dedicated Agricultural Engineer advancing the sustainable management of agricultural water systems through process-based crop-water modeling, hydrochemical characterization, and climate change scenario analysis.
          </p>
        </div>

        {/* Verbatim About Statement from CV */}
        <div className="bg-nature-surface rounded-3xl p-6 sm:p-8 border border-nature-border shadow-soft mb-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-2 h-full bg-nature-primary" />
          <div className="flex items-center space-x-2 text-xs font-mono font-bold uppercase tracking-wider text-nature-waterDark mb-4">
            <FileText className="w-4 h-4 text-nature-water" />
            <span>Curriculum Vitae — Professional Statement</span>
          </div>
          <div className="space-y-3.5">
            {personalData.aboutBio.map((item, idx) => (
              <div key={idx} className="flex items-start space-x-3">
                <span className="w-2 h-2 rounded-full bg-nature-water mt-2 flex-shrink-0" />
                <p className="text-sm sm:text-base text-nature-text leading-relaxed font-normal">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Top 3 Core Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          <div className="p-6 rounded-2xl bg-nature-surface border border-nature-border hover:border-nature-accent transition-all shadow-card">
            <div className="w-12 h-12 rounded-xl bg-nature-primary text-white flex items-center justify-center mb-4 shadow-sm">
              <GraduationCap className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-nature-primary mb-2">
              Academic Excellence
            </h3>
            <p className="text-sm text-nature-text/80 leading-relaxed">
              B.Sc. in Agricultural Engineering (<span className="font-semibold text-nature-primary">CGPA 3.302/4.00</span>) and ongoing M.Sc. in Irrigation &amp; Water Management (<span className="font-semibold text-nature-primary">CGPA 3.28/4.00</span>) from Bangladesh Agricultural University.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-nature-surface border border-nature-border hover:border-nature-accent transition-all shadow-card">
            <div className="w-12 h-12 rounded-xl bg-nature-water text-white flex items-center justify-center mb-4 shadow-sm">
              <FlaskConical className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-nature-primary mb-2">
              Active Research Leadership
            </h3>
            <p className="text-sm text-nature-text/80 leading-relaxed">
              Serving as Research Assistant since June 2022 under Dr. Md. Touhidul Islam and Dr. A.K.M. Adham, managing experimental layouts, instrument monitoring, and data synthesis.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-nature-surface border border-nature-border hover:border-nature-accent transition-all shadow-card">
            <div className="w-12 h-12 rounded-xl bg-nature-secondary text-white flex items-center justify-center mb-4 shadow-sm">
              <Briefcase className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-nature-primary mb-2">
              Field &amp; Lab Mastery
            </h3>
            <p className="text-sm text-nature-text/80 leading-relaxed">
              Comprehensive expertise spanning in-situ soil moisture sensor deployment, piezometric monitoring, water chemistry titrations, AquaCrop modeling, and CMIP6 climate projections.
            </p>
          </div>
        </div>

        {/* Detailed Tabs Header */}
        <div className="flex flex-wrap items-center gap-2 border-b border-nature-border pb-4 mb-8">
          <button
            onClick={() => setActiveTab('education')}
            className={`inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeTab === 'education'
                ? 'bg-nature-primary text-white shadow-sm'
                : 'text-nature-text hover:bg-nature-sand'
            }`}
          >
            <GraduationCap className="w-4 h-4" />
            <span>Academic Qualifications</span>
          </button>

          <button
            onClick={() => setActiveTab('internships')}
            className={`inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeTab === 'internships'
                ? 'bg-nature-primary text-white shadow-sm'
                : 'text-nature-text hover:bg-nature-sand'
            }`}
          >
            <Briefcase className="w-4 h-4" />
            <span>Industrial Internships</span>
          </button>

          <button
            onClick={() => setActiveTab('skills_bio')}
            className={`inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeTab === 'skills_bio'
                ? 'bg-nature-primary text-white shadow-sm'
                : 'text-nature-text hover:bg-nature-sand'
            }`}
          >
            <Languages className="w-4 h-4" />
            <span>Languages &amp; Certifications</span>
          </button>
        </div>

        {/* Tab Content 1: Education */}
        {activeTab === 'education' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fadeIn">
            {educationData.map((edu, idx) => (
              <div
                key={idx}
                className="relative bg-nature-surface rounded-2xl p-6 border border-nature-border hover:shadow-elevated transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-nature-muted mb-3">
                    <span className="flex items-center space-x-1">
                      <Calendar className="w-3.5 h-3.5 text-nature-water" />
                      <span>{edu.timeline}</span>
                    </span>
                    <span className="px-2 py-0.5 rounded bg-white font-bold text-nature-primary border border-nature-border">
                      {edu.grade}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-nature-primary leading-snug mb-1">
                    {edu.degree}
                  </h4>
                  
                  <p className="text-xs font-semibold text-nature-text/90 mb-0.5">
                    {edu.department}
                  </p>
                  
                  <p className="text-xs text-nature-muted flex items-center space-x-1 mb-3">
                    <MapPin className="w-3 h-3 text-nature-accentDark" />
                    <span>{edu.institution}</span>
                  </p>

                  <p className="text-xs text-nature-text/80 leading-relaxed">
                    {edu.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-nature-border/60 flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-nature-waterDark">
                    Status: {edu.status}
                  </span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab Content 2: Industrial Internships */}
        {activeTab === 'internships' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fadeIn">
            {internshipsData.map((item, idx) => (
              <div
                key={idx}
                className="bg-nature-surface rounded-2xl p-6 border border-nature-border hover:shadow-elevated transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded bg-nature-accentLight/60 text-nature-primary text-[11px] font-bold uppercase tracking-wider mb-3">
                    <Award className="w-3 h-3 text-nature-primary" />
                    <span>{item.certificate}</span>
                  </div>

                  <h4 className="text-base font-bold text-nature-primary mb-1">
                    {item.organization}
                  </h4>

                  <div className="text-xs font-bold text-nature-waterDark mb-3">
                    {item.title} — {item.focus}
                  </div>

                  <p className="text-xs text-nature-text/80 leading-relaxed">
                    {item.summary}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-nature-border/60 flex items-center text-xs font-semibold text-nature-primary">
                  <span>Practical field &amp; industrial validation</span>
                  <ChevronRight className="w-4 h-4 ml-auto text-nature-accentDark" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab Content 3: Languages & Certifications */}
        {activeTab === 'skills_bio' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 animate-fadeIn">
            
            {/* Language Proficiency */}
            <div className="lg:col-span-6 bg-nature-surface rounded-2xl p-6 border border-nature-border">
              <div className="flex items-center space-x-2 text-nature-primary mb-5">
                <Languages className="w-5 h-5 text-nature-water" />
                <h4 className="text-base font-bold">Language Proficiency</h4>
              </div>

              <div className="space-y-5">
                {languagesData.map((lang, idx) => (
                  <div key={idx} className="space-y-1.5">
                    <div className="flex justify-between items-center text-xs font-bold">
                      <span className="text-nature-primary">{lang.language}</span>
                      <span className="text-nature-muted font-normal">{lang.proficiency}</span>
                    </div>
                    <div className="w-full bg-nature-sand rounded-full h-2 overflow-hidden">
                      <div
                        className="bg-nature-primary h-2 rounded-full transition-all duration-700"
                        style={{ width: `${lang.percent}%` }}
                      />
                    </div>
                    <p className="text-[11px] text-nature-muted">
                      {lang.level}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-3 rounded-xl bg-white border border-nature-border text-xs text-nature-text/80">
                <span className="font-bold text-nature-primary">IELTS Official Score: </span>
                Overall 6.0 | Listening: 6.0, Reading: 6.5, Writing: 6.0, Speaking: 5.5 (CEFR B2 Level).
              </div>
            </div>

            {/* Certifications List */}
            <div className="lg:col-span-6 bg-nature-surface rounded-2xl p-6 border border-nature-border">
              <div className="flex items-center space-x-2 text-nature-primary mb-5">
                <Award className="w-5 h-5 text-nature-water" />
                <h4 className="text-base font-bold">Official Certifications &amp; Accreditations</h4>
              </div>

              <div className="space-y-3">
                {certificationsData.map((cert, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 bg-white rounded-xl border border-nature-border flex items-start space-x-3 hover:border-nature-accent transition-colors"
                  >
                    <div className="p-2 rounded-lg bg-nature-accentLight/60 text-nature-primary mt-0.5">
                      <FileCheck2 className="w-4 h-4" />
                    </div>
                    <div>
                      <h5 className="text-xs font-bold text-nature-primary">
                        {cert.title}
                      </h5>
                      <p className="text-[11px] text-nature-text font-medium">
                        {cert.issuer} {cert.institution ? `— ${cert.institution}` : ''}
                      </p>
                      <p className="text-[11px] text-nature-muted mt-0.5">
                        {cert.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}
