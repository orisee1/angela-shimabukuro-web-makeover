import {
  Brain,
  Ghost,
  Utensils,
  Cigarette,
  Heart,
  Moon,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import treatmentAnxiety from "@/assets/treatment-anxiety.jpg";
import treatmentPhobia from "@/assets/treatment-phobia.jpg";
import treatmentEating from "@/assets/treatment-eating.jpg";
import treatmentSmoking from "@/assets/treatment-smoking.jpg";
import treatmentConfidence from "@/assets/treatment-confidence.jpg";
import treatmentSleep from "@/assets/treatment-sleep.jpg";

const treatments = [
  {
    icon: Brain,
    title: "Ansiedade e Depressão",
    description:
      "Supere os sintomas e encontre equilíbrio emocional para viver com mais leveza e tranquilidade.",
    bgImage: treatmentAnxiety,
  },
  {
    icon: Ghost,
    title: "Fobias e Medos",
    description:
      "Liberte-se de medos irracionais que limitam sua vida e impedem você de alcançar seus objetivos.",
    bgImage: treatmentPhobia,
  },
  {
    icon: Utensils,
    title: "Compulsão Alimentar",
    description:
      "Desenvolva uma relação saudável com a comida e conquiste o peso ideal de forma natural.",
    bgImage: treatmentEating,
  },
  {
    icon: Cigarette,
    title: "Tabagismo",
    description:
      "Pare de fumar de forma definitiva, eliminando o vício pela raiz no seu subconsciente.",
    bgImage: treatmentSmoking,
  },
  {
    icon: Heart,
    title: "Autoestima e Relacionamentos",
    description:
      "Fortaleça sua autoconfiança e melhore seus relacionamentos pessoais e profissionais.",
    bgImage: treatmentConfidence,
  },
  {
    icon: Moon,
    title: "Insônia e Estresse",
    description:
      "Recupere noites de sono tranquilo e aprenda a gerenciar o estresse do dia a dia.",
    bgImage: treatmentSleep,
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
    <section id="tratamentos" className="py-20 md:py-28 bg-cream-light">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Tratamentos <span className="text-lavender">Oferecidos</span>
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
              className="group cursor-pointer relative overflow-hidden border-0 hover:shadow-2xl transition-all duration-300 h-64"
              onClick={() => openWhatsApp(treatment.title)}
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${treatment.bgImage})` }}
              />
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors duration-300" />

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-3 bg-white/20 backdrop-blur-sm">
                    <treatment.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="font-serif text-xl text-white group-hover:text-lavender-light transition-colors">
                    {treatment.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between">
                  <p className="text-white/80 leading-relaxed text-sm">
                    {treatment.description}
                  </p>
                  <p className="mt-3 text-sm font-medium text-lavender-light opacity-0 group-hover:opacity-100 transition-opacity">
                    Clique para saber mais →
                  </p>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
