import { useGLTF, useTexture } from '@react-three/drei'
import { useEffect, useRef } from 'react'
import { Mesh } from 'three'

const Pavement = () => {
  const { nodes }: any = useGLTF('./models/Pavement.glb')
  const pavementTexture = useTexture('./textures/Pavement.jpg')
  pavementTexture.flipY = false

  const meshRef = useRef<Mesh>(null!)

  useEffect(() => {
    meshRef.current.updateMatrix()
  }, [])

  return (
    <group>
      <mesh
        ref={meshRef}
        geometry={nodes.Pavement.geometry}
        position={[-0.63, 0, 4.78]}
        rotation={[Math.PI, 0, Math.PI]}
        matrixAutoUpdate={false}
      >
        <meshBasicMaterial map={pavementTexture} />
      </mesh>
    </group>
  )
}

export default Pavement
