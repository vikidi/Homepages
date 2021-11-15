import React from 'react'
import { useTranslation } from 'react-i18next'

import ViewWrapper from '../../components/ViewWrapper/ViewWrapper'

const FunSideLandingView = () => {
  const { t } = useTranslation()

  // Set page title
  document.title = `VS - ${t('PageTitles.funside')}`

  return (
    <ViewWrapper footer={true} fullMain={true} headerType='funside' >
      <h2>Fun Side Landing</h2>
    </ViewWrapper>
  )
}

export default FunSideLandingView