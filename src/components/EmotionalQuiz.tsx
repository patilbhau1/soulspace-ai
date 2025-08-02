import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface QuizProps {
  isOpen: boolean;
  onClose: () => void;
  onComplete: (summary: string) => void;
}

const questions = [
  {
    id: 1,
    question: "How are you feeling right now?",
    options: [
      { value: "happy", label: "😄 Happy", score: 5 },
      { value: "meh", label: "😐 Meh", score: 3 },
      { value: "sad", label: "😔 Sad", score: 1 },
      { value: "angry", label: "😡 Angry", score: 1 },
      { value: "anxious", label: "😰 Anxious", score: 1 },
    ]
  },
  {
    id: 2,
    question: "How did you sleep last night?",
    options: [
      { value: "great", label: "😴 Great", score: 5 },
      { value: "okay", label: "🙂 Okay-ish", score: 3 },
      { value: "not-good", label: "😕 Not good", score: 2 },
      { value: "barely", label: "😫 Barely slept", score: 1 },
    ]
  },
  {
    id: 3,
    question: "What's your energy level today?",
    options: [
      { value: "supercharged", label: "⚡ Supercharged", score: 5 },
      { value: "fine", label: "🙂 Fine", score: 4 },
      { value: "low", label: "😓 Low", score: 2 },
      { value: "drained", label: "🛌 Drained", score: 1 },
    ]
  },
  {
    id: 4,
    question: "Have you been feeling connected to others lately?",
    options: [
      { value: "very", label: "🫂 Very connected", score: 5 },
      { value: "somewhat", label: "🙂 Somewhat", score: 3 },
      { value: "distant", label: "😶 Distant", score: 2 },
      { value: "isolated", label: "🙁 Isolated", score: 1 },
    ]
  },
  {
    id: 5,
    question: "Are you enjoying the things you usually love?",
    options: [
      { value: "yes", label: "🎨 Yes! Still loving it", score: 5 },
      { value: "bit", label: "🙂 A bit", score: 3 },
      { value: "not-much", label: "😕 Not much", score: 2 },
      { value: "lost", label: "😞 Lost interest", score: 1 },
    ]
  },
  {
    id: 6,
    question: "How often do you feel overwhelmed?",
    options: [
      { value: "rarely", label: "😌 Rarely", score: 5 },
      { value: "sometimes", label: "😐 Sometimes", score: 3 },
      { value: "often", label: "😣 Often", score: 2 },
      { value: "always", label: "😩 Almost always", score: 1 },
    ]
  },
  {
    id: 7,
    question: "Do you find it easy to focus today?",
    options: [
      { value: "laser", label: "🧠 Laser-focused", score: 5 },
      { value: "kind", label: "🙂 Kind of", score: 3 },
      { value: "not-really", label: "😕 Not really", score: 2 },
      { value: "scattered", label: "😵 Scattered", score: 1 },
    ]
  },
  {
    id: 8,
    question: "Have you had any anxious thoughts today?",
    options: [
      { value: "none", label: "😊 None at all", score: 5 },
      { value: "few", label: "😐 A few", score: 3 },
      { value: "quite-bit", label: "😰 Quite a bit", score: 2 },
      { value: "constantly", label: "😵 Constantly", score: 1 },
    ]
  },
  {
    id: 9,
    question: "What describes your mood the best right now?",
    options: [
      { value: "hopeful", label: "🌈 Hopeful", score: 5 },
      { value: "numb", label: "💤 Numb", score: 2 },
      { value: "down", label: "☁️ Down", score: 1 },
      { value: "frustrated", label: "🔥 Frustrated", score: 2 },
      { value: "low", label: "😢 Low", score: 1 },
    ]
  },
  {
    id: 10,
    question: "Would you like to talk about how you feel?",
    options: [
      { value: "yes", label: "💬 Yes, I need to talk", score: 1 },
      { value: "maybe", label: "🙂 Maybe later", score: 3 },
      { value: "not-now", label: "🙅‍♂️ Not now", score: 5 },
    ]
  }
];

