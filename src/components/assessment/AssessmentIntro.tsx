import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, Target, Users, TrendingUp, Clock, CheckCircle } from "lucide-react";

interface AssessmentIntroProps {
  onStartAssessment: () => void;
}

export const AssessmentIntro = ({ onStartAssessment }: AssessmentIntroProps) => {
  return (
    <div className="min-h-screen bg-gradient-soft">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 bg-primary/10 px-6 py-3 rounded-full mb-6">
              <Brain className="h-6 w-6 text-primary" />
              <span className="font-semibold text-primary">Digital Health Assessment</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Should You Learn Digital Health Strategy?
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Discover if you're ready to become a Digital Health Strategist with our comprehensive assessment
            </p>
          </div>

          {/* What is Digital Health Strategy */}
          <Card className="mb-8 p-8 bg-gradient-card shadow-card border-0">
            <h2 className="text-2xl font-semibold mb-4">What is a Digital Health Strategist?</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              A Digital Health Strategist sits at the intersection of healthcare, technology, and strategy. 
              They lead the implementation of digital health solutions like electronic health records (EHRs), 
              telemedicine platforms, AI diagnostics, and mobile health applications.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Typical Career Paths</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-success" />
                    Digital Health Consultant
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-success" />
                    Chief Digital Officer (Healthcare)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-success" />
                    HealthTech Product Manager
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-success" />
                    Healthcare Innovation Strategist
                  </li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Key Skills Required</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Target className="h-4 w-4 text-primary" />
                    Systems thinking & strategic planning
                  </li>
                  <li className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-primary" />
                    Stakeholder management
                  </li>
                  <li className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-primary" />
                    Digital transformation expertise
                  </li>
                  <li className="flex items-center gap-2">
                    <Brain className="h-4 w-4 text-primary" />
                    Analytical & empathetic mindset
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Assessment Overview */}
          <Card className="mb-8 p-8 bg-gradient-card shadow-card border-0">
            <h2 className="text-2xl font-semibold mb-6">Assessment Overview</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <Brain className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Psychometric Analysis</h3>
                <p className="text-sm text-muted-foreground">
                  Personality traits, interests, and motivation assessment
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-accent/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <Target className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-semibold mb-2">Technical Readiness</h3>
                <p className="text-sm text-muted-foreground">
                  Domain knowledge and analytical aptitude evaluation
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-success/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <TrendingUp className="h-8 w-8 text-success" />
                </div>
                <h3 className="font-semibold mb-2">WISCAR Framework</h3>
                <p className="text-sm text-muted-foreground">
                  Will, Interest, Skill, Cognitive ability, Ability, Real-world fit
                </p>
              </div>
            </div>
            
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <Clock className="h-5 w-5" />
              <span>Estimated time: 20-25 minutes</span>
            </div>
          </Card>

          {/* Start Assessment */}
          <div className="text-center">
            <Button
              onClick={onStartAssessment}
              size="lg"
              className="bg-gradient-primary hover:shadow-button transition-all duration-300 transform hover:scale-105"
            >
              Start Your Assessment
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              Get personalized insights and career recommendations
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};