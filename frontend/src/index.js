import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import * as serviceWorkerRegistration from './serviceWorkerRegistration'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter } from 'react-router-dom'

// Own components
import App from './App'
import CustomLoader from './components/CustomLoader/CustomLoader'
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary'

// Translations
import './i18n'

// Redux store
import store from './store'

// CSS for whole app
import './index.css'

const Index = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <ErrorBoundary>
            <Suspense fallback={<CustomLoader />} >
              <App />
            </Suspense>
          </ErrorBoundary>
        </Provider>
      </BrowserRouter>
    </React.StrictMode>
  )
}

ReactDOM.render(
  <Index />,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
