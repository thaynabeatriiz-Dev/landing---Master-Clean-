"use client"

import Link from "next/link"
import { MessageCircle, Phone, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

const WHATSAPP_NUMBER = "5511988007155"
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Olá! Gostaria de solicitar um orçamento para higienização. 🧹✨"
)

export function WhatsAppCTA() {
  return (
    <section
      id="contato"
      className="py-20 md:py-32 bg-background relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Icon */}
          <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-[#25D366]/20 flex items-center justify-center float-animation">
            <MessageCircle className="w-10 h-10 text-[#25D366]" />
          </div>

          {/* Title */}
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-6">
            Faça seu orçamento{" "}
            <span className="text-primary">agora mesmo</span>
          </h2>

          {/* Subtitle */}
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            Atendimento rápido e personalizado. Tire suas dúvidas e agende sua
            higienização pelo WhatsApp!
          </p>

          {/* Phone number display */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <Phone className="w-5 h-5 text-primary" />
            <span className="text-xl md:text-2xl font-bold text-foreground">
              (11) 98800-7155
            </span>
          </div>

          {/* WhatsApp Button */}
          <Button
            asChild
            size="lg"
            className="whatsapp-pulse bg-[#25D366] hover:bg-[#20BA5C] text-white px-10 py-7 text-xl font-bold rounded-full"
          >
            <Link
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="mr-3 w-7 h-7" />
              Chamar no WhatsApp
            </Link>
          </Button>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-6 mt-12 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-accent" />
              <span>Atendimento Rápido</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-accent" />
              <span>Qualidade Garantida</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-accent" />
              <span>Orçamento Grátis</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
