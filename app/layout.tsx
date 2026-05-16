import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
})

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair'
})

export const metadata: Metadata = {
  title: 'Master Clean - Higienização Profissional | Sofás, Colchões e Bancos de Carro',
  description: 'Higienização profissional de sofás, colchões e bancos de carro. Elimine ácaros, fungos e bactérias. Atendimento em domicílio. A partir de R$ 130,00. Solicite seu orçamento pelo WhatsApp!',
  keywords: 'higienização, limpeza de sofá, limpeza de colchão, limpeza de banco de carro, higienização profissional, limpeza estofados',
  openGraph: {
    title: 'Master Clean - Higienização Profissional',
    description: 'Deixe tudo com aparência de novo em minutos. Higienização profissional sem sair de casa.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#0f172a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="bg-background">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
