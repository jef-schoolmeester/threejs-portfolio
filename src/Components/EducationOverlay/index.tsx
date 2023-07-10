import Button from '../Button'
import './style.css'
import data from '../../data.json'
import { useSpring, animated } from 'react-spring'

interface Props {
  educationId: string
  handleClose: () => void
}

const EducationOverlay: React.FC<Props> = ({ educationId, handleClose }) => {
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
    <animated.div className="educationOverlayCenter" style={{ ...blurProps }}>
      <animated.div
        style={{ ...opacityProps }}
        className="educationOverlayContainer"
      >
        <span className="educationOverlayTopBand" />
        <header className="educationOverlayHeader">
          <h3>{education.term}</h3>
          <h3>{education.school}</h3>
          <h2>{education.degree}</h2>
        </header>
        <main className="educationOverlayContent">
          <h2>{education.courseName}</h2>
          <ul>
            {education.learnedTopics.map((topic) => (
              <li>{topic}</li>
            ))}
          </ul>
        </main>
        <footer className="educationOverlayFooter">
          <Button text="Close" onClick={handleClose} />
        </footer>
      </animated.div>
      <animated.div
        style={{ ...opacityProps }}
        className="educationOverlayBackpage"
      />
    </animated.div>
  )
}

export default EducationOverlay
