import './App.css'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience/index'
import Cursor from './Components/Cursor'
import ContentManager from './Components/ContentManager'
import { cameraStartPosition } from './config'
import FocusManager from './Components/FocusManager'
import KioskContentManager from './Components/KioskContentManager/Manager'
import { Suspense, useEffect, useState } from 'react'
import LoadingScreen from './Components/LoadingScreen'
import { useDebugMode } from './hooks/useDebugMode'

const App = () => {
  const [renderAllowed, setRenderAllowed] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setRenderAllowed(true)
    }, 500)
  }, [])

  const isDebugModeEnabled = useDebugMode()

  return (
    <>
      <Canvas
        className="experience"
        camera={{
          fov: 50,
          position: cameraStartPosition,
        }}
        gl={{ outputColorSpace: 'srgb' }}
      >
        {renderAllowed && (
          <Suspense>
            <Experience />
          </Suspense>
        )}
      </Canvas>
      <Cursor />
      <ContentManager />
      <FocusManager />
      <KioskContentManager />
      {!isDebugModeEnabled && <LoadingScreen />}
    </>
  )
}

export default App
