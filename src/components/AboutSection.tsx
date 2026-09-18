import React from 'react';
import { personalInfo } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading with blue underline accent matching Screenshot */}
        <div className="mb-6">
          <h2 className="text-lg sm:text-xl font-bold uppercase tracking-wider text-slate-900 dark:text-white border-b-2 border-blue-600 dark:border-blue-400 inline-block pb-1">
            ABOUT ME
          </h2>
        </div>

        {/* Narrative Paragraphs - Exact User Text */}
        <div className="space-y-4 text-sm sm:text-base text-slate-800 dark:text-slate-100 leading-relaxed font-normal text-justify">
          {personalInfo.aboutParagraphs.map((paragraph, idx) => (
            <p key={idx} className="text-slate-800 dark:text-slate-100">
              {paragraph}
            </p>
          ))}
        </div>

      </div>
    </section>
  );
};
