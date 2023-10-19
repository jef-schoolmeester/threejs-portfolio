import { TextureLoader } from 'three'

import { useLoader } from '@react-three/fiber'
import { Center, Text3D } from '@react-three/drei'

interface Props {
  title: string
  position: number
  distance: number
}

const SectionTitle: React.FC<Props> = ({ title, position, distance }) => {
  const titlesTexture = useLoader(
    TextureLoader,
    './textures/matcaps/silver.jpg'
  )

  const rotation = (2 * Math.PI) / 3 - (Math.PI / 3) * position + Math.PI / 6
  const x = Math.sin(rotation) * distance
  const z = Math.cos(rotation) * distance

  return (
    <Center position={[x, 3.08, z]} rotation-y={rotation} top disableY>
      <Text3D
        key={title}
        font="./fonts/Overpass.json"
        size={0.14}
        height={0.01}
        curveSegments={2}
        bevelEnabled
        bevelThickness={0.01}
        bevelSize={0.01}
        bevelOffset={-0.002}
        bevelSegments={1}
      >
        {title}
        <meshMatcapMaterial matcap={titlesTexture} />
      </Text3D>
    </Center>
  )
}

export default SectionTitle
