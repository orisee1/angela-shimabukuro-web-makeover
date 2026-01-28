import whatsappIcon from "@/assets/whatsapp-icon.png";

export const WhatsAppButton = () => {
  const openWhatsApp = () => {
    window.open(
      "https://wa.me/5567974008420?text=Olá! Gostaria de agendar uma consulta de hipnoterapia.",
      "_blank"
    );
  };

  return (
    <button
      onClick={openWhatsApp}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl animate-pulse-whatsapp transition-shadow"
      aria-label="Contato via WhatsApp"
    >
      <img src={whatsappIcon} alt="WhatsApp" className="w-9 h-9" />
    </button>
  );
};
