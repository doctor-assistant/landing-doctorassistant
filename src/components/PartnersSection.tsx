import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useEffect, useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import simDoctorImage from "@/assets/sim-doctor.jpg";
import imediciniaImage from "@/assets/imedicina.jpg";
import erClinicImage from "@/assets/er-clinic.jpg";
import medicinaDiretaImage from "@/assets/medicina-direta.jpg";
import onlineClinicImage from "@/assets/online-clinic.jpg";
import versatilisImage from "@/assets/versatilis.jpg";
import goclinImage from "@/assets/goclin.jpg";
import gestaoDsImage from "@/assets/gestao-ds.jpg";
import eyecareImage from "@/assets/eyecare.jpg";
import amplumImage from "@/assets/amplum.jpg";
import amplimedImage from "@/assets/amplimed.jpg";
import serxImage from "@/assets/serx.jpg";
import medicImage from "@/assets/4medic.jpg";

const PartnersSection = () => {
  const plugin = useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  const partners = [
    { name: "Sim Doctor", image: simDoctorImage },
    { name: "iMedicina", image: imediciniaImage },
    { name: "ER Clinic", image: erClinicImage },
    { name: "Medicina Direta", image: medicinaDiretaImage },
    { name: "Online Clinic", image: onlineClinicImage },
    { name: "Versatilis", image: versatilisImage },
    { name: "Goclin", image: goclinImage },
    { name: "Gestão DS", image: gestaoDsImage },
    { name: "Eyecare", image: eyecareImage },
    { name: "Amplum", image: amplumImage },
    { name: "Amplimed", image: amplimedImage },
    { name: "SerX", image: serxImage },
    { name: "4Medic", image: medicImage },
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
                 <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/1 sm:basis-1/2 md:basis-1/3 lg:basis-1/3">
                   <div className="flex items-center justify-center p-6">
                     <div className="bg-white rounded-xl shadow-sm border p-4 hover:shadow-md transition-shadow duration-200 w-full h-40 flex items-center justify-center">
                       <img 
                         src={partner.image} 
                         alt={partner.name}
                         className="w-full h-full object-contain"
                       />
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