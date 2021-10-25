import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { fetchDataWithoutWrapper } from '../../services/dataService'

import ViewWrapper from '../../components/ViewWrapper/ViewWrapper'

const ProfileView = () => {
  const { id } = useParams()
  const storeuser = useSelector(store => store.user)
  const [ userdata, setUserData ] = useState(null)

  if (!storeuser) { // Is logged in
    window.location.replace(window.location.origin + '/notauthenticated')
  } else if (storeuser.role !== 'admin' && storeuser.id !== id) { // Is either admin or self
    window.location.replace(window.location.origin + '/notauthorized')
  }

  // Read real user data from server
  useEffect(() => {
    fetchDataWithoutWrapper(`/users/${id}`)
      .then(resource => {
        setUserData(resource.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [storeuser])

  // Set page tab title
  document.title = `Profile - ${storeuser.name}`

  return (
    <ViewWrapper footer={true} fullMain={true} headerType='funside' >
      <h2>Profile</h2>
      {userdata &&
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
      }
    </ViewWrapper>
  )
}

export default ProfileView