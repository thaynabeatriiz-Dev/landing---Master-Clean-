"use client"

import Link from "next/link"
import { MessageCircle } from "lucide-react"

const WHATSAPP_NUMBER = "5511988007155"
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Olá! Gostaria de solicitar um orçamento para higienização. 🧹✨"
)

export function FloatingWhatsApp() {
  return (
    <Link
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 md:w-16 md:h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all whatsapp-pulse hover:scale-110"
      aria-label="Chamar no WhatsApp"
    >
      <MessageCircle className="w-7 h-7 md:w-8 md:h-8 text-white" />
    </Link>
  )
}
