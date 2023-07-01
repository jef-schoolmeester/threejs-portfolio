import Button from '../Button'
import './style.css'
import data from '../../data.json'
import { useSpring, animated } from 'react-spring'

interface Props {
  educationId: string
  handleClose: () => void
}

const RevueOverlay: React.FC<Props> = ({ educationId, handleClose }) => {
  const education = data.education.find((_) => _.id === educationId)

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

  if (!education) return
  return (
    <animated.div className="revueOverlayCenter" style={{ ...blurProps }}>
      <animated.div
        style={{ ...opacityProps }}
        className="revueOverlayContainer"
      >
        <span className="revueOverlayBorder" />
        <section className="revueOverlayTitleSection">
          <h2>{education.courseName}</h2>
          <div>
            <h3>{education.term}</h3>
            <h3>{education.school}</h3>
          </div>
        </section>
        <span className="revueOverlayInnerBorder" />
        <section className="revueOverlayContentSection">
          {education.degree}
          <ul>
            {education.learnedTopics.map((topic) => (
              <li>{topic}</li>
            ))}
          </ul>
        </section>
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
