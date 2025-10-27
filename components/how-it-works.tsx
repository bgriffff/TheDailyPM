import { Card } from "@/components/ui/card"
import { Mail, BookOpen, Trophy } from "lucide-react"

const steps = [
  {
    icon: Mail,
    step: "01",
    title: "Sign up for free",
    description: "Get started with a 7-day free trial and receive your first lesson immediately in your inbox.",
  },
  {
    icon: BookOpen,
    step: "02",
    title: "Receive daily lessons",
    description: "Learn at your own pace with bite-sized lessons delivered daily. Each takes just 1-2 minutes to read.",
  },
  {
    icon: Trophy,
    step: "03",
    title: "Master PM skills",
    description: "Apply what you learn and become a confident product manager in just 17 days.",
  },
]

export function HowItWorks() {
  return (
    <section className="bg-muted/50 py-20 md:py-28">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">How it works</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Start learning today with our effortless, daily email format
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <Card key={index} className="p-6 relative">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
                    <step.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <span className="text-4xl font-bold text-muted-foreground/20">{step.step}</span>
                </div>
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
