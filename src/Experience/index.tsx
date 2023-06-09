import { Environment, MeshReflectorMaterial } from '@react-three/drei'
import Models from './models'
import Helpers from './Helpers'
import Camera from './camera'
import { useInitialTransition } from './hooks/useInitialTransition'
import Effects from './Effects'

const Experience = () => {
  useInitialTransition()
  return (
    <>
      <Models />
      <Camera />
      <Environment preset="forest" />
      <Helpers />
      <Effects />
    </>
  )
}

export default Experience
