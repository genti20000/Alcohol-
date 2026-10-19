import React, { useState, useEffect } from 'react';
import { COURSE_MODULES } from './data/courseData';
import { INITIAL_LEARNERS } from './data/initialLearners';
import { LearnerProfile, ExamAttempt } from './types/licensing';
import { Header } from './components/Header';
import { CourseOverview } from './components/CourseOverview';
import { ModuleReader } from './components/ModuleReader';
import { PracticeExam } from './components/PracticeExam';
import { ScenarioSimulator } from './components/ScenarioSimulator';
import { CertificateView } from './components/CertificateView';
import { AdminDashboard } from './components/AdminDashboard';
import { ReferenceVault } from './components/ReferenceVault';
import { NewLearnerModal } from './components/NewLearnerModal';

export default function App() {
  // Load learners from localStorage or default
  const [learners, setLearners] = useState<LearnerProfile[]>(() => {
    const saved = localStorage.getItem('nightmark_learners_v2');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error('Failed to parse saved learners', e);
      }
    }
    return INITIAL_LEARNERS;
  });

  const [activeLearnerId, setActiveLearnerId] = useState<string>(() => {
    const savedId = localStorage.getItem('nightmark_active_learner_id_v2');
    return savedId || 'learner-mehmet-aksu';
  });

  const [currentTab, setCurrentTab] = useState<string>('curriculum');
  const [selectedModuleId, setSelectedModuleId] = useState<string>('module-1');
  const [isNewLearnerModalOpen, setIsNewLearnerModalOpen] = useState(false);

  // Sync to localStorage
  useEffect(() => {
    localStorage.setItem('nightmark_learners_v2', JSON.stringify(learners));
  }, [learners]);

  useEffect(() => {
    localStorage.setItem('nightmark_active_learner_id_v2', activeLearnerId);
  }, [activeLearnerId]);

  // Current active learner
  const activeLearner =
    learners.find((l) => l.id === activeLearnerId) || learners[0] || INITIAL_LEARNERS[0];

  const handleSwitchLearner = (learnerId: string) => {
    setActiveLearnerId(learnerId);
  };

  const handleSelectModule = (moduleId: string) => {
    setSelectedModuleId(moduleId);
    setCurrentTab('module');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCompleteModule = (moduleId: string, quizScore: number) => {
    setLearners((prev) =>
      prev.map((learner) => {
        if (learner.id !== activeLearner.id) return learner;

        const updatedCompleted = learner.completedModuleIds.includes(moduleId)
          ? learner.completedModuleIds
          : [...learner.completedModuleIds, moduleId];

        const updatedQuizScores = {
          ...learner.quizScores,
          [moduleId]: Math.max(learner.quizScores[moduleId] || 0, quizScore),
        };

        const allCompleted = updatedCompleted.length === COURSE_MODULES.length;
        const hasPassedExam = learner.examAttempts.some((a) => a.passed);

        let certIssued = learner.certificateIssued;
        let certId = learner.certificateId;
        let certDate = learner.certificateIssuedDate;
        let certScore = learner.certificateScore;

        if (allCompleted && hasPassedExam && !certIssued) {
          certIssued = true;
          certId = `NM-APLH-2026-${learner.name.replace(/\s+/g, '').substring(0, 4).toUpperCase()}-${Math.floor(1000 + Math.random() * 9000)}`;
          certDate = new Date().toISOString().split('T')[0];
          certScore = Math.max(...learner.examAttempts.map((a) => a.score));
        }

        return {
          ...learner,
          completedModuleIds: updatedCompleted,
          quizScores: updatedQuizScores,
          certificateIssued: certIssued,
          certificateId: certId,
          certificateIssuedDate: certDate,
          certificateScore: certScore,
          lastActiveDate: new Date().toISOString().split('T')[0],
        };
      })
    );
  };

  const handleSaveExamAttempt = (attempt: ExamAttempt) => {
    setLearners((prev) =>
      prev.map((learner) => {
        if (learner.id !== activeLearner.id) return learner;

        const updatedAttempts = [...learner.examAttempts, attempt];
        const allCompleted = learner.completedModuleIds.length === COURSE_MODULES.length;

        let certIssued = learner.certificateIssued;
        let certId = learner.certificateId;
        let certDate = learner.certificateIssuedDate;
        let certScore = learner.certificateScore;

        // Auto-certify if exam passed and modules completed
        if (attempt.passed && allCompleted && !certIssued) {
          certIssued = true;
          certId = `NM-APLH-2026-${learner.name.replace(/\s+/g, '').substring(0, 4).toUpperCase()}-${Math.floor(1000 + Math.random() * 9000)}`;
          certDate = new Date().toISOString().split('T')[0];
          certScore = attempt.score;
        }

        return {
          ...learner,
          examAttempts: updatedAttempts,
          certificateIssued: certIssued,
          certificateId: certId,
          certificateIssuedDate: certDate,
          certificateScore: certScore,
          lastActiveDate: new Date().toISOString().split('T')[0],
        };
      })
    );
  };

  // Quick authorize helper for demo
  const handleIssueCertificateForActiveLearner = () => {
    setLearners((prev) =>
      prev.map((learner) => {
        if (learner.id !== activeLearner.id) return learner;
        return {
          ...learner,
          completedModuleIds: COURSE_MODULES.map((m) => m.id),
          certificateIssued: true,
          certificateId: `NM-APLH-2026-${learner.name.replace(/\s+/g, '').substring(0, 4).toUpperCase()}-${Math.floor(1000 + Math.random() * 9000)}`,
          certificateIssuedDate: new Date().toISOString().split('T')[0],
          certificateScore: 36,
          lastActiveDate: new Date().toISOString().split('T')[0],
        };
      })
    );
  };

  const handleAddLearner = (newLearner: LearnerProfile) => {
    setLearners((prev) => [newLearner, ...prev]);
    setActiveLearnerId(newLearner.id);
  };

  const activeModule = COURSE_MODULES.find((m) => m.id === selectedModuleId) || COURSE_MODULES[0];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col antialiased selection:bg-amber-200 selection:text-slate-900">
      {/* 3-Zone Top Navigation Bar */}
      <Header
        currentTab={currentTab}
        onSelectTab={(tab) => {
          setCurrentTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        activeLearner={activeLearner}
        learners={learners}
        onSwitchLearner={handleSwitchLearner}
        onOpenNewLearnerModal={() => setIsNewLearnerModalOpen(true)}
      />

      {/* Main Workspace Canvas */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {currentTab === 'curriculum' && (
          <CourseOverview
            modules={COURSE_MODULES}
            activeLearner={activeLearner}
            onSelectModule={handleSelectModule}
            onStartExam={() => setCurrentTab('exam')}
            onViewCertificate={() => setCurrentTab('certificate')}
          />
        )}

        {currentTab === 'module' && (
          <ModuleReader
            module={activeModule}
            modules={COURSE_MODULES}
            activeLearner={activeLearner}
            onSelectModule={(modId) => {
              setSelectedModuleId(modId);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onBackToOverview={() => setCurrentTab('curriculum')}
            onCompleteModule={handleCompleteModule}
          />
        )}

        {currentTab === 'exam' && (
          <PracticeExam
            activeLearner={activeLearner}
            onSaveExamAttempt={handleSaveExamAttempt}
            onViewCertificate={() => setCurrentTab('certificate')}
          />
        )}

        {currentTab === 'scenarios' && <ScenarioSimulator />}

        {currentTab === 'certificate' && (
          <CertificateView
            activeLearner={activeLearner}
            modules={COURSE_MODULES}
            onStartExam={() => setCurrentTab('exam')}
            onSelectModule={handleSelectModule}
            onIssueCertificateForActiveLearner={handleIssueCertificateForActiveLearner}
          />
        )}

        {currentTab === 'analytics' && (
          <AdminDashboard
            learners={learners}
            modules={COURSE_MODULES}
            onSelectLearner={(learnerId) => {
              setActiveLearnerId(learnerId);
            }}
            onOpenNewLearnerModal={() => setIsNewLearnerModalOpen(true)}
            onViewCertificateForLearner={(learnerId) => {
              setActiveLearnerId(learnerId);
              setCurrentTab('certificate');
            }}
          />
        )}

        {currentTab === 'vault' && <ReferenceVault />}
      </main>

      {/* Footer */}
      <footer className="no-print border-t border-slate-200 bg-white py-6 mt-16 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-900 tracking-tight font-serif-crest">
              NIGHTMARK LICENSING ACADEMY
            </span>
            <span>·</span>
            <span>Independent Level 2 APLH Preparation</span>
          </div>

          <div className="text-center sm:text-right text-[11px] text-slate-400">
            Licensing Act 2003 · England & Wales · Statutory Due Diligence Training Record
          </div>
        </div>
      </footer>

      {/* Enroll Staff Modal */}
      <NewLearnerModal
        isOpen={isNewLearnerModalOpen}
        onClose={() => setIsNewLearnerModalOpen(false)}
        onAddLearner={handleAddLearner}
      />
    </div>
  );
}
