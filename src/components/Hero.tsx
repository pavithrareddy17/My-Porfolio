import React from 'react';
import { personalInfo } from '../data/portfolioData';

interface HeroProps {
  isDark: boolean;
  onToggleTheme: () => void;
}

export const Hero: React.FC<HeroProps> = () => {
  return (
    <section 
      id="hero" 
      className="relative bg-gradient-to-r from-[#4361EE] via-[#3550DC] to-[#2B3990] dark:from-[#293BA8] dark:via-[#1E297A] dark:to-[#0F172A] text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 text-center transition-colors duration-300"
    >
      {/* Centered Clean Minimal Name & Title Section */}
      <div className="max-w-3xl mx-auto space-y-3">
        <h1 className="text-2xl sm:text-4xl font-extrabold tracking-wider uppercase text-white drop-shadow-xs">
          {personalInfo.name}
        </h1>
        
        <div className="space-y-1">
          <p className="text-base sm:text-xl font-bold text-blue-100 tracking-wide">
            {personalInfo.title}
          </p>
          <p className="text-xs sm:text-sm font-medium text-blue-200 tracking-normal">
            {personalInfo.tagline}
          </p>
        </div>
      </div>
    </section>
  );
};
