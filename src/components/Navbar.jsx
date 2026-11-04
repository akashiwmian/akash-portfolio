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
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Scroll progress percentage
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const currentProgress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(currentProgress);
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
      {/* Top Scroll Reading Progress Bar */}
      <div
        className="absolute top-0 left-0 h-[2.5px] bg-gradient-to-r from-nature-primary via-nature-water to-nature-accent transition-all duration-75 z-50"
        style={{ width: `${scrollProgress}%` }}
      />
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
          <div className="hidden sm:flex items-center space-x-2.5">
            <a
              href={personalData.socials.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              title="Chat on WhatsApp"
              className="inline-flex items-center space-x-1.5 text-xs font-semibold px-3 py-2 rounded-xl bg-[#25D366]/10 text-[#128C7E] border border-[#25D366]/30 hover:bg-[#25D366] hover:text-white transition-all shadow-sm"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              <span>WhatsApp</span>
            </a>
            <a
              href={personalData.cvFile}
              download="CurriculumVitae_Akash.pdf"
              className="inline-flex items-center space-x-2 text-xs font-semibold px-3.5 py-2 rounded-xl border border-nature-primary/30 text-nature-primary hover:bg-nature-accentLight/60 transition-all shadow-sm group"
            >
              <Download className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
              <span>Download CV</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center space-x-2 text-xs font-semibold px-4 py-2 rounded-xl bg-nature-primary text-white hover:bg-nature-secondary transition-all shadow-sm hover:shadow"
            >
              <span>Contact</span>
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

