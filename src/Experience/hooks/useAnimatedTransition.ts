import { useThree } from '@react-three/fiber'
import { useTransitionStore } from '../../stores/transitionStore'
import { useSpring } from '@react-spring/three'
import { useEffect } from 'react'

export const useAnimatedTransition = () => {
  const isActive = useTransitionStore((state) => state.isTransitionActive)
  const currentState = useTransitionStore((state) => state.currentState)
  const destination = useTransitionStore((state) => state.destination)
  const endTransition = useTransitionStore((state) => state.endTransition)
  const { camera } = useThree()

  const [props, api] = useSpring(() => ({
    position: [-1, -1, -1],
    focusPoint: [-1, -1, -1],
    onChange: (e) => {
      camera.position.set(
        e.value.position[0],
        e.value.position[1],
        e.value.position[2]
      )
      camera.lookAt(
        e.value.focusPoint[0],
        e.value.focusPoint[1],
        e.value.focusPoint[2]
      )
    },
    onRest: () => {
      console.log('END TRANSITION', Date.now())
      endTransition()
    },
    onStart: () => {
      console.log('START TRANSITION', Date.now())
    },
    config: {
      mass: 1,
      friction: 50,
      tension: 170,
      clamp: true,
    },
  }))

  useEffect(() => {
    if (!isActive || !destination) return
    const startingPosition = camera.position
      .toArray()
      .map((value) => parseFloat(value.toFixed(5)))
    api.start({
      from: {
        position: startingPosition,
        focusPoint: currentState.focusPoint.toArray(),
      },
      to: {
        position: destination.to.toArray(),
        focusPoint: destination.focusPoint.toArray(),
      },
    })
  }, [isActive, destination])
}
