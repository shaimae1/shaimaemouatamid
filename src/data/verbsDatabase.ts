import { VerbConjugationData } from '../types/conjugation';

export const VERBS_DATABASE: VerbConjugationData[] = [
  // --- GROUPE 1 (Réguliers en -ER) ---
  {
    infinitive: 'parler',
    meaningFr: 'Exprimer des pensées par la voix',
    translationDarija: 'Hder / tkellem',
    group: 'G1',
    auxiliary: 'avoir',
    pastParticiple: 'parlé',
    regular: true,
    stems: {
      base: 'parl',
      nousPresent: 'parl',
      ilsPresent: 'parl',
      futureStem: 'parler',
      passeSimpleStem: 'parl'
    },
    conjugations: {
      present: {
        je: 'parle',
        tu: 'parles',
        il: 'parle',
        nous: 'parlons',
        vous: 'parlez',
        ils: 'parlent'
      },
      imparfait: {
        je: 'parlais',
        tu: 'parlais',
        il: 'parlait',
        nous: 'parlions',
        vous: 'parliez',
        ils: 'parlaient'
      },
      futur_simple: {
        je: 'parlerai',
        tu: 'parleras',
        il: 'parlera',
        nous: 'parlerons',
        vous: 'parlerez',
        ils: 'parleront'
      },
      conditionnel_present: {
        je: 'parlerais',
        tu: 'parlerais',
        il: 'parlerait',
        nous: 'parlerions',
        vous: 'parleriez',
        ils: 'parleriez'
      },
      passe_compose: {
        je: 'ai parlé',
        tu: 'as parlé',
        il: 'a parlé',
        nous: 'avons parlé',
        vous: 'avez parlé',
        ils: 'ont parlé'
      },
      plus_que_parfait: {
        je: 'avais parlé',
        tu: 'avais parlé',
        il: 'avait parlé',
        nous: 'avions parlé',
        vous: 'aviez parlé',
        ils: 'avaient parlé'
      },
      subjonctif_present: {
        je: 'parle',
        tu: 'parles',
        il: 'parle',
        nous: 'parlions',
        vous: 'parliez',
        ils: 'parlent'
      },
      passe_simple: {
        je: 'parlai',
        tu: 'parlas',
        il: 'parla',
        nous: 'parlâmes',
        vous: 'parlâtes',
        ils: 'parlèrent'
      },
      imperatif_present: {
        tu: 'parle',
        nous: 'parlons',
        vous: 'parlez'
      }
    },
    mathematicalNotes: [
      'G1 Archétype parfait : R = Infinitif - "er" = "parl".',
      'Imparfait : R_{imp} = "parlons" - "ons" = "parl". R + [-ais, -ais, -ait, -ions, -iez, -aient].',
      'Futur : R_{fut} = Infinitif = "parler" + [-ai, -as, -a, -ons, -ez, -ont].',
      'Conditionnel = "parler" + [-ais, -ais, -ait, -ions, -iez, -aient].'
    ]
  },
  {
    infinitive: 'aimer',
    meaningFr: 'Éprouver de l’affection ou du goût',
    translationDarija: 'Bgha / Habb',
    group: 'G1',
    auxiliary: 'avoir',
    pastParticiple: 'aimé',
    regular: true,
    stems: {
      base: 'aim',
      nousPresent: 'aim',
      ilsPresent: 'aim',
      futureStem: 'aimer',
      passeSimpleStem: 'aim'
    },
    conjugations: {
      present: {
        je: "aime",
        tu: 'aimes',
        il: 'aime',
        nous: 'aimons',
        vous: 'aimez',
        ils: 'aiment'
      },
      imparfait: {
        je: "aimais",
        tu: 'aimais',
        il: 'aimait',
        nous: 'aimions',
        vous: 'aimiez',
        ils: 'aimaient'
      },
      futur_simple: {
        je: "aimerai",
        tu: 'aimeras',
        il: 'aimera',
        nous: 'aimerons',
        vous: 'aimerez',
        ils: 'aimeront'
      },
      conditionnel_present: {
        je: "aimerais",
        tu: 'aimerais',
        il: 'aimerait',
        nous: 'aimerions',
        vous: 'aimeriez',
        ils: 'aimeraient'
      },
      passe_compose: {
        je: "ai aimé",
        tu: 'as aimé',
        il: 'a aimé',
        nous: 'avons aimé',
        vous: 'avez aimé',
        ils: 'ont aimé'
      },
      plus_que_parfait: {
        je: "avais aimé",
        tu: 'avais aimé',
        il: 'avait aimé',
        nous: 'avions aimé',
        vous: 'aviez aimé',
        ils: 'avaient aimé'
      },
      subjonctif_present: {
        je: "aime",
        tu: 'aimes',
        il: 'aime',
        nous: 'aimions',
        vous: 'aimiez',
        ils: 'aiment'
      },
      passe_simple: {
        je: "aimai",
        tu: 'aimas',
        il: 'aima',
        nous: 'aimâmes',
        vous: 'aimâtes',
        ils: 'aimèrent'
      },
      imperatif_present: {
        tu: 'aime',
        nous: 'aimons',
        vous: 'aimez'
      }
    },
    mathematicalNotes: [
      'Élision phonologique : si Première lettre = voyelle, "je" ⟶ "j\'" (Opérateur de contraction).',
      'Formule identique à G1 : R = "aim".'
    ]
  },
  {
    infinitive: 'manger',
    meaningFr: 'Consommer de la nourriture',
    translationDarija: 'Kla',
    group: 'G1',
    auxiliary: 'avoir',
    pastParticiple: 'mangé',
    regular: false,
    stems: {
      base: 'mang',
      nousPresent: 'mange',
      ilsPresent: 'mang',
      futureStem: 'manger',
      passeSimpleStem: 'mange'
    },
    conjugations: {
      present: {
        je: 'mange',
        tu: 'manges',
        il: 'mange',
        nous: 'mangeons',
        vous: 'mangez',
        ils: 'mangent'
      },
      imparfait: {
        je: 'mangeais',
        tu: 'mangeais',
        il: 'mangeait',
        nous: 'mangions',
        vous: 'mangiez',
        ils: 'mangeaient'
      },
      futur_simple: {
        je: 'mangerai',
        tu: 'mangeras',
        il: 'mangera',
        nous: 'mangerons',
        vous: 'mangerez',
        ils: 'mangeront'
      },
      conditionnel_present: {
        je: 'mangerais',
        tu: 'mangerais',
        il: 'mangerait',
        nous: 'mangerions',
        vous: 'mangeriez',
        ils: 'mangeraient'
      },
      passe_compose: {
        je: 'ai mangé',
        tu: 'as mangé',
        il: 'a mangé',
        nous: 'avons mangé',
        vous: 'avez mangé',
        ils: 'ont mangé'
      },
      plus_que_parfait: {
        je: 'avais mangé',
        tu: 'avais mangé',
        il: 'avait mangé',
        nous: 'avions mangé',
        vous: 'aviez mangé',
        ils: 'avaient mangé'
      },
      subjonctif_present: {
        je: 'mange',
        tu: 'manges',
        il: 'mange',
        nous: 'mangions',
        vous: 'mangiez',
        ils: 'mangent'
      },
      passe_simple: {
        je: 'mangeai',
        tu: 'mangeas',
        il: 'mangea',
        nous: 'mangeâmes',
        vous: 'mangeâtes',
        ils: 'mangèrent'
      },
      imperatif_present: {
        tu: 'mange',
        nous: 'mangeons',
        vous: 'mangez'
      }
    },
    mathematicalNotes: [
      'Règle d’adoucissement phonétique : devant "a" ou "o", g ⟶ ge (mangeons, mangeais).',
      'Devant "i" ou "e", g reste simple : mangions, mangiez.'
    ]
  },
  // --- GROUPE 2 (Réguliers en -IR avec -ISSANT) ---
  {
    infinitive: 'finir',
    meaningFr: 'Arriver au terme d’une action',
    translationDarija: 'Salla / Kemmel',
    group: 'G2',
    auxiliary: 'avoir',
    pastParticiple: 'fini',
    regular: true,
    stems: {
      base: 'fin',
      nousPresent: 'finiss',
      ilsPresent: 'finiss',
      futureStem: 'finir',
      passeSimpleStem: 'fin'
    },
    conjugations: {
      present: {
        je: 'finis',
        tu: 'finis',
        il: 'finit',
        nous: 'finissons',
        vous: 'finissez',
        ils: 'finissent'
      },
      imparfait: {
        je: 'finissais',
        tu: 'finissais',
        il: 'finissait',
        nous: 'finissions',
        vous: 'finissiez',
        ils: 'finissaient'
      },
      futur_simple: {
        je: 'finirai',
        tu: 'finiras',
        il: 'finira',
        nous: 'finirons',
        vous: 'finirez',
        ils: 'finiront'
      },
      conditionnel_present: {
        je: 'finirais',
        tu: 'finirais',
        il: 'finirait',
        nous: 'finirions',
        vous: 'finiriez',
        ils: 'finiraient'
      },
      passe_compose: {
        je: 'ai fini',
        tu: 'as fini',
        il: 'a fini',
        nous: 'avons fini',
        vous: 'avez fini',
        ils: 'ont fini'
      },
      plus_que_parfait: {
        je: 'avais fini',
        tu: 'avais fini',
        il: 'avait fini',
        nous: 'avions fini',
        vous: 'aviez fini',
        ils: 'avaient fini'
      },
      subjonctif_present: {
        je: 'finisse',
        tu: 'finisses',
        il: 'finisse',
        nous: 'finissions',
        vous: 'finissiez',
        ils: 'finissent'
      },
      passe_simple: {
        je: 'finis',
        tu: 'finis',
        il: 'finit',
        nous: 'finîmes',
        vous: 'finîtes',
        ils: 'finirent'
      },
      imperatif_present: {
        tu: 'finis',
        nous: 'finissons',
        vous: 'finissez'
      }
    },
    mathematicalNotes: [
      'Critère d’appartenance G2 : Participe Présent = R + "issant" (fin-issant).',
      'Infixe régulier "-iss-" au pluriel du présent : fin-iss-ons, fin-iss-ez, fin-iss-ent.',
      'Démonstration Imparfait : R_{imp} = "finissons" - "ons" = "finiss". Alors V_{imp} = finiss + T_{imp} ! Exactitude prouvée.'
    ]
  },
  {
    infinitive: 'choisir',
    meaningFr: 'Désigner parmi plusieurs options',
    translationDarija: 'Khtar',
    group: 'G2',
    auxiliary: 'avoir',
    pastParticiple: 'choisi',
    regular: true,
    stems: {
      base: 'chois',
      nousPresent: 'choisiss',
      ilsPresent: 'choisiss',
      futureStem: 'choisir',
      passeSimpleStem: 'chois'
    },
    conjugations: {
      present: {
        je: 'choisis',
        tu: 'choisis',
        il: 'choisit',
        nous: 'choisissons',
        vous: 'choisissez',
        ils: 'choisissent'
      },
      imparfait: {
        je: 'choisissais',
        tu: 'choisissais',
        il: 'choisissait',
        nous: 'choisissions',
        vous: 'choisissiez',
        ils: 'choisissaient'
      },
      futur_simple: {
        je: 'choisirai',
        tu: 'choisiras',
        il: 'choisira',
        nous: 'choisirons',
        vous: 'choisirez',
        ils: 'choisiront'
      },
      conditionnel_present: {
        je: 'choisirais',
        tu: 'choisirais',
        il: 'choisirait',
        nous: 'choisirions',
        vous: 'choisiriez',
        ils: 'choisiraient'
      },
      passe_compose: {
        je: 'ai choisi',
        tu: 'as choisi',
        il: 'a choisi',
        nous: 'avons choisi',
        vous: 'avez choisi',
        ils: 'ont choisi'
      },
      plus_que_parfait: {
        je: 'avais choisi',
        tu: 'avais choisi',
        il: 'avait choisi',
        nous: 'avions choisi',
        vous: 'aviez choisi',
        ils: 'avaient choisi'
      },
      subjonctif_present: {
        je: 'choisisse',
        tu: 'choisisses',
        il: 'choisisse',
        nous: 'choisissions',
        vous: 'choisissiez',
        ils: 'choisissent'
      },
      passe_simple: {
        je: 'choisis',
        tu: 'choisis',
        il: 'choisit',
        nous: 'choisîmes',
        vous: 'choisîtes',
        ils: 'choisirent'
      },
      imperatif_present: {
        tu: 'choisis',
        nous: 'choisissons',
        vous: 'choisissez'
      }
    },
    mathematicalNotes: [
      'G2 invariant : R = "chois".',
      'Théorème de l’imparfait : "choisissons" - "ons" = "choisiss".',
      'Terminaisons G2 présent : [-is, -is, -it, -issons, -issez, -issent].'
    ]
  },
  // --- GROUPE 3 & AUXILIAIRES ---
  {
    infinitive: 'être',
    meaningFr: 'Exister, se trouver, auxiliaire primordial',
    translationDarija: 'Kan (auxiliaire l-kawn)',
    group: 'G3',
    auxiliary: 'avoir',
    pastParticiple: 'été',
    regular: false,
    stems: {
      base: 'êt',
      nousPresent: 'somm',
      ilsPresent: 'soi',
      futureStem: 'ser',
      passeSimpleStem: 'f'
    },
    conjugations: {
      present: {
        je: 'suis',
        tu: 'es',
        il: 'est',
        nous: 'sommes',
        vous: 'êtes',
        ils: 'sont'
      },
      imparfait: {
        je: 'étais',
        tu: 'étais',
        il: 'était',
        nous: 'étions',
        vous: 'étiez',
        ils: 'étaient'
      },
      futur_simple: {
        je: 'serai',
        tu: 'seras',
        il: 'sera',
        nous: 'serons',
        vous: 'serez',
        ils: 'seront'
      },
      conditionnel_present: {
        je: 'serais',
        tu: 'serais',
        il: 'serait',
        nous: 'serions',
        vous: 'seriez',
        ils: 'seraient'
      },
      passe_compose: {
        je: 'ai été',
        tu: 'as été',
        il: 'a été',
        nous: 'avons été',
        vous: 'avez été',
        ils: 'ont été'
      },
      plus_que_parfait: {
        je: 'avais été',
        tu: 'avais été',
        il: 'avait été',
        nous: 'avions été',
        vous: 'aviez été',
        ils: 'avaient été'
      },
      subjonctif_present: {
        je: 'sois',
        tu: 'sois',
        il: 'soit',
        nous: 'soyons',
        vous: 'soyez',
        ils: 'soient'
      },
      passe_simple: {
        je: 'fus',
        tu: 'fus',
        il: 'fut',
        nous: 'fûmes',
        vous: 'fûtes',
        ils: 'furent'
      },
      imperatif_present: {
        tu: 'sois',
        nous: 'soyons',
        vous: 'soyez'
      }
    },
    mathematicalNotes: [
      'Singularité mathématique #1 : Être est la seule exception au théorème de l’imparfait (Radical spécial "ét-", mais terminaisons strictement invariantes : -ais, -ais, -ait, -ions, -iez, -aient).',
      'Futur : Radical spécifique "ser-" + terminaisons universelles de Avoir [-ai, -as, -a, -ons, -ez, -ont].',
      'Conditionnel = "ser-" + terminaisons imparfait [-ais, -ais, -ait, -ions, -iez, -aient]. L’équation hybride reste 100% vérifiée !'
    ]
  },
  {
    infinitive: 'avoir',
    meaningFr: 'Posséder, disposer de, auxiliaire majeur',
    translationDarija: 'Aand / Mlek',
    group: 'G3',
    auxiliary: 'avoir',
    pastParticiple: 'eu',
    regular: false,
    stems: {
      base: 'av',
      nousPresent: 'av',
      ilsPresent: 'ai',
      futureStem: 'aur',
      passeSimpleStem: 'e'
    },
    conjugations: {
      present: {
        je: "ai",
        tu: 'as',
        il: 'a',
        nous: 'avons',
        vous: 'avez',
        ils: 'ont'
      },
      imparfait: {
        je: "avais",
        tu: 'avais',
        il: 'avait',
        nous: 'avions',
        vous: 'aviez',
        ils: 'avaient'
      },
      futur_simple: {
        je: "aurai",
        tu: 'auras',
        il: 'aura',
        nous: 'aurons',
        vous: 'aurez',
        ils: 'auront'
      },
      conditionnel_present: {
        je: "aurais",
        tu: 'aurais',
        il: 'aurait',
        nous: 'aurions',
        vous: 'auriez',
        ils: 'auraient'
      },
      passe_compose: {
        je: "ai eu",
        tu: 'as eu',
        il: 'a eu',
        nous: 'avons eu',
        vous: 'avez eu',
        ils: 'ont eu'
      },
      plus_que_parfait: {
        je: "avais eu",
        tu: 'avais eu',
        il: 'avait eu',
        nous: 'avions eu',
        vous: 'aviez eu',
        ils: 'avaient eu'
      },
      subjonctif_present: {
        je: "aie",
        tu: 'aies',
        il: 'ait',
        nous: 'ayons',
        vous: 'ayez',
        ils: 'aient'
      },
      passe_simple: {
        je: "eus",
        tu: 'eus',
        il: 'eut',
        nous: 'eûmes',
        vous: 'eûtes',
        ils: 'eurent'
      },
      imperatif_present: {
        tu: 'aie',
        nous: 'ayons',
        vous: 'ayez'
      }
    },
    mathematicalNotes: [
      'Théorème de l’imparfait vérifié : "avons" - "ons" = "av". Imparfait = av + [-ais, -ais, -ait, -ions, -iez, -aient] !',
      'Futur : Radical comprimé "aur-" + [ai, as, a, ons, ez, ont].',
      'Conditionnel = "aur-" + [ais, ais, ait, ions, iez, aient].'
    ]
  },
  {
    infinitive: 'aller',
    meaningFr: 'Se déplacer vers un lieu',
    translationDarija: 'Mcha',
    group: 'G3',
    auxiliary: 'être',
    pastParticiple: 'allé',
    regular: false,
    stems: {
      base: 'all',
      nousPresent: 'all',
      ilsPresent: 'v',
      futureStem: 'ir',
      passeSimpleStem: 'all'
    },
    conjugations: {
      present: {
        je: 'vais',
        tu: 'vas',
        il: 'va',
        nous: 'allons',
        vous: 'allez',
        ils: 'vont'
      },
      imparfait: {
        je: 'allais',
        tu: 'allais',
        il: 'allait',
        nous: 'allions',
        vous: 'alliez',
        ils: 'allaient'
      },
      futur_simple: {
        je: 'irai',
        tu: 'iras',
        il: 'ira',
        nous: 'irons',
        vous: 'irez',
        ils: 'iront'
      },
      conditionnel_present: {
        je: 'irais',
        tu: 'irais',
        il: 'irait',
        nous: 'irions',
        vous: 'iriez',
        ils: 'iraient'
      },
      passe_compose: {
        je: 'suis allé(e)',
        tu: 'es allé(e)',
        il: 'est allé',
        nous: 'sommes allé(e)s',
        vous: 'êtes allé(e)(s)',
        ils: 'sont allés'
      },
      plus_que_parfait: {
        je: 'étais allé(e)',
        tu: 'étais allé(e)',
        il: 'était allé',
        nous: 'étions allé(e)s',
        vous: 'étiez allé(e)(s)',
        ils: 'étaient allés'
      },
      subjonctif_present: {
        je: 'aille',
        tu: 'ailles',
        il: 'aille',
        nous: 'allions',
        vous: 'alliez',
        ils: 'aillent'
      },
      passe_simple: {
        je: 'allai',
        tu: 'allas',
        il: 'alla',
        nous: 'allâmes',
        vous: 'allâtes',
        ils: 'allèrent'
      },
      imperatif_present: {
        tu: 'va',
        nous: 'allons',
        vous: 'allez'
      }
    },
    mathematicalNotes: [
      'Bien qu’en -er, Aller ∉ G1 car son présent est polymorphe (vais, vas, va / allons, allez / vont).',
      'Théorème de l’imparfait vérifié : "allons" - "ons" = "all" ⟹ allais, allais, allait...',
      'Auxiliaire = ÊTRE : l’accord vectoriel avec le sujet est obligatoire (allé, allée, allés, allées).'
    ]
  },
  {
    infinitive: 'faire',
    meaningFr: 'Réaliser, accomplir une action',
    translationDarija: 'Dâr / Seouweb',
    group: 'G3',
    auxiliary: 'avoir',
    pastParticiple: 'fait',
    regular: false,
    stems: {
      base: 'fai',
      nousPresent: 'fais',
      ilsPresent: 'fass',
      futureStem: 'fer',
      passeSimpleStem: 'f'
    },
    conjugations: {
      present: {
        je: 'fais',
        tu: 'fais',
        il: 'fait',
        nous: 'faisons',
        vous: 'faites',
        ils: 'font'
      },
      imparfait: {
        je: 'faisais',
        tu: 'faisais',
        il: 'faisait',
        nous: 'faisions',
        vous: 'faisiez',
        ils: 'faisaient'
      },
      futur_simple: {
        je: 'ferai',
        tu: 'feras',
        il: 'fera',
        nous: 'ferons',
        vous: 'ferez',
        ils: 'feront'
      },
      conditionnel_present: {
        je: 'ferais',
        tu: 'ferais',
        il: 'ferait',
        nous: 'ferions',
        vous: 'feriez',
        ils: 'feraient'
      },
      passe_compose: {
        je: 'ai fait',
        tu: 'as fait',
        il: 'a fait',
        nous: 'avons fait',
        vous: 'avez fait',
        ils: 'ont fait'
      },
      plus_que_parfait: {
        je: 'avais fait',
        tu: 'avais fait',
        il: 'avait fait',
        nous: 'avions fait',
        vous: 'aviez fait',
        ils: 'avaient fait'
      },
      subjonctif_present: {
        je: 'fasse',
        tu: 'fasses',
        il: 'fasse',
        nous: 'fassions',
        vous: 'fassiez',
        ils: 'fassent'
      },
      passe_simple: {
        je: 'fis',
        tu: 'fis',
        il: 'fit',
        nous: 'fîmes',
        vous: 'fîtes',
        ils: 'firent'
      },
      imperatif_present: {
        tu: 'fais',
        nous: 'faisons',
        vous: 'faites'
      }
    },
    mathematicalNotes: [
      'Imparfait : "faisons" - "ons" = "fais". R + terminaisons ⟹ faisais, faisais, faisait...',
      'Futur : R_{fut} = "fer-" ⟹ ferai, feras, fera...',
      'Conditionnel = R_{fut}("fer-") + T_{imp} ⟹ ferais, ferais, ferait...'
    ]
  },
  {
    infinitive: 'prendre',
    meaningFr: 'Saisir, attraper, s’approprier',
    translationDarija: 'Khda',
    group: 'G3',
    auxiliary: 'avoir',
    pastParticiple: 'pris',
    regular: false,
    stems: {
      base: 'prend',
      nousPresent: 'pren',
      ilsPresent: 'prenn',
      futureStem: 'prendr',
      passeSimpleStem: 'pr'
    },
    conjugations: {
      present: {
        je: 'prends',
        tu: 'prends',
        il: 'prend',
        nous: 'prenons',
        vous: 'prenez',
        ils: 'prennent'
      },
      imparfait: {
        je: 'prenais',
        tu: 'prenais',
        il: 'prenait',
        nous: 'prenions',
        vous: 'preniez',
        ils: 'prenaient'
      },
      futur_simple: {
        je: 'prendrai',
        tu: 'prendras',
        il: 'prendra',
        nous: 'prendrons',
        vous: 'prendrez',
        ils: 'prendront'
      },
      conditionnel_present: {
        je: 'prendrais',
        tu: 'prendrais',
        il: 'prendrait',
        nous: 'prendrions',
        vous: 'prendriez',
        ils: 'prendraient'
      },
      passe_compose: {
        je: 'ai pris',
        tu: 'as pris',
        il: 'a pris',
        nous: 'avons pris',
        vous: 'avez pris',
        ils: 'ont pris'
      },
      plus_que_parfait: {
        je: 'avais pris',
        tu: 'avais pris',
        il: 'avait pris',
        nous: 'avions pris',
        vous: 'aviez pris',
        ils: 'avaient pris'
      },
      subjonctif_present: {
        je: 'prenne',
        tu: 'prennes',
        il: 'prenne',
        nous: 'prenions',
        vous: 'preniez',
        ils: 'prennent'
      },
      passe_simple: {
        je: 'pris',
        tu: 'pris',
        il: 'prit',
        nous: 'prîmes',
        vous: 'prîtes',
        ils: 'prirent'
      },
      imperatif_present: {
        tu: 'prends',
        nous: 'prenons',
        vous: 'prenez'
      }
    },
    mathematicalNotes: [
      'Dédoublement n au pluriel 3e pers : ils prennent (R_ils = "prenn-").',
      'Au subjonctif : pour {je, tu, il, ils} R = "prenn-" ⟹ prenne, prennes, prenne, prennent ; pour {nous, vous} R = "pren-" ⟹ prenions, preniez. Le théorème de double base s’applique impeccablement !'
    ]
  },
  {
    infinitive: 'pouvoir',
    meaningFr: 'Avoir la capacité ou la permission de',
    translationDarija: 'Qder / nteq',
    group: 'G3',
    auxiliary: 'avoir',
    pastParticiple: 'pu',
    regular: false,
    stems: {
      base: 'peuv',
      nousPresent: 'pouv',
      ilsPresent: 'peuv',
      futureStem: 'pourr',
      passeSimpleStem: 'p'
    },
    conjugations: {
      present: {
        je: 'peux',
        tu: 'peux',
        il: 'peut',
        nous: 'pouvons',
        vous: 'pouvez',
        ils: 'peuvent'
      },
      imparfait: {
        je: 'pouvais',
        tu: 'pouvais',
        il: 'pouvait',
        nous: 'pouvions',
        vous: 'pouviez',
        ils: 'pouvaient'
      },
      futur_simple: {
        je: 'pourrai',
        tu: 'pourras',
        il: 'pourra',
        nous: 'pourrons',
        vous: 'pourrez',
        ils: 'pourront'
      },
      conditionnel_present: {
        je: 'pourrais',
        tu: 'pourrais',
        il: 'pourrait',
        nous: 'pourrions',
        vous: 'pourriez',
        ils: 'pourraient'
      },
      passe_compose: {
        je: 'ai pu',
        tu: 'as pu',
        il: 'a pu',
        nous: 'avons pu',
        vous: 'avez pu',
        ils: 'ont pu'
      },
      plus_que_parfait: {
        je: 'avais pu',
        tu: 'avais pu',
        il: 'avait pu',
        nous: 'avions pu',
        vous: 'aviez pu',
        ils: 'avaient pu'
      },
      subjonctif_present: {
        je: 'puisse',
        tu: 'puisses',
        il: 'puisse',
        nous: 'puissions',
        vous: 'puissiez',
        ils: 'puissent'
      },
      passe_simple: {
        je: 'pus',
        tu: 'pus',
        il: 'put',
        nous: 'pûmes',
        vous: 'pûtes',
        ils: 'purent'
      },
      imperatif_present: {
        tu: '(invariable)',
        nous: '(invariable)',
        vous: '(invariable)'
      }
    },
    mathematicalNotes: [
      'Futur : R_{fut} = "pourr-" avec double R (pourrai, pourras, pourra...).',
      'Théorème de l’imparfait : "pouvons" - "ons" = "pouv". R + T_{imp} = pouvais, pouvais, pouvait... 100% exact.'
    ]
  },
  {
    infinitive: 'vouloir',
    meaningFr: 'Avoir la volonté ou le désir de',
    translationDarija: 'Bgha',
    group: 'G3',
    auxiliary: 'avoir',
    pastParticiple: 'voulu',
    regular: false,
    stems: {
      base: 'veu',
      nousPresent: 'voul',
      ilsPresent: 'veul',
      futureStem: 'voudr',
      passeSimpleStem: 'voul'
    },
    conjugations: {
      present: {
        je: 'veux',
        tu: 'veux',
        il: 'veut',
        nous: 'voulons',
        vous: 'voulez',
        ils: 'veulent'
      },
      imparfait: {
        je: 'voulais',
        tu: 'voulais',
        il: 'voulait',
        nous: 'voulions',
        vous: 'vouliez',
        ils: 'voulaient'
      },
      futur_simple: {
        je: 'voudrai',
        tu: 'voudras',
        il: 'voudra',
        nous: 'voudrons',
        vous: 'voudrez',
        ils: 'voudront'
      },
      conditionnel_present: {
        je: 'voudrais',
        tu: 'voudrais',
        il: 'voudrait',
        nous: 'voudrions',
        vous: 'voudriez',
        ils: 'voudraient'
      },
      passe_compose: {
        je: 'ai voulu',
        tu: 'as voulu',
        il: 'a voulu',
        nous: 'avons voulu',
        vous: 'avez voulu',
        ils: 'ont voulu'
      },
      plus_que_parfait: {
        je: 'avais voulu',
        tu: 'avais voulu',
        il: 'avait voulu',
        nous: 'avions voulu',
        vous: 'aviez voulu',
        ils: 'avaient voulu'
      },
      subjonctif_present: {
        je: 'veuille',
        tu: 'veuilles',
        il: 'veuille',
        nous: 'voulions',
        vous: 'vouliez',
        ils: 'veuillent'
      },
      passe_simple: {
        je: 'voulus',
        tu: 'voulus',
        il: 'voulut',
        nous: 'voulûmes',
        vous: 'voulûtes',
        ils: 'voulurent'
      },
      imperatif_present: {
        tu: 'veuille',
        nous: 'veuillons',
        vous: 'veuillez'
      }
    },
    mathematicalNotes: [
      'Futur : Radical hybride "voudr-" + [ai, as, a, ons, ez, ont].',
      'Conditionnel = "voudr-" + [ais, ais, ait, ions, iez, aient] ⟹ "je voudrais" !'
    ]
  },
  {
    infinitive: 'savoir',
    meaningFr: 'Avoir la connaissance de quelque chose',
    translationDarija: 'Aaref',
    group: 'G3',
    auxiliary: 'avoir',
    pastParticiple: 'su',
    regular: false,
    stems: {
      base: 'sai',
      nousPresent: 'sav',
      ilsPresent: 'sav',
      futureStem: 'saur',
      passeSimpleStem: 's'
    },
    conjugations: {
      present: {
        je: 'sais',
        tu: 'sais',
        il: 'sait',
        nous: 'savons',
        vous: 'savez',
        ils: 'savent'
      },
      imparfait: {
        je: 'savais',
        tu: 'savais',
        il: 'savait',
        nous: 'savions',
        vous: 'saviez',
        ils: 'savaient'
      },
      futur_simple: {
        je: 'saurai',
        tu: 'sauras',
        il: 'saura',
        nous: 'saurons',
        vous: 'saurez',
        ils: 'sauront'
      },
      conditionnel_present: {
        je: 'saurais',
        tu: 'saurais',
        il: 'saurait',
        nous: 'saurions',
        vous: 'sauriez',
        ils: 'sauraient'
      },
      passe_compose: {
        je: 'ai su',
        tu: 'as su',
        il: 'a su',
        nous: 'avons su',
        vous: 'avez su',
        ils: 'ont su'
      },
      plus_que_parfait: {
        je: 'avais su',
        tu: 'avais su',
        il: 'avait su',
        nous: 'avions su',
        vous: 'aviez su',
        ils: 'avaient su'
      },
      subjonctif_present: {
        je: 'sache',
        tu: 'saches',
        il: 'sache',
        nous: 'sachions',
        vous: 'sachiez',
        ils: 'sachent'
      },
      passe_simple: {
        je: 'sus',
        tu: 'sus',
        il: 'sut',
        nous: 'sûmes',
        vous: 'sûtes',
        ils: 'surent'
      },
      imperatif_present: {
        tu: 'sache',
        nous: 'sachons',
        vous: 'sachez'
      }
    },
    mathematicalNotes: [
      'Futur : R_{fut} = "saur-" (comme avoir "aur-"). Terminaisons d’avoir appliquées fidèlement.',
      'Imparfait : "savons" - "ons" = "sav". savais, savais, savait...'
    ]
  },
  {
    infinitive: 'venir',
    meaningFr: 'Arriver vers le lieu où l’on se trouve',
    translationDarija: 'Ja',
    group: 'G3',
    auxiliary: 'être',
    pastParticiple: 'venu',
    regular: false,
    stems: {
      base: 'vien',
      nousPresent: 'ven',
      ilsPresent: 'vienn',
      futureStem: 'viendr',
      passeSimpleStem: 'v'
    },
    conjugations: {
      present: {
        je: 'viens',
        tu: 'viens',
        il: 'vient',
        nous: 'venons',
        vous: 'venez',
        ils: 'viennent'
      },
      imparfait: {
        je: 'venais',
        tu: 'venais',
        il: 'venait',
        nous: 'venions',
        vous: 'veniez',
        ils: 'venaient'
      },
      futur_simple: {
        je: 'viendrai',
        tu: 'viendras',
        il: 'viendra',
        nous: 'viendrons',
        vous: 'viendrez',
        ils: 'viendront'
      },
      conditionnel_present: {
        je: 'viendrais',
        tu: 'viendrais',
        il: 'viendrait',
        nous: 'viendrions',
        vous: 'viendriez',
        ils: 'viendraient'
      },
      passe_compose: {
        je: 'suis venu(e)',
        tu: 'es venu(e)',
        il: 'est venu',
        nous: 'sommes venu(e)s',
        vous: 'êtes venu(e)(s)',
        ils: 'sont venus'
      },
      plus_que_parfait: {
        je: 'étais venu(e)',
        tu: 'étais venu(e)',
        il: 'était venu',
        nous: 'étions venu(e)s',
        vous: 'étiez venu(e)(s)',
        ils: 'étaient venus'
      },
      subjonctif_present: {
        je: 'vienne',
        tu: 'viennes',
        il: 'vienne',
        nous: 'venions',
        vous: 'veniez',
        ils: 'viennent'
      },
      passe_simple: {
        je: 'vins',
        tu: 'vins',
        il: 'vint',
        nous: 'vînmes',
        vous: 'vîntes',
        ils: 'vinrent'
      },
      imperatif_present: {
        tu: 'viens',
        nous: 'venons',
        vous: 'venez'
      }
    },
    mathematicalNotes: [
      'Passé simple vecteur V_{in} : vins, vins, vint, vînmes, vîntes, vinrent.',
      'Futur : R_{fut} = "viendr-" + [ai, as, a, ons, ez, ont].',
      'Auxiliaire = ÊTRE : l’accord vectoriel avec le sujet s’applique (venu, venue, venus, venues).'
    ]
  },
  {
    infinitive: 'écrire',
    meaningFr: 'Tracer des signes ou mots sur un support',
    translationDarija: 'Kteb',
    group: 'G3',
    auxiliary: 'avoir',
    pastParticiple: 'écrit',
    regular: false,
    stems: {
      base: 'écri',
      nousPresent: 'écriv',
      ilsPresent: 'écriv',
      futureStem: 'écrir',
      passeSimpleStem: 'écriv'
    },
    conjugations: {
      present: {
        je: "écris",
        tu: 'écris',
        il: 'écrit',
        nous: 'écrivons',
        vous: 'écrivez',
        ils: 'écrivent'
      },
      imparfait: {
        je: "écrivais",
        tu: 'écrivais',
        il: 'écrivait',
        nous: 'écrivions',
        vous: 'écriviez',
        ils: 'écrivaient'
      },
      futur_simple: {
        je: "écrirai",
        tu: 'écriras',
        il: 'écrira',
        nous: 'écrirons',
        vous: 'écrirez',
        ils: 'écriront'
      },
      conditionnel_present: {
        je: "écrirais",
        tu: 'écrirais',
        il: 'écrirait',
        nous: 'écririons',
        vous: 'écririez',
        ils: 'écriraient'
      },
      passe_compose: {
        je: "ai écrit",
        tu: 'as écrit',
        il: 'a écrit',
        nous: 'avons écrit',
        vous: 'avez écrit',
        ils: 'ont écrit'
      },
      plus_que_parfait: {
        je: "avais écrit",
        tu: 'avais écrit',
        il: 'avait écrit',
        nous: 'avions écrit',
        vous: 'aviez écrit',
        ils: 'avaient écrit'
      },
      subjonctif_present: {
        je: "écrive",
        tu: 'écrives',
        il: 'écrive',
        nous: 'écrivions',
        vous: 'écriviez',
        ils: 'écrivent'
      },
      passe_simple: {
        je: "écrivis",
        tu: 'écrivis',
        il: 'écrivit',
        nous: 'écrivîmes',
        vous: 'écrivîtes',
        ils: 'écrivirent'
      },
      imperatif_present: {
        tu: 'écris',
        nous: 'écrivons',
        vous: 'écrivez'
      }
    },
    mathematicalNotes: [
      'Insertion du phonème de liaison /v/ : "écrivons" ⟹ R_{imp} = "écriv-".',
      'Imparfait = "écriv-" + [-ais, -ais, -ait, -ions, -iez, -aient]. Démonstration vérifiée !'
    ]
  },
  // --- VERBES AVEC L'AUXILIAIRE ÊTRE (La Maison d'Être / Mouvement & État) ---
  {
    infinitive: 'partir',
    meaningFr: 'Quitter un lieu pour aller ailleurs (Maison d’Être)',
    translationDarija: 'Mcha / Safr (Auxiliaire Être)',
    group: 'G3',
    auxiliary: 'être',
    pastParticiple: 'parti',
    regular: false,
    stems: {
      base: 'par',
      nousPresent: 'part',
      ilsPresent: 'part',
      futureStem: 'partir',
      passeSimpleStem: 'part'
    },
    conjugations: {
      present: {
        je: 'pars',
        tu: 'pars',
        il: 'part',
        nous: 'partons',
        vous: 'partez',
        ils: 'partent'
      },
      imparfait: {
        je: 'partais',
        tu: 'partais',
        il: 'partait',
        nous: 'partions',
        vous: 'partiez',
        ils: 'partaient'
      },
      futur_simple: {
        je: 'partirai',
        tu: 'partiras',
        il: 'partira',
        nous: 'partirons',
        vous: 'partirez',
        ils: 'partiront'
      },
      conditionnel_present: {
        je: 'partirais',
        tu: 'partirais',
        il: 'partirait',
        nous: 'partirions',
        vous: 'partiriez',
        ils: 'partiraient'
      },
      passe_compose: {
        je: 'suis parti(e)',
        tu: 'es parti(e)',
        il: 'est parti',
        nous: 'sommes parti(e)s',
        vous: 'êtes parti(e)(s)',
        ils: 'sont partis'
      },
      plus_que_parfait: {
        je: 'étais parti(e)',
        tu: 'étais parti(e)',
        il: 'était parti',
        nous: 'étions parti(e)s',
        vous: 'étiez parti(e)(s)',
        ils: 'étaient partis'
      },
      subjonctif_present: {
        je: 'parte',
        tu: 'partes',
        il: 'parte',
        nous: 'partions',
        vous: 'partiez',
        ils: 'partent'
      },
      passe_simple: {
        je: 'partis',
        tu: 'partis',
        il: 'partit',
        nous: 'partîmes',
        vous: 'partîtes',
        ils: 'partirent'
      },
      imperatif_present: {
        tu: 'pars',
        nous: 'partons',
        vous: 'partez'
      }
    },
    mathematicalNotes: [
      'Auxiliaire ÊTRE obligatoire : verbe de mouvement (Maison d’Être).',
      'Accord du participe passé avec le sujet : Elle est partie (-e), Ils sont partis (-s).',
      'Imparfait déduit de Nous : "partons" - "ons" = "part-" + [-ais, -ais, -ait, -ions, -iez, -aient].'
    ]
  },
  {
    infinitive: 'sortir',
    meaningFr: 'Passer de l’intérieur vers l’extérieur (Maison d’Être)',
    translationDarija: 'Khrej (Auxiliaire Être)',
    group: 'G3',
    auxiliary: 'être',
    pastParticiple: 'sorti',
    regular: false,
    stems: {
      base: 'sor',
      nousPresent: 'sort',
      ilsPresent: 'sort',
      futureStem: 'sortir',
      passeSimpleStem: 'sort'
    },
    conjugations: {
      present: {
        je: 'sors',
        tu: 'sors',
        il: 'sort',
        nous: 'sortons',
        vous: 'sortez',
        ils: 'sortent'
      },
      imparfait: {
        je: 'sortais',
        tu: 'sortais',
        il: 'sortait',
        nous: 'sortions',
        vous: 'sortiez',
        ils: 'sortaient'
      },
      futur_simple: {
        je: 'sortirai',
        tu: 'sortiras',
        il: 'sortira',
        nous: 'sortirons',
        vous: 'sortirez',
        ils: 'sortiront'
      },
      conditionnel_present: {
        je: 'sortirais',
        tu: 'sortirais',
        il: 'sortirait',
        nous: 'sortirions',
        vous: 'sortiriez',
        ils: 'sortiraient'
      },
      passe_compose: {
        je: 'suis sorti(e)',
        tu: 'es sorti(e)',
        il: 'est sorti',
        nous: 'sommes sorti(e)s',
        vous: 'êtes sorti(e)(s)',
        ils: 'sont sortis'
      },
      plus_que_parfait: {
        je: 'étais sorti(e)',
        tu: 'étais sorti(e)',
        il: 'était sorti',
        nous: 'étions sorti(e)s',
        vous: 'étiez sorti(e)(s)',
        ils: 'étaient sortis'
      },
      subjonctif_present: {
        je: 'sorte',
        tu: 'sortes',
        il: 'sorte',
        nous: 'sortions',
        vous: 'sortiez',
        ils: 'sortent'
      },
      passe_simple: {
        je: 'sortis',
        tu: 'sortis',
        il: 'sortit',
        nous: 'sortîmes',
        vous: 'sortîtes',
        ils: 'sortirent'
      },
      imperatif_present: {
        tu: 'sors',
        nous: 'sortons',
        vous: 'sortez'
      }
    },
    mathematicalNotes: [
      'Auxiliaire ÊTRE : mouvement vers l’extérieur.',
      'Participe passé "sorti", accordé avec le sujet : Elle est sortie, Ils sont sortis.'
    ]
  },
  {
    infinitive: 'arriver',
    meaningFr: 'Parvenir au lieu de destination (Maison d’Être)',
    translationDarija: 'Wsel (Auxiliaire Être)',
    group: 'G1',
    auxiliary: 'être',
    pastParticiple: 'arrivé',
    regular: true,
    stems: {
      base: 'arriv',
      nousPresent: 'arriv',
      ilsPresent: 'arriv',
      futureStem: 'arriver',
      passeSimpleStem: 'arriv'
    },
    conjugations: {
      present: {
        je: 'arrive',
        tu: 'arrives',
        il: 'arrive',
        nous: 'arrivons',
        vous: 'arrivez',
        ils: 'arrivent'
      },
      imparfait: {
        je: 'arrivais',
        tu: 'arrivais',
        il: 'arrivait',
        nous: 'arrivions',
        vous: 'arriviez',
        ils: 'arrivaient'
      },
      futur_simple: {
        je: 'arriverai',
        tu: 'arriveras',
        il: 'arrivera',
        nous: 'arriverons',
        vous: 'arriverez',
        ils: 'arriveront'
      },
      conditionnel_present: {
        je: 'arriverais',
        tu: 'arriverais',
        il: 'arriverait',
        nous: 'arriverions',
        vous: 'arriveriez',
        ils: 'arriveraient'
      },
      passe_compose: {
        je: 'suis arrivé(e)',
        tu: 'es arrivé(e)',
        il: 'est arrivé',
        nous: 'sommes arrivé(e)s',
        vous: 'êtes arrivé(e)(s)',
        ils: 'sont arrivés'
      },
      plus_que_parfait: {
        je: 'étais arrivé(e)',
        tu: 'étais arrivé(e)',
        il: 'était arrivé',
        nous: 'étions arrivé(e)s',
        vous: 'étiez arrivé(e)(s)',
        ils: 'étaient arrivés'
      },
      subjonctif_present: {
        je: 'arrive',
        tu: 'arrives',
        il: 'arrive',
        nous: 'arrivions',
        vous: 'arriviez',
        ils: 'arrivent'
      },
      passe_simple: {
        je: 'arrivai',
        tu: 'arrivas',
        il: 'arriva',
        nous: 'arrivâmes',
        vous: 'arrivâtes',
        ils: 'arrivèrent'
      },
      imperatif_present: {
        tu: 'arrive',
        nous: 'arrivons',
        vous: 'arrivez'
      }
    },
    mathematicalNotes: [
      'G1 régulier en -er mais utilisant l’auxiliaire ÊTRE au passé composé.',
      'Élision au présent : J’arrive. Au passé composé : Je suis arrivé(e).'
    ]
  },
  {
    infinitive: 'tomber',
    meaningFr: 'Être entraîné de haut en bas par son poids (Maison d’Être)',
    translationDarija: 'Ttah (Auxiliaire Être)',
    group: 'G1',
    auxiliary: 'être',
    pastParticiple: 'tombé',
    regular: true,
    stems: {
      base: 'tomb',
      nousPresent: 'tomb',
      ilsPresent: 'tomb',
      futureStem: 'tomber',
      passeSimpleStem: 'tomb'
    },
    conjugations: {
      present: {
        je: 'tombe',
        tu: 'tombes',
        il: 'tombe',
        nous: 'tombons',
        vous: 'tombez',
        ils: 'tombent'
      },
      imparfait: {
        je: 'tombais',
        tu: 'tombais',
        il: 'tombait',
        nous: 'tombions',
        vous: 'tombiez',
        ils: 'tombaient'
      },
      futur_simple: {
        je: 'tomberai',
        tu: 'tomberas',
        il: 'tombera',
        nous: 'tomberons',
        vous: 'tomberez',
        ils: 'tomberont'
      },
      conditionnel_present: {
        je: 'tomberais',
        tu: 'tomberais',
        il: 'tomberait',
        nous: 'tomberions',
        vous: 'tomberiez',
        ils: 'tomberaient'
      },
      passe_compose: {
        je: 'suis tombé(e)',
        tu: 'es tombé(e)',
        il: 'est tombé',
        nous: 'sommes tombé(e)s',
        vous: 'êtes tombé(e)(s)',
        ils: 'sont tombés'
      },
      plus_que_parfait: {
        je: 'étais tombé(e)',
        tu: 'étais tombé(e)',
        il: 'était tombé',
        nous: 'étions tombé(e)s',
        vous: 'étiez tombé(e)(s)',
        ils: 'étaient tombés'
      },
      subjonctif_present: {
        je: 'tombe',
        tu: 'tombes',
        il: 'tombe',
        nous: 'tombions',
        vous: 'tombiez',
        ils: 'tombent'
      },
      passe_simple: {
        je: 'tombai',
        tu: 'tombas',
        il: 'tomba',
        nous: 'tombâmes',
        vous: 'tombâtes',
        ils: 'tombèrent'
      },
      imperatif_present: {
        tu: 'tombe',
        nous: 'tombons',
        vous: 'tombez'
      }
    },
    mathematicalNotes: [
      'Verbe de la Maison d’Être : "Je suis tombé(e)".',
      'Accord obligatoire avec le sujet.'
    ]
  },
  {
    infinitive: 'monter',
    meaningFr: 'Aller du bas vers le haut (Maison d’Être)',
    translationDarija: 'Tle3 (Auxiliaire Être)',
    group: 'G1',
    auxiliary: 'être',
    pastParticiple: 'monté',
    regular: true,
    stems: {
      base: 'mont',
      nousPresent: 'mont',
      ilsPresent: 'mont',
      futureStem: 'monter',
      passeSimpleStem: 'mont'
    },
    conjugations: {
      present: {
        je: 'monte',
        tu: 'montes',
        il: 'monte',
        nous: 'montons',
        vous: 'montez',
        ils: 'montent'
      },
      imparfait: {
        je: 'montais',
        tu: 'montais',
        il: 'montait',
        nous: 'montions',
        vous: 'montiez',
        ils: 'montaient'
      },
      futur_simple: {
        je: 'monterai',
        tu: 'monteras',
        il: 'montera',
        nous: 'monterons',
        vous: 'monterez',
        ils: 'monteront'
      },
      conditionnel_present: {
        je: 'monterais',
        tu: 'monterais',
        il: 'monterait',
        nous: 'monterions',
        vous: 'monteriez',
        ils: 'monteraient'
      },
      passe_compose: {
        je: 'suis monté(e)',
        tu: 'es monté(e)',
        il: 'est monté',
        nous: 'sommes monté(e)s',
        vous: 'êtes monté(e)(s)',
        ils: 'sont montés'
      },
      plus_que_parfait: {
        je: 'étais monté(e)',
        tu: 'étais monté(e)',
        il: 'était monté',
        nous: 'étions monté(e)s',
        vous: 'étiez monté(e)(s)',
        ils: 'étaient montés'
      },
      subjonctif_present: {
        je: 'monte',
        tu: 'montes',
        il: 'monte',
        nous: 'montions',
        vous: 'montiez',
        ils: 'montent'
      },
      passe_simple: {
        je: 'montai',
        tu: 'montas',
        il: 'monta',
        nous: 'montâmes',
        vous: 'montâtes',
        ils: 'montèrent'
      },
      imperatif_present: {
        tu: 'monte',
        nous: 'montons',
        vous: 'montez'
      }
    },
    mathematicalNotes: [
      'Intransitif (mouvement) : utilise l’auxiliaire ÊTRE.',
      'Participe passé accordé avec le sujet : Elle est montée.'
    ]
  },
  {
    infinitive: 'descendre',
    meaningFr: 'Aller du haut vers le bas (Maison d’Être)',
    translationDarija: 'Hbet / Nzel (Auxiliaire Être)',
    group: 'G3',
    auxiliary: 'être',
    pastParticiple: 'descendu',
    regular: false,
    stems: {
      base: 'descend',
      nousPresent: 'descend',
      ilsPresent: 'descend',
      futureStem: 'descendr',
      passeSimpleStem: 'descend'
    },
    conjugations: {
      present: {
        je: 'descends',
        tu: 'descends',
        il: 'descend',
        nous: 'descendons',
        vous: 'descendez',
        ils: 'descendent'
      },
      imparfait: {
        je: 'descendais',
        tu: 'descendais',
        il: 'descendait',
        nous: 'descendions',
        vous: 'descendiez',
        ils: 'descendaient'
      },
      futur_simple: {
        je: 'descendrai',
        tu: 'descendras',
        il: 'descendra',
        nous: 'descendrons',
        vous: 'descendrez',
        ils: 'descendront'
      },
      conditionnel_present: {
        je: 'descendrais',
        tu: 'descendrais',
        il: 'descendrait',
        nous: 'descendrions',
        vous: 'descendriez',
        ils: 'descendraient'
      },
      passe_compose: {
        je: 'suis descendu(e)',
        tu: 'es descendu(e)',
        il: 'est descendu',
        nous: 'sommes descendu(e)s',
        vous: 'êtes descendu(e)(s)',
        ils: 'sont descendus'
      },
      plus_que_parfait: {
        je: 'étais descendu(e)',
        tu: 'étais descendu(e)',
        il: 'était descendu',
        nous: 'étions descendu(e)s',
        vous: 'étiez descendu(e)(s)',
        ils: 'étaient descendus'
      },
      subjonctif_present: {
        je: 'descende',
        tu: 'descendes',
        il: 'descende',
        nous: 'descendions',
        vous: 'descendiez',
        ils: 'descendent'
      },
      passe_simple: {
        je: 'descendis',
        tu: 'descendis',
        il: 'descendit',
        nous: 'descendîmes',
        vous: 'descendîtes',
        ils: 'descendirent'
      },
      imperatif_present: {
        tu: 'descends',
        nous: 'descendons',
        vous: 'descendez'
      }
    },
    mathematicalNotes: [
      'G3 avec terminaison en -du au participe passé.',
      'Auxiliaire ÊTRE avec accord : Elle est descendue.'
    ]
  },
  {
    infinitive: 'entrer',
    meaningFr: 'Passer de l’extérieur à l’intérieur (Maison d’Être)',
    translationDarija: 'Dkhel (Auxiliaire Être)',
    group: 'G1',
    auxiliary: 'être',
    pastParticiple: 'entré',
    regular: true,
    stems: {
      base: 'entr',
      nousPresent: 'entr',
      ilsPresent: 'entr',
      futureStem: 'entrer',
      passeSimpleStem: 'entr'
    },
    conjugations: {
      present: {
        je: 'entre',
        tu: 'entres',
        il: 'entre',
        nous: 'entrons',
        vous: 'entrez',
        ils: 'entrent'
      },
      imparfait: {
        je: 'entrais',
        tu: 'entrais',
        il: 'entrait',
        nous: 'entrions',
        vous: 'entriez',
        ils: 'entraient'
      },
      futur_simple: {
        je: 'entrerai',
        tu: 'entreras',
        il: 'entrera',
        nous: 'entrerons',
        vous: 'entrerez',
        ils: 'entreront'
      },
      conditionnel_present: {
        je: 'entrerais',
        tu: 'entrerais',
        il: 'entrerait',
        nous: 'entrerions',
        vous: 'entreriez',
        ils: 'entreraient'
      },
      passe_compose: {
        je: 'suis entré(e)',
        tu: 'es entré(e)',
        il: 'est entré',
        nous: 'sommes entré(e)s',
        vous: 'êtes entré(e)(s)',
        ils: 'sont entrés'
      },
      plus_que_parfait: {
        je: 'étais entré(e)',
        tu: 'étais entré(e)',
        il: 'était entré',
        nous: 'étions entré(e)s',
        vous: 'étiez entré(e)(s)',
        ils: 'étaient entrés'
      },
      subjonctif_present: {
        je: 'entre',
        tu: 'entres',
        il: 'entre',
        nous: 'entrions',
        vous: 'entriez',
        ils: 'entrent'
      },
      passe_simple: {
        je: 'entrai',
        tu: 'entras',
        il: 'entra',
        nous: 'entrâmes',
        vous: 'entrâtes',
        ils: 'entrèrent'
      },
      imperatif_present: {
        tu: 'entre',
        nous: 'entrons',
        vous: 'entrez'
      }
    },
    mathematicalNotes: [
      'Verbe de déplacement vers l’intérieur (Maison d’Être).',
      'Auxiliaire ÊTRE : "Je suis entré(e)".'
    ]
  },
  {
    infinitive: 'rentrer',
    meaningFr: 'Entrer de nouveau, revenir chez soi (Maison d’Être)',
    translationDarija: 'Dkhel / Rje3 l dar (Auxiliaire Être)',
    group: 'G1',
    auxiliary: 'être',
    pastParticiple: 'rentré',
    regular: true,
    stems: {
      base: 'rentr',
      nousPresent: 'rentr',
      ilsPresent: 'rentr',
      futureStem: 'rentrer',
      passeSimpleStem: 'rentr'
    },
    conjugations: {
      present: {
        je: 'rentre',
        tu: 'rentres',
        il: 'rentre',
        nous: 'rentrons',
        vous: 'rentrez',
        ils: 'rentrent'
      },
      imparfait: {
        je: 'rentrais',
        tu: 'rentrais',
        il: 'rentrait',
        nous: 'rentrions',
        vous: 'rentriez',
        ils: 'rentraient'
      },
      futur_simple: {
        je: 'rentrerai',
        tu: 'rentreras',
        il: 'rentrera',
        nous: 'rentrerons',
        vous: 'rentrerez',
        ils: 'rentreront'
      },
      conditionnel_present: {
        je: 'rentrerais',
        tu: 'rentrerais',
        il: 'rentrerait',
        nous: 'rentrerions',
        vous: 'rentreriez',
        ils: 'rentreraient'
      },
      passe_compose: {
        je: 'suis rentré(e)',
        tu: 'es rentré(e)',
        il: 'est rentré',
        nous: 'sommes rentré(e)s',
        vous: 'êtes rentré(e)(s)',
        ils: 'sont rentrés'
      },
      plus_que_parfait: {
        je: 'étais rentré(e)',
        tu: 'étais rentré(e)',
        il: 'était rentré',
        nous: 'étions rentré(e)s',
        vous: 'étiez rentré(e)(s)',
        ils: 'étaient rentrés'
      },
      subjonctif_present: {
        je: 'rentre',
        tu: 'rentres',
        il: 'rentre',
        nous: 'rentrions',
        vous: 'rentriez',
        ils: 'rentrent'
      },
      passe_simple: {
        je: 'rentrai',
        tu: 'rentras',
        il: 'rentra',
        nous: 'rentrâmes',
        vous: 'rentrâtes',
        ils: 'rentrèrent'
      },
      imperatif_present: {
        tu: 'rentre',
        nous: 'rentrons',
        vous: 'rentrez'
      }
    },
    mathematicalNotes: [
      'Maison d’Être : "Nous sommes rentrés".'
    ]
  },
  {
    infinitive: 'rester',
    meaningFr: 'Demeurer dans un même lieu ou état (Maison d’Être)',
    translationDarija: 'Bqa / Gles (Auxiliaire Être)',
    group: 'G1',
    auxiliary: 'être',
    pastParticiple: 'resté',
    regular: true,
    stems: {
      base: 'rest',
      nousPresent: 'rest',
      ilsPresent: 'rest',
      futureStem: 'rester',
      passeSimpleStem: 'rest'
    },
    conjugations: {
      present: {
        je: 'reste',
        tu: 'restes',
        il: 'reste',
        nous: 'restons',
        vous: 'restez',
        ils: 'restent'
      },
      imparfait: {
        je: 'restais',
        tu: 'restais',
        il: 'restait',
        nous: 'restions',
        vous: 'restiez',
        ils: 'restaient'
      },
      futur_simple: {
        je: 'resterai',
        tu: 'resteras',
        il: 'restera',
        nous: 'resterons',
        vous: 'resterez',
        ils: 'resteront'
      },
      conditionnel_present: {
        je: 'resterais',
        tu: 'resterais',
        il: 'resterait',
        nous: 'resterions',
        vous: 'resteriez',
        ils: 'resteraient'
      },
      passe_compose: {
        je: 'suis resté(e)',
        tu: 'es resté(e)',
        il: 'est resté',
        nous: 'sommes resté(e)s',
        vous: 'êtes resté(e)(s)',
        ils: 'sont restés'
      },
      plus_que_parfait: {
        je: 'étais resté(e)',
        tu: 'étais resté(e)',
        il: 'était resté',
        nous: 'étions resté(e)s',
        vous: 'étiez resté(e)(s)',
        ils: 'étaient restés'
      },
      subjonctif_present: {
        je: 'reste',
        tu: 'restes',
        il: 'reste',
        nous: 'restions',
        vous: 'restiez',
        ils: 'restent'
      },
      passe_simple: {
        je: 'restai',
        tu: 'restas',
        il: 'resta',
        nous: 'restâmes',
        vous: 'restâtes',
        ils: 'restèrent'
      },
      imperatif_present: {
        tu: 'reste',
        nous: 'restons',
        vous: 'restez'
      }
    },
    mathematicalNotes: [
      'Verbe d’état de la Maison d’Être : "Elle est restée à la maison".'
    ]
  },
  {
    infinitive: 'retourner',
    meaningFr: 'Aller de nouveau dans un lieu (Maison d’Être)',
    translationDarija: 'Rje3 / 3awd mcha (Auxiliaire Être)',
    group: 'G1',
    auxiliary: 'être',
    pastParticiple: 'retourné',
    regular: true,
    stems: {
      base: 'retourn',
      nousPresent: 'retourn',
      ilsPresent: 'retourn',
      futureStem: 'retourner',
      passeSimpleStem: 'retourn'
    },
    conjugations: {
      present: {
        je: 'retourne',
        tu: 'retournes',
        il: 'retourne',
        nous: 'retournons',
        vous: 'retournez',
        ils: 'retournent'
      },
      imparfait: {
        je: 'retournais',
        tu: 'retournais',
        il: 'retournait',
        nous: 'retournions',
        vous: 'retourniez',
        ils: 'retournaient'
      },
      futur_simple: {
        je: 'retournerai',
        tu: 'retourneras',
        il: 'retournera',
        nous: 'retournerons',
        vous: 'retournerez',
        ils: 'retourneront'
      },
      conditionnel_present: {
        je: 'retournerais',
        tu: 'retournerais',
        il: 'retournerait',
        nous: 'retournerions',
        vous: 'retourneriez',
        ils: 'retourneraient'
      },
      passe_compose: {
        je: 'suis retourné(e)',
        tu: 'es retourné(e)',
        il: 'est retourné',
        nous: 'sommes retourné(e)s',
        vous: 'êtes retourné(e)(s)',
        ils: 'sont retournés'
      },
      plus_que_parfait: {
        je: 'étais retourné(e)',
        tu: 'étais retourné(e)',
        il: 'était retourné',
        nous: 'étions retourné(e)s',
        vous: 'étiez retourné(e)(s)',
        ils: 'étaient retournés'
      },
      subjonctif_present: {
        je: 'retourne',
        tu: 'retournes',
        il: 'retourne',
        nous: 'retournions',
        vous: 'retourniez',
        ils: 'retournent'
      },
      passe_simple: {
        je: 'retournai',
        tu: 'retournas',
        il: 'retourna',
        nous: 'retournâmes',
        vous: 'retournâtes',
        ils: 'retournèrent'
      },
      imperatif_present: {
        tu: 'retourne',
        nous: 'retournons',
        vous: 'retournez'
      }
    },
    mathematicalNotes: [
      'Mouvement : auxiliaire ÊTRE ("Ils sont retournés").'
    ]
  },
  {
    infinitive: 'naître',
    meaningFr: 'Venir au monde, commencer à vivre (Maison d’Être)',
    translationDarija: 'Tzad (Auxiliaire Être)',
    group: 'G3',
    auxiliary: 'être',
    pastParticiple: 'né',
    regular: false,
    stems: {
      base: 'nai',
      nousPresent: 'naiss',
      ilsPresent: 'naiss',
      futureStem: 'naîtr',
      passeSimpleStem: 'naqu'
    },
    conjugations: {
      present: {
        je: 'nais',
        tu: 'nais',
        il: 'naît',
        nous: 'naissons',
        vous: 'naissez',
        ils: 'naissent'
      },
      imparfait: {
        je: 'naissais',
        tu: 'naissais',
        il: 'naissait',
        nous: 'naissions',
        vous: 'naissiez',
        ils: 'naissaient'
      },
      futur_simple: {
        je: 'naîtrai',
        tu: 'naîtras',
        il: 'naîtra',
        nous: 'naîtrons',
        vous: 'naîtrez',
        ils: 'naîtront'
      },
      conditionnel_present: {
        je: 'naîtrais',
        tu: 'naîtrais',
        il: 'naîtrait',
        nous: 'naîtrions',
        vous: 'naîtriez',
        ils: 'naîtraient'
      },
      passe_compose: {
        je: 'suis né(e)',
        tu: 'es né(e)',
        il: 'est né',
        nous: 'sommes né(e)s',
        vous: 'êtes né(e)(s)',
        ils: 'sont nés'
      },
      plus_que_parfait: {
        je: 'étais né(e)',
        tu: 'étais né(e)',
        il: 'était né',
        nous: 'étions né(e)s',
        vous: 'étiez né(e)(s)',
        ils: 'étaient nés'
      },
      subjonctif_present: {
        je: 'naisse',
        tu: 'naisses',
        il: 'naisse',
        nous: 'naissions',
        vous: 'naissiez',
        ils: 'naissent'
      },
      passe_simple: {
        je: 'naquis',
        tu: 'naquis',
        il: 'naquit',
        nous: 'naquîmes',
        vous: 'naquîtes',
        ils: 'naquirent'
      },
      imperatif_present: {
        tu: 'nais',
        nous: 'naissons',
        vous: 'naissez'
      }
    },
    mathematicalNotes: [
      'Verbe de vie et d’état : auxiliaire ÊTRE obligatoire.',
      'Participe passé très court : "né" ⟶ "Elle est née en 2010".'
    ]
  },
  {
    infinitive: 'mourir',
    meaningFr: 'Cesser de vivre (Maison d’Être)',
    translationDarija: 'Mat (Auxiliaire Être)',
    group: 'G3',
    auxiliary: 'être',
    pastParticiple: 'mort',
    regular: false,
    stems: {
      base: 'meur',
      nousPresent: 'mour',
      ilsPresent: 'meur',
      futureStem: 'mourr',
      passeSimpleStem: 'mour'
    },
    conjugations: {
      present: {
        je: 'meurs',
        tu: 'meurs',
        il: 'meurt',
        nous: 'mourons',
        vous: 'mourez',
        ils: 'meurent'
      },
      imparfait: {
        je: 'mourais',
        tu: 'mourais',
        il: 'mourait',
        nous: 'mourions',
        vous: 'mouriez',
        ils: 'mouraient'
      },
      futur_simple: {
        je: 'mourrai',
        tu: 'mourras',
        il: 'mourra',
        nous: 'mourrons',
        vous: 'mourrez',
        ils: 'mourront'
      },
      conditionnel_present: {
        je: 'mourrais',
        tu: 'mourrais',
        il: 'mourrait',
        nous: 'mourrions',
        vous: 'mourriez',
        ils: 'mourraient'
      },
      passe_compose: {
        je: 'suis mort(e)',
        tu: 'es mort(e)',
        il: 'est mort',
        nous: 'sommes mort(e)s',
        vous: 'êtes mort(e)(s)',
        ils: 'sont morts'
      },
      plus_que_parfait: {
        je: 'étais mort(e)',
        tu: 'étais mort(e)',
        il: 'était mort',
        nous: 'étions mort(e)s',
        vous: 'étiez mort(e)(s)',
        ils: 'étaient morts'
      },
      subjonctif_present: {
        je: 'meure',
        tu: 'meures',
        il: 'meure',
        nous: 'mourions',
        vous: 'mouriez',
        ils: 'meurent'
      },
      passe_simple: {
        je: 'mourus',
        tu: 'mourus',
        il: 'mourut',
        nous: 'mourûmes',
        vous: 'mourûtes',
        ils: 'moururent'
      },
      imperatif_present: {
        tu: 'meurs',
        nous: 'mourons',
        vous: 'mourez'
      }
    },
    mathematicalNotes: [
      'Antonyme de naître : auxiliaire ÊTRE.',
      'Participe passé "mort" avec accord : "Elle est morte".'
    ]
  },
  {
    infinitive: 'devenir',
    meaningFr: 'Passer d’un état à un autre (Maison d’Être)',
    translationDarija: 'Wlla (Auxiliaire Être)',
    group: 'G3',
    auxiliary: 'être',
    pastParticiple: 'devenu',
    regular: false,
    stems: {
      base: 'devien',
      nousPresent: 'deven',
      ilsPresent: 'devienn',
      futureStem: 'deviendr',
      passeSimpleStem: 'dev'
    },
    conjugations: {
      present: {
        je: 'deviens',
        tu: 'deviens',
        il: 'devient',
        nous: 'devenons',
        vous: 'devenez',
        ils: 'deviennent'
      },
      imparfait: {
        je: 'devenais',
        tu: 'devenais',
        il: 'devenait',
        nous: 'devenions',
        vous: 'deveniez',
        ils: 'devenaient'
      },
      futur_simple: {
        je: 'deviendrai',
        tu: 'deviendras',
        il: 'deviendra',
        nous: 'deviendrons',
        vous: 'deviendrez',
        ils: 'deviendront'
      },
      conditionnel_present: {
        je: 'deviendrais',
        tu: 'deviendrais',
        il: 'deviendrait',
        nous: 'deviendrions',
        vous: 'deviendriez',
        ils: 'deviendraient'
      },
      passe_compose: {
        je: 'suis devenu(e)',
        tu: 'es devenu(e)',
        il: 'est devenu',
        nous: 'sommes devenu(e)s',
        vous: 'êtes devenu(e)(s)',
        ils: 'sont devenus'
      },
      plus_que_parfait: {
        je: 'étais devenu(e)',
        tu: 'étais devenu(e)',
        il: 'était devenu',
        nous: 'étions devenu(e)s',
        vous: 'étiez devenu(e)(s)',
        ils: 'étaient devenus'
      },
      subjonctif_present: {
        je: 'devienne',
        tu: 'deviennes',
        il: 'devienne',
        nous: 'devenions',
        vous: 'deveniez',
        ils: 'deviennent'
      },
      passe_simple: {
        je: 'devins',
        tu: 'devins',
        il: 'devint',
        nous: 'devînmes',
        vous: 'devîntes',
        ils: 'devinrent'
      },
      imperatif_present: {
        tu: 'deviens',
        nous: 'devenons',
        vous: 'devenez'
      }
    },
    mathematicalNotes: [
      'Dérivé de VENIR : conserve l’auxiliaire ÊTRE.',
      'Participe passé "devenu" avec accord : "Elle est devenue ingénieure".'
    ]
  },
  {
    infinitive: 'revenir',
    meaningFr: 'Venir de nouveau, retourner au point de départ (Maison d’Être)',
    translationDarija: 'Rje3 (Auxiliaire Être)',
    group: 'G3',
    auxiliary: 'être',
    pastParticiple: 'revenu',
    regular: false,
    stems: {
      base: 'revien',
      nousPresent: 'reven',
      ilsPresent: 'revienn',
      futureStem: 'reviendr',
      passeSimpleStem: 'rev'
    },
    conjugations: {
      present: {
        je: 'reviens',
        tu: 'reviens',
        il: 'revient',
        nous: 'revenons',
        vous: 'revenez',
        ils: 'reviennent'
      },
      imparfait: {
        je: 'revenais',
        tu: 'revenais',
        il: 'revenait',
        nous: 'revenions',
        vous: 'reveniez',
        ils: 'revenaient'
      },
      futur_simple: {
        je: 'reviendrai',
        tu: 'reviendras',
        il: 'reviendra',
        nous: 'reviendrons',
        vous: 'reviendrez',
        ils: 'reviendront'
      },
      conditionnel_present: {
        je: 'reviendrais',
        tu: 'reviendrais',
        il: 'reviendrait',
        nous: 'reviendrions',
        vous: 'reviendriez',
        ils: 'reviendraient'
      },
      passe_compose: {
        je: 'suis revenu(e)',
        tu: 'es revenu(e)',
        il: 'est revenu',
        nous: 'sommes revenu(e)s',
        vous: 'êtes revenu(e)(s)',
        ils: 'sont revenus'
      },
      plus_que_parfait: {
        je: 'étais revenu(e)',
        tu: 'étais revenu(e)',
        il: 'était revenu',
        nous: 'étions revenu(e)s',
        vous: 'étiez revenu(e)(s)',
        ils: 'étaient revenus'
      },
      subjonctif_present: {
        je: 'revienne',
        tu: 'reviennes',
        il: 'revienne',
        nous: 'revenions',
        vous: 'reveniez',
        ils: 'reviennent'
      },
      passe_simple: {
        je: 'revins',
        tu: 'revins',
        il: 'revint',
        nous: 'revînmes',
        vous: 'revîntes',
        ils: 'revinrent'
      },
      imperatif_present: {
        tu: 'reviens',
        nous: 'revenons',
        vous: 'revenez'
      }
    },
    mathematicalNotes: [
      'Dérivé de VENIR : auxiliaire ÊTRE.',
      'Participe passé "revenu" avec accord.'
    ]
  },
  {
    infinitive: 'passer',
    meaningFr: 'Se déplacer d’un lieu à un autre (quand sens de mouvement)',
    translationDarija: 'Daz (Auxiliaire Être quand mouvement)',
    group: 'G1',
    auxiliary: 'être',
    pastParticiple: 'passé',
    regular: true,
    stems: {
      base: 'pass',
      nousPresent: 'pass',
      ilsPresent: 'pass',
      futureStem: 'passer',
      passeSimpleStem: 'pass'
    },
    conjugations: {
      present: {
        je: 'passe',
        tu: 'passes',
        il: 'passe',
        nous: 'passons',
        vous: 'passez',
        ils: 'passent'
      },
      imparfait: {
        je: 'passais',
        tu: 'passais',
        il: 'passait',
        nous: 'passions',
        vous: 'passiez',
        ils: 'passaient'
      },
      futur_simple: {
        je: 'passerai',
        tu: 'passeras',
        il: 'passera',
        nous: 'passerons',
        vous: 'passerez',
        ils: 'passeront'
      },
      conditionnel_present: {
        je: 'passerais',
        tu: 'passerais',
        il: 'passerait',
        nous: 'passerions',
        vous: 'passeriez',
        ils: 'passeraient'
      },
      passe_compose: {
        je: 'suis passé(e)',
        tu: 'es passé(e)',
        il: 'est passé',
        nous: 'sommes passé(e)s',
        vous: 'êtes passé(e)(s)',
        ils: 'sont passés'
      },
      plus_que_parfait: {
        je: 'étais passé(e)',
        tu: 'étais passé(e)',
        il: 'était passé',
        nous: 'étions passé(e)s',
        vous: 'étiez passé(e)(s)',
        ils: 'étaient passés'
      },
      subjonctif_present: {
        je: 'passe',
        tu: 'passes',
        il: 'passe',
        nous: 'passions',
        vous: 'passiez',
        ils: 'passent'
      },
      passe_simple: {
        je: 'passai',
        tu: 'passas',
        il: 'passa',
        nous: 'passâmes',
        vous: 'passâtes',
        ils: 'passèrent'
      },
      imperatif_present: {
        tu: 'passe',
        nous: 'passons',
        vous: 'passez'
      }
    },
    mathematicalNotes: [
      'Sens de mouvement intransitif : "Je suis passé par le centre-ville".',
      'Accord obligatoire avec le sujet avec l’auxiliaire ÊTRE.'
    ]
  }
];
