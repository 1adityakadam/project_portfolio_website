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
    <section 
      id="education" 
      className="py-20"
      style={{
        background: 'hsl(var(--section-education))'
      }}
    >
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary font-playfair">Education</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-lora">
            Academic foundation in data science and engineering principles
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <Card key={index} className="group glass hover:bg-accent/10 transition-all duration-300 hover:scale-[1.02]">
              <CardHeader>
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="text-primary mt-1">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <div>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {edu.degree}
                      </CardTitle>
                      <p className="text-lg font-semibold text-primary mt-1">{edu.institution}</p>
                    </div>
                  </div>
                  <div className="flex flex-col lg:items-end gap-2">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-2" />
                      {edu.period}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 mr-2" />
                      {edu.location}
                    </div>
                    <Badge 
                      variant={edu.status === "In Progress" ? "default" : "secondary"}
                      className="w-fit"
                    >
                      {edu.status}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">{edu.description}</p>
                
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <BookOpen className="w-4 h-4 text-primary" />
                    <h4 className="font-semibold">Relevant Coursework</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {edu.relevantCourses.map((course, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {course}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}