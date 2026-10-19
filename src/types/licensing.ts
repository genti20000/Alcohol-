export interface QuizQuestion {
  id: string;
  question: string;
  options: {
    key: 'A' | 'B' | 'C' | 'D';
    text: string;
  }[];
  answer: 'A' | 'B' | 'C' | 'D';
  explanation: string;
  legalBasis: string;
}

export interface VenueScenario {
  title: string;
  situation: string;
  dilemma: string;
  correctAction: string;
  rationale: string;
  commonMistake: string;
}

export interface ModuleSection {
  title: string;
  content: string[];
  keyHighlight?: string;
  iconName?: string;
}

export interface CourseModule {
  id: string;
  moduleNumber: number;
  title: string;
  shortTitle: string;
  description: string;
  readingTimeMinutes: number;
  statutoryBasis: string;
  sections: ModuleSection[];
  venueScenario: VenueScenario;
  checklistItems: string[];
  quiz: QuizQuestion[];
}

export interface ExamQuestion {
  id: number;
  question: string;
  options: {
    key: 'A' | 'B' | 'C' | 'D';
    text: string;
  }[];
  answer: 'A' | 'B' | 'C' | 'D';
  explanation: string;
  category: 'Objectives' | 'Premises & DPS' | 'Personal Licence' | 'Age & Verification' | 'Mandatory Conditions' | 'Offences & Intoxication' | 'TENs & Events' | 'Shift Compliance';
}

export interface ExamAttempt {
  id: string;
  timestamp: string;
  score: number;
  totalQuestions: number;
  percentage: number;
  passed: boolean;
  userAnswers: Record<number, 'A' | 'B' | 'C' | 'D'>;
  timeSpentSeconds: number;
}

export interface LearnerProfile {
  id: string;
  name: string;
  role: string;
  venueName: string;
  registrationNumber: string;
  registrationDate: string;
  completedModuleIds: string[];
  quizScores: Record<string, number>; // moduleId -> score %
  examAttempts: ExamAttempt[];
  certificateIssued: boolean;
  certificateId?: string;
  certificateIssuedDate?: string;
  certificateScore?: number;
  lastActiveDate: string;
}

export interface VenueComplianceMetric {
  category: string;
  averageScore: number;
  totalQuestionsAttempted: number;
  riskLevel: 'Low' | 'Moderate' | 'High';
  recommendedAction: string;
}
