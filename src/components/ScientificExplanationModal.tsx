import React from 'react';
import { CheckCircle2, XCircle, Beaker, HelpCircle, ArrowRight, Lightbulb, BookOpen } from 'lucide-react';
import { Question } from '../types/trivia';

interface ScientificExplanationModalProps {
  question: Question;
  selectedOptionIndex: number;
  onNext: () => void;
  isLastQuestion: boolean;
}

export function ScientificExplanationModal({
  question,
  selectedOptionIndex,
  onNext,
  isLastQuestion
}: ScientificExplanationModalProps) {
  const isCorrect = selectedOptionIndex === question.correctIndex;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div className="bg-slate-900 border border-slate-700/80 w-full max-w-2xl rounded-2xl p-6 md:p-8 shadow-2xl max-h-[90vh] overflow-y-auto flex flex-col justify-between">
        <div>
          {/* Header with Result Badge */}
          <div className="flex items-center justify-between pb-4 border-b border-slate-800">
            <div className="flex items-center gap-3">
              {isCorrect ? (
                <div className="w-10 h-10 rounded-xl bg-teal-500/20 text-teal-400 border border-teal-500/40 flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
              ) : (
                <div className="w-10 h-10 rounded-xl bg-rose-500/20 text-rose-400 border border-rose-500/40 flex items-center justify-center">
                  <XCircle className="w-6 h-6" />
                </div>
              )}
              <div>
                <h4 className={`text-lg font-extrabold ${isCorrect ? 'text-teal-300' : 'text-rose-400'}`}>
                  {isCorrect ? '¡Respuesta Científicamente Correcta!' : 'Respuesta Incorrecta'}
                </h4>
                <p className="text-xs text-slate-400 font-mono">
                  {question.category} • {question.levelTitle}
                </p>
              </div>
            </div>

            <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-slate-800 text-teal-400 border border-slate-700">
              +{isCorrect ? question.difficultyPoints : 0} pts
            </span>
          </div>

          {/* Balanced Chemical Equation Box */}
          {question.chemicalEquation && (
            <div className="mt-5 p-3.5 bg-slate-950 rounded-xl border border-teal-500/30">
              <div className="flex items-center gap-1.5 text-xs font-mono text-teal-400 font-bold mb-1">
                <Beaker className="w-3.5 h-3.5" />
                <span>Ecuación / Fórmula Química Relevante</span>
              </div>
              <div className="font-mono text-white text-sm md:text-base tracking-wide overflow-x-auto whitespace-nowrap">
                {question.chemicalEquation}
              </div>
            </div>
          )}

          {/* Core Scientific Mechanism */}
          <div className="mt-5 space-y-4">
            <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800">
              <h5 className="text-xs font-mono uppercase text-teal-400 font-bold flex items-center gap-1.5 mb-1.5">
                <BookOpen className="w-3.5 h-3.5" />
                Fundamento y Mecanismo Químico
              </h5>
              <p className="text-sm text-slate-200 leading-relaxed">
                {question.scientificExplanation.summary}
              </p>
              <div className="mt-2.5 text-xs text-slate-400 leading-relaxed whitespace-pre-line border-t border-slate-800/80 pt-2 font-mono">
                {question.scientificExplanation.mechanism}
              </div>
            </div>

            {/* Why distractors fail */}
            <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800">
              <h5 className="text-xs font-mono uppercase text-amber-400 font-bold flex items-center gap-1.5 mb-1.5">
                <HelpCircle className="w-3.5 h-3.5" />
                Análisis de las Opciones Incorrectas
              </h5>
              <p className="text-xs text-slate-300 leading-relaxed">
                {question.scientificExplanation.whyDistractorsFail}
              </p>
            </div>

            {/* Fun / Practical Fact */}
            <div className="bg-teal-950/20 p-3.5 rounded-xl border border-teal-500/20 flex items-start gap-3">
              <Lightbulb className="w-4 h-4 text-teal-400 mt-0.5 shrink-0" />
              <div className="text-xs text-teal-200/90 leading-relaxed">
                <strong className="text-teal-300">Dato de Laboratorio: </strong>
                {question.scientificExplanation.practicalOrLabFact}
              </div>
            </div>
          </div>
        </div>

        {/* Footer with Continue Button */}
        <div className="mt-6 pt-4 border-t border-slate-800 flex justify-end">
          <button
            onClick={onNext}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-teal-500 hover:bg-teal-400 active:scale-95 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 transition shadow-lg shadow-teal-500/20"
          >
            <span>{isLastQuestion ? 'Ver Resultados Finales' : 'Siguiente Pregunta'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
