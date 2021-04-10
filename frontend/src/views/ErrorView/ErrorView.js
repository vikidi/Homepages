import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { makeStyles } from '@material-ui/styles'
import classNames from 'classnames'

// Material UI Components
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

// Material UI Icons
import WarningRoundedIcon from '@material-ui/icons/WarningRounded'

// Own Components
import GridContainer from '../../components/GridContainer/GridContainer'
import SlideDialog from '../../components/SlideDialog/SlideDialog'

const useStyles = makeStyles(theme => ({
  h: {
    whiteSpace: 'normal !important',
    maxWidth: '80vw !important',
    textAlign: 'center',
    marginBottom: 0
  },
  h1: {
    fontSize: '2em',
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.3em'
    }
  },
  h3: {
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
  const [open, setOpen] = useState(true)

  const classes = useStyles()
  const { t } = useTranslation()

  const clearStorage = () => {
    localStorage.clear()
    setOpen(false)
    window.location.replace(window.location.origin)
  }

  return (
    <>
      <GridContainer horizontal='center' vertical='center' direction='column'>
        <WarningRoundedIcon className={classes.warningIcon} />
        <Typography variant='h1' className={classNames(classes.h, classes.h1)}>
          {t('ErrorView.title')}
        </Typography>
        <Typography variant='h3' className={classNames(classes.h, classes.h3)}>
          {t('ErrorView.text')}
        </Typography>
      </GridContainer>
      <SlideDialog
        open={open}
        title={t('ErrorView.Dialog.title')}
        description={t('ErrorView.Dialog.description')}
      >
        <Button onClick={() => setOpen(false)} color="primary">
          {t('ErrorView.Dialog.Button.dont')}
        </Button>
        <Button onClick={clearStorage} color="primary">
          {t('ErrorView.Dialog.Button.clear')}
        </Button>
      </SlideDialog>
    </>
  )
}

export default ErrorView