
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bot, Brain, Code, Database, MessageSquare, Settings, Zap, Shield } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: "AI Consultancy",
      description: "Strategic guidance on implementing AI solutions tailored to your business needs and objectives.",
      features: ["AI Strategy Development", "Technology Assessment", "ROI Analysis", "Implementation Roadmap"]
    },
    {
      icon: Bot,
      title: "Business Process Automation",
      description: "Streamline your operations with intelligent automation solutions that reduce manual work.",
      features: ["Workflow Automation", "Document Processing", "Data Entry Automation", "Quality Assurance"]
    },
    {
      icon: Code,
      title: "Custom IT Solutions",
      description: "Bespoke software development and IT infrastructure designed for your specific requirements.",
      features: ["Custom Software", "System Integration", "Cloud Solutions", "Mobile Applications"]
    },
    {
      icon: Database,
      title: "Data Analytics & BI",
      description: "Transform your data into actionable insights with advanced analytics and business intelligence.",
      features: ["Data Visualization", "Predictive Analytics", "Performance Dashboards", "Reporting Systems"]
    },
    {
      icon: MessageSquare,
      title: "AI Chatbots & Support",
      description: "Enhance customer service with intelligent chatbots and automated support systems.",
      features: ["Customer Support Bots", "Lead Generation", "FAQ Automation", "Multi-channel Support"]
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Protect your business with robust security measures and compliance frameworks.",
      features: ["Security Audits", "Compliance Management", "Data Protection", "Risk Assessment"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive IT solutions designed to transform your business operations and drive growth through intelligent automation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <service.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                </div>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <Zap className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-colors">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
