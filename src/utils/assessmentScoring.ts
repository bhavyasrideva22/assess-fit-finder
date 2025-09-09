import { AssessmentResponse, AssessmentResults } from "@/types/assessment";
import { assessmentQuestions } from "@/data/assessmentQuestions";

export const calculateAssessmentResults = (responses: AssessmentResponse[]): AssessmentResults => {
  const responseMap = new Map(responses.map(r => [r.questionId, r.value]));
  
  // Calculate psychometric score
  const psychometricQuestions = assessmentQuestions.filter(q => q.section === 'psychometric');
  let psychometricScore = 0;
  let psychometricCount = 0;

  psychometricQuestions.forEach(q => {
    const response = responseMap.get(q.id);
    if (response !== undefined) {
      let score = 0;
      if (q.type === 'likert') {
        score = (Number(response) / 5) * 100;
      } else if (q.type === 'scenario' || q.type === 'multiple-choice') {
        // Scoring based on ideal answers for career fit
        const idealAnswers: { [key: string]: number } = {
          'psych_1': 0, // AI and ML - shows tech interest
          'psych_3': 0, // Collaboration - shows team orientation
        };
        const idealAnswer = idealAnswers[q.id];
        if (idealAnswer !== undefined) {
          score = response === idealAnswer ? 100 : 50;
        } else {
          score = 75; // Default positive score for engagement
        }
      }
      psychometricScore += score;
      psychometricCount++;
    }
  });
  
  psychometricScore = psychometricCount > 0 ? psychometricScore / psychometricCount : 0;

  // Calculate technical score
  const technicalQuestions = assessmentQuestions.filter(q => q.section === 'technical');
  let technicalScore = 0;
  let technicalCount = 0;

  // Correct answers for technical questions
  const correctAnswers: { [key: string]: number } = {
    'tech_1': 1, // HIPAA - Patient data privacy and security
    'tech_2': 1, // 300% increase from 15% = 60%
    'tech_3': 1, // EHR - Store and manage patient health records digitally
    'tech_4': 0, // 25% reduction from 40 minutes = 30 minutes
  };

  technicalQuestions.forEach(q => {
    const response = responseMap.get(q.id);
    if (response !== undefined) {
      const correctAnswer = correctAnswers[q.id];
      const score = response === correctAnswer ? 100 : 0;
      technicalScore += score;
      technicalCount++;
    }
  });

  technicalScore = technicalCount > 0 ? technicalScore / technicalCount : 0;

  // Calculate WISCAR scores
  const wiscarCategories = ['will', 'interest', 'skill', 'cognitive', 'ability', 'real_world'];
  const wiscarScores: { [key: string]: number } = {};

  wiscarCategories.forEach(category => {
    const categoryQuestions = assessmentQuestions.filter(
      q => q.section === 'wiscar' && q.category === category
    );
    
    let categoryScore = 0;
    let categoryCount = 0;

    categoryQuestions.forEach(q => {
      const response = responseMap.get(q.id);
      if (response !== undefined) {
        let score = 0;
        if (q.type === 'likert') {
          score = (Number(response) / 5) * 100;
        } else if (q.type === 'slider') {
          score = Number(response);
        } else if (q.type === 'scenario') {
          // All scenario responses show engagement
          score = 80;
        }
        categoryScore += score;
        categoryCount++;
      }
    });

    wiscarScores[category] = categoryCount > 0 ? categoryScore / categoryCount : 0;
  });

  // Calculate overall score
  const allScores = [psychometricScore, technicalScore, ...Object.values(wiscarScores)];
  const overallScore = Math.round(allScores.reduce((a, b) => a + b, 0) / allScores.length);

  // Determine recommendation
  let recommendation: 'yes' | 'maybe' | 'no';
  let feedback: string;
  
  if (overallScore >= 75) {
    recommendation = 'yes';
    feedback = "Excellent! You show strong alignment across all dimensions. Your combination of interest, aptitude, and readiness suggests you're well-positioned to succeed in Digital Health Strategy.";
  } else if (overallScore >= 55) {
    recommendation = 'maybe';
    feedback = "Good potential! While you show promise in several areas, some focused learning and skill development would help you become more competitive in this field.";
  } else {
    recommendation = 'no';
    feedback = "Consider alternative paths that might be a better fit. Your current profile suggests other roles in healthcare or technology might align better with your strengths and interests.";
  }

  // Career matches based on score ranges
  const careerMatches = overallScore >= 75 
    ? ["Digital Health Strategist", "Healthcare Innovation Manager", "Chief Digital Officer"]
    : overallScore >= 55
    ? ["Digital Health Consultant", "Healthcare Product Manager", "Health Data Analyst"]
    : ["Healthcare UX Designer", "Patient Engagement Specialist", "Health Content Strategist"];

  // Learning path recommendations
  const learningPath = overallScore >= 75
    ? "Advanced Strategy Track: Focus on leadership skills, advanced analytics, and executive stakeholder management. Consider MBA or executive education programs."
    : overallScore >= 55  
    ? "Foundation Building Track: Start with digital health fundamentals, data analysis, and project management. Consider certification programs in health informatics."
    : "Exploratory Track: Explore related fields like health tech, UX design, or content strategy to find your optimal career path in the healthcare ecosystem.";

  return {
    psychometricScore: Math.round(psychometricScore),
    technicalScore: Math.round(technicalScore), 
    wiscarScores: {
      will: Math.round(wiscarScores.will || 0),
      interest: Math.round(wiscarScores.interest || 0),
      skill: Math.round(wiscarScores.skill || 0),
      cognitive: Math.round(wiscarScores.cognitive || 0),
      ability: Math.round(wiscarScores.ability || 0),
      realWorld: Math.round(wiscarScores.real_world || 0),
    },
    overallScore,
    recommendation,
    feedback,
    careerMatches,
    learningPath,
  };
};