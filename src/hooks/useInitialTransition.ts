import { useFrame, useThree } from '@react-three/fiber'
import { useEffect, useState } from 'react'
import { sceneCenter, sceneCenterCameraPosition } from '../config'
import { useContentStore } from '../stores/contentStore'

export const useInitialTransition = () => {
  const isLoadingScreenVisible = useContentStore(
    (state) => state.isLoadingScreenVisible
  )

  const state = useThree()
  const [shouldTransition, setShouldTransition] = useState<boolean>(false)

  useEffect(() => {
    if (isLoadingScreenVisible) return
    state.camera.lookAt(sceneCenter)
    setShouldTransition(true)
  }, [isLoadingScreenVisible])

  useFrame((state, delta) => {
    if (shouldTransition) {
      state.camera.position.lerp(sceneCenterCameraPosition, delta)
      state.camera.lookAt(sceneCenter)
      if (state.camera.position.distanceTo(sceneCenterCameraPosition) < 0.5)
        setShouldTransition(false)
    }
  })
}
