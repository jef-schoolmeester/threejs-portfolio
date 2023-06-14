import { ThreeEvent } from '@react-three/fiber'
import KioskStructure from './KioskStructure'
import NewspaperRack from './NewspaperRack'
import NewspaperStacks from './NewspaperStacks'
import Newspapers from './Newspapers'
import Posters from './Posters'
import { useHoverStore } from '../../../stores/hoverStore'
import { useTransitionStore } from '../../../stores/transitionStore'
import { Vector3 } from 'three'
import { useContentStore } from '../../../stores/contentStore'

const Kiosk = () => {
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
      to: new Vector3(2.52, 1.8, -0.7),
      focusPoint: new Vector3(-1.2, 1.2, -0.7),
    })

    focusContent('kiosk')
  }

  return (
    <group
      onPointerOver={onHover}
      onPointerOut={offHover}
      onPointerMove={(event) => event.stopPropagation()}
      onClick={onFocus}
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
