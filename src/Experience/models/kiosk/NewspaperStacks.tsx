import { useGLTF, useTexture } from '@react-three/drei'

const NewspaperStacks = () => {
  const { nodes }: any = useGLTF('./models/newspapers.glb')
  const newspaperStacksTexture = useTexture('./textures/Newspapers.jpg')
  newspaperStacksTexture.flipY = false
  return (
    <group>
      <mesh
        geometry={nodes.Newspapers.geometry}
        material={nodes.Newspapers.material}
        position={[0.18, 0.71, 0.53]}
        rotation={[-Math.PI / 2, -1.2, -Math.PI / 2]}
      >
        <meshBasicMaterial map={newspaperStacksTexture} />
      </mesh>
    </group>
  )
}

export default NewspaperStacks
