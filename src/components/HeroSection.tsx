import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const HeroSection = () => {
  return (
    <section className="w-full bg-hero-gradient min-h-[600px] relative overflow-hidden">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block">
              <Button variant="tag" size="sm" className="rounded-full px-4 py-2">
                Menos burocracia
              </Button>
            </div>
            
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold text-hero-foreground leading-tight">
                Ganhe tempo com um{" "}
                <span className="text-primary font-bold">Assistente Inteligente</span>
              </h1>
              <h2 className="text-2xl lg:text-3xl font-semibold text-hero-foreground">
                <span className="text-primary font-bold">Customizável</span> para registro de consultas
              </h2>
            </div>
            
            <p className="text-lg text-hero-foreground/80 max-w-xl">
              Tenha mais tempo para focar no que realmente importa em uma consulta: o cuidado com seus pacientes. O sistema do DoctorAssistant.ai automatiza a coleta de dados durante a consulta e entrega em um registro clínico customizado garantindo mais precisão e agilidade no seu dia a dia.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 max-w-md">
              <Input 
                type="email" 
                placeholder="Digite seu e-mail"
                className="flex-1"
              />
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 font-semibold">
                Teste gratuitamente agora
              </Button>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <div className="max-w-xl w-full">
              <video 
                className="w-full h-auto rounded-xl shadow-lg" 
                autoPlay 
                loop 
                muted 
                playsInline
              >
                <source src="/videos/video-home-daai-2.mp4" type="video/mp4" />
                <span className="text-hero-foreground/60">Sistema online</span>
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;