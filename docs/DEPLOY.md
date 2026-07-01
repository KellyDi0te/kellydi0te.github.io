# Déploiement (Vercel)

Le projet est prêt pour Vercel : build Vite + fonction serverless `api/chat.js` + `vercel.json`.

## Étapes
1. Pousser le repo sur GitHub (déjà fait sur la branche de dev).
2. Sur [vercel.com](https://vercel.com) : **New Project** > importer le repo.
3. Vercel détecte Vite automatiquement :
   - **Build Command** : `npm run build`
   - **Output Directory** : `dist`
   - **Install Command** : `npm install`
4. **Environment Variables** > ajouter :
   - `MISTRAL_API_KEY` = votre clé Mistral (obtenue sur console.mistral.ai)
5. **Deploy**. L'URL publique est générée en une minute.

## Vérifications après déploiement
- [ ] La home charge (hero scroll-expand fluide)
- [ ] Les 3 pages destination s'ouvrent (`/destinations/paris-1889`, etc.)
- [ ] Le chatbot répond (teste 5-6 questions : destinations, prix, conseil, FAQ)
- [ ] Le quiz recommande une destination
- [ ] Le formulaire de réservation affiche la confirmation
- [ ] Test mobile + desktop

## Local (rappel)
```bash
npm install
cp .env.example .env    # renseigner MISTRAL_API_KEY
npm run dev             # http://localhost:5173 (chatbot actif via middleware)
```

## Notes
- La clé Mistral reste côté serveur (fonction `/api/chat`). Ne jamais la mettre dans une variable `VITE_*`.
- Sans clé, le chatbot renvoie un message de repli : le site reste pleinement fonctionnel pour la démo.
- Les images manquantes sont remplacées par des placeholders : le déploiement ne casse pas si tous les visuels ne sont pas encore là.
