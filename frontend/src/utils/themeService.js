import { lazy } from 'react'
import { createMuiTheme } from '@material-ui/core/styles'

// Themes, use lazy loading to fetch only needed themes
const dark = lazy(() => import('../assets/themes/dark'))
const light = lazy (() => import('../assets/themes/light'))

const provideTheme = (name) => {
  let theme = dark // Default, should not be used
  if (name === 'dark') {
    theme = dark
  } else if (name === 'light') {
    theme = light
  }

  return createMuiTheme(theme)
}

export default provideTheme