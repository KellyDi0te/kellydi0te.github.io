import { useState, useEffect } from 'react'

// Image tolerante : essaie .webp puis .png/.jpg/.jpeg, puis un placeholder picsum.
// Permet d'uploader les visuels dans n'importe quel format sans toucher au code.
function buildCandidates(img, seed, w, h) {
  const list = []
  if (img) {
    const base = img.replace(/\.[a-zA-Z0-9]+$/, '')
    for (const ext of ['webp', 'jpg', 'jpeg', 'png']) list.push(`${base}.${ext}`)
    // garde l'extension d'origine en priorite si differente
    if (!list.includes(img)) list.unshift(img)
  }
  list.push(`https://picsum.photos/seed/${seed}/${w}/${h}`)
  return list
}

export default function Img({ img, seed, alt = '', className, w = 1200, h = 900, eager = false, ...rest }) {
  const candidates = buildCandidates(img, seed, w, h)
  const [idx, setIdx] = useState(0)
  useEffect(() => {
    setIdx(0)
  }, [img, seed])

  return (
    <img
      src={candidates[idx]}
      alt={alt}
      className={className}
      loading={eager ? 'eager' : 'lazy'}
      onError={() => setIdx((i) => (i < candidates.length - 1 ? i + 1 : i))}
      {...rest}
    />
  )
}
