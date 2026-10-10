import React from 'react';
import { DifficultyLevel } from '../types/trivia';
import { Sparkles, FlaskConical, Factory, HeartPulse, Clock, PlayCircle, Trophy, CheckCircle } from 'lucide-react';
import { playClickSound } from '../utils/audio';

interface LevelSelectorProps {
  onStartLevel: (level: DifficultyLevel | 'all') => void;
  timedMode: boolean;
  setTimedMode: (enabled: boolean) => void;
  completedLevels: DifficultyLevel[];
  bestScores: Record<string, number>;
}

export function LevelSelector({
  onStartLevel,
  timedMode,
  setTimedMode,
  completedLevels,
  bestScores
}: LevelSelectorProps) {
  const levels: Array<{
    id: DifficultyLevel;
    number: number;
    title: string;
    subtitle: string;
    description: string;
    topics: string[];
    icon: React.ReactNode;
    color: string;
    border: string;
    badgeColor: string;
    points: string;
  }> = [
    {
      id: 'novice',
      number: 1,
      title: 'Nivel 1: Cotidiano y Fundamentos',
      subtitle: 'Novato de Laboratorio',
      description: 'Aprende los fundamentos moleculares en la cocina, extintores caseros, pH suave, acidez estomacal y efervescencia con vinagre.',
      topics: ['Polvo de Hornear', 'Antiácidos', 'pH ~8.3', 'Desodorización', 'Extintores'],
      icon: <Sparkles className="w-5 h-5" />,
      color: 'from-emerald-950/40 to-slate-900',
      border: 'border-emerald-500/30 hover:border-emerald-500/70',
      badgeColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
      points: '100 pts / preg'
    },
    {
      id: 'intermediate',
      number: 2,
      title: 'Nivel 2: Propiedades Químicas y Reacciones',
      subtitle: 'Químico Analítico',
      description: 'Profundiza en la estequiometría de descomposición térmica, carácter anfolito, red monoclínica y volumetría de doble indicador.',
      topics: ['Estequiometría 2:1', 'Anfolito / Anfótero', 'Dímeros de H', 'Termodinámica ΔH', 'Warder'],
      icon: <FlaskConical className="w-5 h-5" />,
      color: 'from-cyan-950/40 to-slate-900',
      border: 'border-cyan-500/30 hover:border-cyan-500/70',
      badgeColor: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30',
      points: '150-170 pts / preg'
    },
    {
      id: 'advanced',
      number: 3,
      title: 'Nivel 3: Síntesis Industrial y Proceso Solvay',
      subtitle: 'Ingeniero Químico',
      description: 'Domina la síntesis industrial masiva: salmuera amoniacal, reciclaje con cal apagada, minería de trona en Wyoming y captura de CO₂.',
      topics: ['Torre Solvay', 'Reciclaje de NH₃', 'Método Leblanc', 'Trona de Wyoming', 'Depuración DSI'],
      icon: <Factory className="w-5 h-5" />,
      color: 'from-amber-950/40 to-slate-900',
      border: 'border-amber-500/30 hover:border-amber-500/70',
      badgeColor: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
      points: '200-220 pts / preg'
    },
    {
      id: 'expert',
      number: 4,
      title: 'Nivel 4: Bioquímica, Medicina y Sistemas Buffer',
      subtitle: 'Maestro Bioquímico',
      description: 'Fisiología de máxima exigencia: sistema amortiguador Henderson-Hasselbalch, anhidrasa carbónica Zn²⁺, acidosis y sobrecarga de bicarbonato.',
      topics: ['Buffer 20:1', 'Anhidrasa Carbónica', 'Desplazamiento Cl⁻', 'Reabsorción Renal', 'Ergogenia'],
      icon: <HeartPulse className="w-5 h-5" />,
      color: 'from-purple-950/40 to-slate-900',
      border: 'border-purple-500/30 hover:border-purple-500/70',
      badgeColor: 'bg-purple-500/10 text-purple-400 border-purple-500/30',
      points: '300-330 pts / preg'
    }
  ];

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Hero Banner with Progressive Campaign Option */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-teal-950/60 via-slate-900 to-slate-950 border border-teal-500/30 p-8 shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 text-teal-300 border border-teal-500/30 text-xs font-mono mb-4">
            <FlaskConical className="w-3.5 h-3.5" />
            <span>Compuesto Inorgánico NaHCO₃ • Masa Molar 84.007 g/mol</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Trivia de Química Inorgánica:<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-300 to-emerald-400">
              Bicarbonato de Sodio
            </span>
          </h2>

          <p className="mt-3 text-slate-300 text-sm md:text-base leading-relaxed">
            Pon a prueba tu conocimiento científico con 4 niveles de dificultad progresivos, explicaciones termodinámicas paso a paso, ecuaciones balanceadas y fundamentos de fisiología molecular.
          </p>

          {/* Action Row */}
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <button
              onClick={() => {
                playClickSound();
                onStartLevel('all');
              }}
              className="px-6 py-3.5 rounded-xl bg-teal-500 hover:bg-teal-400 active:scale-95 text-slate-950 font-bold text-sm flex items-center gap-2.5 transition shadow-lg shadow-teal-500/25"
            >
              <PlayCircle className="w-5 h-5 fill-current" />
              <span>Iniciar Campaña Completa (Niveles 1 al 4)</span>
            </button>

            {/* Timer Toggle */}
            <div className="flex items-center gap-2 bg-slate-950/80 px-4 py-2.5 rounded-xl border border-slate-800">
              <Clock className={`w-4 h-4 ${timedMode ? 'text-teal-400' : 'text-slate-500'}`} />
              <span className="text-xs font-mono text-slate-300">Contrarreloj (30s)</span>
              <button
                type="button"
                onClick={() => {
                  playClickSound();
                  setTimedMode(!timedMode);
                }}
                className={`ml-2 w-10 h-6 flex items-center rounded-full p-1 transition-colors ${
                  timedMode ? 'bg-teal-500' : 'bg-slate-800'
                }`}
              >
                <div
                  className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${
                    timedMode ? 'translate-x-4' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Progressive Levels Grid */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <span>O Elige un Nivel Específico</span>
            <span className="text-xs font-mono text-slate-400 font-normal">
              (Dificultad Progresiva)
            </span>
          </h3>
          <span className="text-xs font-mono text-teal-400">9 Preguntas por nivel</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {levels.map((lvl) => {
            const isCompleted = completedLevels.includes(lvl.id);
            const best = bestScores[lvl.id] || 0;

            return (
              <div
                key={lvl.id}
                className={`rounded-2xl border bg-gradient-to-b ${lvl.color} ${lvl.border} p-6 transition-all duration-300 flex flex-col justify-between shadow-xl relative overflow-hidden group`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className="p-2 rounded-xl bg-slate-950/80 border border-slate-800 text-teal-400">
                        {lvl.icon}
                      </div>
                      <div>
                        <span className={`text-[11px] font-mono px-2.5 py-0.5 rounded-full border ${lvl.badgeColor} font-bold`}>
                          {lvl.subtitle}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      {isCompleted && (
                        <span className="flex items-center gap-1 text-[11px] font-mono text-teal-400 bg-teal-500/10 px-2 py-0.5 rounded-full border border-teal-500/20">
                          <CheckCircle className="w-3 h-3" /> Completado
                        </span>
                      )}
                      <span className="text-xs font-mono text-slate-400">{lvl.points}</span>
                    </div>
                  </div>

                  <h4 className="text-lg font-bold text-white group-hover:text-teal-300 transition-colors">
                    {lvl.title}
                  </h4>

                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                    {lvl.description}
                  </p>

                  {/* Topic Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {lvl.topics.map((t, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-mono bg-slate-950/70 text-slate-300 px-2 py-0.5 rounded border border-slate-800/80"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <div className="text-xs font-mono text-slate-400 flex items-center gap-1">
                    <Trophy className="w-3.5 h-3.5 text-amber-400" />
                    <span>Mejor: <strong className="text-slate-200">{best} pts</strong></span>
                  </div>

                  <button
                    onClick={() => {
                      playClickSound();
                      onStartLevel(lvl.id);
                    }}
                    className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-teal-500 hover:text-slate-950 text-slate-200 font-bold text-xs transition border border-slate-700 hover:border-teal-400 flex items-center gap-1.5"
                  >
                    <span>Jugar Nivel {lvl.number}</span>
                    <PlayCircle className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
