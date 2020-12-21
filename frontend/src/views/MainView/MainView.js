import React from 'react'

import Grid from '@material-ui/core/Grid'
import GridContainer from '../../components/GridContainer/GridContainer'
import BackgroundPaper from '../../components/BackgroundPaper/BackgroundPaper'
import BeatLoader from '../../components/BeatLoader/BeatLoader'

const MainView = () => {
  return (
    <GridContainer>
      <Grid item xs={9}>
        <BackgroundPaper>
          <h1>Welcome to my home page!</h1>
          <h3>- Pages are still under development -</h3>
        </BackgroundPaper>
        <BeatLoader />
      </Grid>
    </GridContainer>
  )
}

export default MainView