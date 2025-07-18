import { Button } from "@/components/ui/button";

const FAQSection = () => {
  const faqs = [
    "O que é um escriba ou scribe médico?",
    "A ferramenta é confiável?", 
    "Como eu posso utilizar a ferramenta na minha consulta médica?",
    "Como é gerado o registro clínico através da IA?",
    "Preciso aguardar o processamento do registro para iniciar um novo atendimento?"
  ];

  return (
    <section className="w-full py-16 bg-hero">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-8">
          <Button variant="outline" className="border-primary text-primary bg-background/80 mb-6">
            Tire suas dúvidas
          </Button>
          <h2 className="text-3xl font-bold text-hero-foreground">Perguntas Frequentes</h2>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="text-left">
              <button className="w-full text-left p-4 bg-background/20 backdrop-blur-sm rounded-lg hover:bg-background/30 transition-all">
                <span className="text-primary font-medium text-lg">{faq}</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;