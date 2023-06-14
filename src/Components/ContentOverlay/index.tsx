import { animated, useSpring } from 'react-spring'
import Button from '../Button'
import './style.css'

interface Props {
  title: string
  content: string
  handleClose: () => void
}

const ContentOverlay: React.FC<Props> = ({ title, content, handleClose }) => {
  const [props, api] = useSpring(
    () => ({
      from: { opacity: 0 },
      to: { opacity: 1 },
    }),
    []
  )

  return (
    <div className="contentOverlayCenter">
      <animated.div
        style={{ opacity: props.opacity, backdropFilter: 'blur(5px)' }}
        className="contentOverlayContainer"
      >
        <span className="contentOverlayBorder" />
        <section className="contentOverlayTitleSection">
          <h2>{title}</h2>
        </section>
        <span className="contentOverlayInnerBorder" />
        <section className="contentOverlayContentSection">{content}</section>
        <span className="contentOverlayInnerBorder" />
        <section className="contentOverlayCloseSection">
          <Button text="Close" onClick={handleClose} />
        </section>
        <span className="contentOverlayBorder" />
      </animated.div>
    </div>
  )
}

export default ContentOverlay
