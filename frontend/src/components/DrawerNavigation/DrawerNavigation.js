import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useTranslation } from 'react-i18next'

// Material UI Components
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import IconButton from '@material-ui/core/IconButton'
import List from '@material-ui/core/List'
import Grid from '@material-ui/core/Grid'
import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'

// Icons
import MenuIcon from '@material-ui/icons/Menu'
import HomeIcon from '@material-ui/icons/Home'
import SettingsIcon from '@material-ui/icons/Settings'

// My components
import NavigationLink from '../NavigationLink/NavigationLink'

const useStyles = makeStyles(theme => ({
  list: {
    width: 'auto'
  },
  menu: {
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(1)
  }
}))

const DrawerNavigation = () => {
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
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
        className={classes.menu}
      >
        <Grid item>
          <Typography className={classes.title} variant="h5" noWrap>
            Ville Saarinen
          </Typography>
        </Grid>

        <div className={classes.grow} />

        <Grid item>
          <IconButton className={classes.menu} aria-label="navigation" color="primary" onClick={toggleDrawer(true)} edge='end'>
            <MenuIcon fontSize='large' />
          </IconButton>
        </Grid>

        <SwipeableDrawer
          anchor={'right'}
          open={open}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
        >
          {list()}
        </SwipeableDrawer>
      </Grid>
    </>
  )
}

export default DrawerNavigation