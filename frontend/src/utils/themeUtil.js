import { unstable_createMuiStrictModeTheme as createMuiTheme } from '@material-ui/core/styles'

import dark from '../assets/themes/dark.json'
import light from '../assets/themes/light.json'

export const availableThemes = [
  dark,
  light
]

export const defaultTheme = dark

const provideMuiTheme = theme => {
  return createMuiTheme(theme)
}

export const getThemeByName = name => {
  for(let i = 0; i < availableThemes.length; ++i) {
    if (availableThemes[i].name === name) {
      return availableThemes[i]
    }
  }

  return null
}

export default provideMuiTheme