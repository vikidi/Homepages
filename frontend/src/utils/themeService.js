import { createMuiTheme } from '@material-ui/core/styles'

// Themes
import dark from '../assets/themes/dark'
import light from '../assets/themes/light'

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