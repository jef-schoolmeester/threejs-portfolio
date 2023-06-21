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
      {/* <ContentOverlay
        title="Summary"
        content="As a full stack developer, I thrive on the challenges of building robust and dynamic web applications. With a solid understanding of databases and server-side technologies like SQL and PHP, I am adept at designing and optimizing back-end systems. I also have a strong grasp of front-end frameworks such as Vue.js and Bootstrap, allowing me to create responsive and visually appealing user interfaces. I am passionate about writing clean, maintainable code and staying up-to-date with the latest industry trends. My focus is on delivering high-quality solutions that meet client requirements and provide an exceptional user experience."
      /> */}
      <ContentManager />
      <FocusManager />
      <KioskContentManager />
    </>
  )
}

export default App
