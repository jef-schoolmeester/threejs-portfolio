import { Mesh } from 'three'
import { useEffect, useRef } from 'react'

import { useLoadedItemsContext } from '@/hooks/useLoadedItemsContext'

const NewspaperRack = () => {
  const { loadedModelsObservable } = useLoadedItemsContext()
  const rackRef = useRef<Mesh>(null!)

  useEffect(() => {
    loadedModelsObservable.subscribe('newspaperrack', ({ material, model }) => {
      if (!rackRef.current) return
      if (model) rackRef.current.geometry = model
      if (material) rackRef.current.material = material
      rackRef.current.updateMatrix()
    })
  }, [])

  return (
    <group>
      <mesh
        ref={rackRef}
        position={[-0.44, 2.26, -0.7]}
        matrixAutoUpdate={false}
      ></mesh>
    </group>
  )
}

export default NewspaperRack
