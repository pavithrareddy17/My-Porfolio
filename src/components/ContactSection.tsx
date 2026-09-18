import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText(personalInfo.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section id="contact" className="py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading with blue underline accent */}
        <div className="mb-4">
          <h2 className="text-lg sm:text-xl font-bold uppercase tracking-wider text-slate-900 dark:text-white border-b-2 border-blue-600 dark:border-blue-400 inline-block pb-1">
            Contact
          </h2>
        </div>

        {/* Minimal Clean Contact Details */}
        <div className="space-y-2.5 text-xs sm:text-sm text-slate-800 dark:text-slate-100">
          
          {/* Email row with 1-click copy & mailto */}
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-900 dark:text-white">Email:</span>
            <a 
              href={`mailto:${personalInfo.email}`} 
              className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
            >
              {personalInfo.email}
            </a>
            <button
              onClick={copyEmail}
              id="copy-email-btn"
              className="text-slate-400 hover:text-slate-700 dark:hover:text-white p-1 rounded transition-colors"
              title="Copy email"
            >
              {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>

          {/* Phone row with 1-click copy & tel link */}
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-900 dark:text-white">Phone:</span>
            <a 
              href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`} 
              className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
            >
              {personalInfo.phone}
            </a>
            <button
              onClick={copyPhone}
              id="copy-phone-btn"
              className="text-slate-400 hover:text-slate-700 dark:hover:text-white p-1 rounded transition-colors"
              title="Copy phone"
            >
              {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>

          {/* Social Links Row */}
          <div className="flex items-center gap-2 pt-1 font-semibold">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              id="contact-linkedin-link"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              LinkedIn
            </a>
            <span className="text-slate-400 dark:text-slate-500">|</span>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              id="contact-github-link"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              GitHub
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
