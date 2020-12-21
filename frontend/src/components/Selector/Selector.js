import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'

import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(4),
    textAlign: 'left'
  },
}))

const Selector = ({ label, value, handleChange, menuItems }) => {
  const classes = useStyles()

  return (
    <FormControl className={classes.root}>
      <InputLabel>{label}</InputLabel>
      <Select
        value={value}
        onChange={handleChange}
      >
        {menuItems}
      </Select>
    </FormControl>
  )
}

Selector.propTypes = {
  /** Label for the selectable */
  label: PropTypes.string.isRequired,

  /** Current value */
  value: PropTypes.any.isRequired,

  /** Change handler, gets 'event' as parameter */
  handleChange: PropTypes.func.isRequired,

  /** Array of <MenuItem/> components */
  menuItems: PropTypes.array
}

export default Selector