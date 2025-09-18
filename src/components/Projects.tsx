import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, BarChart3, Database, TrendingUp, Users, Calendar, Search, Target, Trophy, Activity } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "Ancestry Grid for Carnegie Classification of Institutions of Higher Education",
      description: "A concise, interactive tool for exploring the historical lineage of U.S. higher education institutions using Carnegie Classification data from 1973–2021.",
      longDescription: "This comprehensive data visualization tool provides deep insights into the evolution of higher education institutions across five decades, with efficient data partitioning and incremental rendering.",
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
      dataStructure: [
        "Institution names (current and historical)",
        "Carnegie classification by year",
        "Merger/absorption events and years",
        "Successor/predecessor links",
        "Degree-granting status"
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
      image: "/lovable-uploads/b7cc5e19-b229-483c-8f53-e52201f72fbb.png"
    },
    {
      title: "USDA Food Distribution Program Analysis",
      description: "Comprehensive analysis of USDA Food and Nutrition Service's food distribution programs, focusing on State of Origin data for USDA Foods products from FY11 to FY23.",
      longDescription: "This project provides insights into purchasing trends and highlights where products were processed and packaged, supporting local agricultural markets with strategic procurement optimization.",
      features: [
        {
          icon: <TrendingUp className="w-4 h-4" />,
          title: "Trend Analysis",
          description: "Identify top-selling USDA Foods and understand slow-moving goods over time"
        },
        {
          icon: <Database className="w-4 h-4" />,
          title: "Multi-dimensional Filtering",
          description: "Filter by year (FY11–FY23), region, and congregation size for detailed insights"
        },
        {
          icon: <BarChart3 className="w-4 h-4" />,
          title: "State-level Analytics",
          description: "Detailed state information including purchase volumes, values, and product variety"
        },
        {
          icon: <Users className="w-4 h-4" />,
          title: "Strategic Planning",
          description: "Support local agriculture markets and optimize procurement strategies"
        }
      ],
      filters: [
        "Year (FY11–FY23)",
        "Region (Central, East, West)",
        "Number of Congregations (0k–1k, 1k–3k, 3k–6k, 6k+)"
      ],
      insights: [
        "Top Seller: Most purchased product in pounds",
        "High Demand Goods: Products with consistently high purchase volume",
        "Slow Mover Goods: Products with low purchase frequency",
        "Percentage of Purchased Quantity and Value by state",
        "Total Variety of Goods Purchased per state"
      ],
      technologies: ["Python", "Tableau", "Pandas", "Data Visualization", "USDA APIs"],
      period: "FY11 - FY23",
      github: "https://github.com/1adityakadam",
      image: "/lovable-uploads/c5629d05-81cb-416b-b75d-50008bfac0b1.png"
    },
    {
      title: "Uber Data Analytics End-to-End Project",
      description: "Comprehensive data analytics project using TLC Trip Record Data from November 2024, implementing end-to-end pipeline with Google BigQuery and Looker Studio.",
      longDescription: "Real-time data pipeline and visualization system for NYC Yellow Taxi trip analysis, featuring structured fact and dimension tables with cloud-based processing and interactive dashboards.",
      features: [
        {
          icon: <Database className="w-4 h-4" />,
          title: "Data Modeling",
          description: "Transformed raw parquet data into structured fact and dimension tables"
        },
        {
          icon: <TrendingUp className="w-4 h-4" />,
          title: "Cloud Pipeline",
          description: "Implemented Mage-AI for ETL with Google Cloud Storage and BigQuery integration"
        },
        {
          icon: <BarChart3 className="w-4 h-4" />,
          title: "Interactive Dashboard",
          description: "Real-time visualization in Google Looker Studio with comprehensive trip analytics"
        },
        {
          icon: <Users className="w-4 h-4" />,
          title: "Performance Optimization",
          description: "Efficient querying and data partitioning for fast response times"
        }
      ],
      dataSource: [
        "TLC Trip Record Data (November 2024)",
        "NYC Taxi and Limousine Commission",
        "Yellow Taxi Trip Records via TPEP/LPEP programs"
      ],
      technologies: ["Python", "Mage-AI", "Google BigQuery", "Google Looker Studio", "Google Cloud Storage", "Pandas", "NumPy"],
      period: "Nov 2024",
      github: "https://github.com/1adityakadam",
      image: "/lovable-uploads/ef29be68-9fb4-4c32-aa90-34cad5f4e864.png"
    },
    {
      title: "IndyGo On-Time Performance Analysis",
      description: "Comprehensive Power BI dashboard analyzing IndyGo's on-time performance by measuring the percentage of trips operating within scheduled time thresholds.",
      longDescription: "Service reliability analysis dashboard providing insights into OTP trends across timeframes, route categories, and individual routes, serving transit system optimization goals.",
      features: [
        {
          icon: <BarChart3 className="w-4 h-4" />,
          title: "Performance Metrics",
          description: "Overall monthly on-time performance by day of service (Weekday, Saturday, Sunday)"
        },
        {
          icon: <TrendingUp className="w-4 h-4" />,
          title: "Route Analysis",
          description: "OTP variation across route categories, service frequency, and rapid transit"
        },
        {
          icon: <Calendar className="w-4 h-4" />,
          title: "Temporal Insights",
          description: "OTP trends over 12 months with peak vs non-peak hour comparisons"
        },
        {
          icon: <Database className="w-4 h-4" />,
          title: "Real-time Data",
          description: "GPS trackers and Automatic Passenger Counters (APCs) integration"
        }
      ],
      businessQuestions: [
        "Monthly on-time performance by day of service",
        "OTP variation across route categories and service frequency",
        "OTP trends for specific routes over 12 months",
        "OTP changes across different time frames",
        "Peak vs non-peak hour performance differences"
      ],
      technologies: ["Power BI", "Python", "GPS Data Integration", "APC Systems", "Data Analytics"],
      period: "12-month analysis",
      github: "https://github.com/1adityakadam",
      image: "/lovable-uploads/8fdc002a-18d3-4999-81b4-79369449b3b5.png"
    },
    {
      title: "Sports Analytics: Cricket Data Insights",
      description: "Comprehensive analysis of T20 Cricket World Cup 2022 focused on strategic team selection and player performance evaluation for England's championship victory against Pakistan.",
      longDescription: "This analysis aimed to build a balanced squad capable of scoring 180 runs regularly while defending targets of 150 runs, integrating practical strategy with data-driven evaluation through interactive Power BI dashboards.",
      features: [
        {
          icon: <Target className="w-4 h-4" />,
          title: "Strategic Team Selection",
          description: "Build balanced squad for scoring 180+ runs and defending 150+ targets"
        },
        {
          icon: <Database className="w-4 h-4" />,
          title: "Web Scraping Pipeline",
          description: "Data collection from ESPNcricinfo using BrightData, converted to structured JSON format"
        },
        {
          icon: <BarChart3 className="w-4 h-4" />,
          title: "Interactive Dashboard",
          description: "Power BI visualizations with hover-enabled player metrics and detailed insights"
        },
        {
          icon: <Users className="w-4 h-4" />,
          title: "Player Role Classification",
          description: "Defined positions using metrics like average, strike rate, and boundary-scoring ability"
        },
        {
          icon: <Activity className="w-4 h-4" />,
          title: "Performance Analytics",
          description: "Comprehensive batting and bowling statistics with match history analysis"
        },
        {
          icon: <Trophy className="w-4 h-4" />,
          title: "Final XI Selection",
          description: "Complete team selection summary with batting and bowling achievements"
        }
      ],
      dataSource: [
        "ESPNcricinfo T20 World Cup 2022 match data",
        "Player statistics and match histories",
        "Team performance metrics and outcomes"
      ],
      playerRoles: [
        "Openers: Focus on strike rate and boundary percentage",
        "Power Hitters: Emphasis on six-hitting ability and acceleration",
        "Middle Order: Consistency metrics and pressure situation performance",
        "Finishers: Death overs performance and match-winning capability",
        "All Rounders: Balanced batting and bowling contributions",
        "Fast Bowlers: Wicket-taking ability and economy rate analysis"
      ],
      dashboardFeatures: [
        "Interactive player row hover for detailed metrics",
        "Historical performance analysis by position",
        "Match outcome correlation with player selection",
        "Team composition optimization tools",
        "Player comparison and ranking systems"
      ],
      technologies: ["Power BI", "Python", "Pandas", "BrightData", "Web Scraping", "JSON Processing", "Power Query", "DAX"],
      period: "T20 World Cup 2022",
      github: "https://github.com/1adityakadam",
      image: "/lovable-uploads/c0b3cfa2-690d-4800-ac8a-0162be93af29.png"
    }
  ]

  return (
    <section id="projects" className="py-20 glass-section">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcasing data science projects that solve real-world problems through analytics and visualization
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="group glass hover:bg-accent/10 transition-all duration-300 hover:scale-[1.02] overflow-hidden">
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
                   {(project.github) && (
                     <div className="flex gap-2">
                       {project.github && (
                        <Button variant="ghost" size="sm" asChild>
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4" />
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
                
                {project.dataStructure && (
                  <div className="mb-4">
                    <p className="text-sm font-medium mb-2">Data Structure:</p>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      {project.dataStructure.map((item, idx) => (
                        <li key={idx} className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
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

                {project.filters && (
                  <div className="mb-4">
                    <p className="text-sm font-medium mb-2">Available Filters:</p>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      {project.filters.map((filter, idx) => (
                        <li key={idx} className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                          {filter}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {project.insights && (
                  <div className="mb-4">
                    <p className="text-sm font-medium mb-2">Key Insights:</p>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      {project.insights.map((insight, idx) => (
                        <li key={idx} className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                          {insight}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {project.dataSource && (
                  <div className="mb-4">
                    <p className="text-sm font-medium mb-2">Data Sources:</p>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      {project.dataSource.map((source, idx) => (
                        <li key={idx} className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                          {source}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {project.businessQuestions && (
                  <div className="mb-4">
                    <p className="text-sm font-medium mb-2">Business Questions Addressed:</p>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      {project.businessQuestions.map((question, idx) => (
                        <li key={idx} className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                          {question}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {project.playerRoles && (
                  <div className="mb-4">
                    <p className="text-sm font-medium mb-2">Player Role Classifications:</p>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      {project.playerRoles.map((role, idx) => (
                        <li key={idx} className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                          {role}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {project.dashboardFeatures && (
                  <div className="mb-4">
                    <p className="text-sm font-medium mb-2">Dashboard Features:</p>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      {project.dashboardFeatures.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                          {feature}
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