import { VerbConjugationData, TenseKey, Pronoun, MathStep, VerbGroup } from '../types/conjugation';
import { VERBS_DATABASE } from '../data/verbsDatabase';
import { TENSES_INFO } from '../data/tensesInfo';

export interface SolvedConjugation {
  verb: VerbConjugationData;
  tense: TenseKey;
  tenseInfo: typeof TENSES_INFO[TenseKey];
  pronoun: Pronoun;
  conjugatedForm: string;
  pronounLabel: string;
  stemUsed: string;
  endingUsed: string;
  fullTable: Record<Pronoun, {
    pronounLabel: string;
    stem: string;
    ending: string;
    fullWord: string;
  }>;
  steps: MathStep[];
}

export const PRONOUNS: { key: Pronoun; label: string; plural: boolean; person: number }[] = [
  { key: 'je', label: 'Je', plural: false, person: 1 },
  { key: 'tu', label: 'Tu', plural: false, person: 2 },
  { key: 'il', label: 'Il / Elle / On', plural: false, person: 3 },
  { key: 'nous', label: 'Nous', plural: true, person: 1 },
  { key: 'vous', label: 'Vous', plural: true, person: 2 },
  { key: 'ils', label: 'Ils / Elles', plural: true, person: 3 }
];

export function findVerb(query: string): VerbConjugationData | null {
  const normalized = query.trim().toLowerCase();
  const directMatch = VERBS_DATABASE.find(v => v.infinitive.toLowerCase() === normalized);
  if (directMatch) return directMatch;

  // Fallback heuristic for arbitrary -er or -ir verbs entered by the student
  if (normalized.endsWith('er') && normalized !== 'aller') {
    return generateRegularG1Verb(normalized);
  }
  if (normalized.endsWith('ir')) {
    return generateRegularG2Verb(normalized);
  }

  return null;
}

function generateRegularG1Verb(infinitive: string): VerbConjugationData {
  const stem = infinitive.slice(0, -2);
  const isVowelStart = /^[aeiouyhéèêëàâîïôûù]/i.test(infinitive);
  return {
    infinitive,
    meaningFr: 'Verbe régulier du 1er groupe généré par algorithme',
    group: 'G1',
    auxiliary: 'avoir',
    pastParticiple: stem + 'é',
    regular: true,
    stems: {
      base: stem,
      nousPresent: stem,
      ilsPresent: stem,
      futureStem: infinitive,
      passeSimpleStem: stem
    },
    conjugations: {
      present: {
        je: stem + 'e',
        tu: stem + 'es',
        il: stem + 'e',
        nous: stem + 'ons',
        vous: stem + 'ez',
        ils: stem + 'ent'
      },
      imparfait: {
        je: stem + 'ais',
        tu: stem + 'ais',
        il: stem + 'ait',
        nous: stem + 'ions',
        vous: stem + 'iez',
        ils: stem + 'aient'
      },
      futur_simple: {
        je: infinitive + 'ai',
        tu: infinitive + 'as',
        il: infinitive + 'a',
        nous: infinitive + 'ons',
        vous: infinitive + 'ez',
        ils: infinitive + 'ont'
      },
      conditionnel_present: {
        je: infinitive + 'ais',
        tu: infinitive + 'ais',
        il: infinitive + 'ait',
        nous: infinitive + 'ions',
        vous: infinitive + 'iez',
        ils: infinitive + 'aient'
      },
      passe_compose: {
        je: (isVowelStart ? "ai " : "ai ") + stem + 'é',
        tu: 'as ' + stem + 'é',
        il: 'a ' + stem + 'é',
        nous: 'avons ' + stem + 'é',
        vous: 'avez ' + stem + 'é',
        ils: 'ont ' + stem + 'é'
      },
      plus_que_parfait: {
        je: 'avais ' + stem + 'é',
        tu: 'avais ' + stem + 'é',
        il: 'avait ' + stem + 'é',
        nous: 'avions ' + stem + 'é',
        vous: 'aviez ' + stem + 'é',
        ils: 'avaient ' + stem + 'é'
      },
      subjonctif_present: {
        je: stem + 'e',
        tu: stem + 'es',
        il: stem + 'e',
        nous: stem + 'ions',
        vous: stem + 'iez',
        ils: stem + 'ent'
      },
      passe_simple: {
        je: stem + 'ai',
        tu: stem + 'as',
        il: stem + 'a',
        nous: stem + 'âmes',
        vous: stem + 'âtes',
        ils: stem + 'èrent'
      },
      imperatif_present: {
        tu: stem + 'e',
        nous: stem + 'ons',
        vous: stem + 'ez'
      }
    },
    mathematicalNotes: [
      `Algorithme G1 appliqué : R = "${infinitive}" - "er" = "${stem}".`,
      `Futur calculé par addition canonique : "${infinitive}" + terminaisons d'Avoir.`,
      `Imparfait dérivé via le théorème de Nous : "${stem}ons" - "ons" = "${stem}".`
    ]
  };
}

