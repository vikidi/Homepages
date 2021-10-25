import React from 'react'

import ViewWrapper from '../../components/ViewWrapper/ViewWrapper'

const NotAuthenticatedView = () => {
  return (
    <ViewWrapper footer={true} fullMain={true} header='false' >
      <h2>Not Authenticated View</h2>
    </ViewWrapper>
  )
}

export default NotAuthenticatedView