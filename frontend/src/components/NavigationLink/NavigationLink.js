import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'

import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'

const useStyles = makeStyles(theme => ({
  link: {
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(6)
  }
}))

const ForwardNavLink = React.forwardRef((props, ref) => (
  <Link {...props} innerRef={ref} />
))
ForwardNavLink.displayName = 'ForwardNavLink'

const NavigationLink = ({ keyProp, to, icon, text, textClass }) => {
  const classes = useStyles()

  return (
    <ListItem button key={keyProp} component={ForwardNavLink} to={to} className={classes.link}>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={text} className={textClass} />
    </ListItem>
  )
}

NavigationLink.propTypes = {
  /** Key for the current element */
  keyProp: PropTypes.any.isRequired,

  /** Path to link */
  to: PropTypes.string.isRequired,

  /** Icon to display */
  icon: PropTypes.node,

  /** String to display */
  text: PropTypes.string,

  /** Text class property */
  textClass: PropTypes.string
}

export default NavigationLink