function generateRegularG2Verb(infinitive: string): VerbConjugationData {
  const stem = infinitive.slice(0, -2);
  return {
    infinitive,
    meaningFr: 'Verbe régulier du 2ème groupe généré par algorithme',
    group: 'G2',
    auxiliary: 'avoir',
    pastParticiple: stem + 'i',
    regular: true,
    stems: {
      base: stem,
      nousPresent: stem + 'iss',
      ilsPresent: stem + 'iss',
      futureStem: infinitive,
      passeSimpleStem: stem
    },
    conjugations: {
      present: {
        je: stem + 'is',
        tu: stem + 'is',
        il: stem + 'it',
        nous: stem + 'issons',
        vous: stem + 'issez',
        ils: stem + 'issent'
      },
      imparfait: {
        je: stem + 'issais',
        tu: stem + 'issais',
        il: stem + 'issait',
        nous: stem + 'issions',
        vous: stem + 'issiez',
        ils: stem + 'issaient'
      },
      futur_simple: {
        je: infinitive + 'ai',
        tu: infinitive + 'as',
        il: infinitive + 'a',
        nous: infinitive + 'ons',
        vous: infinitive + 'ez',
        ils: infinitive + 'ont'
      },
      conditionnel_present: {
        je: infinitive + 'ais',
        tu: infinitive + 'ais',
        il: infinitive + 'ait',
        nous: infinitive + 'ions',
        vous: infinitive + 'iez',
        ils: infinitive + 'aient'
      },
      passe_compose: {
        je: 'ai ' + stem + 'i',
        tu: 'as ' + stem + 'i',
        il: 'a ' + stem + 'i',
        nous: 'avons ' + stem + 'i',
        vous: 'avez ' + stem + 'i',
        ils: 'ont ' + stem + 'i'
      },
      plus_que_parfait: {
        je: 'avais ' + stem + 'i',
        tu: 'avais ' + stem + 'i',
        il: 'avait ' + stem + 'i',
        nous: 'avions ' + stem + 'i',
        vous: 'aviez ' + stem + 'i',
        ils: 'avaient ' + stem + 'i'
      },
      subjonctif_present: {
        je: stem + 'isse',
        tu: stem + 'isses',
        il: stem + 'isse',
        nous: stem + 'issions',
        vous: stem + 'issiez',
        ils: stem + 'issent'
      },
      passe_simple: {
        je: stem + 'is',
        tu: stem + 'is',
        il: stem + 'it',
        nous: stem + 'îmes',
        vous: stem + 'îtes',
        ils: stem + 'irent'
      },
      imperatif_present: {
        tu: stem + 'is',
        nous: stem + 'issons',
        vous: stem + 'issez'
      }
    },
    mathematicalNotes: [
      `Algorithme G2 appliqué avec infixe matriciel [-iss-] : R = "${stem}".`,
      `Théorème de l’imparfait vérifié : "${stem}issons" - "ons" = "${stem}iss".`
    ]
  };
}

