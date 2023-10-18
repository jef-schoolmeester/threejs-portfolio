import './App.css'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience/index'
import Cursor from './Components/Cursor'
import ContentManager from './Components/ContentManager'
import { cameraStartPosition } from './config'
import FocusManager from './Components/FocusManager'
import KioskContentManager from './Components/KioskContentManager/Manager'
import {
  Suspense,
  createContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import LoadingScreen from './Components/LoadingScreen'
import { useDebugMode } from './hooks/useDebugMode'
import { Observable } from './utils/Observable'
import { LoadedModelsType } from './types'

export const LoadedItemsContext = createContext<{
  loadedModelsObservable: Observable<LoadedModelsType>
}>({ loadedModelsObservable: new Observable<LoadedModelsType>() })

const App = () => {
  const loadedItemsRef = useRef(new Observable<LoadedModelsType>())
  const value = useMemo(
    () => ({ loadedModelsObservable: loadedItemsRef.current }),
    []
  )

  const [renderAllowed, setRenderAllowed] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setRenderAllowed(true)
    }, 500)
  }, [])

  const isDebugModeEnabled = useDebugMode()

  return (
    <LoadedItemsContext.Provider value={value}>
      <Canvas
        className="experience"
        camera={{
          fov: 50,
          position: cameraStartPosition,
          near: 0.1,
          far: 100,
        }}
        gl={{ outputColorSpace: 'srgb', powerPreference: 'high-performance' }}
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
    </LoadedItemsContext.Provider>
  )
}

export default App