export const EmotionalQuiz = ({ isOpen, onClose }: QuizProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);

  if (!isOpen) return null;

  const handleAnswer = (value: string) => {
    setAnswers(prev => ({ ...prev, [questions[currentQuestion].id]: value }));
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const calculateScore = () => {
    let totalScore = 0;
    let answeredQuestions = 0;

    Object.entries(answers).forEach(([questionId, answerValue]) => {
      const question = questions.find(q => q.id === parseInt(questionId));
      const option = question?.options.find(opt => opt.value === answerValue);
      if (option) {
        totalScore += option.score;
        answeredQuestions++;
      }
    });

    return answeredQuestions > 0 ? totalScore / answeredQuestions : 0;
  };

  const getResultMessage = () => {
    const avgScore = calculateScore();
    const userAnswers: { question: string; answer: string }[] = [];

    questions.forEach(q => {
      const selectedOptionValue = answers[q.id];
      if (selectedOptionValue) {
        const selectedOption = q.options.find(opt => opt.value === selectedOptionValue);
        if (selectedOption) {
          userAnswers.push({
            question: q.question,
            answer: selectedOption.label
          });
        }
      }
    });

    let summaryMessage = "";
    if (avgScore >= 4) {
      summaryMessage = "I've completed the mood check and I'm feeling pretty good! Here's a summary of my responses:\n" + userAnswers.map(a => `- ${a.question}: ${a.answer}`).join("\n");
      return {
        title: "You're doing great! ✨",
        message: "Looks like you're doing okay today! Keep it up 😊",
        action: "all-good",
        summary: summaryMessage
      };
    } else {
      summaryMessage = "I've completed the mood check and I'm feeling a bit low. Here's a summary of my responses:\n" + userAnswers.map(a => `- ${a.question}: ${a.answer}`).join("\n");
      return {
        title: "We're here for you 💙",
        message: "Hey, we're here for you. Let's talk. Our AI therapist is ready to listen and support you.",
        action: "talk-to-ai",
        summary: summaryMessage
      };
    }
  };

  const currentQ = questions[currentQuestion];
  const selectedAnswer = answers[currentQ?.id];
  const result = getResultMessage();

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-background">
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold soul-text">
                {showResults ? "Your Results" : "Feeling Off? Answer These 10 Questions & We'll Help You Out ❤️"}
              </h2>
              {!showResults && (
                <p className="text-sm text-muted-foreground mt-1">
                  Question {currentQuestion + 1} of {questions.length}
                </p>
              )}
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="text-muted-foreground hover:text-foreground"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>

          {!showResults ? (
            <>
              {/* Progress Bar */}
              <div className="w-full bg-muted rounded-full h-2 mb-8">
                <div
                  className="bg-primary h-2 rounded-full transition-all duration-300"
                  style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                />
              </div>

              {/* Question */}
              <div className="animate-fade-in">
                <h3 className="text-xl font-medium soul-text mb-6">
                  {currentQ.question}
                </h3>

                {/* Options */}
                <RadioGroup
                  value={selectedAnswer || ""}
                  onValueChange={handleAnswer}
                  className="space-y-3"
                >
                  {currentQ.options.map((option) => (
                    <div key={option.value} className="flex items-center space-x-3">
                      <RadioGroupItem
                        value={option.value}
                        id={option.value}
                        className="mt-1"
                      />
                      <Label
                        htmlFor={option.value}
                        className="text-lg cursor-pointer flex-1 py-3 px-4 rounded-lg border border-transparent hover:border-primary/20 hover:bg-primary/5 transition-all duration-200"
                      >
                        {option.label}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              {/* Navigation */}
              <div className="flex justify-between mt-8">
                <Button
                  variant="outline"
                  onClick={handlePrevious}
                  disabled={currentQuestion === 0}
                  className="flex items-center gap-2"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Previous
                </Button>
                <Button
                  onClick={handleNext}
                  disabled={!selectedAnswer}
                  className="flex items-center gap-2"
                >
                  {currentQuestion === questions.length - 1 ? "See Results" : "Next"}
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </>
          ) : (
            /* Results */
            <div className="text-center space-y-6 animate-fade-in">
              <div className="text-6xl mb-4">
                {result.action === "all-good" ? "🌟" : "🤗"}
              </div>
              <h3 className="text-2xl font-bold soul-text">{result.title}</h3>
              <p className="text-lg soul-text opacity-80 max-w-md mx-auto">
                {result.message}
              </p>
              
              <div className="space-y-3 pt-4">
                {result.action === "talk-to-ai" ? (
                  <Button
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                    size="lg"
                    onClick={() => {
                      console.log("Talk to AI Therapist button clicked. Summary:", result.summary);
                      onComplete(result.summary);
                      onClose();
                    }}
                  >
                    🤖 Talk to AI Therapist
                  </Button>
                ) : (
                  <Button
                    className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                    size="lg"
                    onClick={() => {
                      onComplete("");
                      onClose();
                    }}
                  >
                    ✨ Continue Your Day
                  </Button>
                )}
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={onClose}
                >
                  Close
                </Button>
              </div>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};