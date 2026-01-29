import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: 'linear-gradient(rgba(10, 10, 10, 0.7), rgba(10, 10, 10, 0.8)), url("https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-jazz-black via-transparent to-jazz-black opacity-70"></div>
      
      <div className="container mx-auto px-4 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-jazz-gold font-serif text-xl md:text-2xl mb-2">{t('home.welcome')}</h2>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6">Jose Luis Barajas</h1>
          <p className="text-xl md:text-2xl text-jazz-light max-w-2xl mx-auto mb-10">{t('home.tagline')}</p>
          
          <motion.button
            className="bg-jazz-gold text-jazz-black px-8 py-3 rounded-full font-medium text-lg hover:bg-opacity-90 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const songsSection = document.getElementById('songs');
              if (songsSection) {
                window.scrollTo({
                  top: songsSection.offsetTop - 80,
                  behavior: 'smooth'
                });
              }
            }}
          >
            {t('home.cta')}
          </motion.button>
        </motion.div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <svg 
            width="40" 
            height="40" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="#D4AF37" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M12 5v14M5 12l7 7 7-7"/>
          </svg>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;