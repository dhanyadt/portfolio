import React from 'react';
import { experiences } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-20 border-b border-theme-border/30">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <div className="font-sans text-xs font-semibold text-theme-accentDark uppercase tracking-widest">
            03 / Experience
          </div>
          <h2 className="font-serif italic text-3xl md:text-4xl text-theme-textPrimary">
            Where I've worked.
          </h2>
        </div>

        {/* Timeline Layout */}
        <div className="max-w-4xl space-y-12">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="border-l-2 border-theme-border/60 pl-6 md:pl-8 relative ml-1"
            >
              {/* Timeline Indicator Dot */}
              <div className="absolute left-[-6px] top-1.5 w-2.5 h-2.5 rounded-full bg-theme-accent border-2 border-theme-bg" />

              {/* Content Stack */}
              <div className="space-y-4">
                <div className="font-sans text-xs font-semibold uppercase tracking-widest text-theme-textSecondary">
                  {exp.duration}
                </div>

                <div>
                  <h3 className="font-serif italic text-xl text-theme-textPrimary">
                    {exp.role}
                  </h3>
                  <div className="font-sans text-xs font-semibold uppercase tracking-wider text-theme-accentDark mt-1">
                    {exp.company}
                  </div>
                </div>

                <ul className="space-y-3 font-sans text-sm text-theme-textBlush list-none">
                  {exp.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <span className="w-1.5 h-1.5 bg-theme-accent rounded-full mt-2 flex-shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}