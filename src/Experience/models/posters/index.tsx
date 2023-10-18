import { Text3D } from '@react-three/drei'
import { Mesh } from 'three'
import { useEffect, useRef } from 'react'
import { useLoadedItemsContext } from '../../../hooks/useLoadedItemsContext'
import ContactPoster from './ContactPoster'

const Posters = () => {
  const { loadedModelsObservable } = useLoadedItemsContext()

  const nameRef = useRef<Mesh>(null!)
  const backLeftRef = useRef<Mesh>(null!)
  const backRightRef = useRef<Mesh>(null!)

  useEffect(() => {
    loadedModelsObservable.subscribe('kioskposters', ({ material, models }) => {
      if (!nameRef.current || !backLeftRef.current || !backRightRef.current)
        return
      if (material) {
        nameRef.current.material = material
      }
      if (models?.length) {
        for (const model of models) {
          if (model.name === 'BackLeft') backLeftRef.current.geometry = model
          if (model.name === 'BackRight') backRightRef.current.geometry = model
        }
      }
    })
  }, [])

  const metalness = 1
  const roughness = 0.5
  return (
    <>
      <ContactPoster metalness={metalness} roughness={roughness} />
      <mesh ref={backLeftRef} position={[-1.05, 1.6, 0.1]}>
        <meshStandardMaterial
          color="#070707"
          metalness={metalness}
          roughness={roughness}
        />
      </mesh>
      <mesh ref={backRightRef} position={[-1.05, 1.6, -1.5]}>
        <meshStandardMaterial
          color="#070707"
          metalness={metalness}
          roughness={roughness}
        />
      </mesh>
      <Text3D
        ref={nameRef}
        font="./fonts/Didot.json"
        rotation-y={Math.PI / 2}
        position={[1, 2.56, 0.9]}
        size={0.3}
        height={0.01}
        curveSegments={4}
        bevelEnabled
        bevelThickness={0.01}
        bevelSize={0.01}
        bevelOffset={0}
        bevelSegments={1}
      >
        Jef Schoolmeester
      </Text3D>
    </>
  )
}

export default Posters
