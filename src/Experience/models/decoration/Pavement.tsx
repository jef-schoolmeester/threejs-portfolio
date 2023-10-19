import { Material, Mesh } from 'three'
import { useEffect, useRef } from 'react'

import { useLoadTransition } from '@/hooks/useLoadTransition'
import { useLoadedItemsContext } from '@/hooks/useLoadedItemsContext'

const Pavement = () => {
  const { startTransition } = useLoadTransition()
  const { loadedModelsObservable } = useLoadedItemsContext()

  const meshRef = useRef<Mesh>(null!)

  useEffect(() => {
    loadedModelsObservable.subscribe('pavement', ({ material, model }) => {
      if (!meshRef.current) return
      if (model) {
        meshRef.current.geometry = model
        startTransition(meshRef.current.material as Material)
      }
      if (material) meshRef.current.material = material
      meshRef.current.updateMatrix()
    })
  }, [])

  return (
    <group>
      <mesh
        ref={meshRef}
        position={[-0.63, 0, 4.78]}
        rotation={[Math.PI, 0, Math.PI]}
        matrixAutoUpdate={false}
      >
        <meshBasicMaterial transparent />
      </mesh>
    </group>
  )
}

export default Pavement
