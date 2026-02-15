import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Database, Check } from "lucide-react";

const Services = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const features = [
    "Data modeling & database design",
    "SQL-based analysis & optimization",
    "Power BI/Tableau dashboard development",
    "ETL pipeline automation",
    "Predictive modeling & machine learning",
    "Statistical analysis & KPI tracking"
  ];

  return (
    <section id="services" className="py-20 bg-gradient-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            My <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From data modeling to predictive analytics — delivering end-to-end solutions that turn complex data into strategic business value
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
                <Database className="w-10 h-10 text-white" />
              </div>

              {/* Service Title */}
              <h3 className="text-3xl font-bold mb-4">
                Data Analytics & Business Intelligence
              </h3>

              {/* Service Description */}
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                End-to-end data solutions from database modeling to predictive analytics. I design data architectures, build automated dashboards, and develop ML models that drive measurable business impact — from 15% efficiency gains to 60% time savings.
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
                  View My Projects
                </Button>
                <Button
                  variant="outline"
                  onClick={() => scrollToSection("contact")}
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3"
                >
                  Contact Me
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
