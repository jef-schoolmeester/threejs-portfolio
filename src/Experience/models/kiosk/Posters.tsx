import { useGLTF } from '@react-three/drei'

const Posters = () => {
  const { nodes }: any = useGLTF('./models/Posters.glb')

  const metalness = 1
  const roughness = 0.3

  return (
    <group dispose={null}>
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
      <mesh
        geometry={nodes.Front.geometry}
        material={nodes.Front.material}
        position={[1.02, 2.65, -0.7]}
      >
        <meshStandardMaterial
          color="#070707"
          metalness={metalness}
          roughness={roughness}
        />
      </mesh>
      <mesh
        geometry={nodes.Side.geometry}
        material={nodes.Side.material}
        position={[0, 1.6, -2.42]}
      >
        <meshStandardMaterial
          color="#070707"
          metalness={metalness}
          roughness={roughness}
        />
      </mesh>
    </group>
  )
}

export default Posters
