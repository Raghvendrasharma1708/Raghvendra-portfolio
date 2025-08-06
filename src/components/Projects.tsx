import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Star, Users, MessageSquare, DollarSign } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "CareerBridge",
      subtitle: "Portfolio & Placement Platform",
      description: "Helps startups find candidates with unlockable profiles, Auth0 login, Stripe payment, Gemini AI portfolio rating, PDF resume download.",
      techStack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Gemini API", "Stripe", "Auth0"],
      features: ["AI Portfolio Rating", "Secure Authentication", "Payment Integration", "PDF Generation"],
      icon: Star,
      gradient: "from-primary to-secondary"
    },
    {
      title: "Group Chat App",
      subtitle: "Real-time Communication",
      description: "Real-time group chat with document sharing using Socket.IO for seamless communication experience.",
      techStack: ["HTML", "CSS", "JavaScript", "Node.js", "Express", "Socket.IO"],
      features: ["Real-time Messaging", "Document Sharing", "Group Management", "Live Notifications"],
      icon: MessageSquare,
      gradient: "from-secondary to-primary"
    },
    {
      title: "Finance Tracker",
      subtitle: "Expense Management",
      description: "Tracks user expenses with TypeScript and MongoDB backend for comprehensive financial management.",
      techStack: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
      features: ["Expense Tracking", "Category Management", "Data Visualization", "Export Reports"],
      icon: DollarSign,
      gradient: "from-primary to-purple-500"
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
            A showcase of innovative solutions built with modern technologies and best practices
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="card-tech group relative overflow-hidden">
              {/* Background decoration */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${project.gradient} opacity-10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500`} />
              
              <div className="relative z-10">
                {/* Project Icon */}
                <div className={`w-16 h-16 mb-6 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <project.icon className="w-8 h-8 text-white" />
                </div>

                {/* Project Info */}
                <div className="space-y-4 mb-6">
                  <div>
                    <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                    <p className="text-primary font-medium">{project.subtitle}</p>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Features */}
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

                {/* Tech Stack */}
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

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 gradient-primary text-primary-foreground"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3"
          >
            View All Projects on GitHub
            <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;