import { useEffect, useState } from 'react'
import { useHoverStore } from '../../stores/hoverStore'
import './style.css'
import { useContentStore } from '../../stores/contentStore'

const Cursor = () => {
  const screenType = useContentStore((state) => state.screenType)
  const cursorContent = useHoverStore((state) => state.hoverMessage)
  const isHoverActive = useHoverStore((state) => state.isHoverActive)
  const [corrdinates, setCoordinates] = useState([-20, -20])

  useEffect(() => {
    window.addEventListener('mousemove', (event) => {
      setCoordinates([event.clientX, event.clientY])
    })
  }, [])

  if (screenType === 'touch') return null
  return (
    <div
      className={`customCursor ${isHoverActive ? 'customCursorActive' : ''}`}
      style={{
        transform: `translate(calc(${corrdinates[0]}px - 50%), calc(${corrdinates[1]}px - 50%))`,
      }}
    >
      <div className="customCursorInnerContainer">{cursorContent}</div>
    </div>
  )
}

export default Cursor
