import { Environment, MeshReflectorMaterial } from '@react-three/drei'

const Effects = () => {
  return (
    <>
      <Environment preset="forest" />
      <color args={['#04060d']} attach="background" />
      <fog args={['#04060d', 25, 85]} attach="fog" />
      <mesh position={[0, -0.01, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[200, 200]} />
        <MeshReflectorMaterial
          blur={[300, 100]}
          resolution={1024}
          mixBlur={1}
          mixStrength={50}
          roughness={0.8}
          depthScale={1.5}
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          color="#050505"
          metalness={0.5}
          mirror={0}
          side={2}
        />
      </mesh>
    </>
  )
}

export default Effects
