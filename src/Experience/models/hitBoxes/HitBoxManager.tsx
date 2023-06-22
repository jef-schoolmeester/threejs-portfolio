import { useContentStore } from '../../../stores/contentStore'
import { useTransitionStore } from '../../../stores/transitionStore'
import KioskHitBox from './KioskHitBox'
import MorrisColumnHitBox from './MorrisColumnHitBox'
import StreetPanelHitBox from './StreetPanelHitBox'

const HitBoxManager = () => {
  const focusedContent = useContentStore((state) => state.focusedContent)
  const isTransitionActive = useTransitionStore(
    (state) => state.isTransitionActive
  )

  const isHitBoxActive = !focusedContent.isContentVisible && !isTransitionActive

  return (
    <>
      <KioskHitBox isActive={isHitBoxActive} />
      <StreetPanelHitBox isActive={isHitBoxActive} />
      <MorrisColumnHitBox isActive={isHitBoxActive} />
    </>
  )
}

export default HitBoxManager
