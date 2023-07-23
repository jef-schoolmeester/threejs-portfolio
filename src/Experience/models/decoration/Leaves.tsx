import { useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useMemo, useRef } from 'react'
import { DoubleSide, InstancedMesh, Object3D, Shader } from 'three'

const radius = Math.PI / 4

const startPoints = {
  a: { x: -0.4, y: 5, z: -2 },
  b: { x: -3.2, y: 6, z: -3 },
  c: { x: -3.4, y: 2, z: -7.2 },
}

const LEAVES_COUNT = 80

const Leaves = () => {
  const mesh = useRef<InstancedMesh>(null!)
  const dummy = new Object3D()

  const LeafAlphaMap = useTexture('./textures/LeafAlphaMap.jpg')

  const particles = useMemo(() => {
    const temp = []
    for (let i = 0; i < LEAVES_COUNT; i++) {
      const t = Math.random() * 100
      const factor = Math.random() * 2
      const speed = 0.01 + Math.random() / 250
      const xFactor = Math.random() * 1
      const zFactor = Math.random() * 1
      const scale = Math.random()
      let startPoint
      if (i < LEAVES_COUNT / 2.5) startPoint = startPoints.a
      else if (i < LEAVES_COUNT / 1.3) startPoint = startPoints.b
      else startPoint = startPoints.c
      temp.push({
        t,
        factor,
        speed,
        xFactor,
        zFactor,
        scale,
        startPoint,
      })
    }
    return temp
  }, [])

  useFrame(() => {
    particles.forEach((particle, i) => {
      const { factor, speed, xFactor, zFactor, scale, startPoint } = particle
      let { t } = particle
      t = particle.t += speed / 2
      const scaleVariance = Math.cos(t)
      const yVariance = Math.cos(t) + (t % (startPoint.y + 1))
      const xVariance = (Math.sin(t) + Math.cos(t * 2) / 10) * yVariance * 0.4
      const zVariance =
        Math.sin((t * t) / 100) -
        1 +
        (1 + Math.cos(t / 50)) * -yVariance * yVariance * 0.2

      const startX = startPoint.x + Math.sin(radius) * factor * 0.7 + xFactor
      const startY = startPoint.y
      const startZ = startPoint.z + Math.cos(radius) * factor * 0.7 + zFactor
      dummy.position.set(
        startX + xVariance,
        Math.max(startY - yVariance, 0),
        startZ + zVariance
      )
      dummy.scale.setScalar(scale)
      dummy.rotation.set(
        scaleVariance * 5,
        scaleVariance * 5,
        scaleVariance * 5
      )
      dummy.updateMatrix()
      mesh.current.setMatrixAt(i, dummy.matrix)
    })
    mesh.current.instanceMatrix.needsUpdate = true
  })

  return (
    <instancedMesh
      ref={mesh}
      args={[undefined, undefined, LEAVES_COUNT]}
      matrixAutoUpdate={false}
    >
      <planeGeometry args={[0.1, 0.1]} />
      <meshStandardMaterial
        transparent
        alphaMap={LeafAlphaMap}
        // opacity={0}
        color="#80BE47"
        side={DoubleSide}
      />
    </instancedMesh>
  )
}

export default Leaves
