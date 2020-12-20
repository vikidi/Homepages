import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './App'
import reportWebVitals from './reportWebVitals'

import BeatLoader from './components/BeatLoader/BeatLoader'
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary'

// Translations
import './i18n'

// Redux store
import store from './store'

// CSS for whole app
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorBoundary>
        <Suspense fallback={<BeatLoader />} >
          <App />
        </Suspense>
      </ErrorBoundary>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
