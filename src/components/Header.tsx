import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="w-full bg-background border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">D</span>
          </div>
          <span className="text-xl font-bold text-foreground">DoctorAssistant.ai</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#planos" className="text-foreground hover:text-primary transition-colors">
            Planos
          </a>
          <a href="#contato" className="text-foreground hover:text-primary transition-colors">
            Contato
          </a>
          <Button variant="outline" size="sm">
            Login
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;