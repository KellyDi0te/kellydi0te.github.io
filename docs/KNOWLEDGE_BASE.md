# Base de connaissance — TimeTravel Agency (Webapp Interactive)

> Projet supervisé IA M1/M2 — Session 2 (WEBAPP & IA AGENTS). Travail de groupe (4), rendu individuel Moodle.
> Source : `Consignes` + `Critères d'évaluation` (2 PDF fournis).

## 🎯 Objectif
Webapp interactive pour l'agence fictive **TimeTravel Agency** : vibe coding + IA générative, agents intelligents, expérience immersive. Permet aux clients de :
- Découvrir les destinations temporelles (interface immersive)
- Interagir avec un agent conversationnel (guide + conseil)
- Personnaliser le voyage selon leurs préférences
- Réserver / planifier

## 🕰 Les 3 destinations
| Destination | Époque | Thèmes clés |
|---|---|---|
| **Paris 1889** | Belle Époque | Tour Eiffel, Exposition Universelle |
| **Crétacé** | -65M ans | Dinosaures, nature préhistorique |
| **Florence 1504** | Renaissance | Art, Michel-Ange |

> Possibilité de réutiliser les destinations/visuels choisis en Session 1.

---

## ✅ Features demandées

### Page d'accueil (essentiel)
- Hero section avec vidéo/animation de fond
- Présentation de l'agence
- CTA vers les destinations

### Galerie des destinations (essentiel)
- Cards interactives pour les 3 époques
- Visuels générés en Session 1
- Infos détaillées par destination

### Agent conversationnel (essentiel)
- Chatbot IA intégré (widget flottant bas-droite, bulle → fenêtre au clic)
- Conseils personnalisés sur les destinations
- FAQ automatisée
- Doit répondre à : destinations, prix (inventer cohérents), conseil d'époque, FAQ agence
- Design cohérent site (thème sombre, accents dorés), placeholder « Posez-moi vos questions sur les voyages temporels… »

### Formulaire de réservation (optionnel selon le temps)
- Sélection destination + dates
- Validation automatisée

### Automatisation / Personnalisation (optionnel — en implémenter UNE)
- **Option A** : Quiz 3-4 questions → recommandation de destination (algo simple + IA)
- **Option B** : Sélection d'intérêts (art/nature/architecture/gastronomie) → description IA personnalisée
- **Option C** : Auto-complétion intelligente du formulaire selon la destination

### Animations (optionnel)
- Fade-in au scroll, apparition du titre hero, hover sur cards, transitions douces
- Style : fluide, 0.6–0.8s, easing naturel. **Pas trop d'animations.**

---

## 🤖 Personnalité du chatbot
> Assistant virtuel de TimeTravel Agency, agence de voyage temporel de **luxe**.
> Rôle : conseiller sur les meilleures destinations temporelles.
> Ton : professionnel mais chaleureux, passionné d'histoire, enthousiaste sans être familier.
> Expertise (fictive mais crédible) sur les 3 destinations. Peut suggérer selon les intérêts client.

## 🧭 Structure de navigation
`Header → Hero → Destinations → Chat → Footer`. Penser **responsive / mobile-first**.

---

## 🛠 Stack (VERROUILLÉE)
- **Front** : React + **Vite** + Tailwind CSS + Framer Motion.
- **Chatbot IA** : **API Mistral réelle** (`mistral-small`, gratuit) — interface de chat maison.
- **Animations** : Framer Motion.
- **Images/hero** : Cloudinary / GitHub / Supabase Storage + lazy loading.
- **Déploiement** : Vercel.

### ⚠️ Point d'attention — clé API Mistral
Vite étant client-side, la clé `VITE_MISTRAL_API_KEY` serait exposée dans le bundle. Deux voies :
1. **Démo/pédago** : clé en variable d'env front, assumée (rapide, OK pour la note).
2. **Propre** : petite fonction serverless (Vercel Function `/api/chat`) qui proxy Mistral et garde la clé côté serveur. → recommandé si le temps le permet.
Décision par défaut : commencer voie 1, migrer voie 2 avant déploiement public.

## 🚀 Déploiement
Vercel / Netlify / GitHub Pages / Cloudflare Pages (gratuit). Tester URL publique mobile + desktop.

---

## 📊 Barème (20 pts)
| Axe | Pts | Détails |
|---|---|---|
| **Technique** | 8 | Webapp fonctionnelle & déployée · qualité/structure du code · intégration assets S1 · usage pertinent des outils IA |
| **Fonctionnalités IA** | 6 | Agent conversationnel opérationnel & pertinent · feature auto/perso · cohérence des réponses IA avec le contexte |
| **UX/UI & Créativité** | 4 | Design pro & cohérent · navigation intuitive · animations subtiles · UX fluide |
| **Documentation & Open Source** | 2 | README complet · prompts documentés · crédits & transparence · réflexion process |

## 🎬 Livrable (Moodle, fin des 2h)
- URL webapp déployée (lien public fonctionnel)
- Repository GitHub (ou export code)
- README.md avec doc technique (titre, description, stack, features, outils IA utilisés, install, crédits)

---

## 🔒 Contraintes projet
- Branche de dev : `claude/new-project-setup-byssgd`
- Prix chatbot : inventés mais cohérents (luxe)
- Priorités : essentiels d'abord (accueil, galerie, chatbot), puis optionnels si le temps le permet
