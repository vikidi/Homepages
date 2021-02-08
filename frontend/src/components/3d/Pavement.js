import React, { useEffect } from 'react'
import { Reflector, Plane } from '@react-three/drei'
import { useTheme } from '@material-ui/styles'

const { PI } = Math

const Pavement = () => {
  const theme = useTheme()

  useEffect(() => {
    console.log(theme)
    if (theme) console.log(theme.palette.background.main)
  }, [theme])

  return (
    <>
      <Plane
        rotation-x={-PI * 0.5}
        position={[0, -7.9, 0]}
        args={[200, 200]}
        receiveShadow
      >
        <meshBasicMaterial
          color={theme ? theme.palette.background.default : '#ffffff'}
          attach="material"
          transparent={true}
          opacity={0.4}
        />
      </Plane>
      <Reflector
        blur={[0.5, 0.5]}
        mixBlur={0.8}
        mixStrength={0.5}
        resolution={1024}
        args={[200, 200]}
        mirror={1}
        minDepthThreshold={0.9}
        maxDepthThreshold={1}
        depthScale={1}
        clipBias={0.1}
        textureWidth={1024}
        textureHeight={1024}
        position={[0, -8, 0]}
        rotation={[-PI * 0.5, 0, 0]}
      >
        {(Material, props) => <Material {...props}/>}
      </Reflector>
    </>
  )
}

export default Pavement