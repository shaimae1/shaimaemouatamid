import React from 'react';
import { Calculator, BookOpen, FlaskConical, Trophy, TableProperties, Sparkles } from 'lucide-react';

export type ActiveTab = 'solveur' | 'cours' | 'labo' | 'defis' | 'formulaire';

interface NavbarProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  const tabs: { id: ActiveTab; label: string; icon: React.ReactNode; badge?: string }[] = [
    { id: 'solveur', label: 'Calculateur & Décomposition', icon: <Calculator className="w-4 h-4" /> },
    { id: 'cours', label: 'Cours & Règles d’Or', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'labo', label: 'Atelier Pratique', icon: <FlaskConical className="w-4 h-4" /> },
    { id: 'defis', label: 'Quiz & Exercices', icon: <Trophy className="w-4 h-4" />, badge: 'Quiz' },
    { id: 'formulaire', label: 'Tableaux & Résumé', icon: <TableProperties className="w-4 h-4" /> }
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/85 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Logo & Branding */}
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-emerald-400 p-0.5 shadow-lg shadow-indigo-500/20">
              <div className="h-full w-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <span className="font-mono-math font-bold text-lg text-emerald-400">ƒ(v)</span>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-lg font-bold text-slate-100 tracking-tight flex items-center gap-1.5">
                  Conjugaison Mathématique
                </h1>
                <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <Sparkles className="w-3 h-3" /> Méthode Logique
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <span>Pour élèves et étudiants</span>
                <span>•</span>
                <span className="text-indigo-300 font-medium bg-indigo-950/60 px-2 py-0.5 rounded border border-indigo-800/50">
                  Créé par Mouatamid Chaima
                </span>
              </div>
            </div>
          </div>

          {/* Author Badge for mobile */}
          <div className="sm:hidden">
            <span className="text-xs text-indigo-300 bg-indigo-950/80 px-2 py-1 rounded-md border border-indigo-800/40">
              M. Chaima
            </span>
          </div>
        </div>

        {/* Navigation Tabs Bar */}
        <div className="flex space-x-1 sm:space-x-2 overflow-x-auto py-2 scrollbar-none border-t border-slate-900/60">
          {tabs.map(tab => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                id={`tab-${tab.id}`}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
                {tab.badge && (
                  <span
                    className={`ml-1 px-1.5 py-0.2 rounded text-[10px] uppercase tracking-wider font-semibold ${
                      isActive ? 'bg-indigo-700 text-indigo-100' : 'bg-emerald-500/20 text-emerald-300'
                    }`}
                  >
                    {tab.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
};
