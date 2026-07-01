import { Link } from 'react-router-dom'

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-3">
      <span className="w-9 h-9 rounded-lg border border-gold bg-gold/15 text-gold grid place-items-center font-display font-bold">T</span>
      <span className="font-display font-bold text-lg tracking-tightest">TimeTravel</span>
    </Link>
  )
}

export default function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-void/70 border-b border-ash2">
      <div className="max-w-site mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <Logo />
        <nav className="hidden lg:flex items-center gap-9 text-sm text-ash">
          <a href="/#destinations" className="link-underline hover:text-cream transition-colors">Destinations</a>
          <a href="/#experience" className="link-underline hover:text-cream transition-colors">L'expérience</a>
          <a href="/#quiz" className="link-underline hover:text-cream transition-colors">Votre époque</a>
          <a href="/#reserver" className="link-underline hover:text-cream transition-colors">Réserver</a>
        </nav>
        <a href="/#reserver" className="btn-primary px-5 py-2.5 text-sm rounded-full inline-flex items-center gap-2 font-display font-medium">
          Planifier mon voyage
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
        </a>
      </div>
    </header>
  )
}
