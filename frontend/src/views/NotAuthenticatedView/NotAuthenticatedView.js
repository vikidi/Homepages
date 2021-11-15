import React from 'react'
import { useTranslation } from 'react-i18next'

import ViewWrapper from '../../components/ViewWrapper/ViewWrapper'

const NotAuthenticatedView = () => {
  const { t } = useTranslation()

  // Set page title
  document.title = `VS - ${t('PageTitles.notauthenticated')}`

  return (
    <ViewWrapper footer={true} fullMain={true} header={false} >
      <h2>Not Authenticated View</h2>
    </ViewWrapper>
  )
}

export default NotAuthenticatedView