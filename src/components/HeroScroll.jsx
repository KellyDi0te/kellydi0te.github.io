import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react'
import Img from './Img.jsx'
import { destinations } from '../data/destinations.js'

const paris = destinations['paris-1889']

export default function HeroScroll() {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const [mobile, setMobile] = useState(false)

  useEffect(() => {
    const f = () => setMobile(window.innerWidth < 768)
    f()
    window.addEventListener('resize', f)
    return () => window.removeEventListener('resize', f)
  }, [])

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const winW = useTransform(scrollYProgress, [0, 1], [300, mobile ? 900 : 1550])
  const winH = useTransform(scrollYProgress, [0, 1], [410, mobile ? 660 : 810])
  const txLeft = useTransform(scrollYProgress, [0, 1], ['0vw', mobile ? '-50vw' : '-35vw'])
  const txRight = useTransform(scrollYProgress, [0, 1], ['0vw', mobile ? '50vw' : '35vw'])
  const bgOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.3])
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.9], [0.5, 0.1])
  const metaOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0])
  const hintOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0])

  // Version statique si l'utilisateur prefere reduire les animations.
  if (reduce) {
    return (
      <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Img img={paris.hero.img} seed={paris.hero.seed} eager w={1600} h={2000} alt="Paris 1889" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-void/60" />
        </div>
        <div className="text-center px-6">
          <p className="text-xs uppercase tracking-[0.24em] text-gold mb-6">Agence de voyage temporel de luxe</p>
          <h1 className="font-display font-extrabold text-6xl md:text-8xl tracking-tightest leading-none">
            <span className="text-cream">TIME</span> <span className="text-gold">TRAVEL</span>
          </h1>
        </div>
      </section>
    )
  }

  return (
    <section ref={ref} className="relative" style={{ height: '280vh' }}>
      <div className="sticky top-0 h-[100dvh] overflow-hidden bg-void">
        {/* Background */}
        <motion.div className="absolute inset-0 z-0" style={{ opacity: bgOpacity }}>
          <Img img="/images/home/hero-bg.webp" seed="timetravel-vortex-night" eager w={1920} h={1080} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-void/55" />
        </motion.div>

        {/* Fenetre centrale qui grandit */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl overflow-hidden border border-gold/50 z-10 max-w-[95vw] max-h-[86vh]"
          style={{ width: winW, height: winH, boxShadow: '0 40px 100px -30px rgba(0,0,0,.8)' }}
        >
          <Img img={paris.hero.img} seed={paris.hero.seed} eager w={1280} h={1600} alt="Paris 1889, Belle Époque" className="w-full h-full object-cover" />
          <motion.div className="absolute inset-0 bg-void" style={{ opacity: overlayOpacity }} />
          <motion.div className="absolute bottom-6 inset-x-0 text-center z-10" style={{ opacity: metaOpacity }}>
            <p className="text-xs md:text-sm text-cream font-medium tracking-[0.24em] uppercase opacity-90">Agence de voyage temporel de luxe</p>
            <p className="text-xs text-cream/90 mt-3 inline-flex items-center gap-2">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="animate-bounce"><path d="M12 5v14M5 12l7 7 7-7" /></svg>
              Continuez à défiler
            </p>
          </motion.div>
        </motion.div>

        {/* Titre split */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center pointer-events-none px-4">
          <div className="flex flex-col items-center gap-1 md:gap-3">
            <motion.h1 style={{ x: txLeft }} className="font-display font-extrabold text-6xl md:text-8xl lg:text-9xl text-cream tracking-tightest leading-none [text-shadow:0_2px_40px_rgba(0,0,0,.6)]">TIME</motion.h1>
            <motion.h1 style={{ x: txRight }} className="font-display font-extrabold text-6xl md:text-8xl lg:text-9xl text-gold tracking-tightest leading-none [text-shadow:0_2px_40px_rgba(0,0,0,.6)]">TRAVEL</motion.h1>
          </div>
        </div>

        {/* Hint scroll */}
        <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 text-cream/50 text-xs uppercase tracking-[0.3em] flex flex-col items-center gap-2" style={{ opacity: hintOpacity }}>
          <span>Scroll</span>
          <div className="w-px h-8 bg-cream/30" />
        </motion.div>
      </div>
    </section>
  )
}
