import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { personalInfo } from '../data/portfolioData';

export default function Navbar({ currentRoute, navigateTo }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', href: '#about', sectionId: 'about' },
    { label: 'Work', href: '#work', sectionId: 'work' },
    { label: 'Experience', href: '#experience', sectionId: 'experience' },
    { label: 'Skills', href: '#skills', sectionId: 'skills' },
    { label: 'Contact', href: '#contact', sectionId: 'contact' },
  ];

  const handleNavClick = (e, item) => {
    e.preventDefault();
    setIsMenuOpen(false);

    if (currentRoute !== '/') {
      navigateTo('/');
      setTimeout(() => {
        const element = document.getElementById(item.sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(item.sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-theme-surfaceCream/90 backdrop-blur-md border-b border-theme-border/60 shadow-soft'
          : 'py-5 bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <a
          href="#/"
          onClick={(e) => {
            e.preventDefault();
            navigateTo('/');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="font-serif font-bold text-xl md:text-2xl text-theme-textPrimary hover:opacity-85 transition-opacity focus:outline-none tracking-[0.15em]"
        >
          PORTFOLIO
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <ul className="flex space-x-8 text-xs font-sans font-medium text-theme-textPrimary tracking-wider">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item)}
                  className="hover:text-theme-accentDark transition-colors relative py-1 focus:outline-none focus:text-theme-accentDark"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center space-x-4 border-l border-theme-border/80 pl-6">
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-theme-highlight text-[#2B2420] font-sans text-xs font-semibold px-4 py-1.5 rounded-full hover:scale-102 hover:opacity-90 active:scale-98 transition-all duration-200"
            >
              Resume
            </a>
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Navbar Controls */}
        <div className="md:hidden flex items-center space-x-3">
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-theme-highlight text-[#2B2420] font-sans text-xs font-semibold px-3 py-1 rounded-full hover:opacity-90 transition-opacity"
          >
            Resume
          </a>
          <ThemeToggle />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-theme-textPrimary hover:text-theme-accentDark transition-colors focus:outline-none"
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={`md:hidden fixed top-[60px] left-0 w-full bg-theme-surfaceCream border-b border-theme-border/80 transition-all duration-300 z-30 shadow-soft ${
          isMenuOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible'
        }`}
      >
        <ul className="px-6 py-6 space-y-4 text-sm font-sans font-medium text-center tracking-wider">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                onClick={(e) => handleNavClick(e, item)}
                className="block py-2 text-theme-textPrimary hover:text-theme-accentDark transition-colors focus:outline-none"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
