import { Text } from '@react-three/drei'

interface Props {
  skills: string[][]
  position: number
  distance: number
}

const SkillSet: React.FC<Props> = ({ skills, position, distance }) => {
  const rotation = (2 * Math.PI) / 3 - (Math.PI / 3) * position + Math.PI / 6
  const x = Math.sin(rotation) * distance
  const z = Math.cos(rotation) * distance

  return (
    <>
      <Text
        position={[x, 2.3, z]}
        rotation-y={rotation}
        font="./fonts/Overpass.woff2"
        color="#121212"
        fontSize={0.17}
        maxWidth={0.1}
        anchorY="middle"
        textAlign="center"
        fillOpacity={1}
        whiteSpace="nowrap"
        letterSpacing={-0.05}
      >
        {skills[0].join('\n')}
      </Text>
      <Text
        position={[x, 0.9, z]}
        rotation-y={rotation}
        font="./fonts/Overpass.woff2"
        color="#121212"
        fontSize={0.17}
        maxWidth={0.1}
        anchorY="middle"
        textAlign="center"
        fillOpacity={1}
        whiteSpace="nowrap"
        letterSpacing={-0.05}
      >
        {skills[1].join('\n')}
      </Text>
    </>
  )
}

export default SkillSet
