import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import ChainedBackend from 'i18next-chained-backend'
import LocalStorageBackend from 'i18next-localstorage-backend'
import HttpBackend from 'i18next-http-backend'

import { getFromLS, setToLS } from './utils/localStorage'
import defaultLanguage from './utils/languageUtil'
import clearTranslationCache from './services/translationService'

// Get the possibly stored language for the translator
const startLang = getFromLS('selectedLanguage')
const currentBuild = getFromLS('buildVersion')

// Update translations according to the build
if (process.env.REACT_APP_VERSION !== currentBuild) {
  clearTranslationCache('i18next_cache_')
  setToLS('buildVersion', process.env.REACT_APP_VERSION)
}

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
        prefix: 'i18next_cache_',
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