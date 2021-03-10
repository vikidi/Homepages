import React, { Suspense, useState, useEffect } from 'react'
import { Canvas, useFrame } from 'react-three-fiber'
import { OrbitControls } from '@react-three/drei'
import { Physics, useBox, usePlane } from '@react-three/cannon'

// Components
import FallingText from '../../components/3d/FallingText'

function Plane(props) {
  const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0], ...props }))
  return (
    <mesh ref={ref}>
      <planeBufferGeometry attach="geometry" args={[100, 100]} />
    </mesh>
  )
}

function Cube(props) {
  const [ref, api] = useBox(() => ({ mass: 1, position: [5, 5, 0], ...props }))
  const [over, setOver] = useState(false)

  useFrame(() => {
    if (over) api.velocity.set(0, 1, 0)
  })

  useEffect(() => api.velocity.subscribe((v) => console.log(v)), [])

  return (
    <mesh ref={ref}
      onPointerOver={() => setOver(true)}
      onPointerOut={() => setOver(false)}
    >
      <meshPhysicalMaterial color={'orange'} />
      <boxBufferGeometry attach="geometry" />
    </mesh>
  )
}

const FunStuffView = () => {
  return (
    <Canvas
      colorManagement
      camera={{
        fov: 75,
        aspect: window.innerWidth / window.innerHeight,
        close: 1,
        far: 1000
      }}>
      <ambientLight />
      <directionalLight
        position={[0, 20, 7]}
        intensity={1.0}
        color="#ffffff"
      />
      <Suspense fallback={null}>
        <Physics>
          <Plane />
          <Cube />
        </Physics>
        <FallingText color="#636363" position={[0, 0.65, 0]}>
          {'CODE'}
        </FallingText>
      </Suspense>
      <OrbitControls />
    </Canvas>
  )
}

/*
position: [-30, 20, 50]

<directionalLight
        position={[0, 20, 7]}
        intensity={1.0}
        color="#ffffff"
      />

        <FallingText color="#636363">
          {'CODE'}
        </FallingText>
*/

export default FunStuffView