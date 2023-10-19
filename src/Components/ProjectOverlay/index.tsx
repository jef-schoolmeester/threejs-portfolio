import { useSpring, animated } from 'react-spring'

import data from '@/data.json'

import Button from '@/Components/Button'

import './style.css'

interface Props {
  projectId: string
  handleClose: () => void
}

const ProjectOverlay: React.FC<Props> = ({ projectId, handleClose }) => {
  const project = data.projects.find((_) => _.id === projectId)

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

  if (!project) return
  return (
    <animated.div className="projectOverlayCenter" style={{ ...blurProps }}>
      <animated.div
        style={{ ...opacityProps }}
        className="projectOverlayContainer"
      >
        <header className="projectOverlayHeader">
          <div className="projectOverlayTopBand">
            <Button text="Close" onClick={handleClose} />
            <div>
              <h3>{project.term}</h3>
              <a target="blank" href={project.link.url}>
                {project.link.text}
              </a>
            </div>
          </div>
          <img src={`./images/${project.image}.png`} />
        </header>
        <main className="projectOverlayContent">
          <h2>{project.title}</h2>
          <div className="projectOverlayTextSections">
            {project.content.map((content) => (
              <div dangerouslySetInnerHTML={{ __html: content }} />
            ))}
          </div>
        </main>
        <footer className="projectOverlayFooter"></footer>
      </animated.div>
      <animated.div
        style={{ ...opacityProps }}
        className="projectOverlayBackpage"
      />
    </animated.div>
  )
}

export default ProjectOverlay
