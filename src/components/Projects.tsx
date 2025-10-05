import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ChevronDown, ChevronUp } from "lucide-react"
import { useMemo, useState } from "react"
import { CodeBlock } from "@/components/CodeBlock"

export function Projects() {
  const [showAll, setShowAll] = useState(false)
  
  const projects = [
    {
      title: "Ancestry Grid for Carnegie Classification of Institutions of Higher Education",
      description: "A concise, interactive tool for exploring the historical lineage of U.S. higher education institutions using Carnegie Classification data from 1973–2021.",
      technologies: ["Python", "Pandas", "Interactive Dashboards", "Data Visualization", "Carnegie Classification"],
      github: "https://github.com/1adityakadam/Carnegie-classifications-ancestry-grid",
    },
    {
      title: "USDA Food Distribution Program Analysis",
      description: "Comprehensive analysis of USDA Food and Nutrition Service's food distribution programs, focusing on State of Origin data for USDA Foods products from FY11 to FY23.",
      technologies: ["Python", "Tableau", "Pandas", "Data Visualization", "USDA APIs"],
      period: "FY11 - FY23",
      github: "https://github.com/1adityakadam/USDA_food_distribution_analysis",
    },
    {
      title: "Uber Data Analytics End-to-End Project",
      description: "Comprehensive data analytics project using TLC Trip Record Data from November 2024, implementing end-to-end pipeline with Google BigQuery and Looker Studio.",
      technologies: ["Python", "Mage-AI", "Google BigQuery", "Google Looker Studio", "Google Cloud Storage", "Pandas", "NumPy"],
      period: "Nov 2024",
      github: "https://github.com/1adityakadam/Uber_data_analytics",
    },
    {
      title: "IndyGo On-Time Performance Analysis",
      description: "Comprehensive Power BI dashboard analyzing IndyGo's on-time performance by measuring the percentage of trips operating within scheduled time thresholds.",
      technologies: ["Power BI", "Python", "GPS Data Integration", "APC Systems", "Data Analytics"],
      period: "12-month analysis",
      github: "https://github.com/1adityakadam/Indygo_OTP_analysis",
    },
    {
      title: "Sports Analytics: Cricket Data Insights",
      description: "Comprehensive analysis of T20 Cricket World Cup 2022 focused on strategic team selection and player performance evaluation for England's championship victory against Pakistan.",
      technologies: ["Power BI", "Python", "Pandas", "BrightData", "Web Scraping", "JSON Processing", "Power Query", "DAX"],
      period: "T20 World Cup 2022",
      github: "https://github.com/1adityakadam/Sports_Analytics_Cricket_Data_Insights",
    },
    {
      title: "Air Pollution Forecasting using LSTM",
      description: "An LSTM neural network model to predict PM2.5 pollution levels in the next hour using weather conditions and current pollution levels.",
      technologies: ["Python", "LSTM", "TensorFlow", "Keras", "Pandas", "Time Series Analysis"],
      period: "5-year dataset",
      github: "https://github.com/jyoti0225/Air-Pollution-Forecasting",
    },
    {
      title: "Content-Based Movie Recommender System",
      description: "End-to-end movie recommendation system using content-based filtering with NLP techniques and live poster fetching via TMDb API.",
      technologies: ["Python", "Streamlit", "NLP", "scikit-learn", "NLTK", "TMDb API", "Heroku"],
      github: "https://github.com/1adityakadam/Content-Based-Movie-Recommender-System",
    },
    {
      title: "Multi-Model Car Acceptability Classification",
      description: "Car acceptability classification using multiple machine learning models including Multinomial Linear Regression, SVM, Random Forest, and Ensemble methods.",
      technologies: ["Python", "scikit-learn", "Random Forest", "SVM", "Ensemble Methods", "Pandas"],
      github: "https://github.com/1adityakadam/Multi-Model-Car-Acceptability-Classification",
    },
    {
      title: "Netflix Data Analysis with DBT & Snowflake",
      description: "End-to-end ELT pipeline using Amazon S3, Snowflake, and dbt for MovieLens dataset analytics with BI dashboard integration.",
      technologies: ["dbt", "Snowflake", "Amazon S3", "SQL", "Looker Studio", "Power BI", "Tableau"],
      github: "https://github.com/1adityakadam/Netflix_data_analysis",
    },
    {
      title: "Air Quality Index Prediction using LSTM",
      description: "Univariate LSTM model for predicting PM2.5 levels as AQI proxy using 4 years of hourly air quality data from China.",
      technologies: ["Python", "LSTM", "Keras", "Time Series", "Data Visualization"],
      github: "https://github.com/jyoti0225/Air-Quality-Index-Prediction-using-LSTM",
    },
    {
      title: "Tweet Classification using NLP Techniques",
      description: "Binary classification of disaster-related tweets using multiple NLP approaches including TF-IDF, Word2Vec, and ensemble methods.",
      technologies: ["Python", "NLTK", "scikit-learn", "XGBoost", "Word2Vec", "CountVectorizer"],
      github: "https://github.com/1adityakadam/Tweet-Classification-using-NLP-Techniques",
    }
  ]

  // Build a compact code-like string used in slider cards
  const buildProjectSnippet = (p: typeof projects[number]) => {
    return `# ${p.title}\n'''\n  ${p.description}\n'''\n# Tech: ${p.technologies.slice(0, 4).join(', ')}`
  }

  return (
    <section id="projects" className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Text cell - Section heading */}
        <div className="colab-text-cell mb-4">
          <h2 className="text-3xl font-bold">Featured Projects</h2>
        </div>

        {/* Sliding Projects Container */}
        {!showAll && (
          <div className="relative overflow-hidden w-full mb-8">
            <div className="flex gap-8 w-max animate-[slide-right_60s_linear_infinite]">
              {/* First set of projects */}
              {projects.slice(0, 6).map((project, index) => (
                <div 
                  key={`first-${index}`} 
                  className="flex-shrink-0"
                  onMouseEnter={(e) => {
                    const parent = e.currentTarget.parentElement;
                    if (parent) parent.style.animationPlayState = 'paused';
                  }}
                  onMouseLeave={(e) => {
                    const parent = e.currentTarget.parentElement;
                    if (parent) parent.style.animationPlayState = 'running';
                  }}
                >
                  <CodeBlock
                    className="colab-code-cell ml-12 w-[450px] flex gap-4 group"
                    code={buildProjectSnippet(project)}
                    executionNumber={index + 1}
                    onExecute={() => {}}
                  />
                  {project.github && (
                    <div className="mt-2">
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm flex items-center gap-2">
                        <Github className="w-4 h-4" />
                        View on GitHub
                      </a>
                    </div>
                  )}
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {projects.slice(0, 6).map((project, index) => (
                <div 
                  key={`second-${index}`} 
                  className="flex-shrink-0"
                  onMouseEnter={(e) => {
                    const parent = e.currentTarget.parentElement;
                    if (parent) parent.style.animationPlayState = 'paused';
                  }}
                  onMouseLeave={(e) => {
                    const parent = e.currentTarget.parentElement;
                    if (parent) parent.style.animationPlayState = 'running';
                  }}
                >
                  <CodeBlock
                    className="colab-code-cell ml-12 w-[450px] flex gap-4 group"
                    code={buildProjectSnippet(project)}
                    executionNumber={index + 1}
                    onExecute={() => {}}
                  />
                  {project.github && (
                    <div className="mt-2">
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm flex items-center gap-2">
                        <Github className="w-4 h-4" />
                        View on GitHub
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
            {/* Fade overlays */}
            <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-background to-transparent pointer-events-none z-10"></div>
            <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-background to-transparent pointer-events-none z-10"></div>
          </div>
        )}

        {/* Toggle Button */}
        <div className="text-center mb-8">
          <Button 
            onClick={() => setShowAll(!showAll)}
            variant="outline"
            size="lg"
            className="gap-2"
          >
            {showAll ? (
              <>
                <ChevronUp className="w-5 h-5" />
                Hide All Projects
              </>
            ) : (
              <>
                <ChevronDown className="w-5 h-5" />
                View All Projects
              </>
            )}
          </Button>
        </div>

        {/* Expanded Code Cells */}
        {showAll && (
          <div className="space-y-4 animate-fade-in">
            {projects.map((project, index) => (
              <div key={`static-${index}`} className="colab-code-cell ml-12">
                <CodeBlock
                  code={`# ${project.title}${project.period ? `\n# Period: ${project.period}` : ''}\n'''\n  ${project.description}\n'''\n# Technologies: ${project.technologies.join(' | ')}`}
                  executionNumber={index + 1}
                  onExecute={() => {}}
                />
                {project.github && (
                  <div className="mt-3">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline flex items-center gap-2">
                      <Github className="w-5 h-5" />
                      View Repository
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
