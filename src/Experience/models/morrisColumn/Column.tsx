import { Text3D, useGLTF, useTexture } from '@react-three/drei'
import { useHoverStore } from '../../../stores/hoverStore'
import { ThreeEvent, useLoader } from '@react-three/fiber'
import { useControls } from 'leva'
import { TextureLoader, Vector3 } from 'three'
import { useTransitionStore } from '../../../stores/transitionStore'

import data from '../../../data.json'
import SectionTitle from './SectionTitle'
import SkillSet from './SkillSet'
import { useContentStore } from '../../../stores/contentStore'

const Column = () => {
  const { nodes }: any = useGLTF('./models/Column.glb')
  const columnTexture = useTexture('./textures/Column2.jpg')
  const titlesTexture = useLoader(
    TextureLoader,
    './textures/matcaps/silver.png'
  )
  columnTexture.flipY = false

  const setHoverActive = useHoverStore((state) => state.setHoverActive)
  const setHoverMessage = useHoverStore((state) => state.setHoverMessage)
  const clearHoverMessage = useHoverStore((state) => state.clearHoverMessage)

  const startTransition = useTransitionStore((state) => state.startTransition)
  const focusContent = useContentStore((state) => state.focusContent)

  const onHover = (event: ThreeEvent<PointerEvent>) => {
    setHoverActive(true)
    setHoverMessage('Skills')
    event.stopPropagation()
  }

  const offHover = () => {
    setHoverActive(false)
    clearHoverMessage()
  }

  const onFocus = () => {
    startTransition({
      to: new Vector3(6.8, 1.8, 0.4),
      focusPoint: new Vector3(0, 3, 2),
    })
    focusContent('column')
  }

  const { distance, skillsDistance } = useControls('columnTextr', {
    // positionX: { value: 1.02, min: 0, max: 4, step: 0.01 },
    // positionY: { value: 3.08, min: 0, max: 4, step: 0.01 },
    // positionZ: { value: 0.49, min: 0, max: 4, step: 0.01 },
    // size: { value: 0.15, min: 0, max: 1, step: 0.01 },
    distance: { value: 1.03, min: 0, max: 2, step: 0.01 },
    skillsDistance: { value: 0.79, min: 0, max: 2, step: 0.01 },
  })

  const skillsTitles = Object.keys(data.skills)
  const skills = Object.values(data.skills)

  return (
    <group
      onPointerEnter={onHover}
      onPointerLeave={offHover}
      onPointerMove={(event) => event.stopPropagation()}
      onClick={onFocus}
    >
      <mesh
        geometry={nodes.Column.geometry}
        position={[0, 1, 2]}
        rotation={[0, -Math.PI / 6, 0]}
      >
        <meshBasicMaterial
          // roughness={0.3}
          // metalness={0.3}
          map={columnTexture}
        />
        {skillsTitles.map((title, index) => (
          <SectionTitle
            key={title}
            distance={distance}
            title={title}
            position={index}
          />
        ))}
        {skills.map((skillSet, index) => (
          <SkillSet
            key={skillSet.toString()}
            distance={skillsDistance}
            position={index}
            skills={skillSet}
          />
        ))}
      </mesh>
    </group>
  )
}

export default Column
