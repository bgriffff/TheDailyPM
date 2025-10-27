import { Card } from "@/components/ui/card"
import { BookOpen, Target, TrendingUp } from "lucide-react"

const features = [
  {
    icon: BookOpen,
    title: "Fill your toolbox",
    description:
      "Learn essential PM frameworks, tools, and methodologies used by top product managers at leading companies.",
  },
  {
    icon: Target,
    title: "Develop a game plan",
    description:
      "Create a strategic roadmap for your PM career with actionable steps and clear milestones to track your progress.",
  },
  {
    icon: TrendingUp,
    title: "Accelerate your growth",
    description:
      "Fast-track your product management skills with bite-sized daily lessons designed for busy professionals.",
  },
]

export function Features() {
  return (
    <section id="features" className="container py-20 md:py-28">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Everything you need to succeed as a PM</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
          Our comprehensive curriculum covers all aspects of product management
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {features.map((feature, index) => (
          <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex flex-col gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}
