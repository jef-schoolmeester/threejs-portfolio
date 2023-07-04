import { create } from 'zustand'
import { CameraState, Destination } from '../types'
import { sceneCenter, sceneCenterCameraPosition } from '../config'

interface TransitionState {
  isTransitionActive: boolean
  destination?: Destination
  currentState: CameraState
  startTransition: (to: Destination) => void
  endTransition: () => void
  endInitialTransition: () => void
}

export const useTransitionStore = create<TransitionState>()((set) => ({
  isTransitionActive: true,
  destination: undefined,
  currentState: {
    focusPoint: sceneCenter,
    position: sceneCenterCameraPosition,
  },
  startTransition: (to: Destination) =>
    set(() => ({ isTransitionActive: true, destination: to })),
  endTransition: () =>
    set((state) => {
      if (!state.destination)
        throw new Error('Cannot end transition without end destination')
      const { focusPoint, to } = state.destination
      return {
        isTransitionActive: false,
        destination: undefined,
        currentState: {
          focusPoint: focusPoint,
          position: to,
        },
      }
    }),
  endInitialTransition: () =>
    set(() => {
      return {
        isTransitionActive: false,
      }
    }),
}))
