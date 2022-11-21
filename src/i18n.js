import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        'Search topics': 'Search topics...',
        'description': `Welcome back, Lucy! We 've missed you.`
      },
    },
    fr: {
      translation: {
        'Search topics': 'Rechercher...',
        'description': `Bon retour, Lucy! Tu nous as manqué.`,
      },
    },
    de: {
      translation: {
        'Search topics': 'Suchen...',
        'description': `Willkommen zurück, Lucy! Wir haben dich vermisst.`,
      },
    },
    du: {
      translation: {
        'Search topics': 'Zoeken...',
        'description': `Welkom terug, Lucy! We hebben je gemist.`,
      },
    },
  },
  lng: 'en',
  fallbackLng: 'en',

  interpolation: {
    escapeValue: false,
  },
});
export default i18n;