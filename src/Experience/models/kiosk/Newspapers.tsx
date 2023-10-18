import { useEffect, useMemo, useState } from 'react'
import { Material, Mesh } from 'three'

import data from '../../../data.json'
import { getOrderedNewspaperNodes } from '../../../utils/newspapers'
import Newspaper from './Newspaper'
import Revue from './Revue'
import { useLoadedItemsContext } from '../../../hooks/useLoadedItemsContext'

const experiences = data.experiences
const education = data.education
const projects = data.projects

const Newspapers = () => {
  const { loadedModelsObservable } = useLoadedItemsContext()

  const [newspaperMaterial, setNewspaperMaterial] = useState<Material>()
  const [newspaperModels, setNewspaperModels] = useState<Mesh[]>()

  useEffect(() => {
    loadedModelsObservable.subscribe('newspapers', ({ material, meshs }) => {
      if (material) setNewspaperMaterial(material)
      if (meshs) setNewspaperModels(meshs)
    })
  }, [])

  const sortedTopNewspapers = useMemo(() => {
    if (!newspaperModels) return []
    return getOrderedNewspaperNodes(newspaperModels, 'TopNewspaper')
  }, [newspaperModels])

  const sortedTopRevues = useMemo(() => {
    if (!newspaperModels) return []
    return getOrderedNewspaperNodes(newspaperModels, 'TopRevue')
  }, [newspaperModels])

  const sortedBottomRevues = useMemo(() => {
    if (!newspaperModels) return []
    return getOrderedNewspaperNodes(newspaperModels, 'BottomRevue')
  }, [newspaperModels])

  if (!newspaperMaterial) return null

  return (
    <group>
      {sortedTopNewspapers.map((node, index) => {
        if (!projects[index]) return null
        return (
          <Newspaper
            key={node.name}
            geometry={node.geometry}
            material={newspaperMaterial}
            position={node.position}
            rotation={node.rotation}
            text={experiences[index]?.title}
            id={experiences[index]?.id}
          />
        )
      })}
      {/* {bottomNewspapersKeys.map((key) => {
        const node = nodes[key]
        return (
          <Newspaper
            key={key}
            geometry={node.geometry}
            material={newspaperMaterial}
            position={node.position}
            rotation={node.rotation}
          />
        )
      })} */}
      {sortedTopRevues.map((node, index) => {
        if (!projects[index]) return null
        return (
          <Revue
            key={node.name}
            geometry={node.geometry}
            material={newspaperMaterial}
            position={node.position}
            rotation={node.rotation}
            text={projects[index]?.title}
            id={projects[index]?.id}
            type="projects"
            textAlign="right"
          />
        )
      })}
      {/* {middleRevuesKeys.map((key) => {
        const node = nodes[key]
        return (
          <mesh
            key={key}
            geometry={node.geometry}
            material={newspaperMaterial}
            position={node.position}
            rotation={node.rotation}
          />
        )
      })} */}
      {sortedBottomRevues.map((node, index) => {
        if (!education[index]) return null
        return (
          <Revue
            key={node.name}
            geometry={node.geometry}
            material={newspaperMaterial}
            position={node.position}
            rotation={node.rotation}
            text={education[index]?.title}
            id={education[index]?.id}
            type="education"
          />
        )
      })}
    </group>
  )
}

export default Newspapers
