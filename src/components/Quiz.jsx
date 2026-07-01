import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'motion/react'
import Reveal from './Reveal.jsx'
import { destinations } from '../data/destinations.js'

// Chaque option ajoute un point a une destination. Feature de personnalisation (barème IA).
const QUESTIONS = [
  {
    q: 'Quel type d\'expérience recherchez-vous ?',
    options: [
      { label: 'Culturelle et artistique', dest: 'florence-1504' },
      { label: 'Aventure et nature', dest: 'cretace' },
      { label: 'Élégance et raffinement', dest: 'paris-1889' },
    ],
  },
  {
    q: 'Votre période préférée ?',
    options: [
      { label: 'Histoire moderne (XIXe siècle)', dest: 'paris-1889' },
      { label: 'Temps anciens et origines', dest: 'cretace' },
      { label: 'Renaissance et classicisme', dest: 'florence-1504' },
    ],
  },
  {
    q: 'Vous préférez :',
    options: [
      { label: "L'effervescence urbaine", dest: 'paris-1889' },
      { label: 'La nature sauvage', dest: 'cretace' },
      { label: "L'art et l'architecture", dest: 'florence-1504' },
    ],
  },
  {
    q: 'Votre activité idéale :',
    options: [
      { label: 'Visiter des monuments', dest: 'paris-1889' },
      { label: 'Observer la faune', dest: 'cretace' },
      { label: 'Explorer des ateliers', dest: 'florence-1504' },
    ],
  },
]

function computeResult(answers) {
  const score = {}
  answers.forEach((dest) => {
    if (dest) score[dest] = (score[dest] || 0) + 1
  })
  let best = 'paris-1889'
  let max = -1
  for (const slug of Object.keys(score)) {
    if (score[slug] > max) {
      max = score[slug]
      best = slug
    }
  }
  return best
}

export default function Quiz() {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState([])
  const done = step >= QUESTIONS.length

  const pick = (dest) => {
    const next = [...answers]
    next[step] = dest
    setAnswers(next)
    setTimeout(() => setStep(step + 1), 180)
  }

  const reset = () => {
    setStep(0)
    setAnswers([])
  }

  const result = done ? destinations[computeResult(answers)] : null

  return (
    <section id="quiz" className="py-24 lg:py-40">
      <div className="max-w-site mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-14 items-center">
        <Reveal>
          <div className="text-xs uppercase tracking-[0.2em] text-gold mb-5">Personnalisation</div>
          <h2 className="font-display font-medium text-5xl lg:text-6xl tracking-tightest leading-[0.95] mb-6">
            Quelle époque<br />vous ressemble ?
          </h2>
          <p className="text-lg text-ash max-w-[44ch] mb-9 leading-relaxed">
            Quatre questions, une recommandation. Répondez et nous composons l'itinéraire idéal selon vos goûts.
          </p>
          {done && (
            <button onClick={reset} className="btn-ghost inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm">
              Recommencer le quiz
            </button>
          )}
        </Reveal>

        <Reveal className="bg-surface border border-ash2 rounded-2xl p-8 lg:p-10 shadow-2xl min-h-[360px] flex flex-col justify-center">
          <AnimatePresence mode="wait">
            {!done ? (
              <motion.div key={step} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}>
                <div className="text-xs text-gold font-medium tracking-[0.1em] mb-2">QUESTION {step + 1} / {QUESTIONS.length}</div>
                <div className="font-display text-2xl font-medium mb-7">{QUESTIONS[step].q}</div>
                <div className="space-y-3">
                  {QUESTIONS[step].options.map((o) => (
                    <button
                      key={o.label}
                      onClick={() => pick(o.dest)}
                      className="w-full text-left flex items-center gap-4 px-5 py-4 rounded-xl border border-ash2 hover:border-gold hover:bg-gold/10 transition"
                    >
                      <span className="w-4 h-4 rounded-full border-2 border-ash shrink-0" />
                      {o.label}
                    </button>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div key="result" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
                <div className="text-xs text-gold font-medium tracking-[0.1em] mb-2">VOTRE ÉPOQUE</div>
                <div className="epoch-year text-6xl mb-3">{result.year}</div>
                <div className="font-display text-3xl font-medium mb-3">{result.title}</div>
                <p className="text-ash leading-relaxed mb-7">{result.intro}</p>
                <Link to={`/destinations/${result.slug}`} className="btn-primary inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-display font-medium">
                  Découvrir cette époque
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </Reveal>
      </div>
    </section>
  )
}
