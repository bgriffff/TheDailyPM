"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  ArrowRight,
  CheckCircle2,
  Target,
  Zap,
  BookOpen,
  Clock,
  Rocket,
  Brain,
  Calendar,
  ChevronRight,
  Mail,
  Coffee,
  Lightbulb,
} from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"

export default function Home() {
  const [activeLesson, setActiveLesson] = useState(null)
  const { scrollYProgress } = useScroll()
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, 100])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])

  const lessons = [
    { title: "What makes a good PM", week: "Week 1" },
    { title: "Product strategy", week: "Week 1" },
    { title: "Stakeholder management", week: "Week 1" },
    { title: "Roadmap & prioritization", week: "Week 1" },
    { title: "User research fundamentals", week: "Week 2" },
    { title: "Metrics that matter", week: "Week 2" },
    { title: "Product discovery", week: "Week 2" },
    { title: "Writing effective PRDs", week: "Week 2" },
    { title: "Working with designers", week: "Week 3" },
    { title: "Working with engineers", week: "Week 3" },
    { title: "Agile & scrum for PMs", week: "Week 3" },
    { title: "Go-to-market strategy", week: "Week 3" },
    { title: "Product launches", week: "Week 3" },
    { title: "A/B testing & experimentation", week: "Week 3" },
    { title: "Data-driven decisions", week: "Week 3" },
    { title: "Leadership & influence", week: "Week 3" },
    { title: "Career growth as a PM", week: "Week 3" },
  ]

  const benefits = [
    {
      icon: Target,
      title: "For aspiring PMs",
      description: "Build foundational PM knowledge with bite-sized daily lessons delivered to your inbox",
      color: "from-indigo-500 to-purple-500",
    },
    {
      icon: Brain,
      title: "For current PMs",
      description: "Sharpen your skills and fill knowledge gaps without disrupting your busy schedule",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Rocket,
      title: "For career switchers",
      description: "Learn PM fundamentals through a structured 17-day journey, one lesson at a time",
      color: "from-cyan-500 to-blue-500",
    },
  ]

  const faqs = [
    {
      question: "Who is this course for?",
      answer:
        "This course is perfect for aspiring PMs, current PMs looking to strengthen fundamentals, career switchers, and anyone interested in product management. No prior experience required.",
    },
    {
      question: "What if I miss a day?",
      answer: "No problem! All lessons are available in your email, so you can catch up anytime at your own pace.",
    },
    {
      question: "How long are the lessons?",
      answer: "Each lesson is designed to be read in 2-3 minutes. Perfect for your morning coffee or commute.",
    },
    {
      question: "How is it delivered?",
      answer: "Every day for 17 days, you'll receive one lesson directly to your email inbox. Simple and convenient.",
    },
    {
      question: "What's included?",
      answer:
        "17 carefully crafted email lessons covering essential PM topics, from strategy to execution. Each lesson is concise, actionable, and designed for busy professionals.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <motion.section
        style={{ y: heroY, opacity: heroOpacity }}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-cyan-50">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
            <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000" />
            <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-cyan-300 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-2000" />
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <Badge className="mb-6 bg-gradient-to-r from-indigo-500 to-purple-500 text-white border-0 px-4 py-2">
                <Mail className="w-4 h-4 mr-2" />
                Daily Email Course
              </Badge>

              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                Become a confident
                <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                  {" "}
                  PM{" "}
                </span>
                in 17 days
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Master product management through daily 2-3 minute lessons delivered straight to your inbox. Learn from
                real PM insights without disrupting your day.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-lg px-8 py-6 group"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-6 border-2 border-indigo-200 hover:border-indigo-300 bg-transparent"
                >
                  View Curriculum
                </Button>
              </div>

              <div className="flex items-center gap-8 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  No credit card required
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  First lesson free
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 rounded-3xl blur-2xl opacity-20 animate-pulse" />
                <Card className="relative backdrop-blur-sm bg-white/80 border-0 shadow-2xl p-8 rounded-3xl">
                  <img
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&auto=format&fit=crop"
                    alt="Product Manager working"
                    className="rounded-2xl w-full h-auto shadow-xl"
                  />

                  {/* Floating cards */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 border border-gray-100"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-gray-900">17 days</p>
                        <p className="text-sm text-gray-600">Daily lessons</p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.5 }}
                    className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl p-4 border border-gray-100"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center">
                        <Clock className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-gray-900">2-3 min</p>
                        <p className="text-sm text-gray-600">Per lesson</p>
                      </div>
                    </div>
                  </motion.div>
                </Card>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Why Email Learning */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Coffee,
                title: "Fits your routine",
                description: "2-3 minutes is all you need. Read during coffee, commute, or lunch break.",
              },
              {
                icon: Mail,
                title: "Straight to inbox",
                description: "No apps to download. Lessons arrive daily via email, ready when you are.",
              },
              {
                icon: Lightbulb,
                title: "Builds habits",
                description: "Daily micro-lessons create lasting knowledge without overwhelming your schedule.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="text-center p-8 border-0 shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-white to-gray-50">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-32 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <Badge className="mb-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white border-0">
              Simple Process
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">How it works</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Start learning today with our effortless daily email format
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Mail,
                title: "Sign up for free",
                description: "Enter your email and get instant access to the first lesson.",
                step: "01",
              },
              {
                icon: Calendar,
                title: "Receive daily lessons",
                description: "One lesson arrives in your inbox each day for 17 days. 2-3 minutes each.",
                step: "02",
              },
              {
                icon: BookOpen,
                title: "Learn at your pace",
                description: "Read when convenient. All lessons stay in your email for future reference.",
                step: "03",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                <Card className="relative p-8 border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white group hover:-translate-y-2">
                  <div className="absolute top-8 right-8 text-6xl font-bold text-indigo-50 group-hover:text-indigo-100 transition-colors">
                    {item.step}
                  </div>
                  <div className="relative">
                    <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center">
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <Badge className="mb-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white border-0">
              Complete Curriculum
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              The curriculum <span className="text-indigo-600">(17 lessons)</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Carefully crafted daily lessons covering everything you need to become a confident PM
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-cyan-500" />

            <div className="space-y-4">
              {lessons.map((lesson, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.03 }}
                  className="relative"
                >
                  <Card
                    className="ml-16 p-6 border-0 shadow-md hover:shadow-xl transition-all duration-300 bg-white cursor-pointer group hover:-translate-y-1"
                    onClick={() => setActiveLesson(activeLesson === index ? null : index)}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-[-44px] top-8 w-6 h-6 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 border-4 border-slate-50" />

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold">
                          {index + 1}
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
                            {lesson.title}
                          </h3>
                          <div className="flex items-center gap-2 mt-1">
                            <Badge variant="outline" className="text-xs">
                              Day {index + 1}
                            </Badge>
                            <span className="text-sm text-gray-500">• 2-3 min read</span>
                          </div>
                        </div>
                      </div>
                      <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-indigo-600 group-hover:translate-x-1 transition-all" />
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-lg px-8 py-6"
            >
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <Badge className="mb-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white border-0">
              Perfect For You
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Who it's for</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                <Card className="relative overflow-hidden p-8 border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white group hover:-translate-y-2 h-full">
                  <div
                    className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${benefit.color} opacity-10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500`}
                  />
                  <div className="relative">
                    <div
                      className={`w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center`}
                    >
                      <benefit.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white border-0">
              Got Questions?
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">FAQs</h2>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-white border-0 shadow-md rounded-2xl px-6 overflow-hidden"
                >
                  <AccordionTrigger className="text-lg font-semibold text-gray-900 hover:text-indigo-600 py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed pb-6">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Badge className="mb-6 bg-white/20 text-white border-0 px-4 py-2 backdrop-blur-sm">
              <Zap className="w-4 h-4 mr-2" />
              Start Your Journey
            </Badge>

            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">Start today — first lesson is free</h2>

            <p className="text-xl text-indigo-100 mb-10 leading-relaxed max-w-2xl mx-auto">
              Join aspiring and current PMs who are building better product skills, one daily lesson at a time. No
              credit card required.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-indigo-900 hover:bg-gray-100 text-lg px-10 py-7 shadow-2xl group"
              >
                Get Started Free
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            <div className="mt-8 flex items-center justify-center gap-8 text-indigo-200 flex-wrap">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>17 daily lessons</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>2-3 min reads</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Delivered via email</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-2xl font-bold text-white mb-2">PM Sprint</p>
              <p className="text-sm">© 2025 PM Sprint. All rights reserved.</p>
            </div>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">
                Terms
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
