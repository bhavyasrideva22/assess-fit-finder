import { Card } from "@/components/ui/card";
import { AssessmentResults } from "@/types/assessment";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, Target, Award, AlertCircle, CheckCircle, XCircle } from "lucide-react";

interface ResultsVisualizationProps {
  results: AssessmentResults;
}

export const ResultsVisualization = ({ results }: ResultsVisualizationProps) => {
  const getRecommendationIcon = () => {
    switch (results.recommendation) {
      case 'yes':
        return <CheckCircle className="h-8 w-8 text-success" />;
      case 'maybe': 
        return <AlertCircle className="h-8 w-8 text-warning" />;
      case 'no':
        return <XCircle className="h-8 w-8 text-destructive" />;
    }
  };

  const getRecommendationColor = () => {
    switch (results.recommendation) {
      case 'yes':
        return 'bg-success/10 border-success/20';
      case 'maybe':
        return 'bg-warning/10 border-warning/20';
      case 'no':
        return 'bg-destructive/10 border-destructive/20';
    }
  };

  const getRecommendationText = () => {
    switch (results.recommendation) {
      case 'yes':
        return 'Strong Match - Proceed with Confidence';
      case 'maybe':
        return 'Potential Match - Targeted Learning Recommended';
      case 'no':
        return 'Consider Alternative Paths';
    }
  };

  const wiscarLabels = {
    will: "Will",
    interest: "Interest", 
    skill: "Skill",
    cognitive: "Cognitive",
    ability: "Ability",
    realWorld: "Real World"
  };

  return (
    <div className="min-h-screen bg-gradient-soft">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Header */}
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Your Assessment Results
            </h1>
            <p className="text-xl text-muted-foreground">
              Comprehensive analysis of your Digital Health Strategy readiness
            </p>
          </div>

          {/* Overall Recommendation */}
          <Card className={`p-8 ${getRecommendationColor()} shadow-card border`}>
            <div className="flex items-center gap-4 mb-4">
              {getRecommendationIcon()}
              <div>
                <h2 className="text-2xl font-bold">{getRecommendationText()}</h2>
                <p className="text-lg font-semibold">Overall Score: {results.overallScore}/100</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">{results.feedback}</p>
          </Card>

          {/* Score Breakdown */}
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 bg-gradient-card shadow-card border-0">
              <div className="flex items-center gap-3 mb-4">
                <Target className="h-6 w-6 text-primary" />
                <h3 className="font-semibold">Psychometric Score</h3>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-2xl font-bold text-primary">{results.psychometricScore}</span>
                  <span className="text-sm text-muted-foreground">/ 100</span>
                </div>
                <Progress value={results.psychometricScore} className="h-2" />
              </div>
            </Card>

            <Card className="p-6 bg-gradient-card shadow-card border-0">
              <div className="flex items-center gap-3 mb-4">
                <Award className="h-6 w-6 text-accent" />
                <h3 className="font-semibold">Technical Score</h3>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-2xl font-bold text-accent">{results.technicalScore}</span>
                  <span className="text-sm text-muted-foreground">/ 100</span>
                </div>
                <Progress value={results.technicalScore} className="h-2" />
              </div>
            </Card>

            <Card className="p-6 bg-gradient-card shadow-card border-0">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="h-6 w-6 text-success" />
                <h3 className="font-semibold">WISCAR Average</h3>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-2xl font-bold text-success">
                    {Math.round(Object.values(results.wiscarScores).reduce((a, b) => a + b, 0) / 6)}
                  </span>
                  <span className="text-sm text-muted-foreground">/ 100</span>
                </div>
                <Progress 
                  value={Object.values(results.wiscarScores).reduce((a, b) => a + b, 0) / 6} 
                  className="h-2" 
                />
              </div>
            </Card>
          </div>

          {/* WISCAR Breakdown */}
          <Card className="p-8 bg-gradient-card shadow-card border-0">
            <h3 className="text-xl font-semibold mb-6">WISCAR Framework Analysis</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {Object.entries(results.wiscarScores).map(([key, value]) => (
                <div key={key} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">{wiscarLabels[key as keyof typeof wiscarLabels]}</span>
                    <span className="font-semibold">{value}%</span>
                  </div>
                  <Progress value={value} className="h-2" />
                </div>
              ))}
            </div>
          </Card>

          {/* Career Matches */}
          <Card className="p-8 bg-gradient-card shadow-card border-0">
            <h3 className="text-xl font-semibold mb-4">Top Career Matches</h3>
            <div className="flex flex-wrap gap-3">
              {results.careerMatches.map((career, index) => (
                <Badge 
                  key={index} 
                  variant="secondary" 
                  className="px-4 py-2 text-sm"
                >
                  {career}
                </Badge>
              ))}
            </div>
          </Card>

          {/* Learning Path */}
          <Card className="p-8 bg-gradient-card shadow-card border-0">
            <h3 className="text-xl font-semibold mb-4">Recommended Learning Path</h3>
            <p className="text-muted-foreground leading-relaxed">{results.learningPath}</p>
          </Card>
        </div>
      </div>
    </div>
  );
};