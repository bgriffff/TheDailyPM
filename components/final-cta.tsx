import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-primary/80 py-20 md:py-28">
      <div className="absolute inset-0 bg-grid-white/10" />
      <div className="container relative">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
            <Sparkles className="h-4 w-4 text-white" />
            <span className="text-sm font-medium text-white">Limited Time Offer</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">
            Start today — first lesson is free
          </h2>

          <p className="text-lg md:text-xl text-white/90 mb-8 text-pretty max-w-2xl mx-auto">
            Join over 10,000 product managers who have transformed their careers with StreamLine. No credit card
            required to start your 7-day free trial.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-base">
              Start Free Trial
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base bg-transparent text-white border-white hover:bg-white/10"
            >
              View Sample Lesson
            </Button>
          </div>

          <p className="mt-6 text-sm text-white/70">
            ✓ No credit card required • ✓ Cancel anytime • ✓ 30-day money-back guarantee
          </p>
        </div>
      </div>
    </section>
  )
}
