import { create } from 'zustand'

interface ContentState {
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
