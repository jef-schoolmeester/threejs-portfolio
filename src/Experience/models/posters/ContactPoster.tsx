import { Html, Text } from '@react-three/drei'
import ContactContent from '../../../Components/ContactContent'
import { BufferGeometry } from 'three'
import { useHoverStore } from '../../../stores/hoverStore'

interface Props {
  metalness: number
  roughness: number
  geometry: BufferGeometry
}

const ContactPoster: React.FC<Props> = ({ metalness, roughness, geometry }) => {
  const setHoverActive = useHoverStore((state) => state.setHoverActive)
  const clearHoverMessage = useHoverStore((state) => state.clearHoverMessage)
  return (
    <>
      <mesh
        geometry={geometry}
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
        pointerEvents="none"
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
