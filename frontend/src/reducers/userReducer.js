import { setToLS, getFromLS } from '../utils/localStorage'

const userReducer = (state = null, action) => {
  switch (action.type) {
  case 'SET_USER':
    return action.data
  default:
    return state
  }
}

export const initUser = () => {
  return async dispatch => {

    // Get user from local storage
    const user = getFromLS('loggedUser')
    if (user) {

      // Set to store if there is user
      dispatch({
        type: 'SET_USER',
        data: user
      })
    }
  }
}

export const setUser = user => {
  return async dispatch => {

    // Set to local storage
    setToLS('loggedUser', user)

    // Set to store
    dispatch({
      type: 'SET_USER',
      data: user
    })
  }
}

export default userReducer