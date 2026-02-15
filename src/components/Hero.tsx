import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.png";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-accent/10 rounded-full blur-2xl animate-float" />
      </div>
      
      {/* Grid background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      {/* Main gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in">
            {/* Greeting with animated underline */}
            <div className="space-y-6">
              <div className="relative inline-block">
                <p className="text-primary font-semibold text-lg tracking-wide">Hello, I'm</p>
                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-transparent animate-pulse" />
              </div>
              
              {/* Enhanced name typography */}
              <div className="space-y-2">
                <h1 className="text-6xl lg:text-8xl font-black leading-none">
                  <span className="text-gradient bg-gradient-to-r from-primary via-primary-glow to-secondary bg-clip-text text-transparent animate-gradient">
                    Raghvendra
                  </span>
                </h1>
                <h2 className="text-5xl lg:text-7xl font-bold text-foreground/90 tracking-tight">
                  Sharma
                </h2>
              </div>
              
              {/* Role with typing effect styling */}
              <div className="relative">
                <p className="text-2xl lg:text-3xl font-medium text-muted-foreground">
                  Data Scientist | Data Analyst
                </p>
                <div className="absolute top-0 right-0 w-1 h-full bg-primary animate-pulse" />
              </div>
            </div>

            {/* Enhanced bio with better typography */}
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl font-light">
              Transforming complex data into strategic insights and predictive models. Specializing in <span className="text-primary font-medium">Machine Learning, SQL, and Python</span> to solve business problems through advanced analytics and <span className="text-accent font-medium">data-driven solutions</span>.
                </p>
              
              {/* Tech stack tags */}
             <div className="flex flex-wrap gap-2">
  {['Python', 'SQL', 'Machine Learning', 'Power BI', 'Scikit-learn','Numpy', 'Pandas',"Data Cleaning"].map((tech, index) => (
    <span
      key={tech}
      className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full border border-primary/20 animate-fade-in"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {tech}
    </span>
  ))}
</div>

            {/* Enhanced CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                onClick={() => scrollToSection("projects")}
                className="group relative overflow-hidden bg-gradient-to-r from-primary to-primary-glow text-primary-foreground font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <span className="relative z-10">View Projects</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-glow to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="group border-2 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <span>Contact Me</span>
              </Button>
            </div>
          </div>

          {/* Enhanced Profile Image */}
          <div className="flex justify-center lg:justify-end animate-slide-in-right">
            <div className="relative group">
              {/* Multiple glow layers */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary-glow to-secondary rounded-full blur-3xl opacity-20 animate-glow-pulse group-hover:opacity-40 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-gradient-to-br from-accent to-primary rounded-full blur-2xl opacity-10 animate-pulse delay-500" />
              
              {/* Image container with enhanced styling */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl animate-float group-hover:border-primary/50 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary/10" />
               <img
                src={profilePhoto}
                alt="Raghvendra Sharma - Data Scientist & Data Analyst"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              
              {/* Floating elements around image */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-ping opacity-75" />
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-secondary rounded-full animate-pulse delay-700" />
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="group cursor-pointer" onClick={() => scrollToSection("about")}>
          <div className="w-6 h-10 border-2 border-primary/60 rounded-full flex justify-center group-hover:border-primary transition-colors duration-300">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse group-hover:h-4 transition-all duration-300" />
          </div>
          <p className="text-xs text-muted-foreground mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Scroll
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
