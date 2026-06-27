import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const WHATSAPP_URL =
  'https://wa.me/527731386420?text=Hola%20Jos%C3%A9%20Luis,%20me%20interesa%20informaci%C3%B3n%20sobre%20una%20presentaci%C3%B3n%20musical.';

const WhatsAppIcon: React.FC = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
    <path d="M19.05 4.91A9.82 9.82 0 0 0 12.03 2C6.62 2 2.22 6.4 2.22 11.81c0 1.73.45 3.42 1.31 4.91L2.14 22l5.42-1.35a9.8 9.8 0 0 0 4.47 1.08h.01c5.4 0 9.8-4.4 9.8-9.81a9.73 9.73 0 0 0-2.79-7.01Zm-7.02 15.16h-.01a8.13 8.13 0 0 1-4.14-1.14l-.3-.18-3.22.8.86-3.14-.2-.32a8.12 8.12 0 0 1-1.25-4.28c0-4.49 3.66-8.15 8.16-8.15a8.08 8.08 0 0 1 5.76 2.39 8.08 8.08 0 0 1 2.38 5.76c0 4.5-3.65 8.16-8.14 8.16Zm4.47-6.11c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.92-1.19-.71-.63-1.19-1.42-1.33-1.66-.14-.24-.01-.37.11-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.79-.2-.47-.4-.4-.54-.4h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2 0 1.18.86 2.32.98 2.48.12.16 1.69 2.58 4.09 3.62.57.25 1.02.4 1.37.51.58.18 1.11.15 1.52.09.46-.07 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z" />
  </svg>
);

const WhatsAppButton: React.FC = () => {
  const { t } = useTranslation();

  return (
    <motion.a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Book via WhatsApp"
      className="group fixed bottom-5 right-5 z-[120] sm:bottom-6 sm:right-6"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
    >
      <span className="relative flex items-center gap-3 overflow-hidden rounded-full border border-brass-400/30 bg-ink-900/92 px-4 py-2.5 text-bone shadow-editorial backdrop-blur-md transition-all duration-300 group-hover:border-brass-400/55 group-hover:shadow-brass">
        <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-brass-400/15 text-brass-300 transition-colors duration-300 group-hover:bg-brass-400/25 group-hover:text-brass-200">
          <WhatsAppIcon />
        </span>
        <span className="relative hidden pr-1 text-left sm:block">
          <span className="block font-serif text-sm tracking-wide text-bone">
            {t('whatsapp.label')}
          </span>
          <span className="block text-[10px] uppercase tracking-[0.24em] text-brass-300/85">
            {t('whatsapp.sub')}
          </span>
        </span>
      </span>
    </motion.a>
  );
};

export default WhatsAppButton;
