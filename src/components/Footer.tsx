import { Instagram, Facebook, Mail, Phone, Heart } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo e descrição */}
          <div>
            <h3 className="font-serif text-2xl font-bold mb-4">
              Angela Shimabukuro
            </h3>
            <p className="text-background/70 mb-4">
              Hipnoterapeuta Clínica certificada pelo OMNI Hypnosis Training
              Center. Transformando vidas através do poder da mente.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-background/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-background/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links rápidos */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-background/70">
              <li>
                <a href="#sobre" className="hover:text-background transition-colors">
                  O que é Hipnoterapia
                </a>
              </li>
              <li>
                <a href="#tratamentos" className="hover:text-background transition-colors">
                  Tratamentos
                </a>
              </li>
              <li>
                <a href="#quem-sou" className="hover:text-background transition-colors">
                  Quem Sou Eu
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-background transition-colors">
                  Dúvidas Frequentes
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-background transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contato</h4>
            <ul className="space-y-3 text-background/70">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4" />
                <span>(67) 97400-8420</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4" />
                <span>contato@angelahipnoterapia.com.br</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Linha divisória */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-background/60 text-sm text-center md:text-left">
              © {currentYear} Angela Shimabukuro - Hipnoterapeuta. Todos os
              direitos reservados.
            </p>
            <p className="text-background/60 text-sm flex items-center gap-1">
              Feito com <Heart className="w-4 h-4 text-red-400 fill-red-400" /> em Campo Grande-MS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
