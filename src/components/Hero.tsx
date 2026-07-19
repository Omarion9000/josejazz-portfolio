import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import portraitAvif from '../assets/jose-luis-portrait.avif';
import portraitJpg from '../assets/jose-luis-portrait.jpg';
import portraitAvif800 from '../assets/jose-luis-portrait-800.avif';
import portraitJpg800 from '../assets/jose-luis-portrait-800.jpg';
import portraitAvif480 from '../assets/jose-luis-portrait-480.avif';
import portraitJpg480 from '../assets/jose-luis-portrait-480.jpg';

const Hero: React.FC = () => {
  const { t } = useTranslation();
  const reduce = useReducedMotion();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const handler = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, [reduce]);

  const goToMusic = () => {
    const el = document.getElementById('songs');
    if (el) window.scrollTo({ top: el.offsetTop - 72, behavior: 'smooth' });
  };

  const parallax = reduce ? 0 : Math.min(scrollY * 0.18, 120);

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-ink-900"
    >
      {/* Portrait layer with parallax */}
      <div
        className="absolute inset-0"
        style={{ transform: `translate3d(0, ${parallax}px, 0)`, willChange: 'transform' }}
      >
        <picture>
          <source
            type="image/avif"
            srcSet={`${portraitAvif480} 480w, ${portraitAvif800} 800w, ${portraitAvif} 1184w`}
            sizes="100vw"
          />
          <img
            src={portraitJpg}
            srcSet={`${portraitJpg480} 480w, ${portraitJpg800} 800w, ${portraitJpg} 1184w`}
            sizes="100vw"
            alt="Portrait of Jose Luis Barajas at the piano"
            className="h-full w-full object-cover object-[center_25%] md:object-[60%_30%]"
            fetchpriority="high"
            decoding="async"
          />
        </picture>
      </div>

      {/* Editorial gradient overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-ink-900/40 via-ink-900/55 to-ink-900"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-ink-900/85 via-ink-900/35 to-transparent"
        aria-hidden="true"
      />

      {/* Subtle film grain */}
      <div className="absolute inset-0 grain" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-5 md:px-8 min-h-screen flex flex-col justify-end pb-24 md:pb-32 lg:pb-40">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <span className="section-eyebrow">{t('home.welcome')}</span>

          <h1 className="font-serif font-medium text-5xl md:text-7xl lg:text-[6.5rem] leading-[0.95] text-bone tracking-[-0.02em]">
            Jose Luis
            <br />
            <span className="italic text-brass-300/95">Barajas</span>
          </h1>

          <p className="mt-7 max-w-xl text-base md:text-lg text-bone/75 leading-relaxed">
            {t('home.tagline')}
          </p>

          <div className="mt-10 flex items-center gap-5">
            <motion.button
              onClick={goToMusic}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center gap-3 rounded-full bg-brass-400 px-7 py-3.5 text-sm font-medium tracking-[0.18em] uppercase text-ink-900 transition-colors duration-300 hover:bg-brass-300"
            >
              {t('home.cta')}
              <span className="inline-block h-px w-6 bg-ink-900 transition-all duration-300 group-hover:w-10" />
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.button
        onClick={goToMusic}
        aria-label="Scroll to music"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-bone/55 hover:text-brass-300 transition-colors"
        animate={reduce ? undefined : { y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
      >
        <span className="text-[10px] uppercase tracking-[0.32em]">Scroll</span>
        <ArrowDown size={16} strokeWidth={1.5} />
      </motion.button>
    </section>
  );
};

export default Hero;
