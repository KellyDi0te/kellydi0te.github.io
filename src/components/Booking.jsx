import { useState } from 'react'
import Reveal from './Reveal.jsx'
import { list } from '../data/destinations.js'

export default function Booking() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ dest: list[0].title, date: '', pax: 2, name: '', email: '' })

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value })

  const submit = (e) => {
    e.preventDefault()
    if (!form.name || !form.email) return
    setSent(true)
  }

  return (
    <section id="reserver" className="py-24 lg:py-32 bg-char border-y border-ash2">
      <div className="max-w-site mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-14">
        <Reveal className="lg:col-span-5">
          <div className="text-xs uppercase tracking-[0.2em] text-gold mb-5">Réservation</div>
          <h2 className="font-display font-medium text-5xl lg:text-7xl tracking-tightest leading-[0.95] mb-8">
            Réservez<br />votre départ.
          </h2>
          <p className="text-lg text-ash max-w-[38ch] leading-relaxed">
            Un conseiller vous rappelle sous 24 heures pour finaliser costumes, briefing et protocole d'époque.
          </p>
        </Reveal>

        <Reveal className="lg:col-span-6 lg:col-start-7">
          {sent ? (
            <div className="bg-surface border border-gold rounded-2xl p-10 h-full flex flex-col justify-center text-center">
              <div className="w-14 h-14 mx-auto rounded-full bg-gold text-[#181206] grid place-items-center mb-6">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5" /></svg>
              </div>
              <div className="font-display text-2xl font-medium mb-3">Demande envoyée, {form.name.split(' ')[0]} !</div>
              <p className="text-ash leading-relaxed">
                Votre intérêt pour <span className="text-gold">{form.dest}</span> est bien noté. Un conseiller TimeTravel vous recontacte sous 24 heures à {form.email}.
              </p>
              <button onClick={() => setSent(false)} className="btn-ghost mt-8 mx-auto inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm">
                Nouvelle demande
              </button>
            </div>
          ) : (
            <form onSubmit={submit} className="bg-surface border border-ash2 rounded-2xl p-8 lg:p-10">
              <div className="flex flex-col gap-2 mb-5">
                <label htmlFor="dest" className="text-sm">Destination</label>
                <select id="dest" value={form.dest} onChange={update('dest')} className="bg-void border border-ash2 text-cream rounded-lg px-4 py-3.5 focus:outline-none focus:border-gold">
                  {list.map((d) => (
                    <option key={d.slug}>{d.title}</option>
                  ))}
                </select>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-5">
                <div className="flex flex-col gap-2">
                  <label htmlFor="date" className="text-sm">Date de départ</label>
                  <input id="date" type="date" value={form.date} onChange={update('date')} className="bg-void border border-ash2 text-cream rounded-lg px-4 py-3.5 focus:outline-none focus:border-gold" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="pax" className="text-sm">Voyageurs</label>
                  <input id="pax" type="number" min="1" value={form.pax} onChange={update('pax')} className="bg-void border border-ash2 text-cream rounded-lg px-4 py-3.5 focus:outline-none focus:border-gold" />
                </div>
              </div>
              <div className="flex flex-col gap-2 mb-5">
                <label htmlFor="name" className="text-sm">Nom complet</label>
                <input id="name" type="text" required value={form.name} onChange={update('name')} placeholder="Adèle Fontaine" className="bg-void border border-ash2 text-cream rounded-lg px-4 py-3.5 placeholder:text-ash/50 focus:outline-none focus:border-gold" />
              </div>
              <div className="flex flex-col gap-2 mb-7">
                <label htmlFor="email" className="text-sm">Email</label>
                <input id="email" type="email" required value={form.email} onChange={update('email')} placeholder="adele.fontaine@exemple.fr" className="bg-void border border-ash2 text-cream rounded-lg px-4 py-3.5 placeholder:text-ash/50 focus:outline-none focus:border-gold" />
              </div>
              <button type="submit" className="btn-primary w-full py-4 rounded-full font-display font-medium inline-flex items-center justify-center gap-2">
                Demander une réservation
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  )
}
