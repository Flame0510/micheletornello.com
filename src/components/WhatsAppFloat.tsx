"use client";

import { MessageCircle } from "lucide-react";
import { social } from "../lib/data";

export const WhatsAppFloat = () => {
  return (
    <a 
      href={social.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 p-4 bg-accent text-white rounded-full shadow-lg shadow-accent/30 hover:bg-accent-hover transition-all hover:scale-110 active:scale-95"
      aria-label="Contattami su WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  );
};
