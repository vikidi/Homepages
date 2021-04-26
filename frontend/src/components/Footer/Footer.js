import React from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'

const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary">
      {'Copyright © Ville Saarinen '}
      {new Date().getFullYear()}
    </Typography>
  )
}

const useStyles = makeStyles((theme) => ({
  footer: {
    padding: theme.spacing(3, 2),
    backgroundColor: theme.palette.footer.main,
    textAlign: 'center'
  }
}))

const Footer = () => {
  const classes = useStyles()

  return (
    <footer className={classes.footer}>
      <Container maxWidth="md">
        <Copyright />
      </Container>
    </footer>
  )
}

export default Footer