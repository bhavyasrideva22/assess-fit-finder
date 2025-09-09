import { useState } from "react";
import { AssessmentIntro } from "@/components/assessment/AssessmentIntro";
import { AssessmentQuestion } from "@/components/assessment/AssessmentQuestion";
import { AssessmentProgress } from "@/components/assessment/AssessmentProgress";
import { ResultsVisualization } from "@/components/assessment/ResultsVisualization";
import { assessmentQuestions } from "@/data/assessmentQuestions";
import { AssessmentResponse } from "@/types/assessment";
import { calculateAssessmentResults } from "@/utils/assessmentScoring";

export default function Assessment() {
  const [currentStep, setCurrentStep] = useState<'intro' | 'questions' | 'results'>('intro');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [responses, setResponses] = useState<AssessmentResponse[]>([]);

  const currentQuestion = assessmentQuestions[currentQuestionIndex];
  const currentResponse = responses.find(r => r.questionId === currentQuestion?.id);

  const handleStartAssessment = () => {
    setCurrentStep('questions');
  };

  const handleResponse = (response: AssessmentResponse) => {
    setResponses(prev => {
      const filtered = prev.filter(r => r.questionId !== response.questionId);
      return [...filtered, response];
    });
  };

  const handleNext = () => {
    if (currentQuestionIndex < assessmentQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      // Show results
      setCurrentStep('results');
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  const canGoNext = currentResponse !== undefined;
  const canGoPrevious = currentQuestionIndex > 0;

  if (currentStep === 'intro') {
    return <AssessmentIntro onStartAssessment={handleStartAssessment} />;
  }

  if (currentStep === 'results') {
    const results = calculateAssessmentResults(responses);
    return <ResultsVisualization results={results} />;
  }

  return (
    <div className="min-h-screen bg-gradient-soft">
      <div className="container mx-auto px-6 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <AssessmentProgress
                currentSection={currentQuestion.section}
                currentQuestion={currentQuestionIndex + 1}
                totalQuestions={assessmentQuestions.length}
                canGoNext={canGoNext}
                canGoPrevious={canGoPrevious}
                onNext={handleNext}
                onPrevious={handlePrevious}
              />
            </div>
            
            <div className="lg:col-span-3">
              <AssessmentQuestion
                question={currentQuestion}
                response={currentResponse}
                onResponse={handleResponse}
                questionNumber={currentQuestionIndex + 1}
                totalQuestions={assessmentQuestions.length}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}