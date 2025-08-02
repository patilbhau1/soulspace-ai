import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import { EmotionalQuiz } from "@/components/EmotionalQuiz";
import { Mic, MessageCircle, Heart, Sparkles } from "lucide-react";

const spiritualQuotes = [
  "The mind is everything. What you think you become. - Buddha",
  "You have the right to perform your prescribed duty, but you are not entitled to the fruits of actions. - Bhagavad Gita",
  "Peace comes from within. Do not seek it without. - Buddha",
  "The soul that sees beauty may sometimes walk alone. - Johann Wolfgang von Goethe",
  "In the depths of winter, I finally learned that there was in me an invincible summer. - Albert Camus"
];

export const SoulspaceWelcome = () => {
  const [currentQuote, setCurrentQuote] = useState(0);
  const [emotionLevel, setEmotionLevel] = useState(50);
  const [sliderTouched, setSliderTouched] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % spiritualQuotes.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const handleVoiceCall = () => {
    // This will be connected to Deepgram/Twilio later
    console.log("Starting voice session...");
  };

  const handleChat = () => {
    // This will be connected to chat interface later
    console.log("Starting chat session...");
  };

  return (
    <div className="min-h-screen soul-container">
      <Navigation />
      <div className="flex flex-col items-center justify-center p-6 pt-24 min-h-screen">
      {/* Floating Particles Background */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 bg-primary/30 rounded-full float-gentle"
            style={{
              left: `${15 + i * 12}%`,
              top: `${25 + (i % 4) * 18}%`,
              animationDelay: `${i * 1.5}s`,
            }}
          />
        ))}
      </div>

      {/* Main Welcome Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-16 flex-1 flex flex-col justify-center">
        {/* Logo/Branding */}
        <div className="space-y-6">
          <div className="flex items-center justify-center space-x-3 mb-8">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center whisper-animation">
              <Heart className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-5xl md:text-7xl font-light text-foreground tracking-wide">
              Soul<span className="text-primary font-medium">Space</span>
            </h1>
          </div>
          <p className="text-2xl md:text-3xl soul-text font-light opacity-80 max-w-3xl mx-auto">
            Your sanctuary for healing, wisdom, and spiritual guidance through AI-powered support
          </p>
        </div>

        {/* Spiritual Quote Carousel */}
        <Card className="healing-card max-w-4xl mx-auto transform hover:scale-105 transition-transform duration-300">
          <div className="relative h-32 flex items-center justify-center">
            <Sparkles className="absolute left-6 top-6 w-6 h-6 text-primary/60 whisper-animation" />
            <p 
              key={currentQuote}
              className="soul-text text-xl md:text-2xl italic px-16 animate-fade-in"
            >
              {spiritualQuotes[currentQuote]}
            </p>
            <Sparkles className="absolute right-6 bottom-6 w-6 h-6 text-secondary/60 whisper-animation" style={{animationDelay: "1s"}} />
          </div>
        </Card>

        {/* Interactive Emotion Meter - Central Focus */}
        <Card className="healing-card max-w-lg mx-auto transform hover:scale-105 transition-all duration-300 ring-2 ring-primary/20 hover:ring-primary/40">
          <div className="space-y-6 p-2">
            <div className="text-center space-y-2">
              <h3 className="text-2xl font-medium soul-text">How are you feeling right now?</h3>
              <p className="soul-text opacity-70">Move the slider to express your current mood</p>
            </div>
            <div className="space-y-4">
              <div className="relative p-2">
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={emotionLevel}
                  onChange={(e) => {
                    setEmotionLevel(Number(e.target.value));
                    setSliderTouched(true);
                  }}
                  className="w-full h-4 bg-muted rounded-lg appearance-none cursor-pointer emotion-slider transform hover:scale-105 transition-transform duration-200"
                  style={{
                    background: `linear-gradient(to right, hsl(0 60% 70%) 0%, hsl(45 70% 70%) 50%, hsl(150 25% 65%) 100%)`
                  }}
                />
                <div className="absolute top-[-8px] left-1/2 transform -translate-x-1/2 w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center whisper-animation">
                  <Heart className="w-4 h-4 text-primary" />
                </div>
              </div>
              <div className="flex justify-between text-base soul-text opacity-70 px-2">
                <span className="flex items-center gap-2">😔 <span>Struggling</span></span>
                <span className="flex items-center gap-2"><span>Peaceful</span> 🌸</span>
              </div>
              <div className="text-center p-4 bg-primary/5 rounded-lg">
                <p className="soul-text text-lg">
                  {emotionLevel < 30 ? "I'm here to listen and support you 💙" :
                   emotionLevel < 70 ? "Let's find your inner balance together 🌱" :
                   "Beautiful! Let's nurture this peace 🌸"}
                </p>
              </div>
              
              {/* Animated Quiz Button */}
              {sliderTouched && (
                <div className="pt-2 animate-fade-in">
                  <Button
                    onClick={() => setShowQuiz(true)}
                    className="w-full bg-gradient-to-r from-primary to-secondary text-white hover:from-primary/90 hover:to-secondary/90 transition-all duration-300 transform hover:scale-105 text-lg py-3"
                    size="lg"
                  >
                    <span className="mr-2">🧠</span> Quick Mood Check
                  </Button>
                </div>
              )}
            </div>
          </div>
        </Card>
      </div>

      {/* Personal Footer */}
      <footer className="relative z-10 w-full max-w-4xl mx-auto text-center space-y-4 pb-8 pt-16">
        <div className="space-y-6">
          {/* Made by credit */}
          <p className="text-lg font-handwritten text-primary/80 tracking-wide">
            Made by Omkar ❤️
          </p>
          
          {/* Hope-giving tagline with subtle animation */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-lg animate-pulse opacity-50"></div>
            <p className="relative soul-text text-base md:text-lg opacity-90 leading-relaxed px-6 py-4 max-w-2xl mx-auto">
              "I wasn't able to afford a therapist during my hard times, but here's your free AI therapist — made by me to help Gen Z."
            </p>
          </div>
        </div>
      </footer>

      {/* Emotional Quiz Modal */}
      <EmotionalQuiz
        isOpen={showQuiz}
        onClose={() => setShowQuiz(false)}
      />
    </div>
    </div>
  );
};