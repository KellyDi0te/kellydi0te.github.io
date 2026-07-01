import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Remet le scroll en haut a chaque changement de page (sauf ancres #).
export default function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) return
    window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}
