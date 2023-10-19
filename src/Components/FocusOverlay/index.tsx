import { animated, useSpring } from 'react-spring'

import Button from '@/Components/Button'

import './style.css'

interface Props {
  handleClose: () => void
}

const FocusOverlay: React.FC<Props> = ({ handleClose }) => {
  const [props] = useSpring(
    () => ({
      from: { opacity: 0 },
      to: { opacity: 1 },
    }),
    []
  )

  return (
    <div className="focusOverlayCenter">
      <animated.div
        style={{ opacity: props.opacity, backdropFilter: 'blur(5px)' }}
        className="focusOverlayContainer"
      >
        <span className="focusOverlayBorder" />
        <section className="focusOverlayCloseSection">
          <Button text="Exit" onClick={handleClose} />
        </section>
        <span className="focusOverlayBorder" />
      </animated.div>
    </div>
  )
}

export default FocusOverlay
