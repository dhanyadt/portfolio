import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(() => {
    // Respect a previously saved user choice; otherwise always start in light mode.
    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    return false;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('portfolio-theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('portfolio-theme', 'light');
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="p-2 rounded-full hover:bg-theme-surfaceCream transition-colors border border-transparent hover:border-theme-border text-theme-textPrimary focus:outline-none focus:ring-2 focus:ring-theme-accent"
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      {isDark ? (
        <Sun className="w-4 h-4 text-theme-accent transition-transform duration-300 hover:rotate-45" />
      ) : (
        <Moon className="w-4 h-4 text-theme-accent transition-transform duration-300 hover:-rotate-12" />
      )}
    </button>
  );
}
