import { setToLS, getFromLS } from '../utils/localStorage'
import { defaultTheme } from '../utils/themeUtil'

const themeReducer = (state = null, action) => {
  switch (action.type) {
  case 'SET_THEME':
    return action.data
  default:
    return state
  }
}

export const initTheme = () => {
  return async dispatch => {

    // Get or set and provide initial theme
    let selectedTheme = getFromLS('selectedTheme')
    if (!selectedTheme) {
      selectedTheme = defaultTheme

      // Update to local storage
      setToLS('selectedTheme', selectedTheme)
    }

    // Update to store
    dispatch({
      type: 'SET_THEME',
      data: selectedTheme
    })
  }
}

export const setTheme = (theme) => {
  return async dispatch => {

    // Update to local storage
    setToLS('selectedTheme', theme)

    // Update to store
    dispatch({
      type: 'SET_THEME',
      data: theme
    })
  }
}

export default themeReducer