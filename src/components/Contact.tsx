
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock, Send, Calendar, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
            <MessageCircle className="w-4 h-4 mr-2" />
            Get In Touch
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Ready to Transform
            <span className="text-primary block">Your Business?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Let's discuss how our AI solutions can revolutionize your operations and drive sustainable growth. 
            Our experts are ready to craft a customized strategy for your business.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-border/50 shadow-xl">
              <CardHeader className="pb-8">
                <CardTitle className="text-2xl">Send us a Message</CardTitle>
                <p className="text-muted-foreground">Fill out the form below and we'll get back to you within 24 hours.</p>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <label className="text-sm font-semibold text-foreground">
                      First Name *
                    </label>
                    <Input placeholder="John" className="h-12 border-border/50 focus:border-primary" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-sm font-semibold text-foreground">
                      Last Name *
                    </label>
                    <Input placeholder="Doe" className="h-12 border-border/50 focus:border-primary" />
                  </div>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <label className="text-sm font-semibold text-foreground">
                      Business Email *
                    </label>
                    <Input type="email" placeholder="john@company.com" className="h-12 border-border/50 focus:border-primary" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-sm font-semibold text-foreground">
                      Phone Number
                    </label>
                    <Input placeholder="+1 (555) 123-4567" className="h-12 border-border/50 focus:border-primary" />
                  </div>
                </div>
                
                <div className="space-y-3">
                  <label className="text-sm font-semibold text-foreground">
                    Company Name *
                  </label>
                  <Input placeholder="Your Company Name" className="h-12 border-border/50 focus:border-primary" />
                </div>
                
                <div className="space-y-3">
                  <label className="text-sm font-semibold text-foreground">
                    Project Details *
                  </label>
                  <Textarea 
                    placeholder="Tell us about your business challenges, automation goals, and how we can help..."
                    className="min-h-[140px] border-border/50 focus:border-primary resize-none"
                  />
                </div>
                
                <Button className="w-full h-12 bg-primary hover:bg-primary/90 shadow-lg group" size="lg">
                  Send Message
                  <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
                
                <p className="text-xs text-muted-foreground text-center">
                  By submitting this form, you agree to our privacy policy and terms of service.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="grid gap-6">
              <Card className="border-border/50 hover:border-primary/30 transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="p-4 rounded-xl bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      <Mail className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-2">Email Us</h3>
                      <p className="text-muted-foreground mb-1">info@elpi.io</p>
                      <p className="text-muted-foreground">sales@elpi.io</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/50 hover:border-primary/30 transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="p-4 rounded-xl bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      <Phone className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-2">Call Us</h3>
                      <p className="text-muted-foreground mb-1">+1 (555) 123-4567</p>
                      <p className="text-muted-foreground">+1 (555) 765-4321</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/50 hover:border-primary/30 transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="p-4 rounded-xl bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      <Clock className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-2">Business Hours</h3>
                      <p className="text-muted-foreground mb-1">Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                      <p className="text-muted-foreground">24/7 Emergency Support Available</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Free Consultation CTA */}
            <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
              <CardContent className="p-8 text-center">
                <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-4 text-foreground">Free Strategy Session</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Book a complimentary 45-minute consultation to discuss your automation needs and discover growth opportunities.
                </p>
                <Button variant="outline" className="w-full border-primary/30 hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                  Schedule Consultation
                </Button>
                <p className="text-xs text-muted-foreground mt-4">
                  No commitment required • Expert guidance included
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
