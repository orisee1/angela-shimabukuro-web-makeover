
# Plano de Implementacao

## 1. Icone do WhatsApp Personalizado

Vou copiar o icone do WhatsApp que voce enviou (`icone_whatsapp.png`) para a pasta de assets e substituir o icone atual do Lucide pelo seu icone personalizado no componente `WhatsAppButton.tsx`.

**Alteracoes:**
- Copiar `user-uploads://icone_whatsapp.png` para `src/assets/whatsapp-icon.png`
- Atualizar `WhatsAppButton.tsx` para usar uma tag `<img>` com o icone personalizado
- Manter o mesmo tamanho (w-14 h-14) e estilo do botao

---

## 2. Cards de Tratamentos com Imagens de Fundo Individuais

Cada card de tratamento tera sua propria imagem de fundo relacionada ao tema, com um overlay escuro para destacar o texto e icone.

**Imagens que serao criadas (do Unsplash/web):**

| Tratamento | Imagem de Fundo |
|------------|-----------------|
| Ansiedade e Depressao | Pessoa pensativa, com expressao preocupada |
| Fobias e Medos | Imagem abstrata/sombria representando medo |
| Compulsao Alimentar | Imagem relacionada a alimentacao |
| Tabagismo | Cigarro ou fumaca |
| Autoestima e Relacionamentos | Pessoa confiante ou casal |
| Insonia e Estresse | Pessoa dormindo ou noite tranquila |

**Alteracoes no codigo:**
- Criar 6 imagens de fundo em `src/assets/` (treatment-1.jpg ate treatment-6.jpg)
- Remover o fundo da secao inteira (treatmentsBg)
- Cada Card tera:
  - Imagem de fundo individual via `backgroundImage`
  - Overlay escuro (`bg-black/60`) para legibilidade
  - Remover a cor do icone (mantendo apenas fundo sutilmente colorido)

---

## Detalhes Tecnicos

**WhatsAppButton.tsx:**
```tsx
import whatsappIcon from "@/assets/whatsapp-icon.png";

// Substituir MessageCircle por:
<img src={whatsappIcon} alt="WhatsApp" className="w-10 h-10" />
```

**Treatments.tsx:**
```tsx
const treatments = [
  {
    icon: Brain,
    title: "Ansiedade e Depressao",
    description: "...",
    bgImage: treatment1, // import da imagem
  },
  // ... outros tratamentos
];

// Cada Card:
<Card 
  className="relative overflow-hidden"
  style={{ backgroundImage: `url(${treatment.bgImage})` }}
>
  <div className="absolute inset-0 bg-black/60" /> {/* overlay */}
  <div className="relative z-10">
    {/* conteudo */}
  </div>
</Card>
```

---

## Resultado Esperado

- Botao do WhatsApp usa o icone oficial que voce enviou
- Cada card de tratamento tem uma foto de fundo relevante
- As imagens sao escurecidas para o texto ficar legivel
- Icones e descricoes continuam visiveis e destacados
