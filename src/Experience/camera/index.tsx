import { OrbitControls } from '@react-three/drei'
import { useTransitionStore } from '../../stores/transitionStore'
import { useContentStore } from '../../stores/contentStore'
// import { useControls } from 'leva'
// import { useFrame } from '@react-three/fiber'

const Camera = () => {
  // const { positionX, positionY, positionZ, centerX, centerY, centerZ } =
  //   useControls('camera', {
  //     positionX: { value: 1.9, min: -10, max: 10, step: 0.01 },
  //     positionY: { value: 1.8, min: -10, max: 10, step: 0.01 },
  //     positionZ: { value: -0.7, min: -10, max: 10, step: 0.01 },
  //     centerX: { value: -1, min: -10, max: 10, step: 0.01 },
  //     centerY: { value: 1.3, min: -10, max: 10, step: 0.01 },
  //     centerZ: { value: -0.7, min: -10, max: 10, step: 0.01 },
  //   })

  // useFrame(({ camera }) => {
  //   camera.position.set(positionX, positionY, positionZ)
  //   camera.lookAt(centerX, centerY, centerZ)
  // })

  const { isContentVisible } = useContentStore((state) => state.focusedContent)

  const focusPoint = useTransitionStore(
    (state) => state.currentState.focusPoint
  )
  const isTransitionActive = useTransitionStore(
    (state) => state.isTransitionActive
  )

  return (
    <OrbitControls
      enabled={!isTransitionActive}
      target={focusPoint}
      maxPolarAngle={Math.PI / 1.8}
      enableZoom={false}
      enablePan={false}
      enableRotate={!isContentVisible}
    />
  )
}

export default Camera
