export type DifficultyLevel = 'novice' | 'intermediate' | 'advanced' | 'expert';

export interface ScientificExplanation {
  summary: string;
  mechanism: string;
  chemicalEquation?: string;
  whyDistractorsFail: string;
  practicalOrLabFact: string;
}

export interface Question {
  id: string;
  level: DifficultyLevel;
  levelNumber: 1 | 2 | 3 | 4;
  levelTitle: string;
  category: string;
  question: string;
  options: string[];
  correctIndex: number;
  chemicalEquation?: string;
  scientificExplanation: ScientificExplanation;
  difficultyPoints: number;
  funFact: string;
}

export interface QuizAnswerRecord {
  questionId: string;
  questionText: string;
  selectedIndex: number;
  correctIndex: number;
  isCorrect: boolean;
  timeSpentSec: number;
  category: string;
}

export interface ReactionSimulation {
  id: string;
  name: string;
  category: 'Ácido-Base' | 'Térmica' | 'Precipitación' | 'Fisiológica';
  reactantA: string;
  reactantB: string;
  reactantBName: string;
  description: string;
  balancedEquation: string;
  thermodynamics: 'Endotérmica' | 'Exotérmica' | 'Termólisis';
  deltaTemp: number; // e.g. -4 for cooling, +2 for slight warming
  initialPh: number;
  finalPh: number;
  gasProduced: 'CO₂ (Dióxido de Carbono)' | 'Vapor H₂O + CO₂' | 'Ninguno';
  effervescenceIntensity: 'none' | 'low' | 'moderate' | 'high' | 'vigorous';
  observations: string[];
  industrialOrDailySignificance: string;
  reactionSpeed: 'Instantánea' | 'Rápida' | 'Requiere Calor (>50°C)' | 'Moderada';
}

export interface CompoundProperty {
  label: string;
  value: string;
  scientificNote: string;
}
