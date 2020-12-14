import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'

/**
 * The only true button.
 */
const TutorialButton = ({ children }) => {
  return (
    <Button
      variant="contained"
      color='primary'>

      {children}

    </Button>
  )
}

TutorialButton.propTypes = {
  children: PropTypes.string.isRequired,
}

export default TutorialButton