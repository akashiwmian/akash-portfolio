import React, { useState } from 'react';
import { 
  Droplets, 
  FlaskConical, 
  Waves, 
  Layers, 
  Map, 
  Mountain, 
  CloudRain, 
  Cpu, 
  Sprout, 
  ShieldAlert, 
  Search, 
  ChevronRight, 
  Sparkles,
  Info
} from 'lucide-react';
import { researchInterests } from '../data/portfolioData';

export default function ResearchInterests() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeInterest, setActiveInterest] = useState(null);

  const categories = ['All', 'Water & Hydrology', 'Hydrochemistry', 'Climate & Crops', 'Geospatial & AI'];

  const filteredInterests = selectedCategory === 'All'
    ? researchInterests
    : researchInterests.filter(item => item.category === selectedCategory);

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Droplets': return <Droplets className="w-5 h-5 text-nature-water" />;
      case 'FlaskConical': return <FlaskConical className="w-5 h-5 text-nature-accentDark" />;
      case 'Waves': return <Waves className="w-5 h-5 text-nature-water" />;
      case 'Layers': return <Layers className="w-5 h-5 text-nature-primary" />;
      case 'Map': return <Map className="w-5 h-5 text-emerald-600" />;
      case 'Mountain': return <Mountain className="w-5 h-5 text-amber-700" />;
      case 'CloudRain': return <CloudRain className="w-5 h-5 text-sky-600" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-indigo-600" />;
      case 'Sprout': return <Sprout className="w-5 h-5 text-emerald-600" />;
      case 'ShieldAlert': return <ShieldAlert className="w-5 h-5 text-rose-600" />;
      default: return <Droplets className="w-5 h-5 text-nature-water" />;
    }
  };

  return (
    <section id="research" className="py-20 bg-nature-surface relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-nature-accentLight text-nature-primary text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Core Scientific Domains</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-nature-primary tracking-tight">
              Research Interests &amp; Methodologies
            </h2>
            <p className="mt-3 text-base text-nature-text/80 leading-relaxed">
              Ten focused scientific frontiers at the nexus of agricultural engineering, computational hydrological modelling, and climate-resilient water systems.
            </p>
          </div>

          {/* Interactive Category Filter Tabs */}
          <div className="mt-6 md:mt-0 flex flex-wrap gap-1.5 p-1 bg-white rounded-xl border border-nature-border shadow-soft self-start">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  selectedCategory === cat
                    ? 'bg-nature-primary text-white shadow-sm'
                    : 'text-nature-muted hover:text-nature-primary hover:bg-nature-sand'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Cards Grid: 10 Interactive Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredInterests.map((interest) => (
            <div
              key={interest.id}
              onClick={() => setActiveInterest(interest)}
              className="group cursor-pointer bg-white rounded-2xl p-6 border border-nature-border hover:border-nature-accent shadow-card hover:shadow-elevated transition-all flex flex-col justify-between transform hover:-translate-y-1"
            >
              <div>
                {/* Card Top Meta */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-nature-surface border border-nature-border/80 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {getIcon(interest.icon)}
                  </div>
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-nature-sand text-nature-muted">
                    {interest.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-nature-primary group-hover:text-nature-waterDark transition-colors leading-snug mb-2">
                  {interest.id}. {interest.title}
                </h3>

                {/* Summary */}
                <p className="text-xs text-nature-text/80 leading-relaxed mb-4">
                  {interest.summary}
                </p>
              </div>

              {/* Keywords Tag Cloud & Card Footer */}
              <div>
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-nature-border/60">
                  {interest.keywords.map((kw, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-nature-surface text-nature-text/80 border border-nature-border/50"
                    >
                      {kw}
                    </span>
                  ))}
                </div>

                <div className="mt-4 flex items-center justify-between text-[11px] font-bold text-nature-primary/70 group-hover:text-nature-primary">
                  <span>Explore scientific context</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-nature-accentDark" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal / Dialog for Detailed Interest Inspection */}
        {activeInterest && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-nature-dark/60 backdrop-blur-sm animate-fadeIn">
            <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 border border-nature-border shadow-elevated relative animate-scaleUp">
              
              <div className="flex items-start justify-between pb-4 border-b border-nature-border">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-2xl bg-nature-surface border border-nature-border flex items-center justify-center">
                    {getIcon(activeInterest.icon)}
                  </div>
                  <div>
                    <span className="text-[11px] font-bold tracking-wider uppercase text-nature-waterDark block">
                      {activeInterest.category}
                    </span>
                    <h4 className="text-lg font-extrabold text-nature-primary leading-tight">
                      {activeInterest.title}
                    </h4>
                  </div>
                </div>
                <button
                  onClick={() => setActiveInterest(null)}
                  className="w-8 h-8 rounded-full bg-nature-sand hover:bg-nature-border text-nature-primary flex items-center justify-center text-sm font-bold"
                  aria-label="Close dialog"
                >
                  ✕
                </button>
              </div>

              <div className="py-5 space-y-4">
                <div>
                  <h5 className="text-xs font-bold uppercase tracking-wider text-nature-muted mb-1">
                    Research Objective &amp; Scope
                  </h5>
                  <p className="text-sm text-nature-text leading-relaxed">
                    {activeInterest.summary}
                  </p>
                </div>

                <div>
                  <h5 className="text-xs font-bold uppercase tracking-wider text-nature-muted mb-2">
                    Key Methodological Pillars
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {activeInterest.keywords.map((kw, i) => (
                      <span
                        key={i}
                        className="text-xs font-semibold px-3 py-1 rounded-lg bg-nature-accentLight/60 text-nature-primary border border-nature-accent/30"
                      >
                        ✓ {kw}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-nature-surface border border-nature-border text-xs text-nature-text/80 space-y-1">
                  <div className="font-bold text-nature-primary flex items-center space-x-1.5">
                    <Info className="w-3.5 h-3.5 text-nature-water" />
                    <span>Application to Regional Systems:</span>
                  </div>
                  <p>
                    Directly addresses agro-climatic challenges in Bangladesh including groundwater depletion in the Barind and Central floodplains, surface water quality of Old Brahmaputra, and winter crop water security.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-nature-border flex justify-end">
                <button
                  onClick={() => setActiveInterest(null)}
                  className="px-5 py-2 rounded-xl bg-nature-primary text-white text-xs font-bold hover:bg-nature-secondary transition-colors"
                >
                  Close Window
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}

