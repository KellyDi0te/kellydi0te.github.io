import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'

const GREETING = {
  role: 'assistant',
  content: "Bonjour et bienvenue chez TimeTravel Agency. Vers quelle époque puis-je vous faire voyager ?",
}

export default function Chatbot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([GREETING])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const bodyRef = useRef(null)

  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight
  }, [messages, loading, open])

  const send = async (e) => {
    e?.preventDefault()
    const text = input.trim()
    if (!text || loading) return
    const next = [...messages, { role: 'user', content: text }]
    setMessages(next)
    setInput('')
    setLoading(true)
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: next }),
      })
      const data = await res.json()
      setMessages([...next, { role: 'assistant', content: data.reply || "Pardonnez-moi, je n'ai pas saisi." }])
    } catch (err) {
      setMessages([...next, { role: 'assistant', content: "Un contretemps temporel m'empêche de répondre. Réessayez dans un instant." }])
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {/* Bulle flottante */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Fermer le chat' : 'Ouvrir le chat'}
        className="fixed right-6 bottom-6 z-[60] w-14 h-14 rounded-full bg-gold text-[#181206] grid place-items-center shadow-2xl hover:bg-gold2 transition-colors"
      >
        {open ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12" /></svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
        )}
      </button>

      <AnimatePresence>
        {open && (
          <motion.aside
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed right-6 bottom-24 z-[60] w-[360px] max-w-[calc(100vw-32px)] bg-surface border border-gold rounded-2xl overflow-hidden shadow-2xl"
            aria-label="Assistant TimeTravel"
          >
            <div className="flex items-center gap-3 px-5 py-4 border-b border-ash2 bg-gradient-to-b from-gold/15 to-transparent">
              <div className="w-9 h-9 rounded-full bg-gold text-[#181206] grid place-items-center font-display font-bold">T</div>
              <div>
                <div className="font-display font-medium text-sm">Assistant TimeTravel</div>
                <div className="text-xs text-gold2">En ligne</div>
              </div>
            </div>

            <div ref={bodyRef} className="p-4 flex flex-col gap-3 h-[320px] overflow-auto">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={
                    m.role === 'user'
                      ? 'self-end max-w-[82%] bg-gold text-[#181206] font-medium rounded-2xl rounded-br-sm px-4 py-3 text-sm'
                      : 'self-start max-w-[82%] bg-char border border-ash2 rounded-2xl rounded-bl-sm px-4 py-3 text-sm leading-relaxed'
                  }
                >
                  {m.content}
                </div>
              ))}
              {loading && (
                <div className="self-start bg-char border border-ash2 rounded-2xl rounded-bl-sm px-4 py-3 text-sm text-ash">
                  <span className="inline-flex gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold animate-bounce [animation-delay:-0.2s]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-gold animate-bounce [animation-delay:-0.1s]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-gold animate-bounce" />
                  </span>
                </div>
              )}
            </div>

            <form onSubmit={send} className="flex gap-2 p-3 border-t border-ash2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Posez-moi vos questions sur les voyages temporels..."
                aria-label="Message"
                className="flex-1 bg-void border border-ash2 text-cream rounded-full px-4 py-2.5 text-sm focus:outline-none focus:border-gold placeholder:text-ash/50"
              />
              <button type="submit" aria-label="Envoyer" disabled={loading} className="w-10 h-10 rounded-full bg-gold text-[#181206] grid place-items-center shrink-0 disabled:opacity-50">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 19V5M5 12l7-7 7 7" /></svg>
              </button>
            </form>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  )
}
