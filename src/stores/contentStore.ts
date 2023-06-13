import { create } from 'zustand'

interface ContentState {
  content:
    | { isContentVisible: true; contentId: string }
    | { isContentVisible: false; contentId: undefined }
  selectContent: (contentId: string) => void
  clearContent: () => void
}

export const useContentStore = create<ContentState>()((set) => ({
  content: { isContentVisible: false, contentId: undefined },
  selectContent: (contentId: string) =>
    set(() => ({ content: { isContentVisible: true, contentId: contentId } })),
  clearContent: () =>
    set(() => ({ content: { isContentVisible: false, contentId: undefined } })),
}))
