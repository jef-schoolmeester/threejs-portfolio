import { ThreeEvent } from '@react-three/fiber'
import KioskStructure from './KioskStructure'
import NewspaperRack from './NewspaperRack'
import NewspaperStacks from './NewspaperStacks'
import Newspapers from './Newspapers'
import Posters from './Posters'

const Kiosk = () => {
  return (
    <group>
      <KioskStructure />
      <NewspaperRack />
      <Posters />
      <Newspapers />
      <NewspaperStacks />
    </group>
  )
}

export default Kiosk
