import { DoubleSide, Mesh, Vector3 } from 'three'
import { useEffect, useRef, useState } from 'react'

import { useFrame } from '@react-three/fiber'
import { Html, Text } from '@react-three/drei'

import { useHoverStore } from '@/stores/hoverStore'

import { useLoadedItemsContext } from '@/hooks/useLoadedItemsContext'

import ContactContent from '@/Components/ContactContent'

interface Props {
  metalness: number
  roughness: number
}

const ContactPoster: React.FC<Props> = ({ metalness, roughness }) => {
  const setHoverActive = useHoverStore((state) => state.setHoverActive)
  const clearHoverMessage = useHoverStore((state) => state.clearHoverMessage)

  const { loadedModelsObservable } = useLoadedItemsContext()

  const contactPosterRef = useRef<Mesh>(null!)

  const [isPosterVisible, setPosterVisible] = useState<boolean>(false)

  useEffect(() => {
    loadedModelsObservable.subscribe('kioskposters', ({ models }) => {
      if (!contactPosterRef.current) return
      if (models?.length) {
        for (const model of models) {
          if (model.name === 'Side') contactPosterRef.current.geometry = model
        }
      }
      contactPosterRef.current.updateMatrix()
    })
  }, [])

  useFrame((state) => {
    const cameraPosition = new Vector3(0, 0, 0)
    const cameraDirection = new Vector3(0, 0, 0)
    state.camera.getWorldPosition(cameraPosition)
    state.camera.getWorldDirection(cameraDirection)
    state.raycaster.set(cameraPosition, cameraDirection)
    const intersectHitboxes = state.raycaster
      .intersectObjects(
        state.scene.children.filter((child) => child.name.includes('HitBox'))
      )
      .map((_) => _.object.name)
    setPosterVisible(
      intersectHitboxes.length > 0 &&
        intersectHitboxes[0] === 'contactPosterHitBox'
    )
  })

  return (
    <>
      <mesh position={[0, 3.3, -2.51]} name="contactPosterHitBox">
        <planeGeometry args={[1.5 * 6, 2.2 * 3]} />
        <meshBasicMaterial side={DoubleSide} color={'red'} visible={false} />
      </mesh>
      <mesh
        ref={contactPosterRef}
        position={[0, 1.6, -2.42]}
        onPointerMove={(event) => {
          event.stopPropagation()
          setHoverActive(false)
          clearHoverMessage()
        }}
        onClick={(event) => event.stopPropagation()}
      >
        <Text
          position={[0, 1, -0.03]}
          rotation={[0, Math.PI, 0]}
          font="./fonts/Didot.woff"
          color="#fafafa"
          fontSize={0.3}
          textAlign="center"
        >
          CONTACT
        </Text>
        <meshStandardMaterial
          color="#070707"
          metalness={metalness}
          roughness={roughness}
        />
      </mesh>
      <Html
        pointerEvents={isPosterVisible ? 'auto' : 'none'}
        position={[0, 1.5, -2.45]}
        rotation-y={Math.PI}
        zIndexRange={[10, 0]}
        occlude="blending"
        transform
        prepend
        geometry={<planeGeometry args={[1.2, 1.7]} />}
        wrapperClass="contactHtmlContainer"
      >
        <ContactContent />
      </Html>
    </>
  )
}

export default ContactPoster
