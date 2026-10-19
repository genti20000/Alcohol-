import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, CheckCircle2, ChevronRight, HelpCircle, Check, X, Scale, AlertCircle, BookmarkCheck, ListChecks, ShieldAlert } from 'lucide-react';
import { CourseModule, LearnerProfile } from '../types/licensing';

interface ModuleReaderProps {
  module: CourseModule;
  modules: CourseModule[];
  activeLearner: LearnerProfile;
  onSelectModule: (moduleId: string) => void;
  onBackToOverview: () => void;
  onCompleteModule: (moduleId: string, quizScore: number) => void;
}

export const ModuleReader: React.FC<ModuleReaderProps> = ({
  module,
  modules,
  activeLearner,
  onSelectModule,
  onBackToOverview,
  onCompleteModule,
}) => {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, 'A' | 'B' | 'C' | 'D'>>({});
  const [showQuizResults, setShowQuizResults] = useState(false);
  const [showScenarioResolution, setShowScenarioResolution] = useState(false);
  const [checkedChecklist, setCheckedChecklist] = useState<Record<number, boolean>>({});

  const isCompleted = activeLearner.completedModuleIds.includes(module.id);
  const currentIndex = modules.findIndex((m) => m.id === module.id);
  const prevModule = currentIndex > 0 ? modules[currentIndex - 1] : null;
  const nextModule = currentIndex < modules.length - 1 ? modules[currentIndex + 1] : null;

  // Toggle checklist
  const toggleChecklist = (index: number) => {
    setCheckedChecklist((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  // Submit quiz
  const handleSelectQuizOption = (questionId: string, optionKey: 'A' | 'B' | 'C' | 'D') => {
    if (showQuizResults) return;
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: optionKey,
    }));
  };

  const handleGradeQuiz = () => {
    setShowQuizResults(true);
    let correctCount = 0;
    module.quiz.forEach((q) => {
      if (selectedAnswers[q.id] === q.answer) {
        correctCount++;
      }
    });
    const scorePercent = Math.round((correctCount / module.quiz.length) * 100);
    onCompleteModule(module.id, scorePercent);
  };

  const calculateCurrentScore = () => {
    let correct = 0;
    module.quiz.forEach((q) => {
      if (selectedAnswers[q.id] === q.answer) correct++;
    });
    return {
      correct,
      total: module.quiz.length,
      percent: Math.round((correct / module.quiz.length) * 100),
    };
  };

  return (
    <div className="space-y-8">
      {/* Navigation Top Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
        <button
          onClick={onBackToOverview}
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Curriculum Syllabus</span>
        </button>

        <div className="flex items-center gap-3">
          {prevModule && (
            <button
              onClick={() => onSelectModule(prevModule.id)}
              className="text-xs text-slate-600 hover:text-slate-900 px-3 py-1.5 rounded-md border border-slate-200 hover:bg-slate-50 transition-colors"
            >
              ← Mod {prevModule.moduleNumber}
            </button>
          )}
          <span className="text-xs font-mono-code text-slate-400">
            {module.moduleNumber} of {modules.length}
          </span>
          {nextModule && (
            <button
              onClick={() => onSelectModule(nextModule.id)}
              className="text-xs text-slate-600 hover:text-slate-900 px-3 py-1.5 rounded-md border border-slate-200 hover:bg-slate-50 transition-colors"
            >
              Mod {nextModule.moduleNumber} →
            </button>
          )}
        </div>
      </div>

      {/* Module Title Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-xs font-mono-code font-semibold text-amber-700 tracking-wider uppercase">
          <Scale className="w-4 h-4 inline" />
          <span>Module {module.moduleNumber.toString().padStart(2, '0')} · {module.readingTimeMinutes} Minutes Reading Time</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
          {module.title}
        </h1>
        <p className="text-sm text-slate-600">
          Statutory Reference: <span className="font-medium text-slate-800">{module.statutoryBasis}</span>
        </p>
      </div>

      {/* Main Content Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Main Reading Column (8 cols) */}
        <div className="lg:col-span-8 space-y-8">
          {module.sections.map((section, sIdx) => (
            <div key={sIdx} className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 space-y-4">
              <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3">
                {section.title}
              </h2>

              <div className="space-y-3 text-sm text-slate-700 leading-relaxed">
                {section.content.map((paragraph, pIdx) => (
                  <p key={pIdx}>{paragraph}</p>
                ))}
              </div>

              {section.keyHighlight && (
                <div className="mt-4 p-4 rounded-lg bg-amber-50/80 border border-amber-200 text-amber-950 text-xs sm:text-sm flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold">Key Statutory Rule: </span>
                    {section.keyHighlight}
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* Interactive Venue Scenario Dilemma */}
          <div className="bg-slate-900 text-white rounded-xl p-6 sm:p-8 space-y-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold tracking-wider uppercase">
                <ShieldAlert className="w-4 h-4" />
                <span>Real-World Venue Dilemma</span>
              </div>
              <span className="text-[11px] text-slate-400">Nightmark Operational Lab</span>
            </div>

            <h3 className="text-xl font-bold text-white">
              {module.venueScenario.title}
            </h3>

            <div className="p-4 rounded-lg bg-slate-800/80 border border-slate-700 text-xs sm:text-sm text-slate-300 space-y-2">
              <p><span className="font-semibold text-white">Situation: </span>{module.venueScenario.situation}</p>
              <p><span className="font-semibold text-amber-300">Dilemma: </span>{module.venueScenario.dilemma}</p>
            </div>

            {!showScenarioResolution ? (
              <button
                onClick={() => setShowScenarioResolution(true)}
                className="w-full py-2.5 px-4 bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-xs sm:text-sm rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <span>Reveal Correct Action & Statutory Analysis</span>
              </button>
            ) : (
              <div className="space-y-3 pt-2 text-xs sm:text-sm animate-in fade-in duration-200">
                <div className="p-4 rounded-lg bg-emerald-950/70 border border-emerald-700/80 text-emerald-200 space-y-1">
                  <div className="font-semibold text-emerald-300 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" />
                    Correct Action
                  </div>
                  <p>{module.venueScenario.correctAction}</p>
                </div>

                <div className="p-4 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 space-y-1">
                  <div className="font-semibold text-slate-200">Legal Rationale</div>
                  <p>{module.venueScenario.rationale}</p>
                  <p className="pt-2 text-xs text-rose-300">
                    <span className="font-semibold">Common Costly Mistake: </span>
                    {module.venueScenario.commonMistake}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Interactive Check-in Quiz */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  Module {module.moduleNumber} Knowledge Check
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Answer the {module.quiz.length} compliance questions below to verify mastery.
                </p>
              </div>
              {showQuizResults && (
                <div className="text-right">
                  <div className="text-sm font-bold text-slate-900 font-mono-code tabular-nums">
                    {calculateCurrentScore().correct} / {calculateCurrentScore().total}
                  </div>
                  <div className="text-[11px] text-slate-500">
                    {calculateCurrentScore().percent}% Score
                  </div>
                </div>
              )}
            </div>

            <div className="space-y-6">
              {module.quiz.map((q, qIndex) => {
                const userChoice = selectedAnswers[q.id];
                const isAnswered = userChoice !== undefined;
                const isCorrect = userChoice === q.answer;

                return (
                  <div key={q.id} className="space-y-3">
                    <div className="text-sm font-semibold text-slate-900 flex items-start gap-2">
                      <span className="font-mono-code text-slate-400">
                        Q{qIndex + 1}.
                      </span>
                      <span>{q.question}</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {q.options.map((option) => {
                        let btnStyle = 'border-slate-200 hover:border-slate-300 bg-white text-slate-800';
                        if (userChoice === option.key) {
                          btnStyle = 'border-amber-500 bg-amber-50/70 text-slate-950 font-medium';
                        }
                        if (showQuizResults) {
                          if (option.key === q.answer) {
                            btnStyle = 'border-emerald-500 bg-emerald-50 text-emerald-950 font-semibold';
                          } else if (userChoice === option.key && !isCorrect) {
                            btnStyle = 'border-rose-400 bg-rose-50 text-rose-950';
                          } else {
                            btnStyle = 'border-slate-100 bg-slate-50/50 text-slate-400 opacity-75';
                          }
                        }

                        return (
                          <button
                            key={option.key}
                            onClick={() => handleSelectQuizOption(q.id, option.key)}
                            disabled={showQuizResults}
                            className={`p-3 rounded-lg border text-left text-xs transition-all flex items-start gap-2.5 ${btnStyle}`}
                          >
                            <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center font-mono-code font-bold shrink-0 text-[11px]">
                              {option.key}
                            </span>
                            <span className="flex-1">{option.text}</span>
                          </button>
                        );
                      })}
                    </div>

                    {showQuizResults && (
                      <div className={`p-3 rounded-lg text-xs space-y-1 ${isCorrect ? 'bg-emerald-50/80 text-emerald-900 border border-emerald-200' : 'bg-rose-50/80 text-rose-900 border border-rose-200'}`}>
                        <div className="font-semibold flex items-center gap-1.5">
                          {isCorrect ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-emerald-600" />
                              <span>Correct!</span>
                            </>
                          ) : (
                            <>
                              <X className="w-3.5 h-3.5 text-rose-600" />
                              <span>Incorrect. Correct answer is option {q.answer}.</span>
                            </>
                          )}
                        </div>
                        <p>{q.explanation}</p>
                        <p className="text-[11px] text-slate-500 italic">Legal basis: {q.legalBasis}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {!showQuizResults ? (
              <button
                onClick={handleGradeQuiz}
                disabled={Object.keys(selectedAnswers).length < module.quiz.length}
                className="w-full py-3 px-4 bg-slate-900 hover:bg-slate-800 disabled:bg-slate-300 text-white font-semibold text-xs sm:text-sm rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <span>Submit Quiz & Record Progress</span>
              </button>
            ) : (
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-slate-100">
                <span className="text-xs text-slate-600">
                  {calculateCurrentScore().percent >= 66
                    ? 'Great work! You have mastered the key compliance points for this module.'
                    : 'Review the legal basis above to prepare for the 40-question exam.'}
                </span>

                {nextModule && (
                  <button
                    onClick={() => onSelectModule(nextModule.id)}
                    className="py-2 px-4 bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-xs rounded-lg transition-colors flex items-center gap-1.5 whitespace-nowrap"
                  >
                    <span>Proceed to Module {nextModule.moduleNumber}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Right Sidebar: Shift Checklist & Navigation (4 cols) */}
        <div className="lg:col-span-4 space-y-6">
          {/* Operational Shift Checklist */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-4">
            <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
              <ListChecks className="w-4 h-4 text-amber-600" />
              <span>Shift Compliance Checklist</span>
            </div>
            <p className="text-xs text-slate-500">
              Daily habits recommended for DPS and supervisors based on this module.
            </p>

            <div className="space-y-2.5">
              {module.checklistItems.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => toggleChecklist(idx)}
                  className="flex items-start gap-2.5 text-xs text-slate-700 cursor-pointer p-2 rounded-md hover:bg-slate-50 transition-colors"
                >
                  <input
                    type="checkbox"
                    checked={!!checkedChecklist[idx]}
                    onChange={() => {}}
                    className="mt-0.5 rounded border-slate-300 text-amber-600 focus:ring-amber-500 cursor-pointer"
                  />
                  <span className={checkedChecklist[idx] ? 'line-through text-slate-400' : ''}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Module Completion Status Card */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-600 uppercase tracking-wider">
                Module Status
              </span>
              {isCompleted ? (
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700">
                  <CheckCircle2 className="w-4 h-4" /> Completed
                </span>
              ) : (
                <span className="text-xs text-slate-500">In Progress</span>
              )}
            </div>

            <div className="text-xs text-slate-600">
              Learner: <span className="font-semibold text-slate-900">{activeLearner.name}</span>
            </div>

            {!isCompleted && (
              <button
                onClick={() => onCompleteModule(module.id, 100)}
                className="w-full py-2.5 px-3 bg-white hover:bg-slate-100 border border-slate-300 text-slate-900 font-medium text-xs rounded-lg transition-colors flex items-center justify-center gap-2 shadow-xs"
              >
                <BookmarkCheck className="w-4 h-4 text-amber-600" />
                <span>Mark Module Read & Verified</span>
              </button>
            )}
          </div>

          {/* Jump to Another Module */}
          <div className="bg-white rounded-xl border border-slate-200 p-4 space-y-2">
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider px-2">
              Syllabus Outline
            </div>
            <div className="space-y-1">
              {modules.map((m) => (
                <button
                  key={m.id}
                  onClick={() => onSelectModule(m.id)}
                  className={`w-full text-left px-2.5 py-1.5 rounded-md text-xs transition-colors flex items-center justify-between ${
                    m.id === module.id
                      ? 'bg-amber-100/70 font-semibold text-amber-950'
                      : 'hover:bg-slate-50 text-slate-700'
                  }`}
                >
                  <span className="truncate">
                    Mod {m.moduleNumber}: {m.shortTitle}
                  </span>
                  {activeLearner.completedModuleIds.includes(m.id) && (
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 ml-1" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
