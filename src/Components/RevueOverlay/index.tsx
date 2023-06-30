import Button from '../Button'
import './style.css'
import data from '../../data.json'
import { useSpring, animated } from 'react-spring'

interface Props {
  experienceId: string
  handleClose: () => void
}

const RevueOverlay: React.FC<Props> = ({ experienceId, handleClose }) => {
  const experience = data.experiences.find((_) => _.id === experienceId)

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

  if (!experience) return
  return (
    <animated.div className="revueOverlayCenter" style={{ ...blurProps }}>
      <animated.div
        style={{ ...opacityProps }}
        className="revueOverlayContainer"
      >
        <span className="revueOverlayBorder" />
        <section className="revueOverlayTitleSection">
          <h3>{experience.role}</h3>
          <h2>{experience.title}</h2>
          <h3>{experience.term}</h3>
        </section>
        <span className="revueOverlayInnerBorder" />
        <section
          className="revueOverlayContentSection"
          dangerouslySetInnerHTML={{
            __html: experience.content,
          }}
        ></section>
        <span className="revueOverlayInnerBorder" />
        <section className="revueOverlayCloseSection">
          <Button text="Close" onClick={handleClose} />
        </section>
        <span className="revueOverlayBorder" />
      </animated.div>
    </animated.div>
  )
}

export default RevueOverlay
