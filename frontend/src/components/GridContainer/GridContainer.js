import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'

import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles((/*theme*/) => ({
  root: {
    flexGrow: 1,
    height: '100%'
  },
  grid: {
    height: '100%'
  }
}))

const GridContainer = ({ direction, horizontal, vertical, children }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Grid
        container
        direction={direction}
        justify={horizontal}
        alignItems={vertical}
        className={classes.grid}
      >

        {children}

      </Grid>
    </div>
  )
}

GridContainer.propTypes = {

  /** Components inside */
  children: PropTypes.node,

  /** Direction of the grids inside */
  direction: PropTypes.oneOf(['row', 'column']),

  /** Horizontal alignment of the grids inside */
  horizontal: PropTypes.oneOf(['flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'space-evenly']),

  /** Vertical alignment of the grids inside */
  vertical: PropTypes.oneOf(['flex-start', 'center', 'flex-end', 'stretch'])
}

GridContainer.defaultProps = {
  direction: 'row',
  horizontal: 'center',
  vertical: 'center'
}

export default GridContainer