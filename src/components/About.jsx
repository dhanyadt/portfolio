import React from 'react';
import { education } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-20 md:py-24 border-b border-theme-border/30">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Header */}
        <div className="max-w-2xl space-y-4 mb-14">
          <div className="font-sans text-xs font-semibold text-theme-accentDark uppercase tracking-widest">
            01 / About
          </div>
          <h2 className="font-serif italic text-3xl md:text-4xl text-theme-textPrimary">
            A little about me.
          </h2>
        </div>

        {/* About Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">

          {/* Bio Text */}
          <div className="lg:col-span-7 space-y-5 font-sans text-sm md:text-base text-theme-textBlush leading-relaxed max-w-xl">
            <p>
              I'm a recent Computer Science Engineering graduate with a specialization in Cybersecurity,
              interested in full-stack development, backend systems, and building useful software.
            </p>
            <p>
              I enjoy working across the stack — from building APIs and working with databases to
              connecting everything through a frontend that feels right. My cybersecurity background
              also shapes how I think about building software with security in mind.
            </p>
          </div>

          {/* Education Card */}
          <div className="lg:col-span-5">
            <div className="bg-theme-surfaceWhite border border-theme-border/60 rounded-2xl p-7 md:p-8 shadow-soft max-w-sm lg:ml-auto space-y-4">
              <span className="font-sans text-[9px] font-bold text-theme-textSecondary uppercase tracking-widest block">
                Education
              </span>

              <div className="space-y-1.5">
                <div className="font-serif italic text-lg text-theme-textPrimary leading-snug">
                  {education.degree}
                </div>
                <div className="font-sans text-xs font-semibold text-theme-accentDark uppercase tracking-wider">
                  Specialization: {education.specialization}
                </div>
              </div>

              <div className="pt-4 border-t border-theme-border/60 font-sans text-sm text-theme-textBlush space-y-0.5">
                <div className="font-medium text-theme-textPrimary">{education.institution}</div>
                <div>Class of {education.graduation}</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
