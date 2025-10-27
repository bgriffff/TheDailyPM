import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"

const lessons = [
  { title: "What makes a good PM", duration: "2 min" },
  { title: "Product strategy fundamentals", duration: "2 min" },
  { title: "Stakeholder management", duration: "2 min" },
  { title: "Learning to prioritize effectively", duration: "2 min" },
  { title: "User research fundamentals", duration: "2 min" },
  { title: "Working with designers", duration: "2 min" },
  { title: "Data-driven decision making", duration: "2 min" },
  { title: "Roadmap planning", duration: "2 min" },
]

export function Curriculum() {
  return (
    <section id="curriculum" className="container py-20 md:py-28">
      <div className="text-center mb-12">
        <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20 border-primary/20">Curriculum</Badge>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
          The curriculum <span className="text-primary">(17 lessons)</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
          Carefully crafted daily lessons covering everything you need to become a successful product manager
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-primary/20" />

          <div className="space-y-4">
            {lessons.map((lesson, index) => (
              <Card key={index} className="p-6 ml-14 relative hover:shadow-md transition-shadow">
                <div className="absolute -left-14 top-1/2 -translate-y-1/2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
                    <CheckCircle2 className="h-6 w-6 text-primary-foreground" />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">{lesson.title}</h3>
                  <span className="text-sm text-muted-foreground">{lesson.duration}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Button size="lg">Start Free Trial</Button>
        </div>
      </div>
    </section>
  )
}
