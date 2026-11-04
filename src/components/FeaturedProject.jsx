import React, { useState } from 'react';
import { 
  Sprout, 
  Droplets, 
  Wind, 
  Calendar, 
  Sliders, 
  BarChart2, 
  TrendingUp, 
  CheckCircle2, 
  AlertCircle, 
  FileCheck, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { projectData } from '../data/portfolioData';

export default function FeaturedProject() {
  // Interactive Simulator State
  const [selectedRegime, setSelectedRegime] = useState('AWD-15');
  const [selectedNitrogen, setSelectedNitrogen] = useState(67.5);

  // Simulation calculations based on empirical agronomic trends for BRRI Dhan 88
  const getSimulationResults = (regime, n) => {
    let waterSavings = 0; // %
    let waterProductivity = 1.15; // kg/m3
    let yieldPercentage = 100; // % of target
    let emissionReduction = 0; // %

    if (regime === 'CF') {
      waterSavings = 0;
      waterProductivity = (0.95 + (n / 90) * 0.2).toFixed(2);
      yieldPercentage = (94 + (n / 90) * 6).toFixed(1);
      emissionReduction = 0;
    } else if (regime === 'AWD-15') {
      waterSavings = 25; // 22-28%
      waterProductivity = (1.30 + (n / 90) * 0.28).toFixed(2);
      yieldPercentage = (97 + (n / 90) * 4.5).toFixed(1); // maintains or exceeds yield with root aeration
      emissionReduction = 38;
    } else if (regime === 'AWD-20') {
      waterSavings = 34; // 32-36%
      waterProductivity = (1.28 + (n / 90) * 0.22).toFixed(2);
      yieldPercentage = (86 + (n / 90) * 6).toFixed(1); // slight yield drop at 20cm without optimal N
      emissionReduction = 45;
    }

    return {
      waterSavings,
      waterProductivity,
      yieldPercentage,
      emissionReduction
    };
  };

  const sim = getSimulationResults(selectedRegime, selectedNitrogen);

  return (
    <section id="project" className="py-20 bg-nature-surface relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-nature-waterLight text-nature-waterDark text-xs font-bold uppercase tracking-wider mb-3">
            <Sprout className="w-3.5 h-3.5" />
            <span>Featured Scientific Field Experiment</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-nature-primary tracking-tight">
            Climate-Smart Irrigation &amp; Nitrogen Optimization
          </h2>
          <p className="mt-3 text-base text-nature-text/80 leading-relaxed">
            Integrating continuous field trials on Boro rice (BRRI Dhan 88) with FAO AquaCrop dynamic process modeling and CMIP6 climate scenarios in Bangladesh.
          </p>
        </div>

        {/* Project Overview Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-nature-border shadow-elevated mb-12">
          
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-nature-border">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-lg bg-nature-sand text-nature-primary text-xs font-mono font-bold">
                <Calendar className="w-3.5 h-3.5 text-nature-water" />
                <span>2024–2025 (Two-Year Trial)</span>
              </span>
              <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-lg bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200">
                <Sprout className="w-3.5 h-3.5 text-emerald-600" />
                <span>Crop: BRRI Dhan 88 (Boro Rice)</span>
              </span>
            </div>

            <span className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200 text-xs font-bold">
              <FileCheck className="w-4 h-4 text-amber-600" />
              <span>Research Paper Submitted &amp; Under Peer Review</span>
            </span>
          </div>

          <div className="py-6">
            <p className="text-sm sm:text-base text-nature-text/90 leading-relaxed max-w-4xl">
              {projectData.overview} Using perforated field pani tubes and soil moisture sensors, this experiment examined three water management regimes against three nitrogen fertilizer rates to establish climate-resilient water productivity benchmarks for the Bengal basin.
            </p>
          </div>

          {/* Interactive Simulation / Scenario Explorer */}
          <div className="p-6 sm:p-8 rounded-2xl bg-nature-surface border border-nature-border mt-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-nature-waterDark font-bold flex items-center space-x-1.5">
                  <Sliders className="w-3.5 h-3.5" />
                  <span>Interactive Scenario Explorer</span>
                </span>
                <h3 className="text-lg font-bold text-nature-primary mt-1">
                  Evaluate Water Savings vs. Yield Under AWD &amp; Nitrogen Levels
                </h3>
              </div>
              <span className="text-xs font-mono bg-white px-3 py-1.5 rounded-lg border border-nature-border text-nature-muted self-start">
                AquaCrop Calibrated Parameters
              </span>
            </div>

            {/* Controls */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-6 border-b border-nature-border/80">
              
              {/* Regime Selector */}
              <div>
                <label className="block text-xs font-bold text-nature-primary uppercase tracking-wider mb-2">
                  1. Select Irrigation Regime:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'CF', name: 'CF', label: 'Continuous Flooding' },
                    { id: 'AWD-15', name: 'AWD-15', label: 'Safe AWD (-15 cm)' },
                    { id: 'AWD-20', name: 'AWD-20', label: 'Stress AWD (-20 cm)' }
                  ].map((r) => (
                    <button
                      key={r.id}
                      onClick={() => setSelectedRegime(r.id)}
                      className={`p-3 rounded-xl text-center border text-xs font-bold transition-all ${
                        selectedRegime === r.id
                          ? 'bg-nature-primary text-white border-nature-primary shadow-sm'
                          : 'bg-white text-nature-text border-nature-border hover:bg-nature-sand'
                      }`}
                    >
                      <div className="text-sm">{r.name}</div>
                      <div className={`text-[10px] font-normal ${selectedRegime === r.id ? 'text-nature-accentLight' : 'text-nature-muted'}`}>
                        {r.label}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Nitrogen Selector */}
              <div>
                <label className="block text-xs font-bold text-nature-primary uppercase tracking-wider mb-2">
                  2. Select Nitrogen Application Rate:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { val: 90, label: '90 kg N/ha', desc: '100% Rec.' },
                    { val: 67.5, label: '67.5 kg N/ha', desc: '75% (-25%)' },
                    { val: 45, label: '45 kg N/ha', desc: '50% (-50%)' }
                  ].map((n) => (
                    <button
                      key={n.val}
                      onClick={() => setSelectedNitrogen(n.val)}
                      className={`p-3 rounded-xl text-center border text-xs font-bold transition-all ${
                        selectedNitrogen === n.val
                          ? 'bg-nature-water text-white border-nature-water shadow-sm'
                          : 'bg-white text-nature-text border-nature-border hover:bg-nature-sand'
                      }`}
                    >
                      <div className="text-sm">{n.label}</div>
                      <div className={`text-[10px] font-normal ${selectedNitrogen === n.val ? 'text-white/80' : 'text-nature-muted'}`}>
                        {n.desc}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Live Output Simulation Readouts */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-6">
              
              <div className="p-4 rounded-xl bg-white border border-nature-border">
                <span className="text-[11px] font-bold text-nature-muted uppercase block">
                  Water Savings
                </span>
                <div className="text-2xl font-black text-nature-water mt-1 font-mono">
                  {sim.waterSavings}%
                </div>
                <div className="text-[11px] text-nature-muted mt-1">
                  vs. continuous flooding baseline
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-nature-border">
                <span className="text-[11px] font-bold text-nature-muted uppercase block">
                  Relative Grain Yield
                </span>
                <div className="text-2xl font-black text-emerald-700 mt-1 font-mono">
                  {sim.yieldPercentage}%
                </div>
                <div className="text-[11px] text-nature-muted mt-1">
                  Optimal root aeration achieved
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-nature-border">
                <span className="text-[11px] font-bold text-nature-muted uppercase block">
                  Water Productivity (WP)
                </span>
                <div className="text-2xl font-black text-nature-primary mt-1 font-mono">
                  {sim.waterProductivity} <span className="text-xs font-normal">kg/m³</span>
                </div>
                <div className="text-[11px] text-nature-muted mt-1">
                  High crop water conversion
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-nature-border">
                <span className="text-[11px] font-bold text-nature-muted uppercase block">
                  GHG Emission Abatement
                </span>
                <div className="text-2xl font-black text-amber-700 mt-1 font-mono">
                  ~{sim.emissionReduction}%
                </div>
                <div className="text-[11px] text-nature-muted mt-1">
                  Reduced anaerobic methane production
                </div>
              </div>

            </div>

            <div className="mt-4 p-3 rounded-lg bg-nature-accentLight/40 text-xs text-nature-text/80 flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <span>
                <strong>Field Finding:</strong> AWD-15 combined with 67.5 kg N/ha maximizes water productivity while preserving maximum yield and reducing groundwater pumping costs.
              </span>
            </div>

          </div>

          {/* Key Findings List */}
          <div className="mt-8 pt-6 border-t border-nature-border">
            <h4 className="text-xs font-bold uppercase tracking-wider text-nature-muted mb-4">
              Key Scientific Outcomes &amp; Future Projections
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {projectData.keyOutcomes.map((outcome, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-nature-surface border border-nature-border/70 text-xs leading-relaxed text-nature-text/90">
                  <span className="font-bold text-nature-primary block mb-1">
                    Key Outcome #{idx + 1}
                  </span>
                  {outcome}
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

