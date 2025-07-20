import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const AboutSection = () => {
  return (
    <section id="sobre" className="w-full py-16 bg-hero">
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
            <div className="bg-background/10 backdrop-blur-sm rounded-2xl p-6 max-w-lg w-full">
              <div className="aspect-video bg-background rounded-lg overflow-hidden">
                <iframe 
                  src="https://www.youtube.com/embed/wRhsD9frt0Q" 
                  title="Vídeo explicativo DoctorAssistant.ai"
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;