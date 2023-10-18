import { useFrame } from '@react-three/fiber'
import { useEffect, useRef } from 'react'
import { Mesh, Shader } from 'three'
import { useLoadedItemsContext } from '../../../hooks/useLoadedItemsContext'

const Grass = () => {
  const { loadedModelsObservable } = useLoadedItemsContext()

  const meshRef = useRef<Mesh>(null!)
  const time = useRef({ uTime: { value: 0 } })

  useFrame((state) => {
    time.current.uTime.value = state.clock.getElapsedTime()
  })

  const onBeforeCompile = (shader: Shader) => {
    shader.uniforms.uTime = time.current.uTime
    shader.vertexShader = shader.vertexShader.replace(
      '#include <common>',
      `
      #include <common>

      uniform float uTime;

      vec3 mod289(vec3 x) {
          return x - floor(x * (1.0 / 289.0)) * 289.0;
      }

      vec2 mod289(vec2 x) {
          return x - floor(x * (1.0 / 289.0)) * 289.0;
      }

      vec3 permute(vec3 x) {
          return mod289(((x*34.0)+1.0)*x);
      }

      float snoise(vec2 v){
          const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
          vec2 i  = floor(v + dot(v, C.yy) );
          vec2 x0 = v - i + dot(i, C.xx);
          vec2 i1;
          i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
          vec4 x12 = x0.xyxy + C.xxzz;
          x12.xy -= i1;
          i = mod289(i);
          vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 )) + i.x + vec3(0.0, i1.x, 1.0 ));
          vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
          m = m*m;
          m = m*m;
          vec3 x = 2.0 * fract(p * C.www) - 1.0;
          vec3 h = abs(x) - 0.5; vec3 ox = floor(x + 0.5);
          vec3 a0 = x - ox;
          m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
          vec3 g;
          g.x  = a0.x  * x0.x  + h.x  * x0.y;
          g.yz = a0.yz * x12.xz + h.yz * x12.yw;
          return 130.0 * dot(m, g);
      }
      `
    )
    shader.vertexShader = shader.vertexShader.replace(
      '#include <begin_vertex>',
      `
      #include <begin_vertex>
      vec4 modelPosition = modelMatrix * vec4(position, 1.0);
      float noise = 1.0-(snoise(vec2((uTime * 0.2 -modelPosition.x), (uTime * 0.2 -modelPosition.z)))); 
      transformed.z -= sin(noise) * modelPosition.y * modelPosition.y * 0.5;
      `
    )
  }

  useEffect(() => {
    loadedModelsObservable.subscribe('grass', ({ material, model }) => {
      if (!meshRef.current) return null
      if (model) meshRef.current.geometry = model
      if (material) {
        material.onBeforeCompile = onBeforeCompile
        meshRef.current.material = material
      }
      meshRef.current.updateMatrix()
    })
  }, [])

  return (
    <group>
      <mesh
        ref={meshRef}
        position={[0.353, 0.14, -4.887]}
        rotation={[0.05, 0.061, -0.004]}
      ></mesh>
    </group>
  )
}

export default Grass
