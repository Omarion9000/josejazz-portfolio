import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X, Piano } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';

const SECTIONS = ['home', 'about', 'songs', 'projects', 'promotional'] as const;

const Navbar: React.FC = () => {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
      const current = SECTIONS.find((id) => {
        const el = document.getElementById(id);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 120 && rect.bottom >= 120;
      });
      if (current) setActiveSection(current);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
  }, [isMobileMenuOpen]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    window.scrollTo({ top: el.offsetTop - 72, behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-ink-900/85 backdrop-blur-md border-b border-ink-700/50 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-5 md:px-8 flex items-center justify-between">
        <button
          onClick={() => scrollToSection('home')}
          className="flex items-center gap-2.5 group"
          aria-label="Jose Luis Barajas — home"
        >
          <Piano className="text-brass-400 transition-transform duration-500 group-hover:scale-110" size={22} />
          <span className="font-serif text-base md:text-lg tracking-wide text-bone">
            Jose Luis Barajas
          </span>
        </button>

        <nav className="hidden md:flex items-center gap-9">
          {SECTIONS.map((id) => (
            <a
              key={id}
              onClick={() => scrollToSection(id)}
              className={`nav-link ${activeSection === id ? 'active' : ''}`}
            >
              {t(`navigation.${id}`)}
            </a>
          ))}
          <span className="h-4 w-px bg-ink-700" aria-hidden="true" />
          <LanguageSwitcher />
        </nav>

        <div className="flex items-center gap-3 md:hidden">
          <LanguageSwitcher />
          <button
            onClick={() => setIsMobileMenuOpen((v) => !v)}
            className="text-bone hover:text-brass-300 transition-colors p-1"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <nav className="flex flex-col items-center gap-2">
          {SECTIONS.map((id) => (
            <a
              key={id}
              onClick={() => scrollToSection(id)}
              className="mobile-nav-link"
            >
              {t(`navigation.${id}`)}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
