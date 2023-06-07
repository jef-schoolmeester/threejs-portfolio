import { useGLTF, useTexture } from '@react-three/drei'

const Tree = () => {
  const { nodes }: any = useGLTF('./models/Tree/Tree.glb')
  const treeTexture = useTexture('./models/Tree/Tree.jpg')
  treeTexture.flipY = false
  return (
    <group>
      <mesh
        geometry={nodes.Leaves3.geometry}
        material={nodes.Leaves3.material}
        position={[0.47, 4.86, -1.74]}
        rotation={[0, 0.71, 0]}
        scale={0.72}
      >
        {/* <meshBasicMaterial map={treeTexture} /> */}
      </mesh>
      <mesh
        geometry={nodes.Trunk.geometry}
        material={nodes.Trunk.material}
        position={[-1.26, 0.04, -3.81]}
        rotation={[0, 0.71, 0]}
        scale={0.72}
      >
        {/* <meshBasicMaterial map={treeTexture} /> */}
      </mesh>
      <mesh
        geometry={nodes.Leaves1.geometry}
        material={nodes.Leaves1.material}
        position={[-2.76, 1.8, -6.23]}
        rotation={[0, 0.71, 0]}
        scale={0.72}
      >
        {/* <meshBasicMaterial map={treeTexture} /> */}
      </mesh>
      <mesh
        geometry={nodes.Leaves2.geometry}
        material={nodes.Leaves2.material}
        position={[-2.29, 6.23, -3.45]}
        rotation={[0, 0.71, 0]}
        scale={0.72}
      >
        {/* <meshBasicMaterial map={treeTexture} /> */}
      </mesh>
    </group>
  )
}

export default Tree
