import React, { useState } from 'react';
import { BookOpen, Sparkles, Check, ChevronRight, Calculator, FileCheck, Layers } from 'lucide-react';
import { MATHEMATICAL_THEOREMS } from '../data/mathematicalTheorems';

export const ComprehensiveCourse: React.FC = () => {
  const [activeTheoremId, setActiveTheoremId] = useState(MATHEMATICAL_THEOREMS[0].id);

  const selectedTheorem = MATHEMATICAL_THEOREMS.find(t => t.id === activeTheoremId) || MATHEMATICAL_THEOREMS[0];

  return (
    <div className="space-y-8">
      {/* Course Header Banner */}
      <div className="rounded-2xl bg-gradient-to-r from-slate-900 via-indigo-950/80 to-slate-900 border border-indigo-500/20 p-6 sm:p-8 shadow-xl relative overflow-hidden">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Cours Complet • Méthode Simple & Logique</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            Comprendre la Conjugaison Facilement
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-300 leading-relaxed">
            Pourquoi apprendre des dizaines de tableaux par cœur sans comprendre ?
            Ce cours vous explique la conjugaison avec 6 règles logiques simples, claires et faciles à appliquer pour tous les verbes.
          </p>
          <div className="mt-4 flex items-center gap-2 text-xs text-indigo-300">
            <span className="font-semibold bg-indigo-950 px-2.5 py-1 rounded border border-indigo-800">
              Conçu par Mouatamid Chaima
            </span>
          </div>
        </div>
      </div>

      {/* Course Layout: Sidebar of Theorems + Active Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Navigation Sidebar */}
        <div className="lg:col-span-4 space-y-2">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 px-2 mb-3 flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-indigo-400" />
            Sommaire des 6 Règles d’Or
          </h3>
          <div className="space-y-2">
            {MATHEMATICAL_THEOREMS.map((theorem, idx) => {
              const isCurrent = theorem.id === selectedTheorem.id;
              return (
                <button
                  key={theorem.id}
                  onClick={() => setActiveTheoremId(theorem.id)}
                  className={`w-full text-left p-3.5 rounded-xl border transition cursor-pointer flex items-start justify-between gap-2 ${
                    isCurrent
                      ? 'bg-indigo-600 text-white border-indigo-500 shadow-lg shadow-indigo-600/30'
                      : 'bg-slate-900/90 text-slate-300 border-slate-800 hover:bg-slate-850 hover:border-slate-700'
                  }`}
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className={`text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded ${
                        isCurrent ? 'bg-indigo-700 text-indigo-100' : 'bg-slate-800 text-emerald-400'
                      }`}>
                        {theorem.badge}
                      </span>
                      <span className="text-[11px] opacity-75 font-mono-math">#0{idx + 1}</span>
                    </div>
                    <h4 className="text-sm font-semibold line-clamp-1">
                      {theorem.title}
                    </h4>
                    <p className={`text-xs line-clamp-1 ${isCurrent ? 'text-indigo-100' : 'text-slate-400'}`}>
                      {theorem.subtitle}
                    </p>
                  </div>
                  <ChevronRight className={`w-4 h-4 mt-1 flex-shrink-0 ${isCurrent ? 'text-white' : 'text-slate-600'}`} />
                </button>
              );
            })}
          </div>

          {/* Quick Study Tip Card */}
          <div className="mt-6 p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs space-y-2">
            <span className="font-bold text-emerald-400 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              Conseil d’étude de Mouatamid Chaima :
            </span>
            <p className="text-slate-300 leading-relaxed">
              Ne récitez pas de listes par cœur. Repérez simplement la base du verbe (le radical) et collez la bonne terminaison selon la personne.
            </p>
          </div>
        </div>

        {/* Theorem Detail Panel */}
        <div className="lg:col-span-8 space-y-6">
          <div className="rounded-2xl bg-slate-900/90 border border-slate-800 p-6 sm:p-8 shadow-xl space-y-6">
            {/* Header of Theorem */}
            <div className="border-b border-slate-800 pb-5">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-2">
                {selectedTheorem.badge}
              </div>
              <h3 className="text-2xl font-black text-white tracking-tight">
                {selectedTheorem.title}
              </h3>
              <p className="text-sm text-slate-400 mt-1">
                {selectedTheorem.subtitle}
              </p>
            </div>

            {/* Main Formula Blackboard Box */}
            <div className="p-6 rounded-2xl bg-slate-950 border border-indigo-500/30 text-center shadow-inner relative overflow-hidden">
              <div className="text-[11px] font-mono-math uppercase tracking-widest text-indigo-400/80 mb-2">
                La Règle Simple
              </div>
              <div className="text-lg sm:text-2xl font-extrabold text-emerald-400 font-mono-math tracking-wide py-2">
                {selectedTheorem.formula}
              </div>
              <p className="text-xs sm:text-sm text-slate-300 mt-3 max-w-xl mx-auto leading-relaxed italic">
                "{selectedTheorem.formulaMeaning}"
              </p>
            </div>

            {/* Theoretical Foundations */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-2">
                <FileCheck className="w-4 h-4 text-indigo-400" />
                Explications Claires
              </h4>
              <div className="space-y-2">
                {selectedTheorem.theory.map((point, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <span className="w-5 h-5 rounded-full bg-indigo-900/60 text-indigo-300 flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Concrete Demonstration Proofs */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-2">
                <Calculator className="w-4 h-4 text-emerald-400" />
                Exemples Concrets
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {selectedTheorem.demonstrationSteps.map((step, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2"
                  >
                    <div className="text-xs font-bold text-slate-200 uppercase tracking-wide">
                      {step.label}
                    </div>
                    <div className="p-2 bg-slate-900 rounded-lg text-xs font-mono-math text-indigo-300 border border-slate-800/80">
                      {step.calculation}
                    </div>
                    <div className="text-sm font-bold text-emerald-400 font-mono-math">
                      ⟶ {step.result}
                    </div>
                    <p className="text-[11px] text-slate-400 leading-snug">
                      {step.note}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Matrix / Truth Table if available */}
            {selectedTheorem.truthTableOrMatrix && (
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
                  Tableau Récapitulatif
                </h4>
                <div className="overflow-x-auto rounded-xl border border-slate-800">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-slate-950 text-slate-300 border-b border-slate-800 font-semibold uppercase tracking-wider">
                      <tr>
                        {selectedTheorem.truthTableOrMatrix.headers.map((h, i) => (
                          <th key={i} className="py-3 px-3.5">
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/80 bg-slate-900/50 font-mono-math">
                      {selectedTheorem.truthTableOrMatrix.rows.map((row, rIdx) => (
                        <tr key={rIdx} className="hover:bg-slate-800/30">
                          {row.map((cell, cIdx) => (
                            <td key={cIdx} className={`py-2.5 px-3.5 ${cIdx === 0 ? 'text-slate-200 font-sans font-medium' : 'text-emerald-300'}`}>
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Key Takeaway Rule */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-950/30 to-indigo-950/30 border border-emerald-500/30 flex items-start gap-3">
              <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-xs uppercase tracking-wider text-emerald-300 block mb-0.5">
                  Règle d’Or à Retenir
                </strong>
                <p className="text-xs sm:text-sm text-slate-200">
                  {selectedTheorem.keyTakeaway}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
