import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    "Registrar todo o áudio da consulta com seu paciente",
    "Automatizar a leitura de arquivos de exames para complementar a anamnese", 
    "Receber sugestões automáticas de CID",
    "Copiar as informações com um clique para o prontuário eletrônico de sua preferência",
    "Flexível: funciona em qualquer dispositivo: Desktop + Mobile"
  ];

  return (
    <section className="w-full py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <Button variant="outline" className="border-primary text-primary mb-6">
            Entenda como funciona
          </Button>
          <h2 className="text-3xl font-bold text-foreground max-w-2xl">
            Consultas organizadas automaticamente em instantes
          </h2>
          <p className="text-primary font-medium mt-2">Sistema Online</p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="bg-secondary/30 rounded-2xl p-8">
              <div className="text-center space-y-4">
                <div className="inline-block bg-primary/20 px-4 py-2 rounded-lg">
                  <span className="text-primary font-medium">Todos os dados em um só lugar</span>
                </div>
                
                <div className="bg-background rounded-xl p-6 shadow-lg">
                  <div className="w-full h-40 bg-hero rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-hero-foreground/60">Sistema online</span>
                  </div>
                  <div className="flex justify-center space-x-2">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                    <div className="w-3 h-3 bg-secondary rounded-full"></div>
                    <div className="w-3 h-3 bg-accent rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">
                Conheça o <span className="text-primary">DoctorAssistant.ai</span>
              </h3>
              <p className="text-foreground/80">
                O sistema do DoctorAssistant pode ser acessado online em qualquer computador. Todos os dados são organizados e você pode acessá-los com um login e senha sempre que precisar.
              </p>
            </div>
            
            <div className="space-y-3">
              <p className="font-medium text-foreground">Com o sistema online, você pode:</p>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <p className="text-foreground/80 italic">
              Entre muitos outros recursos de otimização.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;