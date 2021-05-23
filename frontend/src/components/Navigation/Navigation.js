import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

// Material UI components
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'

// Own Components
import DrawerNavigation from '../DrawerNavigation/DrawerNavigation'
import OpenNavigation from '../OpenNavigation/OpenNavigation'

const Navigation = ({ headerType }) => {
  const breakpoint = 620

  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  // Update window's width each time changed
  useEffect(() => {
    window.addEventListener('resize', () => setWindowWidth(window.innerWidth))
  }, [])

  return (
    <AppBar position='static' color='transparent'>
      <Toolbar>

        {windowWidth > breakpoint
          ? <OpenNavigation headerType={headerType} />
          : <DrawerNavigation headerType={headerType} />}

      </Toolbar>
    </AppBar>
  )
}

Navigation.propTypes = {
  headerType: PropTypes.oneOf(['portfolio', 'funside'])
}

Navigation.defaultProps = {
  headerType: 'portfolio'
}

export default Navigation