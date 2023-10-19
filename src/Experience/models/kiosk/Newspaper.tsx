import { useState } from 'react'
import { BufferGeometry, Euler, Material, Vector3 } from 'three'

import { useSpring } from 'react-spring'

import { a } from '@react-spring/three'
import { Text } from '@react-three/drei'

import { useContentStore } from '@/stores/contentStore'

interface Props {
  geometry: BufferGeometry
  material: Material
  position: Vector3
  rotation: Euler
  text?: string
  id?: string
}

const Newspaper: React.FC<Props> = ({
  geometry,
  material,
  position,
  rotation,
  text,
  id,
}) => {
  const [isHovered, setHovered] = useState<boolean>(false)
  const selectContent = useContentStore((state) => state.selectContent)
  const focusedContent = useContentStore((state) => state.focusedContent)

  const props = useSpring({
    y: isHovered
      ? Math.abs(Math.sin(rotation.z)) * 0.02 + position.y
      : position.y,
    x: isHovered
      ? Math.abs(Math.cos(rotation.z)) * 0.02 + position.x
      : position.x,
  })

  const handleFocus = () => {
    if (
      !focusedContent.isContentVisible ||
      !focusedContent.contentId.includes('kiosk') ||
      !id
    )
      return
    selectContent(`experiences#${id}`)
  }

  return (
    <a.mesh
      geometry={geometry}
      material={material}
      position={position}
      position-y={props.y}
      position-x={props.x}
      rotation={rotation}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onPointerMove={() => setHovered(true)}
      onClick={handleFocus}
    >
      {text && (
        <Text
          position={[-0.1, 0.01, -0.03]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0, 'YXZ']}
          font="./fonts/Overpass.woff"
          color="#121212"
          fontSize={0.05}
          maxWidth={0.23}
          lineHeight={1}
          anchorY="top-baseline"
          anchorX="right"
        >
          {text}
        </Text>
      )}
    </a.mesh>
  )
}

export default Newspaper
