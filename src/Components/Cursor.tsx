import { useEffect, useState } from 'react'
import { useHoverStore } from '../store/hoverStore'

const Cursor = () => {
  const cursorContent = useHoverStore((state) => state.hoverMessage)
  const isHoverActive = useHoverStore((state) => state.isHoverActive)
  const [corrdinates, setCoordinates] = useState([0, 0])

  useEffect(() => {
    window.addEventListener('mousemove', (event) => {
      setCoordinates([event.clientX, event.clientY])
    })
  }, [])

  return (
    <div
      className={`customCursor ${isHoverActive ? 'hoverActive' : ''}`}
      style={{
        transform: `translate(calc(${corrdinates[0]}px - 50%), calc(${corrdinates[1]}px - 50%))`,
      }}
    >
      {cursorContent}
    </div>
  )
}

export default Cursor
