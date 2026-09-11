import React, { useState } from 'react';
import { Navbar, ActiveTab } from './components/Navbar';
import { ConjugationSolver } from './components/ConjugationSolver';
import { ComprehensiveCourse } from './components/ComprehensiveCourse';
import { InteractiveLab } from './components/InteractiveLab';
import { ConjugationQuiz } from './components/ConjugationQuiz';
import { UniversalMatrix } from './components/UniversalMatrix';
import { Footer } from './components/Footer';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('solveur');

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-indigo-500 selection:text-white">
      {/* Navigation Header */}
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content Area */}
      <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'solveur' && <ConjugationSolver />}
        {activeTab === 'cours' && <ComprehensiveCourse />}
        {activeTab === 'labo' && <InteractiveLab />}
        {activeTab === 'defis' && <ConjugationQuiz />}
        {activeTab === 'formulaire' && <UniversalMatrix />}
      </main>

      {/* Footer with Creator Credit */}
      <Footer />
    </div>
  );
}
