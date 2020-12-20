import React from 'react'
//import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'

import { setTheme } from '../../reducers/themeReducer'

// Components
import Grid from '@material-ui/core/Grid'

import GridContainer from '../../components/GridContainer/GridContainer'
import BackgroundPaper from '../../components/BackgroundPaper/BackgroundPaper'

import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'

import { availableThemes } from '../../utils/themeService'

const SettingsView = () => {
  //const t = useTranslation()
  const d = useDispatch()

  const theme = useSelector(store => store.theme)

  const handleChange = (event) => {
    d(setTheme({ name: event.target.value }))
  }

  return (
    <GridContainer>
      <Grid item xs={9}>
        <BackgroundPaper fullHeight>
          <FormControl>
            <InputLabel>Theme</InputLabel>
            <Select
              value={theme.name}
              onChange={handleChange}
            >
              {availableThemes.map(curTheme => <MenuItem key={curTheme.name} value={curTheme.name}>{curTheme.name}</MenuItem>)}
            </Select>
          </FormControl>
        </BackgroundPaper>
      </Grid>
    </GridContainer>
  )
}

export default SettingsView