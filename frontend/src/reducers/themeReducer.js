const themeReducer = (state = null, action) => {
  switch (action.type) {
  case 'SET_THEME':
    return action.data
  default:
    return state
  }
}

export const setTheme = (theme) => {
  return async dispatch => {
    window.localStorage.setItem('selectedTheme', JSON.stringify(theme))
    dispatch({
      type: 'SET_THEME',
      data: theme
    })
  }
}

export default themeReducer