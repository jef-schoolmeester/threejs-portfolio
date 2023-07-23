import { useGLTF, useTexture } from '@react-three/drei'
import { useEffect, useRef } from 'react'
import { Mesh } from 'three'

const Tree = () => {
  const { nodes }: any = useGLTF('./models/Tree/Tree.glb')
  const treeTexture = useTexture('./textures/Tree-min.jpg')
  treeTexture.flipY = false

  const trunkRef = useRef<Mesh>(null!)
  const leaves1Ref = useRef<Mesh>(null!)
  const leaves2Ref = useRef<Mesh>(null!)
  const leaves3Ref = useRef<Mesh>(null!)

  useEffect(() => {
    trunkRef.current.updateMatrix()
    leaves1Ref.current.updateMatrix()
    leaves2Ref.current.updateMatrix()
    leaves3Ref.current.updateMatrix()
  }, [])

  return (
    <group onPointerEnter={(event) => event.stopPropagation()}>
      <mesh
        ref={leaves3Ref}
        matrixAutoUpdate={false}
        geometry={nodes.Leaves3.geometry}
        position={[0.47, 4.86, -1.74]}
        rotation={[0, 0.71, 0]}
        scale={0.72}
      >
        <meshBasicMaterial map={treeTexture} />
      </mesh>
      <mesh
        ref={trunkRef}
        matrixAutoUpdate={false}
        geometry={nodes.Trunk.geometry}
        position={[-1.26, 0.04, -3.81]}
        rotation={[0, 0.71, 0]}
        scale={0.72}
      >
        <meshBasicMaterial map={treeTexture} />
      </mesh>
      <mesh
        ref={leaves1Ref}
        matrixAutoUpdate={false}
        geometry={nodes.Leaves1.geometry}
        position={[-2.76, 1.8, -6.23]}
        rotation={[0, 0.71, 0]}
        scale={0.72}
      >
        <meshBasicMaterial map={treeTexture} />
      </mesh>
      <mesh
        ref={leaves2Ref}
        matrixAutoUpdate={false}
        geometry={nodes.Leaves2.geometry}
        position={[-2.29, 6.23, -3.45]}
        rotation={[0, 0.71, 0]}
        scale={0.72}
      >
        <meshBasicMaterial map={treeTexture} />
      </mesh>
    </group>
  )
}

export default Tree
