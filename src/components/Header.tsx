import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="w-full bg-background border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="/lovable-uploads/6a0ca3a6-fab5-412c-8c42-a4f61376e4f8.png" alt="DoctorAssistant.ai" className="h-8" />
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