import { Button } from "@/components/ui/button";
import { User } from "lucide-react";

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <header className="w-full bg-background border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <img src="/lovable-uploads/6a0ca3a6-fab5-412c-8c42-a4f61376e4f8.png" alt="DoctorAssistant.ai" className="h-8" />
        </div>
        
        <nav className="flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('planos')}
            className="text-foreground hover:text-primary transition-colors font-medium cursor-pointer"
          >
            Planos
          </button>
          <button 
            onClick={() => scrollToSection('contato')}
            className="text-foreground hover:text-primary transition-colors font-medium cursor-pointer"
          >
            Contato
          </button>
          <Button variant="outline" size="sm" className="flex items-center gap-2">
            <User className="w-4 h-4" />
            Login
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;