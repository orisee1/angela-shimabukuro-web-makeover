import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Maria S.",
    treatment: "Ansiedade",
    text: "Depois de anos lutando contra a ansiedade, finalmente encontrei paz. A Angela me ajudou a entender as raízes do meu problema e trabalhar isso de forma profunda. Hoje me sinto uma pessoa completamente diferente.",
    initials: "MS",
  },
  {
    name: "João P.",
    treatment: "Tabagismo",
    text: "Fumei por 20 anos e já tinha tentado de tudo. Com apenas 3 sessões de hipnoterapia, consegui parar de fumar. Já faz 8 meses e não sinto vontade nenhuma de voltar. Incrível!",
    initials: "JP",
  },
  {
    name: "Ana L.",
    treatment: "Fobia",
    text: "Tinha pavor de dirigir depois de um acidente. A Angela me ajudou a superar esse medo que me limitava tanto. Hoje dirijo tranquilamente e voltei a ter minha independência.",
    initials: "AL",
  },
  {
    name: "Carlos R.",
    treatment: "Insônia",
    text: "Sofria de insônia há anos e estava exausto. Após o tratamento com a Angela, finalmente consigo dormir bem. Minha qualidade de vida melhorou 100%.",
    initials: "CR",
  },
  {
    name: "Fernanda M.",
    treatment: "Compulsão Alimentar",
    text: "A hipnoterapia mudou minha relação com a comida. Consegui entender o porquê da compulsão e trabalhar isso. Perdi 15kg de forma natural e saudável.",
    initials: "FM",
  },
];

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  return (
    <section id="depoimentos" className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            O que dizem meus <span className="text-primary">pacientes</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Histórias reais de transformação através da hipnoterapia.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Carrossel */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl bg-background border border-border p-8 md:p-12">
              <Quote className="w-12 h-12 text-primary/20 mb-6" />

              <div className="min-h-[200px]">
                <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8 italic">
                  "{testimonials[currentIndex].text}"
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="font-serif font-bold text-primary text-lg">
                      {testimonials[currentIndex].initials}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">
                      {testimonials[currentIndex].name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Tratamento: {testimonials[currentIndex].treatment}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navegação */}
            <div className="flex items-center justify-between mt-6">
              <Button
                variant="outline"
                size="icon"
                onClick={goToPrevious}
                className="rounded-full"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>

              {/* Indicadores */}
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentIndex
                        ? "bg-primary w-6"
                        : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                    aria-label={`Ir para depoimento ${index + 1}`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={goToNext}
                className="rounded-full"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
