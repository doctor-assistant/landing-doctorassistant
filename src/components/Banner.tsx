import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";

const Banner = () => {
  return (
    <div className="w-full bg-banner-gradient text-banner-foreground py-3">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <p className="text-sm md:text-base">
          'Quer saber o que os médicos mais eficientes fazem diferente?' A resposta está nesse relatório - e só quem baixa descobre.
        </p>
          <Button 
            variant="banner" 
            size="sm" 
            className="ml-4 whitespace-nowrap"
          >
            <BookOpen className="w-4 h-4" />
            Clique aqui
          </Button>
      </div>
    </div>
  );
};

export default Banner;