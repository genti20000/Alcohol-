import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import {
  PRACTICE_EXAM_QUESTIONS,
  EXAM_PASS_THRESHOLD,
  EXAM_TOTAL_QUESTIONS,
  EXAM_TIME_LIMIT_MINUTES,
} from '../data/examData';
import { ExamAttempt, LearnerProfile } from '../types/licensing';
import {
  Clock,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  RotateCcw,
  Award,
  ChevronLeft,
  ChevronRight,
  Flag,
  ShieldCheck,
  Check,
  X,
} from 'lucide-react';

interface PracticeExamProps {
  activeLearner: LearnerProfile;
  onSaveExamAttempt: (attempt: ExamAttempt) => void;
  onViewCertificate: () => void;
}

export const PracticeExam: React.FC<PracticeExamProps> = ({
  activeLearner,
  onSaveExamAttempt,
  onViewCertificate,
}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, 'A' | 'B' | 'C' | 'D'>>({});
  const [flaggedQuestions, setFlaggedQuestions] = useState<Record<number, boolean>>({});
  const [examSubmitted, setExamSubmitted] = useState(false);
  const [secondsRemaining, setSecondsRemaining] = useState(EXAM_TIME_LIMIT_MINUTES * 60);
  const [isTimerRunning, setIsTimerRunning] = useState(true);
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [activeAttempt, setActiveAttempt] = useState<ExamAttempt | null>(null);

  // Timer countdown
  useEffect(() => {
    if (!isTimerRunning || examSubmitted) return;
    const interval = setInterval(() => {
      setSecondsRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          handleSubmitExam();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [isTimerRunning, examSubmitted, userAnswers]);

  const currentQ = PRACTICE_EXAM_QUESTIONS[currentQuestionIndex];

  const handleSelectOption = (questionId: number, optionKey: 'A' | 'B' | 'C' | 'D') => {
    if (examSubmitted) return;
    setUserAnswers((prev) => ({
      ...prev,
      [questionId]: optionKey,
    }));
  };

  const toggleFlag = (questionId: number) => {
    setFlaggedQuestions((prev) => ({
      ...prev,
      [questionId]: !prev[questionId],
    }));
  };

  const handleSubmitExam = () => {
    let score = 0;
    PRACTICE_EXAM_QUESTIONS.forEach((q) => {
      if (userAnswers[q.id] === q.answer) {
        score++;
      }
    });

    const passed = score >= EXAM_PASS_THRESHOLD;
    const percentage = Math.round((score / EXAM_TOTAL_QUESTIONS) * 100);
    const timeSpent = EXAM_TIME_LIMIT_MINUTES * 60 - secondsRemaining;

    const attempt: ExamAttempt = {
      id: `attempt-${Date.now()}`,
      timestamp: new Date().toISOString(),
      score,
      totalQuestions: EXAM_TOTAL_QUESTIONS,
      percentage,
      passed,
      userAnswers,
      timeSpentSeconds: timeSpent,
    };

    setActiveAttempt(attempt);
    setExamSubmitted(true);
    setIsTimerRunning(false);
    onSaveExamAttempt(attempt);

    if (passed) {
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
        });
      } catch (e) {
        // Safe fallback if confetti isn't supported
      }
    }
  };

  const handleRetakeExam = () => {
    setUserAnswers({});
    setFlaggedQuestions({});
    setExamSubmitted(false);
    setSecondsRemaining(EXAM_TIME_LIMIT_MINUTES * 60);
    setIsTimerRunning(true);
    setCurrentQuestionIndex(0);
    setActiveAttempt(null);
  };

  // Format timer
  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remSecs = secs % 60;
    return `${mins.toString().padStart(2, '0')}:${remSecs.toString().padStart(2, '0')}`;
  };

  const answeredCount = Object.keys(userAnswers).length;

  return (
    <div className="space-y-8">
      {/* Top Banner / Exam State Bar */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono-code font-semibold text-amber-700 uppercase tracking-wider">
            <span>Level 2 APLH Standard Practice Assessment</span>
            <span>·</span>
            <span>Licensing Act 2003</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
            40-Question Alcohol Personal Licence Practice Exam
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Suggested statutory pass target: 28/40 (70%). Single best choice per question.
          </p>
        </div>

        <div className="flex items-center gap-4">
          {!examSubmitted && (
            <div className="flex items-center gap-3 bg-slate-100/80 px-4 py-2 rounded-lg border border-slate-200">
              <Clock className="w-4 h-4 text-slate-600" />
              <div className="text-right">
                <div className="text-[10px] text-slate-500 font-medium">Time Remaining</div>
                <div className="text-base font-bold font-mono-code tabular-nums text-slate-900">
                  {formatTime(secondsRemaining)}
                </div>
              </div>
            </div>
          )}

          {!examSubmitted ? (
            <button
              onClick={handleSubmitExam}
              className="py-2.5 px-5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-xs sm:text-sm rounded-lg transition-colors shadow-xs"
            >
              Submit Exam ({answeredCount}/{EXAM_TOTAL_QUESTIONS})
            </button>
          ) : (
            <button
              onClick={handleRetakeExam}
              className="py-2.5 px-4 bg-slate-900 hover:bg-slate-800 text-white font-medium text-xs sm:text-sm rounded-lg transition-colors flex items-center gap-2"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Retake Practice Exam</span>
            </button>
          )}
        </div>
      </div>

      {/* Results View when Exam is Submitted */}
      {examSubmitted && activeAttempt && (
        <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 space-y-6 animate-in fade-in duration-300">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-amber-400">
                Official Nightmark Assessment Result
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
                Candidate: {activeLearner.name}
              </h2>
              <div className="text-xs text-slate-400 mt-1">
                Completed on {new Date(activeAttempt.timestamp).toLocaleDateString()} · Time Spent: {Math.round(activeAttempt.timeSpentSeconds / 60)} minutes
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-right">
                <div className="text-3xl sm:text-4xl font-bold font-mono-code tabular-nums text-white">
                  {activeAttempt.score} <span className="text-lg text-slate-400">/ 40</span>
                </div>
                <div className="text-xs text-slate-400 font-mono-code tabular-nums">
                  {activeAttempt.percentage}% Score (Target: 70%)
                </div>
              </div>

              <div className={`p-4 rounded-xl border flex flex-col items-center justify-center min-w-[120px] ${
                activeAttempt.passed
                  ? 'bg-emerald-950/80 border-emerald-600 text-emerald-300'
                  : 'bg-rose-950/80 border-rose-600 text-rose-300'
              }`}>
                {activeAttempt.passed ? (
                  <>
                    <ShieldCheck className="w-6 h-6 mb-1 text-emerald-400" />
                    <span className="font-bold text-sm">PASSED</span>
                  </>
                ) : (
                  <>
                    <XCircle className="w-6 h-6 mb-1 text-rose-400" />
                    <span className="font-bold text-sm">RETAKE NEEDED</span>
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-slate-300">
            <p>
              {activeAttempt.passed
                ? 'Congratulations! You have surpassed the 70% statutory benchmark. Your training certificate has been automatically issued and registered on the system.'
                : `You scored ${activeAttempt.score} out of 40 (minimum 28 required). Review the statutory answer explanations below and retake the assessment when ready.`}
            </p>

            {activeAttempt.passed && (
              <button
                onClick={onViewCertificate}
                className="py-2.5 px-5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-xs sm:text-sm rounded-lg transition-colors whitespace-nowrap flex items-center gap-2 shrink-0 shadow-md"
              >
                <Award className="w-4 h-4" />
                <span>Open Official Certificate</span>
              </button>
            )}
          </div>
        </div>
      )}

      {/* Main Exam Interface (2-column layout) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left / Active Question Display (8 cols) */}
        <div className="lg:col-span-8 space-y-6">
          <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono-code font-bold text-slate-400">
                  Question {currentQ.id.toString().padStart(2, '0')} of {EXAM_TOTAL_QUESTIONS}
                </span>
                <span className="text-slate-300">·</span>
                <span className="text-xs text-slate-500 font-medium">
                  {currentQ.category}
                </span>
              </div>

              {!examSubmitted && (
                <button
                  onClick={() => toggleFlag(currentQ.id)}
                  className={`text-xs flex items-center gap-1.5 px-2.5 py-1 rounded-md transition-colors ${
                    flaggedQuestions[currentQ.id]
                      ? 'bg-amber-100 text-amber-800 font-semibold'
                      : 'text-slate-500 hover:bg-slate-100'
                  }`}
                >
                  <Flag className="w-3.5 h-3.5" />
                  <span>{flaggedQuestions[currentQ.id] ? 'Flagged for Review' : 'Flag Question'}</span>
                </button>
              )}
            </div>

            <div className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
              {currentQ.question}
            </div>

            {/* Answer Options */}
            <div className="space-y-3">
              {currentQ.options.map((option) => {
                const isSelected = userAnswers[currentQ.id] === option.key;
                const isCorrect = currentQ.answer === option.key;

                let cardStyle = 'border-slate-200 hover:border-slate-300 bg-white text-slate-800';

                if (isSelected && !examSubmitted) {
                  cardStyle = 'border-amber-500 bg-amber-50/70 text-slate-950 font-medium ring-1 ring-amber-500';
                }

                if (examSubmitted) {
                  if (isCorrect) {
                    cardStyle = 'border-emerald-500 bg-emerald-50/90 text-emerald-950 font-semibold ring-1 ring-emerald-500';
                  } else if (isSelected && !isCorrect) {
                    cardStyle = 'border-rose-400 bg-rose-50/90 text-rose-950 ring-1 ring-rose-400';
                  } else {
                    cardStyle = 'border-slate-100 bg-slate-50/40 text-slate-400';
                  }
                }

                return (
                  <button
                    key={option.key}
                    onClick={() => handleSelectOption(currentQ.id, option.key)}
                    disabled={examSubmitted}
                    className={`w-full p-4 rounded-xl border text-left text-xs sm:text-sm transition-all flex items-start gap-3.5 cursor-pointer ${cardStyle}`}
                  >
                    <div className="w-6 h-6 rounded-full border border-current flex items-center justify-center font-mono-code font-bold shrink-0 text-xs mt-0.5">
                      {option.key}
                    </div>
                    <div className="flex-1 leading-relaxed">
                      {option.text}
                    </div>

                    {examSubmitted && (
                      <div className="shrink-0 mt-0.5">
                        {isCorrect && <Check className="w-5 h-5 text-emerald-600" />}
                        {isSelected && !isCorrect && <X className="w-5 h-5 text-rose-600" />}
                      </div>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Detailed Statutory Explanation in Review Mode */}
            {examSubmitted && (
              <div className="p-4 rounded-xl bg-slate-100 border border-slate-200 text-xs sm:text-sm space-y-2 animate-in fade-in duration-200">
                <div className="font-semibold text-slate-900 flex items-center gap-1.5">
                  <span>Legal & Statutory Explanation:</span>
                </div>
                <p className="text-slate-700 leading-relaxed">
                  {currentQ.explanation}
                </p>
                <div className="text-[11px] text-slate-500 pt-1 font-mono-code">
                  Correct Answer: Option {currentQ.answer}
                </div>
              </div>
            )}

            {/* Bottom Question Controls */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
              <button
                onClick={() => setCurrentQuestionIndex((prev) => Math.max(0, prev - 1))}
                disabled={currentQuestionIndex === 0}
                className="px-4 py-2 rounded-lg border border-slate-200 text-xs font-medium text-slate-700 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1.5"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Previous</span>
              </button>

              <span className="text-xs text-slate-500 font-mono-code tabular-nums">
                {currentQuestionIndex + 1} / {EXAM_TOTAL_QUESTIONS}
              </span>

              <button
                onClick={() => setCurrentQuestionIndex((prev) => Math.min(EXAM_TOTAL_QUESTIONS - 1, prev + 1))}
                disabled={currentQuestionIndex === EXAM_TOTAL_QUESTIONS - 1}
                className="px-4 py-2 rounded-lg border border-slate-200 text-xs font-medium text-slate-700 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1.5"
              >
                <span>Next</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Right / Question Navigator Palette (4 cols) */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                Question Navigator
              </span>
              <span className="text-xs font-mono-code text-slate-500 tabular-nums">
                {answeredCount}/{EXAM_TOTAL_QUESTIONS} Answered
              </span>
            </div>

            {/* 40-question grid */}
            <div className="grid grid-cols-8 gap-1.5">
              {PRACTICE_EXAM_QUESTIONS.map((q, idx) => {
                const isCurrent = idx === currentQuestionIndex;
                const isAnswered = userAnswers[q.id] !== undefined;
                const isFlagged = flaggedQuestions[q.id];
                const isCorrect = userAnswers[q.id] === q.answer;

                let pillColor = 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100';

                if (isAnswered && !examSubmitted) {
                  pillColor = 'bg-amber-100 text-amber-900 border-amber-300 font-medium';
                }

                if (isFlagged && !examSubmitted) {
                  pillColor = 'bg-amber-500 text-slate-950 font-bold border-amber-600';
                }

                if (examSubmitted) {
                  if (isCorrect) {
                    pillColor = 'bg-emerald-100 text-emerald-900 border-emerald-300 font-semibold';
                  } else {
                    pillColor = 'bg-rose-100 text-rose-900 border-rose-300 font-semibold';
                  }
                }

                if (isCurrent) {
                  pillColor += ' ring-2 ring-slate-900';
                }

                return (
                  <button
                    key={q.id}
                    onClick={() => setCurrentQuestionIndex(idx)}
                    className={`h-8 rounded-md text-xs font-mono-code flex items-center justify-center border transition-all ${pillColor}`}
                    title={`Question ${q.id}: ${q.category}`}
                  >
                    {q.id}
                  </button>
                );
              })}
            </div>

            {/* Legend */}
            <div className="pt-3 border-t border-slate-100 grid grid-cols-2 gap-2 text-[11px] text-slate-500">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-sm bg-amber-100 border border-amber-300 inline-block" />
                <span>Answered</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-sm bg-slate-50 border border-slate-200 inline-block" />
                <span>Unanswered</span>
              </div>
              {examSubmitted && (
                <>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-sm bg-emerald-100 border border-emerald-300 inline-block" />
                    <span>Correct</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-sm bg-rose-100 border border-rose-300 inline-block" />
                    <span>Incorrect</span>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Practice Exam Guidance Note */}
          <div className="bg-slate-50 rounded-xl border border-slate-200 p-5 space-y-2 text-xs text-slate-600">
            <div className="font-semibold text-slate-900">
              Accreditation & Legal Notice
            </div>
            <p>
              This 40-question mock assessment reflects genuine APLH exam standards (England & Wales). In accordance with Home Office guidelines, actual accredited personal licence certification requires sitting an invigilated examination with an approved awarding body (e.g. BIIAB, Highfield, City & Guilds).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
