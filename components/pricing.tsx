import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Free Trial",
    price: "$0",
    period: "7 days",
    description: "Perfect for trying out the course",
    features: ["First 7 lessons", "Email delivery", "Mobile-friendly", "Cancel anytime"],
    cta: "Start Free Trial",
    popular: false,
  },
  {
    name: "Full Course",
    price: "$49",
    period: "one-time",
    description: "Complete PM mastery program",
    features: [
      "All 17 lessons",
      "Lifetime access",
      "Bonus resources",
      "Certificate of completion",
      "Community access",
      "Priority support",
    ],
    cta: "Get Started",
    popular: true,
  },
  {
    name: "Team",
    price: "$399",
    period: "up to 10 users",
    description: "For growing product teams",
    features: [
      "Everything in Full Course",
      "Team dashboard",
      "Progress tracking",
      "Custom onboarding",
      "Dedicated support",
      "Bulk licensing",
    ],
    cta: "Contact Sales",
    popular: false,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="container py-20 md:py-28">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Simple, transparent pricing</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
          Choose the plan that works best for you. Start with a free trial, no credit card required.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
        {plans.map((plan, index) => (
          <Card key={index} className={`p-6 flex flex-col ${plan.popular ? "border-primary shadow-lg scale-105" : ""}`}>
            {plan.popular && <Badge className="w-fit mb-4 bg-primary text-primary-foreground">Most Popular</Badge>}
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-muted-foreground">/ {plan.period}</span>
              </div>
              <p className="text-sm text-muted-foreground">{plan.description}</p>
            </div>

            <ul className="space-y-3 mb-6 flex-grow">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>

            <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
              {plan.cta}
            </Button>
          </Card>
        ))}
      </div>
    </section>
  )
}
