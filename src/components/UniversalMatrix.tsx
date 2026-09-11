import React, { useState } from 'react';
import { TableProperties, Printer, Search, Download, Bookmark } from 'lucide-react';

export const UniversalMatrix: React.FC = () => {
  const [selectedGroup, setSelectedGroup] = useState<'G1' | 'G2' | 'G3'>('G1');

  const matrices = {
    G1: {
      name: '1er Groupe (-ER, ex: Parler)',
      formula: 'Radical = Infinitif sans "er"',
      stems: 'Radical stable et régulier',
      tenses: [
        { tense: 'Présent', endings: ['-e', '-es', '-e', '-ons', '-ez', '-ent'] },
        { tense: 'Imparfait', endings: ['-ais', '-ais', '-ait', '-ions', '-iez', '-aient'] },
        { tense: 'Futur Simple', endings: ['-erai', '-eras', '-era', '-erons', '-erez', '-eront'] },
        { tense: 'Conditionnel Présent', endings: ['-erais', '-erais', '-erait', '-erions', '-eriez', '-eraient'] },
        { tense: 'Subjonctif Présent', endings: ['-e', '-es', '-e', '-ions', '-iez', '-ent'] },
        { tense: 'Passé Simple', endings: ['-ai', '-as', '-a', '-âmes', '-âtes', '-èrent'] },
        { tense: 'Participe Passé', endings: ['-é', '(accords: -ée, -és, -ées)'] }
      ]
    },
    G2: {
      name: '2ème Groupe (-IR qui font -issons avec Nous, ex: Finir)',
      formula: 'Radical = Infinitif sans "ir" (+ "-iss-" au pluriel)',
      stems: 'Radical simple au singulier, avec "-iss-" au pluriel',
      tenses: [
        { tense: 'Présent', endings: ['-is', '-is', '-it', '-issons', '-issez', '-issent'] },
        { tense: 'Imparfait', endings: ['-issais', '-issais', '-issait', '-issions', '-issiez', '-issaient'] },
        { tense: 'Futur Simple', endings: ['-irai', '-iras', '-ira', '-irons', '-irez', '-iront'] },
        { tense: 'Conditionnel Présent', endings: ['-irais', '-irais', '-irait', '-irions', '-iriez', '-iraient'] },
        { tense: 'Subjonctif Présent', endings: ['-isse', '-isses', '-isse', '-issions', '-issiez', '-issent'] },
        { tense: 'Passé Simple', endings: ['-is', '-is', '-it', '-îmes', '-îtes', '-irent'] },
        { tense: 'Participe Passé', endings: ['-i', '(accords: -ie, -is, -ies)'] }
      ]
    },
    G3: {
      name: '3ème Groupe (Verbes particuliers, ex: Prendre, Venir, Faire...)',
      formula: 'Radical trouvé facilement grâce aux règles de Nous et du Futur',
      stems: 'Appliquer la règle de "Nous" pour l’imparfait et la base pour le futur',
      tenses: [
        { tense: 'Présent (Standard)', endings: ['-s / -x', '-s / -x', '-t / -d', '-ons', '-ez', '-ent'] },
        { tense: 'Imparfait (100% régulier)', endings: ['-ais', '-ais', '-ait', '-ions', '-iez', '-aient'] },
        { tense: 'Futur Simple (100% régulier)', endings: ['-ai', '-as', '-a', '-ons', '-ez', '-ont'] },
        { tense: 'Conditionnel Présent (100% régulier)', endings: ['-ais', '-ais', '-ait', '-ions', '-iez', '-aient'] },
        { tense: 'Subjonctif Présent', endings: ['-e', '-es', '-e', '-ions', '-iez', '-ent'] },
        { tense: 'Passé Simple (en -is ou -us)', endings: ['-is / -us', '-is / -us', '-it / -ut', '-îmes / -ûmes', '-îtes / -ûtes', '-irent / -urent'] },
        { tense: 'Participe Passé', endings: ['-u / -is / -it / -t', 'accords conditionnels'] }
      ]
    }
  };

  const currentData = matrices[selectedGroup];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="rounded-2xl bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 border border-slate-800 p-6 sm:p-8 shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-2">
            <TableProperties className="w-3.5 h-3.5" />
            <span>Tableau Récapitulatif Complet</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            Tableau des Terminaisons par Groupe
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-slate-400">
            Aide-mémoire clair pour les révisions, devoirs et examens. Conçu par Mouatamid Chaima.
          </p>
        </div>

        <button
          onClick={() => window.print()}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold border border-slate-700 transition cursor-pointer self-start sm:self-auto"
        >
          <Printer className="w-4 h-4 text-emerald-400" />
          <span>Imprimer / Exporter PDF</span>
        </button>
      </div>

      {/* Group Selector */}
      <div className="flex gap-2 p-1.5 bg-slate-900 rounded-xl border border-slate-800 max-w-md">
        {(['G1', 'G2', 'G3'] as const).map(g => (
          <button
            key={g}
            onClick={() => setSelectedGroup(g)}
            className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold transition cursor-pointer text-center ${
              selectedGroup === g
                ? 'bg-indigo-600 text-white shadow-md'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            {g === 'G1' ? '1er Groupe' : g === 'G2' ? '2ème Groupe' : '3ème Groupe'}
          </button>
        ))}
      </div>

      {/* Main Table Card */}
      <div className="rounded-2xl bg-slate-900/90 border border-slate-800 p-6 sm:p-8 shadow-xl space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-800 pb-4 gap-2">
          <div>
            <h3 className="text-lg font-black text-white">{currentData.name}</h3>
            <span className="text-xs text-slate-400 font-mono-math">
              Formule de base : <strong className="text-emerald-400">{currentData.formula}</strong>
            </span>
          </div>
          <span className="text-xs px-2.5 py-1 rounded bg-slate-800 text-indigo-300 font-medium">
            {currentData.stems}
          </span>
        </div>

        <div className="overflow-x-auto rounded-xl border border-slate-800">
          <table className="w-full text-left text-xs font-mono-math">
            <thead className="bg-slate-950 text-slate-300 border-b border-slate-800 font-sans uppercase tracking-wider font-semibold">
              <tr>
                <th className="py-3 px-4">Temps</th>
                <th className="py-3 px-3">Je (1S)</th>
                <th className="py-3 px-3">Tu (2S)</th>
                <th className="py-3 px-3">Il / Elle (3S)</th>
                <th className="py-3 px-3">Nous (1P)</th>
                <th className="py-3 px-3">Vous (2P)</th>
                <th className="py-3 px-3">Ils / Elles (3P)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80 bg-slate-900/40">
              {currentData.tenses.map((t, idx) => (
                <tr key={idx} className="hover:bg-slate-800/30">
                  <td className="py-3 px-4 font-sans font-bold text-slate-200">
                    {t.tense}
                  </td>
                  {t.endings.length >= 6 ? (
                    t.endings.map((ending, eIdx) => (
                      <td key={eIdx} className="py-3 px-3 text-emerald-400 font-semibold">
                        {ending}
                      </td>
                    ))
                  ) : (
                    <td colSpan={6} className="py-3 px-3 text-cyan-300 font-sans">
                      {t.endings.join(' ')}
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Master Formula Recall */}
        <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2 text-xs">
          <div className="font-bold text-slate-200 uppercase tracking-wider flex items-center gap-1.5">
            <Bookmark className="w-4 h-4 text-indigo-400" />
            Rappel des 3 règles essentielles :
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1">
            <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
              <strong className="text-emerald-400 block mb-0.5">1. Imparfait (Toujours les mêmes)</strong>
              <span className="text-slate-300">Terminaisons : -ais, -ais, -ait, -ions, -iez, -aient pour tous les verbes sans exception.</span>
            </div>
            <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
              <strong className="text-indigo-400 block mb-0.5">2. Futur Simple (Comme le verbe Avoir)</strong>
              <span className="text-slate-300">Terminaisons : -ai, -as, -a, -ons, -ez, -ont (issues du verbe AVOIR au présent).</span>
            </div>
            <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
              <strong className="text-purple-400 block mb-0.5">3. Conditionnel Présent</strong>
              <span className="text-slate-300">Conditionnel = Radical du Futur + Terminaisons de l’Imparfait.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
