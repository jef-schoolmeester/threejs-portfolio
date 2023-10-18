import { DepthOfField, EffectComposer } from '@react-three/postprocessing'

const Postprocessing = () => {
  return (
    <EffectComposer>
      <DepthOfField focalLength={12} focusDistance={4} bokehScale={2} />
    </EffectComposer>
  )
}

export default Postprocessing
