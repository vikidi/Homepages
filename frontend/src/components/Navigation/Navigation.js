import React, { useState, useEffect } from 'react'

// Material UI components
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'

// Own Components
import DrawerNavigation from '../DrawerNavigation/DrawerNavigation'
import OpenNavigation from '../OpenNavigation/OpenNavigation'

const Navigation = () => {
  const breakpoint = 620

  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  // Update window's width each time changed
  useEffect(() => {
    window.addEventListener('resize', () => setWindowWidth(window.innerWidth))
  }, [])

  return (
    <AppBar position='static' color='transparent'>
      <Toolbar>

        {windowWidth > breakpoint ? <OpenNavigation /> : <DrawerNavigation />}

      </Toolbar>
    </AppBar>
  )
}

export default Navigation