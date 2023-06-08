import { useGLTF, useTexture } from '@react-three/drei'

const NewspaperRack = () => {
  const { nodes }: any = useGLTF('./models/Kiosk/NewspaperRack.glb')
  const newspaperRackTexture = useTexture('./textures/NewspaperRack.jpg')
  newspaperRackTexture.flipY = false
  return (
    <group>
      <mesh
        geometry={nodes.NewspaperRack.geometry}
        material={nodes.NewspaperRack.material}
        position={[-0.44, 2.26, -0.7]}
      >
        {/* <meshBasicMaterial map={newspaperRackTexture} /> */}
      </mesh>
    </group>
  )
}

export default NewspaperRack