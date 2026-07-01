# Où déposer les images générées

Dépose chaque image ici, **au chemin exact** ci-dessous (format `.webp` de préférence).
Tant qu'un fichier est absent, le site affiche automatiquement un placeholder picsum : rien ne casse.
Les prompts correspondants sont dans `docs/IMAGE_PROMPTS.md` (le `seed` picsum indiqué là = le fichier ci-dessous).

## Accueil
| Fichier | Prompt (seed) | Ratio conseillé |
|---|---|---|
| `home/hero-bg.webp` | `timetravel-vortex-night` | 16:9 |

> La fenêtre du hero réutilise `paris-1889/hero.webp`.

## Paris 1889 — `paris-1889/`
| Fichier | Prompt (seed) | Ratio |
|---|---|---|
| `hero.webp` | `paris-1889-belle-epoque-eiffel` | 16:9 (et 4:5 pour la fenêtre) |
| `eiffel.webp` | `paris-eiffel-construction-1889` | 4:3 |
| `exposition.webp` | `paris-exposition-universelle-1889` | 4:3 |
| `montmartre.webp` | `paris-montmartre-moulin-rouge-cabaret` | 4:3 |
| `boulevards.webp` | `paris-grands-boulevards-belle-epoque` | 4:3 |
| `g1.webp` … `g4.webp` | `paris-1889-g1` … `g4` | 1:1 |

## Le Crétacé — `cretace/`
| Fichier | Prompt (seed) | Ratio |
|---|---|---|
| `hero.webp` | `cretaceous-jungle-dinosaurs-prehistoric` | 16:9 |
| `safari.webp` | `cretaceous-dinosaurs-herd-safari` | 4:3 |
| `dome.webp` | `cretaceous-night-dome-jungle` | 4:3 |
| `river.webp` | `cretaceous-river-prehistoric-water` | 4:3 |
| `pterosaurs.webp` | `cretaceous-pterosaurs-sky-sunset` | 4:3 |
| `g1.webp` … `g4.webp` | `cretace-g1` … `g4` | 1:1 |

## Florence 1504 — `florence-1504/`
| Fichier | Prompt (seed) | Ratio |
|---|---|---|
| `hero.webp` | `florence-1504-renaissance-art-michelangelo` | 16:9 |
| `david.webp` | `florence-michelangelo-studio-david` | 4:3 |
| `medici.webp` | `florence-medici-palace-fresco-dinner` | 4:3 |
| `artisan.webp` | `florence-renaissance-artisan-workshop` | 4:3 |
| `pontevecchio.webp` | `florence-ponte-vecchio-arno-sunset` | 4:3 |
| `g1.webp` … `g4.webp` | `florence-g1` … `g4` | 1:1 |

## Conseils
- Largeur max ~1920 px (heros) / ~900 px (cartes) / ~700 px (galerie) pour un chargement rapide.
- Exporter en WebP (qualité ~80). PNG/JPG fonctionnent aussi si tu changes l'extension dans `src/data/destinations.js`.
