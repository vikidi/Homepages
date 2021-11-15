import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

import { fetchDataWithoutWrapper } from '../../services/dataService'

import ViewWrapper from '../../components/ViewWrapper/ViewWrapper'

import CustomLoader from '../../components/CustomLoader/CustomLoader'

const ProfileView = () => {
  const { id } = useParams()

  // Fetch as early as possible
  const promise = fetchDataWithoutWrapper(`/users/${id}`)

  const storeuser = useSelector(store => store.user)
  const [ userdata, setUserData ] = useState(null)
  const { t } = useTranslation()
  const history = useHistory()

  // Read real user data from server
  useEffect(() => {
    promise
      .then(resource => {
        setUserData(resource.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [storeuser, id])

  /* Check privileges */
  // Is logged in
  if (!storeuser) {
    history.replace('/notauthenticated')
  }
  // Is either admin or self
  else if (storeuser.role !== 'admin' && storeuser.id !== id) {
    history.replace('/notauthorized')
  }

  // Set page tab title
  if (storeuser) document.title = `VS - ${t('PageTitles.profile')}: ${storeuser.name}`

  const userData = () => {
    console.log(userdata)

    if (!userdata) {
      return <CustomLoader />
    }

    return (
      <>
        <h3>ID: {userdata.id}</h3>
        <h3>Name: {userdata.name}</h3>
        <h3>Email: {userdata.email}</h3>
        <h3>Role: {userdata.role}</h3>
        <h3>Groups:</h3>
        <ul>{Object.keys(userdata.groups).map(groupKey =>
          <li key={groupKey}>{`${groupKey}: ${userdata.groups[groupKey].role}, ${userdata.groups[groupKey].permissions}`}</li>)}
        </ul>
      </>
    )
  }

  return (
    <ViewWrapper footer={true} fullMain={true} headerType='funside' >
      <h2>Profile</h2>
      {userData()}
    </ViewWrapper>
  )
}

export default ProfileView