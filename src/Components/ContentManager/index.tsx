import data from '../../data.json'
import { useContentStore } from '../../stores/contentStore'
import ContentOverlay from '../ContentOverlay'

const ContentManager = () => {
  const content = useContentStore((state) => state.content)
  const clearContent = useContentStore((state) => state.clearContent)

  if (!content.isContentVisible) return null
  let title: string
  let contentData: string
  const [main, sub] = content.contentId.split('#') as
    | ['summary', undefined]
    | ['experiences', string]

  if (typeof sub === 'undefined') {
    title = data[main].title
    contentData = data[main].content
  } else {
    const subContent = data[main].find((_) => _.id === sub)
    if (!subContent) throw new Error('Could not find sub content')
    title = subContent.title
    contentData = subContent.content
  }
  return (
    <ContentOverlay
      handleClose={clearContent}
      title={title}
      content={contentData}
    />
  )
}

export default ContentManager
