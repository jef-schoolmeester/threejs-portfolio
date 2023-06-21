import { Vector3 } from 'three'
import { useContentStore } from '../../stores/contentStore'
import { useTransitionStore } from '../../stores/transitionStore'
import KioskContentOverlay from './Overlay'

const KioskContentManager = () => {
  const focusContent = useContentStore((state) => state.focusContent)
  const { contentId, isContentVisible } = useContentStore(
    (state) => state.focusedContent
  )

  const startTransition = useTransitionStore((state) => state.startTransition)

  const handleFocusContent = (
    contentId: 'experiences' | 'projects' | 'education'
  ) => {
    focusContent(`kiosk#${contentId}`)
    let focusPoint: Vector3
    switch (contentId) {
      case 'experiences':
        focusPoint = new Vector3(-0.5, 2.1, -0.7)
        break
      case 'projects':
        focusPoint = new Vector3(-0.5, 1.1, -0.7)
        break
      case 'education':
        focusPoint = new Vector3(0.2, 0.7, -0.7)
        break
    }
    startTransition({
      to: new Vector3(2, 1.8, -0.7),
      focusPoint: focusPoint,
      speed: 'fast',
    })
  }

  if (!isContentVisible || !contentId.includes('kiosk')) return null

  const subContentId = contentId.split('#')[1]

  return (
    <KioskContentOverlay
      subContentId={subContentId}
      onContentFocus={handleFocusContent}
    />
  )
}

export default KioskContentManager
