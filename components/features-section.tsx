import { Zap, Users, BarChart3, Shield, Sparkles, Clock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const features = [
  {
    icon: Sparkles,
    title: "AI-Powered Insights",
    description:
      "Get intelligent suggestions and automated task prioritization that learns from your team's workflow patterns.",
  },
  {
    icon: Users,
    title: "Seamless Collaboration",
    description:
      "Real-time collaboration tools that keep your entire team synchronized and working efficiently together.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Built for speed with instant updates and a responsive interface that keeps up with your team's pace.",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description:
      "Comprehensive insights and reporting to track productivity, identify bottlenecks, and optimize workflows.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level encryption and compliance with SOC 2, GDPR, and HIPAA standards to keep your data safe.",
  },
  {
    icon: Clock,
    title: "Time Tracking",
    description: "Automatic time tracking and detailed timesheets to understand where your team's time is being spent.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 sm:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-4 text-balance">
            Everything you need to ship faster
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Powerful features designed to help your team collaborate smarter and deliver better results.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <Card key={feature.title} className="border-border bg-card hover:bg-accent/50 transition-colors">
                <CardContent className="p-6">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
