import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        'Search topics': 'Search topics...',
        description: `Welcome back, Lucy! We 've missed you.`,
        avatar: 'https://mira.bootlab.io/static/img/flags/us.png',
      },
    },
    fr: {
      translation: {
        'Search topics': 'Rechercher...',
        description: `Bon retour, Lucy! Tu nous as manqué.`,
        avatar: 'https://mira.bootlab.io/static/img/flags/fr.png',
      },
    },
    de: {
      translation: {
        'Search topics': 'Suchen...',
        description: `Willkommen zurück, Lucy! Wir haben dich vermisst.`,
        avatar: 'https://mira.bootlab.io/static/img/flags/de.png',
      },
    },
    du: {
      translation: {
        'Search topics': 'Zoeken...',
        description: `Welkom terug, Lucy! We hebben je gemist.`,
        avatar: 'https://mira.bootlab.io/static/img/flags/nl.png',
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
