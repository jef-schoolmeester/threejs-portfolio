import Newspapers from './Newspapers'
import NewspaperRack from './NewspaperRack'
import KioskStructure from './KioskStructure'
import NewspaperStacks from './NewspaperStacks'

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
