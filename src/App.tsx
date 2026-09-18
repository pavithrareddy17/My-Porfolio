import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ExperienceSection } from './components/ExperienceSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { CertificationsSection } from './components/CertificationsSection';
import { LeadershipSection } from './components/LeadershipSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingResumeWidget } from './components/FloatingResumeWidget';
import { ProjectModal } from './components/ProjectModal';
import { ResumeModal } from './components/ResumeModal';
import { Project } from './types/portfolio';

export default function App() {
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme_preference');
      if (saved) return saved === 'dark';
    }
    return false;
  });

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [resumeOpen, setResumeOpen] = useState<boolean>(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme_preference', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme_preference', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  const handleOpenContact = () => {
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`min-h-screen ${isDark ? 'dark bg-slate-950 text-slate-100' : 'bg-[#FAFAFA] text-slate-900'} flex flex-col font-sans transition-colors duration-200 selection:bg-blue-600 selection:text-white`}>
      {/* Top Navigation: Shows only page components, name removed */}
      <Navbar 
        onOpenResume={() => setResumeOpen(true)} 
        onOpenContact={handleOpenContact}
        isDark={isDark}
        onToggleTheme={toggleTheme}
      />

      {/* Main Sections */}
      <main className="flex-grow">
        <Hero 
          isDark={isDark}
          onToggleTheme={toggleTheme}
        />
        
        <AboutSection />
        
        <ExperienceSection />
        
        <SkillsSection />
        
        <ProjectsSection 
          onSelectProject={(project) => setSelectedProject(project)}
        />
        
        <CertificationsSection />
        
        <LeadershipSection />
        
        <ContactSection />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Floating Resume Preview Widget (bottom right) */}
      <FloatingResumeWidget onOpenResume={() => setResumeOpen(true)} />

      {/* Project Details Modal */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />

      {/* Resume Document Modal */}
      <ResumeModal 
        isOpen={resumeOpen} 
        onClose={() => setResumeOpen(false)} 
      />
    </div>
  );
}
