import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, BarChart3, Wrench, Award } from "lucide-react"
import { CodeBlock } from "@/components/CodeBlock"

export function Skills() {
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
    <section id="skills" className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Text cell - Section heading */}
        <div className="colab-text-cell mb-4">
          <h2 className="text-3xl font-bold">Skills & Expertise</h2>
        </div>

        {/* Code cells - Skill categories */}
        {skillCategories.map((category, index) => {
          const code = `# ${category.title}\n'''\n  ${category.skills.map((s, i) => `${i < category.skills.length - 1 ? s + ' |' : s}`).join(' ')}\n'''`
          return (
            <CodeBlock
              key={index}
              className="colab-code-cell ml-12 mb-4 flex gap-4 group"
              code={code}
              executionNumber={index + 1}
              onExecute={() => {}}
            />
          )
        })}

        {/* Text cell - Certifications heading */}
        <div className="colab-text-cell mb-4 mt-8">
          <h2 className="text-3xl font-bold flex items-center gap-3">
            <Award className="w-8 h-8 text-primary" />
            Certifications
          </h2>
        </div>

        {/* Code cell - Certifications */}
        {(() => {
          const code = `# Professional Certifications\n'''\n  ${certifications.map((c, i) => `${i + 1}. ${c}`).join("\n  ")}\n'''`
          return (
            <CodeBlock
              className="colab-code-cell ml-12 flex gap-4 group"
              code={code}
              executionNumber={skillCategories.length + 1}
              onExecute={() => {}}
            />
          )
        })()}
      </div>
    </section>
  )
}