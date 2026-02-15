import { Mail, Phone, Linkedin, Github, Heart } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      icon: Mail,
      href: "mailto:raghvendra1708@gmail.com",
      label: "Email"
    },
    {
      icon: Phone,
      href: "tel:+918696170827",
      label: "Phone"
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/raghvendra-sharma-ms",
      label: "LinkedIn"
    },
    {
      icon: Github,
      href: "https://github.com/Raghvendrasharma1708",
      label: "GitHub"
    }
  ];

  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-8">
          {/* Logo/Name */}
          <div>
            <h3 className="text-2xl font-bold text-gradient">Raghvendra Sharma</h3>
            <p className="text-muted-foreground mt-2">Data Scientist | Data Analyst </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-smooth group"
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-border">
            <p className="text-muted-foreground flex items-center justify-center space-x-2">
              <span>© 2024 Raghvendra Sharma. Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>and modern tech</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
