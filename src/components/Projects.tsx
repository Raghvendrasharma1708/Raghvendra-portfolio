import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Activity, TrendingUp, Database } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Hospital Readmission Prediction",
      subtitle: "Healthcare Analytics & Machine Learning",
      description: "End-to-end healthcare analytics project predicting 30-day hospital readmissions for diabetes patients. Identifies high-risk patients to enable proactive intervention, reduce costs, and improve patient outcomes.",
      techStack: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn"],
      features: ["Predictive Analytics", "Data Engineering", "Statistical Modeling", "Healthcare Insights"],
      icon: Activity,
      gradient: "from-primary to-secondary",
      githubUrl: "https://github.com/Raghvendrasharma1708/End-to-End-Healthcare-Analytics-Project.git",
      liveUrl: null
    },
    {
      title: "Retail Marketing Analytics",
      subtitle: "Financial Operations & Customer Intelligence",
      description: "Comprehensive financial analytics transforming transaction data into strategic business intelligence. Revenue forecasting, customer churn prediction, RFM segmentation, and CLV optimization for data-driven decision making.",
      techStack: ["Python", "Pandas", "Scikit-learn", "Prophet", "Statsmodels", "Matplotlib"],
      features: ["Time Series Forecasting", "Churn Prediction", "RFM Segmentation", "CLV Analysis"],
      icon: TrendingUp,
      gradient: "from-secondary to-primary",
      githubUrl: "https://github.com/Raghvendrasharma1708/Retail-Marketing-Analytics-Project.git",
      liveUrl: null
    },
    {
      title: "Supply Chain Analytics & Automation",
      subtitle: "ETL Pipeline & Real-time KPI Tracking",
      description: "Automated end-to-end supply chain analytics system with n8n workflows. Tracks 8 critical KPIs including line fill rate, OTIF, and inventory turnover. Achieved 99% data accuracy and 40% reduction in data cleaning time.",
      techStack: ["N8N", "Quadratic AI", "SQL", "PostgreSQL", "Python"],
      features: ["Automated ETL Pipeline", "Real-time KPI Tracking", "99% Data Accuracy", "Multi-source Integration"],
      icon: Database,
      gradient: "from-primary to-purple-500",
      githubUrl: "https://github.com/Raghvendrasharma1708/End-to-End-Supply-Chain-Analytics-and-Automation-N8N-Quadratic-AI-Supabase.git",
      liveUrl: null
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            My <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real-world data analytics projects demonstrating end-to-end solutions from data modeling to predictive insights
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="card-tech group relative overflow-hidden">
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${project.gradient} opacity-10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500`} />
              
              <div className="relative z-10">
                <div className={`w-16 h-16 mb-6 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <project.icon className="w-8 h-8 text-white" />
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                    <p className="text-primary font-medium">{project.subtitle}</p>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-primary mb-3">Key Features</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {project.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="text-xs text-muted-foreground">
                        • {feature}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-primary mb-3">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-muted rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  
                  <Button
                    asChild
                    size="sm"
                    className="flex-1 gradient-primary text-primary-foreground"
                  >
                    
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Project
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            asChild
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3"
          >
            
              href="https://github.com/Raghvendrasharma1708"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View all projects on GitHub - opens in a new tab"
            >
              View All Projects on GitHub
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
