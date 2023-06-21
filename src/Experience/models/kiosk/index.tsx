import { ThreeEvent } from '@react-three/fiber'
import KioskStructure from './KioskStructure'
import NewspaperRack from './NewspaperRack'
import NewspaperStacks from './NewspaperStacks'
import Newspapers from './Newspapers'
import Posters from './Posters'

import HitBox from './HitBox'

const Kiosk = () => {
  return (
    <group>
      <KioskStructure />
      <NewspaperRack />
      <Posters />
      <Newspapers />
      <NewspaperStacks />
      <HitBox />
    </group>
  )
}

export default Kiosk
