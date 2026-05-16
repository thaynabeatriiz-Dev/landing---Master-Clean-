import Link from "next/link"
import Image from "next/image"
import {
  Diamond,
  Instagram,
  MessageCircle,
  MapPin,
  CreditCard,
  Banknote,
} from "lucide-react"

const WHATSAPP_NUMBER = "5511988007155"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid md:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo & Description */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Diamond className="w-6 h-6 text-primary" />
              <span className="font-serif text-xl font-bold text-foreground">
                Master<span className="text-primary">Clean</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm mb-6">
              Higienização profissional de estofados com qualidade e confiança.
              Deixe sua casa mais saudável.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <Instagram className="w-5 h-5 text-foreground" />
              </Link>
              <Link
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-[#25D366]/20 transition-colors"
              >
                <MessageCircle className="w-5 h-5 text-foreground" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Links Úteis</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#servicos"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Serviços
                </Link>
              </li>
              <li>
                <Link
                  href="#sobre"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Sobre nós
                </Link>
              </li>
              <li>
                <Link
                  href="#depoimentos"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Depoimentos
                </Link>
              </li>
              <li>
                <Link
                  href="#contato"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Serviços</h3>
            <ul className="space-y-3">
              <li className="text-muted-foreground text-sm">
                Higienização de Sofás
              </li>
              <li className="text-muted-foreground text-sm">
                Limpeza de Colchões
              </li>
              <li className="text-muted-foreground text-sm">
                Bancos Automotivos
              </li>
              <li className="text-muted-foreground text-sm">
                Poltronas e Cadeiras
              </li>
            </ul>
          </div>

          {/* Contact & Payment */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contato</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground text-sm">
                  Atendemos em São Paulo e região metropolitana
                </span>
              </div>
              <div className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground text-sm">
                  (11) 98800-7155
                </span>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="mt-6">
              <h4 className="text-sm font-medium text-foreground mb-3">
                Formas de Pagamento
              </h4>
              <div className="flex gap-2">
                <div className="w-12 h-8 bg-secondary rounded flex items-center justify-center">
                  <CreditCard className="w-5 h-5 text-muted-foreground" />
                </div>
                <div className="w-12 h-8 bg-secondary rounded flex items-center justify-center">
                  <Banknote className="w-5 h-5 text-muted-foreground" />
                </div>
                <div className="w-12 h-8 bg-secondary rounded flex items-center justify-center text-xs font-bold text-muted-foreground">
                  PIX
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Master Clean. Todos os direitos
            reservados.
          </p>
          <p className="text-muted-foreground text-sm">
            Desenvolvido com 💙 para nossos clientes
          </p>
        </div>
      </div>
    </footer>
  )
}
