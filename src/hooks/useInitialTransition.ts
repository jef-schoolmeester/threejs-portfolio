import { useFrame, useThree } from '@react-three/fiber'
import { useEffect, useState } from 'react'
import { sceneCenter, sceneCenterCameraPosition } from '../config'
import { useContentStore } from '../stores/contentStore'
import { useTransitionStore } from '../stores/transitionStore'

export const useInitialTransition = () => {
  const isLoadingScreenVisible = useContentStore(
    (state) => state.isLoadingScreenVisible
  )

  const endInitialTransition = useTransitionStore(
    (state) => state.endInitialTransition
  )

  const state = useThree()
  const [shouldTransition, setShouldTransition] = useState<boolean>(false)

  useEffect(() => {
    if (isLoadingScreenVisible && !window.location.hash.includes('debug'))
      return
    state.camera.lookAt(sceneCenter)
    setShouldTransition(true)
  }, [isLoadingScreenVisible])

  useFrame((state, delta) => {
    if (shouldTransition) {
      state.camera.position.lerp(sceneCenterCameraPosition, delta)
      state.camera.lookAt(sceneCenter)
      if (state.camera.position.distanceTo(sceneCenterCameraPosition) < 0.5) {
        setShouldTransition(false)
        endInitialTransition()
      }
    }
  })
}
