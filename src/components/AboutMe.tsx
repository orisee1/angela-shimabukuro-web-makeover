import { Award, GraduationCap, Heart, Star } from "lucide-react";
import angelaPhoto from "@/assets/angela-photo.png";

const credentials = [
  {
    icon: GraduationCap,
    title: "Formação OMNI",
    description: "Certificada pelo OMNI Hypnosis Training Center",
  },
  {
    icon: Award,
    title: "Hipnoterapeuta Clínica",
    description: "Especialista em hipnoterapia clínica avançada",
  },
  {
    icon: Heart,
    title: "Atendimento Humanizado",
    description: "Foco no acolhimento e bem-estar do paciente",
  },
  {
    icon: Star,
    title: "Experiência Comprovada",
    description: "Anos de prática transformando vidas",
  },
];

export const AboutMe = () => {
  return (
    <section id="quem-sou" className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Foto */}
          <div className="relative order-2 lg:order-1">
            <div className="relative max-w-md mx-auto lg:max-w-none">
              {/* Decoração de fundo */}
              <div className="absolute -top-6 -left-6 w-full h-full bg-primary/10 rounded-3xl" />
              <div className="absolute -bottom-6 -right-6 w-full h-full bg-lavender/20 rounded-3xl" />
              
              {/* Imagem */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={angelaPhoto}
                  alt="Angela Shimabukuro - Hipnoterapeuta"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

          {/* Conteúdo */}
          <div className="order-1 lg:order-2">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Olá, eu sou a <span className="text-primary">Angela</span>
            </h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
              <p>
                Sou hipnoterapeuta clínica certificada pelo{" "}
                <strong className="text-foreground">
                  OMNI Hypnosis Training Center
                </strong>
                , uma das mais renomadas escolas de hipnose do mundo.
              </p>
              <p>
                Minha jornada na hipnoterapia começou a partir do desejo de
                ajudar pessoas a superarem seus desafios emocionais e
                comportamentais. Descobri na hipnose uma ferramenta poderosa e
                transformadora.
              </p>
              <p>
                Hoje, dedico-me a guiar meus pacientes em uma jornada de
                autoconhecimento e transformação, utilizando técnicas avançadas
                de hipnoterapia para promover mudanças profundas e duradouras.
              </p>
            </div>

            {/* Credenciais */}
            <div className="grid sm:grid-cols-2 gap-4">
              {credentials.map((credential, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-background rounded-xl border border-border"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <credential.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm">
                      {credential.title}
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      {credential.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
