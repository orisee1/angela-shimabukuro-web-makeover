import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contato");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openWhatsApp = () => {
    window.open(
      "https://wa.me/5567974008420?text=Olá! Gostaria de agendar uma consulta de hipnoterapia.",
      "_blank"
    );
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Overlay gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-lavender-light/20 via-transparent to-cream/20" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-lavender/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full text-secondary-foreground text-sm font-medium mb-8 animate-fade-in">
            <Sparkles size={16} />
            <span>Hipnoterapia Clínica em Campo Grande-MS</span>
          </div>

          {/* Título */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6 animate-fade-in">
            Transforme sua vida através do{" "}
            <span className="text-primary">poder da sua mente</span>
          </h1>

          {/* Subtítulo */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in">
            Descubra como a hipnoterapia pode ajudar você a superar ansiedade,
            medos, vícios e alcançar o equilíbrio emocional que você merece.
            Atendimento humanizado e acolhedor.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in">
            <Button
              size="lg"
              onClick={openWhatsApp}
              className="text-base px-8 py-6 shadow-lg hover:shadow-xl transition-all"
            >
              Agendar Consulta pelo WhatsApp
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={scrollToContact}
              className="text-base px-8 py-6"
            >
              Saiba Mais
            </Button>
          </div>

          {/* Info adicional */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground animate-fade-in">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full" />
              <span>Atendimento Presencial</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full" />
              <span>Atendimento Online</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full" />
              <span>Certificação OMNI</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-muted-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};
