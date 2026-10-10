import React, { useState } from 'react';
import { usePWAInstall } from '../hooks/usePWAInstall';
import { 
  X, 
  Smartphone, 
  Download, 
  Share, 
  PlusSquare, 
  CheckCircle2, 
  WifiOff, 
  Zap, 
  ShieldCheck, 
  Sparkles,
  Apple,
  Layers,
  Laptop,
  Command
} from 'lucide-react';

interface PWAInstallModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PWAInstallModal: React.FC<PWAInstallModalProps> = ({ isOpen, onClose }) => {
  const { isInstallable, isInstalled, isIOS, isAndroid, isMac, install } = usePWAInstall();
  const [activeTab, setActiveTab] = useState<'mac' | 'android' | 'ios'>(
    isMac ? 'mac' : isIOS ? 'ios' : 'android'
  );
  const [installSuccess, setInstallSuccess] = useState(false);

  if (!isOpen) return null;

  const handleInstallClick = async () => {
    const success = await install();
    if (success) {
      setInstallSuccess(true);
      setTimeout(() => {
        onClose();
      }, 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fadeIn">
      <div 
        className="w-full max-w-lg bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="relative bg-gradient-to-r from-slate-950 via-teal-950/70 to-slate-950 p-6 border-b border-slate-800">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800/80 transition cursor-pointer"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-4">
            <div className="relative">
              <img 
                src="/icon.svg" 
                alt="BicarbonatoLab Icon" 
                className="w-14 h-14 rounded-2xl shadow-lg border border-teal-500/40 p-1 bg-slate-950" 
              />
              <span className="absolute -bottom-1 -right-1 px-1.5 py-0.5 rounded-full bg-teal-500 text-[10px] font-bold text-slate-950">
                PWA
              </span>
            </div>
            <div>
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                BicarbonatoLab App
                <span className="text-xs font-mono font-normal px-2 py-0.5 rounded-full bg-teal-500/20 text-teal-300 border border-teal-500/30">
                  Mac • iOS • Android
                </span>
              </h2>
              <p className="text-xs text-slate-400 mt-0.5">
                Instalación nativa directa • Funciona 100% Offline
              </p>
            </div>
          </div>

          {/* Quick Features Row */}
          <div className="grid grid-cols-3 gap-2 mt-4 pt-3 border-t border-slate-800/60 text-[11px] text-slate-300 font-mono">
            <div className="flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-teal-400 shrink-0" />
              <span>Carga instantánea</span>
            </div>
            <div className="flex items-center gap-1.5">
              <WifiOff className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              <span>Modo Offline</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Ventana Nativa</span>
            </div>
          </div>
        </div>

        {/* Platform Switcher Tabs */}
        <div className="flex border-b border-slate-800 bg-slate-950/60 p-1.5 gap-1.5">
          <button
            onClick={() => setActiveTab('mac')}
            className={`flex-1 py-2 px-2.5 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
              activeTab === 'mac'
                ? 'bg-teal-500 text-slate-950 shadow-md font-bold'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            <Laptop className="w-4 h-4" />
            <span>Mac (macOS)</span>
            {isMac && (
              <span className="text-[9px] px-1 py-0.2 rounded bg-slate-950/20 font-mono">
                Tu Mac
              </span>
            )}
          </button>

          <button
            onClick={() => setActiveTab('android')}
            className={`flex-1 py-2 px-2.5 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
              activeTab === 'android'
                ? 'bg-teal-500 text-slate-950 shadow-md font-bold'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            <Smartphone className="w-4 h-4" />
            <span>Android</span>
            {isAndroid && (
              <span className="text-[9px] px-1 py-0.2 rounded bg-slate-950/20 font-mono">
                Detectado
              </span>
            )}
          </button>

          <button
            onClick={() => setActiveTab('ios')}
            className={`flex-1 py-2 px-2.5 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
              activeTab === 'ios'
                ? 'bg-teal-500 text-slate-950 shadow-md font-bold'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            <Apple className="w-4 h-4" />
            <span>iPhone / iPad</span>
            {isIOS && (
              <span className="text-[9px] px-1 py-0.2 rounded bg-slate-950/20 font-mono">
                Detectado
              </span>
            )}
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-5 text-sm text-slate-300">
          {isInstalled ? (
            <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 flex items-center gap-3">
              <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" />
              <div>
                <p className="font-bold text-emerald-200">¡BicarbonatoLab ya está instalada!</p>
                <p className="text-xs text-emerald-300/80">Estás ejecutando la aplicación en modo nativo independiente.</p>
              </div>
            </div>
          ) : installSuccess ? (
            <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 flex items-center gap-3">
              <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" />
              <div>
                <p className="font-bold text-emerald-200">¡Instalación exitosa!</p>
                <p className="text-xs text-emerald-300/80">El icono de BicarbonatoLab se ha añadido a tus aplicaciones.</p>
              </div>
            </div>
          ) : activeTab === 'mac' ? (
            /* Mac Instructions */
            <div className="space-y-4">
              {isInstallable && (
                <div className="p-4 rounded-xl bg-teal-500/10 border border-teal-500/30">
                  <p className="text-xs text-teal-200 mb-3 leading-relaxed">
                    Tu navegador en Mac admite instalación directa con un clic:
                  </p>
                  <button
                    onClick={handleInstallClick}
                    className="w-full py-3 px-4 rounded-xl bg-teal-500 hover:bg-teal-400 active:bg-teal-600 text-slate-950 font-bold flex items-center justify-center gap-2 shadow-lg shadow-teal-500/20 transition cursor-pointer"
                  >
                    <Download className="w-4 h-4" />
                    <span>Instalar Aplicación en este Mac</span>
                  </button>
                </div>
              )}

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-white flex items-center gap-1.5">
                    <Apple className="w-4 h-4 text-slate-300" />
                    En Safari de macOS (Sonoma & Sequoia):
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                    Nativo de macOS
                  </span>
                </div>

                <div className="space-y-2">
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                    <div className="w-6 h-6 rounded-lg bg-teal-500/20 text-teal-300 flex items-center justify-center text-xs font-bold shrink-0 font-mono">
                      1
                    </div>
                    <div className="text-xs leading-relaxed">
                      En la barra de menús superior de tu Mac, ve a <strong>Archivo</strong> (File) o pulsa el icono <strong>Compartir</strong> <Share className="inline w-3 h-3 text-teal-400" />.
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                    <div className="w-6 h-6 rounded-lg bg-teal-500/20 text-teal-300 flex items-center justify-center text-xs font-bold shrink-0 font-mono">
                      2
                    </div>
                    <div className="text-xs leading-relaxed">
                      Selecciona la opción <strong>"Agregar al Dock..." (Add to Dock...)</strong>.
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                    <div className="w-6 h-6 rounded-lg bg-teal-500/20 text-teal-300 flex items-center justify-center text-xs font-bold shrink-0 font-mono">
                      3
                    </div>
                    <div className="text-xs leading-relaxed">
                      Haz clic en <strong>"Agregar"</strong>. La aplicación se creará en tu carpeta <code>~/Applications</code>, se integrará en el <strong>Dock</strong> de macOS y se abrirá en su propia ventana aislada.
                    </div>
                  </div>
                </div>

                <div className="mt-3 pt-3 border-t border-slate-800/80">
                  <span className="text-xs font-semibold text-white flex items-center gap-1.5 mb-2">
                    <Laptop className="w-4 h-4 text-cyan-400" />
                    En Chrome, Edge o Brave para Mac:
                  </span>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Haz clic en el icono de instalación <strong>(⊕ Instalar BicarbonatoLab)</strong> situado al extremo derecho de la barra de direcciones (omnibox) o pulsa en <em>Menú ⋮ &gt; Guardar y compartir &gt; Instalar página como aplicación</em>.
                  </p>
                </div>
              </div>

              {/* Mac keyboard shortcuts banner */}
              <div className="p-3 rounded-xl bg-teal-950/30 border border-teal-500/30 text-xs text-teal-200 space-y-1.5 font-mono">
                <div className="font-bold flex items-center gap-1.5 text-teal-300">
                  <Command className="w-3.5 h-3.5" />
                  <span>Atajos rápidos de teclado en Mac:</span>
                </div>
                <div className="grid grid-cols-2 gap-1.5 text-[11px] text-teal-200/90 pt-1">
                  <div><kbd className="px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700 font-bold">⌘ 1..5</kbd> Cambiar pestaña</div>
                  <div><kbd className="px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700 font-bold">1, 2, 3, 4</kbd> Responder A/B/C/D</div>
                  <div><kbd className="px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700 font-bold">Espacio</kbd> Siguiente pregunta</div>
                  <div><kbd className="px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700 font-bold">⌘ M</kbd> Silenciar / Sonido</div>
                </div>
              </div>
            </div>
          ) : activeTab === 'android' ? (
            /* Android Instructions */
            <div className="space-y-4">
              {isInstallable ? (
                <div className="p-4 rounded-xl bg-teal-500/10 border border-teal-500/30">
                  <p className="text-xs text-teal-200 mb-3 leading-relaxed">
                    Tu navegador Android admite instalación directa con un toque:
                  </p>
                  <button
                    onClick={handleInstallClick}
                    className="w-full py-3 px-4 rounded-xl bg-teal-500 hover:bg-teal-400 active:bg-teal-600 text-slate-950 font-bold flex items-center justify-center gap-2 shadow-lg shadow-teal-500/20 transition cursor-pointer"
                  >
                    <Download className="w-4 h-4" />
                    <span>Instalar en este Dispositivo Android</span>
                  </button>
                </div>
              ) : (
                <div className="space-y-3">
                  <p className="text-xs text-slate-400">
                    Sigue estos sencillos pasos en tu móvil Android desde <strong>Google Chrome</strong> o tu navegador:
                  </p>
                  
                  <div className="space-y-2.5">
                    <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                      <div className="w-6 h-6 rounded-lg bg-teal-500/20 text-teal-300 flex items-center justify-center text-xs font-bold shrink-0 font-mono">
                        1
                      </div>
                      <div className="text-xs leading-relaxed">
                        Toca los <strong>tres puntos verticales (⋮)</strong> en la esquina superior derecha del navegador.
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                      <div className="w-6 h-6 rounded-lg bg-teal-500/20 text-teal-300 flex items-center justify-center text-xs font-bold shrink-0 font-mono">
                        2
                      </div>
                      <div className="text-xs leading-relaxed">
                        Selecciona la opción <strong>"Instalar aplicación"</strong> o <strong>"Agregar a la pantalla principal"</strong>.
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                      <div className="w-6 h-6 rounded-lg bg-teal-500/20 text-teal-300 flex items-center justify-center text-xs font-bold shrink-0 font-mono">
                        3
                      </div>
                      <div className="text-xs leading-relaxed">
                        Confirma con <strong>"Instalar"</strong>. Se abrirá con su propio icono sin barra de navegador.
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className="p-3 rounded-xl bg-slate-950/50 border border-slate-800 text-[11px] text-slate-400 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Compatible con Android 8.0 y versiones superiores con respuesta háptica.</span>
              </div>
            </div>
          ) : (
            /* iOS Instructions */
            <div className="space-y-4">
              <p className="text-xs text-slate-400">
                En <strong>iPhone o iPad (Safari)</strong>, Apple permite añadirla a la pantalla de inicio desde el menú compartir:
              </p>

              <div className="space-y-2.5">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                  <div className="w-6 h-6 rounded-lg bg-teal-500/20 text-teal-300 flex items-center justify-center text-xs font-bold shrink-0 font-mono">
                    1
                  </div>
                  <div className="text-xs leading-relaxed">
                    Abre esta página en <strong>Safari</strong> y pulsa el botón <strong>Compartir</strong> <Share className="inline w-3.5 h-3.5 text-teal-400 mx-1" />.
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                  <div className="w-6 h-6 rounded-lg bg-teal-500/20 text-teal-300 flex items-center justify-center text-xs font-bold shrink-0 font-mono">
                    2
                  </div>
                  <div className="text-xs leading-relaxed">
                    Desplázate hacia abajo y selecciona <strong>"Agregar al inicio"</strong> <PlusSquare className="inline w-3.5 h-3.5 text-teal-400 mx-1" />.
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                  <div className="w-6 h-6 rounded-lg bg-teal-500/20 text-teal-300 flex items-center justify-center text-xs font-bold shrink-0 font-mono">
                    3
                  </div>
                  <div className="text-xs leading-relaxed">
                    Toca <strong>"Agregar"</strong> en la esquina superior derecha.
                  </div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-950/50 border border-slate-800 text-[11px] text-slate-400 flex items-center gap-2">
                <Apple className="w-4 h-4 text-slate-300 shrink-0" />
                <span>Optimizada para Dynamic Island, Safe Areas de iPhone y pantalla multitáctil de iPad.</span>
              </div>
            </div>
          )}

          {/* Advantages Section */}
          <div className="p-3.5 rounded-xl bg-slate-950/40 border border-slate-800 text-xs text-slate-400 space-y-1.5">
            <div className="font-semibold text-slate-200 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-teal-400" />
              <span>Ventajas en cualquier plataforma:</span>
            </div>
            <ul className="list-disc list-inside space-y-1 pl-1 text-[11px] text-slate-400">
              <li>Funciona 100% offline sin conexión a internet (modo avión o sin red).</li>
              <li>Pantalla completa y ventana independiente sin pestañas del navegador.</li>
              <li>Guarda tu puntuación, nivel alcanzado y diplomas automáticamente.</li>
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-950 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="py-2 px-5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition cursor-pointer"
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
};
