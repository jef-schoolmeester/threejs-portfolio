import { useGLTF, useTexture } from '@react-three/drei'

const StreetPanel = () => {
  const { nodes }: any = useGLTF('./models/StreetPanel.glb')
  const streetPanelTexture = useTexture('./textures/StreetPanel.jpg')
  streetPanelTexture.flipY = false
  return (
    <group>
      <mesh
        geometry={nodes.Structure.geometry}
        material={nodes.Structure.material}
        position={[1.75, 0.243, -2.593]}
        rotation={[0, -0.436, 0.175]}
      >
        {/* <meshStandardMaterial map={streetPanelTexture} /> */}
      </mesh>
      <mesh
        geometry={nodes.Blackboard.geometry}
        material={nodes.Blackboard.material}
        position={[1.544, 0.735, -2.358]}
        rotation={[0, -0.436, -1.396]}
      >
        <meshStandardMaterial color="#070707" />
      </mesh>
    </group>
  )
}

export default StreetPanel
