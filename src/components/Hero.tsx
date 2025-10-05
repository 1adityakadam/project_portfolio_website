import { Star, Cloud } from "lucide-react"

export function Hero() {
  return (
    <section 
      id="hero"
      className="min-h-screen flex flex-col px-4 py-8"
    >
      {/* Colab-style header */}
      <div className="max-w-7xl mx-auto w-full mb-8">
        {/* Notebook title bar */}
        <div className="flex items-center gap-3 mb-4">
          <Star className="w-6 h-6 text-muted-foreground hover:text-foreground cursor-pointer" />
          <Cloud className="w-6 h-6 text-muted-foreground hover:text-foreground cursor-pointer" />
        </div>

        {/* Menu bar - Navigation */}
        <div className="flex items-center gap-6 text-sm font-courier border-b border-border pb-2 mb-6">
          <a href="#hero" className="hover:text-primary">About</a>
          <a href="#experience" className="hover:text-primary">Experience</a>
          <a href="#projects" className="hover:text-primary">Projects</a>
          <a href="#skills" className="hover:text-primary">Skills</a>
          <a href="#education" className="hover:text-primary">Education</a>
          <a href="https://medium.com/@1adityakadam" target="_blank" rel="noopener noreferrer" className="hover:text-primary">Medium Blog Posts</a>
        </div>

        {/* Text cell with introduction */}
        <div className="colab-text-cell max-w-5xl mx-auto">
          <p className="text-base md:text-lg leading-relaxed">
            I'm a{" "}
            <a 
              href="#experience" 
              className="text-primary font-bold hover:underline"
            >
              Data Scientist
            </a>
            {" "}and{" "}
            <a 
              href="#education" 
              className="text-primary font-bold hover:underline"
            >
              MS Data Science
            </a>
            {" "}candidate at Indiana University Bloomington, 
            with 2+ years of experience driving data-driven insights. I've successfully completed{" "}
            <a 
              href="#projects" 
              className="text-primary font-bold hover:underline"
            >
              5+ major projects
            </a>
            {" "}spanning machine learning, NLP, and data visualization, specializing in transforming 
            raw data into actionable business intelligence through advanced analytics and interactive 
            dashboards.
          </p>
        </div>
      </div>
    </section>
  )
}
