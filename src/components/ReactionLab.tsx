import React, { useState, useEffect } from 'react';
import { FlaskConical, Flame, Thermometer, Droplets, Play, RotateCcw, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';
import { REACTION_SIMULATIONS } from '../data/reactionSimulations';
import { ReactionSimulation } from '../types/trivia';
import { playEffervescenceSound, playClickSound } from '../utils/audio';

export function ReactionLab() {
  const [selectedReaction, setSelectedReaction] = useState<ReactionSimulation>(REACTION_SIMULATIONS[0]);
  const [isReacting, setIsReacting] = useState(false);
  const [reactionProgress, setReactionProgress] = useState(0);
  const [hasCompleted, setHasCompleted] = useState(false);

  // Current animated values
  const currentPh = isReacting || hasCompleted
    ? selectedReaction.initialPh + (selectedReaction.finalPh - selectedReaction.initialPh) * (reactionProgress / 100)
    : selectedReaction.initialPh;

  const currentTempChange = isReacting || hasCompleted
    ? selectedReaction.deltaTemp * (reactionProgress / 100)
    : 0;

  const triggerReaction = () => {
    playClickSound();
    setIsReacting(true);
    setReactionProgress(0);
    setHasCompleted(false);

    if (selectedReaction.effervescenceIntensity !== 'none') {
      playEffervescenceSound(2.2);
    }

    const duration = 2400; // ms
    const stepTime = 40;
    const steps = duration / stepTime;
    let step = 0;

    const interval = setInterval(() => {
      step++;
      const prog = Math.min(100, Math.round((step / steps) * 100));
      setReactionProgress(prog);

      if (step >= steps) {
        clearInterval(interval);
        setIsReacting(false);
        setHasCompleted(true);
      }
    }, stepTime);
  };

  const resetReaction = () => {
    playClickSound();
    setIsReacting(false);
    setReactionProgress(0);
    setHasCompleted(false);
  };

  return (
    <div className="bg-slate-900/80 backdrop-blur-md rounded-2xl border border-slate-800 p-6 shadow-2xl">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2 text-teal-400 font-mono text-xs uppercase tracking-wider">
            <FlaskConical className="w-4 h-4" />
            <span>Simulador de Reactividad In Situ</span>
          </div>
          <h3 className="text-2xl font-bold text-white mt-1">Laboratorio Virtual de NaHCO₃</h3>
          <p className="text-sm text-slate-400">
            Mezcla bicarbonato con reactivos en tiempo real, monitorea la termodinámica, el pH y la efervescencia estequiométrica.
          </p>
        </div>

        {/* Reaction selector pills */}
        <div className="flex flex-wrap gap-2">
          {REACTION_SIMULATIONS.map((rx) => (
            <button
              key={rx.id}
              onClick={() => {
                playClickSound();
                setSelectedReaction(rx);
                setIsReacting(false);
                setReactionProgress(0);
                setHasCompleted(false);
              }}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all border ${
                selectedReaction.id === rx.id
                  ? 'bg-teal-500 text-slate-950 border-teal-400 font-bold shadow-md shadow-teal-500/20'
                  : 'bg-slate-950/70 text-slate-300 border-slate-800 hover:border-slate-700 hover:text-white'
              }`}
            >
              {rx.reactantBName}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6">
        {/* Left: Test Tube / Beaker Animation Canvas */}
        <div className="lg:col-span-6 bg-slate-950/90 rounded-xl border border-slate-800 p-6 flex flex-col items-center justify-between relative overflow-hidden min-h-[380px]">
          {/* Subtle background glow */}
          <div className={`absolute inset-0 transition-opacity duration-700 pointer-events-none ${
            isReacting ? 'opacity-20' : 'opacity-5'
          } ${
            selectedReaction.thermodynamics === 'Endotérmica' 
              ? 'bg-cyan-500' 
              : selectedReaction.thermodynamics === 'Termólisis' 
                ? 'bg-amber-500' 
                : 'bg-teal-500'
          }`} />

          {/* Header of test chamber */}
          <div className="w-full flex items-center justify-between z-10 text-xs font-mono text-slate-400 border-b border-slate-800/80 pb-3">
            <span className="flex items-center gap-1.5 text-teal-400">
              <span className={`w-2 h-2 rounded-full ${isReacting ? 'bg-amber-400 animate-ping' : 'bg-teal-400'}`} />
              {isReacting ? 'REACCIÓN EN CURSO...' : hasCompleted ? 'EQUILIBRIO ALCANZADO' : 'SISTEMA EN REPOSO'}
            </span>
            <span className="text-slate-400">{selectedReaction.category}</span>
          </div>

          {/* Central Beaker / Flask Visualizer */}
          <div className="relative my-4 flex flex-col items-center justify-center">
            {/* Emitted Gas Stream (if reacting) */}
            {(isReacting || hasCompleted) && selectedReaction.gasProduced !== 'Ninguno' && (
              <div className="absolute -top-12 flex flex-col items-center gap-1 animate-bounce">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-teal-500/20 text-teal-300 border border-teal-500/40">
                  {selectedReaction.gasProduced} ↑
                </span>
                <div className="flex gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-teal-400/60 animate-ping" />
                  <div className="w-2 h-2 rounded-full bg-teal-300/40 animate-ping delay-100" />
                </div>
              </div>
            )}

            {/* Glass Beaker SVG */}
            <div className="relative w-44 h-56 border-4 border-t-0 border-slate-500/40 rounded-b-3xl bg-slate-900/40 backdrop-blur-sm overflow-hidden flex flex-col justify-end p-2 shadow-inner">
              {/* Beaker Measurement ticks */}
              <div className="absolute left-2 top-6 flex flex-col gap-5 text-[8px] font-mono text-slate-600 select-none">
                <span>- 150ml</span>
                <span>- 100ml</span>
                <span>- 50ml</span>
                <span>- 20ml</span>
              </div>

              {/* Heat burner icon if thermal */}
              {selectedReaction.thermodynamics === 'Termólisis' && (
                <div className="absolute bottom-1 right-2 text-amber-500/80">
                  <Flame className="w-6 h-6 animate-pulse" />
                </div>
              )}

              {/* Solution Fluid */}
              <div
                className={`w-full rounded-b-2xl transition-all duration-700 relative overflow-hidden ${
                  selectedReaction.id === 'rx-calcium' && hasCompleted
                    ? 'bg-slate-200/90 shadow-lg' // White precipitate
                    : isReacting
                      ? 'bg-teal-500/50'
                      : 'bg-cyan-500/30'
                }`}
                style={{
                  height: isReacting ? '72%' : hasCompleted ? '68%' : '45%'
                }}
              >
                {/* Precipitate layer at bottom for Calcium */}
                {selectedReaction.id === 'rx-calcium' && hasCompleted && (
                  <div className="absolute bottom-0 inset-x-0 h-5 bg-white border-t border-slate-300 flex items-center justify-center">
                    <span className="text-[8px] font-mono font-bold text-slate-800">CaCO₃↓ (Calcita)</span>
                  </div>
                )}

                {/* Animated Effervescence Bubbles */}
                {isReacting && (
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute bottom-2 left-4 w-3 h-3 rounded-full bg-white/80 animate-bubble" style={{ animationDelay: '0s' }} />
                    <div className="absolute bottom-1 left-12 w-2 h-2 rounded-full bg-white/70 animate-bubble" style={{ animationDelay: '0.4s' }} />
                    <div className="absolute bottom-3 left-20 w-4 h-4 rounded-full bg-white/90 animate-bubble" style={{ animationDelay: '0.8s' }} />
                    <div className="absolute bottom-2 left-28 w-2.5 h-2.5 rounded-full bg-white/60 animate-bubble" style={{ animationDelay: '0.2s' }} />
                    <div className="absolute bottom-4 left-36 w-3 h-3 rounded-full bg-white/80 animate-bubble" style={{ animationDelay: '0.6s' }} />
                  </div>
                )}
              </div>
            </div>

            {/* Bunsen Burner base if heat */}
            {selectedReaction.thermodynamics === 'Termólisis' && (
              <div className="w-32 h-4 bg-slate-700 rounded-md mt-1 flex items-center justify-center border border-slate-600">
                <span className="text-[9px] font-mono text-amber-300 flex items-center gap-1">
                  <Flame className="w-3 h-3" /> Malla de Asbesto + Mechero
                </span>
              </div>
            )}
          </div>

          {/* Interactive controls */}
          <div className="w-full flex items-center justify-center gap-3 pt-3 border-t border-slate-800/80">
            <button
              onClick={triggerReaction}
              disabled={isReacting}
              className={`px-5 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 transition shadow-lg ${
                isReacting
                  ? 'bg-slate-800 text-slate-500 cursor-not-allowed'
                  : 'bg-teal-500 hover:bg-teal-400 text-slate-950 shadow-teal-500/25 active:scale-95'
              }`}
            >
              <Play className="w-4 h-4 fill-current" />
              <span>{hasCompleted ? 'Repetir Reacción' : 'Mezclar Reactivos'}</span>
            </button>

            {(isReacting || hasCompleted) && (
              <button
                onClick={resetReaction}
                className="px-3.5 py-2.5 rounded-xl text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 text-sm font-semibold transition flex items-center gap-1.5"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Limpiar</span>
              </button>
            )}
          </div>
        </div>

        {/* Right: Live Chemical Instrumentation & Data */}
        <div className="lg:col-span-6 flex flex-col gap-4">
          {/* Reaction Header Box */}
          <div className="bg-slate-950/80 rounded-xl border border-slate-800 p-4">
            <span className="text-xs font-mono text-teal-400 font-semibold">{selectedReaction.name}</span>
            <div className="mt-2 p-3 bg-slate-900 rounded-lg border border-slate-800 text-teal-300 font-mono text-sm leading-relaxed overflow-x-auto">
              <code>{selectedReaction.balancedEquation}</code>
            </div>
            <p className="text-xs text-slate-400 mt-2">
              {selectedReaction.description}
            </p>
          </div>

          {/* Live Instrumentation Gauges (pH & Temp) */}
          <div className="grid grid-cols-2 gap-4">
            {/* pH Meter */}
            <div className="bg-slate-950/80 rounded-xl border border-slate-800 p-4 flex flex-col justify-between">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Droplets className="w-3.5 h-3.5 text-cyan-400" />
                  Sensor de pH
                </span>
                <span className="text-[10px] text-slate-500">25 °C</span>
              </div>
              <div className="my-2">
                <div className="text-3xl font-extrabold font-mono text-white">
                  {currentPh.toFixed(2)}
                </div>
                <div className="text-xs font-medium mt-0.5">
                  {currentPh < 6.8 ? (
                    <span className="text-rose-400">Medio Ácido</span>
                  ) : currentPh > 8.0 ? (
                    <span className="text-blue-400">Medio Alcalino</span>
                  ) : (
                    <span className="text-teal-400">Neutro / Amortiguado</span>
                  )}
                </div>
              </div>
              {/* pH Bar */}
              <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden flex">
                <div 
                  className="h-full bg-gradient-to-r from-red-500 via-emerald-400 to-indigo-500 transition-all duration-300"
                  style={{ width: `${(currentPh / 14) * 100}%` }}
                />
              </div>
            </div>

            {/* Thermometer Gauge */}
            <div className="bg-slate-950/80 rounded-xl border border-slate-800 p-4 flex flex-col justify-between">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Thermometer className="w-3.5 h-3.5 text-amber-400" />
                  Termodinámica
                </span>
                <span className="text-[10px] text-slate-500">ΔT</span>
              </div>
              <div className="my-2">
                <div className={`text-3xl font-extrabold font-mono ${
                  currentTempChange < 0 
                    ? 'text-cyan-400' 
                    : currentTempChange > 0 
                      ? 'text-amber-400' 
                      : 'text-slate-300'
                }`}>
                  {currentTempChange > 0 ? `+${currentTempChange.toFixed(1)}` : currentTempChange.toFixed(1)} °C
                </div>
                <div className="text-xs font-medium text-slate-300 mt-0.5">
                  {selectedReaction.thermodynamics}
                </div>
              </div>
              <div className="text-[10px] text-slate-400">
                {selectedReaction.thermodynamics === 'Endotérmica' 
                  ? 'Absorbe calor del entorno' 
                  : 'Requiere aporte térmico externo'}
              </div>
            </div>
          </div>

          {/* Observations & Laboratory Facts */}
          <div className="bg-slate-950/80 rounded-xl border border-slate-800 p-4">
            <h4 className="text-xs font-mono uppercase text-slate-400 font-bold mb-2 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-teal-400" />
              Observaciones Fenomenológicas
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-300">
              {selectedReaction.observations.map((obs, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-teal-400 mt-0.5">•</span>
                  <span>{obs}</span>
                </li>
              ))}
            </ul>

            <div className="mt-3 pt-3 border-t border-slate-800/80 text-[11px] text-slate-400 flex items-start gap-2">
              <span className="font-semibold text-teal-300 whitespace-nowrap">Aplicación Real:</span>
              <span>{selectedReaction.industrialOrDailySignificance}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
