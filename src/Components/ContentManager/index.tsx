import data from '../../data.json'
import { useContentStore } from '../../stores/contentStore'
import ContentOverlay from '../ContentOverlay'
import NewspaperOverlay from '../NewspaperOverlay'
import RevueOverlay from '../RevueOverlay'

const ContentManager = () => {
  const content = useContentStore((state) => state.content)
  const clearContent = useContentStore((state) => state.clearContent)

  if (!content.isContentVisible) return null

  const [main, sub] = content.contentId.split('#') as
    | ['summary', undefined]
    | ['experiences', string]
    | ['education', string]
    | ['projects', string]

  switch (main) {
    case 'summary':
      return (
        <ContentOverlay
          handleClose={clearContent}
          title={data[main].title}
          content={data[main].content}
        />
      )
    case 'experiences':
      return <NewspaperOverlay handleClose={clearContent} experienceId={sub} />
    case 'education':
    case 'projects':
      return <RevueOverlay handleClose={clearContent} educationId={sub} />
    default:
      return null
  }
}

export default ContentManager
