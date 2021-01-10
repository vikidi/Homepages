import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import Backend from 'i18next-http-backend'

import { getFromLS } from './utils/localStorage'
import defaultLanguage from './utils/languageUtil'

// Get the possibly stored language for the translator
const startLang = getFromLS('selectedLanguage')

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    lng: startLang ? startLang.short : defaultLanguage.short,
    fallbackLng: 'en',
    debug: true, // TODO: Meaning?
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
      allowMultiLoading: false // TODO: Meaning?
    },
    react: {
      wait: true, // TODO: Meaning?
      useSuspense: true // TODO: Meaning?
    }
  })


export default i18n