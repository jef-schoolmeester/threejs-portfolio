import './App.css'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience/index'
import Cursor from './Components/Cursor'
import ContentManager from './Components/ContentManager'
import { cameraStartPosition } from './config'
import FocusManager from './Components/FocusManager'
import KioskContentManager from './Components/KioskContentManager/Manager'

const App = () => {
  return (
    <>
      <Canvas
        camera={{
          fov: 50,
          position: cameraStartPosition,
        }}
        gl={{ outputColorSpace: 'srgb' }}
      >
        <Experience />
      </Canvas>
      <Cursor />
      <ContentManager />
      <FocusManager />
      <KioskContentManager />
    </>
  )
}

export default App
