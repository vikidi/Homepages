import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'

const NavigationLink = ({ keyProp, to, icon, text }) => {
  return (
    <ListItem button key={keyProp} component={Link} to={to}>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={text} />
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
  text: PropTypes.string
}

export default NavigationLink