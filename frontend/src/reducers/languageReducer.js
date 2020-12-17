const languageReducer = (state = null, action) => {
  switch (action.type) {
  case 'SET_LANGUAGE':
    return action.data
  default:
    return state
  }
}

export const setLanguage = (lang) => {
  return async dispatch => {
    window.localStorage.setItem('selectedLanguage', JSON.stringify(lang))
    dispatch({
      type: 'SET_LANGUAGE',
      data: lang
    })
  }
}

export default languageReducer