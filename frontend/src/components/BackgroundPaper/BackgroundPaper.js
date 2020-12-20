import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'

import Paper from '@material-ui/core/Paper'

import styles from './BackgroundPaper.module.css'

const useStyles = makeStyles((/*theme*/) => ({
  root: {
    borderRadius: 5,
    padding: '5vw',
    margin: '10px',
  },
}))

const BackgroundPaper = ({ fullHeight, children }) => {
  const classes = useStyles()

  return (
    <Paper
      classes={{
        root: classes.root
      }}
      elevation={2}
      className={fullHeight ? styles.fullHeight : null}
    >

      {children}

    </Paper>
  )
}

BackgroundPaper.propTypes = {

  /** Components inside */
  children: PropTypes.node,

  /** If true fills the whole page */
  fullHeight: PropTypes.bool
}

BackgroundPaper.defaultProps = {
  fullHeight: false
}

export default BackgroundPaper