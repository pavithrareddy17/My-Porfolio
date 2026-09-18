import React from 'react';
import { FileText, Eye } from 'lucide-react';

interface FloatingResumeWidgetProps {
  onOpenResume: () => void;
}

export const FloatingResumeWidget: React.FC<FloatingResumeWidgetProps> = ({ onOpenResume }) => {
  return (
    <div 
      id="floating-resume-widget"
      className="fixed bottom-6 right-6 z-30 group"
    >
      <button
        onClick={onOpenResume}
        className="flex items-center gap-2 p-2 sm:p-2.5 rounded-xl bg-white dark:bg-slate-900 border-2 border-blue-600/80 hover:border-blue-600 text-slate-800 dark:text-slate-100 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-0.5"
        title="View Full Curriculum Vitae"
      >
        {/* Miniature Document Preview Icon */}
        <div className="w-8 h-10 rounded border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 p-1 flex flex-col justify-between">
          <div className="space-y-1">
            <div className="h-1 w-5 bg-blue-600 rounded-full"></div>
            <div className="h-0.5 w-4 bg-slate-400 rounded-full"></div>
            <div className="h-0.5 w-5 bg-slate-300 dark:bg-slate-600 rounded-full"></div>
          </div>
          <div className="h-0.5 w-3 bg-blue-400 rounded-full self-end"></div>
        </div>

        <div className="text-left pr-1 hidden sm:block">
          <div className="text-[11px] font-bold text-blue-600 dark:text-blue-400 flex items-center gap-1">
            <span>RESUME</span>
            <Eye className="w-3 h-3" />
          </div>
          <div className="text-[10px] text-slate-500 dark:text-slate-400">
            Click to View / PDF
          </div>
        </div>
      </button>
    </div>
  );
};
