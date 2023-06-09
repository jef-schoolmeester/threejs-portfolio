import Button from '../Button'
import './style.css'

interface Props {
  title: string
  content: string
}

const ContentOverlay: React.FC<Props> = ({ title, content }) => {
  return (
    <div className="contentOverlayCenter">
      <div className="contentOverlayContainer">
        <span className="contentOverlayBorder" />
        <section className="contentOverlayTitleSection">
          <h2>{title}</h2>
        </section>
        <span className="contentOverlayInnerBorder" />
        <section className="contentOverlayContentSection">{content}</section>
        <span className="contentOverlayInnerBorder" />
        <section className="contentOverlayCloseSection">
          <Button text="Close" />
        </section>
        <span className="contentOverlayBorder" />
      </div>
    </div>
  )
}

export default ContentOverlay
