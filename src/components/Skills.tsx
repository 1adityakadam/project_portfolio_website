import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, BarChart3, Wrench, Award } from "lucide-react"
import { useEffect, useRef } from "react"

export function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!sectionRef.current) return
      
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window
      
      const x = (clientX / innerWidth) * 100
      const y = (clientY / innerHeight) * 100
      
      sectionRef.current.style.background = `
        radial-gradient(circle at ${x}% ${y}%, 
          hsl(var(--primary) / 0.05) 0%, 
          transparent 50%),
        hsl(var(--background))
      `
    }

    document.addEventListener('mousemove', handleMouseMove)
    return () => document.removeEventListener('mousemove', handleMouseMove)
  }, [])
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-5 h-5" />,
      skills: ["Python", "SQL", "R", "JavaScript", "HTML/CSS"],
      color: "bg-blue-500/10 text-blue-700 dark:text-blue-300"
    },
    {
      title: "Data Analysis & ML",
      icon: <BarChart3 className="w-5 h-5" />,
      skills: ["Pandas", "NumPy", "Scikit-Learn", "Statistical Analysis", "Machine Learning", "Predictive Modeling"],
      color: "bg-green-500/10 text-green-700 dark:text-green-300"
    },
    {
      title: "Data Visualization",
      icon: <Database className="w-5 h-5" />,
      skills: ["Tableau", "Power BI", "Matplotlib", "Seaborn", "Plotly", "Looker Studio", "Interactive Dashboards"],
      color: "bg-purple-500/10 text-purple-700 dark:text-purple-300"
    },
    {
      title: "Database & Cloud",
      icon: <Database className="w-5 h-5" />,
      skills: ["MySQL", "PostgreSQL", "BigQuery", "Google Cloud Platform", "Data Warehousing"],
      color: "bg-orange-500/10 text-orange-700 dark:text-orange-300"
    },
    {
      title: "Tools & Technologies",
      icon: <Wrench className="w-5 h-5" />,
      skills: ["Excel", "Jupyter", "Git", "Mage-AI", "Data Pipelines", "ETL Processes"],
      color: "bg-red-500/10 text-red-700 dark:text-red-300"
    }
  ]

  const certifications = [
    "Python for Machine Learning Artificial Intelligence and Deep Learning - IIT Kanpur",
    "Machine Learning Specialization - Deeplearning.ai",
    "Associate Python Developer - Datacamp",
    "SQL Fundamentals - Datacamp", 
    "Accenture Virtual Internship - Accenture"
  ]

  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className="py-20 glass-section"
      style={{
        background: 'hsl(var(--background))'
      }}
    >
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Skills & Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technical proficiencies spanning the entire data science workflow
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {skillCategories.map((category, index) => (
              <Card key={index} className="group glass hover:bg-accent/10 transition-all duration-300 hover:scale-105">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-3 text-lg">
                    <div className="text-primary">{category.icon}</div>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, idx) => (
                      <Badge 
                        key={idx} 
                        variant="secondary" 
                        className="text-xs hover:bg-accent hover:text-accent-foreground transition-colors cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="glass hover:bg-accent/10 transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl">
                <Award className="w-6 h-6 text-primary" />
                Certifications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 glass hover:bg-accent/10 transition-all duration-300 hover:scale-105 rounded-lg">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="font-medium">{cert}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}