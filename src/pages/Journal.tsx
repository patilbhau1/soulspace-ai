import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

const Journal = () => {
  const journalPrompts = [
    "What am I most grateful for today?",
    "How am I feeling right now, and why?",
    "What challenged me today, and what did I learn?",
    "What would I like to release or let go of?",
    "What brings me peace and joy?"
  ];

  const recentEntries = [
    {
      date: "Today",
      preview: "I'm feeling grateful for the small moments of peace I found...",
      mood: "😌"
    },
    {
      date: "Yesterday",
      preview: "Today was challenging, but I'm learning to be more patient...",
      mood: "🌱"
    },
    {
      date: "3 days ago",
      preview: "Meditation this morning helped me feel more centered...",
      mood: "🧘‍♀️"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <Navigation />
      
      <div className="pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Sacred Journal
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A private space for reflection, gratitude, and emotional exploration.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <Card className="p-6 bg-card/30 backdrop-blur-sm border border-border/20">
                <h2 className="text-xl font-bold mb-4 text-primary">New Entry</h2>
                
                <div className="space-y-4">
                  <div>
                    <Input 
                      placeholder="Give your entry a title..."
                      className="bg-background/50 border-border/30"
                    />
                  </div>
                  
                  <div>
                    <Textarea 
                      placeholder="What's on your heart today? Write freely and without judgment..."
                      rows={8}
                      className="bg-background/50 border-border/30 resize-none"
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-muted-foreground">How are you feeling?</span>
                      <div className="flex space-x-1">
                        {["😊", "😌", "😐", "😔", "😢"].map((emoji, i) => (
                          <button 
                            key={i}
                            className="text-2xl hover:scale-110 transition-transform"
                          >
                            {emoji}
                          </button>
                        ))}
                      </div>
                    </div>
                    
                    <Button className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90">
                      Save Entry
                    </Button>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-card/30 backdrop-blur-sm border border-border/20">
                <h2 className="text-xl font-bold mb-4 text-primary">Recent Entries</h2>
                <div className="space-y-4">
                  {recentEntries.map((entry, index) => (
                    <div key={index} className="p-4 bg-background/30 rounded-lg border border-border/20 hover:border-primary/30 transition-colors cursor-pointer">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-accent">{entry.date}</span>
                        <span className="text-xl">{entry.mood}</span>
                      </div>
                      <p className="text-muted-foreground text-sm">{entry.preview}</p>
                    </div>
                  ))}
                </div>
                
                <Button variant="outline" className="w-full mt-4">
                  View All Entries
                </Button>
              </Card>
            </div>

            <div className="space-y-8">
              <Card className="p-6 bg-card/30 backdrop-blur-sm border border-border/20">
                <h3 className="font-bold mb-4 text-primary">Reflection Prompts</h3>
                <div className="space-y-3">
                  {journalPrompts.map((prompt, index) => (
                    <button 
                      key={index}
                      className="w-full text-left p-3 bg-background/30 rounded-lg border border-border/20 hover:border-primary/30 transition-colors text-sm"
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
              </Card>

              <Card className="p-6 bg-card/30 backdrop-blur-sm border border-border/20 text-center">
                <div className="text-3xl mb-3">📊</div>
                <h3 className="font-bold mb-2">Mood Insights</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Track your emotional patterns over time
                </p>
                <Button variant="outline" size="sm">
                  View Insights
                </Button>
              </Card>

              <Card className="p-6 bg-card/30 backdrop-blur-sm border border-border/20 text-center">
                <div className="text-3xl mb-3">💝</div>
                <h3 className="font-bold mb-2">Gratitude Practice</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Daily gratitude prompts to shift perspective
                </p>
                <Button variant="outline" size="sm">
                  Start Practice
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journal;