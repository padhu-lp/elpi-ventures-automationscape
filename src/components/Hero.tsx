
import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Cog, Users } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-background via-background to-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Transform Your Business with
                <span className="text-primary block">AI Automation</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Elpi Ventures helps SMEs streamline operations, reduce costs, and boost productivity through cutting-edge AI solutions and expert IT consultancy.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8 py-6">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                Learn More
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">30%</div>
                <div className="text-sm text-muted-foreground">Average Cost Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Support Available</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="bg-card border border-border rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <Bot className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-lg font-semibold mb-2">AI Integration</h3>
                  <p className="text-muted-foreground text-sm">Seamlessly integrate AI tools into your existing workflows</p>
                </div>
                <div className="bg-card border border-border rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <Users className="h-12 w-12 text-accent mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Expert Team</h3>
                  <p className="text-muted-foreground text-sm">Dedicated professionals with deep industry knowledge</p>
                </div>
              </div>
              <div className="space-y-6 mt-8">
                <div className="bg-card border border-border rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <Cog className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Process Automation</h3>
                  <p className="text-muted-foreground text-sm">Automate repetitive tasks and optimize operations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
