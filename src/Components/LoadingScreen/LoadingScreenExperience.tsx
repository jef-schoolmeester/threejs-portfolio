import { useFrame, useThree } from '@react-three/fiber'
import { useControls } from 'leva'
import { useEffect, useRef } from 'react'
import { AmbientLight, DirectionalLight, Vector3 } from 'three'
import Newspaper from './Newspaper'

/**
 * COLORS
 */

const LoadingScreenExperience = () => {
  const { camera } = useThree()

  const light1 = useRef<DirectionalLight>(null!)
  const light2 = useRef<DirectionalLight>(null!)
  const light3 = useRef<AmbientLight>(null!)

  const cameraControls = useControls('camera', {
    y: { min: 0, max: 10, value: 0.4 },
    z: { min: 0, max: 10, value: 0.6 },
  })

  useEffect(() => {
    camera.lookAt(new Vector3(0, 0, -0.4))
    camera.position.y = cameraControls.y
    camera.position.z = cameraControls.z
  }, [])

  useFrame(() => {
    camera.position.y = cameraControls.y
    camera.position.z = cameraControls.z
    camera.lookAt(new Vector3(0, 0, -0.4))
  })

  return (
    <>
      {/* <OrbitControls /> */}
      <Newspaper />
      <ambientLight intensity={0.2} />
      <directionalLight
        position={[-10, 2, -5]}
        intensity={1}
        color="#04060d"
        ref={light1}
        castShadow
      />
      <directionalLight
        castShadow
        position={[10, 2, -5]}
        intensity={1}
        color="#cd9460"
        ref={light2}
      />
      <ambientLight intensity={0.5} ref={light3} />
    </>
  )
}

export default LoadingScreenExperience
