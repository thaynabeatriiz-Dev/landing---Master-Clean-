"use client"

import { useState, useEffect } from "react"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    name: "Maria Santos",
    avatar: "M",
    rating: 5,
    comment:
      "Meu sofá parecia novo no mesmo dia! Recomendo demais o serviço da Master Clean.",
  },
  {
    id: 2,
    name: "Carlos Oliveira",
    avatar: "C",
    rating: 5,
    comment:
      "Excelente atendimento! Meu carro ficou com cheiro de novo. Profissionais muito atenciosos.",
  },
  {
    id: 3,
    name: "Ana Paula",
    avatar: "A",
    rating: 5,
    comment:
      "Finalmente consegui tirar aquela mancha do colchão! Serviço rápido e de qualidade.",
  },
  {
    id: 4,
    name: "Roberto Silva",
    avatar: "R",
    rating: 5,
    comment:
      "Já é a terceira vez que contrato. Sempre impecável! O preço é muito justo pelo resultado.",
  },
  {
    id: 5,
    name: "Juliana Costa",
    avatar: "J",
    rating: 5,
    comment:
      "Minha família toda agradece! Acabaram os espirros e alergias depois da higienização.",
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    )
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  return (
    <section id="depoimentos" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-medium uppercase tracking-wider text-sm">
            Depoimentos
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            O que nossos clientes dizem
          </h2>
        </div>

        {/* Testimonials Carousel */}
        <div className="max-w-4xl mx-auto relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-card border border-border rounded-2xl p-8 md:p-12 text-center relative">
                    {/* Quote Icon */}
                    <Quote className="w-12 h-12 text-primary/20 absolute top-6 left-6" />

                    {/* Avatar */}
                    <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary">
                        {testimonial.avatar}
                      </span>
                    </div>

                    {/* Stars */}
                    <div className="flex justify-center gap-1 mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-6 h-6 fill-accent text-accent"
                        />
                      ))}
                    </div>

                    {/* Comment */}
                    <p className="text-lg md:text-xl text-foreground mb-6 italic">
                      &quot;{testimonial.comment}&quot;
                    </p>

                    {/* Name */}
                    <p className="font-semibold text-foreground">
                      {testimonial.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-card border-border hover:border-primary"
            onClick={prevSlide}
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-card border-border hover:border-primary"
            onClick={nextSlide}
          >
            <ChevronRight className="w-5 h-5" />
          </Button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-primary w-8"
                    : "bg-muted hover:bg-primary/50"
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
