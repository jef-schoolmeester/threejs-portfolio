import Grass from './Grass'
import Leaves from './Leaves'
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
      <Leaves />
    </group>
  )
}

export default Decoration
