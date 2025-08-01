import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const Meditation = () => {
  const meditations = [
    {
      title: "Breath Awareness",
      duration: "5-15 minutes",
      level: "Beginner",
      description: "Focus on your natural breath to anchor yourself in the present moment.",
      progress: 0
    },
    {
      title: "Loving Kindness",
      duration: "10-20 minutes",
      level: "Intermediate",
      description: "Cultivate compassion for yourself and others through gentle intentions.",
      progress: 60
    },
    {
      title: "Body Scan",
      duration: "15-30 minutes",
      level: "All levels",
      description: "Journey through your body, releasing tension and finding peace.",
      progress: 100
    },
    {
      title: "Walking Meditation",
      duration: "10-25 minutes",
      level: "All levels",
      description: "Find mindfulness in movement and connection with the earth.",
      progress: 30
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <Navigation />
      
      <div className="pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Mindful Meditation
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Cultivate inner peace and emotional balance through guided meditation practices.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {meditations.map((meditation, index) => (
              <Card key={index} className="p-6 bg-card/30 backdrop-blur-sm border border-border/20 hover:border-primary/30 transition-all duration-300">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-1">{meditation.title}</h3>
                    <p className="text-sm text-accent font-medium">{meditation.duration}</p>
                  </div>
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                    {meditation.level}
                  </span>
                </div>
                
                <p className="text-muted-foreground mb-4">{meditation.description}</p>
                
                {meditation.progress > 0 && (
                  <div className="mb-4">
                    <div className="flex justify-between text-sm text-muted-foreground mb-2">
                      <span>Progress</span>
                      <span>{meditation.progress}%</span>
                    </div>
                    <Progress value={meditation.progress} className="h-2" />
                  </div>
                )}
                
                <div className="flex gap-2">
                  <Button className="flex-1" variant={meditation.progress === 0 ? "default" : "outline"}>
                    {meditation.progress === 0 ? "Start" : meditation.progress === 100 ? "Restart" : "Continue"}
                  </Button>
                  <Button variant="ghost" size="icon">
                    <span className="text-lg">🔖</span>
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="p-6 bg-card/30 backdrop-blur-sm border border-border/20 text-center">
              <div className="text-3xl mb-3">🧘‍♀️</div>
              <h3 className="font-bold mb-2">Daily Practice</h3>
              <p className="text-sm text-muted-foreground">Build a consistent meditation habit with gentle reminders</p>
            </Card>
            
            <Card className="p-6 bg-card/30 backdrop-blur-sm border border-border/20 text-center">
              <div className="text-3xl mb-3">🎵</div>
              <h3 className="font-bold mb-2">Ambient Sounds</h3>
              <p className="text-sm text-muted-foreground">Nature sounds and healing frequencies to enhance focus</p>
            </Card>
            
            <Card className="p-6 bg-card/30 backdrop-blur-sm border border-border/20 text-center">
              <div className="text-3xl mb-3">📊</div>
              <h3 className="font-bold mb-2">Progress Tracking</h3>
              <p className="text-sm text-muted-foreground">Monitor your meditation journey and celebrate milestones</p>
            </Card>
          </div>

          <div className="bg-card/30 backdrop-blur-sm rounded-3xl p-8 border border-border/20 text-center">
            <h2 className="text-2xl font-bold mb-4 text-primary">Start Your Journey Today</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Even a few minutes of daily meditation can transform your mental well-being and emotional resilience.
            </p>
            <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90">
              Begin 5-Minute Session
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Meditation;