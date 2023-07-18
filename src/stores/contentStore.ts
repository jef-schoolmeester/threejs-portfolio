import { create } from 'zustand'

interface ContentState {
  screenType: 'mouse' | 'touch'
  setScreenType: (type: 'mouse' | 'touch') => void

  isLoadingScreenVisible: boolean
  enterSite: () => void

  content:
    | { isContentVisible: true; contentId: string }
    | { isContentVisible: false; contentId: undefined }
  selectContent: (contentId: string) => void
  clearContent: () => void

  focusedContent:
    | { isContentVisible: true; contentId: string }
    | { isContentVisible: false; contentId: undefined }
  focusContent: (contentId: string) => void
  exitFocusedContent: () => void
}

export const useContentStore = create<ContentState>()((set) => ({
  screenType: 'mouse',
  setScreenType: (type: 'mouse' | 'touch') => set(() => ({ screenType: type })),

  isLoadingScreenVisible: true,
  enterSite: () => set(() => ({ isLoadingScreenVisible: false })),

  content: { isContentVisible: false, contentId: undefined },
  selectContent: (contentId: string) =>
    set(() => ({ content: { isContentVisible: true, contentId } })),
  clearContent: () =>
    set(() => ({ content: { isContentVisible: false, contentId: undefined } })),

  focusedContent: { isContentVisible: false, contentId: undefined },
  focusContent: (contentId: string) => {
    set(() => ({
      focusedContent: { isContentVisible: true, contentId },
    }))
  },
  exitFocusedContent: () =>
    set(() => ({
      focusedContent: { isContentVisible: false, contentId: undefined },
    })),
}))
