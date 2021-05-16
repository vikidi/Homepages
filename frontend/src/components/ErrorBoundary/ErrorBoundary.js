import React from 'react'
import PropTypes from 'prop-types'
import { Notifier } from '@airbrake/browser'

import ErrorView from '../../views/ErrorView/ErrorView'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }

    if (process.env.NODE_ENV === 'production') {
      this.airbrake = new Notifier({
        projectId: process.env.REACT_APP_AIRBRAKE_ID,
        projectKey: process.env.REACT_APP_AIRBRAKE_KEY,
        environment: process.env.NODE_ENV
      })
    }
  }

  static getDerivedStateFromError(/*error*/) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    // Send error to Airbrake
    if (process.env.NODE_ENV === 'production') {
      this.airbrake.notify({
        error: error,
        params: { info: errorInfo },
        context: { application: 'frontend' }
      })
    }
  }

  render() {
    if (this.state.hasError) {
      return (<ErrorView />)
    }

    return this.props.children
  }
}

ErrorBoundary.propTypes = {
  /** Contained elements */
  children: PropTypes.node.isRequired
}

export default ErrorBoundary