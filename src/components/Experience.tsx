import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"
import { CodeBlock } from "@/components/CodeBlock"

export function Experience() {
  const experiences = [
    {
      title: "Data Scientist",
      company: "Project 990",
      location: "Bloomington, IN",
      period: "Aug 2025 – Present",
      description: [
        "Engineered an unsupervised Label2Vec embedding pipeline to cluster and semantically map 176K+ organization names, enabling scalable candidate labeling.",
        "Deployed a BERT-based label refinement model to normalize noisy organization strings and generate high-quality label suggestions."
      ],
      skills: ["Label2Vec", "BERT", "PyTorch", "NumPy", "Jupyter", "SQL"]
    },
    {
      title: "Analytics Engineer",
      company: "Indiana University School of Education",
      location: "Bloomington, IN",
      period: "Apr 2025 – Jul 2025",
      description: [
        "Analyzed 64,000+ higher-education records with pandas and SQL to reveal institutional ancestry and merger patterns.",
        "Collaborated with faculty to prototype and launch a web visualization that improved stakeholder comprehension of merger events ~15%.",
        "Optimized ingestion and query performance via partitioning and selective loading, reducing latency by ~30%.",
        "Hardened ETL reliability by implementing validation rules and cleansing routines, cutting downstream errors by ~15%."
      ],
      skills: ["Python", "Pandas", "ETL", "Data Partitioning", "Data Validation", "Render", "Dashboarding"]
    },
    {
      title: "Data Analyst",
      company: "Nice Consultancy",
      location: "Mumbai, India",
      period: "Jul 2022 – Jun 2024",
      description: [
        "Prepared and reconciled technical datasets for 1,000+ instrumentation components, increasing reporting accuracy by ~20%.",
        "Automated bid-evaluation workflows with Python and Excel macros, reducing manual processing time by ~30% and saving 40+ staff hours.",
        "Designed Tableau and Power BI dashboards to monitor procurement KPIs and accelerate decision-making.",
        "Led vendor-quality analysis and procurement recommendations that lowered data costs by ~10%."
      ],
      skills: ["Excel Macros", "Automation", "Data Cleaning", "Tableau", "Power BI", "Reporting", "Git"]
    }
  ]

  return (
    <section id="experience" className="py-12 px-4 anchor-offset">
      <div className="max-w-7xl mx-auto">
        {/* Text cell - Section heading */}
        <div className="colab-text-cell mb-4">
          <h2 className="text-3xl font-bold">Professional Experience</h2>
        </div>

        {/* Code cells - Experience entries */}
        {experiences.map((exp, index) => {
          const code = `# ${exp.title} | ${exp.company}\n# ${exp.period} | ${exp.location}\n'''\n  ${exp.description.map(d => `• ${d}`).join("\n  ")}\n'''\n# Skills: ${exp.skills.join(', ')}`
          return (
            <CodeBlock
              key={index}
              className="colab-code-cell ml-12 mb-6 flex gap-4 group"
              code={code}
              executionNumber={index + 1}
              onExecute={() => {}}
            />
          )
        })}
      </div>
    </section>
  )
}
