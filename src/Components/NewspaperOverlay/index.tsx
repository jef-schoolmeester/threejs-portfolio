import Button from '../Button'
import './style.css'
import data from '../../data.json'
import { useSpring, animated } from 'react-spring'
import { CloseIcon } from '../Icons'

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
        <header className="newspaperOverlayHeader">
          <div className="newspaperOverlayMobileButton">
            <Button
              style={{
                color: '#121212',
                borderColor: '#121212',
                flexGrow: 0,
              }}
              onClick={handleClose}
              icon={<CloseIcon style={{ scale: '1.5' }} />}
            />
          </div>
          <div className="newspaperOverlayHeaderInfo">
            <h3>{experience.term}</h3>
            <h3>{experience.location}</h3>
          </div>
          <h2>{experience.title}</h2>
        </header>
        <main className="newspaperOverlayMain">
          <section className="newspaperOverlayContent">
            <h2>{experience.role}</h2>
            <div
              dangerouslySetInnerHTML={{
                __html: experience.content,
              }}
            />
          </section>
          <aside className="newspaperOverlayAside">
            <ul>
              {experience.learnedConcepts?.map((concept) => (
                <li key={concept}>{concept}</li>
              ))}
            </ul>
          </aside>
        </main>
        <footer className="newspaperOverlayFooter">
          <Button
            style={{ color: '#121212', borderColor: '#121212' }}
            text="Close"
            onClick={handleClose}
          />
        </footer>
      </animated.div>
      <animated.div
        style={{ ...opacityProps }}
        className="newspaperOverlayBackpage"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
        officiis cumque voluptatum reprehenderit facilis provident iusto
        asperiores. Libero doloremque neque consequuntur temporibus ducimus
        similique a ipsum sunt, atque aspernatur doloribus! Ad omnis hic
        veritatis laboriosam laborum sit exercitationem provident, enim deleniti
        obcaecati sequi molestiae debitis aliquam itaque libero sunt eius
        aspernatur. Ad corrupti ipsum eveniet accusamus suscipit quibusdam
        obcaecati totam.
      </animated.div>
    </animated.div>
  )
}

export default NewspaperOverlay
