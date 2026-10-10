import React, { useState, useEffect } from 'react';
import { DifficultyLevel } from './types/trivia';
import { Navbar } from './components/Navbar';
import { LevelSelector } from './components/LevelSelector';
import { TriviaGame } from './components/TriviaGame';
import { ReactionLab } from './components/ReactionLab';
import { MoleculeViewer } from './components/MoleculeViewer';
import { EncyclopediaCompendium } from './components/EncyclopediaCompendium';
import { AskChemistAI } from './components/AskChemistAI';
import { MobileBottomNav } from './components/MobileBottomNav';
import { OfflineIndicator } from './components/OfflineIndicator';
import { PWAInstallButton } from './components/PWAInstallButton';
import { FlaskConical, Atom, Sparkles, BookOpen, HeartHandshake } from 'lucide-react';

export default function App() {
  const [currentTab, setCurrentTab] = useState<'trivia' | 'lab' | 'molecule' | 'encyclopedia' | 'ai'>('trivia');
  const [triviaView, setTriviaView] = useState<'selector' | 'playing'>('selector');
  const [selectedLevel, setSelectedLevel] = useState<DifficultyLevel | 'all'>('novice');
  const [timedMode, setTimedMode] = useState(false);

  // Persistence of progress
  const [completedLevels, setCompletedLevels] = useState<DifficultyLevel[]>(() => {
    try {
      const saved = localStorage.getItem('bicarbonato_completed_levels');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [bestScores, setBestScores] = useState<Record<string, number>>(() => {
    try {
      const saved = localStorage.getItem('bicarbonato_best_scores');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const [totalScore, setTotalScore] = useState<number>(() => {
    try {
      const saved = localStorage.getItem('bicarbonato_total_score');
      return saved ? Number(saved) : 0;
    } catch {
      return 0;
    }
  });

  const [currentStreak, setCurrentStreak] = useState(0);

  const handleStartLevel = (lvl: DifficultyLevel | 'all') => {
    setSelectedLevel(lvl);
    setTriviaView('playing');
  };

  const handleExitTrivia = () => {
    setTriviaView('selector');
  };

  const handleLevelComplete = (lvl: DifficultyLevel, score: number) => {
    setCompletedLevels((prev) => {
      const updated = prev.includes(lvl) ? prev : [...prev, lvl];
      localStorage.setItem('bicarbonato_completed_levels', JSON.stringify(updated));
      return updated;
    });

    setBestScores((prev) => {
      const currentBest = prev[lvl] || 0;
      const updated = { ...prev, [lvl]: Math.max(currentBest, score) };
      localStorage.setItem('bicarbonato_best_scores', JSON.stringify(updated));
      return updated;
    });

    setTotalScore((prev) => {
      const updated = prev + score;
      localStorage.setItem('bicarbonato_total_score', String(updated));
      return updated;
    });
  };

  // Global Mac / Desktop keyboard navigation shortcuts (⌘1..5 or Ctrl1..5)
  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey) {
        if (e.key === '1') {
          e.preventDefault();
          setCurrentTab('trivia');
          setTriviaView('selector');
        } else if (e.key === '2') {
          e.preventDefault();
          setCurrentTab('lab');
        } else if (e.key === '3') {
          e.preventDefault();
          setCurrentTab('molecule');
        } else if (e.key === '4') {
          e.preventDefault();
          setCurrentTab('encyclopedia');
        } else if (e.key === '5') {
          e.preventDefault();
          setCurrentTab('ai');
        }
      }
    };

    window.addEventListener('keydown', handleGlobalKeyDown);
    return () => window.removeEventListener('keydown', handleGlobalKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-teal-500/30 selection:text-teal-200 antialiased">
      {/* Offline Status Toast */}
      <OfflineIndicator />

      {/* Top Mobile/Desktop Install Promotion Banner */}
      <PWAInstallButton variant="banner" />

      {/* Top Navigation */}
      <Navbar
        currentTab={currentTab}
        setCurrentTab={(tab) => {
          setCurrentTab(tab);
          if (tab === 'trivia') {
            setTriviaView('selector');
          }
        }}
        totalScore={totalScore}
        currentStreak={currentStreak}
      />

      {/* Main Container - Extra bottom padding on mobile for MobileBottomNav */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8 pb-28 md:pb-12">
        {currentTab === 'trivia' && (
          <div>
            {triviaView === 'selector' ? (
              <LevelSelector
                onStartLevel={handleStartLevel}
                timedMode={timedMode}
                setTimedMode={setTimedMode}
                completedLevels={completedLevels}
                bestScores={bestScores}
              />
            ) : (
              <TriviaGame
                selectedLevel={selectedLevel}
                timedMode={timedMode}
                onExit={handleExitTrivia}
                onLevelComplete={handleLevelComplete}
              />
            )}
          </div>
        )}

        {currentTab === 'lab' && (
          <div className="space-y-6">
            <ReactionLab />
          </div>
        )}

        {currentTab === 'molecule' && (
          <div className="space-y-6">
            <MoleculeViewer />
          </div>
        )}

        {currentTab === 'encyclopedia' && (
          <div className="space-y-6">
            <EncyclopediaCompendium />
          </div>
        )}

        {currentTab === 'ai' && (
          <div className="space-y-6">
            <AskChemistAI />
          </div>
        )}
      </main>

      {/* Mobile Bottom Navigation Bar (Android & iOS) */}
      <MobileBottomNav
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        onTriviaClick={() => setTriviaView('selector')}
      />

      {/* Footer */}
      <footer className="border-t border-slate-800/80 bg-slate-950/80 py-8 mb-16 md:mb-0 text-xs text-slate-500 font-mono">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <FlaskConical className="w-4 h-4 text-teal-400" />
            <span className="text-slate-300 font-bold">BicarbonatoLab</span>
            <span>• NaHCO₃ (CAS 144-55-8)</span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <span>Masa Molar: 84.007 g/mol</span>
            <span>•</span>
            <span>pH: ~8.34</span>
            <span>•</span>
            <span>Sistema: Monoclínico</span>
          </div>

          <div className="text-slate-400">
            Diseñado para la divulgación científica y aprendizaje activo.
          </div>
        </div>
      </footer>
    </div>
  );
}
