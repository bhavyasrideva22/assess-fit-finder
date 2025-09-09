export interface AssessmentQuestion {
  id: string;
  type: 'multiple-choice' | 'likert' | 'scenario' | 'slider';
  question: string;
  options?: string[];
  scale?: { min: number; max: number; labels?: { [key: number]: string } };
  section: 'psychometric' | 'technical' | 'wiscar';
  category?: string;
}

export interface AssessmentResponse {
  questionId: string;
  value: number | string;
}

export interface AssessmentResults {
  psychometricScore: number;
  technicalScore: number;
  wiscarScores: {
    will: number;
    interest: number;
    skill: number;
    cognitive: number;
    ability: number;
    realWorld: number;
  };
  overallScore: number;
  recommendation: 'yes' | 'maybe' | 'no';
  feedback: string;
  careerMatches: string[];
  learningPath: string;
}

export interface UserProfile {
  personalityTraits: { [key: string]: number };
  interests: string[];
  skillGaps: string[];
  strengths: string[];
}