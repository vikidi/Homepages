import React from 'react'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { Field, reduxForm  } from 'redux-form'

import { postData } from '../../services/dataService'
import { setUser } from '../../reducers/userReducer'

// Material UI Components
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'

// Material UI Form Components
import TextField from '@material-ui/core/TextField'

// Custom Components
import GridContainer from '../../components/GridContainer/GridContainer'
import BackgroundPaper from '../../components/BackgroundPaper/BackgroundPaper'
import ViewWrapper from '../../components/ViewWrapper/ViewWrapper'
import Button from '../../components/BasicButton/BasicButton'

const renderTextField = ({
  label,
  input,
  meta: { touched, invalid, error },
  ...custom
}) => (
  <TextField
    style={{ width: '100%' }}
    label={label}
    placeholder={label}
    error={touched && invalid}
    helperText={touched && error}
    {...input}
    {...custom}
  />
)

const LoginView = props => {
  const { handleSubmit } = props

  const { t } = useTranslation()
  const d = useDispatch()

  const submit = async (values) => {
    const result = await postData('auth/login', values)

    if (result === 'error') {
      return
    }

    d(setUser(result))

    window.location.assign(window.location.origin)
  }

  return (
    <ViewWrapper header footer fullMain>
      <GridContainer>
        <Grid item md={9} xs={12}>
          <BackgroundPaper>
            <GridContainer direction='column' vertical='stretch'>

              <Typography variant="h4" gutterBottom>{t('LoginView.title')}</Typography>
              <Container maxWidth='sm'>

                <form onSubmit={handleSubmit(submit)}>
                  <div>
                    <Field
                      id="loginEmail"
                      type="text"
                      name="email"
                      component={renderTextField}
                      label={t('LoginView.email')}
                    />
                  </div>
                  <div style={{ marginTop: '10px' }}>
                    <Field
                      id="loginPassword"
                      name="password"
                      component={renderTextField}
                      label={t('LoginView.password')}
                      type='password'
                    />
                  </div>
                  <div style={{ marginTop: '20px' }}>
                    <Button type="submit">
                      {t('LoginView.submit')}
                    </Button>
                  </div>
                </form>

              </Container>

            </GridContainer>
          </BackgroundPaper>
        </Grid>
      </GridContainer>
    </ViewWrapper>
  )
}

export default reduxForm({
  form: 'LoginForm',
})(LoginView)