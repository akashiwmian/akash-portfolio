import React, { useState, useEffect } from 'react';
import { 
  Droplets, 
  Menu, 
  X, 
  Download, 
  ArrowUpRight, 
  BookOpen, 
  User, 
  GraduationCap, 
  Layers, 
  Mail, 
  FileText 
} from 'lucide-react';
import { personalData } from '../data/portfolioData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = ['about', 'research', 'experience', 'project', 'publications', 'skills', 'references', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Research', href: '#research' },
    { label: 'Experience', href: '#experience' },
    { label: 'Project', href: '#project' },
    { label: 'Publications', href: '#publications' },
    { label: 'Skills', href: '#skills' },
    { label: 'References', href: '#references' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-nature-surface/90 backdrop-blur-md shadow-sm border-b border-nature-border/80 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#"
            className="group flex items-center space-x-3 text-nature-primary focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-nature-primary text-white flex items-center justify-center shadow-md group-hover:bg-nature-secondary transition-colors">
              <span className="font-bold tracking-wider text-base">A</span>
              <Droplets className="w-3.5 h-3.5 text-nature-water -ml-1 -mt-2 animate-pulse-subtle" />
            </div>
            <div>
              <span className="font-extrabold text-lg tracking-tight text-nature-primary block leading-none">
                {personalData.name}
              </span>
              <span className="text-[11px] text-nature-muted font-medium tracking-wide uppercase block mt-0.5">
                Agricultural Engineer
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 bg-white/70 backdrop-blur-sm px-3 py-1.5 rounded-full border border-nature-border shadow-soft">
            {navLinks.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`text-xs font-semibold px-3 py-1.5 rounded-full transition-all ${
                    isActive
                      ? 'bg-nature-primary text-white shadow-sm'
                      : 'text-nature-text hover:text-nature-primary hover:bg-nature-accentLight/50'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Action Button */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href={personalData.cvFile}
              download="CurriculumVitae_Akash.pdf"
              className="inline-flex items-center space-x-2 text-xs font-semibold px-4 py-2.5 rounded-xl border border-nature-primary/30 text-nature-primary hover:bg-nature-accentLight/60 transition-all shadow-sm group"
            >
              <Download className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
              <span>Download CV</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center space-x-2 text-xs font-semibold px-4 py-2.5 rounded-xl bg-nature-primary text-white hover:bg-nature-secondary transition-all shadow-sm hover:shadow"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center space-x-2">
            <a
              href={personalData.cvFile}
              download="CurriculumVitae_Akash.pdf"
              aria-label="Download CV"
              className="p-2 rounded-lg text-nature-primary border border-nature-border bg-white"
            >
              <Download className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-nature-primary border border-nature-border bg-white hover:bg-nature-sand transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-full bg-white/95 backdrop-blur-xl border-b border-nature-border shadow-elevated px-4 py-6 animate-fadeIn">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-4 py-2.5 rounded-lg text-sm font-semibold text-nature-text hover:bg-nature-accentLight hover:text-nature-primary transition-colors"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-4 h-4 text-nature-muted" />
              </a>
            ))}
            <div className="pt-4 border-t border-nature-border flex flex-col space-y-2">
              <a
                href={personalData.cvFile}
                download="CurriculumVitae_Akash.pdf"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center space-x-2 py-2.5 rounded-xl border border-nature-primary text-nature-primary text-sm font-semibold"
              >
                <Download className="w-4 h-4" />
                <span>Download CV</span>
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center space-x-2 py-2.5 rounded-xl bg-nature-primary text-white text-sm font-semibold shadow"
              >
                <span>Get in Touch</span>
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

