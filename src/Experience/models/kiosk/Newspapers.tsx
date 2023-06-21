import { Text, useGLTF, useTexture } from '@react-three/drei'
import { useEffect } from 'react'
import { MeshBasicMaterial } from 'three'

import data from '../../../data.json'
import { getOrderedNewspaperNodeKeys } from '../../../utils/newspapers'

const material = new MeshBasicMaterial()
const experiences = data.experiences

const Newspapers = () => {
  const { nodes }: any = useGLTF('./models/Kiosk/Newspapers.glb')

  const newspapersTexture = useTexture('./textures/FrontNewspapers.jpg')
  newspapersTexture.flipY = false

  useEffect(() => {
    material.map = newspapersTexture
  }, [])

  const nodesKeys = Object.keys(nodes)
  const topNewspapersKeys = getOrderedNewspaperNodeKeys(
    'TopNewspaper',
    nodesKeys
  )
  const bottomNewspapersKeys = getOrderedNewspaperNodeKeys(
    'BottomNewspaper',
    nodesKeys
  )

  const topRevuesKeys = getOrderedNewspaperNodeKeys('TopRevue', nodesKeys)
  const bottomRevuesKeys = getOrderedNewspaperNodeKeys('BottomRevue', nodesKeys)
  const middleRevuesKeys = getOrderedNewspaperNodeKeys('MiddleRevue', nodesKeys)

  return (
    <group>
      {topNewspapersKeys.map((key, index) => {
        const node = nodes[key]
        return (
          <mesh
            key={key}
            geometry={node.geometry}
            material={material}
            position={node.position}
            rotation={node.rotation}
          >
            <Text
              position={[-0.15, 0.01, -0.1]}
              rotation={[-Math.PI / 2, Math.PI / 2, 0, 'YXZ']}
              font="./fonts/Overpass.woff2"
              color="#121212"
              fontSize={0.05}
              maxWidth={0.22}
              anchorY="top-baseline"
              anchorX="right"
            >
              {experiences[index]?.title}
            </Text>
          </mesh>
        )
      })}
      {bottomNewspapersKeys.map((key) => {
        const node = nodes[key]
        return (
          <mesh
            key={key}
            geometry={node.geometry}
            material={material}
            position={node.position}
            rotation={node.rotation}
          />
        )
      })}
      {topRevuesKeys.map((key) => {
        const node = nodes[key]
        return (
          <mesh
            key={key}
            geometry={node.geometry}
            material={material}
            position={node.position}
            rotation={node.rotation}
          />
        )
      })}
      {middleRevuesKeys.map((key) => {
        const node = nodes[key]
        return (
          <mesh
            key={key}
            geometry={node.geometry}
            material={material}
            position={node.position}
            rotation={node.rotation}
          />
        )
      })}
      {bottomRevuesKeys.map((key) => {
        const node = nodes[key]
        return (
          <mesh
            key={key}
            geometry={node.geometry}
            material={material}
            position={node.position}
            rotation={node.rotation}
          />
        )
      })}
    </group>
  )
}

export default Newspapers
