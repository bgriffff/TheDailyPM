import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "Who is this course for?",
    answer:
      "This course is perfect for aspiring PMs, new product managers, and experienced professionals looking to sharpen their skills. Whether you're transitioning into product management or want to level up your existing knowledge, StreamLine provides the frameworks and insights you need.",
  },
  {
    question: "What if I miss a day?",
    answer:
      "No worries! All lessons remain accessible in your account, so you can catch up at your own pace. We recommend following the daily schedule for the best learning experience, but life happens and we understand.",
  },
  {
    question: "How long are the lessons?",
    answer:
      "Each lesson is designed to take just 1-2 minutes to read. We believe in focused, actionable learning that fits into your busy schedule. You can read them during your morning coffee or commute.",
  },
  {
    question: "How is it delivered?",
    answer:
      "Lessons are delivered directly to your inbox every day for 17 days. You'll also have access to a web dashboard where you can review past lessons, track your progress, and access bonus resources.",
  },
  {
    question: "What's included?",
    answer:
      "You get 17 comprehensive lessons covering all aspects of product management, from strategy and prioritization to stakeholder management and data-driven decision making. Plus, you'll receive bonus templates, frameworks, and a certificate of completion.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="bg-muted/50 py-20 md:py-28">
      <div className="container max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Frequently asked questions</h2>
          <p className="text-lg text-muted-foreground text-pretty">Everything you need to know about StreamLine</p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
