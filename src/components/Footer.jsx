import React from 'react';
import { 
  Droplets, 
  ArrowUp, 
  Download, 
  Heart, 
  MapPin, 
  GraduationCap 
} from 'lucide-react';
import { personalData } from '../data/portfolioData';
import SocialLinks from './SocialLinks';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-nature-dark text-white pt-16 pb-12 border-t border-nature-primary/30 relative overflow-hidden">
      {/* Subtle topographic contour overlay */}
      <div className="absolute inset-0 opacity-5 bg-topo-pattern pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/10">
          
          {/* Brand & Identity */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-nature-primary text-white flex items-center justify-center border border-white/20">
                <span className="font-bold text-base">A</span>
                <Droplets className="w-3.5 h-3.5 text-nature-water -ml-1 -mt-2" />
              </div>
              <div>
                <span className="text-xl font-extrabold tracking-tight block">
                  {personalData.name}
                </span>
                <span className="text-xs text-nature-accent font-medium tracking-wide uppercase block">
                  Agricultural Engineer &amp; Researcher
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-gray-300 max-w-md leading-relaxed">
              "{personalData.tagline}"
            </p>

            <div className="flex items-center space-x-2 text-xs text-gray-400">
              <MapPin className="w-3.5 h-3.5 text-nature-accent" />
              <span>Tangail &amp; BAU, Mymensingh, Bangladesh</span>
            </div>

            {/* Social Media Channels Row */}
            <div className="pt-2">
              <SocialLinks variant="icons-only" />
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold tracking-wider uppercase text-nature-accent">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-gray-300">
              <li>
                <a href="#about" className="hover:text-nature-accent transition-colors">
                  Academic Background
                </a>
              </li>
              <li>
                <a href="#research" className="hover:text-nature-accent transition-colors">
                  Research Interests
                </a>
              </li>
              <li>
                <a href="#project" className="hover:text-nature-accent transition-colors">
                  Boro Rice AWD Trial
                </a>
              </li>
              <li>
                <a href="#publications" className="hover:text-nature-accent transition-colors">
                  Elsevier Publications
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-nature-accent transition-colors">
                  Modeling Toolkit
                </a>
              </li>
              <li>
                <a href="#references" className="hover:text-nature-accent transition-colors">
                  Academic References
                </a>
              </li>
            </ul>
          </div>

          {/* Document & Contact */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold tracking-wider uppercase text-nature-accent">
              Academic Dossier
            </h4>
            <p className="text-xs text-gray-300 leading-relaxed">
              Curriculum Vitae verified from institutional records at Bangladesh Agricultural University.
            </p>
            <div className="pt-2">
              <a
                href={personalData.cvFile}
                download="CurriculumVitae_Akash.pdf"
                className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-xs font-bold text-white transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download CV (PDF)</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <div>
            © {new Date().getFullYear()} {personalData.name}. All Rights Reserved. Built with React &amp; Tailwind CSS.
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors text-xs font-semibold"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}

