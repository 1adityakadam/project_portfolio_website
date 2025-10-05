import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Calendar, MapPin, BookOpen } from "lucide-react"

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
        {education.map((edu, index) => (
          <div key={index} className="colab-code-cell ml-12 mb-6">
            <div className="space-y-3">
              <div className="code-comment text-lg font-bold">
                # {edu.degree}
              </div>
              <div className="code-comment text-base">
                # {edu.institution} | {edu.location}
              </div>
              <div className="code-comment text-sm">
                # {edu.period} | Status: {edu.status}
              </div>
              <div className="code-string mt-4">
                '''
              </div>
              <div className="pl-4 text-foreground">
                {edu.description}
              </div>
              <div className="pl-4 text-foreground mt-4">
                <div className="font-bold mb-2">Relevant Coursework:</div>
                <div className="flex flex-wrap gap-2">
                  {edu.relevantCourses.map((course, idx) => (
                    <span key={idx}>
                      {course}{idx < edu.relevantCourses.length - 1 ? " |" : ""}
                    </span>
                  ))}
                </div>
              </div>
              <div className="code-string">
                '''
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}