import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// Middleware dev : sert /api/chat en local (Vercel utilise api/chat.js en prod).
function apiDev() {
  return {
    name: 'api-dev',
    configureServer(server) {
      server.middlewares.use('/api/chat', (req, res) => {
        if (req.method !== 'POST') {
          res.statusCode = 405
          res.end('Method not allowed')
          return
        }
        let body = ''
        req.on('data', (c) => (body += c))
        req.on('end', async () => {
          try {
            const { messages } = JSON.parse(body || '{}')
            const { getReply } = await import('./api/_handler.js')
            const reply = await getReply(messages || [])
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({ reply }))
          } catch (e) {
            res.statusCode = 500
            res.end(JSON.stringify({ error: 'server_error' }))
          }
        })
      })
    },
  }
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  // Rend la cle dispo au middleware dev (process.env).
  if (env.MISTRAL_API_KEY) process.env.MISTRAL_API_KEY = env.MISTRAL_API_KEY
  return { plugins: [react(), apiDev()] }
})
