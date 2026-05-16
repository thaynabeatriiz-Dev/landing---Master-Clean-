"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X, Diamond, Search } from "lucide-react"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Diamond className="w-6 h-6 text-primary" />
            <span className="font-serif text-xl md:text-2xl font-bold text-foreground">
              Master<span className="text-primary">Clean</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="#servicos"
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              Serviços
            </Link>
            <Link
              href="#sobre"
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              Sobre nós
            </Link>
            <Link
              href="#depoimentos"
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              Depoimentos
            </Link>
            <Link
              href="#contato"
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              Contato
            </Link>
            <button className="text-foreground/80 hover:text-primary transition-colors">
              <Search className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border">
            <div className="flex flex-col py-4 gap-4">
              <Link
                href="#servicos"
                className="text-foreground/80 hover:text-primary transition-colors px-4 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Serviços
              </Link>
              <Link
                href="#sobre"
                className="text-foreground/80 hover:text-primary transition-colors px-4 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sobre nós
              </Link>
              <Link
                href="#depoimentos"
                className="text-foreground/80 hover:text-primary transition-colors px-4 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Depoimentos
              </Link>
              <Link
                href="#contato"
                className="text-foreground/80 hover:text-primary transition-colors px-4 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contato
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
