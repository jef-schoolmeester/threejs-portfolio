import Grass from './Grass'
import LightPole from './LightPole'
import Pavement from './Pavement'
import Tree from './Tree'

const Decoration = () => {
  return (
    <group>
      <Pavement />
      <LightPole />
      <Tree />
      <Grass />
    </group>
  )
}

export default Decoration
