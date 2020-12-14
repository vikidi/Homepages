import React from 'react'
import SpinnerBeatLoader from 'react-spinners/BeatLoader'

const BeatLoader = () => {
  return (
    <div className="sweet-loading" style={{ marginTop: '2rem' }}>
      <SpinnerBeatLoader
        size={15}
        margin={2}
        loading={true}
      />
    </div>
  )
}

export default BeatLoader