// Logique partagee entre le middleware dev (vite.config.js) et la fonction Vercel (api/chat.js).

export const SYSTEM_PROMPT = `Tu es l'assistant virtuel de TimeTravel Agency, une agence de voyage temporel de luxe.
Ton role : conseiller les clients sur les meilleures destinations temporelles.

Ton ton :
- Professionnel mais chaleureux
- Passionne d'histoire
- Toujours enthousiaste sans etre trop familier
- Expertise en voyage temporel (fictif mais credible)

Tu connais parfaitement nos trois destinations :
- Paris 1889 (Belle Epoque, Tour Eiffel, Exposition Universelle) : a partir de 42 000 EUR, 7 jours.
- Le Cretace, -65 millions d'annees (dinosaures, nature prehistorique, observatoires blindes) : a partir de 68 000 EUR, 5 jours.
- Florence 1504 (Renaissance, Michel-Ange, le David, les Medicis) : a partir de 55 000 EUR, 6 jours.

Tu peux suggerer une destination selon les interets du client, donner des prix (ceux ci-dessus),
repondre aux questions de FAQ (securite, ce qui est compris, reservation) et conseiller une epoque.
Reponds en francais, de maniere concise (3 a 5 phrases maximum).`

export async function getReply(messages) {
  const key = process.env.MISTRAL_API_KEY
  const clean = (Array.isArray(messages) ? messages : [])
    .filter((m) => m && (m.role === 'user' || m.role === 'assistant') && typeof m.content === 'string')
    .slice(-12)

  if (!key) {
    return "Je suis momentanement hors ligne (la cle API n'est pas configuree). En attendant, sachez que nous proposons trois epoques : Paris 1889, le Cretace et Florence 1504. Laquelle vous attire ?"
  }

  try {
    const res = await fetch('https://api.mistral.ai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${key}`,
      },
      body: JSON.stringify({
        model: 'mistral-small-latest',
        temperature: 0.6,
        max_tokens: 500,
        messages: [{ role: 'system', content: SYSTEM_PROMPT }, ...clean],
      }),
    })
    if (!res.ok) {
      return "Un petit contretemps temporel m'empeche de repondre a l'instant. Reessayez dans un moment, ou demandez-moi les details d'une de nos trois epoques."
    }
    const data = await res.json()
    return (
      data?.choices?.[0]?.message?.content?.trim() ||
      "Pardonnez-moi, je n'ai pas saisi. Souhaitez-vous des informations sur Paris 1889, le Cretace ou Florence 1504 ?"
    )
  } catch (e) {
    return "Un petit contretemps temporel m'empeche de repondre a l'instant. Reessayez dans un moment."
  }
}
