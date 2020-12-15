import React, { Suspense, useEffect, lazy } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createBrowserHistory } from 'history'
import { Router, Route, Switch } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/core/styles'

import { setUser } from './reducers/userReducer'
import { setLanguage } from './reducers/languageReducer'
import { setTheme } from './reducers/themeReducer'

import provideTheme from './utils/themeService'

// Views
const MainView = lazy(() => import('./views/MainView/MainView'))

// Components
import CssBaseline from '@material-ui/core/CssBaseline'

import BeatLoader from './components/BeatLoader/BeatLoader'
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary'

var hist = createBrowserHistory()

const App = () => {
  const dispatch = useDispatch()

  // Fetch theme
  const theme = useSelector(store => {
    const storeTheme = store.theme ?? { name: 'dark' }
    return provideTheme(storeTheme.name)
  })

  // Setup user, language and theme
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

    const localtheme = window.localStorage.getItem('selectedTheme')
    if (localtheme) {
      dispatch(setTheme(JSON.parse(localtheme)))
    }
  }, [dispatch])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ErrorBoundary>
        <Suspense fallback={<BeatLoader />} >
          <Router history={hist}>
            <Switch>
              <Route path='/' component={MainView} />
            </Switch>
          </Router>
        </Suspense>
      </ErrorBoundary>
    </ThemeProvider>
  )
}

export default App
