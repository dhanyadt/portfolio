import React from 'react';
import { ArrowRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  const scrollToWork = (e) => {
    e.preventDefault();
    const element = document.getElementById('work');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = (e) => {
    e.preventDefault();
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Subtle soft organic blush radial gradient highlight in background */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] rounded-full bg-theme-accent/15 blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-10 left-10 w-[250px] h-[250px] rounded-full bg-theme-highlight/20 blur-[80px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column - Typography-first presentation */}
        <div className="lg:col-span-7 space-y-6">
          {/* Availability Pill */}
          <div className="inline-flex items-center space-x-2 border border-theme-accentDark/20 bg-theme-surfaceCream/65 px-3.5 py-1 rounded-full">
            <span className="w-1.5 h-1.5 bg-theme-accentDark rounded-full animate-pulse" />
            <span className="font-sans text-[10px] font-bold tracking-wider text-theme-accentDark uppercase">
              Open to Software Engineering Opportunities
            </span>
          </div>

          <div className="space-y-4">
            <h1 className="font-serif italic font-bold text-4xl md:text-5xl text-theme-accentDark">
              Dhanya D T
            </h1>
            <p className="font-serif font-bold text-3xl md:text-5xl lg:text-6xl text-theme-textPrimary leading-[1.08] tracking-tight">
              I build software, break things, and figure out how to fix them.
            </p>
            <p className="font-sans text-sm md:text-base text-theme-textBlush leading-relaxed max-w-xl pt-2">
              {personalInfo.description}
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#work"
              onClick={scrollToWork}
              className="flex items-center space-x-2 bg-theme-accentDark hover:bg-theme-accentDark/90 text-[#FFFDFB] font-sans text-xs font-semibold px-6 py-3.5 rounded-full transition-all duration-200 shadow-soft hover:shadow-softHover hover:-translate-y-0.5 group focus:outline-none"
            >
              <span>View My Work</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              onClick={scrollToContact}
              className="flex items-center space-x-2 bg-theme-surfaceCream hover:bg-theme-surfaceWhite text-theme-textPrimary font-sans text-xs font-semibold px-6 py-3.5 rounded-full border border-theme-border/60 transition-all duration-200 shadow-soft hover:shadow-softHover hover:-translate-y-0.5 group focus:outline-none"
            >
              <span>Get In Touch</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        {/* Right Column - Premium Minimal Editorial Info Card */}
        <div className="lg:col-span-5">
          <div className="bg-theme-surfaceWhite border border-theme-border/60 rounded-2xl p-7 md:p-8 shadow-soft space-y-5 max-w-sm lg:ml-auto">

            {/* focus block */}
            <div className="space-y-1.5">
              <span className="font-sans text-[9px] font-bold text-theme-textSecondary uppercase tracking-widest block">
                Focus
              </span>
              <span className="font-serif italic text-lg text-theme-textPrimary">
                Frontend · Backend · APIs
              </span>
            </div>

            {/* details grid */}
            <div className="grid grid-cols-2 gap-4 pt-5 border-t border-theme-border/60 font-sans text-[10px] uppercase tracking-wider text-theme-textBlush">
              <div>
                <span className="text-[9px] font-bold text-theme-textSecondary block mb-0.5">Based In</span>
                <span className="font-medium text-theme-textPrimary normal-case">Bengaluru, India</span>
              </div>
              <div>
                <span className="text-[9px] font-bold text-theme-textSecondary block mb-0.5">Graduating</span>
                <span className="font-medium text-theme-textPrimary normal-case">2026</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </header>
  );
}
