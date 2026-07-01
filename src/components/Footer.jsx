import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="py-16 lg:py-20 border-t border-ash2">
      <div className="max-w-site mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-12 gap-8 mb-14">
          <div className="col-span-12 lg:col-span-4">
            <Link to="/" className="flex items-center gap-3 mb-5">
              <span className="w-9 h-9 rounded-lg border border-gold bg-gold/15 text-gold grid place-items-center font-display font-bold">T</span>
              <span className="font-display font-bold text-xl tracking-tightest">TimeTravel</span>
            </Link>
            <p className="text-sm text-ash max-w-xs leading-relaxed">Le premier voyagiste temporel de luxe. Chaque époque, une destination.</p>
          </div>
          <div className="col-span-6 lg:col-span-2 lg:col-start-7">
            <div className="text-xs uppercase tracking-[0.2em] text-ash mb-5">Explorer</div>
            <ul className="space-y-3 text-sm text-ash">
              <li><a href="/#destinations" className="link-underline hover:text-cream transition-colors">Destinations</a></li>
              <li><a href="/#experience" className="link-underline hover:text-cream transition-colors">L'expérience</a></li>
              <li><a href="/#quiz" className="link-underline hover:text-cream transition-colors">Votre époque</a></li>
              <li><a href="/#reserver" className="link-underline hover:text-cream transition-colors">Réserver</a></li>
            </ul>
          </div>
          <div className="col-span-6 lg:col-span-2">
            <div className="text-xs uppercase tracking-[0.2em] text-ash mb-5">Agence</div>
            <ul className="space-y-3 text-sm text-ash">
              <li><a href="#" className="link-underline hover:text-cream transition-colors">À propos</a></li>
              <li><a href="#" className="link-underline hover:text-cream transition-colors">Sécurité temporelle</a></li>
              <li><a href="#" className="link-underline hover:text-cream transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-ash2 flex flex-col md:flex-row justify-between gap-3 text-xs text-ash">
          <span>Projet pédagogique M1/M2 Digital &amp; IA. Visuels et prix illustratifs.</span>
          <span>React + Vite + Tailwind. Chatbot : API Mistral.</span>
        </div>
      </div>
    </footer>
  )
}
