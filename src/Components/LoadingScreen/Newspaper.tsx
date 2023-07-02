import { useProgress } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useLayoutEffect, useMemo, useRef, useState } from 'react'
import { useSpring } from 'react-spring'
import { DoubleSide, InstancedMesh, Object3D } from 'three'

const NEWSPAPER_COUNT = 100
const newspaperWidth = 0.3
const newspaperHeight = 0.4

const COLOR_PALETTE = [
  [224, 201, 166],
  [243, 223, 193],
  [243, 206, 161],
  [160, 160, 160],
]

const tempObject = new Object3D()

const Newspaper = () => {
  const instanceRef = useRef<InstancedMesh>(null!)
  const offsets = useRef(new Float32Array(100).fill(0))
  const [shouldAnimationStart, setAnimationStart] = useState(false)

  const progress = useProgress()

  const computedProgress = useMemo(
    () => (progress.loaded / 37) * 100,
    [progress.loaded]
  )

  const props = useSpring({
    loadingProgress: computedProgress,
  })

  useLayoutEffect(() => {
    setAnimationStart(true)
  }, [])

  const colors = useMemo(() => {
    const colors = new Float32Array(NEWSPAPER_COUNT * 3)
    for (let i = 0; i < NEWSPAPER_COUNT; i++) {
      const color = COLOR_PALETTE[i % 3]
      colors[i * 3 + 0] = color[0] / 255
      colors[i * 3 + 1] = color[1] / 255
      colors[i * 3 + 2] = color[2] / 255
    }
    return colors
  }, [])

  // const angle = Math.min((offset * Math.PI) / 2 + Math.PI / 4, Math.PI)
  useFrame((_, delta) => {
    if (!shouldAnimationStart) return
    for (let i = 0; i < NEWSPAPER_COUNT; i++) {
      if (i >= props.loadingProgress.get()) continue
      if (i > 0 && offsets.current[i - 1] < 0.05) continue
      const timeOffset = offsets.current[i]
      offsets.current[i] += delta

      const offset = timeOffset * 2
      const angle = Math.min((offset * Math.PI) / 2, Math.PI)

      tempObject.position.set(
        0 + (Math.cos(angle) * newspaperWidth) / 2 - newspaperWidth / 2,
        0,
        -i * 0.0001 + (Math.sin(-angle) * newspaperWidth) / 2
      )
      tempObject.rotation.y = angle
      tempObject.updateMatrix()
      instanceRef.current.setMatrixAt(i, tempObject.matrix)
    }
    instanceRef.current.instanceMatrix.needsUpdate = true
  })

  return (
    <>
      <instancedMesh
        castShadow
        ref={instanceRef}
        args={[undefined, undefined, NEWSPAPER_COUNT]}
        rotation-x={Math.PI / 2}
        position-x={0.15}
      >
        <planeGeometry args={[newspaperWidth, newspaperHeight]}>
          <instancedBufferAttribute
            attach="attributes-color"
            args={[colors, 3]}
          />
        </planeGeometry>
        <meshBasicMaterial side={DoubleSide} toneMapped={false} vertexColors />
      </instancedMesh>
    </>
  )
}

export default Newspaper
