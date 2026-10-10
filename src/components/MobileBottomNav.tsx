import React, { useState } from 'react';
import { Sparkles, FlaskConical, Atom, BookOpen, Bot, Smartphone } from 'lucide-react';
import { playClickSound, triggerHaptic } from '../utils/audio';
import { usePWAInstall } from '../hooks/usePWAInstall';
import { PWAInstallModal } from './PWAInstallModal';

interface MobileBottomNavProps {
  currentTab: 'trivia' | 'lab' | 'molecule' | 'encyclopedia' | 'ai';
  setCurrentTab: (tab: 'trivia' | 'lab' | 'molecule' | 'encyclopedia' | 'ai') => void;
  onTriviaClick?: () => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  currentTab,
  setCurrentTab,
  onTriviaClick
}) => {
  const { isInstalled } = usePWAInstall();
  const [showInstallModal, setShowInstallModal] = useState(false);

  const handleTabChange = (tab: 'trivia' | 'lab' | 'molecule' | 'encyclopedia' | 'ai') => {
    triggerHaptic(15);
    playClickSound();
    setCurrentTab(tab);
    if (tab === 'trivia' && onTriviaClick) {
      onTriviaClick();
    }
  };

  return (
    <>
      <nav 
        aria-label="Navegación móvil"
        className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-slate-950/92 backdrop-blur-xl border-t border-slate-800/80 px-2 pt-2 pb-[max(0.6rem,env(safe-area-inset-bottom))] shadow-2xl transition-all"
      >
        <div className="flex items-center justify-around max-w-lg mx-auto">
          <button
            onClick={() => handleTabChange('trivia')}
            className={`flex flex-col items-center justify-center py-1 px-2.5 rounded-xl transition-all ${
              currentTab === 'trivia'
                ? 'text-teal-400 font-bold scale-105'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <div className={`p-1 rounded-lg ${currentTab === 'trivia' ? 'bg-teal-500/20' : ''}`}>
              <Sparkles className="w-5 h-5" />
            </div>
            <span className="text-[10px] mt-0.5 tracking-tight">Trivia</span>
          </button>

          <button
            onClick={() => handleTabChange('lab')}
            className={`flex flex-col items-center justify-center py-1 px-2.5 rounded-xl transition-all ${
              currentTab === 'lab'
                ? 'text-teal-400 font-bold scale-105'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <div className={`p-1 rounded-lg ${currentTab === 'lab' ? 'bg-teal-500/20' : ''}`}>
              <FlaskConical className="w-5 h-5" />
            </div>
            <span className="text-[10px] mt-0.5 tracking-tight">Simulador</span>
          </button>

          <button
            onClick={() => handleTabChange('molecule')}
            className={`flex flex-col items-center justify-center py-1 px-2.5 rounded-xl transition-all ${
              currentTab === 'molecule'
                ? 'text-teal-400 font-bold scale-105'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <div className={`p-1 rounded-lg ${currentTab === 'molecule' ? 'bg-teal-500/20' : ''}`}>
              <Atom className="w-5 h-5" />
            </div>
            <span className="text-[10px] mt-0.5 tracking-tight">Molécula</span>
          </button>

          <button
            onClick={() => handleTabChange('encyclopedia')}
            className={`flex flex-col items-center justify-center py-1 px-2.5 rounded-xl transition-all ${
              currentTab === 'encyclopedia'
                ? 'text-teal-400 font-bold scale-105'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <div className={`p-1 rounded-lg ${currentTab === 'encyclopedia' ? 'bg-teal-500/20' : ''}`}>
              <BookOpen className="w-5 h-5" />
            </div>
            <span className="text-[10px] mt-0.5 tracking-tight">Datos</span>
          </button>

          <button
            onClick={() => handleTabChange('ai')}
            className={`flex flex-col items-center justify-center py-1 px-2.5 rounded-xl transition-all ${
              currentTab === 'ai'
                ? 'text-teal-400 font-bold scale-105'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <div className={`p-1 rounded-lg ${currentTab === 'ai' ? 'bg-teal-500/20' : ''}`}>
              <Bot className="w-5 h-5" />
            </div>
            <span className="text-[10px] mt-0.5 tracking-tight">IA</span>
          </button>

          {!isInstalled && (
            <button
              onClick={() => {
                triggerHaptic(20);
                setShowInstallModal(true);
              }}
              className="flex flex-col items-center justify-center py-1 px-2 rounded-xl text-teal-300 hover:text-teal-200 transition-all"
              title="Instalar en Android o iOS"
            >
              <div className="p-1 rounded-lg bg-teal-500/20 border border-teal-500/30">
                <Smartphone className="w-5 h-5" />
              </div>
              <span className="text-[10px] mt-0.5 font-bold tracking-tight">Instalar</span>
            </button>
          )}
        </div>
      </nav>

      <PWAInstallModal isOpen={showInstallModal} onClose={() => setShowInstallModal(false)} />
    </>
  );
};
