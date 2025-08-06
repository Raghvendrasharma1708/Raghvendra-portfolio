import { Card } from "@/components/ui/card";
import { 
  Code, 
  Database, 
  Globe, 
  Smartphone, 
  Users, 
  Lightbulb,
  MessageCircle,
  Target
} from "lucide-react";

const Skills = () => {
  const technicalSkills = [
    {
      category: "Programming Languages",
      skills: ["Java", "JavaScript", "Python", "TypeScript"],
      icon: Code,
      color: "text-primary"
    },
    {
      category: "Frontend",
      skills: ["React", "HTML", "CSS", "Tailwind CSS"],
      icon: Globe,
      color: "text-secondary"
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express", "MongoDB", "SQL"],
      icon: Database,
      color: "text-primary"
    },
    {
      category: "Tools & Libraries",
      skills: ["GSAP", "Framer Motion", "Socket.IO"],
      icon: Smartphone,
      color: "text-secondary"
    }
  ];

  const softSkills = [
    {
      name: "Communication",
      icon: MessageCircle,
      description: "Clear and effective communication with team members and clients"
    },
    {
      name: "Problem-solving",
      icon: Lightbulb,
      description: "Analytical thinking and creative solutions to complex challenges"
    },
    {
      name: "Teamwork",
      icon: Users,
      description: "Collaborative approach and ability to work well in diverse teams"
    },
    {
      name: "Goal-oriented",
      icon: Target,
      description: "Focused on delivering high-quality results within deadlines"
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
            A comprehensive set of technical and soft skills that enable me to build robust, scalable applications
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