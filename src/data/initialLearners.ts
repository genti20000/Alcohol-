import { LearnerProfile } from '../types/licensing';

export const INITIAL_LEARNERS: LearnerProfile[] = [
  {
    id: 'learner-mehmet-aksu',
    name: 'Mehmet Aksu',
    role: 'Candidate / Future DPS',
    venueName: 'The Crown & Lantern Hospitality Group',
    registrationNumber: 'NM-REG-2026-8819',
    registrationDate: '2026-10-19',
    completedModuleIds: ['module-1', 'module-2'],
    quizScores: {
      'module-1': 100,
      'module-2': 100
    },
    examAttempts: [],
    certificateIssued: false,
    lastActiveDate: '2026-10-19'
  },
  {
    id: 'learner-sarah-jenkins',
    name: 'Sarah Jenkins',
    role: 'Assistant General Manager',
    venueName: 'The Crown & Lantern Hospitality Group',
    registrationNumber: 'NM-REG-2026-7412',
    registrationDate: '2026-10-12',
    completedModuleIds: ['module-1', 'module-2', 'module-3', 'module-4', 'module-5', 'module-6', 'module-7', 'module-8'],
    quizScores: {
      'module-1': 100,
      'module-2': 100,
      'module-3': 100,
      'module-4': 100,
      'module-5': 100,
      'module-6': 100,
      'module-7': 100,
      'module-8': 100
    },
    examAttempts: [
      {
        id: 'attempt-sj-1',
        timestamp: '2026-10-15T14:22:00Z',
        score: 38,
        totalQuestions: 40,
        percentage: 95,
        passed: true,
        userAnswers: {} as any,
        timeSpentSeconds: 1820
      }
    ],
    certificateIssued: true,
    certificateId: 'NM-APLH-2026-9844-SJ',
    certificateIssuedDate: '2026-10-15',
    certificateScore: 38,
    lastActiveDate: '2026-10-15'
  },
  {
    id: 'learner-david-cole',
    name: 'David Cole',
    role: 'Head Bartender',
    venueName: 'The Crown & Lantern Hospitality Group',
    registrationNumber: 'NM-REG-2026-6201',
    registrationDate: '2026-10-16',
    completedModuleIds: ['module-1', 'module-2', 'module-3', 'module-4', 'module-5', 'module-6'],
    quizScores: {
      'module-1': 100,
      'module-2': 67,
      'module-3': 100,
      'module-4': 100,
      'module-5': 100,
      'module-6': 100
    },
    examAttempts: [],
    certificateIssued: false,
    lastActiveDate: '2026-10-18'
  },
  {
    id: 'learner-priya-patel',
    name: 'Priya Patel',
    role: 'Floor Supervisor',
    venueName: 'The Crown & Lantern Hospitality Group',
    registrationNumber: 'NM-REG-2026-5593',
    registrationDate: '2026-10-14',
    completedModuleIds: ['module-1', 'module-2', 'module-3', 'module-4', 'module-5', 'module-6', 'module-7', 'module-8'],
    quizScores: {
      'module-1': 100,
      'module-2': 100,
      'module-3': 100,
      'module-4': 100,
      'module-5': 100,
      'module-6': 100,
      'module-7': 67,
      'module-8': 100
    },
    examAttempts: [
      {
        id: 'attempt-pp-1',
        timestamp: '2026-10-17T11:05:00Z',
        score: 35,
        totalQuestions: 40,
        percentage: 87.5,
        passed: true,
        userAnswers: {} as any,
        timeSpentSeconds: 2100
      }
    ],
    certificateIssued: true,
    certificateId: 'NM-APLH-2026-3192-PP',
    certificateIssuedDate: '2026-10-17',
    certificateScore: 35,
    lastActiveDate: '2026-10-17'
  },
  {
    id: 'learner-marcus-vance',
    name: 'Marcus Vance',
    role: 'Events Bar Lead',
    venueName: 'The Crown & Lantern Hospitality Group',
    registrationNumber: 'NM-REG-2026-4428',
    registrationDate: '2026-10-10',
    completedModuleIds: ['module-1', 'module-2', 'module-3', 'module-4', 'module-5', 'module-6', 'module-7', 'module-8'],
    quizScores: {
      'module-1': 67,
      'module-2': 100,
      'module-3': 67,
      'module-4': 67,
      'module-5': 67,
      'module-6': 67,
      'module-7': 33,
      'module-8': 67
    },
    examAttempts: [
      {
        id: 'attempt-mv-1',
        timestamp: '2026-10-18T16:40:00Z',
        score: 24,
        totalQuestions: 40,
        percentage: 60,
        passed: false,
        userAnswers: {} as any,
        timeSpentSeconds: 2450
      }
    ],
    certificateIssued: false,
    lastActiveDate: '2026-10-18'
  }
];
