import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'

// Material UI Components
import Container from '@material-ui/core/Container'

// Own Components
import Navigation from '../Navigation/Navigation'
import Footer from '../Footer/Footer'

const useStyles = makeStyles(() => ({
  root: {
    marginTop: 'auto',
    marginBottom: 'auto'
  },
}))

const ViewWrapper = ({ header, footer, fullMain, children }) => {
  const classes = useStyles()

  return (
    <>
      {header && <Navigation />}
      <Container className={fullMain ? classes.root : null} component='main'>
        {children}
      </Container>
      {footer && <Footer />}
    </>
  )
}

ViewWrapper.propTypes = {
  children: PropTypes.node,
  header: PropTypes.bool,
  footer: PropTypes.bool,
  fullMain: PropTypes.bool
}

ViewWrapper.defaultProps = {
  header: true,
  footer: true,
  fullMain: false
}

export default ViewWrapper