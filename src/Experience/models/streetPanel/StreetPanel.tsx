import { Text, useGLTF, useTexture } from '@react-three/drei'
import { ThreeEvent } from '@react-three/fiber'
import { Euler } from 'three'
import { useHoverStore } from '../../../stores/hoverStore'

const StreetPanel = () => {
  const { nodes }: any = useGLTF('./models/StreetPanel.glb')
  const streetPanelTexture = useTexture('./textures/StreetPanel.jpg')
  streetPanelTexture.flipY = false

  const textRotation = new Euler(-Math.PI * 0.5, Math.PI * 0.5, 0, 'YZX')

  const setHoverActive = useHoverStore((state) => state.setHoverActive)
  const setHoverMessage = useHoverStore((state) => state.setHoverMessage)
  const clearHoverMessage = useHoverStore((state) => state.clearHoverMessage)

  const onHover = (event: ThreeEvent<PointerEvent>) => {
    setHoverActive(true)
    setHoverMessage('Summary')
    event.stopPropagation()
  }

  const offHover = () => {
    setHoverActive(false)
    clearHoverMessage()
  }

  return (
    <group
      onPointerEnter={onHover}
      onPointerLeave={offHover}
      onPointerMove={(event) => event.stopPropagation()}
    >
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
          position={[-0.3, 0.01, 0]}
          rotation={textRotation}
          font="./fonts/Overpass.woff2"
          color="#fafafa"
          fontSize={0.13}
        >
          Summary
        </Text>
      </mesh>
    </group>
  )
}

export default StreetPanel
