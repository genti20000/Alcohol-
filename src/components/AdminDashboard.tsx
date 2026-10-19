import React, { useState } from 'react';
import {
  Users,
  ShieldCheck,
  TrendingUp,
  AlertTriangle,
  Download,
  Search,
  Plus,
  FileSpreadsheet,
  CheckCircle2,
  XCircle,
  Clock,
  RotateCcw,
  BarChart3,
  Scale,
} from 'lucide-react';
import { LearnerProfile, CourseModule } from '../types/licensing';
import { PRACTICE_EXAM_QUESTIONS } from '../data/examData';

interface AdminDashboardProps {
  learners: LearnerProfile[];
  modules: CourseModule[];
  onSelectLearner: (learnerId: string) => void;
  onOpenNewLearnerModal: () => void;
  onViewCertificateForLearner: (learnerId: string) => void;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({
  learners,
  modules,
  onSelectLearner,
  onOpenNewLearnerModal,
  onViewCertificateForLearner,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'certified' | 'in_progress' | 'retake'>('all');

  // KPI Calculations
  const totalEnrolled = learners.length;
  const certifiedCount = learners.filter((l) => l.certificateIssued).length;
  const complianceRate = Math.round((certifiedCount / totalEnrolled) * 100);

  // All exam attempts across all learners
  const allAttempts = learners.flatMap((l) => l.examAttempts);
  const avgExamScore =
    allAttempts.length > 0
      ? (allAttempts.reduce((acc, a) => acc + a.score, 0) / allAttempts.length).toFixed(1)
      : 'N/A';

  // Topic mastery data for audit
  const topicMastery = [
    { topic: 'Mandatory Conditions (Measures & Pricing)', score: 92, risk: 'Low', count: 42, recommendation: 'Standards compliant across on-trade measures.' },
    { topic: 'Age Verification & 2026 Digital ID (SI 2026/1022)', score: 87, risk: 'Low', count: 38, recommendation: 'Good awareness of non-acceptance of phone photos.' },
    { topic: 'Offences & Intoxication (Section 141)', score: 85, risk: 'Low', count: 35, recommendation: 'Staff well-drilled on refusing intoxicated patrons.' },
    { topic: 'Licensing Authorities & DPS Duties', score: 88, risk: 'Low', count: 34, recommendation: 'Clear understanding of written authorizations.' },
    { topic: 'Temporary Event Notices (TENs)', score: 65, risk: 'Moderate', count: 40, recommendation: 'Team needs refresher on 500-capacity cap including staff and 168-hour limit.' },
  ];

  // Most commonly missed practice questions
  const troublesomeQuestions = [
    {
      qId: 31,
      text: 'A TEN event can have how many people at a time including staff?',
      correct: 'Fewer than 500',
      missRate: '44% of attempts missed',
      riskFactor: 'Critical Capacity Violation',
    },
    {
      qId: 23,
      text: 'What is the specified small measure for still wine by the glass?',
      correct: '125 ml',
      missRate: '36% of attempts missed',
      riskFactor: 'Mandatory Condition Breach',
    },
    {
      qId: 33,
      text: 'A personal licence holder can generally give up to how many TENs per year?',
      correct: '50',
      missRate: '32% of attempts missed',
      riskFactor: 'Annual Quota Non-Compliance',
    },
    {
      qId: 17,
      text: 'A digital ID photo shown on a phone, by itself, is:',
      correct: 'Not a compliant registered DVS check',
      missRate: '28% of attempts missed',
      riskFactor: 'Underage Sales Vulnerability',
    },
  ];

  // Filtered learners
  const filteredLearners = learners.filter((l) => {
    const matchesSearch =
      l.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      l.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
      l.registrationNumber.toLowerCase().includes(searchTerm.toLowerCase());

    if (!matchesSearch) return false;

    if (statusFilter === 'certified') return l.certificateIssued;
    if (statusFilter === 'retake') {
      const latestAttempt = l.examAttempts[l.examAttempts.length - 1];
      return latestAttempt && !latestAttempt.passed;
    }
    if (statusFilter === 'in_progress') {
      return !l.certificateIssued && (!l.examAttempts.length || l.completedModuleIds.length < modules.length);
    }
    return true;
  });

  // Export CSV
  const handleExportCSV = () => {
    const headers = [
      'Registration Number',
      'Learner Name',
      'Role',
      'Venue Name',
      'Enrolled Date',
      'Modules Completed',
      'Total Modules',
      'Latest Exam Score',
      'Exam Passed',
      'Certificate Issued',
      'Certificate ID',
      'Last Active',
    ];

    const rows = learners.map((l) => {
      const best = l.examAttempts.length > 0 ? l.examAttempts[l.examAttempts.length - 1] : null;
      return [
        l.registrationNumber,
        `"${l.name}"`,
        `"${l.role}"`,
        `"${l.venueName}"`,
        l.registrationDate,
        l.completedModuleIds.length,
        modules.length,
        best ? `${best.score}/40` : 'None',
        best ? (best.passed ? 'YES' : 'NO') : 'N/A',
        l.certificateIssued ? 'YES' : 'NO',
        l.certificateId || 'Pending',
        l.lastActiveDate,
      ];
    });

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `nightmark_compliance_roster_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="space-y-8">
      {/* Top Header & Actions */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono-code font-semibold text-amber-700 uppercase tracking-wider">
            <Users className="w-4 h-4 inline" />
            <span>Executive Oversight & Compliance Audit</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
            Administrative Oversight & Hospitality Compliance
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Audit team training velocity, identify compliance weak spots, and export official inspection rosters.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handleExportCSV}
            className="py-2.5 px-4 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs sm:text-sm font-medium rounded-lg transition-colors flex items-center gap-2"
          >
            <Download className="w-4 h-4 text-slate-600" />
            <span>Export Roster (CSV)</span>
          </button>

          <button
            onClick={onOpenNewLearnerModal}
            className="py-2.5 px-4 bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs sm:text-sm font-semibold rounded-lg transition-colors flex items-center gap-2 shadow-xs"
          >
            <Plus className="w-4 h-4" />
            <span>Enroll New Staff Member</span>
          </button>
        </div>
      </div>

      {/* KPI Metric Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="p-5 bg-white rounded-xl border border-slate-200">
          <div className="text-xs text-slate-500 font-medium mb-1">Total Enrolled Staff</div>
          <div className="text-3xl font-bold text-slate-900 font-mono-code tabular-nums">
            {totalEnrolled}
          </div>
          <div className="text-[11px] text-slate-500 mt-1">Across 1 Venue Cluster</div>
        </div>

        <div className="p-5 bg-white rounded-xl border border-slate-200">
          <div className="text-xs text-slate-500 font-medium mb-1">Certified Compliance Rate</div>
          <div className="text-3xl font-bold text-emerald-700 font-mono-code tabular-nums">
            {complianceRate}%
          </div>
          <div className="text-[11px] text-slate-500 mt-1">
            {certifiedCount} of {totalEnrolled} Staff Certified
          </div>
        </div>

        <div className="p-5 bg-white rounded-xl border border-slate-200">
          <div className="text-xs text-slate-500 font-medium mb-1">Average Exam Score</div>
          <div className="text-3xl font-bold text-slate-900 font-mono-code tabular-nums">
            {avgExamScore} <span className="text-sm font-normal text-slate-400">/ 40</span>
          </div>
          <div className="text-[11px] text-slate-500 mt-1">Target Threshold: 28/40 (70%)</div>
        </div>

        <div className="p-5 bg-white rounded-xl border border-slate-200">
          <div className="text-xs text-slate-500 font-medium mb-1">Statutory Audit Readiness</div>
          <div className="text-3xl font-bold text-amber-700 font-mono-code tabular-nums">
            OPTIMAL
          </div>
          <div className="text-[11px] text-slate-500 mt-1">Due Diligence Documented</div>
        </div>
      </div>

      {/* Staff Roster & Progress Table */}
      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden space-y-4">
        <div className="p-6 border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-base font-bold text-slate-900">
              Staff Training Roster & Verification Log
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Real-time progress tracking, module completion tallies, and certification status.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3">
            {/* Search Input */}
            <div className="relative w-full sm:w-60">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search staff, role, ID..."
                className="w-full pl-9 pr-3 py-1.5 text-xs rounded-lg border border-slate-200 focus:outline-hidden focus:border-amber-500"
              />
            </div>

            {/* Filter buttons */}
            <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg shrink-0">
              <button
                onClick={() => setStatusFilter('all')}
                className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors ${
                  statusFilter === 'all' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                All ({learners.length})
              </button>
              <button
                onClick={() => setStatusFilter('certified')}
                className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors ${
                  statusFilter === 'certified' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Certified ({certifiedCount})
              </button>
              <button
                onClick={() => setStatusFilter('in_progress')}
                className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors ${
                  statusFilter === 'in_progress' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                In Training
              </button>
            </div>
          </div>
        </div>

        {/* Data Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 text-slate-500 font-semibold border-b border-slate-200">
              <tr>
                <th className="py-3 px-6">Learner Profile</th>
                <th className="py-3 px-4">Role & Venue</th>
                <th className="py-3 px-4">Modules (8)</th>
                <th className="py-3 px-4">Best Exam Score</th>
                <th className="py-3 px-4">Compliance Status</th>
                <th className="py-3 px-4">Last Active</th>
                <th className="py-3 px-6 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredLearners.map((learner) => {
                const completedModules = learner.completedModuleIds.length;
                const best =
                  learner.examAttempts.length > 0
                    ? learner.examAttempts.reduce((max, a) => (a.score > max.score ? a : max))
                    : null;

                return (
                  <tr key={learner.id} className="hover:bg-slate-50/70 transition-colors">
                    <td className="py-3.5 px-6">
                      <div className="font-semibold text-slate-900">{learner.name}</div>
                      <div className="text-[11px] text-slate-400 font-mono-code">{learner.registrationNumber}</div>
                    </td>

                    <td className="py-3.5 px-4 text-slate-700">
                      <div>{learner.role}</div>
                      <div className="text-[11px] text-slate-400 truncate max-w-[150px]">{learner.venueName}</div>
                    </td>

                    <td className="py-3.5 px-4">
                      <div className="flex items-center gap-2">
                        <span className="font-mono-code tabular-nums font-semibold text-slate-800">
                          {completedModules} / 8
                        </span>
                        <div className="w-16 bg-slate-100 rounded-full h-1.5 overflow-hidden">
                          <div
                            className={`h-1.5 rounded-full ${completedModules === 8 ? 'bg-emerald-500' : 'bg-amber-500'}`}
                            style={{ width: `${(completedModules / 8) * 100}%` }}
                          />
                        </div>
                      </div>
                    </td>

                    <td className="py-3.5 px-4 font-mono-code tabular-nums">
                      {best ? (
                        <span className={best.passed ? 'text-emerald-700 font-semibold' : 'text-rose-700 font-semibold'}>
                          {best.score} / 40 ({best.percentage}%)
                        </span>
                      ) : (
                        <span className="text-slate-400">Not Attempted</span>
                      )}
                    </td>

                    <td className="py-3.5 px-4">
                      {learner.certificateIssued ? (
                        <span className="inline-flex items-center gap-1 text-emerald-800 font-semibold">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                          <span>Certified</span>
                        </span>
                      ) : best && !best.passed ? (
                        <span className="inline-flex items-center gap-1 text-rose-700 font-semibold">
                          <XCircle className="w-3.5 h-3.5 text-rose-600" />
                          <span>Retake Needed</span>
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-slate-600">
                          <Clock className="w-3.5 h-3.5 text-amber-500" />
                          <span>In Training</span>
                        </span>
                      )}
                    </td>

                    <td className="py-3.5 px-4 font-mono-code tabular-nums text-slate-500">
                      {learner.lastActiveDate}
                    </td>

                    <td className="py-3.5 px-6 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() => onSelectLearner(learner.id)}
                          className="px-2.5 py-1 text-[11px] rounded bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium transition-colors"
                        >
                          Switch
                        </button>
                        {learner.certificateIssued && (
                          <button
                            onClick={() => {
                              onSelectLearner(learner.id);
                              onViewCertificateForLearner(learner.id);
                            }}
                            className="px-2.5 py-1 text-[11px] rounded bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-medium transition-colors flex items-center gap-1"
                          >
                            <ShieldCheck className="w-3 h-3" />
                            <span>Cert</span>
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Analytics & Weakness Diagnosis Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Topic Mastery Breakdown (7 cols) */}
        <div className="lg:col-span-7 bg-white rounded-xl border border-slate-200 p-6 space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div>
              <h3 className="text-base font-bold text-slate-900">
                Cohort Topic Mastery & Risk Analysis
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Evaluates staff performance across statutory licensing subject areas.
              </p>
            </div>
            <BarChart3 className="w-5 h-5 text-slate-400" />
          </div>

          <div className="space-y-4 pt-2">
            {topicMastery.map((item, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-800">{item.topic}</span>
                  <div className="flex items-center gap-2">
                    <span className="font-mono-code font-bold text-slate-900 tabular-nums">{item.score}%</span>
                    <span
                      className={`text-[10px] font-semibold px-1.5 py-0.5 rounded ${
                        item.risk === 'Low'
                          ? 'bg-emerald-50 text-emerald-700'
                          : 'bg-amber-100 text-amber-800'
                      }`}
                    >
                      {item.risk} Risk
                    </span>
                  </div>
                </div>

                <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                  <div
                    className={`h-2 rounded-full ${
                      item.score >= 80 ? 'bg-emerald-600' : 'bg-amber-500'
                    }`}
                    style={{ width: `${item.score}%` }}
                  />
                </div>

                <p className="text-[11px] text-slate-500 italic">
                  Note: {item.recommendation}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Most Commonly Missed Questions (5 cols) */}
        <div className="lg:col-span-5 bg-white rounded-xl border border-slate-200 p-6 space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div>
              <h3 className="text-base font-bold text-slate-900">
                High-Frequency Stumble Points
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Most missed questions across team practice assessments.
              </p>
            </div>
            <AlertTriangle className="w-5 h-5 text-amber-600" />
          </div>

          <div className="space-y-3 pt-2">
            {troublesomeQuestions.map((q) => (
              <div key={q.qId} className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-xs space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="font-mono-code font-bold text-slate-400">Question {q.qId}</span>
                  <span className="text-[10px] font-semibold text-rose-700 bg-rose-50 px-1.5 py-0.5 rounded">
                    {q.missRate}
                  </span>
                </div>
                <div className="font-medium text-slate-900 leading-snug">{q.text}</div>
                <div className="text-slate-600">
                  <span className="font-semibold text-emerald-700">Correct Answer: </span>
                  {q.correct}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
