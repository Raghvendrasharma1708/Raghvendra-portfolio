import { Card } from "@/components/ui/card";
import { 
  Code, 
  Database, 
  BarChart3, 
  Brain, 
  Users, 
  Lightbulb,
  MessageCircle,
  Target
} from "lucide-react";

const Skills = () => {
  const technicalSkills = [
    {
      category: "Programming & Analytics",
      skills: ["Python", "SQL", "Advanced Excel", "R"],
      icon: Code,
      color: "text-primary"
    },
    {
      category: "Data Visualization & BI",
      skills: ["Power BI", "Tableau", "DAX", "Matplotlib"],
      icon: BarChart3,
      color: "text-secondary"
    },
    {
      category: "Machine Learning & Statistics",
      skills: ["Scikit-learn", "Pandas", "NumPy", "PySpark"],
      icon: Brain,
      color: "text-primary"
    },
    {
      category: "ETL & Data Engineering",
      skills: ["PostgreSQL", "MySQL", "Git", "n8n"],
      icon: Database,
      color: "text-secondary"
    }
  ];

  const softSkills = [
    {
      name: "Data Storytelling",
      icon: MessageCircle,
      description: "Translating complex datasets into actionable business recommendations"
    },
    {
      name: "Analytical Thinking",
      icon: Lightbulb,
      description: "Problem-solving through statistical analysis and data-driven approaches"
    },
    {
      name: "Cross-Functional Collaboration",
      icon: Users,
      description: "Working with stakeholders to align analytics with business objectives"
    },
    {
      name: "Results-Driven",
      icon: Target,
      description: "Focused on delivering measurable impact through data insights and KPIs"
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            My <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive set of technical and analytical skills enabling data-driven decision making and predictive modeling
          </p>
        </div>

        {/* Technical Skills */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-center mb-12">Technical Skills</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technicalSkills.map((category, index) => (
              <Card key={index} className="card-tech text-center group">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-card-border flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className={`w-8 h-8 ${category.color}`} />
                </div>
                <h4 className="text-lg font-semibold mb-3">{category.category}</h4>
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="inline-block px-3 py-1 bg-muted rounded-full text-sm mr-2 mb-2"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div>
          <h3 className="text-2xl font-semibold text-center mb-12">Soft Skills</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {softSkills.map((skill, index) => (
              <Card key={index} className="card-tech text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <skill.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold mb-3">{skill.name}</h4>
                <p className="text-muted-foreground text-sm">{skill.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
