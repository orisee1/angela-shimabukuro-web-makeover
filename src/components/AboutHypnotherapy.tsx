import { Brain, Heart, Shield, Zap, Eye, Leaf } from "lucide-react";

const benefits = [
  {
    icon: Brain,
    title: "Mente Reprogramada",
    description: "Acesse e transforme padrões inconscientes que limitam sua vida.",
  },
  {
    icon: Heart,
    title: "Equilíbrio Emocional",
    description: "Recupere a paz interior e a harmonia nas suas emoções.",
  },
  {
    icon: Shield,
    title: "Seguro e Natural",
    description: "Técnica comprovada cientificamente, sem medicamentos.",
  },
  {
    icon: Zap,
    title: "Resultados Rápidos",
    description: "Muitos pacientes relatam mudanças já nas primeiras sessões.",
  },
  {
    icon: Eye,
    title: "Consciência Plena",
    description: "Você permanece consciente e no controle durante todo o processo.",
  },
  {
    icon: Leaf,
    title: "Bem-estar Duradouro",
    description: "Mudanças profundas que permanecem ao longo da vida.",
  },
];

export const AboutHypnotherapy = () => {
  return (
    <section id="sobre" className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            O que é <span className="text-primary">Hipnoterapia?</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A hipnoterapia é uma técnica terapêutica que utiliza o estado de
            relaxamento profundo para acessar o subconsciente e promover mudanças
            positivas. Diferente do que muitos pensam, você permanece{" "}
            <strong>consciente e no controle</strong> durante todo o processo.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group p-6 md:p-8 bg-background rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <benefit.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
