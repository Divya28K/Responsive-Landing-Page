import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-32">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-muted px-4 py-1.5 text-sm text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            New: AI-powered task suggestions now available
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl mb-6 text-balance">
            The complete platform to <span className="text-muted-foreground">build productive teams</span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Transform how your team collaborates with FlowTask. Intelligent task management powered by AI to boost
            productivity and streamline workflows.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="gap-2 w-full sm:w-auto">
              Start building <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="gap-2 w-full sm:w-auto bg-transparent">
              <Play className="h-4 w-4" />
              Watch Demo
            </Button>
          </div>

          <div className="mt-16 text-sm text-muted-foreground">Trusted by innovative teams at</div>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-8 sm:gap-12 opacity-60">
            <div className="text-2xl font-bold">Acme Corp</div>
            <div className="text-2xl font-bold">TechStart</div>
            <div className="text-2xl font-bold">BuildCo</div>
            <div className="text-2xl font-bold">InnovateLabs</div>
          </div>
        </div>
      </div>
    </section>
  )
}
