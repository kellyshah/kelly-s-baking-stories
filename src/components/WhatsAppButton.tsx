import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/1234567890?text=Hi%20Kelly!%20I'd%20like%20to%20place%20an%20order."
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-[hsl(142,70%,45%)] text-[hsl(0,0%,100%)] shadow-lg hover:scale-110 transition-transform duration-300"
    aria-label="Chat on WhatsApp"
  >
    <MessageCircle size={24} />
  </a>
);

export default WhatsAppButton;
