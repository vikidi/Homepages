import React, { useState } from 'react'
import { makeStyles, useTheme } from '@material-ui/styles'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'

import IconButton from '@material-ui/core/IconButton'
import Tooltip from '@material-ui/core/Tooltip'
import Brightness4 from '@material-ui/icons/Brightness4'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'

import { setTheme } from '../../reducers/themeReducer'
import { availableThemes } from '../../utils/themeUtil'

const useStyles = makeStyles(theme => ({
  root: {
    paddingRight: theme.spacing(6),
    paddingLeft: theme.spacing(6)
  },
}))

const ThemeSelectorIcon = () => {
  const classes = useStyles()
  const d = useDispatch()
  const { t } = useTranslation()
  const theme = useTheme()

  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleThemeChange = theme => {
    d(setTheme(theme))
    handleClose()

    // Reload page if in main view, the code block does not update otherwise
    if (window.location.pathname === '/') {
      window.location.reload()
    }
  }

  return (
    <>
      <Tooltip title={t('Components.ThemeSelIcon.tooltip')}>
        <IconButton
          aria-haspopup='true'
          onClick={handleMenu}
          color='inherit'
        >
          <Brightness4 />
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={open}
        onClose={handleClose}
      >
        {availableThemes.map(curTheme => {
          return (
            <MenuItem
              key={curTheme.name}
              selected={theme.name === curTheme.name}
              className={classes.root}
              onClick={() => handleThemeChange(curTheme)}
            >
              {t(`ThemeSelection.ThemeNames.${curTheme.name}`)}
            </MenuItem>
          )})
        }
      </Menu>
    </>
  )
}

export default ThemeSelectorIcon