import { Environment, MeshReflectorMaterial } from '@react-three/drei'

const Effects = () => {
  // const skyparams = useControls('', {
  //   distance: { value: 10000, min: 10, max: 1000000 },
  //   sunPosition: {
  //     value: [10, 50, -20],
  //     min: [0, 0, 0],
  //     max: [100, 100, 100],
  //   },
  //   inclination: { value: 0.01, min: 0, max: 1 },
  //   azimuth: { value: Math.PI, min: 0, max: 10 },
  //   // mieCoefficient: { value: 0.001, min: 0, max: 1, step: 0.001 },
  //   mieDirectionalG: { value: 0.99, min: 0.7, max: 1, step: 0.01 },
  //   rayleigh: { value: 0.2, min: 0, max: 10, step: 0.001 },
  //   turbidity: { value: 2, min: 0, max: 100 },
  // })

  // const ssrProps = useControls('SSR Effect', {
  //   temporalResolve: true,
  //   STRETCH_MISSED_RAYS: true,
  //   USE_MRT: true,
  //   USE_NORMALMAP: true,
  //   USE_ROUGHNESSMAP: true,
  //   ENABLE_JITTERING: true,
  //   ENABLE_BLUR: true,
  //   temporalResolveMix: { value: 0.9, min: 0, max: 1 },
  //   temporalResolveCorrectionMix: { value: 0.25, min: 0, max: 1 },
  //   maxSamples: { value: 0, min: 0, max: 1 },
  //   resolutionScale: { value: 1, min: 0, max: 1 },
  //   blurMix: { value: 0.5, min: 0, max: 1 },
  //   blurKernelSize: { value: 8, min: 0, max: 8 },
  //   blurSharpness: { value: 0.5, min: 0, max: 1 },
  //   rayStep: { value: 0.3, min: 0, max: 1 },
  //   intensity: { value: 1, min: 0, max: 5 },
  //   maxRoughness: { value: 0.1, min: 0, max: 1 },
  //   jitter: { value: 0.7, min: 0, max: 5 },
  //   jitterSpread: { value: 0.45, min: 0, max: 1 },
  //   jitterRough: { value: 0.1, min: 0, max: 1 },
  //   roughnessFadeOut: { value: 1, min: 0, max: 1 },
  //   rayFadeOut: { value: 0, min: 0, max: 1 },
  //   MAX_STEPS: { value: 20, min: 0, max: 20 },
  //   NUM_BINARY_SEARCH_STEPS: { value: 5, min: 0, max: 10 },
  //   maxDepthDifference: { value: 3, min: 0, max: 10 },
  //   maxDepth: { value: 1, min: 0, max: 1 },
  //   thickness: { value: 10, min: 0, max: 10 },
  //   ior: { value: 1.45, min: 0, max: 2 },
  // })

  // const { color } = useControls('fog', {
  //   color: { value: '#04060d' },
  // })

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

      {/* <EffectComposer>
        <DepthOfField blur={10} focusDistance={10} />
      </EffectComposer> */}
    </>
  )
}

export default Effects
