import { Facebook, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img src="/lovable-uploads/6a0ca3a6-fab5-412c-8c42-a4f61376e4f8.png" alt="DoctorAssistant.ai" className="h-10" />
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold text-primary-foreground">Institucional</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Quem somos</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Planos</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Contato</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold text-primary-foreground">Termos e políticas</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Termos de uso</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Política de privacidade</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold text-primary-foreground">Redes Sociais</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
            
            <div className="flex items-center gap-2 mt-4">
              <img 
                src="/lovable-uploads/c710c634-c446-494f-bc03-9170296dec15.png" 
                alt="LGPD - Lei Geral de Proteção de Dados Pessoais" 
                className="h-6 w-auto"
              />
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-center">
          <p className="text-sm text-primary-foreground/80">
            Copyright © DoctorAssistant - Todos os direitos reservados. Doctor Assistant AI Labs LTDA - 54.963.636/0001-09
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;