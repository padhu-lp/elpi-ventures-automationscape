
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bot, Brain, Code, Database, MessageSquare, Settings, Zap, Shield, ArrowRight, CheckCircle } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: "Strategic AI Consultancy",
      description: "Expert guidance on implementing AI solutions that align with your business objectives and drive measurable ROI.",
      features: ["AI Strategy Development", "Technology Assessment", "ROI Analysis", "Implementation Roadmap"],
      highlight: "Most Popular"
    },
    {
      icon: Bot,
      title: "Business Process Automation",
      description: "Intelligent automation solutions that eliminate manual tasks and optimize operational efficiency.",
      features: ["Workflow Automation", "Document Processing", "Data Entry Automation", "Quality Assurance"],
      highlight: null
    },
    {
      icon: Code,
      title: "Custom IT Solutions",
      description: "Bespoke software development and IT infrastructure tailored to your specific business requirements.",
      features: ["Custom Software", "System Integration", "Cloud Solutions", "Mobile Applications"],
      highlight: null
    },
    {
      icon: Database,
      title: "Advanced Analytics & BI",
      description: "Transform raw data into actionable insights with cutting-edge analytics and business intelligence platforms.",
      features: ["Data Visualization", "Predictive Analytics", "Performance Dashboards", "Reporting Systems"],
      highlight: null
    },
    {
      icon: MessageSquare,
      title: "AI-Powered Customer Support",
      description: "Enhance customer experience with intelligent chatbots and automated support systems.",
      features: ["Customer Support Bots", "Lead Generation", "FAQ Automation", "Multi-channel Support"],
      highlight: null
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Comprehensive security solutions and compliance frameworks to protect your digital assets.",
      features: ["Security Audits", "Compliance Management", "Data Protection", "Risk Assessment"],
      highlight: "Enterprise"
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
            <Zap className="w-4 h-4 mr-2" />
            Comprehensive Solutions
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Transform Your Business with
            <span className="text-primary block">Expert AI Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            From strategic consultation to implementation, we provide end-to-end AI and automation solutions 
            designed to accelerate growth and maximize operational efficiency for SMEs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="group relative overflow-hidden border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl bg-gradient-to-br from-card to-card/50">
              {service.highlight && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="px-3 py-1 text-xs font-semibold bg-primary text-primary-foreground rounded-full">
                    {service.highlight}
                  </span>
                </div>
              )}
              
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-4 rounded-xl bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110">
                    <service.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                </div>
                <CardTitle className="text-xl mb-3 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300 group/btn"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-accent/10 rounded-2xl p-12 text-center border border-primary/20">
          <h3 className="text-3xl font-bold text-foreground mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how our AI solutions can drive growth and efficiency for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 shadow-lg">
              Schedule Free Consultation
            </Button>
            <Button variant="outline" size="lg" className="border-primary/30 hover:bg-primary/5">
              Download Case Studies
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
