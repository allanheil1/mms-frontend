import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import enTranslation from './en/translations.json';
import ptTranslation from './pt/translations.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)

  .init({
    fallbackLng: 'en',
    debug: true,

    interpolation: {
      escapeValue: false,
    },
    
    resources: {
      pt: {
        translation: ptTranslation
      },
      en: {
        translation: enTranslation
      }
    }
  });


export default i18n;