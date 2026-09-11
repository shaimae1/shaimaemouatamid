import React, { useState, useMemo } from 'react';
import { Search, Volume2, Sparkles, CheckCircle2, ChevronDown, ChevronUp, Layers, HelpCircle, ArrowRight } from 'lucide-react';
import { VERBS_DATABASE } from '../data/verbsDatabase';
import { TENSES_INFO } from '../data/tensesInfo';
import { TenseKey, Pronoun } from '../types/conjugation';
import { solveConjugation, PRONOUNS, findVerb, speakFrench } from '../utils/conjugationEngine';

export const ConjugationSolver: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('prendre');
  const [selectedTense, setSelectedTense] = useState<TenseKey>('imparfait');
  const [selectedPronoun, setSelectedPronoun] = useState<Pronoun>('nous');
  const [showFullProof, setShowFullProof] = useState(true);

  // Quick verbs chips
  const quickVerbs = [
    { label: 'Parler', group: 'G1', verb: 'parler' },
    { label: 'Finir', group: 'G2', verb: 'finir' },
    { label: 'Être', group: 'G3', verb: 'être' },
    { label: 'Avoir', group: 'G3', verb: 'avoir' },
    { label: 'Aller', group: 'G3', verb: 'aller' },
    { label: 'Faire', group: 'G3', verb: 'faire' },
    { label: 'Prendre', group: 'G3', verb: 'prendre' },
    { label: 'Pouvoir', group: 'G3', verb: 'pouvoir' },
    { label: 'Vouloir', group: 'G3', verb: 'vouloir' },
    { label: 'Venir', group: 'G3', verb: 'venir' }
  ];

  const currentVerb = useMemo(() => {
    return findVerb(searchQuery) || VERBS_DATABASE[6]; // default to 'prendre'
  }, [searchQuery]);

  const solved = useMemo(() => {
    return solveConjugation(currentVerb, selectedTense, selectedPronoun);
  }, [currentVerb, selectedTense, selectedPronoun]);

  const tensesList = Object.values(TENSES_INFO);

  return (
    <div className="space-y-8">
      {/* Intro Hero Header */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-950/60 via-slate-900 to-slate-950 p-6 sm:p-8 border border-indigo-900/40 shadow-xl">
        <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none hidden md:block">
          <span className="font-mono-math text-8xl font-black text-indigo-400">V = R ⊕ T</span>
        </div>
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 mb-3">
            <span>🧮 Solveur Algorithmique de Conjugaison</span>
            <span>•</span>
            <span className="text-emerald-400">Pédagogie Mouatamid Chaima</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            La conjugaison n’est pas de la mémoire, c’est une équation.
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-300 leading-relaxed">
            Tapez n’importe quel verbe, choisissez un temps et un pronom : notre algorithme calcule le radical exact,
            applique le vecteur des terminaisons et démontre la preuve étape par étape.
          </p>

          {/* Quick Select Verbs */}
          <div className="mt-5 flex flex-wrap items-center gap-2">
            <span className="text-xs font-medium text-slate-400 mr-1">Verbes fréquents :</span>
            {quickVerbs.map(item => (
              <button
                key={item.verb}
                onClick={() => setSearchQuery(item.verb)}
                className={`px-2.5 py-1 rounded-lg text-xs font-medium transition cursor-pointer flex items-center gap-1.5 ${
                  currentVerb.infinitive.toLowerCase() === item.verb.toLowerCase()
                    ? 'bg-indigo-600 text-white font-semibold shadow-md shadow-indigo-600/30'
                    : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700/60'
                }`}
              >
                <span>{item.label}</span>
                <span className={`text-[10px] px-1 rounded ${
                  item.group === 'G1' ? 'bg-emerald-950 text-emerald-300' :
                  item.group === 'G2' ? 'bg-blue-950 text-blue-300' : 'bg-purple-950 text-purple-300'
                }`}>
                  {item.group}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Control Panel: Search & Selectors */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* Search input */}
        <div className="bg-slate-900/90 rounded-xl p-4 border border-slate-800 shadow-md">
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
            1. Verbe à l’infinitif
          </label>
          <div className="relative">
            <Search className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Ex: chanter, finir, aller, prendre, boire..."
              className="w-full pl-9 pr-4 py-2.5 bg-slate-950 border border-slate-700 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            />
          </div>
          {currentVerb && (
            <div className="mt-3 flex items-center justify-between text-xs pt-2 border-t border-slate-800/80">
              <span className="text-slate-400">
                Groupe : <strong className="text-emerald-400">{currentVerb.group}</strong>
                {currentVerb.translationDarija && (
                  <span className="ml-2 text-indigo-300">({currentVerb.translationDarija})</span>
                )}
              </span>
              <span className="text-slate-400">
                Auxiliaire : <strong className="text-indigo-400">{currentVerb.auxiliary.toUpperCase()}</strong>
              </span>
            </div>
          )}
        </div>

        {/* Tense selector */}
        <div className="bg-slate-900/90 rounded-xl p-4 border border-slate-800 shadow-md">
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
            2. Temps / Mode
          </label>
          <select
            value={selectedTense}
            onChange={(e) => setSelectedTense(e.target.value as TenseKey)}
            className="w-full py-2.5 px-3 bg-slate-950 border border-slate-700 rounded-lg text-sm text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
          >
            <optgroup label="Temps simples de l’indicatif">
              <option value="present">Présent de l’Indicatif</option>
              <option value="imparfait">Imparfait</option>
              <option value="futur_simple">Futur Simple</option>
              <option value="conditionnel_present">Conditionnel Présent</option>
              <option value="passe_simple">Passé Simple</option>
            </optgroup>
            <optgroup label="Temps composés">
              <option value="passe_compose">Passé Composé</option>
              <option value="plus_que_parfait">Plus-que-parfait</option>
            </optgroup>
            <optgroup label="Mode subjonctif">
              <option value="subjonctif_present">Subjonctif Présent</option>
            </optgroup>
            <optgroup label="Mode impératif">
              <option value="imperatif_present">Impératif Présent</option>
            </optgroup>
          </select>
          <div className="mt-2 text-xs text-slate-400 truncate">
            Règle : <span className="text-emerald-300 font-mono-math">{solved.tenseInfo.mathFormula}</span>
          </div>
        </div>

        {/* Pronoun selector */}
        <div className="bg-slate-900/90 rounded-xl p-4 border border-slate-800 shadow-md">
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
            3. Personne (Pronom Sujet)
          </label>
          <div className="grid grid-cols-3 gap-1.5">
            {PRONOUNS.map(p => (
              <button
                key={p.key}
                onClick={() => setSelectedPronoun(p.key)}
                className={`py-2 px-2 rounded-lg text-xs font-medium text-center transition cursor-pointer ${
                  selectedPronoun === p.key
                    ? 'bg-indigo-600 text-white shadow-sm font-semibold'
                    : 'bg-slate-950 text-slate-300 hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Formula Calculation Card (The Visual Equation) */}
      <div className="rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-indigo-500/30 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
        <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
              Résultat de l’Équation Mathématique
            </h3>
          </div>
          <button
            onClick={() => speakFrench(`${solved.pronounLabel} ${solved.conjugatedForm}`)}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-indigo-600/20 text-indigo-300 hover:bg-indigo-600/30 border border-indigo-500/30 text-xs font-medium transition cursor-pointer"
            title="Écouter la prononciation"
          >
            <Volume2 className="w-4 h-4" />
            <span>Écouter la voix</span>
          </button>
        </div>

        {/* Equation Display (Simple logical decomposition) */}
        <div className="flex flex-col items-center justify-center py-6 px-4 bg-slate-950/80 rounded-xl border border-slate-800/80 text-center">
          <div className="text-xs uppercase tracking-widest text-emerald-400 font-semibold mb-4">
            Règle : Verbe = Radical + Terminaison
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-lg sm:text-2xl lg:text-3xl font-bold">
            {/* Pronom */}
            <div className="flex flex-col items-center">
              <span className="px-3 py-1.5 rounded-lg bg-amber-500/15 text-amber-300 border border-amber-500/30 font-mono-math">
                {solved.pronounLabel}
              </span>
              <span className="text-[10px] text-amber-400/80 mt-1 uppercase tracking-wider font-semibold">Pronom</span>
            </div>

            <span className="text-slate-500 font-mono-math">+</span>

            {/* Radical */}
            <div className="flex flex-col items-center">
              <span className="px-3 py-1.5 rounded-lg bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 font-mono-math">
                {solved.stemUsed || '∅'}
              </span>
              <span className="text-[10px] text-cyan-400/80 mt-1 uppercase tracking-wider font-semibold">Radical (Base)</span>
            </div>

            <span className="text-slate-500 font-mono-math">+</span>

            {/* Terminaison */}
            <div className="flex flex-col items-center">
              <span className="px-3 py-1.5 rounded-lg bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 font-mono-math">
                {solved.endingUsed || '∅'}
              </span>
              <span className="text-[10px] text-emerald-400/80 mt-1 uppercase tracking-wider font-semibold">Terminaison</span>
            </div>

            <span className="text-slate-400 font-mono-math font-extrabold text-2xl sm:text-3xl">=</span>

            {/* Forme Conjuguée Finale */}
            <div className="flex flex-col items-center">
              <span className="px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-500 text-white font-black shadow-lg shadow-indigo-500/30 tracking-wide font-mono-math">
                {solved.pronounLabel} {solved.conjugatedForm}
              </span>
              <span className="text-[10px] text-indigo-300 mt-1 uppercase tracking-wider font-bold">Verbe Conjugué</span>
            </div>
          </div>

          <div className="mt-6 text-xs text-slate-300 max-w-xl text-center leading-relaxed">
            {solved.tenseInfo.formulaDescription}
          </div>
        </div>

        {/* 5-Step Proof (Collapsible) */}
        <div className="mt-6">
          <button
            onClick={() => setShowFullProof(!showFullProof)}
            className="w-full flex items-center justify-between p-3.5 bg-slate-900/60 hover:bg-slate-900 rounded-xl border border-slate-800 transition cursor-pointer text-left"
          >
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-indigo-400" />
              <span className="text-sm font-semibold text-slate-200">
                Explication pas à pas en 5 étapes simples
              </span>
            </div>
            {showFullProof ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
          </button>

          {showFullProof && (
            <div className="mt-3 space-y-3 pt-2">
              {solved.steps.map((step) => (
                <div
                  key={step.stepNumber}
                  className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80 flex flex-col sm:flex-row sm:items-start gap-3"
                >
                  <div className="flex-shrink-0 w-7 h-7 rounded-lg bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 flex items-center justify-center font-mono-math font-bold text-xs">
                    {step.stepNumber}
                  </div>
                  <div className="flex-grow space-y-1">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
                        {step.title}
                      </h4>
                      <code className="text-xs font-mono-math text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-800/40">
                        {step.mathNotation}
                      </code>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {step.explanation}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Complete 6-Person Conjugation Matrix for This Verb and Tense */}
      <div className="rounded-2xl bg-slate-900/90 border border-slate-800 p-6 shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-4 mb-5">
          <div>
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <span className="font-mono-math text-indigo-400">M(6,1)</span>
              Matrice Complète des 6 Personnes — {solved.tenseInfo.label}
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              Observez la stabilité du radical <span className="text-cyan-400 font-semibold">(Cyan)</span> face aux variations du vecteur de terminaison <span className="text-emerald-400 font-semibold">(Émeraude)</span>.
            </p>
          </div>
          <span className="text-xs font-medium text-slate-400 self-start sm:self-auto bg-slate-800 px-2.5 py-1 rounded-md">
            Verbe : <strong className="text-white">{currentVerb.infinitive}</strong>
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {PRONOUNS.map(p => {
            const item = solved.fullTable[p.key];
            const isSelected = selectedPronoun === p.key;
            return (
              <div
                key={p.key}
                onClick={() => setSelectedPronoun(p.key)}
                className={`p-3.5 rounded-xl border transition cursor-pointer flex items-center justify-between ${
                  isSelected
                    ? 'bg-indigo-950/50 border-indigo-500 shadow-md shadow-indigo-900/20'
                    : 'bg-slate-950/60 border-slate-800/80 hover:bg-slate-800/40 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="text-xs text-amber-300/90 font-mono-math font-medium w-16">
                    {item.pronounLabel}
                  </span>
                  <div className="font-mono-math text-sm">
                    <span className="text-cyan-400 font-medium">{item.stem}</span>
                    <span className="text-emerald-400 font-bold underline decoration-emerald-500/40">{item.ending}</span>
                  </div>
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    speakFrench(`${item.pronounLabel} ${item.fullWord}`);
                  }}
                  className="text-slate-500 hover:text-indigo-400 p-1 rounded transition"
                  title="Prononcer"
                >
                  <Volume2 className="w-3.5 h-3.5" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Pedagogical Notes Box */}
        {currentVerb.mathematicalNotes.length > 0 && (
          <div className="mt-5 p-4 rounded-xl bg-indigo-950/30 border border-indigo-900/40">
            <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-300 flex items-center gap-1.5 mb-2">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              Notes Algorithmiques du Verbe {currentVerb.infinitive.toUpperCase()}
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-300">
              {currentVerb.mathematicalNotes.map((note, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-0.5">•</span>
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
