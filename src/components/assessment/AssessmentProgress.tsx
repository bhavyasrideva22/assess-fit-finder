import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface AssessmentProgressProps {
  currentSection: string;
  currentQuestion: number;
  totalQuestions: number;
  canGoNext: boolean;
  canGoPrevious: boolean;
  onNext: () => void;
  onPrevious: () => void;
}

export const AssessmentProgress = ({
  currentSection,
  currentQuestion,
  totalQuestions,
  canGoNext,
  canGoPrevious,
  onNext,
  onPrevious,
}: AssessmentProgressProps) => {
  const progress = ((currentQuestion - 1) / totalQuestions) * 100;
  
  const sectionNames = {
    psychometric: "Psychometric Analysis",
    technical: "Technical Assessment", 
    wiscar: "WISCAR Framework"
  };

  return (
    <Card className="p-6 bg-gradient-card shadow-soft border-0 sticky top-4">
      <div className="space-y-4">
        <div>
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-semibold text-sm text-primary">
              {sectionNames[currentSection as keyof typeof sectionNames]}
            </h3>
            <span className="text-sm text-muted-foreground">
              {Math.round(progress)}% Complete
            </span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        <div className="flex justify-between gap-4">
          <Button
            variant="outline"
            size="sm"
            onClick={onPrevious}
            disabled={!canGoPrevious}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Previous
          </Button>
          <Button
            onClick={onNext}
            disabled={!canGoNext}
            size="sm"
            className="flex items-center gap-2 bg-gradient-primary hover:shadow-button"
          >
            Next
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </Card>
  );
};