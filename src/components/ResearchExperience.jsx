import React from 'react';
import { 
  FlaskConical, 
  Calendar, 
  MapPin, 
  UserCheck, 
  CheckCircle2, 
  FileSpreadsheet, 
  FileText, 
  Microscope, 
  Layers, 
  Cpu, 
  ArrowRight 
} from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export default function ResearchExperience() {
  const ra = experienceData[0];

  const workflowSteps = [
    {
      step: '01',
      title: 'Experimental Design & Layout',
      desc: 'Formulating hydraulic control plots, randomization schemes, and installing boundary structures in experimental research fields.',
      icon: Microscope
    },
    {
      step: '02',
      title: 'In-Situ Monitoring & Lab Work',
      desc: 'Deploying soil moisture sensors, tracking piezometers, sampling irrigation water, and conducting hydrochemical laboratory titrations.',
      icon: FlaskConical
    },
    {
      step: '03',
      title: 'Process Modeling & Computation',
      desc: 'Calibrating FAO AquaCrop, CROPWAT, and SWAT models against empirical datasets; downscaling CMIP6 climate scenarios.',
      icon: Cpu
    },
    {
      step: '04',
      title: 'Dissemination & Publication',
      desc: 'Synthesizing publication-grade figures in OriginPro, statistical analysis in SPSS, and drafting manuscripts for Q1 journals.',
      icon: FileText
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white border-b border-nature-border/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-nature-accentLight/60 text-nature-primary text-xs font-bold uppercase tracking-wider mb-3">
            <FlaskConical className="w-3.5 h-3.5" />
            <span>Academic &amp; Field Appointments</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-nature-primary tracking-tight">
            Research Experience &amp; Responsibilities
          </h2>
          <p className="mt-3 text-base text-nature-text/80 leading-relaxed">
            Continuous research assistantship at Bangladesh Agricultural University spanning field plot engineering, laboratory diagnostics, computational modeling, and international scientific publishing.
          </p>
        </div>

        {/* Primary Timeline Card */}
        <div className="bg-nature-surface rounded-3xl p-6 sm:p-10 border border-nature-border shadow-soft relative overflow-hidden mb-16">
          {/* Subtle Accent Stripe */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-nature-primary via-nature-water to-nature-accent" />

          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-8 border-b border-nature-border">
            <div className="space-y-2">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white text-nature-primary border border-nature-border text-xs font-bold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Active Research Appointment</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-nature-primary">
                {ra.role}
              </h3>
              <p className="text-sm font-semibold text-nature-text">
                {ra.department}
              </p>
              <p className="text-xs text-nature-muted flex items-center space-x-1.5">
                <MapPin className="w-3.5 h-3.5 text-nature-accentDark" />
                <span>{ra.institution}, Mymensingh-2202, Bangladesh</span>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 lg:items-end">
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-white border border-nature-border text-xs font-mono font-bold text-nature-primary shadow-sm">
                <Calendar className="w-4 h-4 text-nature-water" />
                <span>{ra.period}</span>
              </div>

              {/* Supervisors Tag */}
              <div className="text-left sm:text-right text-xs">
                <span className="text-nature-muted font-medium block">Supervisors:</span>
                <span className="font-bold text-nature-primary block">
                  Dr. Md. Touhidul Islam &amp; Dr. A.K.M. Adham
                </span>
              </div>
            </div>
          </div>

          {/* Core Responsibilities Grid */}
          <div className="mt-8">
            <h4 className="text-xs font-bold uppercase tracking-wider text-nature-muted mb-6 flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-nature-primary" />
              <span>Core Research Mandates &amp; Execution</span>
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {ra.responsibilities.map((resp, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white border border-nature-border/80 hover:border-nature-accent hover:shadow-card transition-all flex items-start space-x-3.5"
                >
                  <div className="w-7 h-7 rounded-lg bg-nature-accentLight/60 text-nature-primary flex-shrink-0 flex items-center justify-center font-mono font-bold text-xs mt-0.5">
                    {idx + 1}
                  </div>
                  <p className="text-xs sm:text-sm text-nature-text/90 leading-relaxed font-normal">
                    {resp}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Research Workflow / Methodology Pipeline */}
        <div>
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-nature-waterDark">
              Methodological Workflow
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-nature-primary mt-1">
              Field-to-Publication Research Pipeline
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {workflowSteps.map((ws, i) => {
              const IconComp = ws.icon;
              return (
                <div
                  key={i}
                  className="relative p-6 rounded-2xl bg-nature-surface border border-nature-border hover:shadow-card transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-black text-nature-accent font-mono">
                        {ws.step}
                      </span>
                      <div className="p-2.5 rounded-xl bg-white text-nature-primary border border-nature-border">
                        <IconComp className="w-5 h-5 text-nature-waterDark" />
                      </div>
                    </div>

                    <h4 className="text-sm font-bold text-nature-primary mb-2">
                      {ws.title}
                    </h4>

                    <p className="text-xs text-nature-text/80 leading-relaxed">
                      {ws.desc}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-nature-border/60 flex items-center text-[10px] font-mono text-nature-muted uppercase tracking-wider">
                    <span>Phase {ws.step} Execution</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

