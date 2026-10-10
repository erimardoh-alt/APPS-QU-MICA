export interface CompoundFactSheet {
  iupacName: string;
  traditionalName: string;
  chemicalFormula: string;
  molarMass: string;
  casNumber: string;
  crystalSystem: string;
  density: string;
  solubilityWater20C: string;
  solubilityWater0C: string;
  solubilityWater60C: string;
  aqueousPh: string;
  pKa1: number;
  pKa2: number;
  thermalDecompTemp: string;
  nfpaRating: { health: number; fire: number; reactivity: number };
}

export const SODIUM_BICARBONATE_FACTS: CompoundFactSheet = {
  iupacName: 'Hidrogenocarbonato de sodio (Sodium hydrogencarbonate)',
  traditionalName: 'Bicarbonato de sodio / Bicarbonato sódico',
  chemicalFormula: 'NaHCO₃',
  molarMass: '84.007 g/mol',
  casNumber: '144-55-8',
  crystalSystem: 'Monoclínico (grupo espacial P2₁/c)',
  density: '2.20 g/cm³ (sólido cristalino)',
  solubilityWater20C: '96.0 g/L (9.6 g en 100 mL)',
  solubilityWater0C: '69.0 g/L (6.9 g en 100 mL)',
  solubilityWater60C: '164.0 g/L (16.4 g en 100 mL)',
  aqueousPh: '~8.34 a 25 °C (solución 0.1 M, anfolito)',
  pKa1: 6.35, // H2CO3 ⇌ H+ + HCO3-
  pKa2: 10.33, // HCO3- ⇌ H+ + CO3(2-)
  thermalDecompTemp: 'Inicia lentamente a >50 °C; vigorosa y rápida entre 100 °C y 200 °C',
  nfpaRating: { health: 1, fire: 0, reactivity: 0 }
};

export const HISTORICAL_MILESTONES = [
  {
    year: '1791',
    title: 'El Proceso Leblanc',
    scientist: 'Nicolas Leblanc (Francia)',
    description: 'Sintetizó carbonato de sodio a partir de salmuera, ácido sulfúrico, carbón y caliza. Aunque contaminante, sentó las bases de la industria álcali masiva.'
  },
  {
    year: '1801',
    title: 'Descubrimiento del Bicarbonato Puro',
    scientist: 'Valentin Rose el Joven (Alemania)',
    description: 'Aisló por primera vez cristales puros de bicarbonato de sodio haciendo pasar una corriente de CO₂ a través de una disolución concentrada de carbonato sódico.'
  },
  {
    year: '1814',
    title: 'Acuñación del nombre "Bicarbonate"',
    scientist: 'William Hyde Wollaston (Reino Unido)',
    description: 'Descubrió que este compuesto contenía exactamente el doble de ácido carbónico por átomo de base sódica en comparación con el carbonato normal, introduciendo el término "bicarbonato".'
  },
  {
    year: '1861',
    title: 'Invención del Proceso Solvay',
    scientist: 'Ernest Solvay (Bélgica)',
    description: 'Desarrolló la torre de carbonatación continua con salmuera amoniacal, un proceso elegante, cerrado y económico que revolucionó la producción mundial de NaHCO₃ y Na₂CO₃.'
  },
  {
    year: '1938',
    title: 'Descubrimiento de la Trona en Wyoming',
    scientist: 'Union Pacific Railroad / Geólogos de EE.UU.',
    description: 'Se hallaron los descomunales depósitos de mineral trona (Na₃(CO₃)(HCO₃)·2H₂O) en Green River, convirtiendo la minería natural en la fuente más rentable de bicarbonato.'
  }
];

export const BUFFER_SYSTEM_POINTS = [
  {
    title: 'Ecuación de Henderson-Hasselbalch',
    formula: 'pH = 6.1 + log₁₀( [HCO₃⁻] / (0.0306 × PaCO₂) )',
    description: 'Regula el pH sanguíneo humano estrictamente entre 7.35 y 7.45. La relación molar [HCO₃⁻] a [CO₂ disuelto] es exactamente de 20:1.'
  },
  {
    title: 'Regulación Bicompartimental (Pulmón + Riñón)',
    formula: 'CO₂ (respiratorio) ⇌ H₂CO₃ ⇌ H⁺ + HCO₃⁻ (metabólico/renal)',
    description: 'Los pulmones eliminan o retienen CO₂ volátil en segundos a minutos mediante la ventilación, mientras que los riñones modulan la excreción o reabsorción de HCO₃⁻ a lo largo de horas y días.'
  },
  {
    title: 'Anhidrasa Carbónica (CA II & IV)',
    formula: 'CO₂ + H₂O ⇌(Zn²⁺)⇌ H₂CO₃',
    description: 'Una de las enzimas más veloces del organismo; acelera la interconversión más de un millón de veces por segundo en eritrocitos y túbulos renales.'
  }
];
