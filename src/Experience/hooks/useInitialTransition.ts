import { useFrame, useThree } from '@react-three/fiber'
import { useEffect, useState } from 'react'
import { sceneCenter, sceneCenterCameraPosition } from '../../config'

export const useInitialTransition = () => {
  const state = useThree()
  const [shouldTransition, setShouldTransition] = useState<boolean>(false)

  useEffect(() => {
    state.camera.lookAt(sceneCenter)
    setTimeout(() => setShouldTransition(true), 500)
  }, [])

  useFrame((state, delta) => {
    if (shouldTransition) {
      state.camera.position.lerp(sceneCenterCameraPosition, delta)
      state.camera.lookAt(sceneCenter)
      if (state.camera.position.distanceTo(sceneCenterCameraPosition) < 0.5)
        setShouldTransition(false)
    }
  })
}
