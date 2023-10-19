import { Euler, Mesh } from 'three'
import { useEffect, useRef } from 'react'

import { Text } from '@react-three/drei'

import { useLoadedItemsContext } from '@/hooks/useLoadedItemsContext'

const StreetPanel = () => {
  const structureRef = useRef<Mesh>(null!)
  const blackBoardRef = useRef<Mesh>(null!)

  const textRotation = new Euler(-Math.PI * 0.5, Math.PI * 0.5, 0, 'YZX')

  const { loadedModelsObservable } = useLoadedItemsContext()

  useEffect(() => {
    loadedModelsObservable.subscribe('streetpanel', ({ material, models }) => {
      if (!structureRef.current || !blackBoardRef.current) return

      if (material) {
        structureRef.current.material = material
      }

      if (!models?.length) return
      for (const model of models) {
        if (model.name === 'Structure') structureRef.current.geometry = model
        if (model.name === 'Blackboard') blackBoardRef.current.geometry = model
      }
    })
  }, [])

  return (
    <group>
      <mesh
        ref={structureRef}
        position={[1.75, 0.243, -2.593]}
        rotation={[0, -0.436, 0.175]}
      ></mesh>
      <mesh
        ref={blackBoardRef}
        position={[1.544, 0.735, -2.358]}
        rotation={[0, -0.436, -1.396]}
      >
        <meshStandardMaterial color="#070707" />
        <Text
          position={[-0.251, 0.01, 0]}
          rotation={textRotation}
          font="./fonts/Overpass.woff"
          color="#fafafa"
          fontSize={0.12}
        >
          Summary
        </Text>
        <Text
          position={[0.1, 0.01, 0]}
          rotation={textRotation}
          color="#fafafa"
          fontSize={0.12}
          maxWidth={0.45}
          textAlign="left"
        >
          -------------------------------------------
        </Text>
      </mesh>
    </group>
  )
}

export default StreetPanel
