import React from 'react'
import { useTranslation } from 'react-i18next'
import { makeStyles } from '@material-ui/styles'

// Material UI Components
import Typography from '@material-ui/core/Typography'

// Material UI Icons
import WarningRoundedIcon from '@material-ui/icons/WarningRounded'

// Own Components
import GridContainer from '../../components/GridContainer/GridContainer'

const useStyles = makeStyles(theme => ({
  h1: {
    whiteSpace: 'normal !important',
    maxWidth: '80vw !important',
    textAlign: 'center',
    marginBottom: 0,
    fontSize: '2em',
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.3em'
    }
  },
  h3: {
    whiteSpace: 'normal !important',
    maxWidth: '80vw !important',
    textAlign: 'center',
    marginTop: 0,
    fontSize: '1.15em',
    [theme.breakpoints.down('xs')]: {
      fontSize: '1em'
    }
  },
  warningIcon: {
    fontSize: '10vw',
    [theme.breakpoints.down('xs')]: {
      fontSize: '30vw'
    }
  }
}))

const ErrorView = () => {
  const classes = useStyles()
  const { t } = useTranslation()

  return (
    <GridContainer horizontal='center' vertical='center' direction='column'>
      <WarningRoundedIcon className={classes.warningIcon} />
      <Typography variant='h1' className={classes.h1}>
        {t('ErrorView.title')}
      </Typography>
      <Typography variant='h3' className={classes.h3}>
        {t('ErrorView.text')}
      </Typography>
    </GridContainer>
  )
}

export default ErrorView