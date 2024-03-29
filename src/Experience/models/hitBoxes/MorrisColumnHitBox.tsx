import { ThreeEvent } from '@react-three/fiber'

import { useHoverStore } from '@/stores/hoverStore'
import { useContentStore } from '@/stores/contentStore'
import { useTransitionStore } from '@/stores/transitionStore'
import { Vector3 } from 'three'

interface Props {
  isActive: boolean
}

const MorrisColumnHitBox: React.FC<Props> = ({ isActive }) => {
  const setHoverActive = useHoverStore((state) => state.setHoverActive)
  const setHoverMessage = useHoverStore((state) => state.setHoverMessage)
  const clearHoverMessage = useHoverStore((state) => state.clearHoverMessage)

  const startTransition = useTransitionStore((state) => state.startTransition)
  const focusContent = useContentStore((state) => state.focusContent)

  const onHover = (event: ThreeEvent<PointerEvent>) => {
    if (!isActive) return
    setHoverActive(true)
    setHoverMessage('Skills')
    event.stopPropagation()
  }

  const offHover = () => {
    setHoverActive(false)
    clearHoverMessage()
  }

  const onFocus = (event: ThreeEvent<MouseEvent>) => {
    if (!isActive) return
    event.stopPropagation()
    startTransition({
      to: new Vector3(6.8, 1.8, 0.4),
      focusPoint: new Vector3(0, 3, 2),
    })
    focusContent('column')
    setHoverActive(false)
    clearHoverMessage()
  }

  return (
    <mesh
      position={[0, 2.8, 2]}
      rotation={[0, -Math.PI / 6, 0]}
      onPointerOver={onHover}
      onPointerOut={offHover}
      onPointerMove={onHover}
      onClick={onFocus}
      name="morrisColumnHitBox"
    >
      <cylinderGeometry args={[1, 1, 5.6, 6]} />
      <meshBasicMaterial visible={false} />
    </mesh>
  )
}

export default MorrisColumnHitBox
