
import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Cog, Users, TrendingUp, Shield, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-background via-background to-primary/5 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
                <Zap className="w-4 h-4 mr-2" />
                AI-Powered Business Transformation
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                Elevate Your Business with
                <span className="text-primary block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Intelligent Automation
                </span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-muted-foreground max-w-2xl leading-relaxed">
                Elpi Ventures empowers SMEs with cutting-edge AI solutions, streamlining operations and unlocking unprecedented growth potential through strategic automation.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <Button size="lg" className="text-lg px-10 py-7 bg-primary hover:bg-primary/90 shadow-xl hover:shadow-2xl transition-all duration-300 group">
                Start Your Transformation
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-10 py-7 border-primary/30 hover:bg-primary/5 hover:border-primary transition-all duration-300">
                Schedule Consultation
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-12 border-t border-border/30">
              <div className="text-center group cursor-pointer">
                <div className="text-3xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">15</div>
                <div className="text-sm text-muted-foreground font-medium">SMEs Transformed</div>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="text-3xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">40%</div>
                <div className="text-sm text-muted-foreground font-medium">Average Cost Reduction</div>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="text-3xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">24/7</div>
                <div className="text-sm text-muted-foreground font-medium">Expert Support</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-1 gap-8">
              {/* Main Feature Card */}
              <div className="relative">
                <div className="bg-gradient-to-br from-card via-card to-primary/5 border border-border/50 rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 group">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="p-4 rounded-xl bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      <Bot className="h-8 w-8 text-primary group-hover:text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1">AI Process Automation</h3>
                      <p className="text-muted-foreground">Transform workflows intelligently</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 rounded-full bg-primary mr-3"></div>
                      Reduce manual work by 70%
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 rounded-full bg-accent mr-3"></div>
                      24/7 automated operations
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 rounded-full bg-primary mr-3"></div>
                      Real-time performance insights
                    </div>
                  </div>
                </div>
              </div>

              {/* Secondary Cards */}
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-card border border-border/50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <TrendingUp className="h-10 w-10 text-accent mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h4 className="text-lg font-semibold mb-2">Growth Analytics</h4>
                  <p className="text-muted-foreground text-sm">Data-driven insights for strategic decisions</p>
                </div>
                
                <div className="bg-card border border-border/50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <Shield className="h-10 w-10 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h4 className="text-lg font-semibold mb-2">Secure Solutions</h4>
                  <p className="text-muted-foreground text-sm">Enterprise-grade security standards</p>
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
