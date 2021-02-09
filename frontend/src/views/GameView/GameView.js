/* eslint-disable no-unused-vars */
import React, { Suspense, useRef, useState, useEffect } from 'react'
import { extend, Canvas, useFrame, useThree, createPortal } from 'react-three-fiber'
import { PointerLockControls, useGLTF, FlyControls } from '@react-three/drei'

import World from './World'
import Lights from './Lights'
import Controls from './Controls'

const GameView = () => {

  return (
    <Suspense fallback={'LOADING...'} >
      <Canvas
        colorManagement
        camera={{
          fov: 75,
          aspect: window.innerWidth / window.innerHeight,
          near: 0.1,
          far: 1000
        }}
      >
        <color attach="background" args={[0x88ccff]} />
        <Lights />
        <Suspense fallback={'LOADING...'} >
          <World url='collision-world.glb' />
          <Controls />
        </Suspense>
      </Canvas>
    </Suspense>
  )
}

export default GameView