import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Senior Product Manager",
    company: "TechCorp",
    content:
      "StreamLine transformed my approach to product management. The daily lessons were perfectly paced and immediately applicable to my work.",
    rating: 5,
  },
  {
    name: "Michael Rodriguez",
    role: "Product Lead",
    company: "StartupXYZ",
    content:
      "I went from feeling overwhelmed to confident in just 17 days. The curriculum is comprehensive yet easy to digest. Highly recommend!",
    rating: 5,
  },
  {
    name: "Emily Watson",
    role: "Associate PM",
    company: "Innovation Labs",
    content:
      "The best investment in my PM career. The frameworks and strategies I learned have made me so much more effective in my role.",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="bg-muted/50 py-20 md:py-28">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Loved by product managers worldwide</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Join thousands of PMs who have transformed their careers with StreamLine
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6">
              <div className="flex flex-col gap-4">
                <div className="flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed">"{testimonial.content}"</p>
                <div className="mt-auto">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
