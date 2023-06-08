import { useGLTF, useTexture } from '@react-three/drei'

const Newspapers = () => {
  const { nodes }: any = useGLTF('./models/Kiosk/Newspapers.glb')

  const newspapersTexture = useTexture('./textures/FrontNewspapers.jpg')
  newspapersTexture.flipY = false

  return (
    <group>
      <mesh
        geometry={nodes.BottomRevue1.geometry}
        material={nodes.BottomRevue1.material}
        position={[0.18, 0.71, 0.23]}
        rotation={[-Math.PI / 2, -1.2, -Math.PI / 2]}
      >
        <meshBasicMaterial map={newspapersTexture} />
      </mesh>
      <mesh
        geometry={nodes.MiddleRevue2.geometry}
        material={nodes.MiddleRevue2.material}
        position={[-0.22, 0.89, -0.06]}
        rotation={[-Math.PI / 2, -1.21, -Math.PI / 2]}
      >
        <meshBasicMaterial map={newspapersTexture} />
      </mesh>
      <mesh
        geometry={nodes.MiddleRevue4.geometry}
        material={nodes.MiddleRevue4.material}
        position={[-0.22, 0.91, -0.66]}
        rotation={[-Math.PI / 2, -1.2, -Math.PI / 2]}
      >
        <meshBasicMaterial map={newspapersTexture} />
      </mesh>
      <mesh
        geometry={nodes.MiddleRevue0.geometry}
        material={nodes.MiddleRevue0.material}
        position={[-0.22, 0.91, 0.54]}
        rotation={[-Math.PI / 2, -1.2, -Math.PI / 2]}
      >
        <meshBasicMaterial map={newspapersTexture} />
      </mesh>
      <mesh
        geometry={nodes.MiddleRevue8.geometry}
        material={nodes.MiddleRevue8.material}
        position={[-0.23, 0.89, -1.86]}
        rotation={[-Math.PI / 2, -1.23, -Math.PI / 2]}
      >
        <meshBasicMaterial map={newspapersTexture} />
      </mesh>
      <mesh
        geometry={nodes.BottomRevue5.geometry}
        material={nodes.BottomRevue5.material}
        position={[0.18, 0.71, -0.97]}
        rotation={[-Math.PI / 2, -1.2, -Math.PI / 2]}
      >
        <meshBasicMaterial map={newspapersTexture} />
      </mesh>
      <mesh
        geometry={nodes.BottomRevue6.geometry}
        material={nodes.BottomRevue6.material}
        position={[0.18, 0.71, -1.27]}
        rotation={[-Math.PI / 2, -1.2, -Math.PI / 2]}
      >
        <meshBasicMaterial map={newspapersTexture} />
      </mesh>
      <mesh
        geometry={nodes.MiddleRevue6.geometry}
        material={nodes.MiddleRevue6.material}
        position={[-0.23, 0.89, -1.26]}
        rotation={[-Math.PI / 2, -1.2, -Math.PI / 2]}
      >
        <meshBasicMaterial map={newspapersTexture} />
      </mesh>
      <mesh
        geometry={nodes.TopRevue8.geometry}
        material={nodes.TopRevue8.material}
        position={[-0.39, 1.42, -1.94]}
        rotation={[-Math.PI / 2, -0.19, -Math.PI / 2]}
      >
        <meshBasicMaterial map={newspapersTexture} />
      </mesh>
      <mesh
        geometry={nodes.TopNewspaper1.geometry}
        material={nodes.TopNewspaper1.material}
        position={[-0.51, 2.24, 0.08]}
        rotation={[0, 0, -1.84]}
      >
        <meshBasicMaterial map={newspapersTexture} />
      </mesh>
      <mesh
        geometry={nodes.BottomNewspaper1.geometry}
        material={nodes.BottomNewspaper1.material}
        position={[-0.62, 1.75, 0.1]}
        rotation={[0, 0, -1.46]}
      >
        <meshBasicMaterial map={newspapersTexture} />
      </mesh>
      <mesh
        geometry={nodes.TopNewspaper3.geometry}
        material={nodes.TopNewspaper3.material}
        position={[-0.51, 2.24, -0.91]}
        rotation={[0, 0, -1.84]}
      >
        <meshBasicMaterial map={newspapersTexture} />
      </mesh>
      <mesh
        geometry={nodes.BottomNewspaper5.geometry}
        material={nodes.BottomNewspaper5.material}
        position={[-0.58, 1.75, -1.89]}
        rotation={[0, 0, -1.48]}
      >
        <meshBasicMaterial map={newspapersTexture} />
      </mesh>
      <mesh
        geometry={nodes.BottomNewspaper0.geometry}
        material={nodes.BottomNewspaper0.material}
        position={[-0.6, 1.74, 0.59]}
        rotation={[0, 0, -1.48]}
      >
        <meshBasicMaterial map={newspapersTexture} />
      </mesh>
      <mesh
        geometry={nodes.BottomNewspaper2.geometry}
        material={nodes.BottomNewspaper2.material}
        position={[-0.6, 1.74, -0.38]}
        rotation={[0, 0, -1.48]}
      >
        <meshBasicMaterial map={newspapersTexture} />
      </mesh>
      <mesh
        geometry={nodes.BottomNewspaper4.geometry}
        material={nodes.BottomNewspaper4.material}
        position={[-0.61, 1.73, -1.53]}
        rotation={[0, 0.02, -1.5]}
      >
        <meshBasicMaterial map={newspapersTexture} />
      </mesh>
      <mesh
        geometry={nodes.BottomRevue4.geometry}
        material={nodes.BottomRevue4.material}
        position={[0.18, 0.72, -0.67]}
        rotation={[-Math.PI / 2, -1.22, -Math.PI / 2]}
      >
        <meshBasicMaterial map={newspapersTexture} />
      </mesh>
      <mesh
        geometry={nodes.BottomRevue2.geometry}
        material={nodes.BottomRevue2.material}
        position={[0.16, 0.72, -0.05]}
        rotation={[-1.45, -1.18, -1.46]}
      >
        <meshBasicMaterial map={newspapersTexture} />
      </mesh>
      <mesh
        geometry={nodes.BottomRevue0.geometry}
        material={nodes.BottomRevue0.material}
        position={[0.21, 0.71, 0.55]}
        rotation={[-Math.PI / 2, -1.22, -Math.PI / 2]}
      >
        <meshBasicMaterial map={newspapersTexture} />
      </mesh>
      <mesh
        geometry={nodes.BottomNewspaper3.geometry}
        material={nodes.BottomNewspaper3.material}
        position={[-0.58, 1.73, -1.03]}
        rotation={[0, 0.02, -1.48]}
      >
        <meshBasicMaterial map={newspapersTexture} />
      </mesh>
      <mesh
        geometry={nodes.MiddleRevue1.geometry}
        material={nodes.MiddleRevue1.material}
        position={[-0.19, 0.91, 0.24]}
        rotation={[-Math.PI / 2, -1.22, -Math.PI / 2]}
      >
        <meshBasicMaterial map={newspapersTexture} />
      </mesh>
      <mesh
        geometry={nodes.BottomRevue3.geometry}
        material={nodes.BottomRevue3.material}
        position={[0.13, 0.74, -0.38]}
        rotation={[-1.85, -1.23, -1.84]}
      >
        <meshBasicMaterial map={newspapersTexture} />
      </mesh>
      <mesh
        geometry={nodes.BottomRevue7.geometry}
        material={nodes.BottomRevue7.material}
        position={[0.21, 0.69, -1.55]}
        rotation={[-Math.PI / 2, -1.22, -Math.PI / 2]}
      >
        <meshBasicMaterial map={newspapersTexture} />
      </mesh>
      <mesh
        geometry={nodes.BottomRevue8.geometry}
        material={nodes.BottomRevue8.material}
        position={[0.15, 0.72, -1.86]}
        rotation={[-1.26, -1.23, -1.28]}
      >
        <meshBasicMaterial map={newspapersTexture} />
      </mesh>
      <mesh
        geometry={nodes.MiddleRevue7.geometry}
        material={nodes.MiddleRevue7.material}
        position={[-0.19, 0.89, -1.55]}
        rotation={[-Math.PI / 2, -1.22, -Math.PI / 2]}
      >
        <meshBasicMaterial map={newspapersTexture} />
      </mesh>
      <mesh
        geometry={nodes.MiddleRevue3.geometry}
        material={nodes.MiddleRevue3.material}
        position={[-0.19, 0.88, -0.35]}
        rotation={[-Math.PI / 2, -1.22, -Math.PI / 2]}
      >
        <meshBasicMaterial map={newspapersTexture} />
      </mesh>
      <mesh
        geometry={nodes.MiddleRevue5.geometry}
        material={nodes.MiddleRevue5.material}
        position={[-0.26, 0.93, -0.97]}
        rotation={[-1.57, -1.24, -1.57]}
      >
        <meshBasicMaterial map={newspapersTexture} />
      </mesh>
      <mesh
        geometry={nodes.TopRevue4.geometry}
        material={nodes.TopRevue4.material}
        position={[-0.35, 1.42, -0.71]}
        rotation={[-Math.PI / 2, -0.19, -Math.PI / 2]}
      >
        <meshBasicMaterial map={newspapersTexture} />
      </mesh>
      <mesh
        geometry={nodes.TopRevue0.geometry}
        material={nodes.TopRevue0.material}
        position={[-0.35, 1.42, 0.57]}
        rotation={[-Math.PI / 2, -0.19, -Math.PI / 2]}
      >
        <meshBasicMaterial map={newspapersTexture} />
      </mesh>
      <mesh
        geometry={nodes.TopRevue5.geometry}
        material={nodes.TopRevue5.material}
        position={[-0.36, 1.38, -1.03]}
        rotation={[-Math.PI / 2, -0.19, -Math.PI / 2]}
      >
        <meshBasicMaterial map={newspapersTexture} />
      </mesh>
      <mesh
        geometry={nodes.TopRevue2.geometry}
        material={nodes.TopRevue2.material}
        position={[-0.36, 1.42, -0.12]}
        rotation={[-Math.PI / 2, -0.19, -Math.PI / 2]}
      >
        <meshBasicMaterial map={newspapersTexture} />
      </mesh>
      <mesh
        geometry={nodes.TopRevue6.geometry}
        material={nodes.TopRevue6.material}
        position={[-0.35, 1.42, -1.35]}
        rotation={[-Math.PI / 2, -0.19, -Math.PI / 2]}
      >
        <meshBasicMaterial map={newspapersTexture} />
      </mesh>
      <mesh
        geometry={nodes.TopRevue7.geometry}
        material={nodes.TopRevue7.material}
        position={[-0.37, 1.42, -1.63]}
        rotation={[-Math.PI / 2, -0.19, -Math.PI / 2]}
      >
        <meshBasicMaterial map={newspapersTexture} />
      </mesh>
      <mesh
        geometry={nodes.TopRevue1.geometry}
        material={nodes.TopRevue1.material}
        position={[-0.35, 1.45, 0.21]}
        rotation={[-Math.PI / 2, -0.19, -Math.PI / 2]}
      >
        <meshBasicMaterial map={newspapersTexture} />
      </mesh>
      <mesh
        geometry={nodes.TopNewspaper2.geometry}
        material={nodes.TopNewspaper2.material}
        position={[-0.49, 2.24, -0.4]}
        rotation={[0, 0, -1.83]}
      >
        <meshBasicMaterial map={newspapersTexture} />
      </mesh>
      <mesh
        geometry={nodes.TopRevue3.geometry}
        material={nodes.TopRevue3.material}
        position={[-0.38, 1.45, -0.4]}
        rotation={[-1.55, -0.27, -1.54]}
      >
        <meshBasicMaterial map={newspapersTexture} />
      </mesh>
      <mesh
        geometry={nodes.TopNewspaper4.geometry}
        material={nodes.TopNewspaper4.material}
        position={[-0.5, 2.22, -1.37]}
        rotation={[0, 0, -1.83]}
      >
        <meshBasicMaterial map={newspapersTexture} />
      </mesh>
      <mesh
        geometry={nodes.TopNewspaper0.geometry}
        material={nodes.TopNewspaper0.material}
        position={[-0.47, 2.23, 0.59]}
        rotation={[0, 0, -1.83]}
      >
        <meshBasicMaterial map={newspapersTexture} />
      </mesh>
      <mesh
        geometry={nodes.TopNewspaper5.geometry}
        material={nodes.TopNewspaper5.material}
        position={[-0.48, 2.24, -1.9]}
        rotation={[0, 0, -1.83]}
      >
        <meshBasicMaterial map={newspapersTexture} />
      </mesh>
    </group>
  )
}

export default Newspapers
