import React from 'react'
import { Link } from 'react-router-dom'

import ViewWrapper from '../../components/ViewWrapper/ViewWrapper'

import Button from '../../components/BasicButton/BasicButton'

const AdminPanelView = () => {
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