import React, { useEffect, useState } from 'react';
import { ArrowLeft, ExternalLink, ImagePlus, ChevronDown, AlertCircle } from 'lucide-react';
import { Github } from './BrandIcons';
import { projects } from '../data/portfolioData';

export default function ProjectCaseStudy({ projectId, navigateTo }) {
  const project = projects.find((p) => p.id === projectId);
  const [imageError, setImageError] = useState(false);
  const [showTechnicalDetails, setShowTechnicalDetails] = useState(false);

  useEffect(() => {
    // Scroll to top of case study when entering
    window.scrollTo(0, 0);

    // Accessibility keyboard listener (ESC to go back)
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        navigateTo('/');
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [projectId, navigateTo]);

  if (!project) {
    return (
      <div className="pt-40 pb-24 text-center max-w-xl mx-auto px-6">
        <AlertCircle className="w-8 h-8 text-theme-accent mx-auto mb-4" />
        <p className="font-sans text-sm text-theme-textBlush">Project "{projectId}" could not be found.</p>
        <button
          onClick={() => navigateTo('/')}
          className="mt-6 rounded-full border border-theme-border px-5 py-2.5 hover:border-theme-accent text-theme-textPrimary font-sans text-xs font-semibold uppercase tracking-widest transition-colors"
        >
          &larr; Return to main view
        </button>
      </div>
    );
  }

  const handleBackClick = (e) => {
    e.preventDefault();
    navigateTo('/');
  };

  // A simple, editorial "flow" summary for the collapsible Technical Details section —
  // no architecture diagram, just a plain-language line of how the pieces connect.
  const architectureFlow = project.caseStudy?.architecture?.nodes
    ?.map((n) => n.label)
    .join('  →  ');

  return (
    <section className="pt-28 pb-24 border-b border-theme-border/30">
      <div className="max-w-4xl mx-auto px-6">

        {/* Back Link */}
        <div className="mb-10">
          <a
            href="#/"
            onClick={handleBackClick}
            className="inline-flex items-center space-x-2 font-sans text-xs font-bold text-theme-textPrimary uppercase tracking-widest hover:text-theme-accentDark transition-colors focus:outline-none"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Work</span>
          </a>
        </div>

        {/* Case Study Header */}
        <header className="space-y-4 mb-10">
          <div className="font-sans text-xs font-semibold text-theme-accentDark uppercase tracking-widest">
            {project.number} / {project.category}
          </div>
          <h1 className="font-serif italic text-4xl md:text-5xl text-theme-textPrimary">
            {project.title}
          </h1>

          {project.ownership && (
            <span className="block font-sans text-xs text-theme-textSecondary italic -mt-2">
              {project.ownership}
            </span>
          )}

          {/* Quick Info Bar */}
          {(project.github || project.liveDemo) && !project.isPlaceholder && (
            <div className="flex flex-wrap items-center gap-6 pt-4 text-xs font-sans font-semibold tracking-widest text-theme-textSecondary uppercase border-y border-theme-border/50 py-4 my-6">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1 text-theme-textPrimary hover:text-theme-accentDark transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub Repository</span>
                </a>
              )}
              {project.liveDemo && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1 text-theme-textPrimary hover:text-theme-accentDark transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Live Demo</span>
                </a>
              )}
            </div>
          )}
        </header>

        {/* Hero Visual */}
        <div className="w-full aspect-video rounded-2xl bg-theme-surfaceCream border border-theme-border/40 relative overflow-hidden mb-12 flex justify-center items-center">
          {!imageError && !project.isPlaceholder ? (
            <img
              src={`${project.assetsDir}/hero.png`}
              alt={`${project.title} Case Study Cover`}
              onError={() => setImageError(true)}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="flex flex-col items-center gap-3 text-center px-6">
              <ImagePlus className="w-8 h-8 stroke-[1.3] text-theme-accent/50" />
              <span className="font-serif italic text-lg text-theme-textSecondary">
                {project.isPlaceholder ? 'Visuals coming soon' : 'Image coming soon'}
              </span>
            </div>
          )}
        </div>

        {project.isPlaceholder ? (
          /* Minimal, honest placeholder state for in-progress projects */
          <div className="text-center max-w-lg mx-auto py-8 space-y-3">
            <p className="font-serif italic text-xl text-theme-textPrimary">
              This project is currently being upgraded.
            </p>
            <p className="font-sans text-sm text-theme-textBlush leading-relaxed">
              Full details — tech stack, features, and a walkthrough of my contribution — will be added here soon.
            </p>
          </div>
        ) : (
          /* Real Project Case Study (WasteZero & SupportIQ) */
          <div className="space-y-10">

            {/* Overview */}
            <div>
              <h2 className="font-serif italic text-xl text-theme-textPrimary mb-3">
                Overview
              </h2>
              <p className="font-sans text-sm md:text-base text-theme-textBlush leading-relaxed max-w-2xl">
                {project.caseStudy.overview}
              </p>
            </div>

            {/* Core Features */}
            <div>
              <h2 className="font-serif italic text-xl text-theme-textPrimary mb-4">
                Core Features
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2.5">
                {project.features.map((f, i) => (
                  <li key={i} className="flex items-center space-x-2 font-sans text-sm text-theme-textBlush">
                    <span className="w-1.5 h-1.5 bg-theme-accent rounded-full flex-shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Supporting Screenshots Gallery */}
            {project.caseStudy.gallery?.map((item, i) => (
              <div key={i}>
                {item.sectionTitle && (
                  <div className="mb-4">
                    <h2 className="font-serif italic text-xl text-theme-textPrimary mb-2">
                      {item.sectionTitle}
                    </h2>
                    {item.sectionText && (
                      <p className="font-sans text-sm md:text-base text-theme-textBlush leading-relaxed max-w-2xl">
                        {item.sectionText}
                      </p>
                    )}
                  </div>
                )}
                <figure className="space-y-3">
                  <div className="relative rounded-2xl overflow-hidden border border-theme-border/50 shadow-soft group">
                    <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-theme-accent/0 group-hover:ring-theme-accent/25 shadow-[0_0_0_rgba(217,138,150,0)] group-hover:shadow-[0_0_24px_rgba(217,138,150,0.18)] transition-all duration-500 pointer-events-none z-10" />
                    <img
                      src={`${project.assetsDir}/${item.image}`}
                      alt={item.alt}
                      className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                      loading="lazy"
                    />
                  </div>
                  <figcaption className="text-center font-sans text-xs text-theme-textSecondary uppercase tracking-widest">
                    {item.caption}
                  </figcaption>
                </figure>
              </div>
            ))}

            {/* Tech Stack */}
            <div>
              <h2 className="font-serif italic text-xl text-theme-textPrimary mb-4">
                Tech Stack
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="font-sans text-xs text-theme-textSecondary border border-theme-border/60 rounded-full px-3 py-1"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* My Contribution */}
            <div>
              <h2 className="font-serif italic text-xl text-theme-textPrimary mb-3">
                My Contribution
              </h2>
              <p className="font-sans text-sm md:text-base text-theme-textBlush leading-relaxed max-w-2xl">
                {project.caseStudy.myContribution}
              </p>
            </div>

            {/* Optional Technical Details — collapsed by default */}
            {architectureFlow && (
              <div className="border-t border-theme-border/40 pt-8">
                <button
                  onClick={() => setShowTechnicalDetails((v) => !v)}
                  className="flex items-center justify-between w-full text-left group focus:outline-none"
                  aria-expanded={showTechnicalDetails}
                >
                  <span className="font-sans text-xs font-bold text-theme-textPrimary uppercase tracking-widest">
                    Technical Details
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-theme-textSecondary transition-transform duration-300 ${
                      showTechnicalDetails ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {showTechnicalDetails && (
                  <div className="pt-5 font-sans text-sm text-theme-textBlush leading-relaxed space-y-3">
                    <p>{architectureFlow}</p>
                    {project.caseStudy?.technicalNotes?.length > 0 && (
                      <ul className="space-y-1.5 pt-1">
                        {project.caseStudy.technicalNotes.map((note, i) => (
                          <li key={i} className="flex items-start space-x-2">
                            <span className="w-1.5 h-1.5 bg-theme-accent rounded-full mt-1.5 flex-shrink-0" />
                            <span>{note}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}
              </div>
            )}

          </div>
        )}

        {/* Back Link Footer */}
        <div className="mt-16 pt-8 border-t border-theme-border/30">
          <a
            href="#/"
            onClick={handleBackClick}
            className="inline-flex items-center space-x-2 font-sans text-xs font-bold text-theme-textPrimary uppercase tracking-widest hover:text-theme-accentDark transition-colors focus:outline-none"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Work</span>
          </a>
        </div>

      </div>
    </section>
  );
}
