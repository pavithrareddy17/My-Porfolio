import React, { useState } from 'react';
import { Trophy, ArrowUpRight } from 'lucide-react';
import { projects } from '../data/portfolioData';
import { Project } from '../types/portfolio';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const categories = ['All', 'AI & GenAI', 'IoT & Healthcare'];

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory || (activeCategory === 'AI & GenAI' && p.category.includes('AI')));

  return (
    <section id="projects" className="py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading with blue underline accent */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
          <div>
            <h2 className="text-lg sm:text-xl font-bold uppercase tracking-wider text-slate-900 dark:text-white border-b-2 border-blue-600 dark:border-blue-400 inline-block pb-1">
              PROJECTS
            </h2>
          </div>

          {/* Minimal Category Filter */}
          <div className="flex flex-wrap items-center gap-1.5">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1 rounded-full text-xs font-semibold transition-all ${
                  activeCategory === cat
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Responsive Grid of the exact projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch">
          {filteredProjects.map((proj, idx) => {
            const isFeatured = proj.featured || idx === 0;

            return (
              <div
                key={proj.id}
                id={`project-card-${proj.id}`}
                className={`rounded-2xl p-5 sm:p-6 transition-all flex flex-col justify-between border ${
                  isFeatured
                    ? 'bg-blue-50/70 dark:bg-slate-900 border-blue-200 dark:border-blue-700/60 shadow-xs'
                    : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 shadow-2xs hover:border-blue-300 dark:hover:border-blue-600'
                }`}
              >
                <div className="space-y-3">
                  {/* Category & Badges */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wider">
                      {proj.category}
                    </span>
                    {proj.award && (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 dark:bg-amber-950/80 text-amber-900 dark:text-amber-200 border border-amber-300 dark:border-amber-700">
                        <Trophy className="w-3 h-3 text-amber-600 dark:text-amber-400" />
                        {proj.award}
                      </span>
                    )}
                  </div>

                  {/* Title in bold royal blue */}
                  <h3 
                    onClick={() => onSelectProject(proj)}
                    className="text-base font-bold text-blue-600 dark:text-blue-400 hover:underline cursor-pointer leading-snug"
                  >
                    {proj.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-100 leading-relaxed text-justify">
                    {proj.shortDescription}
                  </p>
                </div>

                {/* Tech Tags & View Details Link (Demo part removed as requested) */}
                <div className="space-y-3 pt-4 mt-3 border-t border-slate-200/80 dark:border-slate-800">
                  <div className="flex flex-wrap gap-1.5">
                    {proj.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded text-[11px] font-medium bg-white/90 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                    {proj.technologies.length > 4 && (
                      <span className="px-1.5 py-0.5 rounded text-[10px] text-slate-500 dark:text-slate-300">
                        +{proj.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <button
                      onClick={() => onSelectProject(proj)}
                      className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-1 transition-colors"
                    >
                      <span>View Architecture Details</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
