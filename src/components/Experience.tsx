import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"

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
    <section 
      id="experience" 
      className="py-20"
      style={{
        background: 'hsl(var(--section-experience))'
      }}
    >
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary font-playfair">
            Professional Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-lora">
            Driving data-driven decisions across education, technology, and consulting sectors
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="glass hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-2xl font-bold text-foreground font-playfair">
                      {exp.title}
                    </CardTitle>
                    <p className="text-xl font-semibold text-primary mt-1">{exp.company}</p>
                  </div>
                  <div className="flex flex-col md:items-end gap-2">
                    <div className="flex items-center text-sm text-muted-foreground font-courier">
                      <Calendar className="w-4 h-4 mr-2" />
                      {exp.period}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 mr-2" />
                      {exp.location}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-foreground leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs font-courier">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
