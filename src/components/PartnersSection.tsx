import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useEffect, useRef } from "react";
import Autoplay from "embla-carousel-autoplay";

const PartnersSection = () => {
  const plugin = useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  const partners = [
    { name: "Medicina Direta", logo: "📋" },
    { name: "goclin", logo: "🏥" },
    { name: "amplimed", logo: "💊" },
    { name: "GestãoDS", logo: "📊" },
    { name: "eyecare", logo: "👁️" },
    { name: "ER Clinic", logo: "🏥" },
    { name: "amplum", logo: "🔬" },
    { name: "Versatilis", logo: "⚕️" },
    { name: "Sim Doctor", logo: "👨‍⚕️" },
    { name: "SerX", logo: "💻" },
    { name: "4medic", logo: "🩺" },
  ];

  return (
    <section className="w-full py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Prontuários eletrônicos que já revolucionam a experiência médica
          </h3>
        </div>
        
        <div className="relative">
          <Carousel
            plugins={[plugin.current]}
            className="w-full max-w-6xl mx-auto"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {partners.map((partner, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/6">
                  <div className="flex items-center justify-center p-6">
                    <div className="bg-white rounded-xl shadow-sm border p-4 hover:shadow-md transition-shadow duration-200 w-full h-20 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-2xl mb-1">{partner.logo}</div>
                        <span className="text-xs font-medium text-muted-foreground">
                          {partner.name}
                        </span>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
        
        <div className="text-center mt-8">
          <span className="inline-block bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
            Em breve
          </span>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;