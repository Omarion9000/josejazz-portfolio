import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Mail, Volume2 } from 'lucide-react';

const YT_ID = 'SqRVcit-21o';

const Promotional: React.FC = () => {
  const { t } = useTranslation();
  const venues = t('promotional.venues', { returnObjects: true }) as string[];

  const iframeRef = useRef<HTMLIFrameElement>(null);

  // URL base del embed (autoplay + mute + loop)
  const youtubeEmbedUrl =
    `https://www.youtube.com/embed/${YT_ID}` +
    `?autoplay=1&mute=1&loop=1&playlist=${YT_ID}` +
    `&controls=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1`;

  // 🔊 activar sonido SIN salir del sitio
  const enableSound = () => {
    if (!iframeRef.current) return;

    iframeRef.current.contentWindow?.postMessage(
      JSON.stringify({
        event: 'command',
        func: 'unMute',
        args: [],
      }),
      '*'
    );

    iframeRef.current.contentWindow?.postMessage(
      JSON.stringify({
        event: 'command',
        func: 'setVolume',
        args: [100],
      }),
      '*'
    );
  };

  return (
    <section id="promotional" className="py-20 bg-jazz-blue">
      <div className="container mx-auto px-4">

        {/* TÍTULO GENERAL */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">{t('promotional.title')}</h2>
          <p className="text-jazz-light text-lg max-w-3xl mb-12">
            {t('promotional.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* COLUMNA VIDEO */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-jazz-accent rounded-lg p-8 shadow-xl">

              {/* 🔥 TÍTULO CAMBIADO */}
              <h3 className="text-2xl font-serif font-semibold text-jazz-gold mb-6">
                Presentación Musical Audiovisual
              </h3>

              {/* VIDEO */}
              <div className="bg-jazz-black rounded-lg p-4 mb-6">
                <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                  <iframe
                    ref={iframeRef}
                    className="absolute inset-0 w-full h-full"
                    src={youtubeEmbedUrl}
                    title="Presentación Musical Audiovisual"
                    allow="autoplay; encrypted-media; picture-in-picture"
                    allowFullScreen
                  />
                </div>

                {/* CONTROLES */}
                <div className="mt-4 flex items-center justify-between gap-3">
                  <p className="text-jazz-light text-sm">
                    El video se reproduce automáticamente en silencio.
                  </p>

                  <button
                    onClick={enableSound}
                    className="inline-flex items-center justify-center px-4 py-2 bg-jazz-gold text-jazz-black rounded-lg font-medium hover:bg-opacity-90 transition-all"
                  >
                    <Volume2 size={18} className="mr-2" />
                    Activar sonido
                  </button>
                </div>
              </div>

              {/* CTA */}
              <motion.a
                href="mailto:barajijazz@gmail.com?subject=Consulta%20sobre%20presentación%20artística"
                className="w-full inline-flex items-center justify-center px-8 py-4 bg-jazz-gold text-jazz-black rounded-lg font-medium text-lg hover:bg-opacity-90 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Mail className="mr-2" size={20} />
                {t('promotional.contactButton')}
              </motion.a>
            </div>
          </motion.div>

          {/* COLUMNA DERECHA */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-serif font-semibold text-white mb-6">
              {t('promotional.idealFor')}
            </h3>

            <div className="space-y-4 mb-8">
              {venues.map((venue, index) => (
                <motion.div
                  key={index}
                  className="flex items-start"
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  viewport={{ once: true }}
                >
                  <div className="w-2 h-2 rounded-full bg-jazz-gold mt-2 mr-4 flex-shrink-0" />
                  <p className="text-jazz-light text-lg">{venue}</p>
                </motion.div>
              ))}
            </div>

            <div className="bg-jazz-accent rounded-lg p-6">
              <h4 className="text-xl font-serif font-semibold text-jazz-gold mb-4">
                {t('promotional.experienceTitle')}
              </h4>
              <p className="text-jazz-light mb-4">
                {t('promotional.experienceDescription')}
              </p>
              <ul className="space-y-2 text-jazz-light">
                {(t('promotional.features', { returnObjects: true }) as string[]).map(
                  (feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-jazz-gold mr-2">•</span>
                      <span>{feature}</span>
                    </li>
                  )
                )}
              </ul>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Promotional;
