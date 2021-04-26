import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import ChainedBackend from 'i18next-chained-backend'
import LocalStorageBackend from 'i18next-localstorage-backend'
import HttpBackend from 'i18next-http-backend'

import { getFromLS } from './utils/localStorage'
import defaultLanguage from './utils/languageUtil'

// Get the possibly stored language for the translator
const startLang = getFromLS('selectedLanguage')

i18n
  .use(ChainedBackend)
  .use(initReactI18next)
  .init({
    lng: startLang ? startLang.short : defaultLanguage.short,
    fallbackLng: 'en',
    debug: process.env.NODE_ENV === 'development' ? true : false,
    backend: {
      backends: [
        LocalStorageBackend,  // Primary, local storage cache
        HttpBackend           // Secondary, http fetch from server
      ],
      backendOptions: [{
        expirationTime: 7 * 24 * 60 * 60 * 1000 // 7 days
      }, {
        loadPath: '/locales/{{lng}}/{{ns}}.json',
        allowMultiLoading: false
      }]
    },
    react: {
      useSuspense: true
    }
  })


export default i18n