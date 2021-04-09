import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'

import Paper from '@material-ui/core/Paper'

import styles from './BackgroundPaper.module.css'

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: 5,
    padding: theme.spacing(4),
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2)
  },
}))

const BackgroundPaper = ({ center, children }) => {
  const classes = useStyles()

  return (
    <Paper
      classes={{
        root: classes.root
      }}
      elevation={2}
      className={center ? styles.center : null}
    >

      {children}

    </Paper>
  )
}

BackgroundPaper.propTypes = {

  /** Components inside */
  children: PropTypes.node,

  /** Centering of items */
  center: PropTypes.bool
}

BackgroundPaper.defaultProps = {
  center: true
}

export default BackgroundPaper