import React from 'react';
import { Heart, Sparkles, BookOpen, GraduationCap, CheckCircle } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-900 bg-slate-950/90 py-10 mt-16 text-xs text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3 text-center md:text-left">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-emerald-400 flex items-center justify-center font-mono-math font-black text-slate-950 text-sm">
              ∑
            </div>
            <div>
              <p className="font-bold text-slate-200 text-sm">
                Conjugaison Mathématique
              </p>
              <p className="text-slate-400">
                La méthode logique qui transforme la conjugaison en un jeu d'assemblage simple pour tous les élèves.
              </p>
            </div>
          </div>

          {/* Prominent Author Badge */}
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <div className="px-4 py-2 rounded-xl bg-indigo-950/80 border border-indigo-700/60 shadow-md text-center">
              <span className="text-[11px] uppercase tracking-wider text-indigo-300 font-semibold block">
                Conception Pédagogique
              </span>
              <span className="text-sm font-bold text-white tracking-wide">
                Créé par Mouatamid Chaima
              </span>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
          <p>© {new Date().getFullYear()} Conjugaison Mathématique • Tous droits réservés.</p>
          <div className="flex items-center gap-4">
            <span>Radical + Terminaison</span>
            <span>•</span>
            <span>Règle de Nous</span>
            <span>•</span>
            <span>Du Futur au Conditionnel</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
