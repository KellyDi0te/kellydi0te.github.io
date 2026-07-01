// Image avec fallback automatique vers picsum si le fichier local n'existe pas encore.
export default function Img({ img, seed, alt = '', className, w = 1200, h = 900, eager = false, ...rest }) {
  const fallback = `https://picsum.photos/seed/${seed}/${w}/${h}`
  return (
    <img
      src={img || fallback}
      alt={alt}
      className={className}
      loading={eager ? 'eager' : 'lazy'}
      onError={(e) => {
        if (e.currentTarget.src !== fallback) e.currentTarget.src = fallback
      }}
      {...rest}
    />
  )
}
