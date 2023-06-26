import { ThreeEvent } from '@react-three/fiber'
import { useContentStore } from '../../../stores/contentStore'
import { useHoverStore } from '../../../stores/hoverStore'
import { useTransitionStore } from '../../../stores/transitionStore'
import { Vector3 } from 'three'

interface Props {
  isActive: boolean
}

const KioskHitBox: React.FC<Props> = ({ isActive }) => {
  const setHoverActive = useHoverStore((state) => state.setHoverActive)
  const setHoverMessage = useHoverStore((state) => state.setHoverMessage)
  const clearHoverMessage = useHoverStore((state) => state.clearHoverMessage)

  const startTransition = useTransitionStore((state) => state.startTransition)
  const focusContent = useContentStore((state) => state.focusContent)

  const onHover = (event: ThreeEvent<PointerEvent>) => {
    if (!isActive) return
    setHoverActive(true)
    setHoverMessage('About me')
    event.stopPropagation()
  }

  const offHover = () => {
    setHoverActive(false)
    clearHoverMessage()
  }

  const onFocus = () => {
    if (!isActive) return
    startTransition({
      to: new Vector3(2, 1.8, -0.7),
      focusPoint: new Vector3(-0.5, 2.1, -0.7), // experience section focus
    })
    focusContent('kiosk#experiences')
    offHover()
  }

  const scale = isActive ? new Vector3(1, 1, 1) : new Vector3(0, 0, 0)

  return (
    <>
      <mesh
        position={[0, 1.5, -0.7]}
        onPointerOver={onHover}
        onPointerOut={offHover}
        onPointerMove={onHover}
        onClick={onFocus}
        scale={scale}
      >
        <boxGeometry args={[2, 3.3, 3.4]} />
        <meshBasicMaterial visible={false} />
      </mesh>
    </>
  )
}

export default KioskHitBox
