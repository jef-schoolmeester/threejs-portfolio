import { ThreeEvent } from '@react-three/fiber'
import KioskStructure from './KioskStructure'
import NewspaperRack from './NewspaperRack'
import NewspaperStacks from './NewspaperStacks'
import Newspapers from './Newspapers'
import Posters from './Posters'
import { useHoverStore } from '../../../stores/hoverStore'

const Kiosk = () => {
  const setHoverActive = useHoverStore((state) => state.setHoverActive)
  const setHoverMessage = useHoverStore((state) => state.setHoverMessage)
  const clearHoverMessage = useHoverStore((state) => state.clearHoverMessage)

  const onHover = (event: ThreeEvent<PointerEvent>) => {
    setHoverActive(true)
    setHoverMessage('About me')
    event.stopPropagation()
  }

  const offHover = () => {
    setHoverActive(false)
    clearHoverMessage()
  }
  return (
    <group
      onPointerOver={onHover}
      onPointerOut={offHover}
      onPointerMove={(event) => event.stopPropagation()}
    >
      <KioskStructure />
      <NewspaperRack />
      <NewspaperStacks />
      <Posters />
      <Newspapers />
    </group>
  )
}

export default Kiosk
