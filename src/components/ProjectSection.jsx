import React from 'react';
import ProjectCard from './ProjectCard';
import { projects } from '../data/portfolioData';

export default function ProjectSection({ navigateTo }) {
  // Find project components based on visual hierarchy
  const flagshipProject = projects.find((p) => p.id === 'wastezero');
  const secondaryProject = projects.find((p) => p.id === 'supportiq');
  const otherProjects = projects.filter((p) => p.id !== 'wastezero' && p.id !== 'supportiq');

  return (
    <section id="work" className="py-20 border-b border-theme-border/30">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <div className="font-sans text-xs font-semibold text-theme-accentDark uppercase tracking-widest">
            02 / Selected Work
          </div>
          <h2 className="font-serif italic text-3xl md:text-4xl text-theme-textPrimary">
            Things I've built.
          </h2>
          <p className="font-sans text-sm md:text-base text-theme-textBlush leading-relaxed max-w-xl">
            A selection of projects where I worked across frontend, backend, APIs, databases, real-time systems and data visualization.
          </p>
        </div>

        {/* Projects Layout with Visual Hierarchy */}
        <div className="space-y-12">
          {/* Flagship Project - Full Width Horizontal */}
          {flagshipProject && (
            <div className="w-full">
              <ProjectCard 
                project={flagshipProject} 
                layout="flagship" 
                navigateTo={navigateTo} 
              />
            </div>
          )}

          {/* Secondary Featured Project */}
          {secondaryProject && (
            <div className="w-full">
              <ProjectCard 
                project={secondaryProject} 
                layout="secondary" 
                navigateTo={navigateTo} 
              />
            </div>
          )}

          {/* Grid of Substantial Projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {otherProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                layout="substantial"
                navigateTo={navigateTo}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
