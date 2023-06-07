import { useGLTF, useTexture } from '@react-three/drei'

const Column = () => {
  const { nodes }: any = useGLTF('./models/Column.glb')
  const columnTexture = useTexture('./textures/Column.jpg')
  columnTexture.flipY = false
  return (
    <group>
      <mesh
        geometry={nodes.Column.geometry}
        material={nodes.Column.material}
        position={[0, 1, 2]}
        rotation={[0, -Math.PI / 6, 0]}
      >
        {/* <meshBasicMaterial map={columnTexture} /> */}
      </mesh>
    </group>
  )
}

export default Column
