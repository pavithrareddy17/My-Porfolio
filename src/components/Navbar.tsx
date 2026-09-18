import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';

interface NavbarProps {
  isDark: boolean;
  onToggleTheme: () => void;
  onOpenResume?: () => void;
  onOpenContact?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ isDark, onToggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);

      const sections = ['about', 'skills', 'experience', 'projects', 'certifications', 'leadership', 'contact'];
      const scrollPos = window.scrollY + 160;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Leadership & Activities', href: '#leadership' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      id="main-navbar"
      className={`sticky top-0 left-0 right-0 z-40 transition-all duration-200 ${
        scrolled
          ? isDark
            ? 'bg-slate-900/95 border-b border-slate-800 shadow-md backdrop-blur-md py-3'
            : 'bg-white/95 border-b border-slate-200 shadow-xs backdrop-blur-md py-3'
          : isDark
            ? 'bg-slate-900 border-b border-slate-800/80 py-3.5'
            : 'bg-white border-b border-slate-100 py-3.5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Navigation components of the page - Name removed from header as requested */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                id={`nav-link-${link.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                className={`transition-colors py-1 text-xs lg:text-sm font-semibold tracking-wide ${
                  isActive
                    ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400'
                    : isDark
                      ? 'text-slate-200 hover:text-white'
                      : 'text-slate-700 hover:text-blue-600'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Mobile menu trigger on the left for mobile screens */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            id="mobile-nav-toggle"
            className={`p-2 rounded-lg transition-colors ${
              isDark ? 'text-slate-100 hover:bg-slate-800' : 'text-slate-700 hover:bg-slate-100'
            }`}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
          <span className="text-xs font-semibold text-slate-500 dark:text-slate-300 ml-2">Menu</span>
        </div>

        {/* Right side controls: Theme Toggle */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={onToggleTheme}
            id="theme-toggle-btn"
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
              isDark
                ? 'bg-slate-800 text-slate-100 hover:bg-slate-700 border border-slate-700 shadow-xs'
                : 'bg-slate-100 text-slate-800 hover:bg-slate-200 border border-slate-200 shadow-xs'
            }`}
            title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            aria-label="Toggle Theme"
          >
            {isDark ? (
              <>
                <Sun className="w-3.5 h-3.5 text-amber-300" />
                <span>Light Mode</span>
              </>
            ) : (
              <>
                <Moon className="w-3.5 h-3.5 text-blue-600" />
                <span>Dark Mode</span>
              </>
            )}
          </button>
        </div>

      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-menu"
          className={`md:hidden px-4 pt-3 pb-4 space-y-1 border-t transition-colors ${
            isDark ? 'bg-slate-900 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-800'
          }`}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              id={`mobile-link-${link.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-semibold rounded-md hover:bg-blue-50 dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-blue-400 text-slate-800 dark:text-slate-100"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};
