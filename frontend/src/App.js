import React, { Suspense, useEffect, lazy } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/core/styles'

// Reducers
import { initUser } from './reducers/userReducer'
import { initLanguage } from './reducers/languageReducer'
import { initTheme } from './reducers/themeReducer'

// Utils
import provideMuiTheme from './utils/themeUtil'

// Components
import CssBaseline from '@material-ui/core/CssBaseline'
import CustomLoader from './components/CustomLoader/CustomLoader'
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary'

// Views
const MainView = lazy(() => import('./views/MainView/MainView'))
const SettingsView = lazy(() => import('./views/SettingsView/SettingsView'))
const FunStuffView = lazy(() => import('./views/FunStuffView/FunStuffView'))

const App = () => {
  const d = useDispatch()

  // Fetch theme
  const theme = useSelector(store => provideMuiTheme(store.theme))

  // Setup user, language and theme to redux store
  useEffect(() => {

    // User init
    d(initUser())

    // Language init
    d(initLanguage())

    // Theme init
    d(initTheme())
  }, [d])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ErrorBoundary>
        <Suspense fallback={<CustomLoader />} >
          <Switch>
            <Route path='/funstuff' component={FunStuffView} />
            <Route path='/settings' component={SettingsView} />
            <Route path='/' component={MainView} />
          </Switch>
        </Suspense>
      </ErrorBoundary>
    </ThemeProvider>
  )
}

export default App
