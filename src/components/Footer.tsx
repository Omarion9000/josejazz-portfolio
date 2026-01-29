import React from 'react';
import { useTranslation } from 'react-i18next';
import { Piano, Mail, Phone, Instagram, Youtube, Facebook } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-jazz-blue pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <Piano className="text-jazz-gold mr-2" size={24} />
              <span className="text-xl font-serif font-bold text-jazz-gold">Jose Luis Barajas</span>
            </div>
            <p className="text-jazz-light mb-4">
              Jazz pianist and composer creating musical stories through the keys of jazz.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-serif font-semibold text-white mb-4">{t('footer.contact')}</h4>
            <ul className="space-y-3">
              <li className="flex items-center text-jazz-light">
                <Mail size={16} className="text-jazz-gold mr-3" />
                <span>barajijazz@gmail.com</span>
              </li>
              <li className="flex items-center text-jazz-light">
                <Phone size={16} className="text-jazz-gold mr-3" />
                <span>+52 7731386420</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-serif font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-jazz-light hover:text-jazz-gold transition-colors">
                  {t('navigation.home')}
                </a>
              </li>
              <li>
                <a href="#about" className="text-jazz-light hover:text-jazz-gold transition-colors">
                  {t('navigation.about')}
                </a>
              </li>
              <li>
                <a href="#songs" className="text-jazz-light hover:text-jazz-gold transition-colors">
                  {t('navigation.songs')}
                </a>
              </li>
              <li>
                <a href="#projects" className="text-jazz-light hover:text-jazz-gold transition-colors">
                  {t('navigation.projects')}
                </a>
              </li>
              <li>
                <a href="#promotional" className="text-jazz-light hover:text-jazz-gold transition-colors">
                  {t('navigation.promotional')}
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-jazz-light hover:text-jazz-gold transition-colors">
                  Gallery
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-serif font-semibold text-white mb-4">{t('footer.follow')}</h4>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/BarajasProducciones" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-jazz-light hover:text-jazz-gold transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://www.instagram.com/barajijazz/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-jazz-light hover:text-jazz-gold transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://www.youtube.com/@barajijazz62" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-jazz-light hover:text-jazz-gold transition-colors"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-jazz-accent pt-8 text-center">
          <p className="text-jazz-light text-sm mb-2">
            &copy; {currentYear} Jose Luis Barajas. {t('footer.rights')}.
          </p>
          <div className="flex items-center justify-center text-jazz-light text-sm">
            <span>Developed by: Michelle Barajas</span>
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="ml-2"
            >
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M18 4c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3z"/>
                <path d="M6 12c0 1.657 1.343 3 3 3s3-1.343 3-3-1.343-3-3-3-3 1.343-3 3z"/>
                <path d="M18 20c0-1.657-1.343-3-3-3s-3 1.343-3 3 1.343 3 3 3 3-1.343 3-3z"/>
                <line x1="15" y1="7" x2="9" y2="9"/>
                <line x1="9" y1="15" x2="15" y2="17"/>
              </svg>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;