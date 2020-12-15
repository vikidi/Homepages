import React from 'react'

import BasicButton from '../../components/BasicButton/BasicButton'
import BeatLoader from '../../components/BeatLoader/BeatLoader'

const MainView = () => {
  return (
    <div>
      <h2>Welcome to my home page!</h2>
      <BasicButton>Hello from my homepage!</BasicButton>
      <BeatLoader />
    </div>
  )
}

export default MainView