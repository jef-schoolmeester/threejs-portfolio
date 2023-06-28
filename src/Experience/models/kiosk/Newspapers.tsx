import { useGLTF, useTexture } from '@react-three/drei'
import { useEffect } from 'react'
import { MeshBasicMaterial } from 'three'

import data from '../../../data.json'
import { getOrderedNewspaperNodeKeys } from '../../../utils/newspapers'
import Newspaper from './Newspaper'
import Revue from './Revue'

const material = new MeshBasicMaterial()
const experiences = data.experiences
const education = data.education

const Newspapers = () => {
  const { nodes }: any = useGLTF('./models/Kiosk/Newspapers-2.glb')

  const newspapersTexture = useTexture('./textures/FrontNewspapers-min.jpg')
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
          <Newspaper
            key={key}
            geometry={node.geometry}
            material={material}
            position={node.position}
            rotation={node.rotation}
            text={experiences[index]?.title}
            id={experiences[index]?.id}
          />
        )
      })}
      {bottomNewspapersKeys.map((key) => {
        const node = nodes[key]
        return (
          <Newspaper
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
      {bottomRevuesKeys.map((key, index) => {
        const node = nodes[key]
        return (
          <Revue
            key={key}
            geometry={node.geometry}
            material={material}
            position={node.position}
            rotation={node.rotation}
            text={education[index]?.title}
            id={education[index]?.id}
          />
        )
      })}
    </group>
  )
}

export default Newspapers
