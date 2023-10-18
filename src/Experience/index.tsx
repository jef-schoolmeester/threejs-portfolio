import Models from './models'
import Helpers from './Helpers'
import Camera from './camera'
import Effects from './Effects'
import { useAnimatedTransition } from '../hooks/useAnimatedTransition'
import { useDebugMode } from '../hooks/useDebugMode'
import Postprocessing from './Postprocessing'
import { useLoadComponents } from '../hooks/useLoadComponents'

const Experience = () => {
  useAnimatedTransition()
  useLoadComponents()

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
      <Postprocessing />
    </>
  )
}

export default Experience
