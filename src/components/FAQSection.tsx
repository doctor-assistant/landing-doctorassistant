import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "O que é um escriba ou scribe médico?",
      answer: "Um escriba ou um scribe médico é uma ferramenta projetada para automatizar e otimizar o processo de documentação médica, visando reduzir a carga administrativa sobre os profissionais de saúde, melhorar a precisão da documentação e aumentar a eficiência geral na prática médica. Com a utilização de IA para construir essa ferramenta, é possível transcrever e registrar automaticamente os detalhes discutidos durante as consultas entre profissionais de saúde e pacientes.\n\nA nossa IA utiliza técnicas de NLP para interpretar e entender a linguagem médica falada, convertendo-a em texto estruturado, melhorando a precisão da documentação, reduzindo erros humanos e garantindo que todas as informações essenciais sejam registradas. Além disso, mantém um padrão consistente na documentação médica, o que é essencial para a continuidade do cuidado e para a conformidade regulatória.\n\nComo essa tecnologia automatiza tarefas repetitivas e demoradas, ela diminui a carga de trabalho administrativa, permitindo que o profissional se concentre mais na interação direta com o paciente, melhorando a qualidade do atendimento."
    },
    {
      question: "A ferramenta é confiável?",
      answer: "No DoctorAssistant.ai temos 2 regras de negócio que são requisitos para tudo o que fazemos: a primeira é a segurança dos dados e a segunda é a acurácia deles.\n\nA segurança dos dados é garantida com uma arquitetura de software de altíssima qualidade (utilizamos o mesmo sistema de segurança que o Banco Central do Brasil), que consegue capturar informações e processar sem erros e com eficiência. Além disso, todos os dados sensíveis são anonimizados para qualquer usuário que não seja profissional de saúde e não salvamos os áudios processados após os atendimentos.\n\nA primeira etapa para ter acurácia é a captação do áudio. Por isso estamos lançando em breve o Aplicativo e a Extensão Web para garantir uma boa captação em qualquer contexto de trabalho do profissional de saúde, como, por exemplo, em visita domiciliar, em enfermaria e no teleatendimento.\n\nOutra camada da acurácia está na nossa IA, que é constantemente treinada com termos médicos em Português Brasileiro para reduzir as alucinações, além da nossa metodologia de estruturação da IA diminuir o risco de erros. No entanto, é importante lembrar que qualquer IA é suscetível a erros, então é sempre necessário que o profissional de saúde revise e corrija o registro antes de copiá-lo e colá-lo no prontuário."
    },
    {
      question: "Como eu posso utilizar a ferramenta na minha consulta médica?",
      answer: "O primeiro passo é adquir o seu acesso através da nossa aba \"Planos\" (doctorassistant.ai/planos). Após a contratação do seu plano, você deve se cadastrar na nossa Plataforma Web (daai.doctorassistant.ai).\n\nCaso seu atendimento ocorra presencialmente e você e seu paciente passem grande parte do tempo na mesma posição (por exemplo, um sentado na frente do outro) e caso seu computador ou notebook tenha microfone embutido, você pode utilizar a própria Plataforma Web para transcrever sua consulta. Basta realizar o login antes do atendimento, clicar em \"Iniciar uma consulta presencial\" na tela inicial da nossa plataforma, digitar o nome do paciente e iniciar o registro. Lembre-se de verbalizar todas as informações importantes durante a consulta, para que nossa IA possa gerar um resumo clínico completo. Ao terminar o atendimento, finalize o registro e nossa IA transcreverá todas as informações relevantes e gerará um resumo clínico de acordo com a metodologia ReSOAP."
    },
    {
      question: "Como é gerado o registro clínico através da IA?",
      answer: "O registro clínico é criado pela IA em duas etapas. A primeira é chamada de \"Speech to Text\" e consiste em a IA captar o áudio da consulta e transcrevê-la palavra por palavra. Por isso, é importante que você verbalize todas as informações relevantes para o resumo clínico, como a descrição do exame físico, o detalhamento da prescrição, etc. Caso você verbalize o diagnóstico ou a suspeita de diagnóstico, nossa IA retornará a sugestão de CID correspondente.\n\nNa segunda etapa, a IA usa a transcrição como base para a criação de um resumo clínico. A metodologia do registro é baseada no ReSOAP, que é a metodologia mais recomendada no Brasil e fora dele. Além disso, criamos registros com particularidades de cada especialidade médica para termos maior qualidade em cada tipo de atendimento."
    },
    {
      question: "Preciso aguardar o processamento do registro para iniciar um novo atendimento?",
      answer: "Não. Após finalizar o registro de um atendimento, o processo de carregamento continua independentemente do início de um novo atendimento. Você pode iniciar uma nova consulta que o processamento dos dados continuará ocorrendo no sistema."
    }
  ];

  return (
    <section className="w-full py-16 bg-hero-gradient">
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
                <AccordionContent className="p-4 text-hero-foreground/80 text-left whitespace-pre-line">
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