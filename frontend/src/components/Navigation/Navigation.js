import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useTranslation } from 'react-i18next'

// Material UI components
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import IconButton from '@material-ui/core/IconButton'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'

// Icons
import MenuIcon from '@material-ui/icons/Menu'
import HomeIcon from '@material-ui/icons/Home'
import SettingsIcon from '@material-ui/icons/Settings'

// My components
import NavigationLink from '../NavigationLink/NavigationLink'

const useStyles = makeStyles((/*theme*/) => ({
  list: {
    width: 250,
  },
  menubuttondiv: {
    top: 0,
    position: 'fixed'
  }
}))

const Navigation = () => {
  const classes = useStyles()
  const { t } = useTranslation()

  const [open, setOpen] = useState(false)

  const toggleDrawer = open => event => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return
    }

    setOpen(open)
  }

  const list = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <NavigationLink keyProp='home' to='/' icon={<HomeIcon />} text={t('NavigationLinks.home')} />
      </List>
      <Divider />
      <List>
        <NavigationLink keyProp='settings' to='/settings' icon={<SettingsIcon />} text={t('NavigationLinks.settings')} />
      </List>
    </div>
  )

  return (
    <>
      <div className={classes.menubuttondiv}>
        <IconButton aria-label="navigation" color="primary" onClick={toggleDrawer(true)}>
          <MenuIcon fontSize='large' />
        </IconButton>
      </div>
      <SwipeableDrawer
        anchor={'left'}
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        {list()}
      </SwipeableDrawer>
    </>
  )
}

export default Navigation