import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/site";

export function FloatingCta() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat WhatsApp Rendang Pangroso"
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-maroon px-5 py-3.5 text-sm font-semibold text-paper shadow-[0_16px_40px_-12px_rgba(110,42,42,0.8)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-maroon-dark sm:bottom-7 sm:right-7"
    >
      <MessageCircle className="h-5 w-5" strokeWidth={2} />
      <span className="hidden sm:inline">Chat Kami</span>
    </a>
  );
}
