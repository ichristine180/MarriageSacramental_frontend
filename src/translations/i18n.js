import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "./locales/en.json";
import rwTranslation from "./locales/rw.json";

i18n.use(initReactI18next).init({
  lng: "en", // set default language
  fallbackLng: "en",
  debug: true,
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      translation: enTranslation,
    },
    rw: {
      translation: rwTranslation,
    },
  },
});

export default i18n;
