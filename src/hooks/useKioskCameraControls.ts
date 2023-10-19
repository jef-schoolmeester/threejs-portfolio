import { useEffect, useMemo, useState } from 'react'

import { useThree } from '@react-three/fiber'

import { useContentStore } from '@/stores/contentStore'
import { useTransitionStore } from '@/stores/transitionStore'

export const useKioskCameraControls = () => {
  const { camera } = useThree()

  const screenType = useContentStore((state) => state.screenType)
  const { contentId } = useContentStore((state) => state.focusedContent)

  const focusPoint = useTransitionStore(
    (state) => state.currentState.focusPoint
  )
  const isTransitionActive = useTransitionStore(
    (state) => state.isTransitionActive
  )
  const isRotationEnabled = useMemo(
    () => contentId?.includes('kiosk') && !isTransitionActive,
    [contentId, isTransitionActive]
  )
  const [initialPosition, setInitialPosition] = useState<number>()
  const [currentPosition, setCurrentPosition] = useState<number>()
  const [isDragControlEnabled, setDragControlEnabled] = useState(false)

  const handleMouseDown = (event: MouseEvent) => {
    setDragControlEnabled(true)
    setInitialPosition(event.clientX / window.innerWidth)
  }
  const handleMouseMove = (event: MouseEvent) => {
    setCurrentPosition(event.clientX / window.innerWidth)
  }
  const handleMouseUp = () => {
    setDragControlEnabled(false)
    setInitialPosition(undefined)
    setCurrentPosition(undefined)
  }

  const handleTouchStart = (event: TouchEvent) => {
    const touchX = event.touches[0].clientX
    setDragControlEnabled(true)
    setInitialPosition(touchX / window.innerWidth)
  }

  const handleTouchMove = (event: TouchEvent) => {
    const touchX = event.touches[0].clientX
    setCurrentPosition(touchX / window.innerWidth)
  }

  useEffect(() => {
    if (!isDragControlEnabled) {
      setInitialPosition(undefined)
      setCurrentPosition(undefined)
    }
  }, [isDragControlEnabled])

  useEffect(() => {
    if (!initialPosition || !currentPosition || !isDragControlEnabled) return
    const newFocusPoint = focusPoint
    const nextPosition = newFocusPoint.z + currentPosition - initialPosition
    if (nextPosition >= 0.5 || nextPosition <= -1.9) return
    newFocusPoint.z += currentPosition - initialPosition
    setInitialPosition(currentPosition)
    camera.lookAt(newFocusPoint)
  }, [initialPosition, currentPosition, isDragControlEnabled])

  useEffect(() => {
    if (!isRotationEnabled || screenType !== 'mouse') return
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseup', handleMouseUp)
    return () => {
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleMouseUp)
    }
  }, [isRotationEnabled, screenType])

  useEffect(() => {
    if (!isRotationEnabled || screenType !== 'touch') return
    window.addEventListener('touchstart', handleTouchStart)
    window.addEventListener('touchmove', handleTouchMove)
    window.addEventListener('touchend', handleMouseUp)
    return () => {
      window.removeEventListener('touchstart', handleTouchStart)
      window.removeEventListener('touchmove', handleTouchMove)
      window.removeEventListener('touchend', handleMouseUp)
    }
  }, [isRotationEnabled, screenType])
}
