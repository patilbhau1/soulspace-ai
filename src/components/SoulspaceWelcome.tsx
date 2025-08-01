import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
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
      <div className="flex flex-col items-center justify-center p-6 pt-24">
      {/* Floating Particles Background */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full float-gentle"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 3) * 20}%`,
              animationDelay: `${i * 1.2}s`,
            }}
          />
        ))}
      </div>

      {/* Main Welcome Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-12">
        {/* Logo/Branding */}
        <div className="space-y-4">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center whisper-animation">
              <Heart className="w-6 h-6 text-primary" />
            </div>
            <h1 className="text-4xl md:text-6xl font-light text-foreground tracking-wide">
              Soul<span className="text-primary font-medium">Space</span>
            </h1>
          </div>
          <p className="text-xl md:text-2xl soul-text font-light opacity-80 max-w-2xl mx-auto">
            Your sanctuary for healing, wisdom, and spiritual guidance through AI-powered support
          </p>
        </div>

        {/* Spiritual Quote Carousel */}
        <Card className="healing-card max-w-3xl mx-auto">
          <div className="relative h-24 flex items-center justify-center">
            <Sparkles className="absolute left-4 top-4 w-5 h-5 text-primary/60 whisper-animation" />
            <p 
              key={currentQuote}
              className="soul-text text-lg md:text-xl italic px-12 animate-fade-in"
            >
              {spiritualQuotes[currentQuote]}
            </p>
            <Sparkles className="absolute right-4 bottom-4 w-5 h-5 text-secondary/60 whisper-animation" style={{animationDelay: "1s"}} />
          </div>
        </Card>

        {/* Interactive Voice Emotion Meter */}
        <Card className="healing-card max-w-md mx-auto">
          <div className="space-y-4">
            <h3 className="text-lg font-medium soul-text">How are you feeling right now?</h3>
            <div className="space-y-3">
              <div className="relative">
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={emotionLevel}
                  onChange={(e) => setEmotionLevel(Number(e.target.value))}
                  className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer emotion-slider"
                  style={{
                    background: `linear-gradient(to right, hsl(0 60% 70%) 0%, hsl(45 70% 70%) 50%, hsl(150 25% 65%) 100%)`
                  }}
                />
              </div>
              <div className="flex justify-between text-sm soul-text opacity-70">
                <span>Struggling</span>
                <span>Peaceful</span>
              </div>
              <p className="text-center soul-text">
                {emotionLevel < 30 ? "I'm here to listen and support you 💙" :
                 emotionLevel < 70 ? "Let's find your inner balance together 🌱" :
                 "Beautiful! Let's nurture this peace 🌸"}
              </p>
            </div>
          </div>
        </Card>

        {/* Action Buttons */}
        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <Card className="healing-card group cursor-pointer" onClick={handleVoiceCall}>
            <div className="text-center space-y-4 p-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                <Mic className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-medium soul-text">Voice Session</h3>
              <p className="soul-text opacity-70">
                Speak freely and receive gentle, spoken guidance with AI that truly listens
              </p>
              <Button 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300"
                size="lg"
              >
                Start Voice Call
              </Button>
            </div>
          </Card>

          <Card className="healing-card group cursor-pointer" onClick={handleChat}>
            <div className="text-center space-y-4 p-4">
              <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                <MessageCircle className="w-8 h-8 text-secondary-foreground" />
              </div>
              <h3 className="text-xl font-medium soul-text">Text Support</h3>
              <p className="soul-text opacity-70">
                Share your thoughts through writing and receive wisdom-filled responses
              </p>
              <Button 
                variant="outline"
                className="w-full border-secondary text-secondary-foreground hover:bg-secondary/10 transition-all duration-300"
                size="lg"
              >
                Begin Chat
              </Button>
            </div>
          </Card>
        </div>

        {/* Trust & Safety Note */}
        <div className="max-w-2xl mx-auto pt-8">
          <p className="soul-text text-sm opacity-60 leading-relaxed">
            This AI companion is designed to provide emotional support and spiritual wisdom. 
            While deeply caring, it cannot replace professional medical or psychiatric care when needed. 
            Your privacy is sacred to us.
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};