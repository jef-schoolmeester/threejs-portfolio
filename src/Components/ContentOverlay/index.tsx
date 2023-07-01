import { animated, useSpring } from 'react-spring'
import Button from '../Button'
import './style.css'

interface Props {
  title: string
  content: string
  handleClose: () => void
}

const ContentOverlay: React.FC<Props> = ({ title, content, handleClose }) => {
  const [opacityProps] = useSpring(
    () => ({
      from: { opacity: 0 },
      to: { opacity: 1 },
    }),
    []
  )

  const [blurProps] = useSpring(
    () => ({
      from: { backdropFilter: 'blur(0px)' },
      to: { backdropFilter: 'blur(5px)' },
    }),
    []
  )

  return (
    <animated.div className="contentOverlayCenter" style={{ ...blurProps }}>
      <animated.div
        style={{ ...opacityProps, backdropFilter: 'blur(5px)' }}
        className="contentOverlayContainer"
      >
        <span className="contentOverlayBorder" />
        <section className="contentOverlayTitleSection">
          <h2>{title}</h2>
        </section>
        <span className="contentOverlayInnerBorder" />
        <section
          className="contentOverlayContentSection"
          dangerouslySetInnerHTML={{ __html: content }}
        />
        <span className="contentOverlayInnerBorder" />
        <section className="contentOverlayCloseSection">
          <Button text="Close" onClick={handleClose} />
        </section>
        <span className="contentOverlayBorder" />
      </animated.div>
    </animated.div>
  )
}

export default ContentOverlay
