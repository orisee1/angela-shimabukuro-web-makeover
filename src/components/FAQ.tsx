import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Vou ficar inconsciente durante a hipnose?",
    answer:
      "Não! Durante a hipnoterapia, você permanece totalmente consciente e no controle. A hipnose é um estado natural de relaxamento profundo e foco concentrado, similar ao que experimentamos quando estamos absortos em um filme ou livro. Você ouvirá tudo o que eu disser e poderá interromper a sessão a qualquer momento.",
  },
  {
    question: "A hipnose é um poder sobrenatural?",
    answer:
      "Não existe nada de sobrenatural na hipnose. É uma técnica terapêutica cientificamente comprovada e reconhecida por órgãos de saúde em todo o mundo. A hipnose é simplesmente uma forma de acessar o subconsciente de maneira mais direta para promover mudanças positivas.",
  },
  {
    question: "Vou revelar meus segredos durante a sessão?",
    answer:
      "Absolutamente não. Você mantém total controle sobre o que diz ou não durante a hipnoterapia. O estado hipnótico não é um 'soro da verdade'. Você pode escolher compartilhar apenas o que se sentir confortável em revelar, assim como em qualquer conversa normal.",
  },
  {
    question: "E a minha religião? A hipnose é contra princípios religiosos?",
    answer:
      "A hipnoterapia é uma técnica terapêutica neutra, sem qualquer conotação religiosa ou espiritual. É utilizada exclusivamente para fins de saúde e bem-estar. Muitos líderes religiosos de diversas denominações já se beneficiaram e recomendam a hipnoterapia clínica.",
  },
  {
    question: "Farei algo contra a minha vontade?",
    answer:
      "Jamais! É impossível fazer alguém agir contra seus valores, princípios ou vontade durante a hipnose. Seu subconsciente age como um guardião e rejeitará automaticamente qualquer sugestão que vá contra sua ética ou desejos. Você está sempre no comando.",
  },
  {
    question: "Vou esquecer tudo o que aconteceu na sessão?",
    answer:
      "Na maioria dos casos, você se lembrará de tudo ou quase tudo o que aconteceu durante a sessão. Algumas pessoas podem ter uma lembrança mais difusa, como quando acordamos de um sonho, mas isso é normal e não afeta a eficácia do tratamento.",
  },
  {
    question: "Quantas sessões são necessárias?",
    answer:
      "O número de sessões varia de acordo com cada pessoa e o tipo de questão a ser tratada. Muitos pacientes relatam melhoras significativas já nas primeiras sessões. Em média, tratamentos completos variam de 3 a 6 sessões, mas cada caso é avaliado individualmente.",
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Dúvidas <span className="text-primary">Frequentes</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Tire suas principais dúvidas sobre a hipnoterapia e como funciona
              o processo terapêutico.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary py-5 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
