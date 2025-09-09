import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { AssessmentQuestion as Question, AssessmentResponse } from "@/types/assessment";
import { useState } from "react";

interface AssessmentQuestionProps {
  question: Question;
  response?: AssessmentResponse;
  onResponse: (response: AssessmentResponse) => void;
  questionNumber: number;
  totalQuestions: number;
}

export const AssessmentQuestion = ({ 
  question, 
  response, 
  onResponse, 
  questionNumber, 
  totalQuestions 
}: AssessmentQuestionProps) => {
  const [selectedValue, setSelectedValue] = useState<number | string>(
    response?.value ?? (question.type === 'slider' ? 50 : '')
  );

  const handleResponse = (value: number | string) => {
    setSelectedValue(value);
    onResponse({ questionId: question.id, value });
  };

  const renderQuestionInput = () => {
    switch (question.type) {
      case 'multiple-choice':
      case 'scenario':
        return (
          <div className="space-y-3">
            {question.options?.map((option, index) => (
              <Button
                key={index}
                variant={selectedValue === index ? "default" : "outline"}
                className={`w-full text-left justify-start p-4 h-auto ${
                  selectedValue === index 
                    ? "bg-primary text-primary-foreground shadow-button" 
                    : "hover:bg-secondary/80"
                }`}
                onClick={() => handleResponse(index)}
              >
                <span className="text-sm leading-relaxed">{option}</span>
              </Button>
            ))}
          </div>
        );

      case 'likert':
        return (
          <div className="space-y-4">
            <div className="flex justify-between text-sm text-muted-foreground mb-2">
              <span>{question.scale?.labels?.[question.scale.min]}</span>
              <span>{question.scale?.labels?.[question.scale.max]}</span>
            </div>
            <div className="flex gap-2 justify-center">
              {Array.from({ length: question.scale?.max ?? 5 }, (_, i) => i + 1).map((value) => (
                <Button
                  key={value}
                  variant={selectedValue === value ? "default" : "outline"}
                  size="sm"
                  className={`w-12 h-12 rounded-full ${
                    selectedValue === value 
                      ? "bg-primary text-primary-foreground shadow-button" 
                      : ""
                  }`}
                  onClick={() => handleResponse(value)}
                >
                  {value}
                </Button>
              ))}
            </div>
          </div>
        );

      case 'slider':
        return (
          <div className="space-y-6">
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>{question.scale?.labels?.[0]}</span>
              <span>{question.scale?.labels?.[50]}</span>
              <span>{question.scale?.labels?.[100]}</span>
            </div>
            <div className="px-4">
              <Slider
                value={[Number(selectedValue)]}
                onValueChange={(value) => handleResponse(value[0])}
                max={100}
                step={1}
                className="w-full"
              />
            </div>
            <div className="text-center">
              <span className="text-2xl font-semibold text-primary">{selectedValue}%</span>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <Card className="p-8 bg-gradient-card shadow-card border-0">
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm font-medium text-muted-foreground">
            Question {questionNumber} of {totalQuestions}
          </span>
          <div className="flex gap-1">
            {Array.from({ length: totalQuestions }, (_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full ${
                  i < questionNumber ? "bg-primary" : "bg-secondary"
                }`}
              />
            ))}
          </div>
        </div>
        <h2 className="text-xl font-semibold leading-relaxed">{question.question}</h2>
      </div>

      {renderQuestionInput()}
    </Card>
  );
};