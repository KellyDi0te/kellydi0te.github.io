import { useEffect } from 'react'

// Met a jour le titre de l'onglet (SEO / partage).
export default function usePageTitle(title) {
  useEffect(() => {
    const full = title ? `${title} - TimeTravel Agency` : 'TimeTravel Agency - Voyages temporels de luxe'
    document.title = full
  }, [title])
}
