import Models from './models'
import Helpers from './Helpers'
import Camera from './camera'
import { useInitialTransition } from '../hooks/useInitialTransition'
import Effects from './Effects'
import { useAnimatedTransition } from '../hooks/useAnimatedTransition'
import { useDebugMode } from '../hooks/useDebugMode'

const Experience = () => {
  useInitialTransition()
  useAnimatedTransition()

  const isDebugModeEnabled = useDebugMode()
  return (
    <>
      {isDebugModeEnabled && (
        <>
          <Helpers />
          {/* <Perf position="bottom-right" /> */}
        </>
      )}
      <Models />
      <Camera />
      <Effects />
    </>
  )
}

export default Experience
