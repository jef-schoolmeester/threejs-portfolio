import { ThreeEvent } from '@react-three/fiber'
import { useContentStore } from '../../../stores/contentStore'
import { useHoverStore } from '../../../stores/hoverStore'
import { useTransitionStore } from '../../../stores/transitionStore'
import { Vector3 } from 'three'

const HitBox = () => {
  const setHoverActive = useHoverStore((state) => state.setHoverActive)
  const setHoverMessage = useHoverStore((state) => state.setHoverMessage)
  const clearHoverMessage = useHoverStore((state) => state.clearHoverMessage)

  const startTransition = useTransitionStore((state) => state.startTransition)
  const focusContent = useContentStore((state) => state.focusContent)

  const onHover = (event: ThreeEvent<PointerEvent>) => {
    setHoverActive(true)
    setHoverMessage('About me')
    event.stopPropagation()
  }

  const offHover = () => {
    setHoverActive(false)
    clearHoverMessage()
  }

  const onFocus = () => {
    startTransition({
      to: new Vector3(2, 1.8, -0.7),
      focusPoint: new Vector3(-0.5, 2.1, -0.7), // exp
    })

    focusContent('kiosk#experiences')
  }

  return (
    <>
      <mesh
        position={[0, 1.5, -0.7]}
        onPointerOver={onHover}
        onPointerOut={offHover}
        onPointerMove={onHover}
        onClick={onFocus}
      >
        <boxGeometry args={[2, 3.3, 3.4]} />
        <meshBasicMaterial visible={false} />
      </mesh>
      <mesh position={[-0.5, 2.1, -0.7]}>
        <boxGeometry args={[0.1, 0.1, 0.1]} />
        <meshBasicMaterial visible={true} wireframe color="red" />
      </mesh>
      <mesh position={[-0.4, 1.1, -0.7]}>
        <boxGeometry args={[0.1, 0.1, 0.1]} />
        <meshBasicMaterial visible={true} wireframe color="green" />
      </mesh>
      <mesh position={[0.2, 0.7, -0.7]}>
        <boxGeometry args={[0.1, 0.1, 0.1]} />
        <meshBasicMaterial visible={true} wireframe color="purple" />
      </mesh>

      <mesh position={[2, 1.8, -0.7]}>
        <boxGeometry args={[0.1, 0.1, 0.1]} />
        <meshBasicMaterial visible={true} wireframe color="blue" />
      </mesh>
    </>
  )
}

export default HitBox
