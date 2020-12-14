import React from 'react'
import BeatLoader from 'react-spinners/BeatLoader'

const CustomBeatLoader = () => {
  return (
    <div>
      <div className="sweet-loading" style={{ marginTop: '2rem' }}>
        <BeatLoader
          size={15}
          margin={2}
          loading={true}
        />
      </div>
    </div>
  )
}

export default CustomBeatLoader