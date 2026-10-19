import React from 'react';
import { BookOpen, CheckCircle2, Clock, Award, ArrowRight, ShieldCheck, Scale, FileText, AlertTriangle } from 'lucide-react';
import { CourseModule, LearnerProfile } from '../types/licensing';

interface CourseOverviewProps {
  modules: CourseModule[];
  activeLearner: LearnerProfile;
  onSelectModule: (moduleId: string) => void;
  onStartExam: () => void;
  onViewCertificate: () => void;
}

export const CourseOverview: React.FC<CourseOverviewProps> = ({
  modules,
  activeLearner,
  onSelectModule,
  onStartExam,
  onViewCertificate,
}) => {
  const completedCount = activeLearner.completedModuleIds.length;
  const progressPercent = Math.round((completedCount / modules.length) * 100);
  const bestExamScore = activeLearner.examAttempts.length > 0
    ? Math.max(...activeLearner.examAttempts.map(a => a.score))
    : null;

  return (
    <div className="space-y-10">
      {/* Hero Section with Editorial Split */}
      <div className="relative overflow-hidden rounded-2xl bg-slate-900 text-white shadow-xl">
        <div className="absolute inset-0 z-0">
          <img
            src="/src/assets/images/compliance_training_banner_1792449079262.jpg"
            alt="Licensed Hospitality Venue"
            className="w-full h-full object-cover opacity-25"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-transparent" />
        </div>

        <div className="relative z-10 p-8 sm:p-12 lg:p-16 max-w-3xl">
          <div className="flex items-center gap-3 text-amber-400 text-xs font-semibold tracking-wider uppercase mb-3">
            <Scale className="w-4 h-4" />
            <span>Licensing Act 2003 · England & Wales · 2026 Statutory Framework</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4 text-balance">
            Alcohol Personal Licence Law & State Compliance Training
          </h1>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8">
            Accredited preparation curriculum for prospective Personal Licence Holders, Designated Premises Supervisors (DPS), and hospitality management teams. Fully updated with September 2026 Digital Age Verification standards (SI 2026/1022).
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => {
                const nextIncomplete = modules.find(m => !activeLearner.completedModuleIds.includes(m.id));
                onSelectModule(nextIncomplete ? nextIncomplete.id : modules[0].id);
              }}
              className="px-6 py-3 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-sm transition-all shadow-md flex items-center gap-2 group"
            >
              <span>{completedCount === 0 ? 'Begin Course' : completedCount === modules.length ? 'Review Modules' : 'Continue Training'}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>

            <button
              onClick={onStartExam}
              className="px-6 py-3 rounded-lg bg-slate-800/90 hover:bg-slate-750 text-white border border-slate-700 font-medium text-sm transition-all flex items-center gap-2"
            >
              <span>Launch 40-Q Practice Exam</span>
            </button>

            {activeLearner.certificateIssued && (
              <button
                onClick={onViewCertificate}
                className="px-5 py-3 rounded-lg bg-emerald-950/80 hover:bg-emerald-900 text-emerald-300 border border-emerald-700 font-medium text-sm transition-all flex items-center gap-2"
              >
                <ShieldCheck className="w-4 h-4" />
                <span>View Certificate</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* 4-KPI Metric Strip */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="p-5 bg-white rounded-xl border border-slate-200">
          <div className="text-xs text-slate-500 font-medium mb-1">Curriculum Scope</div>
          <div className="text-2xl font-bold text-slate-900 font-mono-code tabular-nums">8 Modules</div>
          <div className="text-[11px] text-slate-500 mt-1">Foundations to Shift Operations</div>
        </div>

        <div className="p-5 bg-white rounded-xl border border-slate-200">
          <div className="text-xs text-slate-500 font-medium mb-1">Learner Progress</div>
          <div className="text-2xl font-bold text-slate-900 font-mono-code tabular-nums">
            {completedCount} <span className="text-sm font-normal text-slate-500">/ 8 Complete</span>
          </div>
          <div className="w-full bg-slate-100 rounded-full h-1.5 mt-2 overflow-hidden">
            <div
              className="bg-amber-500 h-1.5 rounded-full transition-all duration-500"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        <div className="p-5 bg-white rounded-xl border border-slate-200">
          <div className="text-xs text-slate-500 font-medium mb-1">Practice Exam Benchmark</div>
          <div className="text-2xl font-bold text-slate-900 font-mono-code tabular-nums">
            {bestExamScore !== null ? `${bestExamScore}/40` : 'Not Attempted'}
          </div>
          <div className="text-[11px] text-slate-500 mt-1">
            Pass Mark: 28/40 (70% Target)
          </div>
        </div>

        <div className="p-5 bg-white rounded-xl border border-slate-200">
          <div className="text-xs text-slate-500 font-medium mb-1">Certification Status</div>
          <div className="text-2xl font-bold text-slate-900">
            {activeLearner.certificateIssued ? (
              <span className="text-emerald-700 text-lg flex items-center gap-1.5">
                <ShieldCheck className="w-5 h-5 inline" /> Verified
              </span>
            ) : (
              <span className="text-slate-700 text-lg">In Progress</span>
            )}
          </div>
          <div className="text-[11px] text-slate-500 mt-1 truncate">
            {activeLearner.name} · {activeLearner.registrationNumber}
          </div>
        </div>
      </div>

      {/* Course Registration Context Box */}
      <div className="p-6 bg-slate-100/70 border border-slate-200 rounded-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-start gap-3.5">
          <div className="w-10 h-10 rounded-lg bg-slate-900 text-amber-400 flex items-center justify-center shrink-0">
            <FileText className="w-5 h-5" />
          </div>
          <div>
            <div className="text-sm font-semibold text-slate-900">
              Training Pack Registration Record: {activeLearner.name}
            </div>
            <div className="text-xs text-slate-600 mt-0.5">
              Assigned to {activeLearner.venueName} · Enrolled {activeLearner.registrationDate}
            </div>
          </div>
        </div>
        <div className="text-xs text-slate-500 max-w-md text-right md:text-right">
          This compliance platform trains candidates toward statutory APLH standards. Complete all 8 modules and pass the 40-question practice exam to unlock your verifiable training certificate.
        </div>
      </div>

      {/* Syllabus Module Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-slate-900 tracking-tight">Curriculum Syllabus</h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Select any module to read detailed statutory texts, explore real-world venue dilemmas, and take the check-in quiz.
            </p>
          </div>
          <span className="text-xs text-slate-500 font-mono-code tabular-nums">
            {completedCount} of {modules.length} Completed
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {modules.map((module) => {
            const isCompleted = activeLearner.completedModuleIds.includes(module.id);
            const quizScore = activeLearner.quizScores[module.id];

            return (
              <div
                key={module.id}
                onClick={() => onSelectModule(module.id)}
                className={`p-6 rounded-xl border text-left transition-all cursor-pointer relative group ${
                  isCompleted
                    ? 'bg-white border-emerald-200 hover:border-emerald-300 hover:shadow-md'
                    : 'bg-white border-slate-200 hover:border-amber-400 hover:shadow-md'
                }`}
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono-code font-semibold text-slate-400 uppercase">
                      Module {module.moduleNumber.toString().padStart(2, '0')}
                    </span>
                    <span className="text-slate-300">·</span>
                    <span className="text-xs text-slate-500 flex items-center gap-1 font-mono-code">
                      <Clock className="w-3 h-3 inline" /> {module.readingTimeMinutes} min
                    </span>
                  </div>

                  {isCompleted ? (
                    <span className="inline-flex items-center gap-1 text-xs font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Completed
                    </span>
                  ) : (
                    <span className="text-xs text-amber-700 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      Start →
                    </span>
                  )}
                </div>

                <h3 className="text-base font-bold text-slate-900 mb-1.5 group-hover:text-amber-800 transition-colors">
                  {module.title}
                </h3>

                <p className="text-xs text-slate-600 line-clamp-2 mb-4 leading-relaxed">
                  {module.description}
                </p>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                  <span className="truncate max-w-[220px]">
                    Basis: {module.statutoryBasis}
                  </span>
                  {quizScore !== undefined && (
                    <span className="font-mono-code tabular-nums font-medium text-slate-700">
                      Quiz: {quizScore}%
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
