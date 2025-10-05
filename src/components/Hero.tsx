import profileCard from "@/assets/profile-card.png"

export function Hero() {
  return (
    <section 
      id="hero"
      className="min-h-screen flex flex-col px-4 py-8 anchor-offset"
    >
      {/* Colab-style header */}
      <div className="max-w-7xl mx-auto w-full mb-8">
        {/* Text cell with introduction */}
        <div className="colab-text-cell max-w-5xl mx-auto mb-4">
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
            raw data into{" "}
            <a 
              href="#contact" 
              className="text-primary font-bold hover:underline"
            >
              actionable
            </a>
            {" "}business intelligence through advanced analytics and interactive 
            dashboards.
          </p>
        </div>

        {/* Output cell with profile card */}
        <div className="colab-code-cell max-w-5xl mx-auto">
          <div className="bg-background rounded-lg overflow-hidden">
            <img 
              src={profileCard} 
              alt="Aditya Kadam - Data Scientist Profile" 
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
