"use client";

import { MessageCircle } from "lucide-react";
import { social } from "../lib/data";

export const WhatsAppFloat = () => {
  return (
    <a 
      href={social.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 p-4 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-all hover:scale-110 active:scale-95"
    >
      <MessageCircle size={28} />
    </a>
  );
};
