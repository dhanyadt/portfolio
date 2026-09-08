import React from 'react';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  return (
    <section id="contact" className="py-24 border-b border-theme-border/30">
      <div className="max-w-6xl mx-auto px-6 text-center space-y-8">

        {/* Section Header */}
        <div className="space-y-4 max-w-2xl mx-auto">
          <div className="font-sans text-xs font-semibold text-theme-accentDark uppercase tracking-widest">
            05 / Let's Connect
          </div>
          
          <p className="font-sans text-sm md:text-base text-theme-textBlush leading-relaxed max-w-md mx-auto pt-2">
            I'm currently open to software engineering and full-stack development opportunities.
          </p>
        </div>

        {/* Contact Action Links */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-6">
          <a
            href={personalInfo.socials.email}
            className="flex items-center space-x-2 rounded-full border border-theme-border hover:border-theme-accent bg-theme-surfaceWhite text-theme-textPrimary font-sans text-xs font-bold uppercase tracking-widest px-7 py-3.5 transition-all duration-200 hover:shadow-soft group focus:outline-none"
          >
            <span>Email</span>
            <span className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
          </a>
          <a
            href={personalInfo.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 rounded-full border border-theme-border hover:border-theme-accent bg-theme-surfaceWhite text-theme-textPrimary font-sans text-xs font-bold uppercase tracking-widest px-7 py-3.5 transition-all duration-200 hover:shadow-soft group focus:outline-none"
          >
            <span>LinkedIn</span>
            <span className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
          </a>
          <a
            href={personalInfo.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 rounded-full border border-theme-border hover:border-theme-accent bg-theme-surfaceWhite text-theme-textPrimary font-sans text-xs font-bold uppercase tracking-widest px-7 py-3.5 transition-all duration-200 hover:shadow-soft group focus:outline-none"
          >
            <span>GitHub</span>
            <span className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
          </a>
        </div>

      </div>
    </section>
  );
}
