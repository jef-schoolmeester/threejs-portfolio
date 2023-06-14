import data from '../../data.json'
import { useContentStore } from '../../stores/contentStore'
import ContentOverlay from '../ContentOverlay'

const ContentManager = () => {
  const content = useContentStore((state) => state.content)
  const clearContent = useContentStore((state) => state.clearContent)

  if (!content.isContentVisible) return null
  return (
    <ContentOverlay
      handleClose={clearContent}
      title={data['summary'].title}
      content={data['summary'].content}
    />
  )
}

export default ContentManager
