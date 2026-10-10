import React from 'react';
import { FlaskConical, Volume2, VolumeX, Sparkles, BookOpen, Atom, Bot, Award, Flame } from 'lucide-react';
import { playClickSound, setMuted, getMuted } from '../utils/audio';
import { PWAInstallButton } from './PWAInstallButton';

interface NavbarProps {
  currentTab: 'trivia' | 'lab' | 'molecule' | 'encyclopedia' | 'ai';
  setCurrentTab: (tab: 'trivia' | 'lab' | 'molecule' | 'encyclopedia' | 'ai') => void;
  totalScore: number;
  currentStreak: number;
}

export function Navbar({
  currentTab,
  setCurrentTab,
  totalScore,
  currentStreak
}: NavbarProps) {
  const [isAudioMuted, setIsAudioMuted] = React.useState(getMuted());

  const toggleMute = () => {
    const next = !isAudioMuted;
    setIsAudioMuted(next);
    setMuted(next);
    if (!next) {
      playClickSound();
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Brand */}
          <div
            onClick={() => {
              playClickSound();
              setCurrentTab('trivia');
            }}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-teal-500 to-cyan-400 text-slate-950 flex items-center justify-center font-bold shadow-lg shadow-teal-500/20 group-hover:scale-105 transition-transform">
              <FlaskConical className="w-6 h-6 stroke-[2.2]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-base md:text-lg text-white tracking-tight">
                  Bicarbonato<span className="text-teal-400">Lab</span>
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-teal-500/10 text-teal-300 border border-teal-500/30 font-bold">
                  NaHCO₃
                </span>
              </div>
              <p className="text-[11px] text-slate-400 font-mono hidden sm:block">
                Trivia & Simulación de Química Inorgánica
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-900/80 p-1 rounded-xl border border-slate-800">
            <button
              onClick={() => {
                playClickSound();
                setCurrentTab('trivia');
              }}
              title="Trivia Progresiva (Atajo: ⌘1)"
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition flex items-center gap-1.5 ${
                currentTab === 'trivia'
                  ? 'bg-teal-500 text-slate-950 font-bold shadow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Trivia</span>
              <kbd className="hidden lg:inline text-[9px] font-mono px-1 py-0.2 rounded bg-black/20 opacity-70">⌘1</kbd>
            </button>

            <button
              onClick={() => {
                playClickSound();
                setCurrentTab('lab');
              }}
              title="Laboratorio Virtual (Atajo: ⌘2)"
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition flex items-center gap-1.5 ${
                currentTab === 'lab'
                  ? 'bg-teal-500 text-slate-950 font-bold shadow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <FlaskConical className="w-3.5 h-3.5" />
              <span>Simulador</span>
              <kbd className="hidden lg:inline text-[9px] font-mono px-1 py-0.2 rounded bg-black/20 opacity-70">⌘2</kbd>
            </button>

            <button
              onClick={() => {
                playClickSound();
                setCurrentTab('molecule');
              }}
              title="Molécula 3D (Atajo: ⌘3)"
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition flex items-center gap-1.5 ${
                currentTab === 'molecule'
                  ? 'bg-teal-500 text-slate-950 font-bold shadow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <Atom className="w-3.5 h-3.5" />
              <span>Molécula 3D</span>
              <kbd className="hidden lg:inline text-[9px] font-mono px-1 py-0.2 rounded bg-black/20 opacity-70">⌘3</kbd>
            </button>

            <button
              onClick={() => {
                playClickSound();
                setCurrentTab('encyclopedia');
              }}
              title="Enciclopedia IUPAC (Atajo: ⌘4)"
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition flex items-center gap-1.5 ${
                currentTab === 'encyclopedia'
                  ? 'bg-teal-500 text-slate-950 font-bold shadow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Enciclopedia</span>
              <kbd className="hidden lg:inline text-[9px] font-mono px-1 py-0.2 rounded bg-black/20 opacity-70">⌘4</kbd>
            </button>

            <button
              onClick={() => {
                playClickSound();
                setCurrentTab('ai');
              }}
              title="Consultor IA (Atajo: ⌘5)"
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition flex items-center gap-1.5 ${
                currentTab === 'ai'
                  ? 'bg-teal-500 text-slate-950 font-bold shadow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <Bot className="w-3.5 h-3.5" />
              <span>Consultor IA</span>
              <kbd className="hidden lg:inline text-[9px] font-mono px-1 py-0.2 rounded bg-black/20 opacity-70">⌘5</kbd>
            </button>
          </nav>

          {/* Right Controls: Install + Audio + Score Pill */}
          <div className="flex items-center gap-2 sm:gap-3">
            <PWAInstallButton variant="nav" />

            {totalScore > 0 && (
              <div className="hidden sm:flex items-center gap-2 bg-slate-900 px-3 py-1.5 rounded-xl border border-slate-800 text-xs font-mono">
                <span className="text-teal-400 flex items-center gap-1 font-bold">
                  <Award className="w-3.5 h-3.5" /> {totalScore} pts
                </span>
                {currentStreak > 1 && (
                  <span className="text-amber-400 flex items-center gap-1 font-bold border-l border-slate-700 pl-2">
                    <Flame className="w-3.5 h-3.5 fill-amber-400" /> x{currentStreak}
                  </span>
                )}
              </div>
            )}

            <button
              onClick={toggleMute}
              title={isAudioMuted ? 'Activar sonido' : 'Silenciar sonido'}
              className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition"
            >
              {isAudioMuted ? <VolumeX className="w-4 h-4 text-rose-400" /> : <Volume2 className="w-4 h-4 text-teal-400" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Row */}
        <div className="flex md:hidden items-center justify-between py-2 border-t border-slate-850 overflow-x-auto gap-2">
          <button
            onClick={() => setCurrentTab('trivia')}
            className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold whitespace-nowrap ${
              currentTab === 'trivia' ? 'bg-teal-500 text-slate-950 font-bold' : 'text-slate-400'
            }`}
          >
            Trivia
          </button>
          <button
            onClick={() => setCurrentTab('lab')}
            className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold whitespace-nowrap ${
              currentTab === 'lab' ? 'bg-teal-500 text-slate-950 font-bold' : 'text-slate-400'
            }`}
          >
            Laboratorio
          </button>
          <button
            onClick={() => setCurrentTab('molecule')}
            className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold whitespace-nowrap ${
              currentTab === 'molecule' ? 'bg-teal-500 text-slate-950 font-bold' : 'text-slate-400'
            }`}
          >
            Molécula
          </button>
          <button
            onClick={() => setCurrentTab('encyclopedia')}
            className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold whitespace-nowrap ${
              currentTab === 'encyclopedia' ? 'bg-teal-500 text-slate-950 font-bold' : 'text-slate-400'
            }`}
          >
            Enciclopedia
          </button>
          <button
            onClick={() => setCurrentTab('ai')}
            className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold whitespace-nowrap ${
              currentTab === 'ai' ? 'bg-teal-500 text-slate-950 font-bold' : 'text-slate-400'
            }`}
          >
            Consultor IA
          </button>
        </div>
      </div>
    </header>
  );
}
