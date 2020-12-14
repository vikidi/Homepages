const userReducer = (state = null, action) => {
  switch (action.type) {
  case 'SET_USER':
    return action.data
  default:
    return state
  }
}

export const setUser = (user) => {
  return async dispatch => {
    window.localStorage.setItem('loggedUser', JSON.stringify(user))
    dispatch({
      type: 'SET_USER',
      data: user
    })
  }
}

export default userReducer