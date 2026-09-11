export type VerbGroup = 'G1' | 'G2' | 'G3';

export type Pronoun = 'je' | 'tu' | 'il' | 'nous' | 'vous' | 'ils';

export type TenseKey = 
  | 'present'
  | 'imparfait'
  | 'futur_simple'
  | 'conditionnel_present'
  | 'passe_compose'
  | 'plus_que_parfait'
  | 'subjonctif_present'
  | 'passe_simple'
  | 'imperatif_present';

export interface TenseInfo {
  key: TenseKey;
  label: string;
  category: 'simple' | 'compose' | 'subjonctif' | 'imperatif';
  mathFormula: string;
  formulaDescription: string;
  principle: string;
}

export interface VerbConjugationData {
  infinitive: string;
  translationDarija?: string;
  meaningFr: string;
  group: VerbGroup;
  auxiliary: 'avoir' | 'être';
  pastParticiple: string;
  regular: boolean;
  stems: {
    base: string;           // Infinitif - suffixe
    nousPresent: string;    // Radical extrait de Nous au présent (pour Imparfait)
    ilsPresent?: string;    // Radical extrait de Ils au présent (pour Subjonctif)
    futureStem: string;     // Radical pour le Futur & Conditionnel
    passeSimpleStem?: string; // Radical pour le Passé Simple
  };
  conjugations: Record<TenseKey, Record<Pronoun, string> | Partial<Record<Pronoun, string>>>;
  mathematicalNotes: string[];
}

export interface MathStep {
  stepNumber: number;
  title: string;
  mathNotation: string;
  explanation: string;
  highlight?: string;
}

export interface QuizQuestion {
  id: string;
  type: 'radical_extraction' | 'equation_completion' | 'tense_derivation' | 'boolean_agreement';
  title: string;
  equation: string;
  questionText: string;
  options: string[];
  correctAnswer: string;
  solutionProof: string;
  difficulty: 'facile' | 'moyen' | 'avancé';
}
