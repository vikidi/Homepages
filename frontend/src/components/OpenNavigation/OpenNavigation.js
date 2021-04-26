import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import { setUser } from '../../reducers/userReducer'

import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'

import ThemeSelectorIcon from '../ThemeSelectorIcon/ThemeSelectorIcon'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import SettingsIcon from '@material-ui/icons/Settings'
import MeetingRoom from '@material-ui/icons/MeetingRoom'

const useStyles = makeStyles((theme) => ({
  menu: {
    alignSelf: 'center'
  },
  link: {
    textTransform: 'capitalize',
    margin: theme.spacing(1)
  }
}))

const CustomLink = React.forwardRef((props, ref) => {
  // eslint-disable-next-line no-unused-vars
  const { navigate, ...rest } = props
  const classes = useStyles()

  return (<Button className={classes.link} ref={ref} {...rest}>{props.children}</Button>)
})

const CustomIconLink = React.forwardRef((props, ref) => {
  // eslint-disable-next-line no-unused-vars
  const { navigate, ...rest } = props

  return (<IconButton ref={ref} {...rest}>{props.children}</IconButton>)
})

CustomLink.displayName = 'CustomLink'
CustomIconLink.displayName = 'CustomIconLink'

const OpenNavigation = () => {
  const classes = useStyles()
  const { t } = useTranslation()
  const d = useDispatch()

  const user = useSelector(store => store.user)

  const logout = () => {
    d(setUser(null))
  }

  return (
    <>
      <Grid
        container
        direction="row"
        justify="space-around"
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
          <Link to='/' component={CustomLink}>{t('NavigationLinks.home')}</Link>
          <Link to='/settings' component={CustomIconLink}><SettingsIcon /></Link>
          <ThemeSelectorIcon />
          {!user && <Link to='/login' component={CustomIconLink}><ExitToAppIcon /></Link>}
          {user && <IconButton type='link' onClick={logout}><MeetingRoom /></IconButton>}
        </Grid>
      </Grid>
    </>
  )
}

export default OpenNavigation