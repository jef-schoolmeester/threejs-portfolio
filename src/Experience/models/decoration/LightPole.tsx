import { useEffect, useRef } from 'react'
import { Material, Mesh } from 'three'
import { useLoadedItemsContext } from '../../../hooks/useLoadedItemsContext'
import { useLoadTransition } from '../../../hooks/useLoadTransition'

const LightPole = () => {
  const { loadedModelsObservable } = useLoadedItemsContext()
  const { startTransition } = useLoadTransition()

  const meshRef = useRef<Mesh>(null!)

  useEffect(() => {
    loadedModelsObservable.subscribe('lightpole', ({ material, model }) => {
      if (!meshRef.current) return null
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
      <mesh ref={meshRef} position={[0, 1.3, -4.97]} matrixAutoUpdate={false}>
        <meshBasicMaterial transparent />
      </mesh>
    </group>
  )
}

export default LightPole
