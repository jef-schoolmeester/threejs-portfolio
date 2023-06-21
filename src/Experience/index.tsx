import { Environment } from '@react-three/drei'
import Models from './models'
import Helpers from './Helpers'
import Camera from './camera'
import { useInitialTransition } from './hooks/useInitialTransition'
import Effects from './Effects'
import { Perf } from 'r3f-perf'
import { useAnimatedTransition } from './hooks/useAnimatedTransition'

const Experience = () => {
  useInitialTransition()
  useAnimatedTransition()
  return (
    <>
      <Perf position="bottom-right" />
      <Models />
      <Camera />
      <Environment preset="forest" />
      <Helpers />
      <Effects />
    </>
  )
}

export default Experience
