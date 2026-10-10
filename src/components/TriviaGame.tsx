import React, { useState, useEffect, useRef } from 'react';
import { DifficultyLevel, Question, QuizAnswerRecord } from '../types/trivia';
import { TRIVIA_QUESTIONS } from '../data/triviaQuestions';
import { QuestionCard } from './QuestionCard';
import { ScientificExplanationModal } from './ScientificExplanationModal';
import { CertificateModal } from './CertificateModal';
import { playCorrectSound, playWrongSound, playClickSound } from '../utils/audio';
import { ArrowLeft } from 'lucide-react';

interface TriviaGameProps {
  selectedLevel: DifficultyLevel | 'all';
  timedMode: boolean;
  onExit: () => void;
  onLevelComplete: (level: DifficultyLevel, score: number) => void;
}

export function TriviaGame({
  selectedLevel,
  timedMode,
  onExit,
  onLevelComplete
}: TriviaGameProps) {
  // Filter questions according to mode
  const questions: Question[] = React.useMemo(() => {
    if (selectedLevel === 'all') {
      // Sort progressive 1 -> 2 -> 3 -> 4
      return [...TRIVIA_QUESTIONS].sort((a, b) => a.levelNumber - b.levelNumber);
    }
    return TRIVIA_QUESTIONS.filter((q) => q.level === selectedLevel);
  }, [selectedLevel]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [highestStreak, setHighestStreak] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswerRecord[]>([]);
  const [isFinished, setIsFinished] = useState(false);

  // Timer
  const [timeLeft, setTimeLeft] = useState<number | null>(timedMode ? 30 : null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const currentQuestion = questions[currentIndex];

  // Start question timer
  useEffect(() => {
    if (!timedMode || isFinished || showExplanation) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    setTimeLeft(30);
    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev === null || prev <= 1) {
          if (timerRef.current) clearInterval(timerRef.current);
          handleTimeOut();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [currentIndex, timedMode, isFinished, showExplanation]);

  const handleTimeOut = () => {
    // Treat as incorrect selection if user timed out
    handleSelectOption(-1);
  };

  const handleSelectOption = (optionIndex: number) => {
    if (showExplanation) return;
    if (timerRef.current) clearInterval(timerRef.current);

    setSelectedOption(optionIndex);
    const isCorrect = optionIndex === currentQuestion.correctIndex;

    let pointsEarned = 0;
    if (isCorrect) {
      playCorrectSound();
      const newStreak = streak + 1;
      setStreak(newStreak);
      if (newStreak > highestStreak) {
        setHighestStreak(newStreak);
      }
      // Streak multiplier bonus
      const multiplier = newStreak > 4 ? 1.5 : newStreak > 2 ? 1.25 : 1.0;
      pointsEarned = Math.round(currentQuestion.difficultyPoints * multiplier);
      setScore((prev) => prev + pointsEarned);
    } else {
      playWrongSound();
      setStreak(0);
    }

    setAnswers((prev) => [
      ...prev,
      {
        questionId: currentQuestion.id,
        questionText: currentQuestion.question,
        selectedIndex: optionIndex,
        correctIndex: currentQuestion.correctIndex,
        isCorrect,
        timeSpentSec: timedMode && timeLeft !== null ? 30 - timeLeft : 0,
        category: currentQuestion.category
      }
    ]);

    setShowExplanation(true);
  };

  const handleNextQuestion = () => {
    playClickSound();
    setShowExplanation(false);
    setSelectedOption(null);

    if (currentIndex + 1 < questions.length) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setIsFinished(true);
      if (selectedLevel !== 'all') {
        onLevelComplete(selectedLevel, score);
      }
    }
  };

  const handleRestart = () => {
    playClickSound();
    setCurrentIndex(0);
    setSelectedOption(null);
    setShowExplanation(false);
    setScore(0);
    setStreak(0);
    setHighestStreak(0);
    setAnswers([]);
    setIsFinished(false);
  };

  // Keyboard shortcut listener (Mac & Desktop: 1/2/3/4 or A/B/C/D to answer, Space/Enter to advance)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't intercept if user is typing in an input
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) {
        return;
      }

      if (showExplanation) {
        if (e.key === ' ' || e.key === 'Enter' || e.key === 'ArrowRight') {
          e.preventDefault();
          handleNextQuestion();
        }
        return;
      }

      if (selectedOption === null) {
        if (e.key === '1' || e.key === 'a' || e.key === 'A') {
          e.preventDefault();
          handleSelectOption(0);
        } else if (e.key === '2' || e.key === 'b' || e.key === 'B') {
          e.preventDefault();
          handleSelectOption(1);
        } else if (e.key === '3' || e.key === 'c' || e.key === 'C') {
          e.preventDefault();
          handleSelectOption(2);
        } else if (e.key === '4' || e.key === 'd' || e.key === 'D') {
          e.preventDefault();
          handleSelectOption(3);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showExplanation, selectedOption, currentIndex]);

  const totalPossibleScore = questions.reduce((acc, q) => acc + q.difficultyPoints, 0);

  if (isFinished) {
    return (
      <CertificateModal
        score={score}
        totalPossibleScore={totalPossibleScore}
        answerRecords={answers}
        highestStreak={highestStreak}
        levelTitle={selectedLevel === 'all' ? 'Campaña Completa (Niveles 1 al 4)' : currentQuestion.levelTitle}
        onRestart={handleRestart}
        onBackToMenu={onExit}
      />
    );
  }

  return (
    <div className="space-y-6 max-w-3xl mx-auto animate-fadeIn">
      {/* Back button */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => {
            playClickSound();
            onExit();
          }}
          className="text-xs font-mono text-slate-400 hover:text-white flex items-center gap-1.5 transition"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Volver al Menú de Niveles</span>
        </button>

        <span className="text-xs font-mono text-teal-400 font-semibold">
          {selectedLevel === 'all' ? 'Campaña Progresiva NaHCO₃' : currentQuestion.levelTitle}
        </span>
      </div>

      {/* Main Question Card */}
      <QuestionCard
        question={currentQuestion}
        currentIndex={currentIndex}
        totalQuestions={questions.length}
        score={score}
        streak={streak}
        timeLeft={timeLeft}
        onSelectOption={handleSelectOption}
        disabled={showExplanation}
      />

      {/* Scientific Explanation Modal upon answering */}
      {showExplanation && selectedOption !== null && (
        <ScientificExplanationModal
          question={currentQuestion}
          selectedOptionIndex={selectedOption}
          onNext={handleNextQuestion}
          isLastQuestion={currentIndex + 1 >= questions.length}
        />
      )}
    </div>
  );
}
