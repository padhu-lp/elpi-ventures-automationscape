import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  return <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b border-border/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between px-[10px] bg-amber-100">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-primary">Elpi Ventures</h1>
            </div>
          </div>
          
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="text-foreground hover:text-primary transition-colors">Home</a>
              <a href="#services" className="text-foreground hover:text-primary transition-colors">Services</a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
            </div>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline">Get Quote</Button>
          </div>

          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-foreground hover:text-primary focus:outline-none focus:text-primary">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-border/40">
              <a href="#home" className="block px-3 py-2 text-foreground hover:text-primary transition-colors">Home</a>
              <a href="#services" className="block px-3 py-2 text-foreground hover:text-primary transition-colors">Services</a>
              <a href="#about" className="block px-3 py-2 text-foreground hover:text-primary transition-colors">About</a>
              <a href="#contact" className="block px-3 py-2 text-foreground hover:text-primary transition-colors">Contact</a>
              <div className="px-3 py-2">
                <Button variant="outline" className="w-full">Get Quote</Button>
              </div>
            </div>
          </div>}
      </div>
    </header>;
};
export default Header;