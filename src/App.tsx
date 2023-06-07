import './App.css'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience/index'

const App = () => {
  return (
    <>
      <Canvas
        flat
        camera={{
          fov: 50,
          position: [10, 0, -10],
        }}
      >
        <Experience />
      </Canvas>
    </>
  )
}

export default App
