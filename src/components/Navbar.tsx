import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X, Piano } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar: React.FC = () => {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'songs', 'projects', 'promotional', 'gallery'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-jazz-blue bg-opacity-95 shadow-lg py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Piano className="text-jazz-gold mr-2" size={28} />
          <span className="text-xl font-serif font-bold text-jazz-gold">Jose Luis Barajas</span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a 
            onClick={() => scrollToSection('home')} 
            className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
          >
            {t('navigation.home')}
          </a>
          <a 
            onClick={() => scrollToSection('about')} 
            className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
          >
            {t('navigation.about')}
          </a>
          <a 
            onClick={() => scrollToSection('songs')} 
            className={`nav-link ${activeSection === 'songs' ? 'active' : ''}`}
          >
            {t('navigation.songs')}
          </a>
          <a
            onClick={() => scrollToSection('projects')}
            className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
          >
            {t('navigation.projects')}
          </a>
          <a
            onClick={() => scrollToSection('promotional')}
            className={`nav-link ${activeSection === 'promotional' ? 'active' : ''}`}
          >
            {t('navigation.promotional')}
          </a>
          <a
            onClick={() => scrollToSection('gallery')}
            className={`nav-link ${activeSection === 'gallery' ? 'active' : ''}`}
          >
            Gallery
          </a>
          <LanguageSwitcher />
        </nav>
        
        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <LanguageSwitcher />
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="ml-4 text-jazz-light hover:text-jazz-gold transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <nav className="flex flex-col items-center space-y-6">
          <a 
            onClick={() => scrollToSection('home')} 
            className="mobile-nav-link"
          >
            {t('navigation.home')}
          </a>
          <a 
            onClick={() => scrollToSection('about')} 
            className="mobile-nav-link"
          >
            {t('navigation.about')}
          </a>
          <a 
            onClick={() => scrollToSection('songs')} 
            className="mobile-nav-link"
          >
            {t('navigation.songs')}
          </a>
          <a
            onClick={() => scrollToSection('projects')}
            className="mobile-nav-link"
          >
            {t('navigation.projects')}
          </a>
          <a
            onClick={() => scrollToSection('promotional')}
            className="mobile-nav-link"
          >
            {t('navigation.promotional')}
          </a>
          <a
            onClick={() => scrollToSection('gallery')}
            className="mobile-nav-link"
          >
            Gallery
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;