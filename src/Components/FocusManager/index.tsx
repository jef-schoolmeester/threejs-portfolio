import { sceneCenter, sceneCenterCameraPosition } from '../../config'
import { useContentStore } from '../../stores/contentStore'
import { useTransitionStore } from '../../stores/transitionStore'
import FocusOverlay from '../FocusOverlay'

const FocusManager = () => {
  const content = useContentStore((state) => state.focusedContent)
  const close = useContentStore((state) => state.exitFocusedContent)
  const isTransitionActive = useTransitionStore(
    (state) => state.isTransitionActive
  )
  const startTransition = useTransitionStore((state) => state.startTransition)

  const handleClose = () => {
    close()
    startTransition({
      to: sceneCenterCameraPosition,
      focusPoint: sceneCenter,
    })
  }

  if (!content.isContentVisible || isTransitionActive) return null
  return <FocusOverlay handleClose={handleClose} />
}

export default FocusManager
