import React from 'react';
import { useTranslation } from 'react-i18next';

const LANGS = [
  { code: 'en', label: 'EN' },
  { code: 'es', label: 'ES' },
];

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const active = i18n.language?.startsWith('es') ? 'es' : 'en';

  return (
    <div className="language-switcher" role="group" aria-label="Language">
      {LANGS.map(({ code, label }, index) => (
        <React.Fragment key={code}>
          {index > 0 && <span className="text-bone/25" aria-hidden="true">·</span>}
          <button
            type="button"
            className={`language-button ${active === code ? 'active' : ''}`}
            onClick={() => i18n.changeLanguage(code)}
            aria-pressed={active === code}
          >
            {label}
          </button>
        </React.Fragment>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
