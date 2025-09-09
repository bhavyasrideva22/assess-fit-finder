import { AssessmentQuestion } from "@/types/assessment";

export const assessmentQuestions: AssessmentQuestion[] = [
  // Psychometric Section - Interest Inventory
  {
    id: "psych_1",
    type: "scenario",
    section: "psychometric",
    category: "interest",
    question: "You're at a healthcare conference. Which session would you most likely attend?",
    options: [
      "AI and Machine Learning in Diagnostics",
      "Patient Experience Design Workshop", 
      "Healthcare Policy and Regulation Updates",
      "Financial Management for Health Systems"
    ]
  },
  {
    id: "psych_2", 
    type: "likert",
    section: "psychometric",
    category: "personality",
    question: "I enjoy analyzing complex problems and finding systematic solutions",
    scale: { min: 1, max: 5, labels: { 1: "Strongly Disagree", 5: "Strongly Agree" } }
  },
  {
    id: "psych_3",
    type: "scenario", 
    section: "psychometric",
    category: "interest",
    question: "Your ideal work environment involves:",
    options: [
      "Collaborating with diverse teams on innovation projects",
      "Deep focus work analyzing data and systems",
      "Presenting strategies to executive leadership",
      "Direct patient or provider interaction"
    ]
  },
  {
    id: "psych_4",
    type: "likert",
    section: "psychometric", 
    category: "personality",
    question: "I prefer structured, step-by-step approaches to solving problems",
    scale: { min: 1, max: 5, labels: { 1: "Strongly Disagree", 5: "Strongly Agree" } }
  },
  {
    id: "psych_5",
    type: "likert",
    section: "psychometric",
    category: "grit", 
    question: "I maintain my effort and interest despite failures or challenges",
    scale: { min: 1, max: 5, labels: { 1: "Strongly Disagree", 5: "Strongly Agree" } }
  },

  // Technical Section
  {
    id: "tech_1",
    type: "multiple-choice",
    section: "technical",
    category: "domain_knowledge",
    question: "What does HIPAA primarily regulate in healthcare?",
    options: [
      "Healthcare pricing and insurance coverage",
      "Patient data privacy and security", 
      "Medical device safety standards",
      "Healthcare provider licensing requirements"
    ]
  },
  {
    id: "tech_2",
    type: "multiple-choice", 
    section: "technical",
    category: "logical_reasoning",
    question: "If telemedicine usage increased 300% during COVID-19 and was at 15% adoption before, what's the current adoption rate?",
    options: [
      "45%",
      "60%", 
      "30%",
      "18%"
    ]
  },
  {
    id: "tech_3",
    type: "multiple-choice",
    section: "technical",
    category: "domain_knowledge", 
    question: "What is an EHR system primarily designed to do?",
    options: [
      "Process insurance claims automatically",
      "Store and manage patient health records digitally",
      "Schedule patient appointments",
      "Manage hospital inventory"
    ]
  },
  {
    id: "tech_4",
    type: "multiple-choice",
    section: "technical", 
    category: "logical_reasoning",
    question: "A hospital wants to reduce patient wait times by 25%. If current average wait is 40 minutes, what should the target be?",
    options: [
      "30 minutes",
      "35 minutes",
      "25 minutes", 
      "15 minutes"
    ]
  },

  // WISCAR Section
  {
    id: "wiscar_1",
    type: "likert",
    section: "wiscar",
    category: "will",
    question: "I'm willing to invest 2-3 years learning new skills to transition into digital health",
    scale: { min: 1, max: 5, labels: { 1: "Strongly Disagree", 5: "Strongly Agree" } }
  },
  {
    id: "wiscar_2", 
    type: "likert",
    section: "wiscar",
    category: "interest",
    question: "I'm genuinely excited about the intersection of technology and healthcare",
    scale: { min: 1, max: 5, labels: { 1: "Strongly Disagree", 5: "Strongly Agree" } }
  },
  {
    id: "wiscar_3",
    type: "slider",
    section: "wiscar", 
    category: "skill",
    question: "Rate your current comfort level with data analysis and interpretation",
    scale: { min: 0, max: 100, labels: { 0: "Beginner", 50: "Intermediate", 100: "Expert" } }
  },
  {
    id: "wiscar_4",
    type: "likert",
    section: "wiscar",
    category: "cognitive", 
    question: "I can easily see how different parts of a complex system interact with each other",
    scale: { min: 1, max: 5, labels: { 1: "Strongly Disagree", 5: "Strongly Agree" } }
  },
  {
    id: "wiscar_5",
    type: "likert", 
    section: "wiscar",
    category: "ability",
    question: "I adapt quickly when processes or technologies change in my work",
    scale: { min: 1, max: 5, labels: { 1: "Strongly Disagree", 5: "Strongly Agree" } }
  },
  {
    id: "wiscar_6",
    type: "scenario",
    section: "wiscar",
    category: "real_world",
    question: "Which aspect of healthcare transformation motivates you most?", 
    options: [
      "Improving patient outcomes through better technology",
      "Making healthcare more accessible and affordable",
      "Streamlining operations to reduce provider burnout",
      "Advancing medical research through data insights"
    ]
  }
];