import { ContactShadows, Environment, Sky } from '@react-three/drei'
import { useControls } from 'leva'

const Effects = () => {
  const skyparams = useControls('', {
    distance: { value: 10000, min: 10, max: 1000000 },
    sunPosition: {
      value: [10, 50, -20],
      min: [0, 0, 0],
      max: [100, 100, 100],
    },
    inclination: { value: 0.01, min: 0, max: 1 },
    azimuth: { value: Math.PI, min: 0, max: 10 },
    // mieCoefficient: { value: 0.001, min: 0, max: 1, step: 0.001 },
    mieDirectionalG: { value: 0.99, min: 0.7, max: 1, step: 0.01 },
    rayleigh: { value: 0.2, min: 0, max: 10, step: 0.001 },
    turbidity: { value: 2, min: 0, max: 100 },
  })
  return (
    <>
      {/* <Sky {...skyparams} mieCoefficient={0.005} /> */}
      <Environment preset="forest" />
      {/* <ContactShadows
        position={[0, -0.1, 0]}
        opacity={0.5}
        scale={20}
        blur={1.5}
        far={10}
      /> */}
    </>
  )
}

export default Effects
