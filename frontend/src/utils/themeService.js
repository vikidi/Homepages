import { createMuiTheme } from '@material-ui/core/styles'

// Themes, use lazy loading to fetch only needed themes
import dark from '../assets/themes/dark'
import light from '../assets/themes/light'

const provideTheme = (name) => {
  let theme
  if (name === 'dark') {
    theme = dark
  } else if (name === 'light') {
    theme = light
  } else {
    theme = dark
  }

  return createMuiTheme(theme)
}

export default provideTheme