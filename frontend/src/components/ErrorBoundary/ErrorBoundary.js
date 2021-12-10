import React from 'react'
import PropTypes from 'prop-types'

import ErrorView from '../../views/ErrorView/ErrorView'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(/*error*/) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true }
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