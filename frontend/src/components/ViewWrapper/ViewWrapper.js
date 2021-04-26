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

const ViewWrapper = ({ header, headerType, footer, fullMain, children }) => {
  const classes = useStyles()

  let headerJSX = null
  switch (headerType) {
  case 'portfolio':
    headerJSX = <Navigation />
    break
  case 'funside':
    headerJSX = <Navigation /> // TODO:
    break
  default:
    headerJSX = <Navigation />
    break
  }

  return (
    <>
      {header && headerJSX}
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
  headerType: PropTypes.oneOf(['portfolio', 'funside']),
  footer: PropTypes.bool,
  fullMain: PropTypes.bool
}

ViewWrapper.defaultProps = {
  header: true,
  headerType: 'portfolio',
  footer: true,
  fullMain: false
}

export default ViewWrapper