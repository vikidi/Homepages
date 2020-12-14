import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { setUser } from './reducers/userReducer'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      dispatch(setUser(user))
    }
  }, [dispatch])

  return (
    <h2>Hello from my homepage!</h2>
  )
}

export default App
