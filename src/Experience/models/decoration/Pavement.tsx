import { useGLTF, useTexture } from '@react-three/drei'

const Pavement = () => {
  const { nodes }: any = useGLTF('./models/Pavement.glb')
  //   const pavementTexture = useTexture('./textures/Pavement.jpg')
  //   pavementTexture.flipY = false
  return (
    <group>
      <mesh
        geometry={nodes.Pavement.geometry}
        material={nodes.Pavement.material}
        position={[-0.63, 0, 4.78]}
        rotation={[Math.PI, 0, Math.PI]}
      >
        {/* <meshStandardMaterial map={pavementTexture} /> */}
      </mesh>
    </group>
  )
}

export default Pavement
