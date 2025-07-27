import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, BarChart3, Database, TrendingUp, Users, Calendar, Search } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "U.S. Higher Education Institution Lineage Explorer",
      description: "A concise, interactive tool for exploring the historical lineage of U.S. higher education institutions using Carnegie Classification data from 1973–2021.",
      longDescription: "This comprehensive data visualization tool provides deep insights into the evolution of higher education institutions across five decades.",
      features: [
        {
          icon: <Search className="w-4 h-4" />,
          title: "Dropdown Selection",
          description: "Choose institutions from an alphabetical, searchable dropdown"
        },
        {
          icon: <Calendar className="w-4 h-4" />,
          title: "Historical Names",
          description: "View current, past, and future names for each institution"
        },
        {
          icon: <TrendingUp className="w-4 h-4" />,
          title: "Timeline Visualization",
          description: "See institutional changes, mergers, absorptions, and degree status by year"
        },
        {
          icon: <Database className="w-4 h-4" />,
          title: "Efficient Loading",
          description: "Data partitioned into 10 institute name chunks (~60,000 rows) for fast, responsive UI"
        }
      ],
      classifications: [
        "Doctoral Universities (R1, R2, R3)",
        "Master's Colleges & Universities",
        "Baccalaureate Colleges",
        "Associate's Colleges",
        "Special Focus Institutions",
        "Tribal Colleges"
      ],
      technologies: ["Python", "Pandas", "Interactive Dashboards", "Data Visualization", "Carnegie Classification"],
      github: "https://github.com/1adityakadam",
      demo: "#",
      image: "/lovable-uploads/03bc8d04-9fea-4cf3-8a55-0b284c26dc68.png"
    },
    {
      title: "IndyCo Analytics Dashboard",
      description: "Comprehensive Power BI dashboard analyzing USDA's $5.06B OTP data trends and route efficiency for transportation optimization.",
      features: [
        {
          icon: <BarChart3 className="w-4 h-4" />,
          title: "Performance Metrics",
          description: "Real-time analysis of route efficiency and data trends"
        },
        {
          icon: <TrendingUp className="w-4 h-4" />,
          title: "Trend Analysis",
          description: "Historical data visualization with predictive insights"
        }
      ],
      technologies: ["Python", "Tableau", "NumPy", "Pandas", "Power BI"],
      period: "Mar 2025 - Apr 2025"
    },
    {
      title: "USDA Food Distribution Dashboard",
      description: "Advanced Tableau dashboard analyzing USDA's food distribution data with multi-dimensional filtering and trend analysis.",
      features: [
        {
          icon: <Database className="w-4 h-4" />,
          title: "Data Processing",
          description: "Processed and analyzed large-scale USDA datasets"
        },
        {
          icon: <Users className="w-4 h-4" />,
          title: "Stakeholder Insights",
          description: "Enabled faster decision-making through interactive visualizations"
        }
      ],
      technologies: ["Python", "Tableau", "NumPy", "Pandas"],
      period: "Feb 2025 - Mar 2025"
    },
    {
      title: "Uber Data Analytics Dashboard",
      description: "Real-time data pipeline and visualization system for NYC taxi trip analysis using Mage-AI and modern data tools.",
      features: [
        {
          icon: <TrendingUp className="w-4 h-4" />,
          title: "Real-time Processing",
          description: "Constructed resilient data pipeline merging 10,000+ daily NYC taxi trip records"
        },
        {
          icon: <BarChart3 className="w-4 h-4" />,
          title: "Performance Optimization",
          description: "Enabled 40% faster query execution through partitioned fact tables"
        }
      ],
      technologies: ["Python", "Mage-AI", "BigQuery", "Looker Studio", "Pandas", "NumPy"],
      period: "Jan 2025 - Feb 2025"
    }
  ]

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcasing data science projects that solve real-world problems through analytics and visualization
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-border/50 overflow-hidden">
              {project.image && (
                <div className="aspect-video overflow-hidden bg-muted">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    {project.period && (
                      <p className="text-sm text-muted-foreground mt-1">{project.period}</p>
                    )}
                  </div>
                  {(project.github || project.demo) && (
                    <div className="flex gap-2">
                      {project.github && (
                        <Button variant="ghost" size="sm" asChild>
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4" />
                          </a>
                        </Button>
                      )}
                      {project.demo && (
                        <Button variant="ghost" size="sm" asChild>
                          <a href={project.demo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </Button>
                      )}
                    </div>
                  )}
                </div>
                <CardDescription className="text-base">
                  {project.description}
                </CardDescription>
                {project.longDescription && (
                  <p className="text-sm text-muted-foreground">{project.longDescription}</p>
                )}
              </CardHeader>
              <CardContent>
                {project.features && (
                  <div className="space-y-3 mb-6">
                    {project.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="text-primary mt-0.5">{feature.icon}</div>
                        <div>
                          <p className="font-medium text-sm">{feature.title}</p>
                          <p className="text-xs text-muted-foreground">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                
                {project.classifications && (
                  <div className="mb-4">
                    <p className="text-sm font-medium mb-2">Classification Categories:</p>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      {project.classifications.map((cat, idx) => (
                        <li key={idx} className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                          {cat}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {tech}
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