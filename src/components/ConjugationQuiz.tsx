import React, { useState } from 'react';
import { Trophy, CheckCircle2, XCircle, ArrowRight, RotateCcw, Sparkles, Award } from 'lucide-react';
import { QUIZ_QUESTIONS } from '../data/quizQuestions';

export const ConjugationQuiz: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const question = QUIZ_QUESTIONS[currentIdx];

  const handleSelectOption = (opt: string) => {
    if (isSubmitted) return;
    setSelectedOption(opt);
  };

  const handleSubmit = () => {
    if (!selectedOption || isSubmitted) return;
    setIsSubmitted(true);
    const isCorrect = selectedOption === question.correctAnswer;
    if (isCorrect) {
      setScore(prev => prev + 1);
      const newStreak = streak + 1;
      setStreak(newStreak);
      if (newStreak > bestStreak) setBestStreak(newStreak);
    } else {
      setStreak(0);
    }
  };

  const handleNext = () => {
    if (currentIdx + 1 < QUIZ_QUESTIONS.length) {
      setCurrentIdx(prev => prev + 1);
      setSelectedOption(null);
      setIsSubmitted(false);
    } else {
      setQuizFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentIdx(0);
    setSelectedOption(null);
    setIsSubmitted(false);
    setScore(0);
    setStreak(0);
    setQuizFinished(false);
  };

  if (quizFinished) {
    const percentage = Math.round((score / QUIZ_QUESTIONS.length) * 100);
    return (
      <div className="max-w-2xl mx-auto rounded-2xl bg-slate-900/90 border border-slate-800 p-8 shadow-2xl text-center space-y-6">
        <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center">
          <Award className="w-8 h-8" />
        </div>
        <div>
          <h3 className="text-2xl font-black text-white">Défi Algorithmique Terminé !</h3>
          <p className="text-slate-300 text-sm mt-1">
            Félicitations pour votre session d'entraînement mathématique.
          </p>
        </div>

        <div className="p-6 bg-slate-950 rounded-xl border border-slate-800/80 max-w-sm mx-auto space-y-2">
          <div className="text-4xl font-black text-emerald-400 font-mono-math">
            {score} / {QUIZ_QUESTIONS.length}
          </div>
          <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
            Précision Algorithmique : {percentage}%
          </div>
          <div className="text-xs text-indigo-300">
            Meilleure série continue : {bestStreak} réponses
          </div>
        </div>

        <p className="text-xs text-slate-400 italic">
          {percentage >= 80
            ? 'Excellent ! Vous maîtrisez les lois mathématiques de la conjugaison avec brio.'
            : 'Bon travail ! Révisez les théorèmes du cours pour transformer toute erreur en automatisme.'}
        </p>

        <button
          onClick={handleRestart}
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition cursor-pointer shadow-lg shadow-indigo-600/30"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Recommencer le défi</span>
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {/* Header with Stats */}
      <div className="flex items-center justify-between bg-slate-900/90 rounded-xl p-4 border border-slate-800 shadow-md">
        <div className="flex items-center gap-2">
          <Trophy className="w-4 h-4 text-emerald-400" />
          <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
            Défi Mathématique : Question {currentIdx + 1} / {QUIZ_QUESTIONS.length}
          </span>
        </div>
        <div className="flex items-center gap-4 text-xs font-mono-math">
          <span className="text-emerald-400 font-bold">Score: {score}</span>
          <span className="text-indigo-300 font-medium">Série: {streak} 🔥</span>
        </div>
      </div>

      {/* Question Card */}
      <div className="rounded-2xl bg-slate-900/90 border border-slate-800 p-6 sm:p-8 shadow-xl space-y-6">
        <div>
          <div className="flex items-center justify-between gap-2 mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">
              {question.title}
            </span>
            <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded ${
              question.difficulty === 'facile' ? 'bg-emerald-950 text-emerald-300' :
              question.difficulty === 'moyen' ? 'bg-amber-950 text-amber-300' : 'bg-purple-950 text-purple-300'
            }`}>
              {question.difficulty}
            </span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
            {question.questionText}
          </h3>
        </div>

        {/* Equation Display Box */}
        <div className="p-4 rounded-xl bg-slate-950 border border-indigo-500/30 text-center">
          <div className="text-sm sm:text-lg font-extrabold text-emerald-400 font-mono-math tracking-wide">
            {question.equation}
          </div>
        </div>

        {/* Options List */}
        <div className="space-y-2.5">
          {question.options.map((opt, i) => {
            const isSelected = selectedOption === opt;
            const isCorrect = opt === question.correctAnswer;
            let btnStyle = 'bg-slate-950/80 border-slate-800 hover:border-slate-700 text-slate-200';

            if (isSubmitted) {
              if (isCorrect) {
                btnStyle = 'bg-emerald-950/70 border-emerald-500 text-emerald-200 shadow-md shadow-emerald-900/20';
              } else if (isSelected && !isCorrect) {
                btnStyle = 'bg-red-950/70 border-red-500 text-red-200 shadow-md shadow-red-900/20';
              } else {
                btnStyle = 'bg-slate-950/40 border-slate-800/40 text-slate-500';
              }
            } else if (isSelected) {
              btnStyle = 'bg-indigo-950/70 border-indigo-500 text-indigo-100 shadow-md shadow-indigo-900/20';
            }

            return (
              <button
                key={i}
                onClick={() => handleSelectOption(opt)}
                disabled={isSubmitted}
                className={`w-full text-left p-3.5 rounded-xl border transition cursor-pointer flex items-center justify-between text-xs sm:text-sm font-medium ${btnStyle}`}
              >
                <span className="font-mono-math">{opt}</span>
                {isSubmitted && isCorrect && <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />}
                {isSubmitted && isSelected && !isCorrect && <XCircle className="w-4 h-4 text-red-400 flex-shrink-0" />}
              </button>
            );
          })}
        </div>

        {/* Action Button: Validate or Next */}
        {!isSubmitted ? (
          <button
            onClick={handleSubmit}
            disabled={!selectedOption}
            className={`w-full py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition cursor-pointer ${
              selectedOption
                ? 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/30'
                : 'bg-slate-800 text-slate-500 cursor-not-allowed'
            }`}
          >
            Valider la Réponse
          </button>
        ) : (
          <div className="space-y-4 pt-2">
            {/* Mathematical Proof Box */}
            <div className={`p-4 rounded-xl border text-xs leading-relaxed ${
              selectedOption === question.correctAnswer
                ? 'bg-emerald-950/30 border-emerald-500/30 text-emerald-200'
                : 'bg-indigo-950/30 border-indigo-500/30 text-indigo-200'
            }`}>
              <strong className="block mb-1 text-[11px] uppercase tracking-wider font-bold">
                Démonstration & Preuve Mathématique :
              </strong>
              {question.solutionProof}
            </div>

            <button
              onClick={handleNext}
              className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider transition cursor-pointer flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/30"
            >
              <span>Question Suivante</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
