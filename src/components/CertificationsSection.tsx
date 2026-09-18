import React from 'react';
import { ExternalLink, Award } from 'lucide-react';
import { certifications } from '../data/portfolioData';

export const CertificationsSection: React.FC = () => {
  return (
    <section id="certifications" className="py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading with blue underline accent */}
        <div className="mb-6">
          <h2 className="text-lg sm:text-xl font-bold uppercase tracking-wider text-slate-900 dark:text-white border-b-2 border-blue-600 dark:border-blue-400 inline-block pb-1">
            CERTIFICATIONS
          </h2>
        </div>

        {/* Minimal Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-3 hover:border-blue-300 dark:hover:border-blue-600 transition-colors flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                    {cert.issuer}
                  </span>
                  <span className="text-slate-500 dark:text-slate-400 font-medium">
                    {cert.issueDate}
                  </span>
                </div>
                
                <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white leading-snug">
                  {cert.title}
                </h3>
                
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {cert.skills.map((s) => (
                    <span
                      key={s}
                      className="px-2 py-0.5 rounded text-[11px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {cert.credentialUrl && (
                <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    <span>Verify Credential</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
