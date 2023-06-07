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
      <NewspaperStacks />
      <Posters />
      <Newspapers />
    </group>
  )
}

export default Kiosk
