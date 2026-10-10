import React, { useState } from 'react';
import { usePWAInstall } from '../hooks/usePWAInstall';
import { PWAInstallModal } from './PWAInstallModal';
import { Smartphone, Download, Apple } from 'lucide-react';

interface PWAInstallButtonProps {
  variant?: 'nav' | 'banner' | 'compact';
}

export const PWAInstallButton: React.FC<PWAInstallButtonProps> = ({ variant = 'nav' }) => {
  const { isInstallable, isInstalled, isIOS, isAndroid, isMac } = usePWAInstall();
  const [showModal, setShowModal] = useState(false);

  // If already running in standalone PWA mode, don't show install CTA
  if (isInstalled) {
    return null;
  }

  if (variant === 'compact') {
    return (
      <>
        <button
          onClick={() => setShowModal(true)}
          className="p-2 rounded-xl bg-teal-500/10 hover:bg-teal-500/20 text-teal-300 border border-teal-500/30 transition flex items-center justify-center cursor-pointer"
          title="Instalar en Mac / Android / iOS"
          aria-label="Instalar aplicación"
        >
          {isMac ? <Apple className="w-4 h-4" /> : <Smartphone className="w-4 h-4" />}
        </button>

        <PWAInstallModal isOpen={showModal} onClose={() => setShowModal(false)} />
      </>
    );
  }

  if (variant === 'banner') {
    return (
      <>
        <div className="bg-gradient-to-r from-teal-950/80 via-slate-900 to-teal-950/80 border-b border-teal-500/20 px-4 py-2.5 text-xs text-slate-300 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-6 h-6 rounded-lg bg-teal-500/20 border border-teal-500/40 flex items-center justify-center text-teal-300 shrink-0">
              {isMac ? <Apple className="w-3.5 h-3.5" /> : <Smartphone className="w-3.5 h-3.5" />}
            </div>
            <p className="truncate text-xs">
              <strong className="text-white">Instala BicarbonatoLab:</strong> Disponible para <strong>{isMac ? 'Mac (Dock)' : 'Android & iOS'}</strong> con modo offline y pantalla completa.
            </p>
          </div>
          <button
            onClick={() => setShowModal(true)}
            className="shrink-0 px-3 py-1.5 rounded-lg bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow-md transition cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Instalar</span>
          </button>
        </div>

        <PWAInstallModal isOpen={showModal} onClose={() => setShowModal(false)} />
      </>
    );
  }

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="group relative px-3 py-1.5 rounded-xl bg-gradient-to-r from-teal-500/15 to-cyan-500/15 hover:from-teal-500/25 hover:to-cyan-500/25 text-teal-200 border border-teal-500/40 hover:border-teal-400/70 text-xs font-semibold flex items-center gap-2 shadow-sm transition-all cursor-pointer"
      >
        <div className="flex items-center text-teal-400">
          {isMac ? <Apple className="w-3.5 h-3.5" /> : <Smartphone className="w-3.5 h-3.5" />}
        </div>
        <span className="hidden sm:inline">Instalar App</span>
        <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-teal-500/20 text-teal-300 border border-teal-500/30">
          {isMac ? 'macOS' : isIOS ? 'iOS' : isAndroid ? 'Android' : 'Instalar'}
        </span>
      </button>

      <PWAInstallModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  );
};
