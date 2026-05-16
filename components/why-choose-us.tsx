import {
  Zap,
  Sparkles,
  Bug,
  Banknote,
  Wind,
} from "lucide-react"

const benefits = [
  {
    icon: Zap,
    title: "Limpeza Turbo",
    description: "Processo rápido e eficiente em poucos minutos",
  },
  {
    icon: Sparkles,
    title: "Elimina Sujeira",
    description: "Remove manchas difíceis e sujeira profunda",
  },
  {
    icon: Bug,
    title: "Elimina Ácaros e Odores",
    description: "Ambiente mais saudável para sua família",
  },
  {
    icon: Banknote,
    title: "Custo-Benefício",
    description: "Preços acessíveis com qualidade premium",
  },
  {
    icon: Wind,
    title: "Secagem Rápida",
    description: "Estofados prontos para uso em poucas horas",
  },
]

export function WhyChooseUs() {
  return (
    <section id="sobre" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-medium uppercase tracking-wider text-sm">
            Diferenciais
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Por que nos escolher?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Combinamos tecnologia, expertise e dedicação para entregar o melhor
            resultado em higienização de estofados.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group text-center p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <benefit.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
