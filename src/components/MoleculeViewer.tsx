import React, { useState } from 'react';
import { Layers, Atom, Sparkles, Info, ZoomIn, RefreshCw } from 'lucide-react';

export function MoleculeViewer() {
  const [viewMode, setViewMode] = useState<'pair' | 'dimer' | 'resonance'>('pair');
  const [rotationAngle, setRotationAngle] = useState(0);
  const [showBondAngles, setShowBondAngles] = useState(true);

  const rotate = () => {
    setRotationAngle((prev) => (prev + 45) % 360);
  };

  return (
    <div className="bg-slate-900/80 backdrop-blur-md rounded-2xl border border-slate-800 p-6 shadow-xl">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 border-b border-slate-800/80">
        <div>
          <div className="flex items-center gap-2 text-teal-400 font-mono text-xs uppercase tracking-wider">
            <Atom className="w-4 h-4" />
            <span>Inspector Estructural & Cristalografía</span>
          </div>
          <h3 className="text-xl font-bold text-white mt-1">Estructura Molecular del NaHCO₃</h3>
          <p className="text-sm text-slate-400">
            Hibridación <span className="font-mono text-teal-300 font-semibold">sp²</span> trigonal plana, enlace iónico electrostático con Na⁺ y red de puentes de hidrógeno.
          </p>
        </div>

        {/* View mode toggle */}
        <div className="flex flex-wrap items-center gap-1.5 bg-slate-950/70 p-1.5 rounded-xl border border-slate-800">
          <button
            onClick={() => setViewMode('pair')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
              viewMode === 'pair'
                ? 'bg-teal-500 text-slate-950 shadow-md font-bold'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            Par Iónico (Na⁺ HCO₃⁻)
          </button>
          <button
            onClick={() => setViewMode('dimer')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
              viewMode === 'dimer'
                ? 'bg-teal-500 text-slate-950 shadow-md font-bold'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            Dímeros en Red Cristalina
          </button>
          <button
            onClick={() => setViewMode('resonance')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
              viewMode === 'resonance'
                ? 'bg-teal-500 text-slate-950 shadow-md font-bold'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            Híbrido de Resonancia
          </button>
        </div>
      </div>

      {/* Interactive canvas / SVG rendering */}
      <div className="relative mt-6 h-80 w-full bg-slate-950/80 rounded-xl border border-slate-800/80 overflow-hidden flex items-center justify-center">
        {/* Subtle grid pattern background */}
        <div 
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #14b8a6 1px, transparent 0)`,
            backgroundSize: '24px 24px'
          }}
        />

        {/* Action buttons on top right */}
        <div className="absolute top-3 right-3 flex items-center gap-2 z-10">
          <button
            onClick={rotate}
            title="Rotar vista"
            className="p-2 bg-slate-800/80 hover:bg-slate-700 text-slate-300 rounded-lg text-xs flex items-center gap-1 border border-slate-700 transition"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Rotar ({rotationAngle}°)</span>
          </button>
          <button
            onClick={() => setShowBondAngles(!showBondAngles)}
            title="Alternar etiquetas"
            className={`p-2 rounded-lg text-xs flex items-center gap-1 border transition ${
              showBondAngles 
                ? 'bg-teal-500/20 text-teal-300 border-teal-500/40' 
                : 'bg-slate-800/80 text-slate-400 border-slate-700'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Parámetros</span>
          </button>
        </div>

        {/* SVG Visualization */}
        <div
          className="transition-transform duration-500 ease-out"
          style={{ transform: `rotate(${rotationAngle}deg)` }}
        >
          {viewMode === 'pair' && (
            <svg viewBox="0 0 500 300" className="w-[420px] h-[260px] overflow-visible">
              <defs>
                <radialGradient id="sodiumGrad" cx="35%" cy="35%" r="65%">
                  <stop offset="0%" stopColor="#c084fc" />
                  <stop offset="70%" stopColor="#7e22ce" />
                  <stop offset="100%" stopColor="#581c87" />
                </radialGradient>
                <radialGradient id="carbonGrad" cx="35%" cy="35%" r="65%">
                  <stop offset="0%" stopColor="#64748b" />
                  <stop offset="70%" stopColor="#334155" />
                  <stop offset="100%" stopColor="#0f172a" />
                </radialGradient>
                <radialGradient id="oxygenGrad" cx="35%" cy="35%" r="65%">
                  <stop offset="0%" stopColor="#f87171" />
                  <stop offset="70%" stopColor="#dc2626" />
                  <stop offset="100%" stopColor="#7f1d1d" />
                </radialGradient>
                <radialGradient id="hydrogenGrad" cx="35%" cy="35%" r="65%">
                  <stop offset="0%" stopColor="#f8fafc" />
                  <stop offset="70%" stopColor="#cbd5e1" />
                  <stop offset="100%" stopColor="#94a3b8" />
                </radialGradient>
              </defs>

              {/* Electrostatic ionic interaction line between Na+ and O- */}
              <line x1="120" y1="140" x2="215" y2="105" stroke="#a855f7" strokeWidth="2.5" strokeDasharray="5,4" />
              <text x="150" y="110" fill="#c084fc" fontSize="11" fontFamily="Fira Code" fontWeight="bold">
                Atracción Iónica
              </text>

              {/* Carbonate Anion Bonds */}
              {/* C = O (Double bond or resonance) */}
              <line x1="280" y1="150" x2="230" y2="100" stroke="#94a3b8" strokeWidth="5" />
              <line x1="284" y1="144" x2="238" y2="98" stroke="#ef4444" strokeWidth="2" strokeDasharray="3,3" />

              {/* C - O⁻ */}
              <line x1="280" y1="150" x2="230" y2="200" stroke="#94a3b8" strokeWidth="5" />

              {/* C - O(H) */}
              <line x1="280" y1="150" x2="370" y2="150" stroke="#94a3b8" strokeWidth="5" />

              {/* O - H single bond */}
              <line x1="370" y1="150" x2="430" y2="110" stroke="#94a3b8" strokeWidth="3.5" />

              {/* Na+ Cation */}
              <circle cx="110" cy="145" r="28" fill="url(#sodiumGrad)" filter="drop-shadow(0 4px 10px rgba(168,85,247,0.4))" />
              <text x="110" y="147" fill="white" fontSize="16" fontWeight="bold" textAnchor="middle" dominantBaseline="middle">Na⁺</text>
              <text x="110" y="185" fill="#c084fc" fontSize="10" fontFamily="Fira Code" textAnchor="middle">Catión Sodio</text>

              {/* Central Carbon Atom */}
              <circle cx="280" cy="150" r="20" fill="url(#carbonGrad)" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.5))" />
              <text x="280" y="152" fill="white" fontSize="14" fontWeight="bold" textAnchor="middle" dominantBaseline="middle">C</text>
              <text x="280" y="130" fill="#94a3b8" fontSize="10" fontFamily="Fira Code" textAnchor="middle">sp² plano</text>

              {/* Oxygen 1 (O⁻ coordinating with Na) */}
              <circle cx="225" cy="95" r="22" fill="url(#oxygenGrad)" filter="drop-shadow(0 4px 8px rgba(220,38,38,0.4))" />
              <text x="225" y="97" fill="white" fontSize="14" fontWeight="bold" textAnchor="middle" dominantBaseline="middle">O</text>
              <text x="200" y="75" fill="#f87171" fontSize="11" fontFamily="Fira Code" fontWeight="bold">δ⁻</text>

              {/* Oxygen 2 (Carbonyl resonance O) */}
              <circle cx="225" cy="205" r="22" fill="url(#oxygenGrad)" filter="drop-shadow(0 4px 8px rgba(220,38,38,0.4))" />
              <text x="225" y="207" fill="white" fontSize="14" fontWeight="bold" textAnchor="middle" dominantBaseline="middle">O</text>
              <text x="200" y="235" fill="#f87171" fontSize="11" fontFamily="Fira Code" fontWeight="bold">δ⁻</text>

              {/* Oxygen 3 (Hydroxyl O) */}
              <circle cx="370" cy="150" r="22" fill="url(#oxygenGrad)" filter="drop-shadow(0 4px 8px rgba(220,38,38,0.4))" />
              <text x="370" y="152" fill="white" fontSize="14" fontWeight="bold" textAnchor="middle" dominantBaseline="middle">O</text>
              <text x="370" y="185" fill="#f87171" fontSize="10" fontFamily="Fira Code" textAnchor="middle">Hidroxilo</text>

              {/* Hydrogen Atom */}
              <circle cx="430" cy="110" r="14" fill="url(#hydrogenGrad)" filter="drop-shadow(0 2px 5px rgba(255,255,255,0.3))" />
              <text x="430" y="112" fill="#0f172a" fontSize="12" fontWeight="bold" textAnchor="middle" dominantBaseline="middle">H</text>

              {/* Bond Angles and distances if toggled */}
              {showBondAngles && (
                <>
                  <path d="M 260 135 A 25 25 0 0 1 295 135" fill="none" stroke="#2dd4bf" strokeWidth="1.5" />
                  <text x="280" y="115" fill="#2dd4bf" fontSize="11" fontFamily="Fira Code" textAnchor="middle">~120°</text>
                  <text x="330" y="140" fill="#64748b" fontSize="9" fontFamily="Fira Code">1.34 Å</text>
                  <text x="240" y="160" fill="#64748b" fontSize="9" fontFamily="Fira Code">1.26 Å</text>
                </>
              )}
            </svg>
          )}

          {viewMode === 'dimer' && (
            <svg viewBox="0 0 520 280" className="w-[440px] h-[250px] overflow-visible">
              {/* Dimer view with hydrogen bonds */}
              <defs>
                <linearGradient id="hBond" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#38bdf8" />
                  <stop offset="100%" stopColor="#f43f5e" />
                </linearGradient>
              </defs>

              {/* Dimer 1 */}
              <g transform="translate(60, 20)">
                <circle cx="100" cy="70" r="16" fill="#334155" />
                <text x="100" y="74" fill="white" fontSize="11" textAnchor="middle">C</text>
                <circle cx="60" cy="40" r="17" fill="#dc2626" />
                <text x="60" y="44" fill="white" fontSize="11" textAnchor="middle">O</text>
                <circle cx="60" cy="100" r="17" fill="#dc2626" />
                <text x="60" y="104" fill="white" fontSize="11" textAnchor="middle">O</text>
                <circle cx="150" cy="70" r="17" fill="#dc2626" />
                <text x="150" y="74" fill="white" fontSize="11" textAnchor="middle">O</text>
                <circle cx="190" cy="70" r="11" fill="#f1f5f9" />
                <text x="190" y="73" fill="#0f172a" fontSize="9" textAnchor="middle">H</text>

                <line x1="100" y1="70" x2="60" y2="40" stroke="#64748b" strokeWidth="4" />
                <line x1="100" y1="70" x2="60" y2="100" stroke="#64748b" strokeWidth="4" />
                <line x1="100" y1="70" x2="150" y2="70" stroke="#64748b" strokeWidth="4" />
                <line x1="150" y1="70" x2="190" y2="70" stroke="#64748b" strokeWidth="3" />
              </g>

              {/* Hydrogen Bond Bridge */}
              <line x1="262" y1="90" x2="310" y2="90" stroke="#38bdf8" strokeWidth="3" strokeDasharray="4,3" />
              <text x="286" y="80" fill="#38bdf8" fontSize="10" fontFamily="Fira Code" textAnchor="middle">O-H···O</text>
              <text x="286" y="110" fill="#94a3b8" fontSize="9" fontFamily="Fira Code" textAnchor="middle">2.61 Å</text>

              {/* Dimer 2 (Mirrored) */}
              <g transform="translate(240, 20)">
                <circle cx="170" cy="70" r="16" fill="#334155" />
                <text x="170" y="74" fill="white" fontSize="11" textAnchor="middle">C</text>
                <circle cx="210" cy="40" r="17" fill="#dc2626" />
                <text x="210" y="44" fill="white" fontSize="11" textAnchor="middle">O</text>
                <circle cx="210" cy="100" r="17" fill="#dc2626" />
                <text x="210" y="104" fill="white" fontSize="11" textAnchor="middle">O</text>
                <circle cx="120" cy="70" r="17" fill="#dc2626" />
                <text x="120" y="74" fill="white" fontSize="11" textAnchor="middle">O</text>
                <circle cx="80" cy="70" r="11" fill="#f1f5f9" />
                <text x="80" y="73" fill="#0f172a" fontSize="9" textAnchor="middle">H</text>

                <line x1="170" y1="70" x2="210" y2="40" stroke="#64748b" strokeWidth="4" />
                <line x1="170" y1="70" x2="210" y2="100" stroke="#64748b" strokeWidth="4" />
                <line x1="170" y1="70" x2="120" y2="70" stroke="#64748b" strokeWidth="4" />
                <line x1="120" y1="70" x2="80" y2="70" stroke="#64748b" strokeWidth="3" />
              </g>

              {/* Sodium counter-ions balancing the chains */}
              <circle cx="100" cy="180" r="20" fill="#7e22ce" />
              <text x="100" y="184" fill="white" fontSize="12" fontWeight="bold" textAnchor="middle">Na⁺</text>
              <circle cx="370" cy="180" r="20" fill="#7e22ce" />
              <text x="370" y="184" fill="white" fontSize="12" fontWeight="bold" textAnchor="middle">Na⁺</text>

              <text x="260" y="240" fill="#2dd4bf" fontSize="12" fontFamily="Fira Code" textAnchor="middle" fontWeight="bold">
                Red Monoclínica: Cadenas Infinitas [HCO₃⁻]ₙ
              </text>
            </svg>
          )}

          {viewMode === 'resonance' && (
            <svg viewBox="0 0 500 260" className="w-[430px] h-[240px] overflow-visible">
              {/* Form 1 */}
              <g transform="translate(60, 40)">
                <text x="90" y="15" fill="#94a3b8" fontSize="12" fontFamily="Fira Code" textAnchor="middle">Forma Canónica A</text>
                <circle cx="90" cy="70" r="15" fill="#334155" />
                <text x="90" y="74" fill="white" fontSize="10" textAnchor="middle">C</text>
                <circle cx="50" cy="40" r="16" fill="#dc2626" />
                <text x="50" y="44" fill="white" fontSize="10" textAnchor="middle">O</text>
                <text x="30" y="30" fill="#f87171" fontSize="12" fontWeight="bold">⁻</text>
                
                <circle cx="50" cy="100" r="16" fill="#dc2626" />
                <text x="50" y="104" fill="white" fontSize="10" textAnchor="middle">O</text>
                
                <circle cx="135" cy="70" r="16" fill="#dc2626" />
                <circle cx="165" cy="70" r="10" fill="#cbd5e1" />
                <text x="165" y="73" fill="#0f172a" fontSize="8" textAnchor="middle">H</text>

                {/* Double bond */}
                <line x1="88" y1="72" x2="52" y2="98" stroke="#cbd5e1" strokeWidth="4" />
                <line x1="94" y1="68" x2="58" y2="94" stroke="#cbd5e1" strokeWidth="2" />
                {/* Single bond */}
                <line x1="90" y1="70" x2="50" y2="40" stroke="#cbd5e1" strokeWidth="3" />
                <line x1="90" y1="70" x2="135" y2="70" stroke="#cbd5e1" strokeWidth="3" />
                <line x1="135" y1="70" x2="165" y2="70" stroke="#cbd5e1" strokeWidth="2" />
              </g>

              {/* Resonance Equilibrium Arrow */}
              <g transform="translate(240, 95)">
                <line x1="0" y1="0" x2="40" y2="0" stroke="#2dd4bf" strokeWidth="2" />
                <polygon points="40,-4 50,0 40,4" fill="#2dd4bf" />
                <polygon points="10,-4 0,0 10,4" fill="#2dd4bf" />
                <text x="25" y="-12" fill="#2dd4bf" fontSize="13" fontWeight="bold" textAnchor="middle">⟷</text>
              </g>

              {/* Form 2 */}
              <g transform="translate(280, 40)">
                <text x="90" y="15" fill="#94a3b8" fontSize="12" fontFamily="Fira Code" textAnchor="middle">Forma Canónica B</text>
                <circle cx="90" cy="70" r="15" fill="#334155" />
                <text x="90" y="74" fill="white" fontSize="10" textAnchor="middle">C</text>
                <circle cx="50" cy="40" r="16" fill="#dc2626" />
                <text x="50" y="44" fill="white" fontSize="10" textAnchor="middle">O</text>
                
                <circle cx="50" cy="100" r="16" fill="#dc2626" />
                <text x="50" y="104" fill="white" fontSize="10" textAnchor="middle">O</text>
                <text x="30" y="115" fill="#f87171" fontSize="12" fontWeight="bold">⁻</text>
                
                <circle cx="135" cy="70" r="16" fill="#dc2626" />
                <circle cx="165" cy="70" r="10" fill="#cbd5e1" />
                <text x="165" y="73" fill="#0f172a" fontSize="8" textAnchor="middle">H</text>

                {/* Double bond reversed */}
                <line x1="88" y1="68" x2="52" y2="42" stroke="#cbd5e1" strokeWidth="4" />
                <line x1="94" y1="72" x2="58" y2="46" stroke="#cbd5e1" strokeWidth="2" />
                {/* Single bond */}
                <line x1="90" y1="70" x2="50" y2="100" stroke="#cbd5e1" strokeWidth="3" />
                <line x1="90" y1="70" x2="135" y2="70" stroke="#cbd5e1" strokeWidth="3" />
                <line x1="135" y1="70" x2="165" y2="70" stroke="#cbd5e1" strokeWidth="2" />
              </g>

              <text x="250" y="210" fill="#38bdf8" fontSize="11" fontFamily="Fira Code" textAnchor="middle">
                Deslocalización de carga negativa (δ⁻ ≈ -0.5 en cada oxígeno carboxílico)
              </text>
            </svg>
          )}
        </div>
      </div>

      {/* Legend & Scientific Notes */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4 pt-4 border-t border-slate-800 text-xs">
        <div className="flex items-center gap-2">
          <span className="w-3.5 h-3.5 rounded-full bg-purple-600 inline-block shadow-sm"></span>
          <span className="text-slate-300 font-mono">Na (Sodio) +1</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3.5 h-3.5 rounded-full bg-slate-700 inline-block border border-slate-500"></span>
          <span className="text-slate-300 font-mono">C (Carbono) sp²</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3.5 h-3.5 rounded-full bg-red-600 inline-block shadow-sm"></span>
          <span className="text-slate-300 font-mono">O (Oxígeno) -2</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3.5 h-3.5 rounded-full bg-slate-200 inline-block"></span>
          <span className="text-slate-300 font-mono">H (Hidrógeno) +1</span>
        </div>
      </div>
    </div>
  );
}
