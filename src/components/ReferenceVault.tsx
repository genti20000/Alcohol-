import React from 'react';
import { FileText, Download, ExternalLink, Scale, Shield, BookOpen, AlertCircle, Check } from 'lucide-react';

export const ReferenceVault: React.FC = () => {
  const documents = [
    {
      title: 'Nightmark Alcohol Personal Licence Study Course 2026',
      description: 'The authoritative 20-page curriculum text covering all 8 modules, statutory explanations, and legal reference sheet.',
      path: '/assets/aistudio/Nightmark_Alcohol_Personal_Licence_Study_Course_2026_ca404941.pdf',
      fileSize: 'Complete Study Guide',
      badge: 'Official Pack',
    },
    {
      title: 'Nightmark APLH 40-Question Practice Exam & Answer Key',
      description: 'Original practice examination paper with statutory marking key, detailed answers, and Home Office legal citations.',
      path: '/assets/aistudio/Nightmark_APLH_40_Question_Practice_Exam_b0c70bcc.pdf',
      fileSize: '40 Questions & Key',
      badge: 'Exam Paper',
    },
    {
      title: 'Mehmet Aksu Course Registration Record',
      description: 'Official named training pack registration document prepared on 19 October 2026 for Level 2 APLH exam preparation.',
      path: '/assets/aistudio/Mehmet_Aksu_Nightmark_Course_Registration_Record_e703626b.pdf',
      fileSize: 'Registration Proof',
      badge: 'Candidate Record',
    },
  ];

  return (
    <div className="space-y-8">
      {/* Top Banner */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono-code font-semibold text-amber-700 uppercase tracking-wider">
            <BookOpen className="w-4 h-4 inline" />
            <span>Document Vault & Statutory Compendium</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
            Training Assets & Official Legislation Links
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Direct access to official source training PDFs and statutory reference standards.
          </p>
        </div>
      </div>

      {/* PDF Download Cards */}
      <div className="space-y-4">
        <h2 className="text-base font-bold text-slate-900">
          Source Training Pack Documentation
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {documents.map((doc, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl border border-slate-200 p-6 flex flex-col justify-between hover:border-amber-400 hover:shadow-md transition-all space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-9 h-9 rounded-lg bg-slate-900 text-amber-400 flex items-center justify-center font-bold text-xs">
                    PDF
                  </div>
                  <span className="text-[11px] font-semibold text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
                    {doc.badge}
                  </span>
                </div>

                <h3 className="text-sm font-bold text-slate-900 leading-snug">
                  {doc.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {doc.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] text-slate-400 font-mono-code">
                  {doc.fileSize}
                </span>

                <a
                  href={doc.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-1.5 px-3 rounded-md bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-xs transition-colors flex items-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Open PDF</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Compliance Cheat Sheet Strips */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Mandatory Measures Card */}
        <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-4">
          <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
            <Scale className="w-4 h-4 text-amber-600" />
            <span>Mandatory Measures Cheat Sheet</span>
          </div>

          <div className="space-y-2.5 text-xs">
            <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between">
              <div>
                <span className="font-semibold text-slate-900">Still Wine by Glass:</span>
                <div className="text-[11px] text-slate-500">Must offer small measure to customer</div>
              </div>
              <span className="font-mono-code font-bold text-slate-900 text-sm">125 ml</span>
            </div>

            <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between">
              <div>
                <span className="font-semibold text-slate-900">Draft Beer & Cider:</span>
                <div className="text-[11px] text-slate-500">Must offer half-pint in addition to pint</div>
              </div>
              <span className="font-mono-code font-bold text-slate-900 text-sm">1/2 Pint</span>
            </div>

            <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between">
              <div>
                <span className="font-semibold text-slate-900">Gin, Rum, Vodka, Whisky:</span>
                <div className="text-[11px] text-slate-500">Venue chooses single base measure</div>
              </div>
              <span className="font-mono-code font-bold text-slate-900 text-sm">25 ml / 35 ml</span>
            </div>
          </div>
        </div>

        {/* TEN Rules Quick Card */}
        <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-4">
          <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
            <Shield className="w-4 h-4 text-amber-600" />
            <span>Statutory TEN Rules at a Glance</span>
          </div>

          <div className="space-y-2 text-xs">
            <div className="flex items-center justify-between p-2 rounded-md hover:bg-slate-50">
              <span className="text-slate-600">Capacity Threshold:</span>
              <span className="font-mono-code font-bold text-slate-900">Fewer than 500 (incl. staff)</span>
            </div>
            <div className="flex items-center justify-between p-2 rounded-md hover:bg-slate-50">
              <span className="text-slate-600">Max Event Duration:</span>
              <span className="font-mono-code font-bold text-slate-900">168 Hours (7 Days)</span>
            </div>
            <div className="flex items-center justify-between p-2 rounded-md hover:bg-slate-50">
              <span className="text-slate-600">Personal Licence Holder Allowance:</span>
              <span className="font-mono-code font-bold text-slate-900">Up to 50 TENs/year</span>
            </div>
            <div className="flex items-center justify-between p-2 rounded-md hover:bg-slate-50">
              <span className="text-slate-600">Non-Holder Allowance:</span>
              <span className="font-mono-code font-bold text-slate-900">Up to 5 TENs/year</span>
            </div>
            <div className="flex items-center justify-between p-2 rounded-md hover:bg-slate-50">
              <span className="text-slate-600">Single Premises Limit:</span>
              <span className="font-mono-code font-bold text-slate-900">15 TENs / 21 Days per year</span>
            </div>
            <div className="flex items-center justify-between p-2 rounded-md hover:bg-slate-50">
              <span className="text-slate-600">Standard Notice Period:</span>
              <span className="font-mono-code font-bold text-slate-900">10 Clear Working Days</span>
            </div>
          </div>
        </div>
      </div>

      {/* Official Government Legislation Reference Sheet */}
      <div className="bg-slate-900 text-white rounded-xl p-6 space-y-4">
        <h3 className="text-base font-bold text-white">
          Primary Legislation & Government Guidance Links
        </h3>
        <p className="text-xs text-slate-400">
          Source material verified in accordance with October 2026 statutory updates:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
          <a
            href="https://www.legislation.gov.uk/ukpga/2003/17/contents"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg bg-slate-800/80 border border-slate-700 hover:border-amber-400 transition-colors flex items-center justify-between"
          >
            <div>
              <div className="font-semibold text-white">Licensing Act 2003 (Legislation)</div>
              <div className="text-[11px] text-slate-400">UK Primary Alcohol Statute</div>
            </div>
            <ExternalLink className="w-4 h-4 text-amber-400 shrink-0" />
          </a>

          <a
            href="https://www.legislation.gov.uk/uksi/2026/1022/made"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg bg-slate-800/80 border border-slate-700 hover:border-amber-400 transition-colors flex items-center justify-between"
          >
            <div>
              <div className="font-semibold text-white">Digital Age Checks Order (SI 2026/1022)</div>
              <div className="text-[11px] text-slate-400">Certified DVS Digital Verification</div>
            </div>
            <ExternalLink className="w-4 h-4 text-amber-400 shrink-0" />
          </a>

          <a
            href="https://www.gov.uk/government/publications/explanatory-memorandum-revised-guidance-issued-under-s-182-of-licensing-act-2003"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg bg-slate-800/80 border border-slate-700 hover:border-amber-400 transition-colors flex items-center justify-between"
          >
            <div>
              <div className="font-semibold text-white">Home Office Section 182 Guidance</div>
              <div className="text-[11px] text-slate-400">Revised September 2026 Statutory Manual</div>
            </div>
            <ExternalLink className="w-4 h-4 text-amber-400 shrink-0" />
          </a>

          <a
            href="https://biiab.co.uk/qualification/level-2-award-for-personal-licence-holders/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg bg-slate-800/80 border border-slate-700 hover:border-amber-400 transition-colors flex items-center justify-between"
          >
            <div>
              <div className="font-semibold text-white">BIIAB APLH Award Information</div>
              <div className="text-[11px] text-slate-400">Accredited Awarding Body Specs</div>
            </div>
            <ExternalLink className="w-4 h-4 text-amber-400 shrink-0" />
          </a>
        </div>
      </div>
    </div>
  );
};
