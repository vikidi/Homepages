import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'

import Button from '@material-ui/core/Button'

const useStyles = makeStyles((/*theme*/) => ({
  root: {
    borderRadius: 5,
  },
}))

/**
 * The only true button.
 */
const BasicButton = ({ color, size, onClick, disabled, children }) => {
  const classes = useStyles()

  const styles = {
    fontSize: BasicButton.sizes[size],
  }

  return (
    <Button
      classes={{
        root: classes.root
      }}
      color={color}
      style={styles}
      onClick={onClick}
      disabled={disabled}
      variant='contained'
    >

      {children}

    </Button>
  )
}

BasicButton.propTypes = {

  /** Button label */
  children: PropTypes.node.isRequired,

  /** The size of the button */
  size: PropTypes.oneOf(['small', 'normal', 'large']),

  /** Disable button */
  disabled: PropTypes.bool,

  /** Gets called when the user clicks on the button */
  onClick: PropTypes.func,
}

BasicButton.defaultProps = {
  color: 'primary',
  size: 'normal',
  onClick: (event) => {
    console.log('You have clicked me!', event.target)
  },
  disabled: false
}

BasicButton.sizes = {
  small: '10px',
  normal: '14px',
  large: '18px',
}

export default BasicButton