import { FileText, Star, Cloud, Menu } from "lucide-react"

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
          <svg className="w-8 h-8" viewBox="0 0 48 48" fill="none">
            <path d="M24 4L4 14V34L24 44L44 34V14L24 4Z" fill="#F9AB00"/>
            <path d="M24 4V44M4 14L44 34M44 14L4 34" stroke="#fff" strokeWidth="2"/>
          </svg>
          <div className="flex items-center gap-2">
            <div className="border-4 border-primary rounded-lg px-6 py-2">
              <span className="text-4xl md:text-5xl font-black text-primary font-courier tracking-wider">
                ADITYA KADAM
              </span>
            </div>
            <span className="text-2xl font-courier">.ipynb</span>
          </div>
          <Star className="w-6 h-6 ml-auto text-muted-foreground hover:text-foreground cursor-pointer" />
          <Cloud className="w-6 h-6 text-muted-foreground hover:text-foreground cursor-pointer" />
        </div>

        {/* Menu bar */}
        <div className="flex items-center gap-6 text-sm font-courier border-b border-border pb-2 mb-6">
          <button className="hover:text-primary">File</button>
          <button className="hover:text-primary">Edit</button>
          <button className="hover:text-primary">View</button>
          <button className="hover:text-primary">Insert</button>
          <button className="hover:text-primary">Runtime</button>
          <button className="hover:text-primary">Tools</button>
          <button className="hover:text-primary">Help</button>
        </div>

        {/* Text cell with introduction */}
        <div className="colab-text-cell max-w-5xl mx-auto">
          <p className="text-base md:text-lg leading-relaxed">
            I'm a Data Scientist and MS Data Science candidate at Indiana University Bloomington, 
            with 2+ years of experience driving data-driven insights across supply chain, operations, 
            and analytics engineering. I've successfully completed{" "}
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
