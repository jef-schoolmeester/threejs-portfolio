import { Material, Mesh } from 'three'
import { useEffect, useRef } from 'react'

import { useLoadTransition } from '@/hooks/useLoadTransition'
import { useLoadedItemsContext } from '@/hooks/useLoadedItemsContext'

const Tree = () => {
  const trunkRef = useRef<Mesh>(null!)
  const leaves1Ref = useRef<Mesh>(null!)
  const leaves2Ref = useRef<Mesh>(null!)
  const leaves3Ref = useRef<Mesh>(null!)

  useEffect(() => {
    trunkRef.current.updateMatrix()
    leaves1Ref.current.updateMatrix()
    leaves2Ref.current.updateMatrix()
    leaves3Ref.current.updateMatrix()
  }, [])

  const { loadedModelsObservable } = useLoadedItemsContext()

  const { startTransition } = useLoadTransition()

  useEffect(() => {
    loadedModelsObservable.subscribe('tree', ({ material, models }) => {
      if (
        !trunkRef.current ||
        !leaves1Ref.current ||
        !leaves2Ref.current ||
        !leaves3Ref.current
      )
        return

      if (material) {
        trunkRef.current.material = material
        leaves1Ref.current.material = material
        leaves2Ref.current.material = material
        leaves3Ref.current.material = material
      }

      if (!models?.length) return
      for (const model of models) {
        if (model.name === 'Trunk') trunkRef.current.geometry = model
        if (model.name === 'Leaves1') leaves1Ref.current.geometry = model
        if (model.name === 'Leaves2') leaves2Ref.current.geometry = model
        if (model.name === 'Leaves3') leaves3Ref.current.geometry = model
      }

      startTransition(trunkRef.current.material as Material)
    })
  }, [])

  return (
    <group onPointerEnter={(event) => event.stopPropagation()}>
      <mesh
        ref={trunkRef}
        matrixAutoUpdate={false}
        position={[-1.26, 0.04, -3.81]}
        rotation={[0, 0.71, 0]}
        scale={0.72}
      >
        <meshBasicMaterial transparent />
      </mesh>
      <mesh
        ref={leaves1Ref}
        matrixAutoUpdate={false}
        position={[-2.76, 1.8, -6.23]}
        rotation={[0, 0.71, 0]}
        scale={0.72}
      />
      <mesh
        ref={leaves2Ref}
        matrixAutoUpdate={false}
        position={[-2.29, 6.23, -3.45]}
        rotation={[0, 0.71, 0]}
        scale={0.72}
      />
      <mesh
        ref={leaves3Ref}
        matrixAutoUpdate={false}
        position={[0.47, 4.86, -1.74]}
        rotation={[0, 0.71, 0]}
        scale={0.72}
      />
    </group>
  )
}

export default Tree
