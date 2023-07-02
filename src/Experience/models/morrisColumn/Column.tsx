import { useGLTF, useTexture } from '@react-three/drei'

import data from '../../../data.json'
import SectionTitle from './SectionTitle'
import SkillSet from './SkillSet'

const Column = () => {
  const { nodes }: any = useGLTF('./models/Column.glb')
  const columnTexture = useTexture('./textures/Column-min.jpg')
  columnTexture.flipY = false

  const skillsTitles = Object.keys(data.skills)
  const skills = Object.values(data.skills)

  return (
    <group>
      <mesh
        geometry={nodes.Column.geometry}
        position={[0, 1, 2]}
        rotation={[0, -Math.PI / 6, 0]}
      >
        <meshBasicMaterial
          // roughness={0.3}
          // metalness={0.3}
          map={columnTexture}
        />
        {skillsTitles.map((title, index) => (
          <SectionTitle
            key={title}
            distance={1.03}
            title={title}
            position={index}
          />
        ))}
        {skills.map((skillSet, index) => (
          <SkillSet
            key={skillSet.toString()}
            distance={0.79}
            position={index}
            skills={skillSet}
          />
        ))}
      </mesh>
    </group>
  )
}

export default Column
