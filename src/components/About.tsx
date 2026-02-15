import { Card } from "@/components/ui/card";
import { Calendar, MapPin, Building } from "lucide-react";

const About = () => {
  const experiences = [
    {
      company: "iSkylar Technologies",
      location: "Jaipur",
      role: "Business Analytics Intern",
      type: "On-site",
      period: "June–Aug 2025",
      icon: Building,
    },
    {
      company: "YHills",
      location: "Online",
      role: "Full Stack Web Developer",
      type: "Remote",
      period: "Dec 2024–Mar 2025",
      icon: Building,
    },
    {
      company: "Devtown",
      location: "Online",
      role: "Full Stack Developer",
      type: "Remote",
      period: "Sep 2024–Dec 2024",
      icon: Building,
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Currently pursuing B.Tech at Birla Institute of Technology, Mesra (final year, joined in 2022). 
            Passionate about creating innovative solutions and staying up-to-date with the latest technologies.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Education */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-primary mb-6">Education</h3>
            <Card className="card-tech space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-semibold">Bachelor of Technology</h4>
                  <p className="text-primary font-medium">Birla Institute of Technology, Mesra</p>
                  <div className="flex items-center space-x-2 text-muted-foreground mt-2">
                    <MapPin className="w-4 h-4" />
                    <span>Ranchi, India</span>
                  </div>
                  <p className="text-muted-foreground mt-2">
                    Final Year • Joined 2022
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Experience */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-primary mb-6">Experience</h3>
            <div className="space-y-4">
              {experiences.map((exp, index) => (
                <Card key={index} className="card-tech">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                      <exp.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold">{exp.role}</h4>
                      <p className="text-primary font-medium">{exp.company}</p>
                      <div className="flex items-center space-x-4 text-muted-foreground mt-2">
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                        <span>•</span>
                        <span>{exp.type}</span>
                      </div>
                      <p className="text-muted-foreground mt-1">{exp.period}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
