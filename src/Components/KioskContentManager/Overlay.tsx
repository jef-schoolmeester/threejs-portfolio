import { animated, useSpring } from 'react-spring'
import './style.css'
import React from 'react'

interface Props {
  subContentId: string
  onContentFocus: (content: 'experiences' | 'projects' | 'education') => void
}

const KioskContentOverlay: React.FC<Props> = ({
  subContentId,
  onContentFocus,
}) => {
  const [props] = useSpring(
    () => ({
      from: { opacity: 0 },
      to: { opacity: 1 },
    }),
    []
  )

  return (
    <div className="kioskContentOverlayCenter">
      <animated.div
        style={{ opacity: props.opacity, backdropFilter: 'blur(5px)' }}
        className="kioskContentOverlayContainer"
      >
        <span className="kioskContentOverlayBorder" />
        <section
          onClick={() => onContentFocus('experiences')}
          className={`kioskContentOverlaySection ${
            subContentId === 'experiences'
              ? 'kioskContentOverlaySelectedSection'
              : ''
          }`}
        >
          <h2>Experiences</h2>
        </section>
        <section
          onClick={() => onContentFocus('projects')}
          className={`kioskContentOverlaySection ${
            subContentId === 'projects'
              ? 'kioskContentOverlaySelectedSection'
              : ''
          }`}
        >
          <h2>Projects</h2>
        </section>
        <section
          onClick={() => onContentFocus('education')}
          className={`kioskContentOverlaySection ${
            subContentId === 'education'
              ? 'kioskContentOverlaySelectedSection'
              : ''
          }`}
        >
          <h2>Education</h2>
        </section>
        <span className="kioskContentOverlayBorder" />
      </animated.div>
    </div>
  )
}

export default KioskContentOverlay
