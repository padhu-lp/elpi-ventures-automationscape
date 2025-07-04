
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b border-border/40 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center space-x-3">
              <img src="/lovable-uploads/e3411314-5f36-4f56-9648-3ce7decfb0fe.png" alt="Elpi Ventures Logo" className="h-12 w-12" />
              <div>
                <h1 className="text-3xl font-bold text-primary tracking-tight">Elpi Ventures</h1>
                <p className="text-xs text-muted-foreground font-medium tracking-wide">AI Business Solutions</p>
              </div>
            </div>
          </div>
          
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-10">
              <a href="#home" className="text-foreground hover:text-primary transition-all duration-300 font-medium relative group">
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#services" className="text-foreground hover:text-primary transition-all duration-300 font-medium relative group">
                Services
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#about" className="text-foreground hover:text-primary transition-all duration-300 font-medium relative group">
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#contact" className="text-foreground hover:text-primary transition-all duration-300 font-medium relative group">
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            </div>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="border-primary/20 hover:bg-primary hover:text-primary-foreground transition-all duration-300">
              Free Consultation
            </Button>
            <Button className="bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300">
              Get Started
            </Button>
          </div>

          <div className="md:hidden">
            <button 
              onClick={toggleMenu} 
              className="text-foreground hover:text-primary focus:outline-none focus:text-primary transition-colors"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur">
            <div className="px-2 pt-4 pb-6 space-y-3 sm:px-3">
              <a href="#home" className="block px-4 py-3 text-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-300">Home</a>
              <a href="#services" className="block px-4 py-3 text-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-300">Services</a>
              <a href="#about" className="block px-4 py-3 text-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-300">About</a>
              <a href="#contact" className="block px-4 py-3 text-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-300">Contact</a>
              <div className="px-4 py-3 space-y-3">
                <Button variant="outline" className="w-full border-primary/20">Free Consultation</Button>
                <Button className="w-full bg-primary hover:bg-primary/90">Get Started</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
