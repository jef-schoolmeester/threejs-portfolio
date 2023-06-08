import Grass from './Grass'
import LightPole from './LightPole'
import Pavement from './Pavement'
import Tree from './Tree'

const Decoration = () => {
  return (
    <group onPointerEnter={(event) => event.stopPropagation()}>
      <Pavement />
      <LightPole />
      <Tree />
      <Grass />
    </group>
  )
}

export default Decoration
