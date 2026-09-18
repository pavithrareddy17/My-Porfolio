import React from 'react';
import { ExternalLink, Trophy, Award } from 'lucide-react';
import { leadershipAndAchievements } from '../data/portfolioData';

export const LeadershipSection: React.FC = () => {
  return (
    <section id="leadership" className="py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading with blue underline accent */}
        <div className="mb-6">
          <h2 className="text-lg sm:text-xl font-bold uppercase tracking-wider text-slate-900 dark:text-white border-b-2 border-blue-600 dark:border-blue-400 inline-block pb-1">
            LEADERSHIP & ACHIEVEMENTS
          </h2>
        </div>

        {/* Minimal Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {leadershipAndAchievements.map((item) => (
            <div
              key={item.id}
              className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-2.5 hover:border-blue-300 dark:hover:border-blue-600 transition-colors flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-blue-600 dark:text-blue-400">
                    {item.role}
                  </span>
                  <span className="text-slate-500 dark:text-slate-400 font-medium">
                    {item.period}
                  </span>
                </div>

                <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                  {item.title}
                </h3>

                <ul className="space-y-1.5 text-xs text-slate-800 dark:text-slate-100 leading-relaxed pt-1">
                  {item.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="text-blue-600 dark:text-blue-400 font-bold">•</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {item.credentialUrl && (
                <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
                  <a
                    href={item.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    <span>Credly Verified Badge</span>
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
