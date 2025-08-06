import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, Palette, Zap, Check } from "lucide-react";

const Services = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const features = [
    "Custom website development",
    "Responsive design for all devices",
    "Modern UI/UX with latest technologies",
    "Performance optimization",
    "SEO-friendly implementation",
    "Maintenance and support"
  ];

  return (
    <section id="services" className="py-20 bg-gradient-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            My <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Specialized in creating modern, responsive web applications tailored to your unique needs
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="card-tech text-center relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-primary opacity-10 rounded-full -translate-y-16 translate-x-16" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-secondary opacity-10 rounded-full translate-y-12 -translate-x-12" />
            
            <div className="relative z-10">
              {/* Service Icon */}
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-primary flex items-center justify-center">
                <Code className="w-10 h-10 text-white" />
              </div>

              {/* Service Title */}
              <h3 className="text-3xl font-bold mb-4">
                Freelance Web Development
              </h3>

              {/* Service Description */}
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Personalized website development tailored to individual or business needs with specific features and modern design. 
                From concept to deployment, I deliver high-quality web solutions that drive results.
              </p>

              {/* Features Grid */}
              <div className="grid md:grid-cols-2 gap-4 mb-8 text-left">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-card-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={() => scrollToSection("projects")}
                  className="gradient-primary text-primary-foreground font-semibold px-8 py-3 glow hover:glow-lg transition-smooth"
                >
                  View My Work
                </Button>
                <Button
                  variant="outline"
                  onClick={() => scrollToSection("contact")}
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3"
                >
                  Get Started
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;