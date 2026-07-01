import Reveal from './Reveal.jsx'

export default function Manifesto() {
  return (
    <section id="experience" className="pt-24 pb-20 lg:pt-32 lg:pb-32">
      <div className="max-w-site mx-auto px-6 lg:px-10 grid grid-cols-12 gap-6 lg:gap-12 items-end">
        <Reveal className="col-span-12 lg:col-span-9">
          <div className="flex items-center gap-3 mb-8 text-xs uppercase tracking-[0.2em] text-gold">
            <span className="w-8 h-px bg-gold/50" />
            <span>Le premier voyagiste temporel</span>
          </div>
          <h2 className="font-display font-medium leading-[0.95] tracking-tightest text-[clamp(2.4rem,6vw,5.5rem)]">
            Le luxe n'est plus un lieu.<br />
            <span className="text-ash">C'est un</span> <span className="text-gold italic">instant</span> <span className="text-ash">de l'Histoire.</span>
          </h2>
          <p className="mt-10 text-lg lg:text-xl text-ash max-w-[58ch] leading-relaxed">
            Trois époques d'exception, escortées par nos conseillers historiens. Costumes, langue, protocole : vous n'observez pas le passé, vous y vivez.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row gap-4 sm:items-center">
            <a href="#destinations" className="btn-primary inline-flex items-center justify-center gap-3 px-7 py-4 rounded-full text-base font-display font-medium">
              Explorer les époques
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </a>
            <a href="#quiz" className="btn-ghost inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-base">Trouver mon époque</a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
