import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Check, 
  Copy, 
  Download, 
  ExternalLink, 
  Building2, 
  Sparkles, 
  MessageSquare,
  Globe2
} from 'lucide-react';
import { personalData } from '../data/portfolioData';
import SocialLinks from './SocialLinks';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(personalData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="py-20 bg-nature-surface relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-nature-accentLight text-nature-primary text-xs font-bold uppercase tracking-wider mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Connect &amp; Collaborate</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-nature-primary tracking-tight">
            Initiate a Scientific Collaboration
          </h2>
          <p className="mt-3 text-base text-nature-text/80 leading-relaxed">
            Open to prospective graduate research fellowships, doctoral opportunities, collaborative modeling projects, and technical consultations in agricultural water engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Info & Academic Affiliation */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Contact Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-nature-border shadow-elevated space-y-6">
              
              <div className="flex items-center justify-between pb-4 border-b border-nature-border">
                <div>
                  <h3 className="text-lg font-bold text-nature-primary">
                    Direct Inquiries
                  </h3>
                  <p className="text-xs text-nature-muted">
                    Academic &amp; Research Channels
                  </p>
                </div>
                <button
                  onClick={copyEmail}
                  className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-nature-sand hover:bg-nature-accentLight text-nature-primary text-xs font-semibold transition-colors"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-nature-muted" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-3.5">
                <div className="w-9 h-9 rounded-xl bg-nature-surface border border-nature-border flex items-center justify-center text-nature-water flex-shrink-0 mt-0.5">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-nature-muted">
                    Institutional Email
                  </div>
                  <a
                    href={`mailto:${personalData.email}`}
                    className="text-xs sm:text-sm font-bold text-nature-primary hover:text-nature-waterDark hover:underline"
                  >
                    {personalData.email}
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-3.5">
                <div className="w-9 h-9 rounded-xl bg-nature-surface border border-nature-border flex items-center justify-center text-nature-primary flex-shrink-0 mt-0.5">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-nature-muted">
                    Phone / Mobile
                  </div>
                  <a
                    href={`tel:${personalData.phone}`}
                    className="text-xs sm:text-sm font-bold text-nature-primary hover:text-nature-waterDark font-mono"
                  >
                    {personalData.phone}
                  </a>
                </div>
              </div>

              {/* Residential Location */}
              <div className="flex items-start space-x-3.5">
                <div className="w-9 h-9 rounded-xl bg-nature-surface border border-nature-border flex items-center justify-center text-nature-accentDark flex-shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-nature-muted">
                    Home Address
                  </div>
                  <p className="text-xs text-nature-text/90 leading-relaxed">
                    {personalData.fullAddress}
                  </p>
                </div>
              </div>

              {/* Institutional Address */}
              <div className="flex items-start space-x-3.5">
                <div className="w-9 h-9 rounded-xl bg-nature-surface border border-nature-border flex items-center justify-center text-nature-secondary flex-shrink-0 mt-0.5">
                  <Building2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-nature-muted">
                    Department Affiliation
                  </div>
                  <p className="text-xs text-nature-text/90 leading-relaxed">
                    {personalData.institutionalAffiliation}
                  </p>
                </div>
              </div>

              {/* Social & Academic Networks */}
              <div className="pt-4 border-t border-nature-border">
                <div className="text-[11px] font-bold uppercase tracking-wider text-nature-muted mb-3 flex items-center justify-between">
                  <span>Social &amp; Academic Profiles</span>
                  <span className="text-[10px] text-nature-waterDark font-mono">7 Connected Channels</span>
                </div>
                <SocialLinks variant="default" className="grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-2" />
              </div>

              {/* CV Action */}
              <div className="pt-2">
                <a
                  href={personalData.cvFile}
                  download="CurriculumVitae_Akash.pdf"
                  className="w-full flex items-center justify-center space-x-2 py-3 px-4 rounded-xl bg-nature-primary text-white text-xs font-bold shadow-elevated hover:bg-nature-secondary transition-all"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Curriculum Vitae (PDF)</span>
                </a>
              </div>

            </div>

          </div>

          {/* Right Column: Interactive Scientific Inquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-nature-border shadow-elevated">
            
            <div className="mb-6">
              <h3 className="text-lg font-bold text-nature-primary">
                Send a Message or Research Inquiry
              </h3>
              <p className="text-xs text-nature-muted mt-1">
                Fill in your details below for graduate supervision, research proposals, or data exchange inquiries.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3 animate-fadeIn">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-emerald-900">
                  Message Dispatched Successfully!
                </h4>
                <p className="text-xs text-emerald-700 max-w-sm mx-auto">
                  Thank you for reaching out. Akash will review your communication and respond at the earliest convenience.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-nature-primary mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Prof. / Dr. Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-nature-surface border border-nature-border focus:border-nature-primary focus:outline-none focus:ring-1 focus:ring-nature-primary text-xs text-nature-text"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-nature-primary mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. jane.doe@university.edu"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-nature-surface border border-nature-border focus:border-nature-primary focus:outline-none focus:ring-1 focus:ring-nature-primary text-xs text-nature-text"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-nature-primary mb-1.5">
                    Subject / Topic of Discussion
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Graduate Fellowship / AquaCrop Modeling Collaboration"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-nature-surface border border-nature-border focus:border-nature-primary focus:outline-none focus:ring-1 focus:ring-nature-primary text-xs text-nature-text"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-nature-primary mb-1.5">
                    Message Body *
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Please describe your research question, proposal, or inquiry..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-nature-surface border border-nature-border focus:border-nature-primary focus:outline-none focus:ring-1 focus:ring-nature-primary text-xs text-nature-text resize-y"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-nature-primary text-white text-xs font-bold shadow-elevated hover:bg-nature-secondary transition-all"
                  >
                    <span>Send Inquiry</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}

