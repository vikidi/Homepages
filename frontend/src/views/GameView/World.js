import React from 'react'
import { useGLTF } from '@react-three/drei'

import Controls from './Controls'

const World = ({ url }) => {
  const gltf = useGLTF(url)

  return (
    <>
      <primitive object={gltf.scene} />
      <Controls gltf={gltf} />
    </>
  )
}

export default World