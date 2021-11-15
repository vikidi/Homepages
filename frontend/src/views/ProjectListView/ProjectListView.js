import React from 'react'
import { useTranslation } from 'react-i18next'

import ViewWrapper from '../../components/ViewWrapper/ViewWrapper'

const ProjectListView = () => {
  const { t } = useTranslation()

  // Set page title
  document.title = `VS - ${t('PageTitles.projectlist')}`

  return (
    <ViewWrapper footer={true} fullMain={true} >
      <h2>Portfolio: Project List View</h2>
    </ViewWrapper>
  )
}

export default ProjectListView