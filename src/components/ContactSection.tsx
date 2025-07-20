import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";

const contactSchema = z.object({
  nome: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  email: z.string().email("Digite um e-mail válido"),
  mensagem: z.string().min(10, "Mensagem deve ter pelo menos 10 caracteres"),
});

type ContactForm = z.infer<typeof contactSchema>;

const ContactSection = () => {
  const { toast } = useToast();
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactForm) => {
    try {
      // Aqui você pode implementar o envio do formulário
      console.log("Dados do formulário:", data);
      
      // Simular delay de envio
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Mensagem enviada!",
        description: "Entraremos em contato em breve.",
      });
      
      reset();
    } catch (error) {
      toast({
        title: "Erro ao enviar",
        description: "Tente novamente mais tarde.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="contato" className="w-full py-16 bg-background">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="text-center mb-8">
          <Button variant="outline" className="border-primary text-primary mb-6">
            Fale conosco
          </Button>
          <h2 className="text-3xl font-bold text-foreground">Entre em contato</h2>
        </div>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="nome" className="text-foreground font-medium">Nome</Label>
            <Input 
              id="nome"
              type="text" 
              placeholder="Nome"
              className="w-full"
              {...register("nome")}
            />
            {errors.nome && (
              <p className="text-destructive text-sm">{errors.nome.message}</p>
            )}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email" className="text-foreground font-medium">E-mail</Label>
            <Input 
              id="email"
              type="email" 
              placeholder="E-mail"
              className="w-full"
              {...register("email")}
            />
            {errors.email && (
              <p className="text-destructive text-sm">{errors.email.message}</p>
            )}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="mensagem" className="text-foreground font-medium">Mensagem</Label>
            <Textarea 
              id="mensagem"
              placeholder="Mensagem"
              className="w-full min-h-[120px]"
              {...register("mensagem")}
            />
            {errors.mensagem && (
              <p className="text-destructive text-sm">{errors.mensagem.message}</p>
            )}
          </div>
          
          <div className="text-center">
            <Button 
              type="submit"
              disabled={isSubmitting}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3"
            >
              {isSubmitting ? "Enviando..." : "Enviar mensagem"}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;