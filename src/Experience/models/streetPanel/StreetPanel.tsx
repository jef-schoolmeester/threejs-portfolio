import { Text, useGLTF, useTexture } from '@react-three/drei'
import { Euler } from 'three'
import HitBox from './HitBox'

const StreetPanel = () => {
  const { nodes }: any = useGLTF('./models/StreetPanel.glb')
  const streetPanelTexture = useTexture('./textures/StreetPanel.jpg')
  streetPanelTexture.flipY = false

  const textRotation = new Euler(-Math.PI * 0.5, Math.PI * 0.5, 0, 'YZX')

  return (
    <group>
      <HitBox />
      <mesh
        geometry={nodes.Structure.geometry}
        material={nodes.Structure.material}
        position={[1.75, 0.243, -2.593]}
        rotation={[0, -0.436, 0.175]}
      >
        <meshBasicMaterial map={streetPanelTexture} />
      </mesh>
      <mesh
        geometry={nodes.Blackboard.geometry}
        material={nodes.Blackboard.material}
        position={[1.544, 0.735, -2.358]}
        rotation={[0, -0.436, -1.396]}
      >
        <meshStandardMaterial color="#070707" />
        <Text
          position={[-0.251, 0.01, 0]}
          rotation={textRotation}
          font="./fonts/Overpass.woff2"
          color="#fafafa"
          fontSize={0.12}
        >
          Summary
        </Text>
        <Text
          position={[0.1, 0.01, 0]}
          rotation={textRotation}
          font="./fonts/Overpass.woff2"
          color="#fafafa"
          fontSize={0.12}
          maxWidth={0.45}
          textAlign="left"
        >
          -------------------------------------------
        </Text>
      </mesh>
    </group>
  )
}

export default StreetPanel
