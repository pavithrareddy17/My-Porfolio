import React from 'react';
import { experiences } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading with blue underline accent */}
        <div className="mb-6">
          <h2 className="text-lg sm:text-xl font-bold uppercase tracking-wider text-slate-900 dark:text-white border-b-2 border-blue-600 dark:border-blue-400 inline-block pb-1">
            EXPERIENCE & INTERNSHIPS
          </h2>
        </div>

        {/* Clean Minimal Timeline / List */}
        <div className="space-y-10">
          {experiences.map((exp) => (
            <div key={exp.id} className="space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                  {exp.company} — <span className="text-blue-600 dark:text-blue-400 font-semibold">{exp.role}</span>
                </h3>
                <span className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium">
                  {exp.period} • {exp.location}
                </span>
              </div>

              <ul className="space-y-2 text-xs sm:text-sm text-slate-800 dark:text-slate-100 leading-relaxed pl-1">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-justify">
                    <span className="text-blue-600 dark:text-blue-400 font-bold mt-0.5">•</span>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
