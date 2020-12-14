import React, { Suspense, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { createBrowserHistory } from 'history'
import { Router, Route, Switch } from 'react-router-dom'

import { setUser } from './reducers/userReducer'
import { setLanguage } from './reducers/languageReducer'

// Views
import MainView from './views/MainView/MainView'

// Components
import BeatLoader from './components/BeatLoader/BeatLoader'

var hist = createBrowserHistory()

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      dispatch(setUser(user))
    }

    const lang = window.localStorage.getItem('selectedLanguage')
    if (lang) {
      dispatch(setLanguage(JSON.parse(lang)))
    }
  }, [dispatch])

  return (
    <Suspense fallback={<BeatLoader />} >
      <Router history={hist}>
        <Switch>
          <Route path='/' component={MainView} />
        </Switch>
      </Router>
    </Suspense>
  )
}

export default App
