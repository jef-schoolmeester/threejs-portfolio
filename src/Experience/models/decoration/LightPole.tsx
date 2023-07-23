import { useGLTF, useTexture } from '@react-three/drei'
import { useEffect, useRef } from 'react'
import { Mesh } from 'three'

const LightPole = () => {
  const { nodes }: any = useGLTF('./models/LightPole.glb')
  const LightPoleTexture = useTexture('./textures/Lightpole.jpg')
  LightPoleTexture.flipY = false

  const meshRef = useRef<Mesh>(null!)

  useEffect(() => {
    meshRef.current.updateMatrix()
  }, [])

  return (
    <group>
      <mesh
        ref={meshRef}
        geometry={nodes.LightPole.geometry}
        position={[0, 1.3, -4.97]}
      >
        <meshBasicMaterial map={LightPoleTexture} />
      </mesh>
    </group>
  )
}

export default LightPole
