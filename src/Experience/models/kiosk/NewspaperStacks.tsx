import { Mesh } from 'three'
import { useEffect, useRef } from 'react'

import { useLoadedItemsContext } from '@/hooks/useLoadedItemsContext'

const NewspaperStacks = () => {
  const { loadedModelsObservable } = useLoadedItemsContext()
  const stacksRef = useRef<Mesh>(null!)

  useEffect(() => {
    loadedModelsObservable.subscribe(
      'newspaperstack',
      ({ material, model }) => {
        if (!stacksRef.current) return
        if (model) stacksRef.current.geometry = model
        if (material) stacksRef.current.material = material
        stacksRef.current.updateMatrix()
      }
    )
  }, [])
  return (
    <group>
      <mesh
        ref={stacksRef}
        matrixAutoUpdate={false}
        position={[0.18, 0.71, 0.53]}
        rotation={[-Math.PI / 2, -1.2, -Math.PI / 2]}
      ></mesh>
    </group>
  )
}

export default NewspaperStacks
