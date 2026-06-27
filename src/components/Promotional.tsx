import React, { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Mail, Volume2, VolumeX } from 'lucide-react';

const YT_ID = 'SqRVcit-21o';

const Promotional: React.FC = () => {
  const { t } = useTranslation();
  const venues = t('promotional.venues', { returnObjects: true }) as string[];
  const features = t('promotional.features', { returnObjects: true }) as string[];
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [soundOn, setSoundOn] = useState(false);

  const youtubeEmbedUrl =
    `https://www.youtube.com/embed/${YT_ID}` +
    `?autoplay=1&mute=1&loop=1&playlist=${YT_ID}` +
    `&controls=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1`;

  const toggleSound = () => {
    if (!iframeRef.current?.contentWindow) return;
    const w = iframeRef.current.contentWindow;
    if (soundOn) {
      w.postMessage(JSON.stringify({ event: 'command', func: 'mute', args: [] }), '*');
    } else {
      w.postMessage(JSON.stringify({ event: 'command', func: 'unMute', args: [] }), '*');
      w.postMessage(JSON.stringify({ event: 'command', func: 'setVolume', args: [100] }), '*');
    }
    setSoundOn((v) => !v);
  };

  return (
    <section id="promotional" className="relative py-24 md:py-32 bg-ink-850 border-t border-ink-800">
      <div className="container mx-auto px-5 md:px-8 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: '-80px' }}
          className="mb-14 max-w-3xl"
        >
          <span className="section-eyebrow">{t('promotional.eyebrow')}</span>
          <h2 className="section-title">{t('promotional.title')}</h2>
          <div className="section-title-rule" />
          <p className="mt-8 text-bone/75 text-base md:text-lg leading-relaxed">
            {t('promotional.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: '-60px' }}
            className="lg:col-span-7"
          >
            <div className="rounded-xl bg-ink-900/70 border border-ink-700/60 p-5 md:p-7 shadow-editorial">
              <div className="text-[10px] uppercase tracking-[0.28em] text-brass-300/85 mb-4">
                {t('promotional.videoTitle')}
              </div>

              <div className="relative aspect-video rounded-lg overflow-hidden bg-black">
                <iframe
                  ref={iframeRef}
                  className="absolute inset-0 h-full w-full"
                  src={youtubeEmbedUrl}
                  title={t('promotional.videoTitle')}
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                />
              </div>

              <div className="mt-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <p className="text-bone/60 text-xs sm:text-sm">{t('promotional.videoHint')}</p>
                <button
                  onClick={toggleSound}
                  aria-pressed={soundOn}
                  className="group inline-flex items-center gap-3 rounded-full border border-brass-400/40 bg-brass-400/10 px-4 py-2.5 text-xs uppercase tracking-[0.2em] text-brass-200 transition-all duration-300 hover:border-brass-300 hover:bg-brass-400/15 hover:text-brass-100"
                >
                  {soundOn ? <Volume2 size={16} /> : <VolumeX size={16} />}
                  <span>{t('promotional.enableSound')}</span>
                </button>
              </div>

              <motion.a
                href="mailto:barajijazz@gmail.com?subject=Consulta%20sobre%20presentaci%C3%B3n%20art%C3%ADstica"
                className="mt-7 inline-flex w-full items-center justify-center gap-3 rounded-full bg-brass-400 px-6 py-3.5 text-sm font-medium tracking-[0.18em] uppercase text-ink-900 transition-colors duration-300 hover:bg-brass-300"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Mail size={16} />
                {t('promotional.contactButton')}
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: '-60px' }}
            className="lg:col-span-5 space-y-10"
          >
            <div>
              <h3 className="font-serif text-2xl md:text-3xl text-bone mb-6">{t('promotional.idealFor')}</h3>
              <ul className="space-y-3">
                {venues.map((venue, index) => (
                  <motion.li
                    key={venue}
                    initial={{ opacity: 0, x: 8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.05 * index }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4 text-bone/75"
                  >
                    <span className="mt-2.5 h-px w-6 flex-shrink-0 bg-brass-400/55" />
                    <span className="text-[15px] leading-relaxed">{venue}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-ink-700/60 bg-ink-900/50 p-7">
              <h4 className="font-serif text-xl text-brass-300 mb-3">{t('promotional.experienceTitle')}</h4>
              <p className="text-bone/70 leading-relaxed mb-5">{t('promotional.experienceDescription')}</p>
              <ul className="space-y-2.5">
                {features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-bone/75 text-sm">
                    <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-brass-400" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Promotional;
