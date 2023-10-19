import {
  Suspense,
  createContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import { Canvas } from '@react-three/fiber'

import { LoadedModelsType } from '@/types'
import { cameraStartPosition } from '@/config'
import { Observable } from '@/utils/Observable'

import { useDebugMode } from '@/hooks/useDebugMode'

import Experience from '@/Experience/index'

import Cursor from '@/Components/Cursor'
import FocusManager from '@/Components/FocusManager'
import LoadingScreen from '@/Components/LoadingScreen'
import ContentManager from '@/Components/ContentManager'
import KioskContentManager from '@/Components/KioskContentManager/Manager'

import '@/App.css'

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
