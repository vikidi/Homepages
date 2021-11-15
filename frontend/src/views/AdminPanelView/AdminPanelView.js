import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import ViewWrapper from '../../components/ViewWrapper/ViewWrapper'

import Button from '../../components/BasicButton/BasicButton'

const AdminPanelView = () => {
  const { t } = useTranslation()

  // Set page title
  document.title = `VS - ${t('PageTitles.adminpanel')}`

  return (
    <ViewWrapper fullMain={true} headerType='funside' >
      <h2>Admin Panel</h2>
      <Button component={Link} to='/users' >
        Users
      </Button>
    </ViewWrapper>
  )
}

export default AdminPanelView