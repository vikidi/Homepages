import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/styles'

// Material UI Components
import {
  Grid,
  Divider,
  Typography,
  Container,
  Tooltip
} from '@material-ui/core'

// Custom Components
import GridContainer from '../../components/GridContainer/GridContainer'
import BackgroundPaper from '../../components/BackgroundPaper/BackgroundPaper'
import ViewWrapper from '../../components/ViewWrapper/ViewWrapper'

// Other Components
import { SocialIcon } from 'react-social-icons'

const useStyles = makeStyles(theme => ({
  marginblock: {
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2)
  },
  socialIcon: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    // !important just for not to use inline style
    height: '40px !important',
    width: '40px !important'
  }
}))

const ContactView = () => {
  const classes = useStyles()
  const { t } = useTranslation()

  // Set page title
  document.title = `VS - ${t('PageTitles.contact')}`

  return (
    <ViewWrapper footer={true} fullMain={true} >
      <GridContainer>
        <Grid item md={9} xs={12}>
          <BackgroundPaper>
            <GridContainer direction='column' vertical='stretch'>

              <Typography variant="h3">{t('ContactView.title')}</Typography>
              <Container maxWidth='sm'>
                <Typography variant="subtitle1" display="block" gutterBottom>{t('ContactView.description')}</Typography>
              </Container>

              <Divider className={classes.marginblock} />

              <div className={classes.marginblock}>

                <GridContainer direction='row' >
                  <Typography variant="body1" display="block">
                    Email&nbsp;
                  </Typography>
                  <Link to={{ pathname: 'mailto:ville.saarinen9@gmail.com' }} target="_blank" rel="noopener noreferrer">
                    <Typography variant="body1" display="block">ville.saarinen9@gmail.com</Typography>
                  </Link>
                </GridContainer>

              </div>

              <div className={classes.marginblock}>
                <GridContainer direction='row' >

                  <Tooltip title="Telegram" placement='top' arrow>
                    <div>
                      <SocialIcon url="https://t.me/vikidi" className={classes.socialIcon} network='telegram' target='_blank' rel="noopener noreferrer" />
                    </div>
                  </Tooltip>

                  <Tooltip title="Instagram" placement='top' arrow>
                    <div>
                      <SocialIcon url="https://instagram.com/vikidii" className={classes.socialIcon} target='_blank' rel="noopener noreferrer" />
                    </div>
                  </Tooltip>

                  <Tooltip title="Github" placement='top' arrow>
                    <div>
                      <SocialIcon url="https://github.com/vikidi" className={classes.socialIcon} target='_blank' rel="noopener noreferrer" />
                    </div>
                  </Tooltip>

                  <Tooltip title="LinkedIn" placement='top' arrow>
                    <div>
                      <SocialIcon url="https://www.linkedin.com/in/ville-saarinen/" className={classes.socialIcon} target='_blank' rel="noopener noreferrer" />
                    </div>
                  </Tooltip>

                  <Tooltip title="Facebook" placement='top' arrow>
                    <div>
                      <SocialIcon url="https://www.facebook.com/ville.saarinen.9" className={classes.socialIcon} target='_blank' rel="noopener noreferrer" />
                    </div>
                  </Tooltip>

                </GridContainer>
              </div>

            </GridContainer>
          </BackgroundPaper>
        </Grid>
      </GridContainer>
    </ViewWrapper>
  )
}

export default ContactView