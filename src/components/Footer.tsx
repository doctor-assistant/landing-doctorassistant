import { Facebook, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
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
    <footer className="w-full bg-muted text-foreground py-12 shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img src="/lovable-uploads/6a0ca3a6-fab5-412c-8c42-a4f61376e4f8.png" alt="DoctorAssistant.ai" className="h-10" />
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold text-primary">Institucional</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('sobre')}
                  className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                >
                  Quem somos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('planos')}
                  className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                >
                  Planos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contato')}
                  className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                >
                  Contato
                </button>
              </li>
              <li>
                <a 
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Matheus
                </a>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold text-primary">Termos e políticas</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://storage.googleapis.com/daaipublicdocs/240813.1700_Termos%20de%20Uso_DAAI_revDAAI_vDTF.docx.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Termos de uso
                </a>
              </li>
              <li>
                <a 
                  href="https://storage.googleapis.com/daaipublicdocs/240804.1100_Poli%CC%81tica%20de%20Privacidade_DAAI_revDTF.docx.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Política de privacidade
                </a>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold text-primary">Redes Sociais</h4>
            <div className="flex space-x-4">
              <a 
                href="https://br.linkedin.com/company/doctorassistant-ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://www.instagram.com/doctorassistant.ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://www.facebook.com/profile.php?id=61558063991838"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
            
            <div className="flex items-center gap-2 mt-6">
              <img 
                src="/lovable-uploads/c710c634-c446-494f-bc03-9170296dec15.png" 
                alt="LGPD - Lei Geral de Proteção de Dados Pessoais" 
                className="h-12 w-auto"
              />
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-6 text-center">
          <p className="text-xs text-muted-foreground">
            Copyright © DoctorAssistant - Todos os direitos reservados. Doctor Assistant AI Labs LTDA - 54.963.636/0001-09
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;