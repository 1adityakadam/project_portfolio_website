import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"

export function Experience() {
  const experiences = [
    {
      title: "Data Analyst",
      company: "Indiana University School of Education",
      location: "Bloomington, IN, USA",
      period: "Apr 2025 – Present",
      description: [
        "Performed statistical analysis of education metrics using Python (pandas) to uncover ancestry trends",
        "Designed HTML and CSS based front-end visualization for non-technical stakeholders",
        "Monitored data quality and performed root-cause analysis on inconsistencies, data cleaning checks to improve analysis"
      ],
      skills: ["Python", "Pandas", "Statistical Analysis", "HTML/CSS", "Data Visualization"]
    },
    {
      title: "Data Analyst",
      company: "Nice Consultancy",
      location: "Mumbai, MH, India",
      period: "Jul 2022 – Jun 2024",
      description: [
        "Implemented 95% of vendor selections against defined technical instrument index database, leveraging Excel to organize and analyze technical data for over 500+ instrumentation components",
        "Improved the bid evaluation process by automating data extraction and vendor specifications against detailed instrumentation component data and guaranteeing compliance with industry standards and regulations",
        "Improved the flow of evaluation process by automating data extraction from vendor specification sheets, reducing evaluation time by 30% and saving 40+ hours per month for the team",
        "Led data analysis processes for enhancing the efficiency of bid evaluations and technical clarifications by 20%",
        "Developed 5+ comprehensive technical dashboards using Tableau, synthesizing critical instrumentation metrics and facilitating informed decision-making for project stakeholders and streamlined operational workflows",
        "Reviewed post-order documentation to validate compliance with predefined standards, reducing errors in instrumentation procurement by 15%"
      ],
      skills: ["Excel", "Tableau", "Data Analysis", "Process Automation", "Technical Documentation"]
    }
  ]

  return (
    <section id="experience" className="py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Experience</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Driving data-driven decisions across education and consulting sectors
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border/50">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {exp.title}
                    </CardTitle>
                    <p className="text-lg font-semibold text-primary">{exp.company}</p>
                  </div>
                  <div className="flex flex-col md:items-end gap-2">
                    <div className="flex items-center text-sm text-muted-foreground">
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
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
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