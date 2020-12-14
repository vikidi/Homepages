import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import Backend from 'i18next-http-backend'

import languageService from './utils/languageService'

// Get the stored language for the translator
const startLang = window.localStorage.getItem('selectedLanguage')
if (!startLang) {
  window.localStorage.setItem('selectedLanguage', JSON.stringify(languageService.defaultLanguage))
}

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    lng: startLang ? JSON.parse(startLang).short : languageService.defaultLanguage.short,
    fallbackLng: 'en',
    debug: true,
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
      allowMultiLoading: false
    },
    react: {
      wait: true,
      useSuspense: true
    }
  })


export default i18n