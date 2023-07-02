import { ThreeEvent } from '@react-three/fiber'
import KioskStructure from './KioskStructure'
import NewspaperRack from './NewspaperRack'
import NewspaperStacks from './NewspaperStacks'
import Newspapers from './Newspapers'

const Kiosk = () => {
  return (
    <group>
      <KioskStructure />
      <NewspaperRack />
      <Newspapers />
      <NewspaperStacks />
    </group>
  )
}

export default Kiosk
