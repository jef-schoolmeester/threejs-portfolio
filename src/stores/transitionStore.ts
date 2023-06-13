import { create } from 'zustand'
import { Destination } from '../types'

interface TransitionState {
  isTransitionActive: boolean
  destination?: Destination
  startTransition: (to: Destination) => void
  endTransition: () => void
}

export const useTransitionStore = create<TransitionState>()((set) => ({
  isTransitionActive: false,
  startTransition: (to: Destination) =>
    set(() => ({ isTransitionActive: true, destination: to })),
  endTransition: () =>
    set(() => ({ isTransitionActive: false, destination: undefined })),
}))
