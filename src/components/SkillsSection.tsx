import React from 'react';
import { categorizedSkills } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading with blue underline accent */}
        <div className="mb-6">
          <h2 className="text-lg sm:text-xl font-bold uppercase tracking-wider text-slate-900 dark:text-white border-b-2 border-blue-600 dark:border-blue-400 inline-block pb-1">
            SKILLS
          </h2>
        </div>

        <p className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-200 mb-6">
          My current technical toolkit includes:
        </p>

        {/* Categorized Technical Toolkit */}
        <div className="space-y-6">
          {Object.entries(categorizedSkills).map(([category, skillList]) => (
            <div key={category} className="space-y-2.5">
              <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2 sm:gap-2.5">
                {skillList.map((skill) => (
                  <span
                    key={skill}
                    className="px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-blue-50 dark:bg-slate-800/90 text-blue-900 dark:text-slate-100 border border-blue-200 dark:border-slate-700 transition-all hover:bg-blue-100 dark:hover:bg-slate-700 select-none shadow-2xs"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
