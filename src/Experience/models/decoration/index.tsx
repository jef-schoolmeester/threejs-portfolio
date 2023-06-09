import Grass from './Grass'
import LightPole from './LightPole'
import Mirror from './Mirror'
import Pavement from './Pavement'
import Tree from './Tree'

const Decoration = () => {
  return (
    <group onPointerEnter={(event) => event.stopPropagation()}>
      <Pavement />
      <LightPole />
      <Tree />
      <Grass />
      <Mirror />
    </group>
  )
}

export default Decoration
