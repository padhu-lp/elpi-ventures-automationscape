
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, Twitter, ArrowRight, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Newsletter Section */}
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-12 mb-16 text-center border border-primary/20">
          <h3 className="text-3xl font-bold text-foreground mb-4">
            Stay Ahead of the AI Revolution
          </h3>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest insights on AI automation, industry trends, and business transformation strategies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-4 py-3 rounded-lg border border-border/50 bg-background focus:outline-none focus:border-primary"
            />
            <Button className="bg-primary hover:bg-primary/90 group">
              Subscribe
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-2">Elpi Ventures</h3>
              <p className="text-sm text-muted-foreground font-medium">AI Business Solutions</p>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Transforming SMEs through intelligent automation and expert AI consultancy. Your strategic partner for digital transformation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-foreground mb-6 text-lg">Our Services</h4>
            <ul className="space-y-3">
              <li><a href="#services" className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm">Strategic AI Consultancy</a></li>
              <li><a href="#services" className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm">Process Automation</a></li>
              <li><a href="#services" className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm">Custom IT Solutions</a></li>
              <li><a href="#services" className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm">Advanced Analytics</a></li>
              <li><a href="#services" className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm">AI Customer Support</a></li>
              <li><a href="#services" className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm">Security & Compliance</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-foreground mb-6 text-lg">Company</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm">About Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm">Case Studies</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm">Success Stories</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm">AI Insights Blog</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm">Careers</a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-foreground mb-6 text-lg">Get in Touch</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-muted-foreground text-sm">info@elpi.io</p>
                  <p className="text-muted-foreground text-sm">sales@elpi.io</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-muted-foreground text-sm">+1 (555) 123-4567</p>
                  <p className="text-muted-foreground text-sm">24/7 Support Available</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                <p className="text-muted-foreground text-sm">
                  Global Operations<br />
                  Remote-First Company
                </p>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-12" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-muted-foreground text-sm">
            © 2024 Elpi Ventures. All rights reserved. Empowering businesses through AI innovation.
          </p>
          <div className="flex space-x-8">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
