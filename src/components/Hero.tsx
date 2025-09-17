import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import { useEffect, useRef } from "react"

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return
      
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window
      
      const x = (clientX / innerWidth) * 100
      const y = (clientY / innerHeight) * 100
      
      heroRef.current.style.background = `
        radial-gradient(circle at ${x}% ${y}%, 
          hsl(var(--primary) / 0.08) 0%, 
          transparent 50%),
        hsl(var(--background))
      `
    }

    document.addEventListener('mousemove', handleMouseMove)
    return () => document.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section 
      ref={heroRef}
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4"
      style={{
        background: 'hsl(var(--background))'
      }}
    >
      {/* Large Typography Name */}
      <div className="text-center mb-8">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tight leading-none">
          <span className="text-primary block">ADITYA</span>
          <span className="text-primary block">KADAM</span>
        </h1>
      </div>

      {/* Description */}
      <div className="max-w-4xl text-center mb-12">
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
          I'm a Data Analyst and MS Data Science candidate at Indiana University, with 2+ years of experience applying analytics in supply chain and operations, and hands-on expertise building end-to-end data solutions.
        </p>
        <br />
        <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
          At Nice Consultancy, I automated procurement workflows with Python and Excel, developed Tableau/Power BI dashboards for vendor KPIs, and improved reporting accuracy by 20% through data cleaning and standardization. Most recently, as an Analytics Engineer at IU, I analyzed 64K+ higher-education records and built a web-based dashboard that improved stakeholder decision-making by 15%.
        </p>
        <br />
        <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
          I thrive at the intersection of Python, SQL, and BI tools (Tableau, Power BI, Looker), with strong experience in ETL, forecasting, and statistical modeling. My goal is to drive actionable insights and business value through data-driven solutions.
        </p>
      </div>

      {/* Call to Action Button */}
      <div className="mb-16">
        <Button 
          size="lg" 
          className="group px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/20" 
          asChild
        >
          <a href="#experience">
            View My Projects
            <ExternalLink className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl w-full">
        <div className="text-center p-6 rounded-lg border border-border/50 bg-card/50 backdrop-blur-sm">
          <div className="text-3xl font-bold text-primary mb-2">2+</div>
          <div className="text-sm text-muted-foreground">Years Experience</div>
        </div>
        <div className="text-center p-6 rounded-lg border border-border/50 bg-card/50 backdrop-blur-sm">
          <div className="text-3xl font-bold text-primary mb-2">5+</div>
          <div className="text-sm text-muted-foreground">Major Projects</div>
        </div>
        <div className="text-center p-6 rounded-lg border border-border/50 bg-card/50 backdrop-blur-sm">
          <div className="text-3xl font-bold text-primary mb-2">MS</div>
          <div className="text-sm text-muted-foreground">Data Science Degree</div>
        </div>
      </div>
    </section>
  )
}