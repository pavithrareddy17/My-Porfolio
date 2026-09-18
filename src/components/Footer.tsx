import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer id="main-footer" className="py-8 border-t border-slate-100 dark:border-slate-800 text-center text-xs text-slate-500 dark:text-slate-400">
      <div className="max-w-4xl mx-auto px-4">
        <p>© {new Date().getFullYear()} VELURU PAVITHRA. All rights reserved.</p>
      </div>
    </footer>
  );
};
