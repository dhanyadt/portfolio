import React from 'react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  return (
    <footer className="py-12 bg-transparent border-t border-theme-border/40">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-6 text-center sm:text-left font-sans text-xs">
        
        {/* Left Side */}
        <div className="space-y-1">
          <div className="font-serif font-bold text-sm tracking-wide text-theme-textPrimary uppercase">
            {personalInfo.name}
          </div>
          <div className="text-[10px] text-theme-textBlush uppercase tracking-wider">
            Bengaluru · India
          </div>
        </div>

       

        {/* Right Side */}
        <div className="text-[10px] text-theme-textBlush font-medium">
          &copy; {new Date().getFullYear()} {personalInfo.name}
        </div>

      </div>
    </footer>
  );
}
