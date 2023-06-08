import { useGLTF, useTexture } from '@react-three/drei'

const LightPole = () => {
  const { nodes }: any = useGLTF('./models/LightPole.glb')
  const LightPoleTexture = useTexture('./textures/LightPole.jpg')
  LightPoleTexture.flipY = false
  return (
    <group>
      <mesh geometry={nodes.LightPole.geometry} position={[0, 1.3, -4.97]}>
        <meshBasicMaterial map={LightPoleTexture} />
      </mesh>
    </group>
  )
}

export default LightPole
