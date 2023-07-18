import { useProgress } from '@react-three/drei'

import './style.css'
import { useEffect, useMemo, useRef, useState } from 'react'
import { useSpring, animated } from '@react-spring/web'
import Button from '../Button'
import { useContentStore } from '../../stores/contentStore'
import { Canvas } from '@react-three/fiber'
import LoadingScreenExperience from './LoadingScreenExperience'

const totalObjectsToLoad = 37

const LoadingScreen = () => {
  const buttonRef = useRef<HTMLDivElement>(null!)
  const [shouldDisplayEnterButton, setEnterButtonDisplay] = useState(false)
  const progress = useProgress()
  const enterSite = useContentStore((state) => state.enterSite)
  const setScreenType = useContentStore((state) => state.setScreenType)
  const isLoadingScreenVisible = useContentStore(
    (state) => state.isLoadingScreenVisible
  )
  const [isVisible, setVisible] = useState(true)

  const computedProgress = useMemo(
    () => (progress.loaded / totalObjectsToLoad) * 100,
    [progress.loaded]
  )
  const props = useSpring({
    loadingProgress: computedProgress,
  })
  const containerProps = useSpring({
    opacity: isLoadingScreenVisible ? 1 : 0,
    onRest: () => setVisible(false),
  })

  const progressProps = useSpring({
    opacity: shouldDisplayEnterButton ? 0 : 1,
    transform: shouldDisplayEnterButton
      ? 'translateX(-100%)'
      : 'translateX(0%)',
  })

  const enterButtonProps = useSpring({
    opacity: shouldDisplayEnterButton ? 1 : 0,
    transform: shouldDisplayEnterButton ? 'translateX(0%)' : 'translateX(100%)',
  })

  const onTouch = () => {
    setScreenType('touch')
  }

  useEffect(() => {
    if (computedProgress === 100)
      setTimeout(() => setEnterButtonDisplay(true), 1000)
  }, [computedProgress])

  useEffect(() => {
    buttonRef.current.addEventListener('touchstart', onTouch, { once: true })
  }, [])

  if (!isVisible) return null
  return (
    <animated.div style={containerProps} className="loadingScreenContainer">
      <Canvas
        className="loadingPaper"
        camera={{
          fov: 50,
        }}
      >
        <LoadingScreenExperience />
      </Canvas>
      <div
        style={{
          display: 'flex',
          position: 'relative',
          justifyContent: 'center',
          marginTop: '1rem',
        }}
      >
        <animated.div style={{ ...progressProps, position: 'absolute' }}>
          <h2 className="loadingScreenProgress">
            <animated.span>
              {props.loadingProgress.to((x) => x.toFixed(0))}
            </animated.span>
            %
          </h2>
        </animated.div>
        <animated.div
          ref={buttonRef}
          style={{ ...enterButtonProps, position: 'absolute' }}
        >
          <Button text="ENTER" onClick={enterSite} />
        </animated.div>
      </div>
    </animated.div>
  )
}

export default LoadingScreen
