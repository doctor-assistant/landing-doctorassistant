import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "O que é um escriba ou scribe médico?",
      answer: "Um escriba médico é um profissional que auxilia médicos na documentação clínica, registrando informações durante consultas e procedimentos. Com nossa IA, essa função é automatizada, permitindo que o médico foque completamente no atendimento ao paciente."
    },
    {
      question: "A ferramenta é confiável?",
      answer: "Sim, nossa ferramenta utiliza tecnologia de ponta em inteligência artificial com altos padrões de segurança e precisão. Todas as informações são processadas de forma segura e em conformidade com as regulamentações médicas."
    },
    {
      question: "Como eu posso utilizar a ferramenta na minha consulta médica?",
      answer: "É muito simples! Basta iniciar o registro no início da consulta e nossa IA irá capturar e processar todas as informações relevantes automaticamente. Você pode focar inteiramente no paciente enquanto a documentação é feita em segundo plano."
    },
    {
      question: "Como é gerado o registro clínico através da IA?",
      answer: "Nossa IA analisa as informações da consulta e gera automaticamente um registro clínico estruturado, incluindo histórico, exame físico, diagnósticos e plano de tratamento, tudo formatado de acordo com os padrões médicos."
    },
    {
      question: "Preciso aguardar o processamento do registro para iniciar um novo atendimento?",
      answer: "Não! O processamento é feito em segundo plano de forma assíncrona. Você pode iniciar imediatamente o próximo atendimento enquanto o registro anterior está sendo finalizado automaticamente."
    }
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
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-hero-foreground/20">
                <AccordionTrigger className="text-left p-4 bg-background/20 backdrop-blur-sm rounded-lg hover:bg-background/30 transition-all text-primary font-medium text-lg hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="p-4 text-hero-foreground/80 text-left">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;