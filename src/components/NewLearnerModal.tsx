import React, { useState } from 'react';
import { X, UserPlus, Building2, Briefcase, User } from 'lucide-react';
import { LearnerProfile } from '../types/licensing';

interface NewLearnerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddLearner: (learner: LearnerProfile) => void;
}

export const NewLearnerModal: React.FC<NewLearnerModalProps> = ({
  isOpen,
  onClose,
  onAddLearner,
}) => {
  const [name, setName] = useState('');
  const [role, setRole] = useState('Floor Supervisor');
  const [venueName, setVenueName] = useState('The Crown & Lantern Hospitality Group');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const newProfile: LearnerProfile = {
      id: `learner-${Date.now()}`,
      name: name.trim(),
      role: role.trim() || 'Bar Team Member',
      venueName: venueName.trim() || 'Licensed Premises',
      registrationNumber: `NM-REG-2026-${randomNum}`,
      registrationDate: new Date().toISOString().split('T')[0],
      completedModuleIds: [],
      quizScores: {},
      examAttempts: [],
      certificateIssued: false,
      lastActiveDate: new Date().toISOString().split('T')[0],
    };

    onAddLearner(newProfile);
    setName('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-150">
      <div className="bg-white rounded-2xl max-w-md w-full p-6 space-y-5 shadow-2xl border border-slate-200">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-slate-900 text-amber-400 flex items-center justify-center">
              <UserPlus className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">
                Enroll Candidate in Training
              </h3>
              <p className="text-[11px] text-slate-500">Nightmark Licensing Academy Roster</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 p-1 rounded-md"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Candidate Full Legal Name
            </label>
            <div className="relative">
              <User className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Alex Morgan"
                className="w-full pl-9 pr-3 py-2 text-xs rounded-lg border border-slate-200 focus:outline-hidden focus:border-amber-500"
              />
            </div>
            <p className="text-[10px] text-slate-400 mt-1">
              Must match government identification for qualification compliance.
            </p>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Job Title / Position
            </label>
            <div className="relative">
              <Briefcase className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                placeholder="e.g. Assistant Manager / Lead Bartender"
                className="w-full pl-9 pr-3 py-2 text-xs rounded-lg border border-slate-200 focus:outline-hidden focus:border-amber-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Licensed Venue / Hospitality Group
            </label>
            <div className="relative">
              <Building2 className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={venueName}
                onChange={(e) => setVenueName(e.target.value)}
                placeholder="e.g. The Crown & Lantern"
                className="w-full pl-9 pr-3 py-2 text-xs rounded-lg border border-slate-200 focus:outline-hidden focus:border-amber-500"
              />
            </div>
          </div>

          <div className="pt-2 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="py-2 px-4 rounded-lg text-xs font-medium text-slate-600 hover:bg-slate-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="py-2 px-4 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-xs shadow-xs"
            >
              Confirm Enrollment & Generate Pack
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
