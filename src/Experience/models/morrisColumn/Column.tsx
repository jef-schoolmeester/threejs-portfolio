import { useGLTF, useTexture } from '@react-three/drei'
import { useHoverStore } from '../../../stores/hoverStore'
import { ThreeEvent } from '@react-three/fiber'

const Column = () => {
  const { nodes }: any = useGLTF('./models/Column.glb')
  const columnTexture = useTexture('./textures/Column.jpg')
  columnTexture.flipY = false

  const setHoverActive = useHoverStore((state) => state.setHoverActive)
  const setHoverMessage = useHoverStore((state) => state.setHoverMessage)
  const clearHoverMessage = useHoverStore((state) => state.clearHoverMessage)

  const onHover = (event: ThreeEvent<PointerEvent>) => {
    setHoverActive(true)
    setHoverMessage('Skills')
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
        geometry={nodes.Column.geometry}
        position={[0, 1, 2]}
        rotation={[0, -Math.PI / 6, 0]}
      >
        <meshStandardMaterial
          roughness={0.3}
          metalness={0.3}
          map={columnTexture}
        />
      </mesh>
    </group>
  )
}

export default Column
