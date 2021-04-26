import axios from 'axios'

import { setToLS, getFromLS } from '../utils/localStorage'

// TODO: Handle user token in axios defaults on login/logout/modification
// TODO: Refresh token on user modifications

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

      // Set up token to axios headers
      axios.defaults.headers.common['Authorization'] = user.token ?? ''

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

    // Set up token to axios headers
    axios.defaults.headers.common['Authorization'] = user ? user.token : ''

    // Set to store
    dispatch({
      type: 'SET_USER',
      data: user
    })
  }
}

export default userReducer