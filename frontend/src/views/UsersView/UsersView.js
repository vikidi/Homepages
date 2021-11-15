import React, { Suspense } from 'react'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

import ViewWrapper from '../../components/ViewWrapper/ViewWrapper'

import CustomLoader from '../../components/CustomLoader/CustomLoader'

import { fetchData } from '../../services/dataService'

const resource = fetchData('/users')

const UsersView = () => {
  const { t } = useTranslation()

  // Set page title
  document.title = `VS - ${t('PageTitles.users')}`

  const user = useSelector(store => store.user)
  const users = resource.read()

  // Check for required permissions
  if (!user) { // Is logged in
    window.location.replace(window.location.origin + '/notauthenticated')
  } else if (user.role !== 'admin') { // Is admin
    window.location.replace(window.location.origin + '/notauthorized')
  }

  return (
    <ViewWrapper footer={true} fullMain={true} headerType='funside' >
      <Suspense fallback={<CustomLoader />}>
        <ul>
          {users.map(u => <li key={u.id}>{`${u.id}: ${u.name}`}</li>)}
        </ul>
      </Suspense>
    </ViewWrapper>
  )
}

export default UsersView