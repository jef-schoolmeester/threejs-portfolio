import { useContext } from 'react'

import { LoadedItemsContext } from '@/App'

export const useLoadedItemsContext = () => {
  return useContext(LoadedItemsContext)
}
