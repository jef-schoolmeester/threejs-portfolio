import Tree from './Tree'
import Grass from './Grass'
import Leaves from './Leaves'
import Pavement from './Pavement'
import LightPole from './LightPole'

const Decoration = () => {
  return (
    <group>
      <Tree />
      <Grass />
      <Leaves />
      <Pavement />
      <LightPole />
    </group>
  )
}

export default Decoration