export function solveConjugation(
  verb: VerbConjugationData,
  tense: TenseKey,
  selectedPronoun: Pronoun = 'je'
): SolvedConjugation {
  const tenseInfo = TENSES_INFO[tense];
  const tenseMap = verb.conjugations[tense] || {};
  const isVowelStart = /^[aeiouyhéèêëàâîïôûù]/i.test(verb.infinitive);

  const fullTable = {} as SolvedConjugation['fullTable'];

  PRONOUNS.forEach(p => {
    const rawVal = tenseMap[p.key] || '';
    let pronLabel = p.label;

    if (p.key === 'je' && (isVowelStart || rawVal.startsWith('ai ') || rawVal.startsWith('avais '))) {
      if (tense === 'subjonctif_present') {
        pronLabel = "qu'il / qu'elle";
      } else {
        pronLabel = "J'";
      }
    }

    if (tense === 'subjonctif_present') {
      if (p.key === 'je') pronLabel = isVowelStart ? "qu'je" : "que je";
      if (p.key === 'tu') pronLabel = "que tu";
      if (p.key === 'il') pronLabel = "qu'il";
      if (p.key === 'nous') pronLabel = "que nous";
      if (p.key === 'vous') pronLabel = "que vous";
      if (p.key === 'ils') pronLabel = "qu'ils";
    }

    // Split into stem & ending for visual math representation
    let stem = '';
    let ending = '';

    if (tense === 'passe_compose' || tense === 'plus_que_parfait') {
      const parts = rawVal.split(' ');
      stem = parts.slice(0, -1).join(' ') + ' ';
      ending = parts[parts.length - 1] || '';
    } else if (tense === 'futur_simple' || tense === 'conditionnel_present') {
      stem = verb.stems.futureStem;
      ending = rawVal.slice(stem.length);
    } else if (tense === 'imparfait') {
      if (verb.infinitive === 'être') {
        stem = 'ét';
        ending = rawVal.slice(2);
      } else {
        stem = verb.stems.nousPresent;
        ending = rawVal.slice(stem.length);
      }
    } else {
      stem = verb.stems.base;
      ending = rawVal.startsWith(stem) ? rawVal.slice(stem.length) : rawVal;
    }

    fullTable[p.key] = {
      pronounLabel: pronLabel,
      stem: stem,
      ending: ending,
      fullWord: rawVal
    };
  });

  // Build the 5-step simple logical proof
  const steps: MathStep[] = [
    {
      stepNumber: 1,
      title: 'Groupe du verbe',
      mathNotation: verb.group === 'G1' ? '1er Groupe (-er)' : verb.group === 'G2' ? '2ème Groupe (-ir)' : '3ème Groupe',
      explanation: `Le verbe "${verb.infinitive}" fait partie du ${
        verb.group === 'G1' ? '1er groupe (verbe régulier terminé par -er).' :
        verb.group === 'G2' ? '2ème groupe (verbe en -ir qui fait -issons avec nous).' :
        '3ème groupe (verbe irrégulier ou à plusieurs bases).'
      }`
    },
    {
      stepNumber: 2,
      title: 'Trouver le Radical (la base)',
      mathNotation: getStemFormulaNotation(verb, tense),
      explanation: getStemExplanation(verb, tense)
    },
    {
      stepNumber: 3,
      title: 'Ajouter la Terminaison',
      mathNotation: `Terminaison = "${fullTable[selectedPronoun].ending}"`,
      explanation: `Pour le pronom "${selectedPronoun}", la terminaison exacte à ce temps est "${fullTable[selectedPronoun].ending}".`
    },
    {
      stepNumber: 4,
      title: 'Assembler : Radical + Terminaison',
      mathNotation: `"${fullTable[selectedPronoun].stem}" + "${fullTable[selectedPronoun].ending}" = "${fullTable[selectedPronoun].fullWord}"`,
      explanation: `On associe simplement le radical et la terminaison trouvés.`
    },
    {
      stepNumber: 5,
      title: 'Vérification phonétique (Élision)',
      mathNotation: isVowelStart && selectedPronoun === 'je' ? "Je + Voyelle = J'" : 'Prononciation directe (pas d’élision)',
      explanation: isVowelStart && selectedPronoun === 'je'
        ? `Le radical commence par la voyelle "${verb.infinitive[0]}". On remplace "Je" par "J'".`
        : `Aucune voyelle ne se heurte. La forme obtenue est validée.`
    }
  ];

  return {
    verb,
    tense,
    tenseInfo,
    pronoun: selectedPronoun,
    conjugatedForm: fullTable[selectedPronoun].fullWord,
    pronounLabel: fullTable[selectedPronoun].pronounLabel,
    stemUsed: fullTable[selectedPronoun].stem,
    endingUsed: fullTable[selectedPronoun].ending,
    fullTable,
    steps
  };
}

