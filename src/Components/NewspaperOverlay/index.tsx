import Button from '../Button'
import './style.css'
import data from '../../data.json'
import { useSpring, animated } from 'react-spring'

interface Props {
  experienceId: string
  handleClose: () => void
}

const NewspaperOverlay: React.FC<Props> = ({ experienceId, handleClose }) => {
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
    <animated.div className="newspaperOverlayCenter" style={{ ...blurProps }}>
      <animated.div
        style={{ ...opacityProps }}
        className="newspaperOverlayContainer"
      >
        <span className="newspaperOverlayBorder" />
        <section className="newspaperOverlayTitleSection">
          <h3>{experience.role}</h3>
          <h2>{experience.title}</h2>
          <h3>{experience.term}</h3>
        </section>
        <span className="newspaperOverlayInnerBorder" />
        <section
          className="newspaperOverlayContentSection"
          dangerouslySetInnerHTML={{
            __html: experience.content,
          }}
        ></section>
        <span className="newspaperOverlayInnerBorder" />
        <section className="newspaperOverlayCloseSection">
          <Button text="Close" onClick={handleClose} />
        </section>
        <span className="newspaperOverlayBorder" />
      </animated.div>
    </animated.div>
  )
}

export default NewspaperOverlay
