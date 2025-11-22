"use client"

import { useEffect } from "react"
import { Badge } from "@/components/ui/badge"

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
  useEffect(() => {
    // Load the ConvertKit commerce script
    const script = document.createElement("script")
    script.src = "https://skillstreak.kit.com/commerce.js"
    script.async = true
    script.defer = true
    document.body.appendChild(script)
  }, [])

  return (
    <section id="pricing" className="container py-20 md:py-28">
      <div className="text-center mb-12">
        <Badge className="mb-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white border-0">
          Ready to start?
        </Badge>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Get The Daily PM Today</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
          Master product management with our complete 17-lesson email course.
        </p>
      </div>

      <div className="flex justify-center">
        <a className="convertkit-button" href="https://skillstreak.kit.com/products/the-daily-pm" data-commerce>
          Buy my product
        </a>
      </div>
    </section>
  )
}
