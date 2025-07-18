import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const ContactSection = () => {
  return (
    <section id="contato" className="w-full py-16 bg-background">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="text-center mb-8">
          <Button variant="outline" className="border-primary text-primary mb-6">
            Fale conosco
          </Button>
          <h2 className="text-3xl font-bold text-foreground">Entre em contato</h2>
        </div>
        
        <form className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="nome" className="text-foreground font-medium">Nome</Label>
            <Input 
              id="nome"
              type="text" 
              placeholder="Nome"
              className="w-full"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email" className="text-foreground font-medium">E-mail</Label>
            <Input 
              id="email"
              type="email" 
              placeholder="E-mail"
              className="w-full"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="mensagem" className="text-foreground font-medium">Mensagem</Label>
            <Textarea 
              id="mensagem"
              placeholder="Mensagem"
              className="w-full min-h-[120px]"
            />
          </div>
          
          <div className="text-center">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3">
              Enviar mensagem
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;