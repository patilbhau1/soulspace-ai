import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Yoga = () => {
  const yogaPoses = [
    {
      name: "Mountain Pose",
      sanskrit: "Tadasana",
      duration: "2-5 minutes",
      description: "Stand tall and grounded, connecting with your inner strength.",
      benefits: ["Improves posture", "Builds confidence", "Centers the mind"],
      videoLink: "https://youtu.be/5NxDs-ovJU8?si=hEcxQflCJ0qOBoJs"
    },
    {
      name: "Child's Pose",
      sanskrit: "Balasana",
      duration: "3-5 minutes",
      description: "A restorative pose that brings you back to yourself.",
      benefits: ["Calms the nervous system", "Relieves stress", "Promotes introspection"],
      videoLink: "https://youtu.be/zStvLHeRnVQ?si=VREEn8UPONQiMZxn"
    },
    {
      name: "Warrior II",
      sanskrit: "Virabhadrasana II",
      duration: "1-3 minutes each side",
      description: "Embrace your inner warrior with strength and grace.",
      benefits: ["Builds strength", "Increases confidence", "Improves focus"],
      videoLink: "https://youtu.be/Mn6RSIRCV3w?si=UzGvfNMXapzAQ80I"
    },
    {
      name: "Lotus Pose",
      sanskrit: "Padmasana",
      duration: "5-20 minutes",
      description: "The classic meditation pose for deep spiritual connection.",
      benefits: ["Enhances meditation", "Improves flexibility", "Calms the mind"],
      videoLink: "https://youtu.be/w_j4lnfRC38?si=aPyo3O6dJtBp302e"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <Navigation />
      
      <div className="pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Healing Yoga
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Connect body, mind, and spirit through gentle movement and mindful breathing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {yogaPoses.map((pose, index) => (
              <Card key={index} className="p-6 bg-card/30 backdrop-blur-sm border border-border/20 hover:border-primary/30 transition-all duration-300">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-primary mb-1">{pose.name}</h3>
                  <p className="text-sm text-muted-foreground italic">{pose.sanskrit}</p>
                  <p className="text-sm text-accent font-medium">{pose.duration}</p>
                </div>
                
                <p className="text-muted-foreground mb-4">{pose.description}</p>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm">Benefits:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {pose.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center">
                        <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Button className="w-full mt-4" variant="outline" onClick={() => window.open(pose.videoLink, '_blank')}>
                  Start Practice
                </Button>
              </Card>
            ))}
          </div>

          <div className="bg-card/30 backdrop-blur-sm rounded-3xl p-8 border border-border/20 text-center">
            <h2 className="text-2xl font-bold mb-4 text-primary">Ready to Begin?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Start with just 10 minutes a day. Each pose is a step toward inner peace and emotional balance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90">
                Begin Gentle Flow
              </Button>
              <Button size="lg" variant="outline">
                Guided Session
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Yoga;