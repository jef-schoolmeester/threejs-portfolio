import { useEffect } from 'react'
import { useContentStore } from '../stores/contentStore'

export const useRequestFullScreen = () => {
  const screenType = useContentStore((state) => state.screenType)
  useEffect(() => {
    if (screenType === 'touch') {
      document
        .querySelector('canvas')
        ?.requestFullscreen({ navigationUI: 'hide' })
    }
  }, [screenType])
}
