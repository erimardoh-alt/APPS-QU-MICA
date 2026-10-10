import React, { useState } from 'react';
import { BookOpen, Scale, History, ShieldCheck, Activity, ChevronRight, Beaker, FileSpreadsheet } from 'lucide-react';
import { SODIUM_BICARBONATE_FACTS, HISTORICAL_MILESTONES, BUFFER_SYSTEM_POINTS } from '../data/compoundFacts';

export function EncyclopediaCompendium() {
  const [activeTab, setActiveTab] = useState<'properties' | 'buffer' | 'history' | 'comparison'>('properties');

  return (
    <div className="bg-slate-900/90 backdrop-blur-md rounded-2xl border border-slate-800 p-6 shadow-2xl space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2 text-teal-400 font-mono text-xs uppercase tracking-wider">
            <BookOpen className="w-4 h-4" />
            <span>Compendio Científico & Ficha Técnica IUPAC</span>
          </div>
          <h3 className="text-2xl font-bold text-white mt-1">Enciclopedia del Bicarbonato de Sodio</h3>
          <p className="text-sm text-slate-400">
            Base de datos termodinámica, constantes de equilibrio ácido-base, fisiología respiratoria y cronología industrial.
          </p>
        </div>

        {/* Tab navigation */}
        <div className="flex flex-wrap gap-1.5 bg-slate-950 p-1.5 rounded-xl border border-slate-800">
          <button
            onClick={() => setActiveTab('properties')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition ${
              activeTab === 'properties' ? 'bg-teal-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
            }`}
          >
            Ficha Técnica
          </button>
          <button
            onClick={() => setActiveTab('buffer')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition ${
              activeTab === 'buffer' ? 'bg-teal-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
            }`}
          >
            Sistema Tampón (Buffer)
          </button>
          <button
            onClick={() => setActiveTab('history')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition ${
              activeTab === 'history' ? 'bg-teal-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
            }`}
          >
            Historia & Solvay
          </button>
          <button
            onClick={() => setActiveTab('comparison')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition ${
              activeTab === 'comparison' ? 'bg-teal-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
            }`}
          >
            Comparativa Sales Sódicas
          </button>
        </div>
      </div>

      {/* Tab Content: Properties */}
      {activeTab === 'properties' && (
        <div className="space-y-6 animate-fadeIn">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800">
              <span className="text-[10px] font-mono text-slate-500 uppercase">Fórmula y Nomenclatura</span>
              <div className="text-lg font-bold font-mono text-teal-300 mt-1">{SODIUM_BICARBONATE_FACTS.chemicalFormula}</div>
              <p className="text-xs text-slate-400 mt-0.5">{SODIUM_BICARBONATE_FACTS.iupacName}</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800">
              <span className="text-[10px] font-mono text-slate-500 uppercase">Masa Molar</span>
              <div className="text-lg font-bold font-mono text-cyan-300 mt-1">{SODIUM_BICARBONATE_FACTS.molarMass}</div>
              <p className="text-xs text-slate-400 mt-0.5">CAS: {SODIUM_BICARBONATE_FACTS.casNumber}</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800">
              <span className="text-[10px] font-mono text-slate-500 uppercase">Densidad y Sistema Cristalino</span>
              <div className="text-lg font-bold font-mono text-purple-300 mt-1">{SODIUM_BICARBONATE_FACTS.density}</div>
              <p className="text-xs text-slate-400 mt-0.5">{SODIUM_BICARBONATE_FACTS.crystalSystem}</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800">
              <span className="text-[10px] font-mono text-slate-500 uppercase">Constantes de Acidez (pKa)</span>
              <div className="text-base font-bold font-mono text-amber-300 mt-1">
                pKₐ₁ = {SODIUM_BICARBONATE_FACTS.pKa1} | pKₐ₂ = {SODIUM_BICARBONATE_FACTS.pKa2}
              </div>
              <p className="text-xs text-slate-400 mt-0.5">Especie anfiprótica / anfolito</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800">
              <span className="text-[10px] font-mono text-slate-500 uppercase">pH en Solución Acuosa</span>
              <div className="text-lg font-bold font-mono text-emerald-300 mt-1">{SODIUM_BICARBONATE_FACTS.aqueousPh}</div>
              <p className="text-xs text-slate-400 mt-0.5">Alcalinidad muy suave (no lesivo)</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800">
              <span className="text-[10px] font-mono text-slate-500 uppercase">Descomposición Térmica</span>
              <div className="text-xs font-bold font-mono text-rose-300 mt-1 leading-snug">
                {SODIUM_BICARBONATE_FACTS.thermalDecompTemp}
              </div>
              <p className="text-[11px] text-slate-400 mt-0.5">2 NaHCO₃ → Na₂CO₃ + H₂O + CO₂</p>
            </div>
          </div>

          {/* Solubility Table */}
          <div className="bg-slate-950/60 p-5 rounded-xl border border-slate-800">
            <h4 className="text-sm font-bold text-white flex items-center gap-2 mb-3">
              <Scale className="w-4 h-4 text-teal-400" />
              <span>Curva de Solubilidad en Agua (g/100 mL de H₂O)</span>
            </h4>
            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                <span className="text-xs font-mono text-slate-400">A 0 °C (Frío)</span>
                <div className="text-lg font-bold font-mono text-teal-300 mt-1">6.9 g</div>
                <span className="text-[10px] text-slate-500">69 g/L</span>
              </div>
              <div className="p-3 bg-slate-900 rounded-lg border border-teal-500/40">
                <span className="text-xs font-mono text-teal-400 font-bold">A 20 °C (Ambiente)</span>
                <div className="text-lg font-bold font-mono text-teal-300 mt-1">9.6 g</div>
                <span className="text-[10px] text-teal-400/80">96 g/L</span>
              </div>
              <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                <span className="text-xs font-mono text-slate-400">A 60 °C (Caliente)</span>
                <div className="text-lg font-bold font-mono text-teal-300 mt-1">16.4 g</div>
                <span className="text-[10px] text-slate-500">164 g/L</span>
              </div>
            </div>
            <p className="text-[11px] text-slate-400 mt-3 font-mono">
              * Nota termodinámica: Por encima de 60 °C, la solución acuosa comienza a perder CO₂ gaseoso gradualmente, transformándose en Na₂CO₃.
            </p>
          </div>
        </div>
      )}

      {/* Tab Content: Buffer */}
      {activeTab === 'buffer' && (
        <div className="space-y-4 animate-fadeIn">
          <div className="p-4 bg-teal-950/20 border border-teal-500/30 rounded-xl">
            <h4 className="text-base font-bold text-teal-300 flex items-center gap-2">
              <Activity className="w-5 h-5 text-teal-400" />
              <span>El Sistema Amortiguador Ácido Carbónico / Bicarbonato</span>
            </h4>
            <p className="text-xs text-slate-300 mt-1 leading-relaxed">
              Es el amortiguador extracelular más fundamental del organismo humano, responsable de estabilizar el pH sanguíneo entre 7.35 y 7.45.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {BUFFER_SYSTEM_POINTS.map((pt, idx) => (
              <div key={idx} className="bg-slate-950/70 p-5 rounded-xl border border-slate-800 flex flex-col justify-between">
                <div>
                  <h5 className="text-sm font-bold text-white mb-2">{pt.title}</h5>
                  <div className="p-2.5 bg-slate-900 rounded-lg border border-slate-800 text-teal-300 font-mono text-xs mb-3 overflow-x-auto">
                    <code>{pt.formula}</code>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {pt.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab Content: History */}
      {activeTab === 'history' && (
        <div className="space-y-4 animate-fadeIn">
          <div className="relative border-l-2 border-slate-800 pl-6 ml-3 space-y-6">
            {HISTORICAL_MILESTONES.map((item, idx) => (
              <div key={idx} className="relative group">
                {/* Timeline dot */}
                <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-slate-900 border-2 border-teal-400 group-hover:bg-teal-400 transition" />
                
                <div className="bg-slate-950/70 p-4 rounded-xl border border-slate-800 group-hover:border-teal-500/40 transition">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-teal-400 font-bold">{item.year}</span>
                    <span className="text-slate-500">{item.scientist}</span>
                  </div>
                  <h5 className="text-base font-bold text-white mt-1">{item.title}</h5>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab Content: Comparison */}
      {activeTab === 'comparison' && (
        <div className="space-y-4 animate-fadeIn">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* NaHCO3 */}
            <div className="p-5 rounded-xl bg-slate-950/80 border-2 border-teal-500/50 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-teal-400 font-bold">Bicarbonato de Sodio</span>
                <h4 className="text-xl font-bold font-mono text-white mt-1">NaHCO₃</h4>
                <ul className="text-xs text-slate-300 space-y-2 mt-4">
                  <li>• <strong>pH acuoso:</strong> ~8.3 (alcalino muy suave)</li>
                  <li>• <strong>Uso:</strong> Cocina, digestión, buffer médico, extintores</li>
                  <li>• <strong>Seguridad:</strong> Apto para consumo alimentario humano</li>
                  <li>• <strong>Masa molar:</strong> 84.0 g/mol</li>
                </ul>
              </div>
            </div>

            {/* Na2CO3 */}
            <div className="p-5 rounded-xl bg-slate-950/80 border border-slate-800 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-amber-400 font-bold">Carbonato de Sodio (Sosa Ash)</span>
                <h4 className="text-xl font-bold font-mono text-white mt-1">Na₂CO₃</h4>
                <ul className="text-xs text-slate-300 space-y-2 mt-4">
                  <li>• <strong>pH acuoso:</strong> ~11.5 (fuertemente alcalino)</li>
                  <li>• <strong>Uso:</strong> Fabricación de vidrio, detergentes industriales</li>
                  <li>• <strong>Seguridad:</strong> Irrita fuertemente ojos y mucosas</li>
                  <li>• <strong>Masa molar:</strong> 106.0 g/mol</li>
                </ul>
              </div>
            </div>

            {/* Na2CO3·1.5H2O2 */}
            <div className="p-5 rounded-xl bg-slate-950/80 border border-slate-800 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-cyan-400 font-bold">Percarbonato de Sodio</span>
                <h4 className="text-lg font-bold font-mono text-white mt-1">2Na₂CO₃·3H₂O₂</h4>
                <ul className="text-xs text-slate-300 space-y-2 mt-4">
                  <li>• <strong>pH acuoso:</strong> ~10.5 + peróxido activo</li>
                  <li>• <strong>Uso:</strong> Blanqueador oxigenado para lavandería</li>
                  <li>• <strong>Seguridad:</strong> Comburente oxidante</li>
                  <li>• <strong>Reacción:</strong> Libera agua oxigenada al contacto con agua</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
