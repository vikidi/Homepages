import React from 'react'
import { useTheme } from '@material-ui/styles'
import PropTypes from 'prop-types'

import SpinnerBeatLoader from 'react-spinners/BeatLoader'

import styles from './BeatLoader.module.css'

const BeatLoader = ({ color, size, margin }) => {
  const theme = useTheme()

  return (
    <div className={styles.container}>
      <SpinnerBeatLoader
        size={size}
        margin={margin}
        loading={true}
        color={theme.palette[color].main}
      />
    </div>
  )
}

BeatLoader.propTypes = {
  color: PropTypes.oneOf(['primary', 'secondary']),
  size: PropTypes.number,
  margin: PropTypes.number
}

BeatLoader.defaultProps = {
  color: 'primary',
  size: 15,
  margin: 10
}

export default BeatLoader