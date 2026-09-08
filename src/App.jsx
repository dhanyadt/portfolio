import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectSection from './components/ProjectSection';
import ProjectCaseStudy from './components/ProjectCaseStudy';
import Experience from './components/Experience';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState(() => {
    // Parse the hash on initial page load
    const hash = window.location.hash ? window.location.hash.replace(/^#/, '') : '/';
    return hash;
  });

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash ? window.location.hash.replace(/^#/, '') : '/';
      setCurrentRoute(hash);
      
      // Ensure page scrolls to top on route change (e.g. entering a case study)
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (route) => {
    // Make sure we prefix route with hash symbol
    window.location.hash = route === '/' ? '/' : route;
  };

  // Determine which view to render based on the hash path
  const isCaseStudyRoute = currentRoute.startsWith('/work/');
  const caseStudyId = isCaseStudyRoute ? currentRoute.replace('/work/', '') : null;

  return (
    <div className="min-h-screen flex flex-col justify-between selection:bg-theme-accent/20">
      {/* Navigation Layer */}
      <Navbar currentRoute={currentRoute} navigateTo={navigateTo} />

      {/* Main View Router */}
      <main className="flex-grow">
        {isCaseStudyRoute && caseStudyId ? (
          <ProjectCaseStudy projectId={caseStudyId} navigateTo={navigateTo} />
        ) : (
          <>
            <Hero />
            <About />
            <ProjectSection navigateTo={navigateTo} />
            <Experience />
            <Skills />
            <Contact />
          </>
        )}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
