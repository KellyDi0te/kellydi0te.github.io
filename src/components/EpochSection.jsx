import { Link } from 'react-router-dom'
import Img from './Img.jsx'
import Reveal from './Reveal.jsx'

// Section epoque plein ecran. align : 'left' | 'right' | 'center'
export default function EpochSection({ data, align = 'left', id }) {
  const gradient =
    align === 'right'
      ? 'bg-gradient-to-l from-void via-void/70 to-transparent'
      : align === 'center'
      ? 'bg-void/70'
      : 'bg-gradient-to-r from-void via-void/70 to-transparent'

  const wrap =
    align === 'right' ? 'w-full flex justify-end' : align === 'center' ? 'w-full' : 'w-full'
  const box =
    align === 'right'
      ? 'max-w-xl text-right'
      : align === 'center'
      ? 'max-w-2xl mx-auto text-center'
      : 'max-w-xl'

  return (
    <section id={id} className="relative min-h-[100dvh] flex items-center overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Img img={data.hero.img} seed={data.hero.seed} alt={data.title} w={1920} h={1200} className="w-full h-full object-cover" />
        <div className={`absolute inset-0 ${gradient}`} />
        <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-void/40" />
      </div>
      <div className={`max-w-site mx-auto px-6 lg:px-10 ${wrap}`}>
        <Reveal className={box}>
          <div className="epoch-year text-[clamp(6rem,20vw,17rem)] mb-2">{data.year}</div>
          <div className="text-xs uppercase tracking-[0.24em] text-gold mb-4">{data.era}</div>
          <h2 className="font-display font-bold text-5xl lg:text-7xl tracking-tightest leading-none mb-6">{data.title}</h2>
          <p className={`text-lg text-cream/80 leading-relaxed mb-8 max-w-[46ch] ${align === 'right' ? 'ml-auto' : align === 'center' ? 'mx-auto' : ''}`}>
            {data.intro}
          </p>
          <div className={`flex items-center gap-6 flex-wrap ${align === 'right' ? 'justify-end' : align === 'center' ? 'justify-center' : ''}`}>
            <div className={align === 'right' ? 'order-2 text-right' : ''}>
              <div className="font-display text-3xl tracking-tightest text-gold">{data.price} EUR</div>
              <div className="text-sm text-ash">à partir de - {data.duration}</div>
            </div>
            <Link
              to={`/destinations/${data.slug}`}
              className={`${align === 'center' ? 'btn-primary font-display font-medium' : 'btn-ghost'} inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm`}
            >
              Découvrir {data.title}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
