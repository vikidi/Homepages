import { setToLS, getFromLS } from '../utils/localStorage'
import defaultLanguage from '../utils/languageUtil'

const languageReducer = (state = null, action) => {
  switch (action.type) {
  case 'SET_LANGUAGE':
    return action.data
  default:
    return state
  }
}

export const initLanguage = () => {
  return async dispatch => {

    // Get or set and provide initial language
    let selectedLang = getFromLS('selectedLanguage')
    if (!selectedLang) {
      selectedLang = defaultLanguage

      // Update to local storage
      setToLS('selectedLanguage', selectedLang)
    }

    // Update to store
    dispatch({
      type: 'SET_LANGUAGE',
      data: selectedLang
    })
  }
}

export const setLanguage = lang => {
  return async dispatch => {

    // Set to local storage
    setToLS('selectedLanguage', lang)

    // Set to store
    dispatch({
      type: 'SET_LANGUAGE',
      data: lang
    })
  }
}

export default languageReducer