import React, { useSelector } from 'react'
import { useParams } from 'react-router-dom'

import ViewWrapper from '../../components/ViewWrapper/ViewWrapper'

const ProfileEditView = () => {
  const { id } = useParams()
  const storeuser = useSelector(store => store.user)

  if (!storeuser) { // Is logged in
    window.location.replace(window.location.origin + '/notauthenticated')
  } else if (storeuser.role !== 'admin' && storeuser.id !== id) { // Is either admin or self
    window.location.replace(window.location.origin + '/notauthorized')
  }

  return (
    <ViewWrapper footer={true} fullMain={true} headerType='funside' >
      <h2>Profile edit for: {id}</h2>
    </ViewWrapper>
  )
}

export default ProfileEditView