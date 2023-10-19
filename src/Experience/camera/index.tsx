import { useMemo } from 'react'

import { OrbitControls } from '@react-three/drei'

import { useContentStore } from '@/stores/contentStore'
import { useTransitionStore } from '@/stores/transitionStore'

import { useKioskCameraControls } from '@/hooks/useKioskCameraControls'

const Camera = () => {
  useKioskCameraControls()

  const { isContentVisible, contentId } = useContentStore(
    (state) => state.focusedContent
  )

  const focusPoint = useTransitionStore(
    (state) => state.currentState.focusPoint
  )
  const isTransitionActive = useTransitionStore(
    (state) => state.isTransitionActive
  )

  const isRotationEnabled = useMemo(
    () => !isContentVisible || !contentId.includes('kiosk'),
    [contentId, isContentVisible]
  )

  return (
    <OrbitControls
      enabled={!isTransitionActive && isRotationEnabled}
      target={focusPoint}
      maxPolarAngle={isContentVisible ? Math.PI / 1.7 : Math.PI / 1.9}
      // enableZoom={false}
      maxDistance={27}
      enablePan={false}
      // enableRotate={isRotationEnabled}
    />
  )
}

export default Camera
