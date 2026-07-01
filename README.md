# TimeTravel Agency - Webapp Interactive

Webapp d'une agence de voyage temporel de luxe fictive, créée avec de l'IA générative de code.
Trois destinations : **Paris 1889** (Belle Époque), **le Crétacé** (-65M), **Florence 1504** (Renaissance).

Projet supervisé IA M1/M2 - Session 2 (WEBAPP & IA AGENTS).

## 🛠 Stack technique
- **React 18 + Vite** (build rapide, SPA)
- **Tailwind CSS 3** (design system dark + accent or unique)
- **Motion** (ex Framer Motion) - hero scroll-expand, reveals au scroll
- **React Router** - home + 3 pages destination
- **API Mistral** (`mistral-small-latest`) via fonction serverless - chatbot
- **Déploiement** : Vercel

## ✨ Features
- **Hero scroll-expand** : la fenêtre grandit au scroll pendant que le titre s'écarte
- **3 époques en plein écran**, l'une après l'autre, + **3 pages destination** détaillées (aperçu, temps forts, itinéraire, galerie, prix)
- **Chatbot IA** conversationnel (widget flottant, API Mistral, personnalité d'agence)
- **Quiz de personnalisation** : 4 questions qui recommandent une destination
- **Formulaire de réservation** avec validation et confirmation
- Design responsive mobile-first, animations subtiles, `prefers-reduced-motion` respecté

## 🚀 Installation
```bash
npm install
cp .env.example .env      # renseigner MISTRAL_API_KEY pour activer le chatbot
npm run dev               # http://localhost:5173
npm run build             # build de production dans dist/
```
> Sans clé Mistral, le chatbot répond par un message de repli : le reste du site fonctionne normalement.

## 🖼 Images
Les visuels (Session 1) se déposent dans `public/images/` (voir `public/images/README.md`).
Tant qu'une image est absente, un placeholder est affiché automatiquement (aucun lien cassé).
Les prompts de génération sont documentés dans `docs/IMAGE_PROMPTS.md`.

## 🔒 Sécurité de la clé API
La clé Mistral reste **côté serveur** : le client appelle `/api/chat`, qui proxifie la requête
(`api/chat.js` sur Vercel, middleware Vite en local). La clé n'est jamais exposée au navigateur.

## 🤖 IA utilisées (transparence)
- **Génération de code** : Claude (via Claude Code)
- **Chatbot** : Mistral Small via API
- **Visuels** : à générer (Midjourney / DALL·E / Flux) avec les prompts de `docs/IMAGE_PROMPTS.md`
- **Direction design** : skill "taste-skill" (anti-slop frontend)

## 📁 Structure
```
api/            Fonction serverless chatbot (Mistral)
src/
  components/   Header, HeroScroll, EpochSection, Quiz, Booking, Chatbot, Footer...
  pages/        Home, Destination
  data/         destinations.js (contenu des 3 époques)
public/images/  Visuels à déposer
docs/           KNOWLEDGE_BASE.md, IMAGE_PROMPTS.md
mockup/         Maquettes HTML statiques (référence)
```

## 📝 Licence
Projet pédagogique - M1/M2 Digital & IA.
