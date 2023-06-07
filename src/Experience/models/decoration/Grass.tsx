import { useGLTF, useTexture } from '@react-three/drei'

const Grass = () => {
  const { nodes }: any = useGLTF('./models/Grass.glb')
  const grassTexture = useTexture('./textures/Grass.jpg')
  grassTexture.flipY = false

  return (
    <group>
      <mesh
        geometry={nodes.Grass.geometry}
        material={nodes.Grass.material}
        position={[0.34, 0.14, -4.95]}
        rotation={[-3.05, 0.86, 2.98]}
      >
        {/* <meshBasicMaterial map={grassTexture} /> */}
      </mesh>
    </group>
  )
}

export default Grass
