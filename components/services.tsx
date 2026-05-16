"use client"

import Image from "next/image"
import { useState } from "react"

const services = [
  {
    id: 1,
    title: "Sofás",
    description: "Higienização completa de sofás de todos os tamanhos e tecidos",
    image: "/images/sofa-antes-depois.jpg",
    price: "R$ 130,00",
  },
  {
    id: 2,
    title: "Estofados Automotivos",
    description: "Bancos de carro com limpeza profunda e eliminação de odores",
    image: "/images/banco-carro.jpg",
    price: "R$ 150,00",
  },
  {
    id: 3,
    title: "Colchões",
    description: "Elimine ácaros e bactérias para noites de sono mais saudáveis",
    image: "/images/colchao.jpg",
    price: "R$ 130,00",
  },
]

export function Services() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section id="servicos" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-medium uppercase tracking-wider text-sm">
            Nossos Serviços
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Soluções de higienização
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Oferecemos serviços especializados para deixar seus estofados
            impecáveis. Técnicas avançadas e produtos de alta qualidade.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 bg-accent/20 border border-accent/30 rounded-full px-6 py-3">
            <span className="text-accent font-bold text-xl">
              A partir de R$ 130,00
            </span>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative overflow-hidden rounded-2xl cursor-pointer"
              onMouseEnter={() => setHoveredId(service.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image */}
              <div className="aspect-[4/5] relative overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className={`object-cover transition-transform duration-500 ${
                    hoveredId === service.id ? "scale-110" : "scale-100"
                  }`}
                />
                {/* Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent transition-opacity duration-300 ${
                    hoveredId === service.id ? "opacity-90" : "opacity-70"
                  }`}
                />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div
                  className={`transform transition-all duration-300 ${
                    hoveredId === service.id
                      ? "translate-y-0 opacity-100"
                      : "translate-y-4 opacity-0"
                  }`}
                >
                  <span className="text-accent font-bold">{service.price}</span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-foreground mt-2">
                  {service.title}
                </h3>
                <p
                  className={`text-muted-foreground mt-2 transition-all duration-300 ${
                    hoveredId === service.id
                      ? "opacity-100 max-h-20"
                      : "opacity-0 max-h-0"
                  }`}
                >
                  {service.description}
                </p>
              </div>

              {/* Before/After Badge */}
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded">
                  ANTES
                </span>
                <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded">
                  DEPOIS
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
