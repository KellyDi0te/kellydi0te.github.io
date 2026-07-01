import { useParams, Link, Navigate } from 'react-router-dom'
import Img from '../components/Img.jsx'
import Reveal from '../components/Reveal.jsx'
import usePageTitle from '../hooks/usePageTitle.js'
import { destinations, order } from '../data/destinations.js'

const spans = ['md:col-span-3', 'md:col-span-3', 'md:col-span-4', 'md:col-span-2']

export default function Destination() {
  const { slug } = useParams()
  const data = destinations[slug]
  usePageTitle(data?.title)
  if (!data) return <Navigate to="/" replace />

  const idx = order.indexOf(slug)
  const prev = destinations[order[(idx - 1 + order.length) % order.length]]
  const next = destinations[order[(idx + 1) % order.length]]

  return (
    <main>
      {/* HERO */}
      <section className="relative min-h-[100dvh] flex items-end overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Img img={data.hero.img} seed={data.hero.seed} eager w={1920} h={1200} alt={data.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-void via-void/50 to-void/30" />
        </div>
        <div className="max-w-site mx-auto px-6 lg:px-10 w-full pb-20 lg:pb-28">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-ash hover:text-cream transition-colors mb-8">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M19 12H5M11 18l-6-6 6-6" /></svg>
            Toutes les destinations
          </Link>
          <div className="epoch-year text-[clamp(4rem,16vw,13rem)] mb-4">{data.year}</div>
          <div className="text-xs uppercase tracking-[0.24em] text-gold mb-4">{data.era}</div>
          <h1 className="font-display font-bold text-5xl lg:text-8xl tracking-tightest leading-none mb-6">{data.title}</h1>
          <p className="text-lg lg:text-xl text-cream/80 max-w-[52ch] leading-relaxed">{data.intro}</p>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="py-24 lg:py-36">
        <div className="max-w-site mx-auto px-6 lg:px-10 grid grid-cols-12 gap-8 lg:gap-16">
          <div className="col-span-12 lg:col-span-4">
            <Reveal className="lg:sticky lg:top-28">
              <div className="text-xs uppercase tracking-[0.2em] text-gold mb-6">L'époque</div>
              <h2 className="font-display font-medium text-4xl lg:text-5xl leading-[.95] tracking-tightest">{data.overview.title}</h2>
            </Reveal>
          </div>
          <Reveal className="col-span-12 lg:col-span-7 lg:col-start-6 space-y-10">
            <p className="text-2xl lg:text-3xl font-display leading-snug tracking-tight text-cream/90">{data.overview.lead}</p>
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-ash2">
              {data.overview.stats.map((s) => (
                <div key={s.l}>
                  <div className="font-display text-3xl lg:text-4xl tracking-tightest text-gold2">{s.n}</div>
                  <div className="mt-2 text-sm text-ash leading-relaxed">{s.l}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="py-8 lg:py-16">
        <div className="max-w-site mx-auto px-6 lg:px-10">
          <Reveal className="mb-12">
            <div className="text-xs uppercase tracking-[0.2em] text-gold mb-4">Temps forts</div>
            <h2 className="font-display font-medium text-4xl lg:text-6xl tracking-tightest leading-none">Ce que vous vivrez.</h2>
          </Reveal>
          <div className="grid md:grid-cols-6 gap-4">
            {data.highlights.map((h, i) => (
              <Reveal key={h.title} delay={i * 0.05} className={`${spans[i]} relative min-h-[300px] rounded-xl overflow-hidden border border-ash2 flex items-end group`}>
                <Img img={h.img} seed={h.seed} alt={h.title} w={900} h={700} className="absolute inset-0 w-full h-full object-cover -z-10 transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-void via-void/40 to-transparent" />
                <div className="p-7">
                  <h3 className="font-display font-medium text-2xl tracking-tightest mb-2">{h.title}</h3>
                  <p className="text-sm text-cream/75 max-w-[38ch]">{h.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ITINERAIRE */}
      <section className="py-24 lg:py-36">
        <div className="max-w-site mx-auto px-6 lg:px-10 grid grid-cols-12 gap-8 lg:gap-16">
          <Reveal className="col-span-12 lg:col-span-4">
            <div className="text-xs uppercase tracking-[0.2em] text-gold mb-6">Itinéraire</div>
            <h2 className="font-display font-medium text-4xl lg:text-5xl tracking-tightest leading-[.95] mb-6">{data.duration} au cœur de l'Histoire.</h2>
            <p className="text-ash leading-relaxed max-w-[38ch]">Chaque journée est orchestrée par un conseiller historien. Rythme ajustable selon vos envies.</p>
          </Reveal>
          <Reveal className="col-span-12 lg:col-span-7 lg:col-start-6">
            <div className="divide-y divide-ash2 border-y border-ash2">
              {data.itinerary.map((it, i) => (
                <div key={it.title} className="py-7 flex gap-6">
                  <div className="font-display text-xl tracking-tightest text-gold w-16 shrink-0">J{String(i + 1).padStart(2, '0')}</div>
                  <div>
                    <h3 className="font-display text-xl font-medium tracking-tight mb-1">{it.title}</h3>
                    <p className="text-ash leading-relaxed max-w-[52ch]">{it.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* GALERIE */}
      <section className="py-8 lg:py-16">
        <div className="max-w-site mx-auto px-6 lg:px-10">
          <Reveal className="mb-12">
            <div className="text-xs uppercase tracking-[0.2em] text-gold mb-4">Galerie</div>
            <h2 className="font-display font-medium text-4xl lg:text-6xl tracking-tightest leading-none">Un avant-goût.</h2>
          </Reveal>
          <Reveal className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {data.gallery.map((g) => (
              <div key={g.seed} className="aspect-square rounded-xl overflow-hidden border border-ash2">
                <Img img={g.img} seed={g.seed} alt="" w={700} h={700} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* INCLUS + PRIX */}
      <section className="py-24 lg:py-32 bg-char border-y border-ash2">
        <div className="max-w-site mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12">
          <Reveal className="lg:col-span-5">
            <div className="text-xs uppercase tracking-[0.2em] text-gold mb-6">Compris dans le voyage</div>
            <ul className="space-y-4 text-cream/85">
              {data.included.map((it) => (
                <li key={it} className="flex gap-3">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#cba35c" strokeWidth="1.8" className="shrink-0 mt-0.5"><path d="M20 6L9 17l-5-5" /></svg>
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal className="lg:col-span-6 lg:col-start-7">
            <div className="bg-surface border border-ash2 rounded-2xl p-8 lg:p-10">
              <div className="flex items-end justify-between mb-6 pb-6 border-b border-ash2">
                <div>
                  <div className="text-sm text-ash mb-1">à partir de</div>
                  <div className="font-display text-4xl lg:text-5xl tracking-tightest text-gold">{data.price} EUR</div>
                </div>
                <div className="text-right text-sm text-ash">{data.duration}<br />tout compris</div>
              </div>
              <p className="text-ash leading-relaxed mb-8">{data.note}</p>
              <a href="/#reserver" className="btn-primary w-full py-4 rounded-full font-display font-medium inline-flex items-center justify-center gap-2">
                Réserver cette époque
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
              </a>
              <div className="mt-6 flex items-center justify-between text-sm">
                <Link to={`/destinations/${prev.slug}`} className="text-ash hover:text-cream link-underline transition-colors">{'< '}{prev.title}</Link>
                <Link to={`/destinations/${next.slug}`} className="text-ash hover:text-cream link-underline transition-colors">{next.title}{' >'}</Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  )
}
