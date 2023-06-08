import { shaderMaterial, useGLTF, useTexture } from '@react-three/drei'

import grassVertexShader from '../../../shaders/grass/vertex.glsl'
import grassFragmentShader from '../../../shaders/grass/fragment.glsl'
import { extend } from '@react-three/fiber'
import { useRef } from 'react'

const GrassMaterial = shaderMaterial(
  {
    uTime: 0,
  },
  grassVertexShader,
  grassFragmentShader
)

extend({ GrassMaterial })

const Grass = () => {
  const { nodes }: any = useGLTF('./models/Grass.glb')
  const grassTexture = useTexture('./textures/Grass.jpg')
  grassTexture.flipY = false

  return (
    <group>
      <mesh
        geometry={nodes.Grass.geometry}
        position={[0.34, 0.14, -4.95]}
        rotation={[-3.05, 0.86, 2.98]}
      >
        <meshBasicMaterial map={grassTexture} />
      </mesh>
    </group>
  )
}

export default Grass
