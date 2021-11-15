import React from 'react'
import { useTranslation } from 'react-i18next'

import ViewWrapper from '../../components/ViewWrapper/ViewWrapper'

const ContactView = () => {
  const { t } = useTranslation()

  // Set page title
  document.title = `VS - ${t('PageTitles.contact')}`

  return (
    <ViewWrapper footer={true} fullMain={true} >
      <h2>Portfolio: Contact View</h2>
    </ViewWrapper>
  )
}

export default ContactView