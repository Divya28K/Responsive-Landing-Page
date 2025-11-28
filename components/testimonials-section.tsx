import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Product Manager at TechFlow",
    avatar: "/professional-woman-diverse.png",
    content:
      "FlowTask transformed how our team works. The AI suggestions are incredibly accurate and have saved us hours every week.",
    rating: 5,
  },
  {
    name: "Michael Rodriguez",
    role: "CTO at StartupLabs",
    avatar: "/professional-man.jpg",
    content:
      "Best task management tool we've used. The collaboration features are seamless and the analytics give us real insights.",
    rating: 5,
  },
  {
    name: "Emily Watson",
    role: "Design Lead at Creative Co",
    avatar: "/professional-woman-designer.png",
    content: "The interface is beautiful and intuitive. Our team adopted it immediately without any training needed.",
    rating: 5,
  },
  {
    name: "David Kim",
    role: "Engineering Manager at BuildTech",
    avatar: "/professional-engineer.png",
    content: "Finally, a task management system that doesn't get in the way. It actually helps us move faster.",
    rating: 5,
  },
  {
    name: "Lisa Anderson",
    role: "Operations Director at ScaleUp",
    avatar: "/professional-woman-executive.png",
    content:
      "The reporting features alone justify the cost. We can finally see bottlenecks before they become problems.",
    rating: 5,
  },
  {
    name: "James Park",
    role: "Founder at InnovateCo",
    avatar: "/professional-man-founder.png",
    content: "Switching to FlowTask was one of the best decisions we made. Our productivity increased by 40%.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-4 text-balance">Loved by teams worldwide</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Join thousands of teams that have transformed their productivity with FlowTask.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="border-border bg-card">
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-sm">{testimonial.name}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
