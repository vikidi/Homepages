import React from 'react'

function Lights() {
  return (
    <>
      <ambientLight
        color={0x6688cc}
      />
      <directionalLight
        color={0xff9999}
        position={[-1, 1, 2]}
        intensity={0.5}
      />
      <directionalLight
        color={0x8888ff}
        position={[0, -1, 0]}
        intensity={0.2}
      />
      <directionalLight
        color={0xffffaa}
        position={[-5, 25, -1]}
        intensity={1.2}
        castShadow={true}
        shadow={{
          camera: {
            near: 0.01,
            far: 500,
            right: 30,
            left: -30,
            top: 30,
            bottom: -30,
            width: 1024,
            height: 1024,
            radius: 4,
            bias: -0.00006
          }
        }}
      />
    </>
  )
}

export default Lights