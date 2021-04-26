import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'

import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'

const useStyles = makeStyles(theme => ({
  link: {
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(6)
  }
}))

const NavigationButton = ({ keyProp, onClick, icon, text }) => {
  const classes = useStyles()

  return (
    <ListItem button key={keyProp} onClick={onClick} className={classes.link}>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={text} />
    </ListItem>
  )
}

NavigationButton.propTypes = {
  /** Key for the current element */
  keyProp: PropTypes.any.isRequired,

  /** Path to link */
  onClick: PropTypes.func.isRequired,

  /** Icon to display */
  icon: PropTypes.node,

  /** String to display */
  text: PropTypes.string
}

export default NavigationButton