import React from 'react'
//import { useTranslation } from 'react-i18next'
//import { useDispatch, useSelector } from 'react-redux';

// Components
import Grid from '@material-ui/core/Grid'

import GridContainer from '../../components/GridContainer/GridContainer'
import BackgroundPaper from '../../components/BackgroundPaper/BackgroundPaper'

const SettingsView = () => {
  //const t = useTranslation()

  return (
    <GridContainer>
      <Grid item xs={9}>
        <BackgroundPaper fullHeight>
          <p>TEST</p>
        </BackgroundPaper>
      </Grid>
    </GridContainer>
  )
}

export default SettingsView