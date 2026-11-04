import React, { useState } from 'react';
import { 
  Activity, 
  Waves, 
  MapPin, 
  Code, 
  BarChart3, 
  Compass, 
  CheckCircle2, 
  Cpu, 
  Layers, 
  FlaskConical, 
  Search 
} from 'lucide-react';
import { technicalSkills } from '../data/portfolioData';

export default function SkillsSection() {
  const [searchTerm, setSearchTerm] = useState('');

  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case 'Activity': return <Activity className="w-5 h-5 text-nature-water" />;
      case 'Waves': return <Waves className="w-5 h-5 text-nature-water" />;
      case 'MapPin': return <MapPin className="w-5 h-5 text-emerald-600" />;
      case 'Code': return <Code className="w-5 h-5 text-indigo-600" />;
      case 'BarChart3': return <BarChart3 className="w-5 h-5 text-amber-700" />;
      case 'Compass': return <Compass className="w-5 h-5 text-rose-600" />;
      default: return <Cpu className="w-5 h-5 text-nature-primary" />;
    }
  };

  const filteredSkills = technicalSkills.map(cat => {
    if (!searchTerm) return cat;
    const matchingTools = cat.tools.filter(t => 
      t.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      t.desc.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cat.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return {
      ...cat,
      tools: matchingTools
    };
  }).filter(cat => cat.tools.length > 0);

  return (
    <section id="skills" className="py-20 bg-nature-surface relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-nature-accentLight text-nature-primary text-xs font-bold uppercase tracking-wider mb-3">
              <Cpu className="w-3.5 h-3.5" />
              <span>Computational &amp; Field Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-nature-primary tracking-tight">
              Technical &amp; Modeling Toolkit
            </h2>
            <p className="mt-3 text-base text-nature-text/80 leading-relaxed">
              Process-based crop-water simulators, hydrological catchment engines, geospatial tools, scientific statistical packages, and laboratory instrumentation.
            </p>
          </div>

          {/* Quick Tool Search Box */}
          <div className="mt-6 md:mt-0 relative w-full sm:w-72">
            <Search className="w-4 h-4 text-nature-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search tools (e.g. AquaCrop, Python)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-xs rounded-xl bg-white border border-nature-border focus:border-nature-primary focus:outline-none focus:ring-1 focus:ring-nature-primary text-nature-text shadow-soft"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-nature-muted hover:text-nature-primary"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Skills Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((cat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 border border-nature-border hover:border-nature-accent shadow-card hover:shadow-elevated transition-all flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-nature-surface border border-nature-border flex items-center justify-center">
                    {getCategoryIcon(cat.icon)}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-nature-primary leading-tight">
                      {cat.category}
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-nature-muted mb-4">
                  {cat.description}
                </p>

                {/* Tool Cards */}
                <div className="space-y-2.5">
                  {cat.tools.map((tool, tIdx) => (
                    <div
                      key={tIdx}
                      className="p-3 rounded-xl bg-nature-surface border border-nature-border/70 hover:bg-white hover:border-nature-accent transition-colors"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-bold text-nature-primary font-mono">
                          {tool.name}
                        </span>
                        <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                          tool.level === 'Advanced' || tool.level === 'Specialist' || tool.level === 'Expert'
                            ? 'bg-emerald-100 text-emerald-800'
                            : 'bg-nature-sand text-nature-text'
                        }`}>
                          {tool.level}
                        </span>
                      </div>
                      <p className="text-[11px] text-nature-text/80 leading-normal">
                        {tool.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-nature-border/60 flex items-center justify-between text-[11px] text-nature-waterDark font-semibold">
                <span>Verified in Peer-Reviewed Research</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              </div>
            </div>
          ))}
        </div>

        {/* Laboratory & Field Competencies Spotlight Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-nature-primary text-white relative overflow-hidden shadow-elevated">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-10 bg-water-grid pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-wider text-nature-accent font-bold block mb-1">
              Field &amp; Laboratory Analytical Prowess
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold mb-3">
              Experimental Design, Precision Instrumentation &amp; Wet Lab Diagnostics
            </h3>
            <p className="text-xs sm:text-sm text-nature-surface/90 leading-relaxed mb-6">
              Experienced in field-plot preparation, in-situ sensor logging, crop phenological tracking, piezometer installations, soil core sampling, gravimetric moisture calibration, water quality titrations, and end-to-end model parameter validation.
            </p>

            <div className="flex flex-wrap gap-2 text-xs font-mono">
              <span className="px-3 py-1 rounded-lg bg-white/10 text-white border border-white/20">
                ✓ Soil Moisture Sensors (TDR/FDR)
              </span>
              <span className="px-3 py-1 rounded-lg bg-white/10 text-white border border-white/20">
                ✓ Hydrochemistry &amp; Salinity Titrations
              </span>
              <span className="px-3 py-1 rounded-lg bg-white/10 text-white border border-white/20">
                ✓ Piezometer Groundwater Logging
              </span>
              <span className="px-3 py-1 rounded-lg bg-white/10 text-white border border-white/20">
                ✓ Perforated Pani Pipe AWD Monitoring
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

