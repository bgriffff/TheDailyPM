import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, Users } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section className="container py-20 md:py-28">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
        <div className="flex flex-col gap-6">
          <Badge className="w-fit bg-primary/10 text-primary hover:bg-primary/20 border-primary/20">PM Course</Badge>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
            Become a confident <span className="text-primary">PM</span> in 17 days
          </h1>

          <p className="text-lg text-muted-foreground text-pretty max-w-xl">
            Master product management through daily 1-2 minute lessons delivered straight to your inbox. Learn the
            insights and strategies to excel in your PM career.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button size="lg" className="text-base">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="text-base bg-transparent">
              View Curriculum
            </Button>
          </div>

          <div className="flex items-center gap-6 pt-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Users className="h-4 w-4" />
              <span>10,000+ students</span>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted">
            <Image src="/images/about-image.png" alt="Team collaboration" fill className="object-cover" priority />
            <div className="absolute top-4 right-4 bg-white rounded-full px-4 py-2 shadow-lg flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm font-medium">2.5 min</span>
            </div>
            <div className="absolute bottom-4 left-4 bg-white rounded-xl px-4 py-3 shadow-lg">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" />
                <span className="text-sm font-semibold">17 days</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
