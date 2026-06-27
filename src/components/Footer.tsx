import React from 'react';
import { useTranslation } from 'react-i18next';
import { Piano, Mail, Phone, Instagram, Youtube, Facebook } from 'lucide-react';

const SECTION_IDS = ['home', 'about', 'songs', 'projects', 'promotional'] as const;

const socials = [
  { href: 'https://www.facebook.com/BarajasProducciones', icon: Facebook, label: 'Facebook' },
  { href: 'https://www.instagram.com/barajijazz/', icon: Instagram, label: 'Instagram' },
  { href: 'https://www.youtube.com/@barajijazz62', icon: Youtube, label: 'YouTube' },
];

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-ink-950 pt-20 pb-10 border-t border-ink-800">
      <div className="container mx-auto px-5 md:px-8 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 mb-14">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2.5 mb-5">
              <Piano className="text-brass-400" size={22} />
              <span className="font-serif text-lg tracking-wide text-bone">Jose Luis Barajas</span>
            </div>
            <p className="text-bone/65 text-sm leading-relaxed max-w-sm">{t('footer.tagline')}</p>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-[11px] uppercase tracking-[0.28em] text-brass-300/85 mb-5">
              {t('footer.contact')}
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="mailto:barajijazz@gmail.com"
                  className="inline-flex items-center gap-3 text-bone/75 hover:text-brass-300 transition-colors"
                >
                  <Mail size={14} className="text-brass-400/80" />
                  barajijazz@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+527731386420"
                  className="inline-flex items-center gap-3 text-bone/75 hover:text-brass-300 transition-colors"
                >
                  <Phone size={14} className="text-brass-400/80" />
                  +52 773 138 6420
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-[11px] uppercase tracking-[0.28em] text-brass-300/85 mb-5">
              {t('footer.quickLinks')}
            </h4>
            <ul className="space-y-2 text-sm">
              {SECTION_IDS.map((id) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    className="text-bone/70 hover:text-brass-300 transition-colors"
                  >
                    {t(`navigation.${id}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-[11px] uppercase tracking-[0.28em] text-brass-300/85 mb-5">
              {t('footer.follow')}
            </h4>
            <div className="flex gap-4">
              {socials.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-bone/65 hover:text-brass-300 transition-colors"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-ink-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-[12px] text-bone/55">
          <p>
            © {currentYear} Jose Luis Barajas. {t('footer.rights')}.
          </p>
          <p>{t('footer.developedBy')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
