import { Environment, OrbitControls } from '@react-three/drei'
import Models from './models'

const Experience = () => {
  return (
    <>
      <Models />
      <OrbitControls />
      <Environment preset="forest" />
    </>
  )
}

export default Experience
