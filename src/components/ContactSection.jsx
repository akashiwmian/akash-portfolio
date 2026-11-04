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
  Globe2,
  AlertCircle,
  Loader2,
  Settings,
  HelpCircle
} from 'lucide-react';
import emailjs from '@emailjs/browser';
import { personalData } from '../data/portfolioData';
import SocialLinks from './SocialLinks';
import { EMAILJS_CONFIG } from '../config/emailjs';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSending, setIsSending] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null
  const [errorMessage, setErrorMessage] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [showConfigHelper, setShowConfigHelper] = useState(false);
  const [customTemplateId, setCustomTemplateId] = useState(EMAILJS_CONFIG.getTemplateId());

  const handleSendEmail = async (templateIdToUse) => {
    setIsSending(true);
    setSubmitStatus(null);
    setErrorMessage('');

    const activeTemplateId = templateIdToUse || customTemplateId || EMAILJS_CONFIG.getTemplateId();

    const templateParams = {
      from_name: formData.name,
      name: formData.name,
      from_email: formData.email,
      email: formData.email,
      reply_to: formData.email,
      subject: formData.subject || 'Scientific Inquiry via Portfolio',
      message: formData.message,
      time: new Date().toLocaleString('en-US', { dateStyle: 'medium', timeStyle: 'short' }),
      to_name: 'Akash',
      to_email: 'akash.2005049@bau.edu.bd',
    };

    try {
      emailjs.init({ publicKey: EMAILJS_CONFIG.publicKey });
      await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        activeTemplateId,
        templateParams,
        {
          publicKey: EMAILJS_CONFIG.publicKey
        }
      );

      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setShowConfigHelper(false);
    } catch (err) {
      console.error('EmailJS Error:', err);
      setSubmitStatus('error');
      const errText = err?.text || err?.message || '';
      if (errText.includes('Template ID') || errText.includes('No records found') || !activeTemplateId) {
        setErrorMessage(
          'EmailJS returned: "No records found". Please verify in your EmailJS dashboard: 1) Email Services: check that service_ps3xpbq is connected and active. 2) Templates: check that template_igojuq3 is saved. 3) API Keys: check that Public Key matches x7E8s_anPNe6eXUIX.'
        );
        setShowConfigHelper(true);
      } else {
        setErrorMessage(errText || 'Unable to deliver message automatically via EmailJS.');
      }
    } finally {
      setIsSending(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    handleSendEmail(customTemplateId);
  };

  const handleSaveTemplateId = (e) => {
    e.preventDefault();
    if (!customTemplateId.trim()) return;
    EMAILJS_CONFIG.setTemplateId(customTemplateId.trim());
    if (formData.name && formData.email && formData.message) {
      handleSendEmail(customTemplateId.trim());
    } else {
      setShowConfigHelper(false);
      setSubmitStatus(null);
    }
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

          {/* Right Column: Live EmailJS Direct Transmission Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-nature-border shadow-elevated">
            
            <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-nature-border">
              <div>
                <h3 className="text-lg font-bold text-nature-primary">
                  Send a Direct Message to Akash
                </h3>
                <p className="text-xs text-nature-muted mt-0.5">
                  Delivered straight to Akash's personal inbox via EmailJS.
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <div className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-[10px] font-mono font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>EmailJS Ready</span>
                </div>
                <button
                  type="button"
                  onClick={() => setShowConfigHelper(!showConfigHelper)}
                  title="Configure EmailJS Template ID"
                  className="p-1.5 rounded-lg bg-nature-sand hover:bg-nature-border text-nature-muted hover:text-nature-primary transition-colors text-xs"
                >
                  <Settings className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Template ID Helper / Configuration Drawer */}
            {showConfigHelper && (
              <div className="mb-6 p-4 rounded-2xl bg-nature-surface border-2 border-dashed border-nature-accent/60 space-y-3 animate-fadeIn">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-2 text-nature-primary text-xs font-bold">
                    <Settings className="w-4 h-4 text-nature-water" />
                    <span>EmailJS Template Configuration</span>
                  </div>
                  <a
                    href="https://dashboard.emailjs.com/admin/templates"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-semibold text-nature-waterDark hover:underline inline-flex items-center space-x-1"
                  >
                    <span>Open EmailJS Dashboard</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                <p className="text-xs text-nature-text/80 leading-relaxed">
                  In EmailJS, emails require a <strong>Template ID</strong>. Go to <strong>EmailJS Dashboard &gt; Email Templates</strong>, create or select your template, and paste the Template ID (e.g. <code className="px-1 py-0.5 rounded bg-white font-mono text-[10px]">template_xxxxxxx</code>) below:
                </p>

                <div className="flex items-center space-x-2">
                  <input
                    type="text"
                    placeholder="Enter Template ID (e.g. template_1234abc)"
                    value={customTemplateId}
                    onChange={(e) => setCustomTemplateId(e.target.value)}
                    className="flex-1 px-3 py-2 text-xs rounded-xl bg-white border border-nature-border focus:border-nature-primary focus:outline-none font-mono text-nature-text"
                  />
                  <button
                    type="button"
                    onClick={handleSaveTemplateId}
                    className="px-4 py-2 rounded-xl bg-nature-primary text-white text-xs font-bold hover:bg-nature-secondary transition-colors"
                  >
                    Save
                  </button>
                </div>
              </div>
            )}

            {/* Success Message Banner */}
            {submitStatus === 'success' && (
              <div className="mb-6 p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3 animate-fadeIn">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-sm">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-emerald-950">
                  Email Dispatched Directly to Akash!
                </h4>
                <p className="text-xs text-emerald-800 max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out. Your message has been routed via EmailJS directly to Akash's address (<span className="font-semibold underline">akash.2005049@bau.edu.bd</span>).
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => setSubmitStatus(null)}
                    className="text-xs font-bold text-emerald-800 hover:text-emerald-950 underline"
                  >
                    Send another message
                  </button>
                </div>
              </div>
            )}

            {/* Error Message with Fallback Direct Mailto & WhatsApp */}
            {submitStatus === 'error' && (
              <div className="mb-6 p-5 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-900 space-y-3 animate-fadeIn">
                <div className="flex items-start space-x-2.5">
                  <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-amber-950">Transmission Note:</div>
                    <p className="mt-0.5 text-amber-800 leading-relaxed">
                      {errorMessage}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-amber-200/80">
                  <a
                    href={`mailto:${personalData.email}?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(formData.message + '\n\nFrom: ' + formData.name + ' (' + formData.email + ')')}`}
                    className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-amber-600 text-white font-bold hover:bg-amber-700 transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Send via Email Client</span>
                  </a>

                  <a
                    href={`https://wa.me/akashiwmian?text=${encodeURIComponent('Hello Akash, my name is ' + (formData.name || 'a visitor') + '. ' + (formData.message || ''))}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-[#25D366] text-white font-bold hover:bg-[#128C7E] transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Message on WhatsApp</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => setShowConfigHelper(true)}
                    className="px-3 py-1.5 rounded-lg bg-white border border-amber-300 text-amber-900 font-semibold hover:bg-amber-100 transition-colors"
                  >
                    Set Template ID
                  </button>
                </div>
              </div>
            )}

            {submitStatus !== 'success' && (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-nature-primary mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      name="from_name"
                      required
                      placeholder="e.g. Prof. / Dr. Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-nature-surface border border-nature-border focus:border-nature-primary focus:outline-none focus:ring-1 focus:ring-nature-primary text-xs text-nature-text"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-nature-primary mb-1.5">
                      Your Email Address *
                    </label>
                    <input
                      type="email"
                      name="from_email"
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
                    name="subject"
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
                    name="message"
                    required
                    rows={5}
                    placeholder="Please describe your research question, proposal, or inquiry..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-nature-surface border border-nature-border focus:border-nature-primary focus:outline-none focus:ring-1 focus:ring-nature-primary text-xs text-nature-text resize-y"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <button
                    type="submit"
                    disabled={isSending}
                    className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-nature-primary text-white text-xs font-bold shadow-elevated hover:bg-nature-secondary disabled:opacity-60 transition-all transform hover:-translate-y-0.5 active:scale-95"
                  >
                    {isSending ? (
                      <>
                        <Loader2 className="w-3.5 h-3.5 animate-spin" />
                        <span>Sending via EmailJS...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Direct Email</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>

                  <span className="text-[11px] text-nature-muted font-mono hidden sm:inline-block">
                    Direct • SSL Encrypted
                  </span>
                </div>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
