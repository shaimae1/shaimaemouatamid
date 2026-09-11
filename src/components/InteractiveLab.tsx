import React, { useState } from 'react';
import { FlaskConical, Sparkles, ArrowRight, RefreshCw, Equal, Plus } from 'lucide-react';
import { VERBS_DATABASE } from '../data/verbsDatabase';
import { speakFrench } from '../utils/conjugationEngine';

export const InteractiveLab: React.FC = () => {
  // Experiment mode 1: Radical + Ending Mixer
  const [selectedVerbIdx, setSelectedVerbIdx] = useState(0);
  const [activeExperiment, setActiveExperiment] = useState<'imparfait_extractor' | 'hybrid_derivation' | 'custom_mixer'>('imparfait_extractor');

  // For custom mixer
  const [customStem, setCustomStem] = useState('chant');
  const [customEnding, setCustomEnding] = useState('erons');
  const [pronounPrefix, setPronounPrefix] = useState('Nous');

  // Sample verbs for experimentation
  const sampleVerbs = VERBS_DATABASE.slice(0, 8);
  const currentVerb = sampleVerbs[selectedVerbIdx] || sampleVerbs[0];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="rounded-2xl bg-gradient-to-r from-slate-900 via-purple-950/40 to-slate-900 border border-purple-500/20 p-6 sm:p-8 shadow-xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/15 text-purple-300 border border-purple-500/30 mb-3">
          <FlaskConical className="w-3.5 h-3.5" />
          <span>Atelier Pratique Interactif</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
          Manipulez les briques du verbe en direct
        </h2>
        <p className="mt-2 text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
          Testez vous-même les règles : séparez le radical, ajoutez la terminaison et visualisez le verbe conjugué instantanément.
        </p>
      </div>

      {/* Mode Selector Tabs */}
      <div className="flex flex-wrap gap-2 p-1.5 bg-slate-900 rounded-xl border border-slate-800">
        <button
          onClick={() => setActiveExperiment('imparfait_extractor')}
          className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition cursor-pointer ${
            activeExperiment === 'imparfait_extractor'
              ? 'bg-indigo-600 text-white shadow-md'
              : 'text-slate-400 hover:text-white hover:bg-slate-800'
          }`}
        >
          1. Trouver le Radical de l’Imparfait (Nous − ons)
        </button>
        <button
          onClick={() => setActiveExperiment('hybrid_derivation')}
          className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition cursor-pointer ${
            activeExperiment === 'hybrid_derivation'
              ? 'bg-indigo-600 text-white shadow-md'
              : 'text-slate-400 hover:text-white hover:bg-slate-800'
          }`}
        >
          2. Du Futur au Conditionnel
        </button>
        <button
          onClick={() => setActiveExperiment('custom_mixer')}
          className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition cursor-pointer ${
            activeExperiment === 'custom_mixer'
              ? 'bg-indigo-600 text-white shadow-md'
              : 'text-slate-400 hover:text-white hover:bg-slate-800'
          }`}
        >
          3. Atelier Libre (Radical + Terminaison)
        </button>
      </div>

      {/* EXPERIMENT 1: IMPARFAIT EXTRACTOR */}
      {activeExperiment === 'imparfait_extractor' && (
        <div className="rounded-2xl bg-slate-900/90 border border-slate-800 p-6 sm:p-8 shadow-xl space-y-6">
          <div>
            <span className="text-xs uppercase tracking-wider text-emerald-400 font-bold">
              Atelier #1 • La Règle de Nous
            </span>
            <h3 className="text-xl font-extrabold text-white mt-1">
              Règle : Radical = Forme de "Nous" au présent − "ons"
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Choisissez un verbe et observez comment enlever "ons" donne le radical parfait de l’imparfait.
            </p>
          </div>

          {/* Verb Selector Chips */}
          <div className="flex flex-wrap gap-2">
            {sampleVerbs.map((v, i) => (
              <button
                key={v.infinitive}
                onClick={() => setSelectedVerbIdx(i)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition cursor-pointer ${
                  selectedVerbIdx === i
                    ? 'bg-indigo-600 text-white font-bold'
                    : 'bg-slate-950 text-slate-300 border border-slate-800 hover:border-slate-700'
                }`}
              >
                {v.infinitive}
              </button>
            ))}
          </div>

          {/* Visual Subtraction & Addition Mechanism */}
          <div className="p-6 bg-slate-950 rounded-2xl border border-indigo-500/30 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              {/* Step A: Forme de Nous au Présent */}
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                <span className="text-[11px] uppercase font-semibold text-slate-400">Étape 1 : Forme avec Nous</span>
                <div className="text-xl font-bold font-mono-math text-white">
                  Nous {currentVerb.conjugations.present.nous}
                </div>
                <div className="text-[11px] text-indigo-300">Au présent</div>
              </div>

              {/* Step B: Soustraction */}
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                <span className="text-[11px] uppercase font-semibold text-amber-400">Étape 2 : On enlève "-ons"</span>
                <div className="text-xl font-bold font-mono-math text-amber-300">
                  "{currentVerb.conjugations.present.nous}" − "ons"
                </div>
                <div className="text-xs font-bold text-emerald-400 font-mono-math">
                  ⟹ Radical = "{currentVerb.stems.nousPresent}"
                </div>
              </div>

              {/* Step C: Terminaison Imparfait */}
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                <span className="text-[11px] uppercase font-semibold text-emerald-400">Étape 3 : On ajoute la terminaison</span>
                <div className="text-xl font-bold font-mono-math text-emerald-400">
                  {currentVerb.stems.nousPresent} + ais
                </div>
                <div className="text-xs text-white font-bold font-mono-math">
                  = {currentVerb.conjugations.imparfait.je}
                </div>
              </div>
            </div>

            {/* Generated Full Imparfait List */}
            <div className="mt-4 pt-4 border-t border-slate-800">
              <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold block mb-2">
                Conjugaison complète à l’Imparfait :
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 font-mono-math text-xs">
                {['je', 'tu', 'il', 'nous', 'vous', 'ils'].map(pr => (
                  <div key={pr} className="p-2 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-between">
                    <span className="text-slate-400">{pr}</span>
                    <span className="font-bold text-slate-100">
                      {(currentVerb.conjugations.imparfait as any)[pr]}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* EXPERIMENT 2: HYBRID DERIVATION (Futur ⟹ Conditionnel) */}
      {activeExperiment === 'hybrid_derivation' && (
        <div className="rounded-2xl bg-slate-900/90 border border-slate-800 p-6 sm:p-8 shadow-xl space-y-6">
          <div>
            <span className="text-xs uppercase tracking-wider text-indigo-400 font-bold">
              Atelier #2 • Même Radical, Deux Temps
            </span>
            <h3 className="text-xl font-extrabold text-white mt-1">
              Futur Simple vs Conditionnel Présent : Une même base, deux terminaisons
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Regardez comment le conditionnel réutilise exactement le radical du futur avec les terminaisons de l’imparfait.
            </p>
          </div>

          {/* Verb Selector Chips */}
          <div className="flex flex-wrap gap-2">
            {sampleVerbs.map((v, i) => (
              <button
                key={v.infinitive}
                onClick={() => setSelectedVerbIdx(i)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition cursor-pointer ${
                  selectedVerbIdx === i
                    ? 'bg-indigo-600 text-white font-bold'
                    : 'bg-slate-950 text-slate-300 border border-slate-800 hover:border-slate-700'
                }`}
              >
                {v.infinitive}
              </button>
            ))}
          </div>

          <div className="p-6 bg-slate-950 rounded-2xl border border-indigo-500/30 space-y-6">
            <div className="flex items-center justify-center">
              <div className="px-4 py-2 rounded-xl bg-cyan-950/60 border border-cyan-500/40 text-cyan-300 font-mono-math text-base sm:text-lg font-bold">
                Radical Commun = "{currentVerb.stems.futureStem}"
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Futur Column */}
              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-3">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <span className="text-xs font-bold uppercase text-emerald-400">Futur Simple</span>
                  <span className="text-[11px] font-mono-math text-slate-400">Radical + Terminaisons de AVOIR</span>
                </div>
                <div className="space-y-1.5 font-mono-math text-xs">
                  {['je', 'tu', 'il', 'nous', 'vous', 'ils'].map(pr => (
                    <div key={pr} className="flex items-center justify-between p-1.5 rounded bg-slate-950/80">
                      <span className="text-slate-400">{pr}</span>
                      <div>
                        <span className="text-cyan-400">{currentVerb.stems.futureStem}</span>
                        <span className="text-emerald-400 font-bold">
                          {((currentVerb.conjugations.futur_simple as any)[pr] || '').slice(currentVerb.stems.futureStem.length)}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Conditionnel Column */}
              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-3">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <span className="text-xs font-bold uppercase text-indigo-400">Conditionnel Présent</span>
                  <span className="text-[11px] font-mono-math text-slate-400">Radical + Terminaisons de l’IMPARFAIT</span>
                </div>
                <div className="space-y-1.5 font-mono-math text-xs">
                  {['je', 'tu', 'il', 'nous', 'vous', 'ils'].map(pr => (
                    <div key={pr} className="flex items-center justify-between p-1.5 rounded bg-slate-950/80">
                      <span className="text-slate-400">{pr}</span>
                      <div>
                        <span className="text-cyan-400">{currentVerb.stems.futureStem}</span>
                        <span className="text-indigo-400 font-bold">
                          {((currentVerb.conjugations.conditionnel_present as any)[pr] || '').slice(currentVerb.stems.futureStem.length)}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* EXPERIMENT 3: CUSTOM MIXER */}
      {activeExperiment === 'custom_mixer' && (
        <div className="rounded-2xl bg-slate-900/90 border border-slate-800 p-6 sm:p-8 shadow-xl space-y-6">
          <div>
            <span className="text-xs uppercase tracking-wider text-amber-400 font-bold">
              Atelier #3 • Simulateur Libre
            </span>
            <h3 className="text-xl font-extrabold text-white mt-1">
              Assemblez vos morceaux : Radical + Terminaison
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Tapez n’importe quel radical et terminaison pour tester l’assemblage en direct.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase text-slate-400 mb-1">Pronom Sujet</label>
              <input
                type="text"
                value={pronounPrefix}
                onChange={(e) => setPronounPrefix(e.target.value)}
                className="w-full p-2.5 bg-slate-950 border border-slate-700 rounded-lg text-sm text-white font-mono-math"
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase text-slate-400 mb-1">Radical (Base)</label>
              <input
                type="text"
                value={customStem}
                onChange={(e) => setCustomStem(e.target.value)}
                className="w-full p-2.5 bg-slate-950 border border-slate-700 rounded-lg text-sm text-cyan-300 font-mono-math"
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase text-slate-400 mb-1">Terminaison</label>
              <input
                type="text"
                value={customEnding}
                onChange={(e) => setCustomEnding(e.target.value)}
                className="w-full p-2.5 bg-slate-950 border border-slate-700 rounded-lg text-sm text-emerald-300 font-mono-math"
              />
            </div>
          </div>

          {/* Live Result Box */}
          <div className="p-6 bg-slate-950 rounded-2xl border border-slate-800 text-center space-y-4">
            <div className="text-xs uppercase tracking-wider text-slate-400 font-mono-math">
              Assemblage : Pronom + Radical + Terminaison
            </div>
            <div className="text-2xl sm:text-3xl font-black text-white font-mono-math tracking-wide">
              <span className="text-amber-300">{pronounPrefix} </span>
              <span className="text-cyan-400">{customStem}</span>
              <span className="text-emerald-400">{customEnding}</span>
            </div>
            <div>
              <button
                onClick={() => speakFrench(`${pronounPrefix} ${customStem}${customEnding}`)}
                className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold cursor-pointer shadow-md transition"
              >
                Écouter la prononciation
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
