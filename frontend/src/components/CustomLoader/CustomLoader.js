import React from 'react'
import { useTheme } from '@material-ui/styles'
import PropTypes from 'prop-types'

import { SolarSystemLoading } from 'react-loadingg'

import styles from './CustomLoader.module.css'

const CustomLoader = ({ size }) => {
  const theme = useTheme()

  return (
    <div className={styles.container}>
      <SolarSystemLoading
        size={size}
        color={theme.palette.primary.main}
      />
    </div>
  )
}

CustomLoader.propTypes = {
  size: PropTypes.oneOf(['small', 'default', 'large']),
}

CustomLoader.defaultProps = {
  size: 'default',
}

export default CustomLoader