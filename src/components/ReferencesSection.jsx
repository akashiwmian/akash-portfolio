import React from 'react';
import { 
  Users, 
  Mail, 
  Phone, 
  MapPin, 
  Building2, 
  GraduationCap, 
  CheckCircle2, 
  ExternalLink 
} from 'lucide-react';
import { referencesData } from '../data/portfolioData';

export default function ReferencesSection() {
  return (
    <section id="references" className="py-20 bg-white border-b border-nature-border/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-nature-accentLight/60 text-nature-primary text-xs font-bold uppercase tracking-wider mb-3">
            <Users className="w-3.5 h-3.5" />
            <span>Scholarly Referees</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-nature-primary tracking-tight">
            Academic &amp; Research References
          </h2>
          <p className="mt-3 text-base text-nature-text/80 leading-relaxed">
            Distinguished faculty members and research supervisors at Bangladesh Agricultural University available for academic verification and recommendations.
          </p>
        </div>

        {/* References Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {referencesData.map((ref, idx) => (
            <div
              key={idx}
              className="bg-nature-surface rounded-3xl p-6 sm:p-7 border border-nature-border hover:border-nature-accent shadow-card hover:shadow-elevated transition-all flex flex-col justify-between"
            >
              <div>
                {/* Top Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-white text-nature-primary border border-nature-border flex items-center justify-center shadow-xs">
                    <GraduationCap className="w-5 h-5 text-nature-waterDark" />
                  </div>
                  <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-nature-accentLight/60 text-nature-primary">
                    {ref.role}
                  </span>
                </div>

                {/* Name & Academic Rank */}
                <h3 className="text-lg font-extrabold text-nature-primary mb-1">
                  {ref.name}
                </h3>
                
                <p className="text-xs font-bold text-nature-waterDark mb-3">
                  {ref.title}
                </p>

                {/* Department & University */}
                <div className="space-y-1 text-xs text-nature-text/90 mb-5">
                  <p className="font-semibold text-nature-primary">
                    {ref.department}
                  </p>
                  <p className="text-nature-muted flex items-start space-x-1.5">
                    <Building2 className="w-3.5 h-3.5 text-nature-accentDark flex-shrink-0 mt-0.5" />
                    <span>{ref.institution}</span>
                  </p>
                  <p className="text-nature-muted flex items-center space-x-1.5">
                    <MapPin className="w-3.5 h-3.5 text-nature-accentDark flex-shrink-0" />
                    <span>{ref.location}</span>
                  </p>
                </div>
              </div>

              {/* Direct Communication Channels */}
              <div className="pt-4 border-t border-nature-border/70 space-y-2">
                <a
                  href={`mailto:${ref.email}`}
                  className="flex items-center space-x-2 text-xs font-medium text-nature-text hover:text-nature-primary p-2 rounded-lg bg-white border border-nature-border hover:border-nature-primary/40 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-nature-water" />
                  <span className="truncate">{ref.email}</span>
                </a>

                <a
                  href={`tel:${ref.phone}`}
                  className="flex items-center space-x-2 text-xs font-mono text-nature-text hover:text-nature-primary p-2 rounded-lg bg-white border border-nature-border hover:border-nature-primary/40 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-nature-primary" />
                  <span>{ref.phone}</span>
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

