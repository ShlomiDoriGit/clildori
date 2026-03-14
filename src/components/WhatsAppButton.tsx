import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/972559272658"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 left-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-transform hover:scale-110"
    aria-label="WhatsApp"
  >
    <MessageCircle className="h-7 w-7 text-white fill-white" />
  </a>
);

export default WhatsAppButton;
