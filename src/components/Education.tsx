import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Calendar, MapPin, BookOpen } from "lucide-react"
import { CodeBlock } from "@/components/CodeBlock"

export function Education() {
  const education = [
    {
      degree: "Master of Science in Data Science",
      institution: "Indiana University Bloomington",
      location: "Bloomington, IN, USA",
      period: "Aug 2024 - May 2026",
      status: "In Progress",
      description: "Advanced coursework in machine learning, statistical modeling, big data analytics, and data visualization techniques.",
      relevantCourses: [
        "Machine Learning",
        "Statistical Modeling", 
        "Big Data Analytics",
        "Data Visualization",
        "Deep Learning",
        "Applied Statistics"
      ]
    },
    {
      degree: "Bachelor of Engineering in Instrumentation",
      institution: "University of Mumbai",
      location: "Mumbai, MH, India", 
      period: "Aug 2018 - Jun 2022",
      status: "Completed",
      description: "Comprehensive engineering program focusing on instrumentation systems, control theory, and data acquisition technologies.",
      relevantCourses: [
        "Control Systems",
        "Data Acquisition",
        "Signal Processing", 
        "Instrumentation Design",
        "Process Control",
        "Engineering Mathematics"
      ]
    }
  ]

  return (
    <section id="education" className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Text cell - Section heading */}
        <div className="colab-text-cell mb-4">
          <h2 className="text-3xl font-bold">Education</h2>
        </div>

        {/* Code cells - Education entries */}
        {education.map((edu, index) => {
          const coursework = edu.relevantCourses.map((c, i) => `${i < edu.relevantCourses.length - 1 ? c + ' |' : c}`).join(' ')
          const code = `# ${edu.degree}\n# ${edu.institution} | ${edu.location}\n# ${edu.period} | Status: ${edu.status}\n'''\n  ${edu.description}\n  Relevant Coursework: ${coursework}\n'''`
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