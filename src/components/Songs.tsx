import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaSpotify } from 'react-icons/fa';
import { SiApplemusic } from 'react-icons/si';

const spotifyTracks = [
  { title: 'Rumbo a lo Desconocido', embedUrl: 'https://open.spotify.com/embed/track/1E6cKFvTUOTXLKykPs1T85' },
  { title: 'Amor en Lejanía',         embedUrl: 'https://open.spotify.com/embed/track/5sFvY0wBjmIAm4ufXj6tmg' },
  { title: 'Mi Querido Marco',        embedUrl: 'https://open.spotify.com/embed/track/4ZCfiYGxfdB3yq2gifWi9m' },
  { title: 'Alma Buena',              embedUrl: 'https://open.spotify.com/embed/track/4jQYt8mysvWdu0k9hj9PHC' },
  { title: 'Abriendo tus Alas',       embedUrl: 'https://open.spotify.com/embed/track/67tSS5ir33aRPuhOD3Ro2u' },
  { title: 'Corazones Olvidados',     embedUrl: 'https://open.spotify.com/embed/track/2RJIEAFEjbqlhNV118bNUz' },
];

const musicPlatforms = [
  {
    name: 'Spotify',
    href: 'https://open.spotify.com/artist/2Vm3BLb9lcCCTHPZZbV2hl',
    icon: FaSpotify,
    ariaLabel: 'Listen on Spotify',
  },
  {
    name: 'Apple Music',
    href: 'https://music.apple.com/us/artist/josé-luis-barajas/1553177145',
    icon: SiApplemusic,
    ariaLabel: 'Listen on Apple Music',
  },
];

const Songs: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="songs" className="relative py-24 md:py-32 bg-ink-850 border-y border-ink-800">
      <div className="container mx-auto px-5 md:px-8 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: '-80px' }}
          className="mb-14"
        >
          <span className="section-eyebrow">{t('songs.eyebrow')}</span>
          <h2 className="section-title">{t('songs.title')}</h2>
          <div className="section-title-rule" />
        </motion.div>

        <div className="grid grid-cols-1 gap-6">
          {spotifyTracks.map((track, index) => (
            <motion.div
              key={track.embedUrl}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true, margin: '-60px' }}
              className="overflow-hidden rounded-xl bg-ink-900/60 border border-ink-700/60 transition-colors duration-500 hover:border-brass-400/30"
            >
              <iframe
                style={{ borderRadius: '12px' }}
                src={`${track.embedUrl}?utm_source=generator&theme=0`}
                width="100%"
                height="152"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title={track.title}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          viewport={{ once: true, margin: '-60px' }}
          className="mt-14 flex flex-col items-center text-center"
        >
          <p className="text-bone/65 text-sm tracking-wide mb-6">{t('songs.listen')}</p>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {musicPlatforms.map((platform, index) => {
              const Icon = platform.icon;
              return (
                <motion.a
                  key={platform.name}
                  href={platform.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={platform.ariaLabel}
                  className="group inline-flex items-center gap-3 rounded-full border border-ink-700 bg-ink-900/60 px-5 py-3 text-bone/85 backdrop-blur-sm transition-all duration-300 hover:border-brass-400/55 hover:bg-brass-400/10 hover:text-brass-200"
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.08 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Icon className="h-5 w-5" />
                  <span className="text-xs font-medium tracking-[0.22em] uppercase">
                    {platform.name}
                  </span>
                </motion.a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Songs;
