import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { Brain, Target, Users, TrendingUp, ArrowRight, CheckCircle } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <Brain className="h-8 w-8 text-primary" />,
      title: "Psychometric Analysis",
      description: "Advanced personality and interest assessment using validated psychological frameworks"
    },
    {
      icon: <Target className="h-8 w-8 text-accent" />,
      title: "Technical Readiness",
      description: "Evaluate your aptitude for digital health technologies and analytical thinking"
    },
    {
      icon: <Users className="h-8 w-8 text-success" />,
      title: "WISCAR Framework", 
      description: "Comprehensive analysis across Will, Interest, Skill, Cognitive ability, Ability, and Real-world fit"
    }
  ];

  const benefits = [
    "Get personalized career recommendations",
    "Identify your skill gaps and strengths", 
    "Receive a tailored learning roadmap",
    "Discover if digital health strategy is right for you"
  ];

  return (
    <div className="min-h-screen bg-gradient-soft">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 bg-primary/10 px-6 py-3 rounded-full mb-8">
              <Brain className="h-5 w-5 text-primary" />
              <span className="font-semibold text-primary">Digital Health Career Assessment</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-primary bg-clip-text text-transparent leading-tight">
              Should You Learn Digital Health Strategy?
            </h1>
            
            <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Take our comprehensive 20-minute assessment to discover if becoming a Digital Health Strategist 
              aligns with your interests, skills, and career goals. Get personalized insights and a tailored learning path.
            </p>
            
            <Button 
              onClick={() => navigate('/assessment')}
              size="lg"
              className="bg-gradient-primary hover:shadow-button transition-all duration-300 transform hover:scale-105 text-lg px-8 py-6 h-auto"
            >
              Start Assessment
              <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white/50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Comprehensive Assessment Framework</h2>
              <p className="text-xl text-muted-foreground">
                Our scientifically-backed assessment evaluates multiple dimensions of career fit
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="p-8 bg-gradient-card shadow-card border-0 text-center">
                  <div className="bg-white/80 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-6 bg-success/10 text-success border-success/20">
                  What You'll Get
                </Badge>
                <h2 className="text-3xl font-bold mb-6">Personalized Career Insights</h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Our assessment doesn't just tell you if you're a fit – it provides actionable insights 
                  to help you succeed in digital health strategy or find alternative paths that match your strengths.
                </p>
                
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <Card className="p-8 bg-gradient-card shadow-card border-0">
                <div className="text-center">
                  <TrendingUp className="h-16 w-16 text-primary mx-auto mb-6" />
                  <h3 className="text-xl font-semibold mb-4">Start Your Journey</h3>
                  <p className="text-muted-foreground mb-6">
                    Join thousands who have discovered their ideal career path in digital health
                  </p>
                  <Button 
                    onClick={() => navigate('/assessment')}
                    className="w-full bg-gradient-primary hover:shadow-button"
                  >
                    Begin Assessment
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
