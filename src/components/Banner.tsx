import { Button } from "@/components/ui/button";

const Banner = () => {
  return (
    <div className="w-full bg-banner-gradient text-banner-foreground py-3">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <p className="text-sm md:text-base">
          'Quer saber o que os médicos mais eficientes fazem diferente?' A resposta está nesse relatório - e só quem baixa descobre.
        </p>
        <Button 
          variant="outline" 
          size="sm" 
          className="border-banner-foreground text-banner-foreground hover:bg-banner-foreground hover:text-banner ml-4 whitespace-nowrap"
        >
          Clique aqui
        </Button>
      </div>
    </div>
  );
};

export default Banner;