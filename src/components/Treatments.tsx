import {
  Brain,
  Ghost,
  Utensils,
  Cigarette,
  Heart,
  Moon,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import treatmentsBg from "@/assets/treatments-bg.jpg";

const treatments = [
  {
    icon: Brain,
    title: "Ansiedade e Depressão",
    description:
      "Supere os sintomas e encontre equilíbrio emocional para viver com mais leveza e tranquilidade.",
    color: "bg-blue-500/20 text-blue-300",
  },
  {
    icon: Ghost,
    title: "Fobias e Medos",
    description:
      "Liberte-se de medos irracionais que limitam sua vida e impedem você de alcançar seus objetivos.",
    color: "bg-purple-500/20 text-purple-300",
  },
  {
    icon: Utensils,
    title: "Compulsão Alimentar",
    description:
      "Desenvolva uma relação saudável com a comida e conquiste o peso ideal de forma natural.",
    color: "bg-orange-500/20 text-orange-300",
  },
  {
    icon: Cigarette,
    title: "Tabagismo",
    description:
      "Pare de fumar de forma definitiva, eliminando o vício pela raiz no seu subconsciente.",
    color: "bg-red-500/20 text-red-300",
  },
  {
    icon: Heart,
    title: "Autoestima e Relacionamentos",
    description:
      "Fortaleça sua autoconfiança e melhore seus relacionamentos pessoais e profissionais.",
    color: "bg-pink-500/20 text-pink-300",
  },
  {
    icon: Moon,
    title: "Insônia e Estresse",
    description:
      "Recupere noites de sono tranquilo e aprenda a gerenciar o estresse do dia a dia.",
    color: "bg-indigo-500/20 text-indigo-300",
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
    <section 
      id="tratamentos" 
      className="py-20 md:py-28 relative"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${treatmentsBg})` }}
      />
      <div className="absolute inset-0 bg-black/40" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Tratamentos <span className="text-lavender-light">Oferecidos</span>
          </h2>
          <p className="text-lg text-white/80 leading-relaxed">
            Cada pessoa é única, e o tratamento é personalizado para atender às
            suas necessidades específicas. Conheça as principais áreas em que a
            hipnoterapia pode ajudar você.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {treatments.map((treatment, index) => (
            <Card
              key={index}
              className="group cursor-pointer bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 hover:shadow-xl transition-all duration-300 overflow-hidden"
              onClick={() => openWhatsApp(treatment.title)}
            >
              <CardHeader className="pb-4">
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${treatment.color}`}
                >
                  <treatment.icon className="w-7 h-7" />
                </div>
                <CardTitle className="font-serif text-xl text-white group-hover:text-lavender-light transition-colors">
                  {treatment.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/70 leading-relaxed">
                  {treatment.description}
                </p>
                <p className="mt-4 text-sm font-medium text-lavender-light opacity-0 group-hover:opacity-100 transition-opacity">
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
