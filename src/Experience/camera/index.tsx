import { OrbitControls } from '@react-three/drei'
import { Vector3 } from 'three'

const Camera = () => {
  return (
    <OrbitControls
      enabled={true}
      target={new Vector3(0, 2.5, -1)}
      maxPolarAngle={Math.PI / 1.8}
    />
  )
}

export default Camera
