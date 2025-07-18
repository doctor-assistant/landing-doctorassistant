import { Facebook, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-background border-t py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">D</span>
              </div>
              <span className="text-xl font-bold text-foreground">DoctorAssistant.ai</span>
            </div>
            
            <div className="flex space-x-2">
              <div className="w-6 h-4 bg-blue-500 rounded-sm"></div>
              <div className="w-6 h-4 bg-green-500 rounded-sm"></div>
              <div className="w-6 h-4 bg-yellow-500 rounded-sm"></div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Institucional</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Quem somos</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Planos</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Contato</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Termos e políticas</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Termos de uso</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Política de privacidade</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Redes Sociais</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
            
            <div className="flex items-center gap-2 mt-4">
              <span className="text-sm text-muted-foreground">LGPD</span>
              <img 
                src="/lovable-uploads/c710c634-c446-494f-bc03-9170296dec15.png" 
                alt="LGPD - Lei Geral de Proteção de Dados Pessoais" 
                className="h-6 w-auto"
              />
            </div>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-6 text-center">
          <p className="text-sm text-muted-foreground">
            Copyright © DoctorAssistant - Todos os direitos reservados. Doctor Assistant AI Labs LTDA - 54.963.636/0001-09
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;