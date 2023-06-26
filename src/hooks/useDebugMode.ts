import { useMemo } from 'react'

export const useDebugMode = () => {
  const isDebugModeEnabled = useMemo(() => {
    return window.location.hash.includes('debug')
  }, [])
  return isDebugModeEnabled
}
