import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import portraitAvif from '../assets/jose-luis-portrait.avif';
import portraitJpg from '../assets/jose-luis-portrait.jpg';
import portraitAvif800 from '../assets/jose-luis-portrait-800.avif';
import portraitJpg800 from '../assets/jose-luis-portrait-800.jpg';
import portraitAvif480 from '../assets/jose-luis-portrait-480.avif';
import portraitJpg480 from '../assets/jose-luis-portrait-480.jpg';

const About: React.FC = () => {
  const { t } = useTranslation();
  const achievements = t('about.achievements', { returnObjects: true }) as Array<{
    year: string;
    title: string;
    description: string;
  }>;

  return (
    <section id="about" className="relative py-24 md:py-32 bg-ink-900">
      <div className="container mx-auto px-5 md:px-8 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: '-80px' }}
          className="mb-16"
        >
          <span className="section-eyebrow">{t('about.eyebrow')}</span>
          <h2 className="section-title">{t('about.title')}</h2>
          <div className="section-title-rule" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: '-80px' }}
            className="md:col-span-5"
          >
            <div className="relative">
              <picture>
                <source
                  type="image/avif"
                  srcSet={`${portraitAvif480} 480w, ${portraitAvif800} 800w, ${portraitAvif} 1184w`}
                  sizes="(min-width: 768px) 40vw, 100vw"
                />
                <img
                  src={portraitJpg}
                  srcSet={`${portraitJpg480} 480w, ${portraitJpg800} 800w, ${portraitJpg} 1184w`}
                  sizes="(min-width: 768px) 40vw, 100vw"
                  alt="Portrait of Jose Luis Barajas"
                  className="w-full h-auto rounded-sm shadow-editorial"
                  loading="lazy"
                  decoding="async"
                />
              </picture>
              <div
                className="pointer-events-none absolute -inset-3 border border-brass-400/15 rounded-sm"
                aria-hidden="true"
              />
              <div className="absolute -bottom-5 -right-5 md:-bottom-7 md:-right-7 flex h-24 w-24 md:h-28 md:w-28 flex-col items-center justify-center rounded-full bg-brass-400 text-ink-900 shadow-editorial">
                <span className="font-serif text-2xl md:text-3xl font-medium leading-none">40+</span>
                <span className="mt-1 text-[10px] uppercase tracking-[0.22em]">Years</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: '-80px' }}
            className="md:col-span-7 space-y-6"
          >
            {t('about.bio')
              .split('\n\n')
              .map((paragraph, idx) => (
                <p
                  key={idx}
                  className={`whitespace-pre-line leading-relaxed ${
                    idx === 0
                      ? 'font-serif italic text-xl md:text-2xl text-bone'
                      : 'text-bone/75 text-base md:text-lg'
                  }`}
                >
                  {paragraph}
                </p>
              ))}
            <p className="text-bone/75 text-base md:text-lg leading-relaxed">{t('about.bio2')}</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: '-80px' }}
          className="mt-24 md:mt-32"
        >
          <h3 className="section-eyebrow !text-brass-300/90">{t('about.timeline')}</h3>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-12 gap-x-12">
            <div className="md:col-span-2 md:sticky md:top-24 self-start mb-8 md:mb-0">
              <span className="font-serif text-bone/40 text-sm uppercase tracking-[0.28em]">
                1980 → 2025
              </span>
            </div>
            <div className="md:col-span-10">
              {achievements.map((achievement, index) => (
                <motion.article
                  key={index}
                  className="timeline-item"
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.08 * index, ease: [0.22, 1, 0.36, 1] }}
                  viewport={{ once: true, margin: '-60px' }}
                >
                  <div className="text-xs font-medium uppercase tracking-[0.22em] text-brass-300/90 mb-2">
                    {achievement.year}
                  </div>
                  <h4 className="font-serif text-xl md:text-2xl text-bone mb-3 leading-snug">
                    {achievement.title}
                  </h4>
                  <p className="text-bone/70 leading-relaxed max-w-2xl">{achievement.description}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
