import { sceneCenter, sceneCenterCameraPosition } from '@/config'

import { useContentStore } from '@/stores/contentStore'
import { useTransitionStore } from '@/stores/transitionStore'

import FocusOverlay from '@/Components/FocusOverlay'

const FocusManager = () => {
  const focusedContent = useContentStore((state) => state.focusedContent)
  const content = useContentStore((state) => state.content)
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

  if (
    !focusedContent.isContentVisible ||
    isTransitionActive ||
    content.isContentVisible
  )
    return null
  return <FocusOverlay handleClose={handleClose} />
}

export default FocusManager
