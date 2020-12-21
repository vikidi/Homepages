import React from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'

import { setTheme } from '../../reducers/themeReducer'
import { setLanguage } from '../../reducers/languageReducer'

// Components
import Grid from '@material-ui/core/Grid'

import GridContainer from '../../components/GridContainer/GridContainer'
import BackgroundPaper from '../../components/BackgroundPaper/BackgroundPaper'
import Selector from '../../components/Selector/Selector'

import MenuItem from '@material-ui/core/MenuItem'

import { availableThemes } from '../../utils/themeService'
import { languages, getByName } from '../../utils/languageService'

const SettingsView = () => {
  const { t, i18n } = useTranslation()
  const d = useDispatch()

  const theme = useSelector(store => store.theme)
  const language = useSelector(store => store.language)

  const handleThemeChange = event => {
    d(setTheme({ name: event.target.value }))
  }

  const handleLanguageChange = event => {
    const langObj = getByName(event.target.value)
    i18n.changeLanguage(langObj['short'])
    d(setLanguage(langObj))
  }

  return (
    <GridContainer>
      <Grid item xs={9}>
        <BackgroundPaper>
          <Selector
            label={t('ThemeSelection.label')}
            value={theme.name}
            handleChange={handleThemeChange}
            menuItems={availableThemes.map(curTheme => <MenuItem key={curTheme.name} value={curTheme.name}>{t(`ThemeSelection.ThemeNames.${curTheme.name}`)}</MenuItem>)}
          />
          <Selector
            label={t('LanguageSelection.label')}
            value={language.name}
            handleChange={handleLanguageChange}
            menuItems={languages.map(lang => <MenuItem key={lang.short} value={lang.name}>{lang.name}</MenuItem>)}
          />
        </BackgroundPaper>
      </Grid>
    </GridContainer>
  )
}

export default SettingsView