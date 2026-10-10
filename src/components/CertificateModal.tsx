import React, { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';
import { Trophy, Award, CheckCircle2, XCircle, RotateCcw, Share2, BookOpen, Star, Sparkles } from 'lucide-react';
import { QuizAnswerRecord } from '../types/trivia';
import { playLevelUpSound, playClickSound } from '../utils/audio';

interface CertificateModalProps {
  score: number;
  totalPossibleScore: number;
  answerRecords: QuizAnswerRecord[];
  highestStreak: number;
  levelTitle: string;
  onRestart: () => void;
  onBackToMenu: () => void;
}

export function CertificateModal({
  score,
  totalPossibleScore,
  answerRecords,
  highestStreak,
  levelTitle,
  onRestart,
  onBackToMenu
}: CertificateModalProps) {
  const [userName, setUserName] = useState('Químico Investigador');
  const [isCopied, setIsCopied] = useState(false);
  const [showReview, setShowReview] = useState(false);

  const correctCount = answerRecords.filter((a) => a.isCorrect).length;
  const accuracy = Math.round((correctCount / (answerRecords.length || 1)) * 100);

  useEffect(() => {
    playLevelUpSound();
    // Fire celebratory confetti burst
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
  }, []);

  const copyShareText = () => {
    playClickSound();
    const shareText = `🧪 ¡Completé la Trivia Científica de Bicarbonato de Sodio (NaHCO₃)!\n📊 Puntaje: ${score} pts | Precisión: ${accuracy}%\n🔥 Mayor Racha: x${highestStreak}\n🏅 Nivel: ${levelTitle}\n¡Aprende química inorgánica y fisiología en BicarbonatoLab!`;
    navigator.clipboard.writeText(shareText);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2500);
  };

  return (
    <div className="space-y-8 animate-fadeIn max-w-4xl mx-auto">
      {/* Top Victory Card */}
      <div className="bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 rounded-3xl border border-teal-500/30 p-8 shadow-2xl text-center relative overflow-hidden">
        <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-teal-500/20 text-teal-400 border border-teal-500/40 flex items-center justify-center shadow-lg shadow-teal-500/20">
          <Trophy className="w-8 h-8" />
        </div>

        <h2 className="text-3xl font-extrabold text-white tracking-tight">
          ¡Nivel Científico Concluido!
        </h2>
        <p className="text-sm text-slate-400 mt-1">
          {levelTitle}
        </p>

        {/* Stats Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
          <div className="bg-slate-950/70 p-4 rounded-2xl border border-slate-800">
            <span className="text-[11px] font-mono text-slate-400">Puntaje Final</span>
            <div className="text-2xl font-bold font-mono text-teal-300 mt-0.5">
              {score}
            </div>
            <span className="text-[10px] text-slate-500 font-mono">de {totalPossibleScore} pts</span>
          </div>

          <div className="bg-slate-950/70 p-4 rounded-2xl border border-slate-800">
            <span className="text-[11px] font-mono text-slate-400">Precisión</span>
            <div className="text-2xl font-bold font-mono text-cyan-300 mt-0.5">
              {accuracy}%
            </div>
            <span className="text-[10px] text-slate-500 font-mono">{correctCount} de {answerRecords.length}</span>
          </div>

          <div className="bg-slate-950/70 p-4 rounded-2xl border border-slate-800">
            <span className="text-[11px] font-mono text-slate-400">Mayor Racha</span>
            <div className="text-2xl font-bold font-mono text-amber-300 mt-0.5">
              x{highestStreak}
            </div>
            <span className="text-[10px] text-slate-500 font-mono">respuestas seguidas</span>
          </div>

          <div className="bg-slate-950/70 p-4 rounded-2xl border border-slate-800">
            <span className="text-[11px] font-mono text-slate-400">Rango Científico</span>
            <div className="text-sm font-bold text-emerald-400 mt-1.5 leading-tight">
              {accuracy >= 85 ? 'Maestro Solvay' : accuracy >= 60 ? 'Químico Superior' : 'Aprendiz de NaHCO₃'}
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
          <button
            onClick={copyShareText}
            className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition border border-slate-700 flex items-center gap-2"
          >
            <Share2 className="w-4 h-4 text-teal-400" />
            <span>{isCopied ? '¡Copiado al Portapapeles!' : 'Compartir Resultado'}</span>
          </button>

          <button
            onClick={() => setShowReview(!showReview)}
            className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition border border-slate-700 flex items-center gap-2"
          >
            <BookOpen className="w-4 h-4 text-cyan-400" />
            <span>{showReview ? 'Ocultar Revisión' : 'Revisar Preguntas y Respuestas'}</span>
          </button>

          <button
            onClick={onRestart}
            className="px-5 py-2.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 text-xs font-bold transition shadow-lg shadow-teal-500/20 flex items-center gap-2"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Reintentar Nivel</span>
          </button>

          <button
            onClick={onBackToMenu}
            className="px-5 py-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 text-xs font-bold transition"
          >
            Volver a Selección de Niveles
          </button>
        </div>
      </div>

      {/* Diploma / Certificate Preview */}
      <div className="bg-slate-950 rounded-3xl border-2 border-teal-500/40 p-8 shadow-2xl relative overflow-hidden text-center">
        {/* Certificate decorative borders */}
        <div className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-teal-400/60" />
        <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-teal-400/60" />
        <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-teal-400/60" />
        <div className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-teal-400/60" />

        <div className="max-w-2xl mx-auto space-y-4">
          <div className="flex items-center justify-center gap-2 text-teal-400 text-xs font-mono tracking-widest uppercase">
            <Sparkles className="w-4 h-4" />
            <span>Certificado de Competencia en Química Inorgánica</span>
            <Sparkles className="w-4 h-4" />
          </div>

          <h3 className="text-2xl font-serif font-bold text-white">
            BicarbonatoLab Academia de Ciencias
          </h3>

          <p className="text-xs text-slate-400">
            Se otorga la presente certificación de excelencia teórica y práctica en el estudio del compuesto <strong className="text-teal-300 font-mono">NaHCO₃ (Hidrogenocarbonato de Sodio)</strong> a:
          </p>

          <div className="py-2">
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="bg-slate-900 border border-slate-700 px-4 py-2 rounded-xl text-center text-lg md:text-xl font-bold text-teal-300 focus:outline-none focus:border-teal-400 font-serif w-full max-w-sm"
              placeholder="Escribe tu Nombre"
            />
          </div>

          <p className="text-xs text-slate-400 leading-relaxed max-w-xl mx-auto">
            Habiendo demostrado dominio riguroso en estequiometría de descomposición térmica, carácter anfolito, equilibrio del sistema buffer carbónico-bicarbonato y síntesis por el Proceso Solvay con una calificación del <strong className="text-white font-mono">{accuracy}%</strong>.
          </p>

          <div className="pt-4 flex items-center justify-between border-t border-slate-800 text-[11px] font-mono text-slate-500">
            <span>Fecha: {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            <span className="text-teal-400 flex items-center gap-1 font-bold">
              <Award className="w-3.5 h-3.5" /> Sello de Rigor Químico
            </span>
            <span>ID: BCL-{Math.floor(100000 + Math.random() * 900000)}</span>
          </div>
        </div>
      </div>

      {/* Optional Full Review Accordion */}
      {showReview && (
        <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 space-y-4">
          <h4 className="text-lg font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-3">
            <BookOpen className="w-5 h-5 text-teal-400" />
            <span>Revisión Detallada de Preguntas</span>
          </h4>

          <div className="space-y-3">
            {answerRecords.map((ans, idx) => (
              <div
                key={ans.questionId}
                className={`p-4 rounded-xl border flex items-start gap-3 ${
                  ans.isCorrect
                    ? 'bg-slate-950/60 border-teal-500/30 text-slate-300'
                    : 'bg-slate-950/60 border-rose-500/30 text-slate-300'
                }`}
              >
                <div className="mt-0.5 shrink-0">
                  {ans.isCorrect ? (
                    <CheckCircle2 className="w-5 h-5 text-teal-400" />
                  ) : (
                    <XCircle className="w-5 h-5 text-rose-400" />
                  )}
                </div>

                <div className="w-full">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase text-slate-500">
                      Pregunta #{idx + 1} • {ans.category}
                    </span>
                    <span className={`text-[10px] font-mono font-bold ${ans.isCorrect ? 'text-teal-400' : 'text-rose-400'}`}>
                      {ans.isCorrect ? 'Correcta' : 'Fallada'}
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-white mt-1">
                    {ans.questionText}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
