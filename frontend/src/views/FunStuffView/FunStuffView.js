import React, { Suspense } from 'react'
import { Canvas } from 'react-three-fiber'
import { OrbitControls } from '@react-three/drei'

// Components
import FallingText from '../../components/3d/FallingText'

const FunStuffView = () => {
  return (
    <Canvas
      colorManagement
      camera={{
        fov: 75,
        aspect: window.innerWidth / window.innerHeight,
        close: 1,
        far: 1000,
        position: [-30, 20, 50]
      }}>
      <ambientLight />
      <directionalLight
        position={[0, 20, 7]}
        intensity={1.0}
        color="#ffffff"
      />
      <Suspense fallback={null}>
        <FallingText color="#636363">
          {'CODE'}
        </FallingText>
      </Suspense>
      <OrbitControls />
    </Canvas>
  )
}

export default FunStuffView