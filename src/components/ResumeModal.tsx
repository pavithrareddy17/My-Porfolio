import React, { useState } from 'react';
import { 
  X, 
  Printer, 
  Copy, 
  Check, 
  Download, 
  Mail, 
  Phone, 
  Linkedin, 
  Github, 
  MapPin 
} from 'lucide-react';
import { personalInfo, experiences, projects, categorizedSkills, educationInfo, leadershipAndAchievements, certifications } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const resumePlainText = `
VELURU PAVITHRA
${personalInfo.title} — ${personalInfo.tagline}
Société Générale • ${personalInfo.department}
Email: ${personalInfo.email} | Phone: ${personalInfo.phone}
LinkedIn: ${personalInfo.linkedin} | GitHub: ${personalInfo.github}
Location: ${personalInfo.location}

ABOUT ME:
${personalInfo.aboutParagraphs.join('\n\n')}

WORK EXPERIENCE & INTERNSHIPS:
${experiences.map(e => `
${e.company} — ${e.role} (${e.period})
Location: ${e.location}
${e.responsibilities.map(r => `• ${r}`).join('\n')}
`).join('\n')}

TECHNICAL TOOLKIT:
${Object.entries(categorizedSkills).map(([cat, skills]) => `${cat}: ${skills.join(', ')}`).join('\n')}

PROJECTS:
${projects.map(p => `
${p.title}
${p.shortDescription}
Technologies: ${p.technologies.join(', ')}
`).join('\n')}

EDUCATION:
${educationInfo.degree}
${educationInfo.institution}, ${educationInfo.location} | CGPA: ${educationInfo.score}

CERTIFICATIONS:
${certifications.map(c => `• ${c.title} — ${c.issuer} (${c.issueDate})`).join('\n')}

LEADERSHIP & ACHIEVEMENTS:
${leadershipAndAchievements.map(l => `• ${l.title} — ${l.role} (${l.period})\n  ${l.highlights.join('\n  ')}`).join('\n')}
    `.trim();

    navigator.clipboard.writeText(resumePlainText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const resumePlainText = `
VELURU PAVITHRA
${personalInfo.title}
Société Générale • ${personalInfo.department}
Email: ${personalInfo.email} | Phone: ${personalInfo.phone}
LinkedIn: ${personalInfo.linkedin} | GitHub: ${personalInfo.github}
Location: ${personalInfo.location}

ABOUT ME:
${personalInfo.aboutParagraphs.join('\n\n')}

WORK EXPERIENCE & INTERNSHIPS:
${experiences.map(e => `
${e.company} — ${e.role} (${e.period}) | ${e.location}
${e.responsibilities.map(r => `  * ${r}`).join('\n')}
`).join('\n')}

TECHNICAL TOOLKIT:
${Object.entries(categorizedSkills).map(([cat, skills]) => `${cat}: ${skills.join(', ')}`).join('\n')}

PROJECTS:
${projects.map(p => `
${p.title}
${p.shortDescription}
Technologies: ${p.technologies.join(', ')}
`).join('\n')}

EDUCATION:
${educationInfo.degree}
${educationInfo.institution}, ${educationInfo.location} | CGPA: ${educationInfo.score}

CERTIFICATIONS:
${certifications.map(c => `* ${c.title} — ${c.issuer} (${c.issueDate})`).join('\n')}

LEADERSHIP & ACHIEVEMENTS:
${leadershipAndAchievements.map(l => `* ${l.title} — ${l.role} (${l.period})`).join('\n')}
    `.trim();

    const blob = new Blob([resumePlainText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Veluru_Pavithra_Resume.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div 
      id="resume-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div 
        id="resume-modal-container"
        className="relative w-full max-w-4xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/60">
          <div className="flex items-center gap-2">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
              Resume Preview
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              id="resume-copy-btn"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition-colors shadow-2xs"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy'}</span>
            </button>

            <button
              onClick={handleDownload}
              id="resume-download-btn"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-2xs"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download</span>
            </button>

            <button
              onClick={handlePrint}
              id="resume-print-btn"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition-colors shadow-2xs"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>

            <button
              onClick={onClose}
              id="resume-close-btn"
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors ml-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Formatted Resume Body */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-6 text-xs sm:text-sm text-slate-800 dark:text-slate-100 bg-white dark:bg-slate-900 leading-relaxed">
          
          {/* Header */}
          <div className="border-b border-slate-200 dark:border-slate-800 pb-4 space-y-1.5 text-center sm:text-left">
            <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              {personalInfo.name}
            </h1>
            <p className="text-xs sm:text-sm font-semibold text-blue-600 dark:text-blue-400">
              {personalInfo.title} • {personalInfo.currentCompany}
            </p>
            <p className="text-xs text-slate-600 dark:text-slate-300">
              {personalInfo.tagline}
            </p>
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 pt-2 text-xs text-slate-700 dark:text-slate-300 font-medium">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                {personalInfo.location}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                {personalInfo.email}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                {personalInfo.phone}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1 text-blue-600 dark:text-blue-400">
                <Linkedin className="w-3.5 h-3.5" />
                LinkedIn
              </span>
              <span>•</span>
              <span className="flex items-center gap-1 text-blue-600 dark:text-blue-400">
                <Github className="w-3.5 h-3.5" />
                GitHub
              </span>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider border-b border-slate-200 dark:border-slate-800 pb-1">
              About Me
            </h2>
            <div className="space-y-2 text-justify">
              {personalInfo.aboutParagraphs.map((p, idx) => (
                <p key={idx} className="text-slate-800 dark:text-slate-100">
                  {p}
                </p>
              ))}
            </div>
          </div>

          {/* Work Experience */}
          <div className="space-y-4">
            <h2 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider border-b border-slate-200 dark:border-slate-800 pb-1">
              Experience & Internships
            </h2>

            {experiences.map((exp) => (
              <div key={exp.id} className="space-y-1.5 border-l-2 border-blue-600 pl-3">
                <div className="flex flex-wrap items-center justify-between gap-1">
                  <span className="font-bold text-slate-900 dark:text-white text-sm">
                    {exp.role} — <span className="text-blue-600 dark:text-blue-400">{exp.company}</span>
                  </span>
                  <span className="text-slate-600 dark:text-slate-300 text-xs font-medium">
                    {exp.period} | {exp.location}
                  </span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-slate-800 dark:text-slate-100 text-xs">
                  {exp.responsibilities.map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Technical Toolkit */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider border-b border-slate-200 dark:border-slate-800 pb-1">
              Technical Toolkit
            </h2>
            <div className="space-y-1.5 text-xs">
              {Object.entries(categorizedSkills).map(([cat, skills]) => (
                <div key={cat}>
                  <strong className="text-slate-900 dark:text-white">{cat}:</strong>{' '}
                  <span className="text-slate-700 dark:text-slate-200">{skills.join(', ')}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider border-b border-slate-200 dark:border-slate-800 pb-1">
              Selected Projects
            </h2>
            <div className="space-y-3">
              {projects.map((proj) => (
                <div key={proj.id} className="border-l-2 border-slate-300 dark:border-slate-700 pl-3 space-y-1">
                  <div className="flex justify-between items-baseline">
                    <span className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm">{proj.title}</span>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400 font-semibold">{proj.category}</span>
                  </div>
                  <p className="text-slate-800 dark:text-slate-200 text-xs">{proj.shortDescription}</p>
                  <p className="text-[11px] text-slate-600 dark:text-slate-400">
                    <strong>Tech:</strong> {proj.technologies.join(', ')}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider border-b border-slate-200 dark:border-slate-800 pb-1">
              Education
            </h2>
            <div className="border-l-2 border-blue-600 pl-3 space-y-1">
              <div className="flex justify-between">
                <span className="font-bold text-slate-900 dark:text-white">{educationInfo.degree}</span>
                <span className="text-blue-600 dark:text-blue-400 font-bold">{educationInfo.score}</span>
              </div>
              <p className="text-slate-600 dark:text-slate-300 text-xs">{educationInfo.institution} • {educationInfo.location}</p>
              <p className="text-slate-800 dark:text-slate-200 text-xs">{educationInfo.highlights[0]}</p>
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider border-b border-slate-200 dark:border-slate-800 pb-1">
              Certifications
            </h2>
            <ul className="list-disc list-inside space-y-1 text-xs text-slate-800 dark:text-slate-200">
              {certifications.map(c => (
                <li key={c.id}>
                  <strong className="text-slate-900 dark:text-white">{c.title}</strong> — {c.issuer} ({c.issueDate})
                </li>
              ))}
            </ul>
          </div>

          {/* Leadership & Achievements */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider border-b border-slate-200 dark:border-slate-800 pb-1">
              Leadership & Achievements
            </h2>
            <ul className="list-disc list-inside space-y-1.5 text-xs text-slate-800 dark:text-slate-200">
              {leadershipAndAchievements.map(item => (
                <li key={item.id}>
                  <strong className="text-blue-600 dark:text-blue-400">{item.role}:</strong>{' '}
                  <span className="text-slate-900 dark:text-white font-medium">{item.title}</span> ({item.period})
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </div>
  );
};
