import React, { useState } from 'react';
import { ArrowRight, ExternalLink, ImagePlus } from 'lucide-react';
import { Github } from './BrandIcons';

export default function ProjectCard({ project, layout, navigateTo }) {
  const [imageError, setImageError] = useState(false);
  const heroImagePath = `${project.assetsDir}/hero.png`;

  // Dynamic visual container styling based on layout
  const containerClasses = {
    flagship: "flex flex-col lg:grid lg:grid-cols-12 gap-8 items-stretch rounded-2xl border border-theme-border/70 p-6 md:p-8 bg-theme-surfaceWhite hover:border-theme-accent/50 hover:shadow-softHover hover:-translate-y-1 transition-all duration-300 group",
    secondary: "flex flex-col lg:grid lg:grid-cols-12 gap-8 items-stretch rounded-2xl border border-theme-border/70 p-6 md:p-8 bg-theme-surfaceWhite hover:border-theme-accent/50 hover:shadow-softHover hover:-translate-y-1 transition-all duration-300 group",
    substantial: "flex flex-col rounded-2xl border border-theme-border/70 p-6 bg-theme-surfaceWhite hover:border-theme-accent/50 hover:shadow-softHover hover:-translate-y-1 transition-all duration-300 group"
  }[layout];

  const imageContainerClasses = {
    flagship: "lg:col-span-7 h-64 md:h-80 lg:h-full min-h-[260px] relative overflow-hidden rounded-xl bg-theme-surfaceCream border border-theme-border/40",
    secondary: "lg:col-span-5 h-64 md:h-80 lg:h-full min-h-[260px] relative overflow-hidden rounded-xl bg-theme-surfaceCream border border-theme-border/40",
    substantial: "w-full h-48 sm:h-56 relative overflow-hidden rounded-xl bg-theme-surfaceCream border border-theme-border/40 mb-6"
  }[layout];

  const contentContainerClasses = {
    flagship: "lg:col-span-5 flex flex-col justify-between space-y-6",
    secondary: "lg:col-span-7 flex flex-col justify-between space-y-6",
    substantial: "flex flex-col justify-between flex-grow space-y-4"
  }[layout];

  const handleCardClick = (e) => {
    // Avoid triggering card navigate if they clicked external links
    if (e.target.closest('a') && e.target.closest('a').getAttribute('target') === '_blank') {
      return;
    }
    e.preventDefault();
    navigateTo(`/work/${project.id}`);
  };

  return (
    <article
      onClick={handleCardClick}
      className={`${containerClasses} cursor-pointer`}
    >
      {/* Visual Image / Placeholder */}
      <div className={`${imageContainerClasses} relative`}>
        {/* subtle rose glow ring on hover, sits behind the placeholder content */}
        <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-theme-accent/0 group-hover:ring-theme-accent/25 shadow-[0_0_0_rgba(217,138,150,0)] group-hover:shadow-[0_0_24px_rgba(217,138,150,0.18)] transition-all duration-500 pointer-events-none z-10" />

        {!imageError && project.github ? (
          <img
            src={heroImagePath}
            alt={`${project.title} Preview`}
            onError={() => setImageError(true)}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            loading="lazy"
          />
        ) : (
          /* Clean editorial "coming soon" placeholder — no debug/dev-console styling */
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-center px-6">
            <ImagePlus className="w-6 h-6 stroke-[1.3] text-theme-accent/50 transition-transform duration-500 group-hover:scale-110" />
            <span className="font-serif italic text-sm text-theme-textSecondary">
              {project.isPlaceholder ? 'Visuals coming soon' : 'Image coming soon'}
            </span>
          </div>
        )}
      </div>

      {/* Project Content */}
      <div className={contentContainerClasses}>
        <div className="space-y-4">
          <span className="font-sans text-[10px] font-semibold text-theme-accentDark uppercase tracking-widest">
            {project.number} / {project.category}
          </span>

          <h3 className="font-serif italic text-2xl md:text-3xl text-theme-textPrimary">
            {project.title}
          </h3>

          {project.ownership && (
            <span className="block font-sans text-[10px] text-theme-textSecondary italic -mt-2">
              {project.ownership}
            </span>
          )}

          <p className="font-sans text-sm text-theme-textBlush leading-relaxed max-w-xl">
            {project.description}
          </p>

          {/* Technology Tags */}
          <div className="flex flex-wrap gap-2 pt-2">
            {project.tech.map((tag) => (
              <span
                key={tag}
                className="font-sans text-[10px] tracking-wide text-theme-textSecondary border border-theme-border/60 rounded-full px-2.5 py-0.5"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Action Links */}
        <div className="flex items-center justify-between pt-4 border-t border-theme-border/40">
          <button
            onClick={(e) => {
              e.preventDefault();
              navigateTo(`/work/${project.id}`);
            }}
            className="flex items-center space-x-2 font-sans text-[11px] font-bold text-theme-textPrimary uppercase tracking-widest group/btn focus:outline-none"
          >
            <span>View Case Study</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-1" />
          </button>

          {project.github && !project.isPlaceholder && (
            <div className="flex space-x-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-theme-textSecondary hover:text-theme-accentDark transition-colors p-1"
                aria-label={`${project.title} GitHub repository`}
              >
                <Github className="w-4 h-4" />
              </a>
              {project.liveDemo && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-theme-textSecondary hover:text-theme-accentDark transition-colors p-1"
                  aria-label={`${project.title} live demo`}
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
