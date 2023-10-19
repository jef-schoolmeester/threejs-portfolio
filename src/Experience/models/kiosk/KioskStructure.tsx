import { Material, Mesh } from 'three'
import { useEffect, useRef } from 'react'

import { useLoadTransition } from '@/hooks/useLoadTransition'
import { useLoadedItemsContext } from '@/hooks/useLoadedItemsContext'

const KioskStructure = () => {
  const { loadedModelsObservable } = useLoadedItemsContext()
  const { startTransition } = useLoadTransition()

  const structureRef = useRef<Mesh>(null!)

  useEffect(() => {
    loadedModelsObservable.subscribe(
      'kioskstructure',
      ({ material, model }) => {
        if (!structureRef.current) return
        if (model) {
          structureRef.current.geometry = model
          startTransition(structureRef.current.material as Material)
        }
        if (material) structureRef.current.material = material
        structureRef.current.updateMatrix()
      }
    )
  }, [])
  return (
    <group>
      <mesh ref={structureRef} position={[0, 3, -0.7]}>
        <meshBasicMaterial transparent />
      </mesh>
    </group>
  )
}

export default KioskStructure
