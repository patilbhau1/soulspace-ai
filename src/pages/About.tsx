import Navigation from "@/components/Navigation";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <Navigation />
      
      <div className="pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              About SoulSpace
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A sanctuary for healing, growth, and spiritual connection through AI-powered therapeutic support.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-primary">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                SoulSpace exists to provide accessible, compassionate mental health support to those who need it most. 
                We believe healing should be available to everyone, regardless of their financial situation or geographic location.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Through AI-powered conversations rooted in ancient wisdom and modern therapeutic practices, 
                we create a safe space for emotional expression and spiritual growth.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-primary">Our Approach</h2>
              <p className="text-muted-foreground leading-relaxed">
                We blend cutting-edge AI technology with timeless spiritual teachings from the **Bhagavad Gita**, 
                creating responses that are both scientifically informed and deeply compassionate.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our platform offers multiple pathways to healing: voice conversations, text chat, 
                guided meditations, yoga practices, and reflective journaling.
              </p>
            </div>
          </div>

          <div className="bg-card/30 backdrop-blur-sm rounded-3xl p-8 border border-border/20">
            <h2 className="text-2xl font-bold text-center mb-8 text-primary">Core Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤲</span>
                </div>
                <h3 className="font-semibold mb-2">Compassion</h3>
                <p className="text-sm text-muted-foreground">Every interaction is guided by deep empathy and understanding</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌱</span>
                </div>
                <h3 className="font-semibold mb-2">Growth</h3>
                <p className="text-sm text-muted-foreground">Supporting continuous learning and personal development</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔒</span>
                </div>
                <h3 className="font-semibold mb-2">Privacy</h3>
                <p className="text-sm text-muted-foreground">Your conversations are safe, secure, and confidential</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;