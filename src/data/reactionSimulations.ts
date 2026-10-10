import { ReactionSimulation } from '../types/trivia';

export const REACTION_SIMULATIONS: ReactionSimulation[] = [
  {
    id: 'rx-vinegar',
    name: 'Bicarbonato + Ácido Acético (Vinagre)',
    category: 'Ácido-Base',
    reactantA: 'NaHCO₃ (Sólido blanco)',
    reactantB: 'CH₃COOH al 5% (Vinagre blanco líquido)',
    reactantBName: 'Ácido Acético',
    description: 'La clásica reacción ácido-base endotérmica con copiosa efervescencia de CO₂ y marcado enfriamiento del medio.',
    balancedEquation: 'NaHCO₃(s) + CH₃COOH(aq) → CH₃COONa(aq) + H₂O(l) + CO₂(g)↑',
    thermodynamics: 'Endotérmica',
    deltaTemp: -4.5,
    initialPh: 2.8,
    finalPh: 7.8,
    gasProduced: 'CO₂ (Dióxido de Carbono)',
    effervescenceIntensity: 'high',
    observations: [
      'Burbujeo efervescente inmediato e intenso de dióxido de carbono incoloro e inodoro.',
      'El recipiente se enfría perceptiblemente al tacto (caída térmica de ~4 °C a 5 °C).',
      'El bicarbonato sólido se disuelve por completo transformándose en una solución transparente de acetato de sodio.',
      'El pH sube de fuertemente ácido (~2.8) a ligeramente alcalino/neutro (~7.8).'
    ],
    industrialOrDailySignificance: 'Base de extintores antiguos de espuma, leudado de bizcochos rápidos con vinagre de manzana y el clásico volcán escolar.',
    reactionSpeed: 'Instantánea'
  },
  {
    id: 'rx-hcl',
    name: 'Bicarbonato + Ácido Clorhídrico (Jugo Gástrico)',
    category: 'Fisiológica',
    reactantA: 'NaHCO₃ (Polvo puro)',
    reactantB: 'HCl 0.1 M (Simulación de ácido estomacal)',
    reactantBName: 'Ácido Clorhídrico',
    description: 'La reacción fisiológica antiácida que ocurre en el estómago para neutralizar la hiperacidez y el reflujo gástrico.',
    balancedEquation: 'NaHCO₃(s) + HCl(aq) → NaCl(aq) + H₂O(l) + CO₂(g)↑',
    thermodynamics: 'Endotérmica',
    deltaTemp: -1.2,
    initialPh: 1.2,
    finalPh: 7.2,
    gasProduced: 'CO₂ (Dióxido de Carbono)',
    effervescenceIntensity: 'vigorous',
    observations: [
      'Efervescencia violenta y desprendimiento rápido de microburbujas de CO₂.',
      'Rápida neutralización de protones libres; el pH sube bruscamente de 1.2 a 7.2.',
      'Producto final es salmuera común diluida (NaCl en agua), completamente inocua en pequeñas dosis.',
      'La distensión gaseosa en el estómago provoca el reflejo de eructo aliviador.'
    ],
    industrialOrDailySignificance: 'Mecanismo de acción de los antiácidos digestivos solubles de venta libre como Eno, Alka-Seltzer y bicarbonato puro.',
    reactionSpeed: 'Instantánea'
  },
  {
    id: 'rx-heat',
    name: 'Descomposición Térmica (Calcinación)',
    category: 'Térmica',
    reactantA: '2 NaHCO₃(s) (Cristal monoclínico)',
    reactantB: 'Calor (> 100 °C - 200 °C en crisol)',
    reactantBName: 'Calor Térmico',
    description: 'Termólisis en estado sólido donde el bicarbonato pierde un 36.9% de su masa al transformarse en carbonato sódico anhidro.',
    balancedEquation: '2 NaHCO₃(s) ⎯⎯Δ (100-200°C)→ Na₂CO₃(s) + H₂O(g)↑ + CO₂(g)↑',
    thermodynamics: 'Termólisis',
    deltaTemp: 85.0,
    initialPh: 8.3,
    finalPh: 11.4,
    gasProduced: 'Vapor H₂O + CO₂',
    effervescenceIntensity: 'moderate',
    observations: [
      'A partir de 60 °C empieza a desprender vapor de agua y CO₂ lentamente; a 150 °C la desgasificación es rápida.',
      'El sólido blanco fino pierde masa progresivamente sin fundirse (permanece en fase sólida).',
      'Si se disuelve el residuo enfriado en agua, el pH de la solución resultante es de ~11.4 (fuertemente alcalino, carbonato disódico).',
      'Produce gas incombustible que extingue de inmediato una cerilla o llama sostenida sobre el crisol.'
    ],
    industrialOrDailySignificance: 'Etapa de calcinación en el Proceso Solvay para producir ceniza de sosa (soda ash) y mecanismo de acción de extintores de polvo seco BC.',
    reactionSpeed: 'Requiere Calor (>50°C)'
  },
  {
    id: 'rx-citric',
    name: 'Bicarbonato + Ácido Cítrico + Agua',
    category: 'Ácido-Base',
    reactantA: '3 NaHCO₃(s)',
    reactantB: 'C₆H₈O₇ (Ácido cítrico sólido) + H₂O',
    reactantBName: 'Ácido Cítrico',
    description: 'La fórmula estequiométrica de las tabletas efervescentes: estables en seco, pero altamente reactivas al contacto con agua.',
    balancedEquation: '3 NaHCO₃ + C₆H₈O₇(aq) → Na₃C₆H₅O₇ (Citrato trisódico) + 3 H₂O + 3 CO₂(g)↑',
    thermodynamics: 'Endotérmica',
    deltaTemp: -5.2,
    initialPh: 3.1,
    finalPh: 6.8,
    gasProduced: 'CO₂ (Dióxido de Carbono)',
    effervescenceIntensity: 'vigorous',
    observations: [
      'En seco los dos polvos conviven sin reaccionar; basta añadir agua líquida para que los iones adquieran movilidad y reaccionen.',
      'Efervescencia densa y sostenida tipo "géiser" con burbujas de CO₂ de alta dispersión.',
      'Sensación táctil gélida en las paredes del vaso (caída térmica pronunciada de más de 5 °C).',
      'Se forma citrato de sodio, una sal soluble con sabor ácido-salino suave usada como anticoagulante y conservante.'
    ],
    industrialOrDailySignificance: 'Tabletas efervescentes de vitamina C, sales de frutas y bombas efervescentes de baño relajante.',
    reactionSpeed: 'Rápida'
  },
  {
    id: 'rx-calcium',
    name: 'Bicarbonato + Cloruro de Calcio (Precipitación)',
    category: 'Precipitación',
    reactantA: '2 NaHCO₃(aq) (Transparente)',
    reactantB: 'CaCl₂(aq) concentrado + Calor suave',
    reactantBName: 'Cloruro de Calcio',
    description: 'Simula el fenómeno hidrogeológico y de calderas donde el bicarbonato de calcio soluble se descompone formando sarro calcáreo blanco.',
    balancedEquation: 'CaCl₂(aq) + 2 NaHCO₃(aq) ⎯⎯Δ→ CaCO₃(s)↓ + 2 NaCl(aq) + H₂O(l) + CO₂(g)↑',
    thermodynamics: 'Endotérmica',
    deltaTemp: -0.5,
    initialPh: 8.3,
    finalPh: 7.5,
    gasProduced: 'CO₂ (Dióxido de Carbono)',
    effervescenceIntensity: 'low',
    observations: [
      'A temperatura ambiente la mezcla es diáfana o muestra una ligera opalescencia.',
      'Al calentar suavemente (>50 °C), la solución se vuelve súbitamente lechosa y espesa.',
      'Precipita un fino polvo blanco insoluble de carbonato de calcio (calcita pura).',
      'Se desprenden pequeñas burbujas discretas de gas CO₂ a medida que el bicarbonato hidroliza.'
    ],
    industrialOrDailySignificance: 'Formación de estalactitas kársticas, incrustaciones calcáreas en tuberías de agua dura y clarificación de aguas residuales.',
    reactionSpeed: 'Moderada'
  }
];
