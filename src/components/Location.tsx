import { MapPin, Clock, Phone, Globe, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Location = () => {
  const openWhatsApp = () => {
    window.open(
      "https://wa.me/5567974008420?text=Olá! Gostaria de agendar uma consulta de hipnoterapia.",
      "_blank"
    );
  };

  const openMaps = () => {
    window.open(
      "https://www.google.com/maps/search/?api=1&query=R.+Santa+Tereza,+R.+Teotônio+Rosa+Píres,+47+-+Bloco+D,+Campo+Grande+-+MS",
      "_blank"
    );
  };

  return (
    <section id="contato" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Localização e <span className="text-primary">Contato</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Estou à disposição para ajudar você a iniciar sua jornada de
            transformação.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Mapa */}
          <div className="order-2 lg:order-1">
            <div className="rounded-2xl overflow-hidden shadow-lg border border-border h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3737.7686767395685!2d-54.6341587!3d-20.4644733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9486e8b1d6c43c7f%3A0x1c3b8c9c9c9c9c9c!2sR.%20Teot%C3%B4nio%20Rosa%20P%C3%ADres%2C%2047%20-%20Campo%20Grande%2C%20MS!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização do consultório"
              />
            </div>
          </div>

          {/* Informações de contato */}
          <div className="order-1 lg:order-2 space-y-6">
            {/* Card de endereço */}
            <div
              className="p-6 bg-card rounded-xl border border-border hover:shadow-md transition-shadow cursor-pointer"
              onClick={openMaps}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    Endereço
                  </h3>
                  <p className="text-muted-foreground">
                    R. Santa Tereza, R. Teotônio Rosa Píres, 47
                    <br />
                    Bloco D, Salas 03 e 04
                    <br />
                    Campo Grande - MS, 79004-330
                  </p>
                  <p className="text-sm text-primary mt-2">
                    Clique para abrir no Google Maps →
                  </p>
                </div>
              </div>
            </div>

            {/* Card de telefone */}
            <div className="p-6 bg-card rounded-xl border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    WhatsApp
                  </h3>
                  <p className="text-muted-foreground">(67) 97400-8420</p>
                </div>
              </div>
            </div>

            {/* Card de horário */}
            <div className="p-6 bg-card rounded-xl border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    Horário de Atendimento
                  </h3>
                  <p className="text-muted-foreground">
                    Segunda a Sexta: 8h às 18h
                    <br />
                    Sábado: 8h às 12h
                  </p>
                </div>
              </div>
            </div>

            {/* Card de atendimento online */}
            <div className="p-6 bg-card rounded-xl border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    Atendimento Online
                  </h3>
                  <p className="text-muted-foreground">
                    Também realizo atendimentos online para todo o Brasil.
                    Consulte disponibilidade.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <Button
              size="lg"
              className="w-full py-6 text-base shadow-lg"
              onClick={openWhatsApp}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Agendar Consulta pelo WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
