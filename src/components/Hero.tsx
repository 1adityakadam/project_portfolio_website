export function Hero() {
  return (
    <section 
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center px-4 py-20"
      style={{
        background: 'hsl(var(--section-hero))'
      }}
    >
      {/* Large Typography Name */}
      <div className="text-center mb-12">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tight leading-none font-playfair text-primary mb-6">
          ADITYA KADAM
        </h1>
      </div>

      {/* Resume-based Introduction */}
      <div className="max-w-4xl text-center">
        <p className="text-xl md:text-2xl text-foreground leading-relaxed font-lora">
          I'm a Data Scientist and MS Data Science candidate at Indiana University Bloomington, 
          with 2+ years of experience driving data-driven insights across supply chain, operations, 
          and analytics engineering. I've successfully completed{" "}
          <a 
            href="#projects" 
            className="text-primary font-bold hover:underline transition-all duration-200"
          >
            5+ major projects
          </a>
          {" "}spanning machine learning, NLP, and data visualization, specializing in transforming 
          raw data into actionable business intelligence through advanced analytics and interactive 
          dashboards.
        </p>
      </div>
    </section>
  )
}
