// EmailJS Configuration
// Service ID, Template ID & Public Key provided by user
export const EMAILJS_CONFIG = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_ps3xpbq',
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_igojuq3',
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'x7E8s_anPNe6eXUIX',
  
  // Gets current template ID from localStorage, .env, or fallback
  getTemplateId: () => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('emailjs_template_id');
      if (stored && stored.trim()) return stored.trim();
    }
    return import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_igojuq3';
  },

  // Allows setting template ID dynamically
  setTemplateId: (id) => {
    if (typeof window !== 'undefined' && id) {
      localStorage.setItem('emailjs_template_id', id.trim());
    }
  }
};
