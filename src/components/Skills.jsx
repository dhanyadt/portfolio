import React from 'react';
import { skills } from '../data/portfolioData';

export default function Skills() {
  return (
    <section id="skills" className="py-20 border-b border-theme-border/30">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <div className="font-sans text-xs font-semibold text-theme-accentDark uppercase tracking-widest">
            04 / Skills
          </div>
          <h2 className="font-serif italic text-3xl md:text-4xl text-theme-textPrimary">
            Tools I work with.
          </h2>
        </div>

        {/* Grouped Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="rounded-2xl border border-theme-border/60 p-6 bg-theme-surfaceWhite flex flex-col space-y-4"
            >
              <h3 className="font-sans text-[10px] font-bold tracking-widest text-theme-accentDark uppercase border-b border-theme-border/50 pb-2">
                {category}
              </h3>

              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="font-sans text-[11px] text-theme-textPrimary border border-theme-border/70 rounded-full px-2.5 py-1 hover:border-theme-accent hover:text-theme-accentDark transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
