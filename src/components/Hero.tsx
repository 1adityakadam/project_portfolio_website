import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowDown, Download, ExternalLink } from "lucide-react"

export function Hero() {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
      <div className="container relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              <span className="block">Data Scientist &</span>
              <span className="block bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Analytics Expert
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Transforming complex data into actionable insights with 2+ years of experience in 
              machine learning, statistical analysis, and interactive dashboard development.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button size="lg" className="group" asChild>
                <a href="#projects">
                  View My Projects
                  <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="mailto:askadam@iu.edu">
                  Get In Touch
                </a>
              </Button>
            </div>
          </div>
          
          <div className="pt-20">
            <Card className="p-8 bg-gradient-to-br from-card to-card/50 border-border/50 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary">2+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">5+</div>
                  <div className="text-sm text-muted-foreground">Major Projects</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">MS</div>
                  <div className="text-sm text-muted-foreground">Data Science Degree</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  )
}