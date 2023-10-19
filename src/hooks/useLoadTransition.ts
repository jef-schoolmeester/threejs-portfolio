import { Material } from 'three'
import { useSpring } from 'react-spring'

export const useLoadTransition = () => {
  const [, api] = useSpring(() => ({
    opacity: 0.0,
    config: {
      mass: 1,
      friction: 50,
      tension: 180,
    },
  }))

  const startTransition = (material: Material) => {
    api.start({
      from: {
        opacity: 0.0,
      },
      to: {
        opacity: 1.0,
      },
      onChange: (e) => {
        material.opacity = e.value.opacity
      },
    })
  }

  return {
    startTransition,
  }
}
