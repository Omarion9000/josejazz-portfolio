import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import lloronaAvif from '../assets/llorona.avif';
import lloronaJpg from '../assets/llorona.jpg';
import notTheOnlyOneAvif from '../assets/not-the-only-one.avif';
import notTheOnlyOneJpg from '../assets/not-the-only-one.jpg';

type Project = {
  title: string;
  description: string;
  link: string;
};

// Local cover art for projects. i18n holds copy only; images stay in code so we never hotlink.
const projectCovers: Array<{ avif: string; jpg: string } | null> = [
  { avif: lloronaAvif, jpg: lloronaJpg },
  { avif: notTheOnlyOneAvif, jpg: notTheOnlyOneJpg },
  null,
  null,
  null,
];

const Projects: React.FC = () => {
  const { t } = useTranslation();
  const projects = t('projects.projects', { returnObjects: true }) as Project[];

  return (
    <section id="projects" className="relative py-24 md:py-32 bg-ink-900">
      <div className="container mx-auto px-5 md:px-8 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: '-80px' }}
          className="mb-14"
        >
          <span className="section-eyebrow">{t('projects.eyebrow')}</span>
          <h2 className="section-title">{t('projects.title')}</h2>
          <div className="section-title-rule" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => {
            const cover = projectCovers[index] ?? null;
            return (
              <motion.a
                key={project.link}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="editorial-card group flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true, margin: '-60px' }}
                whileHover={{ y: -4 }}
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-ink-800">
                  {cover ? (
                    <picture>
                      <source type="image/avif" srcSet={cover.avif} />
                      <img
                        src={cover.jpg}
                        alt={project.title}
                        className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
                        loading="lazy"
                        decoding="async"
                      />
                    </picture>
                  ) : (
                    <div className="relative h-full w-full bg-gradient-to-br from-ink-800 via-ink-850 to-ink-900">
                      <div className="absolute inset-0 flex items-end p-5">
                        <span className="text-[10px] uppercase tracking-[0.28em] text-brass-400/80">
                          Featured Work
                        </span>
                      </div>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-900/80 via-ink-900/10 to-transparent opacity-90" />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-serif text-xl md:text-[1.35rem] text-bone mb-3 leading-snug group-hover:text-brass-200 transition-colors duration-500">
                    {project.title}
                  </h3>
                  <p className="text-bone/65 text-sm leading-relaxed flex-1">{project.description}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-brass-300/90">
                    {t('projects.viewProject')}
                    <ArrowUpRight size={14} className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </span>
                </div>
              </motion.a>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, margin: '-60px' }}
          className="mt-16 md:mt-24 rounded-xl border border-brass-400/20 bg-gradient-to-br from-ink-850 via-ink-900 to-ink-850 p-8 md:p-12"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="max-w-xl">
              <h3 className="font-serif text-2xl md:text-3xl text-bone leading-tight">
                {t('projects.collaborationTitle')}
              </h3>
              <p className="mt-3 text-bone/70">{t('projects.collaborationDescription')}</p>
            </div>
            <motion.a
              href="mailto:barajijazz@gmail.com?subject=Collaboration%20Inquiry"
              aria-label="Send an email to barajijazz@gmail.com"
              className="inline-flex items-center gap-3 self-start rounded-full bg-brass-400 px-6 py-3 text-sm font-medium tracking-[0.18em] uppercase text-ink-900 transition-colors duration-300 hover:bg-brass-300"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              {t('projects.collaborationCta')}
              <span className="inline-block h-px w-5 bg-ink-900" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
