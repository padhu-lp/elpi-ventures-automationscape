
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Target, Users, Lightbulb } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description: "We're committed to helping SMEs thrive in the digital age through innovative AI solutions."
    },
    {
      icon: Users,
      title: "Client-Centric",
      description: "Every solution is tailored to meet the unique needs and challenges of your business."
    },
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "We stay ahead of technology trends to bring you cutting-edge solutions that work."
    }
  ];

  const achievements = [
    "Expert team with 10+ years in IT consulting",
    "Proven track record with 50+ successful projects",
    "Specialized in SME digital transformation",
    "24/7 support and maintenance services",
    "ISO certified processes and security standards",
    "Partner with leading AI technology providers"
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                About Elpi Ventures
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Elpi Ventures is a forward-thinking IT consultancy specializing in AI-powered business process automation for small and medium enterprises. We bridge the gap between cutting-edge technology and practical business solutions.
              </p>
              <p className="text-lg text-muted-foreground">
                Our mission is to democratize AI technology, making it accessible and affordable for SMEs to compete effectively in today's digital marketplace. We believe that every business, regardless of size, deserves access to the transformative power of artificial intelligence.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="border-border/50">
                  <CardContent className="p-6 text-center">
                    <value.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-card border border-border rounded-xl p-8">
              <h3 className="text-2xl font-semibold mb-6 text-foreground">Why Choose Us?</h3>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-8 border border-primary/20">
              <h3 className="text-xl font-semibold mb-4 text-foreground">Our Commitment</h3>
              <p className="text-muted-foreground">
                We're not just technology providers – we're your strategic partners in digital transformation. 
                From initial consultation to ongoing support, we're committed to your success every step of the way.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
