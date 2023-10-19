import { useSpring, animated } from 'react-spring'

import data from '@/data.json'

import Button from '@/Components/Button'
import { CloseIcon } from '@/Components/Icons'

import './style.css'

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
        <div className="educationOverlayTopBand">
          <Button
            style={{
              color: '#fafafa',
              borderColor: '#fafafa',
            }}
            onClick={handleClose}
            icon={
              <CloseIcon
                style={{ scale: '1.5', color: '#fafafa', stroke: '#fafafa' }}
              />
            }
          />
        </div>
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
          <Button
            text="Close"
            className="educationOverlayDesktopButton"
            onClick={handleClose}
          />
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
