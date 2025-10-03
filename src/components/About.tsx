
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Target, Users, Lightbulb, Award, Globe, Clock, ArrowRight } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Mission-Driven Excellence",
      description: "Committed to transforming SMEs through innovative AI solutions that deliver measurable business impact."
    },
    {
      icon: Users,
      title: "Client-Centric Approach",
      description: "Every solution is meticulously crafted to address your unique challenges and business objectives."
    },
    {
      icon: Lightbulb,
      title: "Innovation Leadership",
      description: "Staying at the forefront of AI technology to deliver cutting-edge solutions that drive competitive advantage."
    }
  ];

  const achievements = [
    "Expert team with 15+ years in enterprise IT consulting",
    "Proven track record with 150+ successful digital transformations",
    "Specialized expertise in SME business process optimization",
    "24/7 dedicated support and proactive maintenance services",
    "ISO 27001 certified security processes and compliance standards",
    "Strategic partnerships with leading AI technology providers"
  ];

  const stats = [
    { icon: Award, value: "60+", label: "Processes Developed" },
    { icon: Globe, value: "10+", label: "Industries Served" },
    { icon: Clock, value: "99.9%", label: "Uptime Guarantee" }
  ];

  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Section */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center p-8 border-border/50 hover:border-primary/30 transition-all duration-300 group">
              <CardContent className="p-0">
                <stat.icon className="h-12 w-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-4xl font-bold text-foreground mb-2">{stat.value}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <div className="space-y-10">
            <div>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                About Elpi Ventures
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-8">
                Pioneering the Future of
                <span className="text-primary block">Business Automation</span>
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Elpi Ventures stands at the forefront of AI-powered business transformation, specializing in intelligent 
                  process automation for small and medium enterprises. We bridge the gap between cutting-edge technology 
                  and practical business solutions that drive real results.
                </p>
                <p>
                  Our mission is to democratize artificial intelligence, making advanced automation accessible and 
                  affordable for SMEs to compete effectively in today's digital marketplace. We believe every business, 
                  regardless of size, deserves access to the transformative power of AI.
                </p>
                <p>
                  With a proven methodology and deep industry expertise, we've helped over 150 businesses streamline 
                  operations, reduce costs, and accelerate growth through strategic automation initiatives.
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-1 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="border-border/50 hover:border-primary/30 transition-all duration-300 group">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                        <value.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                          {value.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="space-y-10">
            <Card className="border-border/50 bg-gradient-to-br from-card to-primary/5">
              <CardContent className="p-10">
                <h3 className="text-2xl font-bold mb-8 text-foreground">Why Industry Leaders Choose Us</h3>
                <div className="space-y-5">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start space-x-4 group">
                      <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-muted-foreground leading-relaxed">{achievement}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
              <CardContent className="p-10">
                <h3 className="text-2xl font-bold mb-6 text-foreground">Our Commitment to Excellence</h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  We're not just technology providers – we're your strategic partners in digital transformation. 
                  From initial consultation through implementation and beyond, we're committed to your success at every stage.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span className="text-sm text-muted-foreground">Dedicated account management</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                    <span className="text-sm text-muted-foreground">Ongoing optimization and support</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span className="text-sm text-muted-foreground">Transparent communication and reporting</span>
                  </div>
                </div>
                <Button className="mt-8 bg-primary hover:bg-primary/90 group">
                  Partner With Us
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