function getStemFormulaNotation(verb: VerbConjugationData, tense: TenseKey): string {
  switch (tense) {
    case 'imparfait':
      if (verb.infinitive === 'être') return 'Radical spécial = "ét-"';
      return `Radical = "Nous ${verb.conjugations.present.nous}" − "ons" = "${verb.stems.nousPresent}-"`;
    case 'futur_simple':
    case 'conditionnel_present':
      return `Radical du futur = "${verb.stems.futureStem}-"`;
    case 'subjonctif_present':
      return `Radical "Ils" = "${verb.stems.ilsPresent || verb.stems.base}-" | Radical "Nous" = "${verb.stems.nousPresent}-"`;
    case 'passe_compose':
    case 'plus_que_parfait':
      return `Auxiliaire = ${verb.auxiliary.toUpperCase()} + Participe = "${verb.pastParticiple}"`;
    default:
      return `Radical = "${verb.stems.base}-"`;
  }
}

function getStemExplanation(verb: VerbConjugationData, tense: TenseKey): string {
  switch (tense) {
    case 'imparfait':
      if (verb.infinitive === 'être') {
        return 'Le verbe ÊTRE est la seule exception pour le radical de l’imparfait ("ét-").';
      }
      return `Règle de l’imparfait : au présent avec Nous, on dit "Nous ${verb.conjugations.present.nous}". En enlevant "ons", on trouve le radical "${verb.stems.nousPresent}-".`;
    case 'futur_simple':
      return `Le radical du futur est "${verb.stems.futureStem}-". On lui ajoute les terminaisons de Avoir (-ai, -as, -a, -ons, -ez, -ont).`;
    case 'conditionnel_present':
      return `Règle du conditionnel : on prend le radical du futur "${verb.stems.futureStem}-" et on ajoute les terminaisons de l’imparfait (-ais, -ais, -ait, -ions, -iez, -aient).`;
    case 'passe_compose':
      return `On utilise l’auxiliaire ${verb.auxiliary.toUpperCase()} au présent + le participe passé "${verb.pastParticiple}".`;
    case 'plus_que_parfait':
      return `On utilise l’auxiliaire ${verb.auxiliary.toUpperCase()} à l’imparfait + le participe passé "${verb.pastParticiple}".`;
    case 'subjonctif_present':
      return `Pour je, tu, il, ils : radical de "Ils" ("${verb.stems.ilsPresent || verb.stems.base}-"). Pour nous et vous : radical de "Nous" ("${verb.stems.nousPresent}-").`;
    default:
      return `Le radical de base pour "${verb.infinitive}" est "${verb.stems.base}-".`;
  }
}

// Pronunciation with SpeechSynthesis API
export function speakFrench(text: string) {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
  try {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'fr-FR';
    utterance.rate = 0.9;
    window.speechSynthesis.speak(utterance);
  } catch (e) {
    console.error('Speech error:', e);
  }
}
