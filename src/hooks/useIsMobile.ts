import { useEffect, useState } from 'react'

const QUERY = '(max-width: 768px), (hover: none), (pointer: coarse)'

function getInitial() {
  if (typeof window === 'undefined') return false
  return window.matchMedia(QUERY).matches
}

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(getInitial)

  useEffect(() => {
    const query = window.matchMedia(QUERY)
    const update = () => setIsMobile(query.matches)

    update()
    query.addEventListener('change', update)
    return () => query.removeEventListener('change', update)
  }, [])

  return isMobile
}
