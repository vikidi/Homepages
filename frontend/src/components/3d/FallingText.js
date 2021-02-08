import * as THREE from 'three'
import React, { useRef, useState, useMemo } from 'react'
import { useLoader, useUpdate } from 'react-three-fiber'
import gsap from 'gsap'

const FallingText = ({
  children,
  vAlign = 'center',
  hAlign = 'center',
  color,
  ...props
}) => {

  const [fallen, setFallen] = useState(false)

  // Load the font
  const font = useLoader(THREE.FontLoader, '/fonts/bold.blob')

  // Save text styles
  const config = useMemo(
    () => ({
      font,
      size: 10,
      height: 2,
      curveSegments: 30,
      bevelEnabled: true,
      bevelThickness: 2,
      bevelSize: 1,
      bevelOffset: 0.1,
      bevelSegments: 30
    }),
    [font]
  )

  const group = useRef()

  const mesh = useUpdate(
    (self) => {
      const size = new THREE.Vector3()
      self.geometry.computeBoundingBox()
      self.geometry.boundingBox.getSize(size)
      self.position.x +=
        hAlign === 'center' ? -size.x / 2 : hAlign === 'right' ? 0 : -size.x
      self.position.y +=
        vAlign === 'center' ? -size.y / 2 : vAlign === 'top' ? 0 : -size.y
    },
    [children]
  )

  const fall = () => {
    gsap.defaults({
      duration: 1.8,
      ease: 'power3.inOut',
      yoyo: true,
    })
    gsap.to(mesh.current.rotation, {
      x: Math.PI * -0.5
    })

    setFallen(true)
  }

  return (
    <>
      <group {...props} ref={group}>
        <mesh
          ref={mesh}
          onPointerOver={!fallen ? () => fall() : null}>
          <textBufferGeometry args={[children, config]} />
          <meshStandardMaterial
            attach="material"
            metalness={0.2}
            roughness={0.3}
            color={color}
          />
        </mesh>
      </group>
    </>
  )
}

export default FallingText