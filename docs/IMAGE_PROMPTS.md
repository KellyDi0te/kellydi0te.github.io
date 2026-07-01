# Prompts de génération d'images - TimeTravel Agency

Prompts prêts à copier-coller (Midjourney / DALL·E 3 / Flux / SDXL). Rédigés en anglais (meilleur rendu).
Chaque image correspond à un emplacement réel du mockup (repéré par son `seed` picsum). Remplacer le placeholder par l'image générée en gardant le même nom de fichier logique.

---

## 🎨 Direction artistique commune

**Style à appliquer à TOUTES les images** (cohérence = accent or unique + dark cinématographique) :

> `cinematic photography, moody dramatic lighting, warm golden hour accents, deep rich shadows, luxury travel editorial, photorealistic, shot on 35mm film, subtle film grain, high dynamic range, elegant composition, muted palette with a single warm gold highlight`

**Suffixe technique (Midjourney)** : `--style raw --ar {ratio} --v 6.1`
**Negative prompt (SDXL/Flux)** : `text, watermark, logo, modern clothing, tourists, smartphones, cartoon, illustration, oversaturated, cheap HDR, distorted faces, extra limbs, lowres, jpeg artifacts`

**Ratios par emplacement**
| Emplacement | Ratio | Usage |
|---|---|---|
| Hero background | `16:9` | fond plein écran |
| Hero fenêtre / portrait | `4:5` | fenêtre scroll-expand |
| Temps forts (highlights) | `4:3` | cartes bento |
| Galerie | `1:1` | grille carrée |

---

## 🏠 Page d'accueil (`mockup/index.html`)

**`timetravel-vortex-night`** - fond du hero (derrière la fenêtre)
> `A vast dark starry night sky bending into a subtle time vortex, faint golden nebula spiral, deep black background, minimal, abstract, sense of infinite time travel, cinematic, {style commun}` - `--ar 16:9`

**`paris-1889-belle-epoque-eiffel`** - image de la fenêtre centrale (aussi hero page Paris)
> `The Eiffel Tower newly built in 1889 seen from below at golden dusk, Belle Époque Paris, gas lamps glowing, elegant crowd in period dress far away, warm golden light, romantic atmosphere, {style commun}` - `--ar 4:5`

Les fonds plein écran des 3 époques sur la home réutilisent les images des heros de destination ci-dessous.

---

## 🗼 Paris 1889 (`mockup/destinations/paris-1889.html`)

**Hero** → `paris-1889-belle-epoque-eiffel` (voir ci-dessus, décliner en `--ar 16:9`)

**Temps forts** (`--ar 4:3`)
- **`paris-eiffel-construction-1889`** > `The Eiffel Tower just completed in 1889, viewed from the Champ de Mars, wrought iron glinting in warm evening light, sparse elegant Parisians, Belle Époque, {style commun}`
- **`paris-exposition-universelle-1889`** > `Interior of the Galerie des Machines at the 1889 Universal Exposition Paris, vast iron and glass hall, early electric lights glowing amber, ornate pavilions, awe and grandeur, {style commun}`
- **`paris-montmartre-moulin-rouge-cabaret`** > `A Montmartre cabaret at night in 1889, red velvet interior, gas and early electric lights, dancers and absinthe glasses, warm golden glow, intimate and lively, {style commun}`
- **`paris-grands-boulevards-belle-epoque`** > `The grand boulevards of Paris in 1889 at dusk, horse-drawn carriages, café terraces, glowing shop windows of the first department stores, wet cobblestones reflecting golden light, {style commun}`

**Galerie** (`--ar 1:1`) - `paris-1889-g1` à `g4` : décliner 4 variations
> `Belle Époque Paris 1889 details: an ornate café interior, a lady's period gown detail, the Seine quays at golden hour, a wrought-iron balcony view over rooftops - atmospheric, warm gold light, {style commun}`

---

## 🦕 Le Crétacé (`mockup/destinations/cretace.html`)

**Hero** → **`cretaceous-jungle-dinosaurs-prehistoric`** (`--ar 16:9`)
> `A vast Late Cretaceous landscape at golden hour, lush primeval forest, distant colossal dinosaurs grazing near a wide river, dramatic sky, misty depth, cinematic scale, sense of a pristine lost world, {style commun}`

**Temps forts** (`--ar 4:3`)
- **`cretaceous-dinosaurs-herd-safari`** > `A herd of massive herbivore dinosaurs crossing a golden plain at dusk in the Cretaceous, seen from a distance, dust and warm backlight, epic wildlife safari feel, {style commun}`
- **`cretaceous-night-dome-jungle`** > `A transparent geodesic observation dome glowing warmly at night inside a dense prehistoric jungle, silhouettes of ferns and giant trees, fireflies, safe and immersive, {style commun}`
- **`cretaceous-river-prehistoric-water`** > `A wide primeval Cretaceous river at golden hour, aquatic reptiles surfacing, dense green banks, mist rising, mysterious and serene, {style commun}`
- **`cretaceous-pterosaurs-sky-sunset`** > `Great pterosaurs soaring above a Cretaceous forest canopy at sunset, dramatic orange and gold sky, silhouettes, awe-inspiring, {style commun}`

**Galerie** (`--ar 1:1`) - `cretace-g1` à `g4`
> `Cretaceous nature details: fern fronds backlit gold, a dinosaur eye close-up, a fossil-rich riverbed, a glowing armored observation vehicle in the jungle - cinematic, warm gold light, {style commun}`

---

## 🎨 Florence 1504 (`mockup/destinations/florence-1504.html`)

**Hero** → **`florence-1504-renaissance-art-michelangelo`** (`--ar 16:9`)
> `Renaissance Florence in 1504 at golden hour, view over terracotta rooftops toward the Duomo, the Arno river glowing, warm Tuscan light, timeless and majestic, {style commun}`

**Temps forts** (`--ar 4:3`)
- **`florence-michelangelo-studio-david`** > `The interior of a Renaissance sculptor's workshop in 1504, marble dust in warm light, a nearly finished monumental marble statue of David, tools and drawings, reverent atmosphere, {style commun}`
- **`florence-medici-palace-fresco-dinner`** > `A private candlelit dinner in a Medici palace hall in 1504, walls covered in Renaissance frescoes, golden candlelight, elegant period figures, opulent and intimate, {style commun}`
- **`florence-renaissance-artisan-workshop`** > `A Renaissance goldsmith and fresco artisan workshop in Florence 1504, warm light through arched windows, tools, pigments and gold leaf, craftsmanship, {style commun}`
- **`florence-ponte-vecchio-arno-sunset`** > `The Ponte Vecchio over the Arno river in Florence at golden sunset, 1504, reflections on the water, warm romantic light, {style commun}`

**Galerie** (`--ar 1:1`) - `florence-g1` à `g4`
> `Renaissance Florence details: a fresco fragment, a marble hand sculpture, gold leaf on parchment, a Tuscan courtyard at golden hour - cinematic, warm gold light, {style commun}`

---

## ✅ Checklist cohérence
- [ ] Une seule teinte d'accent chaude (or) sur toutes les images
- [ ] Toujours golden hour / lumière chaude, jamais de bleu froid dominant
- [ ] Pas de texte ni de visages modernes
- [ ] Générer aussi une version sombre/contrastée si l'image doit accueillir du texte par-dessus (heros)
- [ ] Exporter en WebP, largeur max 1920 px (heros) / 900 px (cartes), pour le lazy loading
