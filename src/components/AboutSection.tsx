import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const AboutSection = () => {
  return (
    <section className="w-full py-16 bg-hero">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div>
              <Button variant="outline" className="border-primary text-primary bg-background/80 mb-6">
                O que é o DoctorAssistant.ai
              </Button>
              <h2 className="text-3xl font-bold text-hero-foreground mb-4">
                Um <span className="text-primary">sistema completo de IA</span> com foco no registro de consultas de saúde
              </h2>
              <p className="text-hero-foreground/80">
                Somos uma plataforma em que o profissional de saúde pode registrar suas consultas com recursos de Inteligência Artificial e automatizar todo o registro manual.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 max-w-md">
              <Input 
                type="email" 
                placeholder="Digite seu e-mail"
                className="flex-1 bg-background/90"
              />
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6">
                Teste gratuitamente agora
              </Button>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="bg-background/10 backdrop-blur-sm rounded-2xl p-6 max-w-md w-full">
              <div className="aspect-video bg-background rounded-lg flex items-center justify-center">
                <div className="text-center space-y-2">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
                    <span className="text-primary-foreground text-2xl">▶</span>
                  </div>
                  <p className="text-foreground/60 text-sm">Vídeo explicativo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;