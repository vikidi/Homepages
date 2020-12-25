import React from 'react'
import { makeStyles, useTheme } from '@material-ui/styles'
import { useTranslation } from 'react-i18next'

// Material UI Components
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

// Material UI Icons
import Star from '@material-ui/icons/Star'

// Own Components
import GridContainer from '../../components/GridContainer/GridContainer'
import CodeBlock from '../../components/CodeBlock/CodeBlock'
import ViewWrapper from '../../components/ViewWrapper/ViewWrapper'
import CustomImage from '../../components/CustomImage/CustomImage'

// Data
import CodeBlockObj from './CodeBlockObj'

const useStyles = makeStyles(theme => ({
  quote: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(6),
    [theme.breakpoints.down('xs')]: {
      paddingBottom: theme.spacing(0)
    }
  },
  quoteStars: {
    display: 'inline',
    opacity: 0.7,
    color: theme.palette.primary.light
  },
  quoteOwner: {
    alignSelf: 'flex-end'
  },
  profilePic: {
    marginTop: theme.spacing(6),
    height: '20vw',
    width: '20vw',
    [theme.breakpoints.down('xs')]: {
      height: '50vw',
      width: '50vw',
    }
  }
}))

const MainView = () => {
  const classes = useStyles()
  const theme = useTheme()
  const { t } = useTranslation()

  const codeBlock = CodeBlockObj(theme, t)

  return (
    <ViewWrapper footer={true} fullMain={true}>
      <GridContainer horizontal='center'>

        <Grid item sm={6}>
          <GridContainer horizontal='center' direction='column'>

            <Grid item className={classes.profilePic}>
              <CustomImage round path='/img/ProfilePicSquareCartoon.png' />
            </Grid>

            <Grid item>
              <div className={classes.quote}>
                <Typography variant='h4'>
                  &#34;{t('MainView.Quote.text')}&#34;
                </Typography>
                <div className={classes.quoteStars}>
                  <Star fontSize='large'/>
                  <Star fontSize='large'/>
                  <Star fontSize='large'/>
                  <Star fontSize='large'/>
                  <Star fontSize='large'/>
                </div>
                <Typography className={classes.quoteOwner}>
                  - <i>{t('MainView.Quote.person')}</i>
                </Typography>
              </div>
            </Grid>
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