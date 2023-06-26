import { useGLTF, useTexture } from '@react-three/drei'

const KioskStructure = () => {
  const { nodes }: any = useGLTF('./models/Kiosk/KioskStructure.glb')
  const kioskStructureTexture = useTexture('./textures/KioskStructure-min.jpg')
  kioskStructureTexture.flipY = false
  return (
    <group>
      <mesh
        geometry={nodes.KioskStructure.geometry}
        material={nodes.KioskStructure.material}
        position={[0, 3, -0.7]}
      >
        <meshBasicMaterial map={kioskStructureTexture} />
      </mesh>
    </group>
  )
}

export default KioskStructure
