import React, { useState } from 'react';
import { Question } from '../types/trivia';
import { Timer, Award, Zap, HelpCircle, Flame } from 'lucide-react';

interface QuestionCardProps {
  question: Question;
  currentIndex: number;
  totalQuestions: number;
  score: number;
  streak: number;
  timeLeft: number | null;
  onSelectOption: (optionIndex: number) => void;
  disabled: boolean;
}

export function QuestionCard({
  question,
  currentIndex,
  totalQuestions,
  score,
  streak,
  timeLeft,
  onSelectOption,
  disabled
}: QuestionCardProps) {
  const [showHint, setShowHint] = useState(false);

  const getDifficultyBadge = (lvl: string) => {
    switch (lvl) {
      case 'novice':
        return { label: 'Nivel 1 • Cotidiano', color: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30' };
      case 'intermediate':
        return { label: 'Nivel 2 • Reactividad', color: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30' };
      case 'advanced':
        return { label: 'Nivel 3 • Síntesis Solvay', color: 'bg-amber-500/10 text-amber-400 border-amber-500/30' };
      case 'expert':
        return { label: 'Nivel 4 • Bioquímica & Buffer', color: 'bg-purple-500/10 text-purple-400 border-purple-500/30' };
      default:
        return { label: 'Trivia General', color: 'bg-teal-500/10 text-teal-400 border-teal-500/30' };
    }
  };

  const badge = getDifficultyBadge(question.level);
  const optionLetters = ['A', 'B', 'C', 'D'];

  return (
    <div className="bg-slate-900/90 backdrop-blur-md rounded-2xl border border-slate-800 p-6 md:p-8 shadow-2xl relative overflow-hidden">
      {/* Top Status Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <span className={`text-xs font-mono px-3 py-1 rounded-full border ${badge.color} font-bold`}>
            {badge.label}
          </span>
          <span className="text-xs font-mono text-slate-400">
            {question.category}
          </span>
        </div>

        {/* Live Counters */}
        <div className="flex items-center gap-4 text-xs font-mono">
          {timeLeft !== null && (
            <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg border ${
              timeLeft <= 8 ? 'bg-rose-500/20 text-rose-300 border-rose-500/40 animate-pulse' : 'bg-slate-800 text-slate-300 border-slate-700'
            }`}>
              <Timer className="w-3.5 h-3.5 text-teal-400" />
              <span>{timeLeft}s</span>
            </div>
          )}

          {streak > 1 && (
            <div className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-amber-500/20 text-amber-300 border border-amber-500/40 font-bold">
              <Flame className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span>Racha x{streak}</span>
            </div>
          )}

          <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-teal-500/10 text-teal-300 border border-teal-500/30">
            <Award className="w-3.5 h-3.5 text-teal-400" />
            <span className="font-bold">{score} pts</span>
          </div>
        </div>
      </div>

      {/* Progress Line */}
      <div className="w-full bg-slate-800/80 h-1.5 rounded-full overflow-hidden mt-4">
        <div
          className="bg-gradient-to-r from-teal-500 to-cyan-400 h-full transition-all duration-300 rounded-full"
          style={{ width: `${((currentIndex + 1) / totalQuestions) * 100}%` }}
        />
      </div>

      <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 mt-2 mb-4">
        <span>Pregunta {currentIndex + 1} de {totalQuestions}</span>
        <span>Valor: +{question.difficultyPoints} pts</span>
      </div>

      {/* Question Text */}
      <div className="my-5">
        <h3 className="text-lg md:text-xl font-bold text-white leading-snug">
          {question.question}
        </h3>
      </div>

      {/* Chemical Hint Button if user wants a nudge */}
      <div className="mb-5 flex justify-end">
        <button
          onClick={() => setShowHint(!showHint)}
          className="text-xs font-mono text-teal-400/80 hover:text-teal-300 flex items-center gap-1.5 transition"
        >
          <HelpCircle className="w-3.5 h-3.5" />
          <span>{showHint ? 'Ocultar Pista Química' : 'Ver Pista Molecular'}</span>
        </button>
      </div>

      {showHint && (
        <div className="mb-5 p-3 bg-teal-950/30 border border-teal-500/20 rounded-xl text-xs text-teal-200/90 leading-relaxed font-mono animate-fadeIn">
          💡 <strong>Pista:</strong> Recuerda la estequiometría de la reacción: {question.chemicalEquation || 'El NaHCO₃ actúa como anfolito con masa molar 84.0 g/mol.'}
        </div>
      )}

      {/* 4 Answer Options */}
      <div className="grid grid-cols-1 gap-3">
        {question.options.map((option, idx) => (
          <button
            key={idx}
            disabled={disabled}
            onClick={() => onSelectOption(idx)}
            className="group w-full text-left p-4 rounded-xl bg-slate-950/70 hover:bg-slate-800/90 border border-slate-800 hover:border-teal-500/60 active:scale-[0.99] transition-all flex items-start gap-3.5 text-sm md:text-base text-slate-200 cursor-pointer disabled:cursor-not-allowed"
          >
            <span className="w-7 h-7 shrink-0 rounded-lg bg-slate-800 group-hover:bg-teal-500 group-hover:text-slate-950 text-slate-300 font-mono font-bold text-xs flex items-center justify-center transition-colors border border-slate-700 group-hover:border-teal-400">
              {optionLetters[idx]}
            </span>
            <span className="flex-1 leading-relaxed group-hover:text-white transition-colors">
              {option}
            </span>
            <span className="hidden md:inline text-[10px] font-mono text-slate-500 group-hover:text-teal-400 border border-slate-800 group-hover:border-teal-500/40 rounded px-1.5 py-0.5 shrink-0">
              {idx + 1}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
