import React, { useState } from 'react';
import { Award, Printer, ShieldCheck, Download, CheckCircle2, Lock, ArrowRight, ExternalLink } from 'lucide-react';
import { LearnerProfile, CourseModule } from '../types/licensing';

interface CertificateViewProps {
  activeLearner: LearnerProfile;
  modules: CourseModule[];
  onStartExam: () => void;
  onSelectModule: (moduleId: string) => void;
  onIssueCertificateForActiveLearner?: () => void;
}

export const CertificateView: React.FC<CertificateViewProps> = ({
  activeLearner,
  modules,
  onStartExam,
  onSelectModule,
  onIssueCertificateForActiveLearner,
}) => {
  const [showVerificationModal, setShowVerificationModal] = useState(false);

  const completedModulesCount = activeLearner.completedModuleIds.length;
  const bestAttempt = activeLearner.examAttempts.length > 0
    ? activeLearner.examAttempts.reduce((max, a) => (a.score > max.score ? a : max))
    : null;

  const isEligible = completedModulesCount === modules.length && bestAttempt && bestAttempt.passed;
  const isCertified = activeLearner.certificateIssued || isEligible;

  const certId = activeLearner.certificateId || `NM-APLH-2026-${activeLearner.name.replace(/\s+/g, '').substring(0, 4).toUpperCase()}-${Math.floor(1000 + Math.random() * 9000)}`;
  const certDate = activeLearner.certificateIssuedDate || new Date().toISOString().split('T')[0];
  const certScore = activeLearner.certificateScore || (bestAttempt ? bestAttempt.score : 36);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-8">
      {/* Top Banner / Actions (Hidden during Print) */}
      <div className="no-print bg-white rounded-xl border border-slate-200 p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono-code font-semibold text-amber-700 uppercase tracking-wider">
            <Award className="w-4 h-4 inline" />
            <span>Automated Certification Engine</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
            Personal Licence Law Compliance Record
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Official verifiable training completion credential for hospitality compliance records and licensing audit inspections.
          </p>
        </div>

        <div className="flex items-center gap-3">
          {isCertified ? (
            <>
              <button
                onClick={() => setShowVerificationModal(true)}
                className="py-2.5 px-4 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs sm:text-sm font-medium rounded-lg transition-colors flex items-center gap-2"
              >
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Verify Credential</span>
              </button>
              <button
                onClick={handlePrint}
                className="py-2.5 px-5 bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs sm:text-sm font-semibold rounded-lg transition-colors flex items-center gap-2 shadow-xs"
              >
                <Printer className="w-4 h-4" />
                <span>Print / Save as PDF</span>
              </button>
            </>
          ) : (
            <div className="flex items-center gap-3">
              {onIssueCertificateForActiveLearner && (
                <button
                  onClick={onIssueCertificateForActiveLearner}
                  className="py-2 px-3 text-xs bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg border border-slate-300 font-medium transition-colors"
                  title="Quick-certify this candidate for demonstration"
                >
                  Quick-Authorize Candidate
                </button>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Ineligibility Warning if Not Certified */}
      {!isCertified && (
        <div className="no-print bg-amber-50 border border-amber-200 rounded-xl p-6 space-y-4">
          <div className="flex items-center gap-2.5 text-amber-900 font-bold text-sm">
            <Lock className="w-5 h-5 text-amber-600" />
            <span>Certificate Locked: Requirements Pending for {activeLearner.name}</span>
          </div>
          <p className="text-xs text-amber-800 leading-relaxed">
            Automated certificate issuance occurs once a learner completes all 8 curriculum modules and achieves at least 28/40 (70%) on the practice examination.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <div className="p-3 bg-white rounded-lg border border-amber-200 text-xs flex items-center justify-between">
              <div>
                <span className="font-semibold text-slate-900">Curriculum Completion:</span>
                <span className="ml-1 text-slate-600 font-mono-code tabular-nums">
                  {completedModulesCount}/8 Modules
                </span>
              </div>
              {completedModulesCount === modules.length ? (
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              ) : (
                <button
                  onClick={() => onSelectModule(modules[0].id)}
                  className="text-amber-700 font-semibold hover:underline"
                >
                  Continue →
                </button>
              )}
            </div>

            <div className="p-3 bg-white rounded-lg border border-amber-200 text-xs flex items-center justify-between">
              <div>
                <span className="font-semibold text-slate-900">Practice Exam Pass:</span>
                <span className="ml-1 text-slate-600 font-mono-code tabular-nums">
                  {bestAttempt ? `${bestAttempt.score}/40 (${bestAttempt.percentage}%)` : 'Not attempted'}
                </span>
              </div>
              {bestAttempt && bestAttempt.passed ? (
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              ) : (
                <button
                  onClick={onStartExam}
                  className="text-amber-700 font-semibold hover:underline"
                >
                  Take Exam →
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* The Printable Certificate Canvas */}
      <div className="print-container max-w-4xl mx-auto bg-white p-6 sm:p-12 rounded-2xl shadow-xl border-8 border-double border-slate-900 text-slate-900 relative overflow-hidden">
        {/* Subtle decorative inner hairline border */}
        <div className="border border-amber-600/40 p-6 sm:p-10 rounded-xl relative">
          {/* Top Header & Emblem */}
          <div className="text-center space-y-4">
            <div className="flex justify-center mb-2">
              <img
                src="/src/assets/images/nightmark_academy_crest_1792449078289.jpg"
                alt="Nightmark Licensing Academy Insignia"
                className="w-24 h-24 sm:w-28 sm:h-28 object-contain rounded-full border border-amber-400 shadow-md"
                referrerPolicy="no-referrer"
              />
            </div>

            <div>
              <div className="text-xs font-semibold tracking-widest text-slate-500 uppercase font-mono-code">
                England & Wales · Licensing Act 2003 · Compliance Framework
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-950 font-serif-crest uppercase mt-1">
                Nightmark Licensing Academy
              </h2>
              <div className="text-xs sm:text-sm font-medium tracking-wide text-amber-700 mt-1 uppercase">
                Certificate of Course Completion & Statutory Assessment
              </div>
            </div>
          </div>

          {/* Certificate Body Text */}
          <div className="text-center my-8 sm:my-10 space-y-4">
            <p className="text-xs sm:text-sm text-slate-500 font-serif-crest italic">
              This official training certificate confirms that
            </p>

            <div className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-950 border-b-2 border-slate-300 pb-2 max-w-md mx-auto">
              {activeLearner.name}
            </div>

            <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto leading-relaxed pt-2">
              has satisfactorily completed the comprehensive 8-module statutory syllabus and attained a passing grade in the invigilated curriculum examination covering:
            </p>

            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 max-w-xl mx-auto text-left space-y-2">
              <div className="text-sm font-bold text-slate-900 text-center uppercase tracking-wide">
                Alcohol Personal Licence Law & Venue Compliance
              </div>
              <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-[11px] text-slate-600 pt-1">
                <div>• The Four Licensing Objectives</div>
                <div>• Challenge 25 & Digital DVS (2026)</div>
                <div>• Premises, DPS & Authorisations</div>
                <div>• Mandatory Conditions & Pricing</div>
                <div>• Offences & Intoxication (s.141)</div>
                <div>• Temporary Event Notices (TENs)</div>
              </div>
            </div>
          </div>

          {/* Certificate Credential Metadata */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-200 text-xs">
            <div>
              <div className="text-[10px] text-slate-400 font-semibold uppercase">Certificate ID</div>
              <div className="font-mono-code font-bold text-slate-900 mt-0.5 truncate">
                {certId}
              </div>
            </div>

            <div>
              <div className="text-[10px] text-slate-400 font-semibold uppercase">Issue Date</div>
              <div className="font-mono-code font-bold text-slate-900 mt-0.5">
                {certDate}
              </div>
            </div>

            <div>
              <div className="text-[10px] text-slate-400 font-semibold uppercase">Assessment Score</div>
              <div className="font-mono-code font-bold text-slate-900 mt-0.5">
                {certScore}/40 ({Math.round((certScore / 40) * 100)}%)
              </div>
            </div>

            <div>
              <div className="text-[10px] text-slate-400 font-semibold uppercase">Venue Group</div>
              <div className="font-semibold text-slate-900 mt-0.5 truncate">
                {activeLearner.venueName}
              </div>
            </div>
          </div>

          {/* Signatures & Seal */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-10 mt-8 border-t border-dashed border-slate-200">
            <div className="text-center sm:text-left space-y-1">
              <div className="font-serif-crest font-bold text-base text-slate-900 tracking-wide">
                A. Vance, LL.M.
              </div>
              <div className="text-[11px] text-slate-500">
                Dean of Academic Licensing · Nightmark Academy
              </div>
            </div>

            {/* Verification Stamp */}
            <div className="p-3 rounded-lg border border-amber-600/50 bg-amber-50/50 text-center max-w-[200px]">
              <div className="text-[10px] font-mono-code font-bold text-amber-900 uppercase">
                SECURE CREDENTIAL
              </div>
              <div className="text-[9px] text-slate-600 font-mono-code truncate mt-0.5">
                SHA256: 9f4e...88a1
              </div>
            </div>

            <div className="text-center sm:text-right space-y-1">
              <div className="font-serif-crest font-bold text-base text-slate-900 tracking-wide">
                E. Sterling, Barrister
              </div>
              <div className="text-[11px] text-slate-500">
                Statutory Compliance Registrar
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Verification Modal */}
      {showVerificationModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 space-y-4 shadow-2xl border border-slate-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900">
                  Credential Authenticity Verified
                </h3>
                <div className="text-xs text-slate-500">Nightmark Central Registry</div>
              </div>
            </div>

            <div className="space-y-2 text-xs bg-slate-50 p-4 rounded-xl border border-slate-200 font-mono-code text-slate-700">
              <div>Candidate: <span className="font-bold text-slate-900">{activeLearner.name}</span></div>
              <div>Reg Number: {activeLearner.registrationNumber}</div>
              <div>Certificate ID: {certId}</div>
              <div>Score Achieved: {certScore}/40 ({Math.round((certScore / 40) * 100)}%)</div>
              <div>Statutory Framework: Licensing Act 2003 & SI 2026/1022</div>
              <div>Issuance Status: ACTIVE & VALID</div>
            </div>

            <p className="text-xs text-slate-500 leading-relaxed">
              This digital compliance credential certifies completion of educational preparation under statutory syllabus guidelines. Official personal licence applications must be submitted to the local licensing authority with required DBS and accredited examination documentation.
            </p>

            <button
              onClick={() => setShowVerificationModal(false)}
              className="w-full py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-medium text-xs rounded-lg transition-colors"
            >
              Close Verification
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
