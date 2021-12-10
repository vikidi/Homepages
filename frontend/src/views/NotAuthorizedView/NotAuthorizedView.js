import React from 'react'
import { useTranslation } from 'react-i18next'

import ViewWrapper from '../../components/ViewWrapper/ViewWrapper'

const NotAuthorizedView = () => {
  const { t } = useTranslation()

  // Set page title
  document.title = `VS - ${t('PageTitles.notauthorized')}`

  return (
    <ViewWrapper footer={true} fullMain={true} header={false} >
      <h2>Not Authorized View</h2>
    </ViewWrapper>
  )
}

export default NotAuthorizedView