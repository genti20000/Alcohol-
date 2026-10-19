import React from 'react';
import { ShieldCheck, User, Users } from 'lucide-react';
import { LearnerProfile } from '../types/licensing';

interface HeaderProps {
  currentTab: string;
  onSelectTab: (tab: string) => void;
  activeLearner: LearnerProfile;
  learners: LearnerProfile[];
  onSwitchLearner: (learnerId: string) => void;
  onOpenNewLearnerModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  onSelectTab,
  activeLearner,
  learners,
  onSwitchLearner,
  onOpenNewLearnerModal,
}) => {
  const [showLearnerMenu, setShowLearnerMenu] = React.useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-16">
          {/* Zone 1: Brand Zone (Single text element wordmark) */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => onSelectTab('curriculum')}
              className="flex items-center gap-2.5 text-left group"
            >
              <div className="w-9 h-9 rounded-md bg-slate-900 text-amber-400 flex items-center justify-center font-serif-crest text-lg font-bold shadow-xs">
                N
              </div>
              <div className="flex flex-col">
                <span className="text-base font-bold tracking-tight text-slate-900 group-hover:text-amber-700 transition-colors whitespace-nowrap">
                  NIGHTMARK
                </span>
                <span className="text-[10px] font-medium tracking-widest text-slate-500 uppercase whitespace-nowrap">
                  Licensing Academy · APLH
                </span>
              </div>
            </button>
          </div>

          {/* Zone 2: Navigation Links (single line, unboxed, whitespace-nowrap) */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
            <button
              onClick={() => onSelectTab('curriculum')}
              className={`hover:text-slate-900 transition-colors whitespace-nowrap shrink-0 py-1 ${
                currentTab === 'curriculum' || currentTab === 'module'
                  ? 'text-slate-900 font-semibold border-b-2 border-amber-600'
                  : ''
              }`}
            >
              Curriculum (8 Modules)
            </button>
            <button
              onClick={() => onSelectTab('exam')}
              className={`hover:text-slate-900 transition-colors whitespace-nowrap shrink-0 py-1 ${
                currentTab === 'exam'
                  ? 'text-slate-900 font-semibold border-b-2 border-amber-600'
                  : ''
              }`}
            >
              40-Q Practice Exam
            </button>
            <button
              onClick={() => onSelectTab('scenarios')}
              className={`hover:text-slate-900 transition-colors whitespace-nowrap shrink-0 py-1 ${
                currentTab === 'scenarios'
                  ? 'text-slate-900 font-semibold border-b-2 border-amber-600'
                  : ''
              }`}
            >
              Venue Scenarios
            </button>
            <button
              onClick={() => onSelectTab('certificate')}
              className={`hover:text-slate-900 transition-colors whitespace-nowrap shrink-0 py-1 flex items-center gap-1.5 ${
                currentTab === 'certificate'
                  ? 'text-slate-900 font-semibold border-b-2 border-amber-600'
                  : ''
              }`}
            >
              <span>Certification</span>
              {activeLearner.certificateIssued && (
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 inline" />
              )}
            </button>
            <button
              onClick={() => onSelectTab('analytics')}
              className={`hover:text-slate-900 transition-colors whitespace-nowrap shrink-0 py-1 ${
                currentTab === 'analytics'
                  ? 'text-slate-900 font-semibold border-b-2 border-amber-600'
                  : ''
              }`}
            >
              Administrative Oversight
            </button>
            <button
              onClick={() => onSelectTab('vault')}
              className={`hover:text-slate-900 transition-colors whitespace-nowrap shrink-0 py-1 ${
                currentTab === 'vault'
                  ? 'text-slate-900 font-semibold border-b-2 border-amber-600'
                  : ''
              }`}
            >
              Legal Vault & PDFs
            </button>
          </nav>

          {/* Zone 3: Active Learner Selector & Switcher */}
          <div className="flex items-center gap-3 shrink-0 relative">
            <div className="relative">
              <button
                onClick={() => setShowLearnerMenu(!showLearnerMenu)}
                className="flex items-center gap-2.5 px-3 py-1.5 rounded-lg border border-slate-200 hover:border-slate-300 bg-slate-50/80 hover:bg-slate-100/80 transition-all text-xs text-slate-800"
                title="Switch Learner or View Registration Record"
              >
                <div className="w-6 h-6 rounded-full bg-slate-800 text-amber-300 flex items-center justify-center font-semibold text-[11px]">
                  {activeLearner.name.charAt(0)}
                </div>
                <div className="text-left hidden sm:block">
                  <div className="font-semibold text-slate-900 truncate max-w-[120px]">
                    {activeLearner.name}
                  </div>
                  <div className="text-[10px] text-slate-500 font-mono-code tabular-nums">
                    {activeLearner.completedModuleIds.length}/8 modules
                  </div>
                </div>
              </button>

              {showLearnerMenu && (
                <div className="absolute right-0 mt-2 w-72 bg-white rounded-lg shadow-xl border border-slate-200 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="px-3 py-1.5 border-b border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] font-semibold tracking-wider text-slate-500 uppercase">
                      Active Training Profile
                    </span>
                    <button
                      onClick={() => {
                        setShowLearnerMenu(false);
                        onOpenNewLearnerModal();
                      }}
                      className="text-[11px] text-amber-700 hover:text-amber-800 font-medium"
                    >
                      + Enroll New
                    </button>
                  </div>

                  <div className="max-h-60 overflow-y-auto divide-y divide-slate-50 py-1">
                    {learners.map((learner) => (
                      <button
                        key={learner.id}
                        onClick={() => {
                          onSwitchLearner(learner.id);
                          setShowLearnerMenu(false);
                        }}
                        className={`w-full px-3 py-2 text-left flex items-center justify-between hover:bg-slate-50 transition-colors ${
                          learner.id === activeLearner.id ? 'bg-amber-50/70' : ''
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <div className="w-7 h-7 rounded-full bg-slate-200 text-slate-700 flex items-center justify-center text-xs font-semibold">
                            {learner.name.charAt(0)}
                          </div>
                          <div>
                            <div className="text-xs font-medium text-slate-900">
                              {learner.name}
                            </div>
                            <div className="text-[10px] text-slate-500">
                              {learner.role}
                            </div>
                          </div>
                        </div>

                        <div className="text-right">
                          {learner.certificateIssued ? (
                            <span className="text-[10px] text-emerald-700 font-medium">
                              Certified
                            </span>
                          ) : (
                            <span className="text-[10px] text-slate-400 font-mono-code tabular-nums">
                              {learner.completedModuleIds.length}/8
                            </span>
                          )}
                        </div>
                      </button>
                    ))}
                  </div>

                  <div className="px-3 pt-2 pb-1 border-t border-slate-100 text-[11px] text-slate-500 flex items-center justify-between">
                    <span>Reg: {activeLearner.registrationNumber}</span>
                    <button
                      onClick={() => {
                        setShowLearnerMenu(false);
                        onSelectTab('vault');
                      }}
                      className="text-amber-700 hover:underline"
                    >
                      View Registration PDF
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
