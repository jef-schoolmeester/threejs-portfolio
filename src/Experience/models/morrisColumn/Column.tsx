import data from '../../../data.json'
import SectionTitle from './SectionTitle'
import SkillSet from './SkillSet'
import { useEffect, useRef, useState } from 'react'
import { Material, Mesh } from 'three'
import { useLoadedItemsContext } from '../../../hooks/useLoadedItemsContext'
import { useLoadTransition } from '../../../hooks/useLoadTransition'

const Column = () => {
  const { loadedModelsObservable } = useLoadedItemsContext()
  const { startTransition } = useLoadTransition()

  const [isDataVisible, setDataVisible] = useState<boolean>()

  const skillsTitles = Object.keys(data.skills)
  const skills = Object.values(data.skills)

  const columnRef = useRef<Mesh>(null!)

  useEffect(() => {
    loadedModelsObservable.subscribe('column', ({ material, model }) => {
      if (!columnRef.current) return
      if (model) {
        columnRef.current.geometry = model
        startTransition(columnRef.current.material as Material)
      }
      if (material) {
        columnRef.current.material = material
        setDataVisible(true)
      }
      columnRef.current.updateMatrix()
    })
  }, [])

  return (
    <group>
      <mesh
        ref={columnRef}
        matrixAutoUpdate={false}
        position={[0, 1, 2]}
        rotation={[0, -Math.PI / 6, 0]}
      >
        <meshBasicMaterial transparent />
        {isDataVisible &&
          skillsTitles.map((title, index) => (
            <SectionTitle
              key={title}
              distance={1.03}
              title={title}
              position={index}
            />
          ))}
        {isDataVisible &&
          skills.map((skillSet, index) => (
            <SkillSet
              key={skillSet.toString()}
              distance={0.79}
              position={index}
              skills={skillSet}
            />
          ))}
      </mesh>
    </group>
  )
}

export default Column
