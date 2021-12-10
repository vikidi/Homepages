import React, { Suspense, useEffect, lazy } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/core/styles'
import { withAuthenticationRequired  } from '@auth0/auth0-react'

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

// Portfolio Views
const MainView = lazy(() => import('./views/MainView/MainView'))
const SettingsView = lazy(() => import('./views/SettingsView/SettingsView'))
const LoginView = lazy(() => import('./views/LoginView/LoginView'))
const ProjectListView = lazy(() => import('./views/ProjectListView/ProjectListView'))
const ContactView = lazy(() => import('./views/ContactView/ContactView'))

// Fun Side Views
const FunSideLandingView = lazy(() => import('./views/FunSideLandingView/FunSideLandingView'))
const AdminPanelView = lazy(() => import('./views/AdminPanelView/AdminPanelView'))
const ProfileView = lazy(() => import('./views/ProfileView/ProfileView'))
const ProfileEditView = lazy(() => import('./views/ProfileEditView/ProfileEditView'))
const UsersView = lazy(() => import('./views/UsersView/UsersView'))

// Site Handling Views
const ErrorView = lazy(() => import('./views/ErrorView/ErrorView'))
const NotAuthorizedView = lazy(() => import('./views/NotAuthorizedView/NotAuthorizedView'))
const NotAuthenticatedView = lazy(() => import('./views/NotAuthenticatedView/NotAuthenticatedView'))

const ProtectedRoute = ({ component, ...args }) => (
  <Route component={withAuthenticationRequired(component)} {...args} />
)

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
            <Route path='/users/:id/edit' component={ProfileEditView} />
            <Route path='/users/:id' component={ProfileView} />
            <Route path='/users' component={UsersView} />
            <Route path='/adminpanel' component={AdminPanelView} />
            <Route path='/login' component={LoginView} />
            <Route path='/funside' component={FunSideLandingView} />
            <Route path='/settings' component={SettingsView} />
            <Route path='/projects' component={ProjectListView} />
            <ProtectedRoute path='/contact' component={ContactView} />
            <Route path='/notauthorized' component={NotAuthorizedView} />
            <Route path='/notauthenticated' component={NotAuthenticatedView} />
            <Route path='/_errorview' component={ErrorView} />
            <Route path='/' component={MainView} />
          </Switch>
        </Suspense>
      </ErrorBoundary>
    </ThemeProvider>
  )
}

export default App
