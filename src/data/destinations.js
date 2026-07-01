// Donnees des 3 destinations. `img` = chemin local a deposer ; `seed` = fallback picsum auto.

export const destinations = {
  'paris-1889': {
    slug: 'paris-1889',
    title: 'Paris 1889',
    year: '1889',
    era: 'Paris - Belle Époque',
    hero: { img: '/images/paris-1889/hero.webp', seed: 'paris-1889-belle-epoque-eiffel' },
    intro:
      "L'Exposition Universelle, une Tour Eiffel toute neuve, les cafés et les bals sous la lumière au gaz. La ville-lumière à son apogée.",
    price: '42 000',
    duration: '7 jours',
    overview: {
      title: 'La ville-lumière invente le monde moderne.',
      lead:
        "1889 : Paris célèbre le centenaire de la Révolution avec une Exposition Universelle démesurée. La Tour Eiffel vient de s'élever, l'électricité émerveille, et tout un art de vivre se déploie des grands boulevards à Montmartre.",
      stats: [
        { n: '1er', l: "voyage où vous assistez à l'inauguration de la Tour" },
        { n: '32M', l: "de visiteurs à l'Exposition, et vous parmi eux" },
        { n: '7j', l: "d'immersion, costumes d'époque fournis" },
      ],
    },
    highlights: [
      { title: 'La Tour Eiffel neuve', desc: 'Montez au sommet quelques semaines après son inauguration, avant les foules du siècle.', img: '/images/paris-1889/eiffel.webp', seed: 'paris-eiffel-construction-1889' },
      { title: "L'Exposition Universelle", desc: 'Galerie des machines, pavillons du monde entier, premières ampoules électriques.', img: '/images/paris-1889/exposition.webp', seed: 'paris-exposition-universelle-1889' },
      { title: 'Cabarets de Montmartre', desc: 'Une soirée au Moulin Rouge naissant, entre french cancan et absinthe.', img: '/images/paris-1889/montmartre.webp', seed: 'paris-montmartre-moulin-rouge-cabaret' },
      { title: 'Grands boulevards', desc: 'Fiacres, cafés-concerts et vitrines des premiers grands magasins.', img: '/images/paris-1889/boulevards.webp', seed: 'paris-grands-boulevards-belle-epoque' },
    ],
    itinerary: [
      { title: 'Arrivée et acclimatation', desc: "Transfert temporel, habillage d'époque et dîner dans un cabinet particulier du Grand Véfour." },
      { title: 'Champ-de-Mars', desc: 'Ascension de la Tour Eiffel puis déjeuner au restaurant du premier étage.' },
      { title: 'Exposition Universelle', desc: 'Journée complète à travers les pavillons, la Galerie des machines et les jardins.' },
      { title: 'Montmartre by night', desc: "Ateliers d'artistes l'après-midi, cabaret le soir." },
      { title: 'Retour', desc: 'Dernière flânerie sur les quais, puis retour à la seconde de départ.' },
    ],
    gallery: [
      { img: '/images/paris-1889/g1.webp', seed: 'paris-1889-g1' },
      { img: '/images/paris-1889/g2.webp', seed: 'paris-1889-g2' },
      { img: '/images/paris-1889/g3.webp', seed: 'paris-1889-g3' },
      { img: '/images/paris-1889/g4.webp', seed: 'paris-1889-g4' },
    ],
    included: [
      'Transfert temporel sécurisé aller-retour',
      'Conseiller historien privé 24h/24',
      "Costumes et accessoires d'époque sur mesure",
      'Hébergement dans un hôtel particulier',
      'Tous les repas et accès privés',
      'Assurance temporelle tous risques',
    ],
    note:
      'Départ garanti à la seconde exacte de votre départ. Nombre de voyageurs limité à 6 par convoi pour préserver la discrétion.',
  },

  cretace: {
    slug: 'cretace',
    title: 'Le Crétacé',
    year: '-65M',
    era: 'Nature primitive',
    hero: { img: '/images/cretace/hero.webp', seed: 'cretaceous-jungle-dinosaurs-prehistoric' },
    intro:
      "Faune colossale, forêts vierges, observatoires blindés au cœur d'un monde d'avant l'homme. L'aventure absolue, en sécurité totale.",
    price: '68 000',
    duration: '5 jours',
    overview: {
      title: 'Le dernier grand monde sauvage.',
      lead:
        "À la fin du Crétacé, la Terre appartient aux géants. Forêts denses, fleuves immenses, ciels traversés de ptérosaures. Depuis nos observatoires blindés, vous approchez la vie préhistorique sans jamais la perturber.",
      stats: [
        { n: '0', l: 'empreinte laissée : protocole de non-interférence absolu' },
        { n: '24h', l: 'de faune observable, coupoles panoramiques' },
        { n: '5j', l: "d'expédition, escorte renforcée" },
      ],
    },
    highlights: [
      { title: 'Safari des géants', desc: 'Observez troupeaux et grands prédateurs depuis un véhicule blindé silencieux.', img: '/images/cretace/safari.webp', seed: 'cretaceous-dinosaurs-herd-safari' },
      { title: 'Coupole nocturne', desc: 'Nuit sous un dôme transparent, au son de la forêt primitive.', img: '/images/cretace/dome.webp', seed: 'cretaceous-night-dome-jungle' },
      { title: 'Rivières primitives', desc: "Descente encadrée au milieu d'une faune aquatique disparue.", img: '/images/cretace/river.webp', seed: 'cretaceous-river-prehistoric-water' },
      { title: 'Ciel de ptérosaures', desc: 'Au crépuscule, le vol des grands reptiles volants au-dessus de la canopée.', img: '/images/cretace/pterosaurs.webp', seed: 'cretaceous-pterosaurs-sky-sunset' },
    ],
    itinerary: [
      { title: 'Briefing et déploiement', desc: 'Formation sécurité, équipement, installation dans la base-observatoire blindée.' },
      { title: 'Grande plaine', desc: "Journée d'observation des grands troupeaux depuis les miradors panoramiques." },
      { title: 'Forêt dense', desc: 'Approche encadrée de la canopée et de sa faune, en véhicule silencieux.' },
      { title: 'Rivière et crépuscule', desc: 'Descente fluviale puis observation du vol des ptérosaures au coucher du soleil.' },
      { title: 'Extraction', desc: "Dernière veille à l'aube, puis retour sécurisé à l'instant de départ." },
    ],
    gallery: [
      { img: '/images/cretace/g1.webp', seed: 'cretace-g1' },
      { img: '/images/cretace/g2.webp', seed: 'cretace-g2' },
      { img: '/images/cretace/g3.webp', seed: 'cretace-g3' },
      { img: '/images/cretace/g4.webp', seed: 'cretace-g4' },
    ],
    included: [
      'Transfert temporel sécurisé aller-retour',
      'Escorte renforcée et guide paléontologue',
      'Combinaisons et équipement de protection',
      'Base-observatoire blindée tout confort',
      'Tous les repas et veilles encadrées',
      'Assurance temporelle tous risques',
    ],
    note:
      'Destination à escorte renforcée. Aptitude physique légère requise. Non-interférence garantie par notre protocole breveté.',
  },

  'florence-1504': {
    slug: 'florence-1504',
    title: 'Florence 1504',
    year: '1504',
    era: 'Florence - Renaissance',
    hero: { img: '/images/florence-1504/hero.webp', seed: 'florence-1504-renaissance-art-michelangelo' },
    intro:
      "L'année du David. Les ateliers de Michel-Ange, le mécénat des Médicis, des dîners sous les fresques. L'art à son sommet absolu.",
    price: '55 000',
    duration: '6 jours',
    overview: {
      title: 'L\'art atteint son point culminant.',
      lead:
        '1504 : Florence dévoile le David de Michel-Ange. Léonard et Michel-Ange se croisent, les Médicis règnent sur les arts, et chaque ruelle respire le génie de la Renaissance. Vous en êtes le témoin privilégié.',
      stats: [
        { n: '1504', l: "l'année exacte du dévoilement du David" },
        { n: '2', l: 'génies croisés : Léonard et Michel-Ange' },
        { n: '6j', l: "d'immersion, accès ateliers privés" },
      ],
    },
    highlights: [
      { title: "L'atelier de Michel-Ange", desc: 'Assistez au travail du maître, à quelques pas du David tout juste achevé.', img: '/images/florence-1504/david.webp', seed: 'florence-michelangelo-studio-david' },
      { title: 'Cour des Médicis', desc: 'Un dîner privé sous les fresques, au milieu des mécènes de l\'époque.', img: '/images/florence-1504/medici.webp', seed: 'florence-medici-palace-fresco-dinner' },
      { title: "Ateliers d'artisans", desc: 'Orfèvres, fresquistes et enlumineurs vous ouvrent leurs portes.', img: '/images/florence-1504/artisan.webp', seed: 'florence-renaissance-artisan-workshop' },
      { title: 'Florence au crépuscule', desc: "Le Ponte Vecchio et l'Arno sous la lumière dorée de la Toscane.", img: '/images/florence-1504/pontevecchio.webp', seed: 'florence-ponte-vecchio-arno-sunset' },
    ],
    itinerary: [
      { title: 'Arrivée à Florence', desc: 'Installation dans un palazzo privé, habillage Renaissance et dîner d\'accueil.' },
      { title: 'Le David', desc: "Approche privilégiée de l'œuvre puis visite de l'atelier de Michel-Ange." },
      { title: 'Les Médicis', desc: 'Journée à la cour, collections privées et dîner sous les fresques.' },
      { title: 'Artisans et marchés', desc: 'Rencontre des orfèvres et fresquistes, flânerie sur les marchés.' },
      { title: 'Toscane', desc: 'Escapade dans les collines et vignobles autour de la cité.' },
      { title: 'Retour', desc: "Dernière aube sur l'Arno, puis retour à la seconde de départ." },
    ],
    gallery: [
      { img: '/images/florence-1504/g1.webp', seed: 'florence-g1' },
      { img: '/images/florence-1504/g2.webp', seed: 'florence-g2' },
      { img: '/images/florence-1504/g3.webp', seed: 'florence-g3' },
      { img: '/images/florence-1504/g4.webp', seed: 'florence-g4' },
    ],
    included: [
      'Transfert temporel sécurisé aller-retour',
      'Conseiller historien de l\'art privé',
      'Costumes Renaissance sur mesure',
      'Hébergement dans un palazzo privé',
      'Tous les repas et accès ateliers privés',
      'Assurance temporelle tous risques',
    ],
    note:
      "Accès aux ateliers privés soumis à la discrétion de nos hôtes d'époque. Nombre de voyageurs limité à 6 par convoi.",
  },
}

export const order = ['paris-1889', 'cretace', 'florence-1504']
export const list = order.map((slug) => destinations[slug])
