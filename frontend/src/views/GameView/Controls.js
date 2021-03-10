import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { useThree, useFrame } from 'react-three-fiber'
import { PointerLockControls } from '@react-three/drei'
import { Capsule } from 'three/examples/jsm/math/Capsule'
import { Octree } from 'three/examples/jsm/math/Octree'

const Controls = ({ gltf }) => {
  const { camera, gl, scene } = useThree()
  const gameOn = useRef(false)

  const speed = 25
  const GRAVITY = 30

  const keyStates = {}
  let playerOnFloor = true

  const worldOctree = new Octree()
  const playerCollider = new Capsule( new THREE.Vector3( 0, 0.35, 0 ), new THREE.Vector3( 0, 1, 0 ), 0.35 )

  const playerVelocity = new THREE.Vector3()
  const playerDirection = new THREE.Vector3()

  const NUM_SPHERES = 20
  const SPHERE_RADIUS = 0.2

  const sphereGeometry = new THREE.SphereGeometry( SPHERE_RADIUS, 32, 32 )
  const sphereMaterial = new THREE.MeshStandardMaterial({ color: 0x888855, roughness: 0.8, metalness: 0.5 })

  const spheres = []
  let sphereIdx = 0

  useEffect(() => {
    window.addEventListener( 'resize', onWindowResize )

    document.addEventListener( 'keyup', ( event ) => {
      keyStates[ event.code ] = false
    })

    document.addEventListener( 'keydown', ( event ) => {
      keyStates[ event.code ] = true
    })

    document.addEventListener( 'pointerlockchange', () => {
      console.log(document.pointerLockElement)
      if (document.pointerLockElement) {
        gameOn.current = true
      } else {
        gameOn.current = false
      }
    })

    document.addEventListener( 'click', () => {
      if (gameOn.current) {
        shootSphere()
      }
    })
  }, [])

  useEffect(() => {
    if (gltf) {
      worldOctree.fromGraphNode( gltf.scene )
      gltf.scene.traverse( child => {
        if ( child.isMesh ) {
          child.castShadow = true
          child.receiveShadow = true

          if ( child.material.map ) {
            child.material.map.anisotropy = 8
          }
        }
      })
    }
  }, [gltf, worldOctree])

  useEffect(() => {
    for (let i = 0; i < NUM_SPHERES; ++i) {
      const sphere = new THREE.Mesh( sphereGeometry, sphereMaterial )
      sphere.castShadow = true
      sphere.receiveShadow = true

      scene.add( sphere )

      spheres.push({ mesh: sphere, collider: new THREE.Sphere( new THREE.Vector3( 0, - 100, 0 ), SPHERE_RADIUS ), velocity: new THREE.Vector3() })
    }
  }, [scene, sphereGeometry, sphereMaterial, spheres])

  useFrame((state, deltaTime) => {
    if ( gameOn.current && playerOnFloor ) {
      if ( keyStates[ 'KeyW' ] ) {
        playerVelocity.add( getForwardVector().multiplyScalar( speed * deltaTime ))
      }

      if ( keyStates[ 'KeyS' ] ) {
        playerVelocity.add(getForwardVector().multiplyScalar( - speed * deltaTime ))
      }

      if ( keyStates[ 'KeyA' ] ) {
        playerVelocity.add(getSideVector().multiplyScalar( - speed * deltaTime ))
      }

      if ( keyStates[ 'KeyD' ] ) {
        playerVelocity.add(getSideVector().multiplyScalar( speed * deltaTime ))
      }

      if ( keyStates[ 'Space' ] ) {
        playerVelocity.y = 15
      }
    }

    updatePlayer(deltaTime)
    updateSpheres(deltaTime)
  })

  function updatePlayer( deltaTime ) {

    if ( playerOnFloor ) {

      const damping = Math.exp( - 3 * deltaTime ) - 1
      playerVelocity.addScaledVector( playerVelocity, damping )

    } else {

      playerVelocity.y -= GRAVITY * deltaTime

    }

    const deltaPosition = playerVelocity.clone().multiplyScalar( deltaTime )
    playerCollider.translate( deltaPosition )

    playerCollitions()

    camera.position.copy( playerCollider.end )
  }

  function playerCollitions() {

    const result = worldOctree.capsuleIntersect( playerCollider )

    playerOnFloor = false

    if ( result ) {

      playerOnFloor = result.normal.y > 0

      if ( ! playerOnFloor ) {

        playerVelocity.addScaledVector( result.normal, - result.normal.dot( playerVelocity ) )

      }

      playerCollider.translate( result.normal.multiplyScalar( result.depth ) )

    }

  }

  function spheresCollisions() {

    for ( let i = 0; i < spheres.length; i ++ ) {

      const s1 = spheres[ i ]

      for ( let j = i + 1; j < spheres.length; j ++ ) {

        const s2 = spheres[ j ]

        const d2 = s1.collider.center.distanceToSquared( s2.collider.center )
        const r = s1.collider.radius + s2.collider.radius
        const r2 = r * r

        if ( d2 < r2 ) {

          const normal = s1.collider.clone().center.sub( s2.collider.center ).normalize()
          const v1 = normal.clone().multiplyScalar( normal.dot( s1.velocity ) )
          const v2 = normal.clone().multiplyScalar( normal.dot( s2.velocity ) )
          s1.velocity.add( v2 ).sub( v1 )
          s2.velocity.add( v1 ).sub( v2 )

          const d = ( r - Math.sqrt( d2 ) ) / 2

          s1.collider.center.addScaledVector( normal, d )
          s2.collider.center.addScaledVector( normal, - d )

        }

      }

    }

  }

  function updateSpheres( deltaTime ) {

    spheres.forEach( sphere => {

      sphere.collider.center.addScaledVector( sphere.velocity, deltaTime )

      const result = worldOctree.sphereIntersect( sphere.collider )

      if ( result ) {

        sphere.velocity.addScaledVector( result.normal, - result.normal.dot( sphere.velocity ) * 1.5 )
        sphere.collider.center.add( result.normal.multiplyScalar( result.depth ) )

      } else {

        sphere.velocity.y -= GRAVITY * deltaTime

      }

      const damping = Math.exp( - 1.5 * deltaTime ) - 1
      sphere.velocity.addScaledVector( sphere.velocity, damping )

      spheresCollisions()

      sphere.mesh.position.copy( sphere.collider.center )

    } )

  }

  function shootSphere() {
    const sphere = spheres[ sphereIdx ]

    camera.getWorldDirection( playerDirection )

    sphere.collider.center.copy( playerCollider.end )
    sphere.velocity.copy( playerDirection ).multiplyScalar( 30 )

    sphereIdx = ( sphereIdx + 1 ) % spheres.length
  }

  function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()

    gl.setSize( window.innerWidth, window.innerHeight )
  }

  function getSideVector() {
    camera.getWorldDirection( playerDirection )
    playerDirection.y = 0
    playerDirection.normalize()
    playerDirection.cross( camera.up )

    return playerDirection
  }

  function getForwardVector() {
    camera.getWorldDirection( playerDirection )
    playerDirection.y = 0
    playerDirection.normalize()

    return playerDirection
  }

  return (
    <>
      <PointerLockControls />
    </>
  )
}

export default Controls