import { ThreeEvent } from '@react-three/fiber'
import { useContentStore } from '../../../stores/contentStore'
import { useHoverStore } from '../../../stores/hoverStore'

interface Props {
  isActive: boolean
}

const StreetPanelHitBox: React.FC<Props> = ({ isActive }) => {
  const setHoverActive = useHoverStore((state) => state.setHoverActive)
  const setHoverMessage = useHoverStore((state) => state.setHoverMessage)
  const clearHoverMessage = useHoverStore((state) => state.clearHoverMessage)

  const selectContent = useContentStore((state) => state.selectContent)

  const onHover = (event: ThreeEvent<PointerEvent>) => {
    if (!isActive) return
    setHoverActive(true)
    setHoverMessage('Summary')
    event.stopPropagation()
  }

  const offHover = () => {
    setHoverActive(false)
    clearHoverMessage()
  }

  const onFocus = (event: ThreeEvent<MouseEvent>) => {
    if (!isActive) return
    event.stopPropagation()
    setHoverActive(false)
    clearHoverMessage()
    selectContent('summary')
  }

  return (
    <mesh
      position={[1.45, 0.65, -2.4]}
      rotation={[0, -0.436, 0]}
      onPointerOver={onHover}
      onPointerOut={offHover}
      onPointerMove={onHover}
      onClick={onFocus}
      name="streetPanelHitBox"
    >
      <boxGeometry args={[0.3, 1.05, 0.7]} />
      <meshBasicMaterial visible={false} />
    </mesh>
  )
}

export default StreetPanelHitBox
