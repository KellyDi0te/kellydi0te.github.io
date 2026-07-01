import { getReply } from './_handler.js'

// Fonction serverless Vercel : POST /api/chat { messages: [{role, content}] } -> { reply }
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' })
    return
  }
  try {
    const { messages } = req.body ?? {}
    const reply = await getReply(messages ?? [])
    res.status(200).json({ reply })
  } catch (e) {
    res.status(500).json({ error: 'server_error' })
  }
}
