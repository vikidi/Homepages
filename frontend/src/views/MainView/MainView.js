import React from 'react'
import { makeStyles, useTheme } from '@material-ui/styles'

// Material UI Components
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

// Material UI Icons
import Star from '@material-ui/icons/Star'

// Own Components
import GridContainer from '../../components/GridContainer/GridContainer'
import CodeBlock from '../../components/CodeBlock/CodeBlock'
import ViewWrapper from '../../components/ViewWrapper/ViewWrapper'

// Data
import CodeBlockObj from './CodeBlockObj'

const useStyles = makeStyles(theme => ({
  quote: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6), // TODO: Remove this if the two parts are in column direction
  },
  quoteStars: {
    display: 'inline',
    opacity: 0.7,
    color: theme.palette.primary.light
  },
  quoteOwner: {
    alignSelf: 'flex-end'
  }
}))

const MainView = () => {
  const classes = useStyles()
  const theme = useTheme()

  const codeBlock = CodeBlockObj(theme)

  return (
    <ViewWrapper footer={true} fullMain={true}>
      <GridContainer horizontal='center'>

        <Grid item sm={6}>
          <GridContainer horizontal='center'>
            <div className={classes.quote}>
              <Typography variant='h4'>
                &#34;Hyvä Jäbä&#34;
              </Typography>
              <div className={classes.quoteStars}>
                <Star fontSize='large'/>
                <Star fontSize='large'/>
                <Star fontSize='large'/>
                <Star fontSize='large'/>
                <Star fontSize='large'/>
              </div>
              <Typography variant='Subtitle1' className={classes.quoteOwner}>
                - <i>Minä</i>
              </Typography>
            </div>
          </GridContainer>
        </Grid>

        <Grid item sm={6}>
          <CodeBlock lines={codeBlock} />
        </Grid>

      </GridContainer>
    </ViewWrapper>
  )
}

export default MainView