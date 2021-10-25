import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import { setUser } from '../../reducers/userReducer'

import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import Tooltip from '@material-ui/core/Tooltip'
import Divider from '@material-ui/core/Divider'

import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import SettingsIcon from '@material-ui/icons/Settings'
import MeetingRoom from '@material-ui/icons/MeetingRoom'
import AccountBox from '@material-ui/icons/AccountBox'
import ProfileIcon from '@material-ui/icons/Person'

// My components
import NavigationLink from '../NavigationLink/NavigationLink'
import NavigationButton from '../NavigationButton/NavigationButton'

const useStyles = makeStyles((theme) => ({
  menu: {
    alignSelf: 'center'
  },
  link: {
    textTransform: 'capitalize',
    margin: theme.spacing(1)
  },
  linkMargin: {
    margin: theme.spacing(1),
    alignSelf: 'center'
  },
  divider: {
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

const OpenNavigation = ({ headerType }) => {
  const classes = useStyles()
  const { t } = useTranslation()
  const d = useDispatch()

  const user = useSelector(store => store.user)

  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

  const logout = () => {
    d(setUser(null))
  }

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const portfolioNav = () => {
    return (
      <>
        <Link to='/' component={CustomLink}>{t('NavigationLinks.home')}</Link>
        <Link to='/projects' component={CustomLink}>{t('NavigationLinks.projects')}</Link>
        <Link to='/contact' component={CustomLink}>{t('NavigationLinks.contact')}</Link>
        <Tooltip title={t('OpenNavigation.SettingDrop.tooltip')}>
          <Link to='/settings' component={CustomIconLink}><SettingsIcon /></Link>
        </Tooltip>
      </>
    )
  }

  const funNav = () => {
    return (
      <>
        {user && user.role === 'admin' && <Link to='/adminpanel' component={CustomLink}>{t('NavigationLinks.adminPanel')}</Link>}
        <Tooltip title={t('OpenNavigation.SettingDrop.tooltip')}>
          <IconButton
            aria-haspopup='true'
            onClick={handleOpen}
            color='inherit'
          >
            <AccountBox />
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
          <div>
            {user && <div><NavigationLink keyProp='profile' to={`/users/${user.id}`} icon={<ProfileIcon />} text={t('NavigationLinks.profile')} /></div>}
            {!user && <div><NavigationLink keyProp='login' to='/login' icon={<ExitToAppIcon />} text={t('NavigationLinks.login')} /></div>}
            {user && <div><NavigationButton keyProp='logout' onClick={logout} icon={<MeetingRoom />} text={t('NavigationLinks.logout')} /></div>}
          </div>
        </Menu>
      </>
    )
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
          <Grid container>
            {headerType === 'portfolio' ? portfolioNav() : funNav()}
            <Divider orientation="vertical" flexItem className={classes.divider} />
            <Link to={headerType === 'portfolio' ? '/funside' : '/'}
              className={classes.linkMargin}>
              {headerType === 'portfolio'
                ? t('NavigationLinks.funSide')
                : t('NavigationLinks.portfolioSide')}
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

OpenNavigation.propTypes = {
  headerType: PropTypes.oneOf(['portfolio', 'funside'])
}

OpenNavigation.defaultProps = {
  headerType: 'portfolio'
}

export default OpenNavigation