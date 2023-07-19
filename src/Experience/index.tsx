import Models from './models'
import Helpers from './Helpers'
import Camera from './camera'
import Effects from './Effects'
import { useAnimatedTransition } from '../hooks/useAnimatedTransition'
import { useDebugMode } from '../hooks/useDebugMode'

const Experience = () => {
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
