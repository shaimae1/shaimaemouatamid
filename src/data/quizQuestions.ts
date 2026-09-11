import { QuizQuestion } from '../types/conjugation';

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'q1',
    type: 'radical_extraction',
    title: 'Trouver le Radical de l’Imparfait',
    equation: 'Radical = "Nous prenons" − "ons" = ?',
    questionText: 'Selon la règle de l’imparfait, quel est le radical exact pour conjuguer le verbe PRENDRE à l’imparfait ?',
    options: ['pren-', 'prend-', 'prenn-', 'pr-'],
    correctAnswer: 'pren-',
    solutionProof: 'Au présent : "Nous prenons". On enlève "ons" : "prenons" − "ons" = "pren-". On ajoute la terminaison d’imparfait, par ex. "pren" + "ais" = "prenais".',
    difficulty: 'facile'
  },
  {
    id: 'q2',
    type: 'equation_completion',
    title: 'Terminaison du Futur Simple',
    equation: 'Futur de "chanter" (nous) : chanter + [ ? ] = chanterons',
    questionText: 'Quelle terminaison issue du verbe AVOIR au présent ajoute-t-on pour "nous" au futur simple ?',
    options: ['-ons', '-ions', '-erons', '-ont'],
    correctAnswer: '-ons',
    solutionProof: 'Le futur simple prend l’infinitif ("chanter") et la forme de Avoir ("nous avons" ⟶ "-ons"). Donc chanter + ons = chanterons !',
    difficulty: 'facile'
  },
  {
    id: 'q3',
    type: 'tense_derivation',
    title: 'Conditionnel Présent',
    equation: 'Conditionnel de vouloir (je) : voudr- + [ terminaison imparfait ] = ?',
    questionText: 'En combinant le radical du futur de VOULOIR ("voudr-") et la terminaison de l’imparfait pour "je", quel verbe obtient-on ?',
    options: ['voudrais', 'voudrai', 'voulais', 'voulerais'],
    correctAnswer: 'voudrais',
    solutionProof: 'Règle du conditionnel : Radical du Futur ("voudr-") + Terminaison de l’Imparfait pour je ("-ais"). Résultat : "voudr" + "ais" = "voudrais".',
    difficulty: 'moyen'
  },
  {
    id: 'q4',
    type: 'radical_extraction',
    title: 'L’Unique Exception : ÊTRE à l’imparfait',
    equation: 'Radical de l’imparfait pour ÊTRE = ?',
    questionText: 'Quel est le radical unique utilisé pour le verbe ÊTRE à l’imparfait ?',
    options: ['ét-', 'somm-', 'êt-', 'ser-'],
    correctAnswer: 'ét-',
    solutionProof: 'Le verbe ÊTRE est la seule exception française : son radical d’imparfait est "ét-", auquel on ajoute les terminaisons normales : ét-ais, ét-ions, ét-aient.',
    difficulty: 'facile'
  },
  {
    id: 'q5',
    type: 'equation_completion',
    title: 'Subjonctif Présent',
    equation: 'Subjonctif de boire (ils) : "Ils boivent" − "ent" + "ent" = ?',
    questionText: 'Pour les verbes comme BOIRE, quelle est la forme correcte du subjonctif pour "ils" ?',
    options: ['qu’ils boivent', 'qu’ils buvent', 'qu’ils boivions', 'qu’ils buvaient'],
    correctAnswer: 'qu’ils boivent',
    solutionProof: 'Pour "ils" au subjonctif, on part de "Ils au présent" : "boivent" − "ent" = "boiv-". En remettant "-ent", on obtient "qu’ils boivent". (Et pour nous : que nous buvions).',
    difficulty: 'moyen'
  },
  {
    id: 'q6',
    type: 'boolean_agreement',
    title: 'Accord du Participe Passé',
    equation: 'Règle avec AVOIR : "Les lettres que j’ai [écrire]..."',
    questionText: 'Dans la phrase : "Les lettres que j’ai [écrire]...", quelle est l’orthographe correcte du participe passé ?',
    options: ['écrites', 'écrit', 'écrite', 'écrits'],
    correctAnswer: 'écrites',
    solutionProof: 'Avec l’auxiliaire AVOIR, le COD ("les lettres", féminin pluriel) est placé AVANT le verbe. On accorde donc avec "les lettres" ⟶ "écrites".',
    difficulty: 'avancé'
  },
  {
    id: 'q7',
    type: 'equation_completion',
    title: 'Radical de l’Imparfait pour FAIRE',
    equation: 'Radical = "Nous faisons" − "ons" = ?',
    questionText: 'Quel est le radical pour conjuguer le verbe FAIRE à l’imparfait ?',
    options: ['fais-', 'fai-', 'fer-', 'fass-'],
    correctAnswer: 'fais-',
    solutionProof: '"Nous faisons" − "ons" = "fais-". L’imparfait donne : je faisais, tu faisais, il faisait, nous faisions, vous faisiez, ils faisaient.',
    difficulty: 'facile'
  },
  {
    id: 'q8',
    type: 'tense_derivation',
    title: 'Différence Futur vs Conditionnel (Je)',
    equation: 'Futur : J’aimerai  vs  Conditionnel : J’aimerais',
    questionText: 'Quelle est la différence de terminaison entre "J’aimerai" (Futur) et "J’aimerais" (Conditionnel) ?',
    options: [
      'Futur = -ai (verbe Avoir) | Conditionnel = -ais (Imparfait)',
      'Futur = -ais | Conditionnel = -ai',
      'Futur = -as | Conditionnel = -ait',
      'Il n’y a aucune différence'
    ],
    correctAnswer: 'Futur = -ai (verbe Avoir) | Conditionnel = -ais (Imparfait)',
    solutionProof: 'Le futur utilise la terminaison de AVOIR ("j’ai" ⟶ "-ai") : j’aimerai. Le conditionnel utilise la terminaison de l’imparfait ("-ais") : j’aimerais.',
    difficulty: 'moyen'
  }
];
