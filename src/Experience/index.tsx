import { useDebugMode } from '@/hooks/useDebugMode'
import { useLoadComponents } from '@/hooks/useLoadComponents'
import { useAnimatedTransition } from '@/hooks/useAnimatedTransition'

import Models from './models'
import Helpers from './Helpers'
import Camera from './camera'
import Effects from './Effects'
import Postprocessing from './Postprocessing'

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
