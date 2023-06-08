import { useFrame, useThree } from '@react-three/fiber'
import { useEffect, useState } from 'react'
import { Vector3 } from 'three'

const sceneCenter = new Vector3(0, 2.5, -1)
const cameraDestination = new Vector3(10, 1.8, 2)

export const useInitialTransition = () => {
  const state = useThree()
  const [shouldTransition, setShouldTransition] = useState<boolean>(false)

  useEffect(() => {
    state.camera.lookAt(sceneCenter)
    setTimeout(() => setShouldTransition(true), 500)
  }, [])

  useFrame((state, delta) => {
    if (shouldTransition) {
      state.camera.position.lerp(cameraDestination, delta)
      state.camera.lookAt(sceneCenter)
      if (state.camera.position.distanceTo(cameraDestination) < 0.5)
        setShouldTransition(false)
    }
  })
}
