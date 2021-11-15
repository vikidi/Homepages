import React, { useSelector } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import ViewWrapper from '../../components/ViewWrapper/ViewWrapper'

const ProfileEditView = () => {
  const { t } = useTranslation()

  // Set page title
  document.title = `VS - ${t('PageTitles.profileedit')}`

  const { id } = useParams()
  const history = useHistory()
  const storeuser = useSelector(store => store.user)

  if (!storeuser) { // Is logged in
    history.replace('/notauthenticated')
  } else if (storeuser.role !== 'admin' && storeuser.id !== id) { // Is either admin or self
    history.replace('/notauthorized')
  }

  return (
    <ViewWrapper footer={true} fullMain={true} headerType='funside' >
      <h2>Profile edit for: {id}</h2>
    </ViewWrapper>
  )
}

export default ProfileEditView