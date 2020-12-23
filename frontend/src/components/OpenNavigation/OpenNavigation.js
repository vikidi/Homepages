import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

import Button from '@material-ui/core/Button'

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

CustomLink.displayName = 'CustomLink'

const OpenNavigation = () => {
  const classes = useStyles()
  const { t } = useTranslation()

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
          <Link to='/settings' component={CustomLink}>{t('NavigationLinks.settings')}</Link>
        </Grid>
      </Grid>
    </>
  )
}

export default OpenNavigation