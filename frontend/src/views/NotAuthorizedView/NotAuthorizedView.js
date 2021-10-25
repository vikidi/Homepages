import React from 'react'

import ViewWrapper from '../../components/ViewWrapper/ViewWrapper'

const NotAuthorizedView = () => {
  return (
    <ViewWrapper footer={true} fullMain={true} header='false' >
      <h2>Not Authorized View</h2>
    </ViewWrapper>
  )
}

export default NotAuthorizedView