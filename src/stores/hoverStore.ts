import { create } from 'zustand'

import { HoverMessage } from '@/types'

interface HoverState {
  hoverMessage: HoverMessage
  isHoverActive: boolean
  isHoverAllowed: boolean
  setHoverActive: (active: boolean) => void
  setHoverAllowed: (allowed: boolean) => void
  setHoverMessage: (message: string) => void
  clearHoverMessage: () => void
}

export const useHoverStore = create<HoverState>()((set) => ({
  isHoverActive: false,
  isHoverAllowed: true,
  hoverMessage: '',
  setHoverActive: (active: boolean) =>
    set((state) => ({ isHoverActive: active && state.isHoverAllowed })),
  setHoverAllowed: (allowed: boolean) =>
    set(() => ({ isHoverAllowed: allowed })),
  setHoverMessage: (message: string) => set(() => ({ hoverMessage: message })),
  clearHoverMessage: () => set(() => ({ hoverMessage: '' })),
}))
