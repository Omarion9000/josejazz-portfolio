import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

type Project = {
  title: string;
  description: string;
  link: string;
};

// Drop covers into src/assets/projects/ as `<slug>.jpg` and optional `<slug>.avif`.
// Vite picks them up automatically — no edits to this file needed.
const coverModules = import.meta.glob('../assets/projects/*.{avif,jpg}', {
  eager: true,
  import: 'default',
}) as Record<string, string>;

const PROJECT_SLUGS = [
  'la-llorona',
  'im-not-the-only-one',
  'educational-workshops',
  'kiwzo-fumero',
  'tono-caracoza',
] as const;

const getCover = (slug: string): { avif?: string; jpg: string } | null => {
  const jpg = coverModules[`../assets/projects/${slug}.jpg`];
  if (!jpg) return null;
  const avif = coverModules[`../assets/projects/${slug}.avif`];
  return avif ? { avif, jpg } : { jpg };
};

const Placeholder: React.FC<{ index: number }> = ({ index }) => (
  <div className="absolute inset-0 bg-gradient-to-br from-ink-800 via-ink-850 to-ink-900">
    <div className="absolute inset-0 grain opacity-60" aria-hidden="true" />
    <div className="absolute inset-0 flex flex-col items-center justify-center">
      <span className="font-serif italic text-brass-300/55 text-5xl md:text-6xl leading-none">
        {String(index + 1).padStart(2, '0')}
      </span>
      <span className="mt-3 h-px w-8 bg-brass-400/40" />
      <span className="mt-3 text-[10px] uppercase tracking-[0.32em] text-bone/45">
        Cover&nbsp;forthcoming
      </span>
    </div>
  </div>
);

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
            const slug = PROJECT_SLUGS[index];
            const cover = slug ? getCover(slug) : null;
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
                <div className="relative aspect-[16/10] overflow-hidden bg-ink-850">
                  {cover ? (
                    <picture className="absolute inset-0 block h-full w-full">
                      {cover.avif && <source type="image/avif" srcSet={cover.avif} />}
                      <img
                        src={cover.jpg}
                        alt={project.title}
                        className="block h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
                        loading="lazy"
                        decoding="async"
                      />
                    </picture>
                  ) : (
                    <Placeholder index={index} />
                  )}
                  {/* Vignette: gentle, never overwhelms real images */}
                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-900/55 via-ink-900/5 to-transparent"
                    aria-hidden="true"
                  />
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
