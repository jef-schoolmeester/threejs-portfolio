import { Text3D, useGLTF } from '@react-three/drei'
import ContactPoster from './ContactPoster'
import { useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three'

const Posters = () => {
  const { nodes }: any = useGLTF('./models/Posters.glb')
  const texture = useLoader(TextureLoader, './textures/matcaps/FancyText.jpg')

  const metalness = 1
  const roughness = 0.5
  return (
    <>
      <ContactPoster
        geometry={nodes.Side.geometry}
        metalness={metalness}
        roughness={roughness}
      />
      <mesh
        geometry={nodes.BackLeft.geometry}
        material={nodes.BackLeft.material}
        position={[-1.05, 1.6, 0.1]}
      >
        <meshStandardMaterial
          color="#070707"
          metalness={metalness}
          roughness={roughness}
        />
      </mesh>
      <mesh
        geometry={nodes.BackRight.geometry}
        material={nodes.BackRight.material}
        position={[-1.05, 1.6, -1.5]}
      >
        <meshStandardMaterial
          color="#070707"
          metalness={metalness}
          roughness={roughness}
        />
      </mesh>
      <Text3D
        font="./fonts/Didot.json"
        rotation-y={Math.PI / 2}
        position={[1, 2.56, 0.9]}
        size={0.3}
        height={0.01}
        curveSegments={4}
        bevelEnabled
        bevelThickness={0.01}
        bevelSize={0.01}
        bevelOffset={0}
        bevelSegments={1}
      >
        <meshMatcapMaterial matcap={texture} />
        Jef Schoolmeester
      </Text3D>
    </>
  )
}

export default Posters
