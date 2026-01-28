import {
  Brain,
  Ghost,
  Utensils,
  Cigarette,
  Heart,
  Moon,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const treatments = [
  {
    icon: Brain,
    title: "Ansiedade e Depressão",
    description:
      "Supere os sintomas e encontre equilíbrio emocional para viver com mais leveza e tranquilidade.",
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    icon: Ghost,
    title: "Fobias e Medos",
    description:
      "Liberte-se de medos irracionais que limitam sua vida e impedem você de alcançar seus objetivos.",
    color: "bg-purple-500/10 text-purple-600",
  },
  {
    icon: Utensils,
    title: "Compulsão Alimentar",
    description:
      "Desenvolva uma relação saudável com a comida e conquiste o peso ideal de forma natural.",
    color: "bg-orange-500/10 text-orange-600",
  },
  {
    icon: Cigarette,
    title: "Tabagismo",
    description:
      "Pare de fumar de forma definitiva, eliminando o vício pela raiz no seu subconsciente.",
    color: "bg-red-500/10 text-red-600",
  },
  {
    icon: Heart,
    title: "Autoestima e Relacionamentos",
    description:
      "Fortaleça sua autoconfiança e melhore seus relacionamentos pessoais e profissionais.",
    color: "bg-pink-500/10 text-pink-600",
  },
  {
    icon: Moon,
    title: "Insônia e Estresse",
    description:
      "Recupere noites de sono tranquilo e aprenda a gerenciar o estresse do dia a dia.",
    color: "bg-indigo-500/10 text-indigo-600",
  },
];

export const Treatments = () => {
  const openWhatsApp = (treatment: string) => {
    window.open(
      `https://wa.me/5567974008420?text=Olá! Gostaria de saber mais sobre o tratamento para ${treatment}.`,
      "_blank"
    );
  };

  return (
    <section id="tratamentos" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Tratamentos <span className="text-primary">Oferecidos</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Cada pessoa é única, e o tratamento é personalizado para atender às
            suas necessidades específicas. Conheça as principais áreas em que a
            hipnoterapia pode ajudar você.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {treatments.map((treatment, index) => (
            <Card
              key={index}
              className="group cursor-pointer hover:shadow-xl transition-all duration-300 border-border hover:border-primary/30 overflow-hidden"
              onClick={() => openWhatsApp(treatment.title)}
            >
              <CardHeader className="pb-4">
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${treatment.color}`}
                >
                  <treatment.icon className="w-7 h-7" />
                </div>
                <CardTitle className="font-serif text-xl group-hover:text-primary transition-colors">
                  {treatment.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {treatment.description}
                </p>
                <p className="mt-4 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  Clique para saber mais →
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
